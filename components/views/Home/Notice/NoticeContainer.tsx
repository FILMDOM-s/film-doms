import { ResetErrorBoundary, Section } from '@/components/common'
import { css } from '@emotion/react'
import React, { Suspense } from 'react'
import Notices from './Notices'

const NoticeContainer = () => {
  return (
    <Section>
      <Section.Title>NOTICE</Section.Title>
      <Section.Body css={SectionBody}>
        <ResetErrorBoundary fallback={<div>에러...</div>}>
          <Suspense fallback={<div>로딩...</div>}>
            <Notices />
          </Suspense>
        </ResetErrorBoundary>
      </Section.Body>
    </Section>
  )
}

export default NoticeContainer

const SectionBody = css`
  padding: 0 20px;
  display: flex;
  justify-content: center;
  margin: 24px 0 36px 0;
  
`