import styled from '@emotion/styled'
import { flexGap } from '@/styles/emotion'
import { Tab, Tag } from '@/components/common'
import { useFetchTags } from '@/services/tag'

interface Props {
  category: Article.Category
}

const TagList = ({ category }: Props) => {
  const { data: tags } = useFetchTags(category)

  return (
    <Box>
      <Tab value="전체">
        {({ isActive }) => {
          return (
            <Tag
              as="button"
              shape="round"
              color={isActive ? 'orange' : 'black'}
              {...(isActive && { fill: 'true' })}
            >
              전체
            </Tag>
          )
        }}
      </Tab>
      {tags.map(tag => {
        return (
          <Tab key={`tag-${tag}`} value={tag}>
            {({ isActive }) => {
              return (
                <Tag
                  as="button"
                  shape="round"
                  color={isActive ? 'orange' : 'black'}
                  {...(isActive && { fill: 'true' })}
                >
                  {tag}
                </Tag>
              )
            }}
          </Tab>
        )
      })}
    </Box>
  )
}

const Box = styled.div`
  ${flexGap('8px', 'row')}
  width: max-content;
`

export default TagList
