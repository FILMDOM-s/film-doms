import Image from 'next/image'
import styled from '@emotion/styled'
import { logoEngGray } from '@images/common'
import { Divider } from '@/components/common'
import { colors, flexCenter, flexGap, typography } from '@/styles/emotion'
import { FILMDOMS_INFO, CONTACT, ABOUT, FOLLOWUS } from './constants'
import LinkSection from './LinkSection'

const Footer = () => {
  return (
    <Container>
      <Box>
        <Image src={logoEngGray} alt="filmdoms logo" width="360" height="40" />
        <Divider color={colors.grey[900]} />
        <BottomBox>
          <LeftBox>
            <InfoBox>
              <Text>필름덤즈 대표자 : {FILMDOMS_INFO.대표자}</Text>
              <Text>등록번호 : {FILMDOMS_INFO.등록번호}</Text>
              <Text>등록일 : {FILMDOMS_INFO.등록일}</Text>
              <Text>문의 및 제안 : {FILMDOMS_INFO.contact}</Text>
            </InfoBox>
            <Text color={colors.grey[900]}>
              CopyRight&#40;C&#41; FILMDOM&#39;S. All Rights Reserved
            </Text>
          </LeftBox>
          <RightBox>
            <LinkSection title="Contact" list={CONTACT} />
            <LinkSection title="About" list={ABOUT} />
            <LinkSection title="Follow us" list={FOLLOWUS} />
          </RightBox>
        </BottomBox>
      </Box>
    </Container>
  )
}

const RightBox = styled.div`
  ${flexGap('100px', 'row')}
  width: 50%;
  padding-left: 40px;
`

export const Text = styled.p<{
  color?: string
  typo?: (typeof typography)[keyof typeof typography]
}>`
  ${({ typo = typography.contentBody }) => typo};
  color: ${({ color = '#888888' }) => color};
`

const InfoBox = styled.div`
  ${flexGap('18px')}
`

const LeftBox = styled.div`
  ${flexGap('40px')}
  width: 50%;
`

const BottomBox = styled.div`
  display: flex;
  width: 100%;
`

const Box = styled.div`
  ${flexGap('40px')}
  width: 1280px;
`

const Container = styled.footer`
  ${flexCenter}
  width: 100%;
  height: 604px;
  background-color: ${colors.primary.black};
`

export default Footer
