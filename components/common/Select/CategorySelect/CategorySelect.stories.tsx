import { useRef, useState } from 'react'
import { type ComponentMeta } from '@storybook/react'
import styled from '@emotion/styled'
import { flexGap, font } from '@/styles/emotion'
import CategorySelect from './CategorySelect'
import { type Option, type SelectRef } from '../core'
import { Button } from '../../Button'
import RenderIf from '../../RenderIf'

export default {
  title: 'Common/Select/CategorySelect',
  components: CategorySelect,
} as ComponentMeta<typeof CategorySelect>

const SEARCH_OPTIONS = [
  {
    label: 'Movie',
    value: 'movie',
  },
  {
    label: 'Film Universe',
    value: 'film-universe',
  },
  {
    label: 'Critic',
    value: 'critic',
  },
]

export const Default = () => {
  return (
    <div css={flexGap('1rem', 'row')}>
      <CategorySelect options={SEARCH_OPTIONS} />
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
        <CategorySelect options={SEARCH_OPTIONS} ref={selectRef} />
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
