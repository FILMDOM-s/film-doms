import { Divider } from '@/components/common'
import { colors, font } from '@/styles/emotion'
import styled from '@emotion/styled'
import Header from '../Header'

import { useForm } from 'react-hook-form'
import { EMAIL_REGEX } from '@/constants/auth/regex'
import { useFindPassword } from '@/services/auth'
import toast from 'react-hot-toast'

type FindPasswordProps = {
  email: string
}

const Password = () => {
  const { mutate: findPassword } = useFindPassword()

  const {
    register,
    getValues,
    formState: { errors },
    handleSubmit,
  } = useForm<FindPasswordProps>({
    mode: 'onChange',
  })
  const onSubmit = () => {
    const { email } = getValues()
    findPassword(
      { email },
      {
        onSuccess: () => {
          toast(
            '임시 비밀번호를 전송했습니다! 로그인 후 비밀번호를 변경해주세요.',
            {
              icon: '👏',
              position: 'top-center',
            }
          )
        },
        onError: err => {
          toast.error('가입한 이메일이 아니거나 잘못된 이메일입니다.', {
            icon: '😥',
            position: 'top-center',
          })
        },
      }
    )
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Divider limit="56px" size={4} color={colors.primary.orange} />
      <Header title="PW 찾기" />
      <Divider color={colors.primary.orange} />
      <Input
        {...register('email', {
          required: true,
          pattern: {
            value: EMAIL_REGEX,
            message: '올바른 이메일 형식이 아니에요!',
          },
        })}
        type="email"
        name="email"
        placeholder="가입한 이메일 주소를 입력해주세요."
        required
      />
      {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
      <Button type="submit">비밀번호 전송</Button>
    </Form>
  )
}

export default Password

const Form = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 24px;
`

const Input = styled.input`
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  padding: 0 16px;
  outline: none;
`

const Button = styled.button`
  font-size: 20px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  width: 100%;
  height: 50px;
  background-color: #ff5414;
  color: #f7f7f5;
  margin-top: 32px;
`

const ErrorText = styled.span`
  ${font({})}
  color: ${colors.primary.orange};
`
