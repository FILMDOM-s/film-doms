import { useFetchArticleTagListByCategory } from '@/services/article'
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
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
`
