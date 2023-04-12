import { ArrowRight } from '@svgs/common'
import { Button, ResetErrorBoundary, Section } from '@/components/common'
import { css } from '@emotion/react'
import { useRouter } from 'next/router'
import React, { Suspense } from 'react'
import Notices from './Notices'

const NoticeContainer = () => {
  const { push } = useRouter()
  return (
    <Section style={{ marginTop: '100px' }}>
      <Section.Header
        title="Notice"
        right={
          <Button rightIcon={<ArrowRight />} onClick={() => push('/notice')}>
            More
          </Button>
        }
      />
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
  display: flex;
  justify-content: center;
  margin: 44px 0 36px 0;
`
