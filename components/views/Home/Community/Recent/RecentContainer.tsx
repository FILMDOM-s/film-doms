import styled from '@emotion/styled'
import { flexCenter, flexGap } from '@/styles/emotion'
import { useFetchRecents } from '@/services/recent'
import { Button, Section } from '@/components/common'
import { ArrowRight } from '@/assets/svgs/common'
import Recent from './Recent'

const RecentContainer = () => {
  const { data: recents } = useFetchRecents()

  return (
    <Container>
      <Section.Header
        title="Recent"
        right={
          <Button>
            <ButtonBox>
              More <ArrowRight />
            </ButtonBox>
          </Button>
        }
      />
      <Box>
        {recents.slice(0, 5).map((recent, index) => {
          return <Recent key={`recent-${recent.id}${index}`} {...recent} />
        })}
      </Box>
    </Container>
  )
}

const ButtonBox = styled.div`
  ${flexGap('8px', 'row')};
  ${flexCenter}
`

const Box = styled.div`
  ${flexGap('1.5rem')}
  width: 100%;
`

const Container = styled.div`
  ${flexGap('32px')}
  width: 100%;
  max-width: 600px;
`

export default RecentContainer
