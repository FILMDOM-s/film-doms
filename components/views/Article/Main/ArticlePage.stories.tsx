import { type ComponentMeta } from '@storybook/react'
import styled from '@emotion/styled'
import ArticlePage from '@pages/article/[category]'
import { AppLayout, ArticleLayout } from '../../Layout'
import ArticleContainer from './ArticleContainer'
import ArticlePopularContainer from '../Popular/ArticlePopularContainer'

export default {
  title: 'Page/Article',
  component: ArticlePage,
  decorators: [
    Story => (
      <AppLayout>
        <ArticleLayout right={<ArticlePopularContainer />}>
          <Story />
        </ArticleLayout>
      </AppLayout>
    ),
  ],
} as ComponentMeta<typeof ArticlePage>

export const Default = () => <ArticleContainer category={'movie'} />

const Box = styled.div`
  width: 302px;
  height: 400px;
  border: 1px solid #000;
  position: sticky;
  top: 30%;
  right: 0;
`
