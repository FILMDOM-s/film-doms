import BannerContainer from './BannerContainer'
import { ComponentMeta } from '@storybook/react'

export default {
  component: BannerContainer,
  title: 'Section/Banner',
} as ComponentMeta<typeof BannerContainer>

export const Default = () => <BannerContainer />
