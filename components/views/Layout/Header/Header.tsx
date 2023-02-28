import { mediaQuery } from '@/styles/emotion'
import styled from '@emotion/styled'
import { logoEngBk } from '@images/common'
import {
  IconBrandInstagram,
  IconUser,
  IconSearch,
  IconMenu2,
} from '@tabler/icons-react'
import Image from 'next/image'
import { flexCenter } from '@/styles/emotion'
import useResizeWindow from '@/hooks/useResizeWindow'

const Header = () => {
  const windowWidth = useResizeWindow()
  const responseFontSize = windowWidth <= 768 ? '28px' : '32px'

  return (
    <HeaderContainer>
      <HeaderInner>
        <NavWrapper>
          <IconMenu2 stroke={2} size={responseFontSize} />
        </NavWrapper>
        <ImageWrapper>
          <Image src={logoEngBk} alt="filmdoms-logo-eng" />
        </ImageWrapper>
        <RightSide>
          <RightSideWrapper>
            <IconBrandInstagram
              stroke={2}
              size={responseFontSize}
              id="instagram"
            />
            <IconUser stroke={2} id="user" size={responseFontSize} />
          </RightSideWrapper>
          <IconSearch stroke={2} id="search" size={responseFontSize} />
        </RightSide>
      </HeaderInner>
    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = styled.header`
  height: 80px;
  ${mediaQuery.pc`
    height:150px
  `};
  ${flexCenter}
`

const HeaderInner = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  items-center: center;
  position: relative;
  max-width: 375px;
  margin: 0px 30px;

  ${mediaQuery.tablet`
    max-width: 688px;
    margin:0px 40px;
  `}

  ${mediaQuery.laptop`
    max-width:1019px;
    margin:0px 40px;
  `}

  ${mediaQuery.pc`
    max-width: 1323px;
    margin:0px 58px;
  `}
`

const ImageWrapper = styled.div`
  ${flexCenter}
  width: 168px;
  height: 23px;
  ${mediaQuery.pc`
    width: 336px;
    height: 46px;
  `};
`

const NavWrapper = styled.nav`
  position: absolute;
  left: 0;
  ${mediaQuery.laptop`
    display: none;
  `};
  ${mediaQuery.pc`
    display: none;
  `};
`

const RightSide = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  height: 100%;
`

const RightSideWrapper = styled.div`
  display: none;
  ${mediaQuery.laptop`
    display: flex;
    justify-content: center;
    items-center: center;
    gap: 40px;
  `};
`
