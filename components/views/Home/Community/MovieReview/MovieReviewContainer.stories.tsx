import { ComponentMeta } from '@storybook/react'
import MovieReviewContainer from './MovieReviewContainer'

export default {
  component: MovieReviewContainer,
  title: 'Section/Community/MovieReview/List',
} as ComponentMeta<typeof MovieReviewContainer>

export const Default = () => <MovieReviewContainer />
