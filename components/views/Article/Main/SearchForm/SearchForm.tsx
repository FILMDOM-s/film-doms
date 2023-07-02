import { type FormEvent, useRef } from 'react'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'
import { flexGap } from '@/styles/emotion'
import { type SelectRef, SearchSelect, SearchInput } from '@/components/common'
import { SEARCH_OPTIONS } from './constants'

interface FormData {
  method: string
  keyword: string
}

interface Props {
  pushUrl?: (formData: FormData) => string
}

const SearchForm = ({ pushUrl }: Props) => {
  const { push } = useRouter()

  const searchOptionRef = useRef<SelectRef>(null)
  const searchInputRef = useRef<HTMLInputElement>(null)

  const onSubmitSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const method = searchOptionRef.current?.selected.value
    const keyword = searchInputRef.current?.value

    if (!method || !keyword) {
      return
    }

    if (keyword === '') {
      // TODO: alert? toast?
      return
    }

    if (!pushUrl) {
      return
    }

    const url = pushUrl({ method, keyword })

    push(url)
  }

  return (
    <Form onSubmit={onSubmitSearch}>
      <SearchSelect options={SEARCH_OPTIONS} ref={searchOptionRef} />
      <SearchInput ref={searchInputRef} />
    </Form>
  )
}

const Form = styled.form`
  ${flexGap('12px', 'row')}
  width: max-content;
`

export default SearchForm
