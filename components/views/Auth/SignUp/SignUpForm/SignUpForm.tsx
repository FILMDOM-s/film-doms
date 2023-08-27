import {
  type InputHTMLAttributes,
  type CSSProperties,
  useState,
  useEffect,
} from 'react'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { Divider, RenderIf } from '@/components/common'
import {
  EMAIL_REGEX,
  NICKNAME_REGEX,
  PASSWORD_REGEX,
} from '@/constants/auth/regex'
import {
  useCreateGoogleAccount,
  useCreateSignUpAccount,
  useFetchCheckEmailAuthCode,
  useFetchCheckEmailDuplicate,
  useFetchCheckNicknameDuplicate,
  useSendEmailAuthCode,
} from '@/services/auth'
import { colors, flex, flexCenter, font } from '@/styles/emotion'
import { INPUT_WIDTH } from './style'
import { getErrorMessage, isPatternError, isValidateError } from './utils'
import { ERROR_MESSAGE } from './constants'
import { useFetchSocialUserInfo } from '@/services/myPage'
import { useTerms } from '../../SignIn/hooks'
import MovieTagStateList from '@/components/views/MyPage/InterestMovieSection/MovieTagStateList'
import { lockState, loginState, loginTypeState } from '@/states'
import { useRecoilState } from 'recoil'

type CreateUserFormType = {
  email: string
  emailAuthCode: string
  password: string
  passwordCheck: string
  nickname: string
}

const SignUpForm = () => {
  const router = useRouter()
  const { from } = router.query
  const [serverInput, setServerInput] = useState({
    email: '',
    nickname: '',
    uuid: '',
    validEmail: false,
    nicknameDuplicate: false,
  })
  const [termsOfService, setTermsOfService] = useState(false)
  const [interestMovie, setInterestMovie] = useState<string[]>([])
  const { mutate: checkEmailDuplicate } = useFetchCheckEmailDuplicate()
  const { mutate: sendEmailAuthCode } = useSendEmailAuthCode()
  const { mutate: checkEmailAuthCode } = useFetchCheckEmailAuthCode()
  const { mutate: checkNicknameDuplicate } = useFetchCheckNicknameDuplicate()
  const { mutate: createSignUpAccount } = useCreateSignUpAccount()
  const { mutate: createGoogleAccount } = useCreateGoogleAccount()
  const [, setLock] = useRecoilState(lockState)
  const [, setIsLoggedIn] = useRecoilState(loginState)
  const [, setLoginType] = useRecoilState(loginTypeState)

  const { openModal } = useTerms()

  const { data: socialUserInfo } = useFetchSocialUserInfo()

  const {
    register,
    getValues,
    setValue,
    formState: { errors },
    handleSubmit,
  } = useForm<CreateUserFormType>({
    mode: 'onChange',
  })

  const onSubmit = () => {
    const { password, passwordCheck } = getValues()

    if (termsOfService === false) {
      toast.error('약관에 동의해주세요.')
      return
    }

    if (password !== passwordCheck) {
      toast.error('비밀번호가 일치하지 않습니다.')
      return
    }

    const { email, nickname, uuid } = serverInput

    if (interestMovie.length === 0) {
      toast.error('관심영화를 1개 이상 입력해주세요.')
      return
    }

    if (from === 'google') {
      createGoogleAccount(
        {
          nickname,
          favoriteMovies: interestMovie,
        },
        {
          onError: () => {
            toast.error('회원가입에 실패했습니다.')
            setIsLoggedIn(false)
          },
          onSuccess: () => {
            toast.success('회원가입이 완료되었습니다.', {
              icon: '👏',
              position: 'top-right',
            })
            setLock(false)
            setIsLoggedIn(true)
            setLoginType('done')
            router.replace('/')
          },
        }
      )
      return
    }

    createSignUpAccount(
      {
        email,
        password,
        nickname,
        favoriteMovies: interestMovie,
        emailAuthUuid: uuid,
      },
      {
        onError: () => {
          setIsLoggedIn(false)
          toast.error('회원가입에 실패했습니다.')
        },
        onSuccess: () => {
          setIsLoggedIn(true)
          setLoginType('done')
          toast.success('회원가입이 완료되었습니다.', {
            icon: '👏',
            position: 'top-right',
          })
          router.replace('/')
        },
      }
    )
  }

  const isEmpty = (value: string) => value === ''

  const handleEmailAuthCodeRequest = () => {
    const { email } = getValues()

    if (isEmpty(email)) {
      toast.error('이메일을 입력해주세요.')
      return
    }

    checkEmailDuplicate(email, {
      onSuccess: ({ result: { duplicate } }) => {
        if (duplicate) {
          toast.error('이미 가입된 이메일입니다.')
          return
        }

        setServerInput(prev => ({
          ...prev,
          email,
        }))

        sendEmailAuthCode(email, {
          onSuccess: ({ resultCode }) => {
            if (resultCode === 'SUCCESS') {
              toast.success('인증번호가 발송되었습니다.', {
                icon: '😎',
                position: 'top-right',
              })
            }
          },
        })
      },
    })
  }

  const handleEmailAuthCodeCheck = () => {
    const { emailAuthCode } = getValues()
    const { email } = serverInput

    if (isEmpty(email)) {
      toast.error('이메일을 재발송해주세요.')
      return
    }

    if (isEmpty(emailAuthCode)) {
      toast.error('인증번호를 입력해주세요.')
      return
    }

    checkEmailAuthCode(
      {
        email,
        authCode: emailAuthCode,
      },
      {
        onSuccess: ({ result: { uuid }, resultCode }) => {
          if (resultCode === 'SUCCESS') {
            setServerInput(prev => ({
              ...prev,
              uuid,
              validEmail: true,
            }))
            toast.success('인증이 완료되었습니다.')
          }
        },
      }
    )
  }

  const handleNicknameCheck = () => {
    const { nickname } = getValues()

    checkNicknameDuplicate(
      {
        nickname,
      },
      {
        onSuccess: ({ result: { duplicate } }) => {
          if (duplicate) {
            setServerInput(prev => ({
              ...prev,
              nicknameDuplicate: true,
            }))
            toast.error('이미 사용중인 닉네임입니다.')
            return
          }

          setServerInput(prev => ({
            ...prev,
            nickname,
            nicknameDuplicate: false,
          }))

          toast.success('사용가능한 닉네임입니다.')
        },
      }
    )
  }

  const handlePasswordCheckValidate = (
    passwordCheck: CreateUserFormType['passwordCheck'],
    { password }: CreateUserFormType
  ) => {
    return passwordCheck === password
  }

  const isValidateClientInput = () => {
    const { email, password, passwordCheck, nickname } = errors
    const isErrorInput = [email, password, passwordCheck, nickname].some(
      error => error
    )

    return !isErrorInput && termsOfService
  }

  const isValidateServerInput = () => {
    const { uuid, validEmail, nickname, nicknameDuplicate } = serverInput

    return (
      validEmail && !nicknameDuplicate && !isEmpty(uuid) && !isEmpty(nickname)
    )
  }

  const isValidateForm = () => {
    return isValidateClientInput() && isValidateServerInput()
  }

  useEffect(() => {
    if (from === 'google') {
      setIsLoggedIn(true)
      toast.success(
        '구글로 회원가입했어요! \n 반드시 추가 정보를 입력해주세요.',
        {
          icon: '👏',
          position: 'top-center',
        }
      )

      setLock(true)

      setServerInput(prev => ({
        ...prev,
        email: socialUserInfo?.email ?? '',
        uuid: 'google',
        validEmail: true,
      }))
      setValue('email', socialUserInfo?.email ?? '')
    }
  }, [from, setIsLoggedIn, setLock, setValue, socialUserInfo?.email])

  return (
    <Box>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Box>
          <Divider color={colors.primary.orange} />
          <Group>
            <InputBox>
              <Label required>이메일</Label>
              <Input
                {...register('email', {
                  pattern: {
                    value: EMAIL_REGEX,
                    message: ERROR_MESSAGE.EMAIL,
                  },
                })}
                type="email"
                name="email"
                placeholder="인증메일이 발송되니 이메일 주소를 정확하게 기입해주세요."
                required
                disabled={from === 'google'}
              />
              <RenderIf
                condition={from !== 'google'}
                render={
                  <OptionBox>
                    <Button
                      type="button"
                      onClick={handleEmailAuthCodeRequest}
                      disabled={!!errors.email?.type || from === 'google'}
                    >
                      이메일발송
                    </Button>
                  </OptionBox>
                }
              />
            </InputBox>
            <RenderIf
              condition={isPatternError(errors.email)}
              render={
                <Flex>
                  <Empty />
                  <ErrorText>{getErrorMessage(errors.email)}</ErrorText>
                </Flex>
              }
            />
          </Group>
          <RenderIf
            condition={!!serverInput.email && from !== 'google'}
            render={
              <Flex gap="1rem" padding="0px 0px 16px 0px">
                <InputBox>
                  <Label />
                  <Input
                    width="sm"
                    {...register('emailAuthCode')}
                    type="password"
                    required
                    autoComplete="off"
                  />
                  <Spacing />
                  <Button type="button" onClick={handleEmailAuthCodeCheck}>
                    인증번호 확인
                  </Button>
                </InputBox>
              </Flex>
            }
          />
          <Divider color={colors.grey[100]} size={1} />
          <RenderIf
            condition={from !== 'google'}
            render={
              <>
                <Group>
                  <InputBox>
                    <Label required>비밀번호</Label>
                    <Input
                      {...register('password', {
                        pattern: {
                          value: PASSWORD_REGEX,
                          message: ERROR_MESSAGE.PASSWORD,
                        },
                      })}
                      type="password"
                      name="password"
                      minLength={8}
                      maxLength={100}
                      placeholder="영문 대,소문자, 숫자, 특수문자를 포함해 8자리 이상으로 기입해주세요."
                      required
                      autoComplete="off"
                      disabled={from === 'google'}
                    />
                  </InputBox>
                  <RenderIf
                    condition={isPatternError(errors.password)}
                    render={
                      <Flex>
                        <Empty />
                        <ErrorText>
                          {getErrorMessage(errors.password)}
                        </ErrorText>
                      </Flex>
                    }
                  />
                </Group>
                <Divider color={colors.grey[100]} size={1} />
                <Group>
                  <InputBox>
                    <Label required>비밀번호확인</Label>
                    <Input
                      {...register('passwordCheck', {
                        validate: handlePasswordCheckValidate,
                      })}
                      type="password"
                      name="passwordCheck"
                      minLength={8}
                      maxLength={100}
                      required
                      autoComplete="off"
                      disabled={from === 'google'}
                    />
                  </InputBox>
                  <RenderIf
                    condition={isValidateError(errors.passwordCheck)}
                    render={
                      <Flex>
                        <Empty />
                        <ErrorText>{ERROR_MESSAGE.PASSWORD_CHECK}</ErrorText>
                      </Flex>
                    }
                  />
                </Group>
                <Divider color={colors.grey[100]} size={1} />
              </>
            }
          />
          <Group>
            <InputBox>
              <Label required>닉네임</Label>
              <Input
                {...register('nickname', {
                  pattern: NICKNAME_REGEX,
                })}
                type="text"
                minLength={2}
                maxLength={20}
                placeholder="닉네임은 2자 이상 20자 이하로 기입해주세요."
                required
              />
              <OptionBox>
                <Button
                  type="button"
                  onClick={handleNicknameCheck}
                  disabled={
                    getValues('nickname')?.length < 2 ||
                    getValues('nickname')?.length > 20
                  }
                >
                  중복확인
                </Button>
              </OptionBox>
            </InputBox>
            <RenderIf
              condition={serverInput.nicknameDuplicate}
              render={
                <Flex>
                  <Empty />
                  <ErrorText>{ERROR_MESSAGE.NICKNAME_EXIST}</ErrorText>
                </Flex>
              }
            />
          </Group>
          <Divider color={colors.grey[100]} size={1} />
        </Box>
      </Form>
      <Group>
        <InputBox>
          <Label>관심영화</Label>
          <MovieTagStateList
            interestMovieList={interestMovie}
            setInterestMovieList={setInterestMovie}
          />
        </InputBox>
      </Group>
      <Divider color={colors.grey[100]} size={1} />
      <Group>
        <InputBox>
          <Label required>이용약관</Label>
          <Flex gap={'10px'}>
            <TermsCheck
              type="checkbox"
              required
              onChange={() => {
                setTermsOfService(!termsOfService)
              }}
              checked={termsOfService}
            />
            <Text>
              Film Dom&#39;s 이용을 위한 개인정보 제공 및 수집에 동의합니다.
            </Text>
          </Flex>
          <OptionBox>
            <MoreButton
              type="button"
              onClick={() => {
                openModal()
              }}
            >
              자세히
            </MoreButton>
          </OptionBox>
        </InputBox>
      </Group>
      <Box
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '2rem',
        }}
      >
        <SignUpButton
          type="button"
          disabled={!isValidateForm()}
          onClick={() => onSubmit()}
        >
          가입하기
        </SignUpButton>
      </Box>
    </Box>
  )
}

const Spacing = styled.div<{ size?: CSSProperties['width'] }>`
  width: ${({ size = '1rem' }) => size};
`

const Empty = styled.div`
  width: 160px;
  height: 10px;
`

const Flex = styled.div<{
  gap?: CSSProperties['gap']
  padding?: CSSProperties['padding']
}>`
  display: flex;
  gap: ${({ gap }) => gap};
  padding: ${({ padding }) => padding};
  align-items: center;
`

const SignUpButton = styled.button`
  ${font({ size: '24px', weight: '600' })}
  width: 480px;
  height: fit-content;
  padding: 16px 0;
  color: ${colors.primary.white};
  background-color: ${colors.primary.orange};
`

const MoreButton = styled.button`
  color: #ff9a7c;
  text-decoration: underline;
`

const Text = styled.span`
  ${font({ weight: '600' })}
`

const ErrorText = styled.span`
  ${font({})}
  color: ${colors.primary.orange};
`

const Button = styled.button`
  width: 120px;
  height: 50px;
  border: 1px solid ${colors.primary.orange};
  color: ${colors.primary.orange};
`

const OptionBox = styled.div`
  ${flexCenter}
  margin-left: auto;
`

const Input = styled.input<{
  type: InputHTMLAttributes<HTMLInputElement>['type']
  width?: 'sm' | 'md' | 'lg'
}>`
  ${({ width = 'md' }) => `width: ${INPUT_WIDTH[width]}`}

  ${({ type }) => {
    if (type === 'checkbox') {
      return `
        flex: 0;
      `
    }
  }}
`

const TermsCheck = styled.input`
  appearance: none;
  color: black;
  background: transparent;
  border: 2px solid black;
  width: 18px;
  height: 18px;
  &:checked {
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='black' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 150% 150%;
    background-position: 50%;
    background-repeat: no-repeat;
  }
`

const Label = styled.label<{ required?: boolean }>`
  ${flex({ align: 'center' })}
  width: 160px;
  ${({ required }) =>
    required &&
    `
      ::after {
        content: '*';
        color: ${colors.primary.orange};
      }
    `}
`

const InputBox = styled.div`
  width: 100%;
  ${flex({ align: 'center' })}
`

const Group = styled.div`
  ${flex({ direction: 'column', justify: 'center' })}
  gap: 1rem;
  min-height: 80px;
  padding: '16px 0px';
`

const Box = styled.div`
  width: 100%;
`

const Form = styled.form`
  ${flex({ direction: 'column', align: 'center' })}
  width: 100%;
  gap: 112px;
`

export default SignUpForm
