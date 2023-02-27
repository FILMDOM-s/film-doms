import { useFetchRecents } from '@/services/recent'
import { flexGap, flexCenter, mediaQuery } from '@/styles/emotion'
import styled from '@emotion/styled'
import Recent from './Recent'

const RecentContainer = () => {
  const { data: recents } = useFetchRecents()
  // 이 부분은 test용 입니다.
  // 모바일에서 5개보다 적거나
  // 태블릿이상에서 10개보다 적을 경우의 디자인이 없어서
  // 임의로 10개 이상이라고 가정합니다.
  const recentsMobile = [...recents, ...recents, ...recents].slice(0, 5)
  const recentsOthers = [...recents, ...recents, ...recents].slice(5, 10)

  return (
    <Center>
      <Box>
        {recentsMobile.map((recent, index) => {
          return <Recent key={`recent-${recent.id}${index}`} {...recent} />
        })}
      </Box>
      <MobileHiddenBox>
        {recentsOthers.map((recent, index) => {
          return <Recent key={`recent-${recent.id}${index}`} {...recent} />
        })}
      </MobileHiddenBox>
    </Center>
  )
}

const MobileHiddenBox = styled.div`
  display: none;

  ${mediaQuery.tablet`
    width: 50%;
    ${flexGap('1.5rem')}
  `}
`

const Box = styled.div`
  width: 100%;
  ${flexGap('1.5rem')}

  ${mediaQuery.tablet`
    width: 50%;
  `}
`

const Center = styled.div`
  width: 100%;

  ${mediaQuery.tablet`
    ${flexCenter}
  `}
`

export default RecentContainer
