import {
  type InputHTMLAttributes,
  type CSSProperties,
  type FormEvent,
  useState,
  useRef,
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
  useCreateSignUpAccount,
  useFetchCheckEmailAuthCode,
  useFetchCheckEmailDuplicate,
  useSendEmailAuthCode,
} from '@/services/auth'
import { colors, flex, flexCenter, font } from '@/styles/emotion'
import { INPUT_WIDTH } from './style'
import { getErrorMessage, isPatternError, isValidateError } from './utils'
import { ERROR_MESSAGE } from './constants'

type CreateUserFormType = {
  email: string
  emailAuthCode: string
  password: string
  passwordCheck: string
  nickname: string
  interestMovie: string
  termsOfService: boolean
}

const FLAG = true

const SignUpForm = () => {
  const router = useRouter()
  const validateInfo = useRef({
    email: '',
    nickname: '',
    uuid: '',
    validEmail: false,
  }).current
  const [emailVerification, setEmailVerification] = useState(false)
  const [value, setValue] = useState<string>('')
  const { mutate: checkEmailDuplicate } = useFetchCheckEmailDuplicate()
  const { mutate: sendEmailAuthCode } = useSendEmailAuthCode()
  const { mutate: checkEmailAuthCode } = useFetchCheckEmailAuthCode()
  const { mutate: addUser } = useCreateSignUpAccount({
    onError: () => {
      toast.error('회원가입에 실패했습니다.')
    },
    onSuccess: () => {
      toast.success('회원가입이 완료되었습니다.', {
        icon: '👏',
        position: 'top-right',
      })
      router.push('/auth/signin')
    },
  })

  const {
    register,
    getValues,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<CreateUserFormType>({
    mode: 'onChange',
  })

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const { nickname, email, password, passwordCheck, termsOfService } =
      getValues()

    if (termsOfService === false) {
      alert('약관에 동의해주세요.')
      return
    }

    if (!emailVerification) {
      alert('이메일 인증을 완료해주세요.')
      return
    }

    if (password !== passwordCheck) {
      alert('비밀번호가 일치하지 않습니다.')
      return
    }

    // addUser({
    //   nickname,
    //   email: email,
    //   password: password,
    //   favoriteMovies: [],
    // })
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
          alert('이미 가입된 이메일입니다.')
          return
        }

        validateInfo.email = email

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
    const { email } = validateInfo

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
            validateInfo.uuid = uuid
            validateInfo.validEmail = true
            toast.success('인증이 완료되었습니다.')
          }
        },
      }
    )
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  const handleInterestMovieValidate = (
    interestMovie: CreateUserFormType['interestMovie']
  ) => {
    const interestMovieList = interestMovie.split(',')

    return interestMovieList.length <= 5
  }

  const handlePasswordCheckValidate = (
    passwordCheck: CreateUserFormType['passwordCheck'],
    { password }: CreateUserFormType
  ) => {
    return passwordCheck === password
  }

  return (
    <Form onSubmit={onSubmit}>
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
            />
            <OptionBox>
              <Button
                type="button"
                onClick={handleEmailAuthCodeRequest}
                disabled={!!errors.email?.type}
              >
                이메일발송
              </Button>
            </OptionBox>
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
        <Divider color={colors.grey[100]} size={1} />
        <Group>
          <InputBox>
            <Label />
            <Input
              width="sm"
              {...register('emailAuthCode')}
              type="password"
              required
            />
            <Button type="button" onClick={handleEmailAuthCodeCheck}>
              인증번호 확인
            </Button>
          </InputBox>
        </Group>
        <Divider color={colors.grey[100]} size={1} />
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
              placeholder="비밀번호는 영문과 숫자를 포함해 8자리 이상으로 기입해주세요."
              required
            />
          </InputBox>
          <RenderIf
            condition={isPatternError(errors.password)}
            render={
              <Flex>
                <Empty />
                <ErrorText>{getErrorMessage(errors.password)}</ErrorText>
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
              required
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
        <Group>
          <InputBox>
            <Label required>닉네임</Label>
            <Input
              {...register('nickname', {
                pattern: NICKNAME_REGEX,
              })}
              type="text"
              placeholder="닉네임은 2자 이상으로 입력하세요."
              required
            />
            <OptionBox>
              <Button type="button">중복확인</Button>
            </OptionBox>
          </InputBox>
          <RenderIf
            condition={FLAG}
            render={
              <Flex>
                <Empty />
                <ErrorText>{ERROR_MESSAGE.NICKNAME_EXIST}</ErrorText>
              </Flex>
            }
          />
        </Group>
        <Divider color={colors.grey[100]} size={1} />
        <Group>
          <InputBox>
            <Label>관심영화</Label>
            <Input
              {...register('interestMovie', {
                validate: handleInterestMovieValidate,
              })}
              type="text"
              name="interestMovie"
              placeholder="좋아하는 영화 제목 최대 5가지를 기입해주세요."
            />
          </InputBox>
          <RenderIf
            condition={isValidateError(errors.interestMovie)}
            render={
              <Flex>
                <Empty />
                <ErrorText>{ERROR_MESSAGE.INTEREST_MOVIE}</ErrorText>
              </Flex>
            }
          />
        </Group>
        <Divider color={colors.grey[100]} size={1} />
        <Group>
          <InputBox>
            <Label required>이용약관</Label>
            <Flex gap={'10px'}>
              <Input {...register('termsOfService')} type="checkbox" required />
              <Text>
                Film Dom&#39;s 이용을 위한 개인정보 제공 및 수집에 동의합니다.
              </Text>
            </Flex>
            <OptionBox>
              <MoreButton type="button">자세히</MoreButton>
            </OptionBox>
          </InputBox>
        </Group>
      </Box>
      <SignUpButton type="submit">가입하기</SignUpButton>
    </Form>
  )
}

const Empty = styled.div`
  width: 160px;
  height: 10px;
`

const Flex = styled.div<{ gap?: CSSProperties['gap'] }>`
  display: flex;
  gap: ${({ gap }) => gap};
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
  padding: 16px 0;
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
