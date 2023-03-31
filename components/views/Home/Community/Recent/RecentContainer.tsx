import { useRouter } from 'next/router'
import styled from '@emotion/styled'
import { ArrowRight } from '@svgs/common'
import { flexGap } from '@/styles/emotion'
import { useFetchRecents } from '@/services/recent'
import { Button, Section } from '@/components/common'
import Recent from './Recent'

const RecentContainer = () => {
  const { push } = useRouter()
  const { data: recents } = useFetchRecents()

  return (
    <Container>
      <Section.Header
        title="Recent"
        right={
          <Button
            rightIcon={<ArrowRight />}
            onClick={() => push('/community/recent')}
          >
            More
          </Button>
        }
      />
      <Box>
        {recents.slice(0, 5).map(recent => {
          return <Recent key={`recent-${recent.id}`} {...recent} />
        })}
      </Box>
    </Container>
  )
}

const Box = styled.ul`
  ${flexGap('1.5rem')}
  width: 100%;
`

const Container = styled.div`
  ${flexGap('32px')}
  width: 100%;
  max-width: 600px;
`

export default RecentContainer
