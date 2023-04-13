import { ArrowRight } from '@/assets/svgs/common'
import {
  Button,
  Loading,
  ResetErrorBoundary,
  Section,
} from '@/components/common'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import { Suspense } from 'react'
import Critics from './Critics'

const CriticContainer = () => {
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
          <Suspense fallback={<Loading width="100%" height="960px" />}>
            <Critics />
          </Suspense>
        </ResetErrorBoundary>
      </SectionBody>
    </SectionWrapper>
  )
}

export default CriticContainer

const SectionWrapper = styled(Section)`
  gap: 44px;
`

const SectionBody = styled(Section.Body)`
  margin-bottom: 188px;
`
