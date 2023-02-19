import { useFetchRecents } from '@/services/Recent'
import { flexGap } from '@/styles/emotion'
import { css } from '@emotion/react'
import Recent from './Recent'

const RecentContainer = () => {
  const { data: recents } = useFetchRecents()

  return (
    <div
      css={css`
        width: 100%;
        ${flexGap('1.5rem')}
      `}
    >
      {recents.map((recent) => {
        return <Recent key={recent.id} {...recent} />
      })}
    </div>
  )
}

export default RecentContainer
