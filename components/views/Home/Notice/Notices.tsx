import { useFetchNotices } from '@/services/notice'
import { mediaQuery } from '@/styles/emotion'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import Link from 'next/link'
import React from 'react'
import Notice from './Notice'

const Notices = () => {
  const { data: notices } = useFetchNotices()
  return (
    <NoticeAlign>
      {notices.map((notice: Notice) => (
        <Link
          className="flex items-center justify-center"
          key={notice.id}
          href={`/notice/${notice.id}`}
        >
          <Notice {...notice} />
        </Link>
      ))}
    </NoticeAlign>
  )
}
export default Notices

const NoticeAlign = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 100px;
`
