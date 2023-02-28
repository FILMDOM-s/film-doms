import { ResetErrorBoundary, Section } from '@/components/common'
import { mediaQuery } from '@/styles/emotion'
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
  margin: 24px 0 36px 0;

  ${mediaQuery.tablet`{
    padding: 0 40px;
    margin: 32px 0 72px 0;
  `}
  ${mediaQuery.laptop`{
    padding: 0 60px;
    margin: 44px 0 80px 0;
  `}
  ${mediaQuery.pc`{
    padding: 0 60px;
    margin: 56px 0 150px 0;
  `}
`
