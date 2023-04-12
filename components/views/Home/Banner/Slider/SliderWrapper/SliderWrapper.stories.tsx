import { ComponentMeta, ComponentStory } from '@storybook/react'
import { getMockImage } from '@/utils'
import SliderWrapper from './SliderWrapper'
import styled from '@emotion/styled'

export default {
  component: SliderWrapper,
  title: 'Section/Banner/Slider',
} as ComponentMeta<typeof SliderWrapper>

const Template: ComponentStory<typeof SliderWrapper> = args => (
  <Wrapper>
    <SliderWrapper {...args} />
  </Wrapper>
)

const Wrapper = styled.div`
  width: 1280px;
`

const SIZE = {
  width: 1280,
  height: 440,
}

export const Default = Template.bind({})
Default.args = {
  banners: Array.from({ length: 5 })
    .fill(0)
    .map((_, index) => ({
      id: index,
      type: `이것은 movie타입입니다.`,
      image: getMockImage(`picture${index}`, SIZE),
      title: `이것은 사진${index + 1}입니다.`,
      subtitle: `이것은 사진${index + 1}의 설명입니다.`,
    })),
}

export const Empty = Template.bind({})
Empty.args = {
  banners: [],
}
