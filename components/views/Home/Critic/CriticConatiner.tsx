import { ResetErrorBoundary, Section } from '@/components/common'
import { css } from '@emotion/react'
import React, { Suspense } from 'react'
import Critics from './Critics'

const CriticConatiner = () => {
  return (
    <Section>
      <Section.Title>CRITIC</Section.Title>
      <Section.Body css={SectionBody}>
        <ResetErrorBoundary fallback={<div>에러...</div>}>
          <Suspense fallback={<div>로딩...</div>}>
            <Critics />
          </Suspense>
        </ResetErrorBoundary>
      </Section.Body>
    </Section>
  )
}

export default CriticConatiner

const SectionBody = css`
  padding: 0 20px;
  display: flex;
  justify-content: center;
  margin-top: 24px;

  @media screen and (min-width: 768px) {
    padding: 0 40px;
    margin-top: 32px;
  }
  @media screen and (min-width: 1040px) {
    padding: 0 60px;
    margin-top: 44px;
  }
  @media screen and (min-width: 1440px) {
    padding: 0 60px;
    margin-top: 56px;
  }
`
