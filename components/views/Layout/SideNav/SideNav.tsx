import styled from '@emotion/styled'
import { IconX } from '@tabler/icons-react'
import SideNavList from './SideNavList'
import { Dispatch, SetStateAction } from 'react'
import { css } from '@emotion/react'

const SideNav = ({
  isShow,
  onClose,
}: {
  isShow: boolean
  onClose: VoidFunction
}) => {
  return (
    <SideNavContainer show={isShow}>
      <SideNavButtonWrapper>
        <IconX
          css={XIconStyle}
          stroke={2}
          size={30}
          onClick={() => {
            onClose()
          }}
        />
      </SideNavButtonWrapper>
      <SideNavList />
    </SideNavContainer>
  )
}

export default SideNav

const SideNavContainer = styled.div<{ show: boolean }>`
  display: block;
  position: fixed;
  top: 0;
  left: ${props => (props.show ? '0' : '-100%')};
  width: 200px;
  height: 100%;
  margin: 0;
  list-style: none;
  background-color: white;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.15);
  transition-duration: 0.25s;
  z-index: 100;
`

const SideNavButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem 1rem;
`

const XIconStyle = css`
  cursor: pointer;
`
