import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { FormError } from '@/components/common/FormError'
import styled from '@emotion/styled'
import api from '@/services/api'

export type CreateUserFormType = {
  username: string
  email: string
  nickname: string
  password: string
  passwordAgain: string
  agreeCheckbox: string
}

export default function SignUp() {
  const router = useRouter()
  const [_, setUsernameVerification] = useState(false)
  const [emailVerification, setEmailVerification] = useState(false)

  const { mutate: addUser } = useMutation<
    unknown,
    unknown,
    Omit<CreateUserFormType, 'passwordAgain' | 'agreeCheckbox'>,
    any
  >(
    item =>
      fetch(`/api/add-user`, {
        method: 'POST',
        body: JSON.stringify({ item }),
      })
        .then(res => res.json())
        .then(data => data.items),
    {
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
    }
  )

  const {
    register,
    getValues,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<CreateUserFormType>({
    mode: 'onChange',
  })
  const onSubmit = async () => {
    const {
      username,
      email,
      password,
      passwordAgain,
      agreeCheckbox,
      nickname,
    } = getValues()

    if (!emailVerification) {
      alert('이메일 인증을 완료해주세요.')
      return
    }

    if (password !== passwordAgain) {
      alert('비밀번호가 일치하지 않습니다.')
      return
    }

    if (!agreeCheckbox) {
      alert('약관에 동의해주세요.')
      return
    }
    addUser({
      username: username,
      email: email,
      password: password,
      nickname: nickname,
    })
  }

  const handleUsernameVerification = async () => {
    const { username } = getValues()
    const res = await api.get(
      `/api/v1/account/check/username?username=${username}`,
      {
        method: 'GET',
      }
    )

    if (res) {
      alert('이미 있는 유저명입니다.')
      return
    } else {
      setUsernameVerification(true)
      toast.success('사용해도 좋은 유저명입니다.', {
        icon: '👏',
        position: 'top-right',
      })
    }
  }

  const handleEmailVerification = async () => {
    const { email } = getValues()
    const res = await api.get(`/api/v1/account/check/email?email=${email}`, {
      method: 'GET',
    })

    if (res) {
      alert('이미 가입된 이메일입니다.')
      return
    } else {
      setEmailVerification(true)
      toast.success('이메일 인증이 완료되었습니다.', {
        icon: '👏',
        position: 'top-right',
      })
    }
  }

  return (
    <Container>
      <SignUpForm onSubmit={handleSubmit(onSubmit)}>
        <InputLabel>📒 유저명</InputLabel>
        <ButtonContainer>
          <SignUpInput
            {...register('username', {
              required: '유저명을 입력하세요',
              pattern: /^[가-힣|]+$/,
            })}
            name="name"
            type="text"
            placeholder="Username"
            required
            autoComplete="true"
          />
          <CommonButton
            color="black"
            onClick={() => {
              handleUsernameVerification()
            }}
            type="button"
          >
            중복 확인
          </CommonButton>
        </ButtonContainer>
        {errors.username?.type === 'pattern' && (
          <FormError errorMessage="한글만 입력하세요." />
        )}
        {errors.username?.message && (
          <FormError errorMessage={errors.username?.message} />
        )}
        <InputLabel>📨 이메일</InputLabel>
        <ButtonContainer>
          <SignUpInput
            {...register('email', {
              required: '이메일을 입력해주세요',
              pattern:
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
            name="email"
            type="email"
            placeholder="Email"
            required
            autoComplete="true"
          />
          <CommonButton
            color="black"
            onClick={() => {
              handleEmailVerification()
            }}
            type="button"
          >
            중복 확인
          </CommonButton>
        </ButtonContainer>
        {(errors.email?.type === 'pattern' && (
          <FormError errorMessage="올바른 이메일 형식을 입력해주세요" />
        )) ||
          (errors.email?.message && (
            <FormError errorMessage={errors.email?.message} />
          ))}
        <InputLabel>🌈 닉네임</InputLabel>
        <SignUpInput
          {...register('nickname', {
            required: '닉네임을 입력해주세요',
            pattern: /^[a-zA-Z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣|]+$/,
          })}
          name="nickname"
          type="nickname"
          required
          placeholder="Nickname"
          autoComplete="true"
        />
        {errors.nickname?.type === 'pattern' && (
          <FormError errorMessage="대소문자, 한글, 숫자를 입력해주세요" />
        )}
        {errors.nickname?.message && (
          <FormError errorMessage={errors.nickname?.message} />
        )}
        <InputLabel>⚙️ 비밀번호</InputLabel>
        <SignUpInput
          {...register('password', {
            required: '비밀번호를 입력해주세요',
            pattern:
              /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,14}$/,
          })}
          name="password"
          type="password"
          required
          placeholder="Password"
          autoComplete="true"
        />
        {errors.password?.type === 'pattern' && (
          <FormError errorMessage="대소문자, 숫자, 특수문자(@$!%*?&) 8-14자리를 입력해주세요" />
        )}
        {errors.password?.message && (
          <FormError errorMessage={errors.password?.message} />
        )}
        <InputLabel>⚙️ 비밀번호 재입력</InputLabel>
        <SignUpInput
          {...register('passwordAgain', {
            required: '비밀번호를 재입력해주세요',
            pattern:
              /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,14}$/,
          })}
          name="passwordAgain"
          type="password"
          placeholder="Password Again"
          required
          autoComplete="true"
        />
        {(watch('passwordAgain') &&
          watch('passwordAgain') !== watch('password') && (
            <FormError errorMessage="비밀번호가 일치하지 않습니다" />
          )) ||
          (errors.passwordAgain?.message && (
            <FormError errorMessage={errors.passwordAgain?.message} />
          ))}
        <InputLabel>⚙️ 비밀번호 재입력</InputLabel>
        <label className="ml-2 mt-4 text-sm text-darkGray flex items-center">
          <input
            {...register('agreeCheckbox')}
            name="agreeCheckbox"
            type="checkbox"
            className="mr-2 mt-0.5"
          />
          Film Dom&#39;s 이용을 위한 개인정보 제공 및 수집에 동의합니다.
        </label>
        <CommonButton
          color="black"
          type="submit"
          onSubmit={handleSubmit(onSubmit)}
        >
          계정 생성
        </CommonButton>
      </SignUpForm>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  padding-top: 5rem;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const SignUpForm = styled.form`
  display: grid;
  gap: 0.5rem;
  margin-top: 1rem;
  width: 380px;
`

const InputLabel = styled.div`
  font-size: 1rem;
  font-weight: bold;
  padding: 0.5rem 0;
`

const SignUpInput = styled.input`
  flex-grow: 1;
  height: 52px;
  border-radius: 0.25rem;
  border: 1px solid #d8d4d4;
  padding: 0 1rem;
  font-size: 1rem;
  cursor: pointer;
  outline: none;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.2);
`

const CommonButton = styled.button<{ color: string }>`
  border-radius: 0.25rem;
  padding: 0.3rem 1rem;
  margin-left: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  color: ${props => props.color};
  border: 2px solid ${props => props.color};
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.2);
  &:hover {
    background-color: ${props => props.color};
    color: white;
  }
`
