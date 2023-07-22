import { useModal, OpenModalType } from '@/hooks/useModal'
import styled from '@emotion/styled'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

type WithdrawalProps = {
  password?: string
  checkPassword?: string
}

const Withdrawal = () => {
  const { register, getValues, handleSubmit } = useForm<WithdrawalProps>()

  const onSubmit = () => {
    const { password, checkPassword } = getValues()

    if (password !== checkPassword) {
      toast.error('비밀번호가 일치하지 않습니다.')
      return
    }

    if (!password || !checkPassword) {
      toast.error('비밀번호를 입력해주세요.')
      return
    }
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
          스터닝 계정은 라우드소싱, 노트폴리오 등 스터닝이 운영하는 모든
          서비스를 함께 이용하는 통합 계정입니다. 스터닝 계정을 탈퇴하면 계정
          정보 및 현재 이용중인 세부 서비스의 모든 정보가 삭제됩니다. 탈퇴한
          후에는 더 이상 스터닝 계정으로 로그인 할 수 없으므로, 모든 세부
          서비스들도 이용할 수 없게 됩니다. 탈퇴 후 3개월 내 동일
          아이디(이메일)로 재가입 불가합니다. 탈퇴된 스터닝 정보와 서비스
          이용기록 등은 복구할 수 없으니 신중하게 선택하시길 바랍니다.
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
          안전한 탈퇴를 위해 본인 확인 절차를 진행합니다. 비밀번호를 정확하게
          입력해주세요.
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
