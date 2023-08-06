import { XIcon } from '@/assets/svgs/common'
import { usePureModal } from '@/hooks/usePureModal'
import styled from '@emotion/styled'
import { useEffect } from 'react'

const PureModal = () => {
  const { animation, pureModalDataState, closeModal } = usePureModal()
  useEffect(() => {
    if (pureModalDataState.isOpen) {
      document.body.style.top = `-${window.scrollY}px`
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
  }, [pureModalDataState.isOpen])
  return (
    <>
      {pureModalDataState.isOpen && (
        <ModalDimmer theme={pureModalDataState.theme}>
          <ModalBodyWrapper>
            <ModalHeader>
              <ModalCloseButton onClick={() => closeModal()}>
                <XIcon fill={'#ffffff'} />
              </ModalCloseButton>
            </ModalHeader>
            <ModalBody className={animation} theme={pureModalDataState.theme}>
              <ModalContents>{pureModalDataState.content}</ModalContents>
            </ModalBody>
          </ModalBodyWrapper>
        </ModalDimmer>
      )}
    </>
  )
}

export default PureModal

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
      : 'background: rgba(0, 0, 0, 0.40);'}
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`

const ModalBodyWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const ModalBody = styled.div<{ theme: 'dark' | 'white' }>`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 480px;
  background-color: ${({ theme }) =>
    theme === 'dark' ? 'transparent' : '#ffffff'};
`
const ModalContents = styled.div`
  margin-top: 32px;
`
const ModalHeader = styled.div`
  width: 100%;
  position: relative;
  height: 20px;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 16px;
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
