import { useModal } from '@/hooks/useModal'
import SignIn from '../SignIn'

const useSignInModal = () => {
  const { openModal, closeModal } = useModal()

  const modalData = {
    title: '로그인',
    content: <SignIn closeModal={closeModal} />,
    callback: () => alert('Modal Callback()'),
  }

  return {
    openModal: () => openModal(modalData),
    closeModal,
  }
}

export default useSignInModal
