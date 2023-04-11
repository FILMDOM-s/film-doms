import BannerContainer from './BannerContainer'
import { ComponentMeta } from '@storybook/react'
import '@/styles/carousel.css'
import styled from '@emotion/styled'

export default {
  component: BannerContainer,
  title: 'Section/Banner',
} as ComponentMeta<typeof BannerContainer>

export const Default = () => (
  <Wrapper>
    <BannerContainer />
  </Wrapper>
)

const Wrapper = styled.div`
  width: 1280px;
`
