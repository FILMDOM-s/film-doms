import { useFetchArticleTagListByCategory } from '@/services/article'
import { colors } from '@/styles/emotion'
import { camelToSnake } from '@/utils'
import styled from '@emotion/styled'

type SelectBoxProps = {
  category: string
  register: any
}

const SelectBox = ({ category, register }: SelectBoxProps) => {
  const { data: tagList } = useFetchArticleTagListByCategory(
    camelToSnake(category)
  )

  return (
    <Select {...register('tag')}>
      {tagList.map(({ tag, description }) => {
        return (
          <option key={`tag-${tag}`} value={tag}>
            {description}
          </option>
        )
      })}
    </Select>
  )
}

export default SelectBox

const Select = styled.select`
  width: 200px;
  height: 40px;
  outline: none;
  cursor: pointer;
  padding-left: 10px;
  border-radius: 5px;
  border: 1px solid ${colors.primary.black};
`
