import { ComponentMeta, ComponentStory } from '@storybook/react'
import { getMockImage } from '@/utils'
import SliderWrapper from './SliderWrapper'

export default {
  component: SliderWrapper,
  title: 'Section/Banner/Slider',
} as ComponentMeta<typeof SliderWrapper>

const Template: ComponentStory<typeof SliderWrapper> = args => (
  <SliderWrapper {...args} />
)

const SIZE = {
  width: 2880,
  height: 760,
}

export const Default = Template.bind({})
Default.args = {
  banners: Array.from({ length: 5 })
    .fill(0)
    .map((_, index) => ({
      id: index,
      image: getMockImage(`picture${index}`, SIZE),
      title: `이것은 사진${index + 1}입니다.`,
    })),
}

export const Empty = Template.bind({})
Empty.args = {
  banners: [],
}
