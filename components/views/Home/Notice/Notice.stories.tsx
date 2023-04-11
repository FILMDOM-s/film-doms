import { ComponentMeta, ComponentStory } from '@storybook/react'
import { getMockImage } from '@/utils'
import Notice from './Notice'
import styled from '@emotion/styled'

export default {
  component: Notice,
  title: 'Section/Notice/Item',
  argTypes: {
    startAt: {
      control: {
        type: 'date',
      },
    },
    endAt: {
      control: {
        type: 'date',
      },
    },
  },
} as ComponentMeta<typeof Notice>

export const Default: ComponentStory<typeof Notice> = args => (
  <NoticeWrapper>
    <Notice {...args} />
  </NoticeWrapper>
)

Default.args = {
  title: '공지사항 제목입니다.',
  owner: '관리자',
  type: 'notice',
  classification: '연합본부',
  image: getMockImage('notice1', { width: 360, height: 400 }),
  startAt: '2021-04-06',
  endAt: '2023-04-06',
}

const NoticeWrapper = styled.div`
  width: 360px;
  height: 400px;
`
