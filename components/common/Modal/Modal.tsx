import { XIcon } from '@/assets/svgs/common'
import { useModal } from '@/hooks/useModal'
import styled from '@emotion/styled'
import { useEffect } from 'react'
import Alphabets from './deco'

const Modal = () => {
  const { animation, modalDataState, closeModal } = useModal()
  useEffect(() => {
    if (modalDataState.isOpen) {
      document.body.style.top = `-${window.pageYOffset}px`
      document.body.style.position = 'fixed'
      document.body.style.overflow = 'hidden'
      document.body.style.width = '100%'
    }
    return () => {
      const heightScroll = parseInt(document.body.style.top || '0', 10) * -1
      document.body.style.removeProperty('position')
      document.body.style.removeProperty('overflow')
      document.body.style.removeProperty('width')
      document.body.style.removeProperty('top')
      window.scrollTo(0, heightScroll)
    }
  }, [modalDataState.isOpen])
  return (
    <>
      {modalDataState.isOpen && (
        <ModalDimmer theme={modalDataState.theme}>
          <ModalBody className={animation} theme={modalDataState.theme}>
            <ModalHeader>
              <ModalCloseButton onClick={() => closeModal()}>
                <XIcon
                  fill={modalDataState.theme === 'dark' ? '#ffffff' : '#000000'}
                />
              </ModalCloseButton>
            </ModalHeader>
            <Alphabets theme={modalDataState.theme} />
            <ModalContents>{modalDataState.content}</ModalContents>
          </ModalBody>
        </ModalDimmer>
      )}
    </>
  )
}

export default Modal

const ModalDimmer = styled.div<{ theme: 'dark' | 'white' }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  ${({ theme }) =>
    theme === 'dark'
      ? `background: linear-gradient(
    180deg,
    rgba(17, 17, 17, 0) 0%,
    rgba(17, 17, 17, 0.7) 18.15%,
    #111111 29.71%
  );`
      : 'background: rgba(255,255,255,0.7);'}
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`
const ModalBody = styled.div<{ theme: 'dark' | 'white' }>`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 580px;
  background-color: ${({ theme }) =>
    theme === 'dark' ? 'transparent' : '#ffffff'};
  border-radius: 10px;
  padding: 10px;
`
const ModalContents = styled.div`
  margin-top: 32px;
`
const ModalHeader = styled.div`
  position: relative;
  height: 48px;
`
const ModalCloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background: none;
  border: none;
  :hover {
    opacity: 50%;
    transition: 0.2s;
  }
`
