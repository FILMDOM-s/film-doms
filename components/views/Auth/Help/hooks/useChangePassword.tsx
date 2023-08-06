import { OpenModalType } from '@/hooks/useModal'
import { usePureModal } from '@/hooks/usePureModal'
import { useUpdatePassword } from '@/services/myPage'
import styled from '@emotion/styled'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

type ChangePasswordProps = {
  currentPassword?: string
  newPassword?: string
  checkNewPassword?: string
}

const ChangePassword = () => {
  const { mutate: updatePassword } = useUpdatePassword()
  const { register, getValues, handleSubmit, setValue } =
    useForm<ChangePasswordProps>()

  const onSubmit = () => {
    const { currentPassword, newPassword, checkNewPassword } = getValues()

    if (!currentPassword) {
      toast.error('현재 비밀번호를 입력해주세요.')
      return
    }

    if (newPassword !== checkNewPassword) {
      toast.error('비밀번호가 일치하지 않습니다.')
      return
    }

    if (!newPassword || !checkNewPassword) {
      toast.error('비밀번호를 입력해주세요.')
      return
    }

    updatePassword(
      {
        newPassword: newPassword,
        oldPassword: currentPassword,
      },
      {
        onSuccess: () => {
          toast.success('비밀번호가 변경되었습니다.')
          setValue('currentPassword', '')
          setValue('newPassword', '')
          setValue('checkNewPassword', '')
        },
        onError() {
          toast.error('비밀번호 변경에 실패했습니다. 다시 시도해주세요.')
        },
      }
    )
  }
  return (
    <Container>
      <TitleText>비밀번호 변경</TitleText>
      <PasswordForm onSubmit={handleSubmit(onSubmit)}>
        <LabelText>현재 비밀번호</LabelText>
        <PasswordInput
          {...register('currentPassword')}
          name="currentPassword"
          type="password"
        />
        <LabelText>새 비밀번호</LabelText>
        <PasswordInput
          {...register('newPassword')}
          name="newPassword"
          type="password"
        />
        <LabelText>새 비밀번호 확인</LabelText>
        <PasswordInput
          {...register('checkNewPassword')}
          name="checkNewPassword"
          type="password"
        />
        <Button type="submit">변경</Button>
      </PasswordForm>
    </Container>
  )
}

const useChangePassword = () => {
  const { openModal, closeModal } = usePureModal()

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
  align-items: flex-start;
  padding: 10px 0;
  box-sizing: border-box;
  font-size: 14px;
  line-height: 1.5;
  color: #333333;
  margin: 0 auto;
  margin-top: 32px;
  margin-bottom: 32px;
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
  border-bottom: 1px solid #ddd;
  margin-bottom: 24px;
  box-sizing: border-box;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 14px; /* 100% */
  letter-spacing: 0.14px;
  outline: none;
  padding: 24px 0 16px 0;
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
  margin-top: 32px;
  margin-bottom: 32px;
`
