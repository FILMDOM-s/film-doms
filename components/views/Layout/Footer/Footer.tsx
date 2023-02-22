import { flexCenter, mediaQuery } from '@/styles/emotion'
import styled from '@emotion/styled'
import Image from 'next/image'
import { logoEng, logoKor } from '@images/common'
import { Instagram } from '@svgs/common'
import Link from 'next/link'

const UTILITY_LINKS = {
  about: {
    title: 'About',
    link: '/about',
  },
  advertisement: {
    title: 'Advertisement',
    link: '/advertisement',
  },
  privacy: {
    title: 'Privacy',
    link: '/privacy',
  },
  qna: {
    title: 'QnA',
    link: '/qna',
  },
}

const Footer = () => {
  return (
    <FooterContainer>
      <LogoEngBox>
        <Image src={logoEng} alt="filmdoms-logo-eng" fill />
      </LogoEngBox>
      <LogoKorBox>
        <Image src={logoKor} alt="filmdoms-logo-kor" fill />
      </LogoKorBox>
      <InstaGramBox>
        <Link href="https://www.instagram.com/filmdoms/">
          <Instagram />
        </Link>
      </InstaGramBox>
      <HStack>
        {Object.values(UTILITY_LINKS).map(({ title, link }) => {
          return (
            <Link key={`link-${title}`} href={link}>
              <LinkText>{title}</LinkText>
            </Link>
          )
        })}
      </HStack>
      <CopyRight>Copyright Filmdom`s Rights All Reserved</CopyRight>
    </FooterContainer>
  )
}

const LogoEngBox = styled.div`
  position: relative;
  width: 245px;
  height: 41px;

  ${mediaQuery.tablet`
    width: 314px;
    height: 52px;
  `}
`

const LogoKorBox = styled.div`
  position: relative;
  width: 115px;
  height: 31px;

  ${mediaQuery.tablet`
    width: 147px;
    height: 39px;
  `}
`

const InstaGramBox = styled.div`
  position: relative;
  width: 18px;
  height: 18px;

  ${mediaQuery.tablet`
    width: 20px;
    height: 20px;
  `}
`

const HStack = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 400px;
`

const LinkText = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 1%;
  color: #999999;

  ${mediaQuery.tablet`
    font-size: 14px;
    line-height: 22px;
  `}
`

const CopyRight = styled.p`
  font-weight: 300;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 1%;
  color: #666666;

  ${mediaQuery.tablet`
    font-size: 14px;
    line-height: 22px;
  `}
`

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  ${flexCenter}
  padding: 2rem;
  gap: 1.5rem;
  background-color: #000000;
  width: 100%;
  height: auto;
`

export default Footer
