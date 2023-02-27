import { useFetchNotices } from '@/services/notice'
import { mediaQuery } from '@/styles/emotion'
import { css } from '@emotion/react'
import Link from 'next/link'
import React from 'react'
import Notice from './Notice'

const Notices = () => {
  const { data: notices } = useFetchNotices()
  return (
    <div css={NoticeAlign}>
      {notices.map((notice: Notice) => (
        <Link className='flex items-center justify-center' key={notice.id} href={`/notice/${notice.id}`}>
          <Notice {...notice} />
        </Link>
      ))}
    </div>
  )
}
export default Notices

const NoticeAlign = css`
    max-width: 1323px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
    
  ${mediaQuery.tablet`
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 15px;
  `}

  ${mediaQuery.laptop`
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 33px;
  `}

  ${mediaQuery.pc`
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 36px;
  `}
`
