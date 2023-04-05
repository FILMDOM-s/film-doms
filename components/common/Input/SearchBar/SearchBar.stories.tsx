import { FormEvent, useRef, useState } from 'react'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { flexGap } from '@/styles/emotion'
import SearchBar from './SearchBar'

export default {
  title: 'Common/Input/SearchBar',
  component: SearchBar,
} as ComponentMeta<typeof SearchBar>

export const Default: ComponentStory<typeof SearchBar> = args => (
  <SearchBar {...args} />
)

export const WithRef = () => {
  const [keyword, setKeyword] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    setKeyword(inputRef.current?.value ?? '')
  }

  return (
    <div css={flexGap('1rem')}>
      <form onSubmit={onSubmit}>
        <SearchBar ref={inputRef} />
      </form>
      <div>검색어: {keyword}</div>
    </div>
  )
}
