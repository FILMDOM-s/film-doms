import styled from '@emotion/styled'
import { colors, flexGap, font } from '@/styles/emotion'
import { Divider } from '@/components/common'
import MovieTagList from './MovieTagList'

interface Props {
  type: 'private' | 'public'
  interestMovieList: User.InterestMovie[]
}

const InterestMovieSection = ({ type, interestMovieList }: Props) => {
  return (
    <Container>
      <Divider color={colors.primary.orange} size={4} limit="24px" />
      <Flex>
        <Title>관심영화</Title>
      </Flex>
      <MovieTagList type={type} interestMovieList={interestMovieList} />
    </Container>
  )
}

const Title = styled.h1`
  ${font({ size: '20px', weight: '700', lineHeight: '24px' })}
  color: ${colors.grey[900]};
`

const Container = styled.div`
  ${flexGap('20px')}
  width: 100%;
`

const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export default InterestMovieSection
