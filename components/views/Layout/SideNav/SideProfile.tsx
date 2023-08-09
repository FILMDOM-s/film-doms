import styled from '@emotion/styled'
import { IconX } from '@tabler/icons-react'
import SideProfileList from './SideProfileList'
import { css } from '@emotion/react'

const SideProfile = ({
  isShow,
  onClose,
}: {
  isShow: boolean
  onClose: VoidFunction
}) => {
  return (
    <SideProfileContainer show={isShow}>
      <SideProfileButtonWrapper>
        <IconX
          css={XIconStyle}
          stroke={2}
          size={30}
          onClick={() => {
            onClose()
          }}
        />
      </SideProfileButtonWrapper>
      <SideProfileList />
    </SideProfileContainer>
  )
}

export default SideProfile

const SideProfileContainer = styled.div<{ show: boolean }>`
  display: block;
  position: fixed;
  top: 100px;
  right: 40px;
  width: 320px;
  height: 246px;
  margin: 0;
  list-style: none;
  background-color: white;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.15);
  transition-duration: 0.25s;
  z-index: 100;
  opacity: ${props => (props.show ? '1' : '0')};
`

const SideProfileButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem 1rem;
`

const XIconStyle = css`
  cursor: pointer;
`
