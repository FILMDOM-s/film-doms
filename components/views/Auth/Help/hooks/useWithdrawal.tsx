import { useModal, OpenModalType } from '@/hooks/useModal'
import { useDeleteUser } from '@/services/myPage'
import styled from '@emotion/styled'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

type WithdrawalProps = {
  password?: string
  checkPassword?: string
}

const Withdrawal = () => {
  const { mutate } = useDeleteUser()
  const { register, getValues, handleSubmit } = useForm<WithdrawalProps>()

  const onSubmit = () => {
    const { password, checkPassword } = getValues()

    if (!password || !checkPassword) {
      toast.error('비밀번호를 입력해주세요.')
      return
    }

    if (password !== checkPassword) {
      toast.error('비밀번호가 일치하지 않습니다.')
      return
    }

    mutate(
      {
        password: password,
      },
      {
        onSuccess: () => {
          toast.success('회원탈퇴가 완료되었습니다.')
        },
      }
    )
  }
  return (
    <Container>
      <TitleText>회원탈퇴</TitleText>
      <OpacityText>신중하게 탈퇴를 결정해주세요.</OpacityText>
      <PasswordForm onSubmit={handleSubmit(onSubmit)}>
        <LabelText
          style={{
            marginBottom: '8px',
          }}
        >
          탈퇴 전, 꼭 확인하세요!
        </LabelText>
        <OpacityText>
          탈퇴 후 계정은 7일간 비활성화 상태로 변하며, 7일 사이에 언제든지
          로그인 하면 계정은 다시 활성화 됩니다. 7일 이후에는 계정이 삭제되며,
          작성한 글, 댓글, 마이페이지에 보이는 모든 회원 정보가 삭제됩니다.
          계정이 삭제된 이후로는 서비스 이용 기록은 복구가 불가능하니 신중하게
          선택하여 주세요
        </OpacityText>
        <LabelText
          style={{
            marginBottom: '8px',
          }}
        >
          본인인증하기
        </LabelText>
        <OpacityText
          style={{
            marginBottom: '24px',
          }}
        >
          탈퇴 요청이 올바른 요청인지 확인하기 위하여 비밀번호를 재확인 합니다.
          비밀번호를 입력해 주세요.
        </OpacityText>
        <LabelText>비밀번호</LabelText>
        <PasswordInput
          {...register('password')}
          name="password"
          type="password"
        />
        <LabelText>비밀번호 확인</LabelText>
        <PasswordInput
          {...register('checkPassword')}
          name="password"
          type="password"
        />
        <Button type="submit">탈퇴하기</Button>
      </PasswordForm>
    </Container>
  )
}

const useWithdrawal = () => {
  const { openModal, closeModal } = useModal()

  const modalData: OpenModalType = {
    title: '회원 탈퇴',
    content: <Withdrawal />,
    callback: () => alert('Modal Callback()'),
    theme: 'white',
  }

  return {
    openModal: () => openModal(modalData),
    closeModal,
  }
}

export default useWithdrawal

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
  font-size: 13px;
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
