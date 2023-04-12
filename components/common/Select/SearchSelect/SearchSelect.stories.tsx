import { useRef, useState } from 'react'
import { type ComponentMeta } from '@storybook/react'
import styled from '@emotion/styled'
import { flexGap, font } from '@/styles/emotion'
import SearchSelect from './SearchSelect'
import { type Option, type SelectRef } from '../core'
import { Button } from '../../Button'
import RenderIf from '../../RenderIf'

export default {
  title: 'Common/Select/SearchSelect',
  components: SearchSelect,
} as ComponentMeta<typeof SearchSelect>

const SEARCH_OPTIONS = [
  {
    label: '제목+내용',
    value: 'title,content',
  },
  {
    label: '작성자',
    value: 'writer',
  },
]

const OPTIONS = [
  {
    label: '최신순',
    value: 'latest',
  },
  {
    label: '인기순',
    value: 'popular',
  },
  {
    label: '댓글순',
    value: 'comment',
  },
  {
    label: '좋아요순',
    value: 'like',
  },
  {
    label: '조회순',
    value: 'view',
  },
  {
    label: '추천순',
    value: 'recommend',
  },
]

export const Default = () => {
  return (
    <div css={flexGap('1rem', 'row')}>
      <SearchSelect options={SEARCH_OPTIONS} />
      <SearchSelect options={OPTIONS} />
    </div>
  )
}

export const WithRef = () => {
  const selectRef = useRef<SelectRef>(null)
  const [option, setOption] = useState<Option | null>(null)

  const onClick = () => {
    if (selectRef.current) {
      setOption(selectRef.current.selected)
    }
  }

  return (
    <div css={flexGap('2rem', 'row')}>
      <div css={flexGap('1rem')}>
        <SearchSelect options={OPTIONS} ref={selectRef} />
        <Button onClick={onClick}>현재 선택된 값 보기</Button>
      </div>
      <RenderIf
        condition={option !== null}
        render={
          <div css={flexGap('1rem', 'column')}>
            <Label>label: {option?.label}</Label>
            <Label>value: {option?.value}</Label>
          </div>
        }
      />
    </div>
  )
}

const Label = styled.div`
  ${font({ size: '20px' })}
`
