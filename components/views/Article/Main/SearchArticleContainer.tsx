import { Suspense, useState } from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { colors, flex, flexGap, typography } from '@/styles/emotion'
import { CATEGORIES } from '@/constants/article'
import { Tab } from '@/components/common'
import SearchForm from './SearchForm'
import TagList from './TagList'
import { useRouter } from 'next/router'
import { SearchBoardContainer } from './BoardContainer'

const SearchArticleContainer = () => {
  const router = useRouter()
  const category = String(router.query.category)
  const method = String(router.query.method)
  const searchString = String(router.query.keyword)
  const [currentPage, setCurrentPage] = useState(1)

  return (
    <Container category={category}>
      <Title>{CATEGORIES[category].title}</Title>
      <Tab.Group
        css={TabGroup}
        selected="전체"
        onChange={() => setCurrentPage(1)}
        clearDependency={category}
      >
        <TopBox>
          <Tab.List css={TabList}>
            <Suspense fallback={<TagListLoading />}>
              <TagList category={category} />
            </Suspense>
          </Tab.List>
          <SearchForm
            pushUrl={({ method, keyword }) =>
              `/search/${category}/${method}/?keyword=${keyword}&page=1&size=22`
            }
          />
        </TopBox>
        <Tab.Views>
          {({ selected }) => (
            <Suspense fallback={<BoardLoading />}>
              <SearchBoardContainer
                category={category}
                method={method}
                params={{
                  page: currentPage,
                  size: 22,
                  ...(selected !== '전체' && { tag: selected }),
                }}
                searchString={searchString}
                onChangePage={page => setCurrentPage(page)}
              />
            </Suspense>
          )}
        </Tab.Views>
      </Tab.Group>
    </Container>
  )
}

const TabList = css`
  flex: 1;
  overflow-x: auto;

  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${colors.grey[100]};
    border-radius: 3px;
  }

  &::-webkit-scrollbar-track {
    background: ${colors.primary.white};
    border-radius: 3px;
  }
`

const TopBox = styled.div`
  ${flex({ justify: 'space-between' })}
  gap: 16px;
  width: 100%;
`

const TabGroup = css`
  ${flexGap('40px')}
`

const Title = styled.h1`
  ${typography.h5}
  color: ${colors.primary.black};
`

const Container = styled.div<{ category: string }>`
  ${flexGap('40px')}
  width: 954px;
`

const BoardLoading = styled.div`
  width: 100%;
  height: 1606px;
`

const TagListLoading = styled.div`
  flex: 1;
  height: 34px;
`

export default SearchArticleContainer
