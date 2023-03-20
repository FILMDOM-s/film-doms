import { ComponentMeta } from '@storybook/react'
import NoticeContainer from './NoticeContainer'

export default {
  component: NoticeContainer,
  title: 'Section/Notice',
} as ComponentMeta<typeof NoticeContainer>

export const Default = () => <NoticeContainer />
