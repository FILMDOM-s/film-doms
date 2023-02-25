import SideNav from '@/components/SideNav'
import { mediaQuery } from '@/styles/emotion'
import styled from '@emotion/styled'
import { logoEng, logoKor } from '@images/common'
import {
  IconBrandInstagram,
  IconUser,
  IconSearch,
  IconMenu2,
} from '@tabler/icons-react'
import Image from 'next/image'
import { flexCenter } from '@/styles/emotion'
import { useEffect, useState } from 'react'

const Header = () => {
  const [windowWidth, setWindowWidth] = useState(0)
  // resize 될때만 함수 불러오기
  let timer: string | number | NodeJS.Timeout
  const resizeWindow = () => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      // 현재 window width 값
      setWindowWidth(window.innerWidth)
    }, 300)
  }
  const [toggle, setToggle] = useState(false)
  const responseFontSize = windowWidth <= 768 ? '16px' : '24px';
  useEffect(() => {
    setWindowWidth(window.innerWidth)
    window.addEventListener('resize', resizeWindow)
    return () => {
      window.removeEventListener('resize', resizeWindow)
    }
  }, [windowWidth])
  return (
    <HeaderContainer>
      <HeaderInner>
        <NavWrapper>
          <IconMenu2 stroke={2} size={responseFontSize} />
        </NavWrapper>
        <ImageWrapper>
          <Image src={logoEng} alt="filmdoms-logo-eng" />
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
  background-color: gray;
  height: 80px;
  ${mediaQuery.pc`
    height:150px
  `};
  ${flexCenter}
`

const HeaderInner = styled.div`
  width: 100%;
  max-width: 1323px;
  display: flex;
  justify-content: center;
  items-center: center;
  position: relative;
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