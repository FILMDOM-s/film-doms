import { useModal, OpenModalType } from '@/hooks/useModal'
import { useUpdatePassword } from '@/services/myPage'
import styled from '@emotion/styled'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

type ChangePasswordProps = {
  newPassword?: string
  checkPassword?: string
}

const ChangePassword = () => {
  const { mutate: updatePassword } = useUpdatePassword()
  const { register, watch, getValues, handleSubmit } =
    useForm<ChangePasswordProps>()

  const onSubmit = () => {
    const { newPassword, checkPassword } = getValues()

    if (newPassword !== checkPassword) {
      toast.error('비밀번호가 일치하지 않습니다.')
      return
    }

    if (!newPassword || !checkPassword) {
      toast.error('비밀번호를 입력해주세요.')
      return
    }

    updatePassword(
      {
        newPassword: newPassword,
        oldPassword: newPassword,
      },
      {
        onSuccess: () => {
          toast.success('비밀번호가 변경되었습니다.')
        },
        onError(error, variables, context) {
          toast.error('비밀번호 변경에 실패했습니다. 다시 시도해주세요.')
        },
      }
    )
  }
  return (
    <Container>
      <TitleText>비밀번호 재설정</TitleText>
      <OpacityText>필름덤즈에서 사용할 비밀번호를 입력해 주세요.</OpacityText>
      <PasswordForm onSubmit={handleSubmit(onSubmit)}>
        <LabelText>새로운 비밀번호</LabelText>
        <PasswordInput
          {...register('newPassword')}
          name="newPassword"
          type="password"
        />
        <LabelText>비밀번호 확인</LabelText>
        <PasswordInput
          {...register('checkPassword')}
          name="checkPassword"
          type="password"
        />
        <Button type="submit">비밀번호 변경</Button>
      </PasswordForm>
    </Container>
  )
}

const useChangePassword = () => {
  const { openModal, closeModal } = useModal()

  const modalData: OpenModalType = {
    title: '비밀번호 변경',
    content: <ChangePassword />,
    callback: () => alert('Modal Callback()'),
    theme: 'white',
  }

  return {
    openModal: () => openModal(modalData),
    closeModal,
  }
}

export default useChangePassword

const Container = styled.div`
  width: 360px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 20px;
  box-sizing: border-box;
  font-size: 14px;
  line-height: 1.5;
  color: #333333;
  margin: 0 auto;
`

const TitleText = styled.div`
  color: #111;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 14px; /* 58.333% */
  letter-spacing: 0.24px;
  margin-bottom: 40px;
`

const OpacityText = styled.div`
  color: #aaa;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 14px; /* 100% */
  letter-spacing: 0.14px;
  margin-bottom: 64px;
`

const LabelText = styled.div`
  color: #111;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 14px; /* 100% */
  letter-spacing: 0.14px;
`

const PasswordForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const PasswordInput = styled.input`
  width: 100%;
  height: 40px;
  border-bottom: 1px solid #ddd;
  margin-bottom: 24px;
  box-sizing: border-box;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 14px; /* 100% */
  letter-spacing: 0.14px;
  outline: none;
`

const Button = styled.button`
  width: 100%;
  height: 40px;
  background-color: #111;
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 14px; /* 100% */
  letter-spacing: 0.14px;
  border-radius: 4px;
  outline: none;
  border: none;
  cursor: pointer;
`
