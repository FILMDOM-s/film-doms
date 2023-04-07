import { type FormEvent, useRef, useState } from 'react'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { flexGap } from '@/styles/emotion'
import SearchInput from './SearchInput'

export default {
  title: 'Common/Input/SearchInput',
  component: SearchInput,
} as ComponentMeta<typeof SearchInput>

export const Default: ComponentStory<typeof SearchInput> = args => (
  <SearchInput {...args} />
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
        <SearchInput ref={inputRef} />
      </form>
      <div>검색어: {keyword}</div>
    </div>
  )
}
