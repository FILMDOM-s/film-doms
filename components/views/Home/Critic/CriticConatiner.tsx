import { ArrowRight } from '@/assets/svgs/common'
import { Button, ResetErrorBoundary, Section } from '@/components/common'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import { Suspense } from 'react'
import Critics from './Critics'

const CriticConatiner = () => {
  const { push } = useRouter()

  return (
    <SectionWrapper>
      <Section.Header
        title="Critic"
        right={
          <Button
            rightIcon={<ArrowRight />}
            onClick={() => push('/community/critic')}
          >
            More
          </Button>
        }
      />
      <SectionBody>
        <ResetErrorBoundary fallback={<div>에러...</div>}>
          <Suspense fallback={<div>로딩...</div>}>
            <Critics />
          </Suspense>
        </ResetErrorBoundary>
      </SectionBody>
    </SectionWrapper>
  )
}

export default CriticConatiner

const SectionWrapper = styled(Section)`
  gap: 44px;
`

const SectionBody = styled(Section.Body)`
  margin-bottom: 188px;
`
