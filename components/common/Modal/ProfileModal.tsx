import { useProfileModal } from '@/hooks/useProfileModal'
import styled from '@emotion/styled'
import { Suspense, useEffect } from 'react'
import { IconX } from '@tabler/icons-react'
import { ErrorBoundary } from 'react-error-boundary'

const ProfileModal = () => {
  const { animation, profileModalDataState, closeModal } = useProfileModal()

  useEffect(() => {
    if (profileModalDataState.isOpen) {
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
  }, [profileModalDataState.isOpen])
  return (
    <>
      {profileModalDataState.isOpen && (
        <ModalDimmer theme={profileModalDataState.theme}>
          <ModalBody
            className={animation}
            theme={profileModalDataState.theme}
            clientX={profileModalDataState.clientX ?? 0}
            clientY={profileModalDataState.clientY ?? 0}
          >
            <ModalCloseButton onClick={() => closeModal()}>
              <IconX
                css={{
                  cursor: 'pointer',
                }}
                stroke={2}
                size={20}
              />
            </ModalCloseButton>
            <ErrorBoundary fallback={null}>
              <Suspense fallback={null}>
                <ModalContents>{profileModalDataState.content}</ModalContents>
              </Suspense>
            </ErrorBoundary>
          </ModalBody>
        </ModalDimmer>
      )}
    </>
  )
}

export default ProfileModal

const ModalDimmer = styled.div<{ theme: 'dark' | 'white' }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`

const ModalBody = styled.div<{
  theme: 'dark' | 'white'
  clientX: number
  clientY: number
}>`
  width: 320px;
  height: 264px;
  position: absolute;
  top: ${props => props.clientY + 30}px;
  left: ${props => props.clientX - 320}px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);
  background-color: #ffffff;
`
const ModalContents = styled.div`
  margin-top: 26px;
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
  padding: 6px 6px 0 0;
`
