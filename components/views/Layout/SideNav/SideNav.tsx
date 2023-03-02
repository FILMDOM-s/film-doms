import { navState } from '@/states/states'
import styled from '@emotion/styled'
import { IconX } from '@tabler/icons-react'
import { useRecoilState } from 'recoil'
import SideNavList from './SideNavList'

const SideNav = () => {
  const [show, setShow] = useRecoilState(navState)
  return (
    <SideNavContainer show={show}>
      <SideNavButtonWrapper>
        <IconX
          stroke={2}
          size={30}
          onClick={() => {
            setShow(!show)
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
