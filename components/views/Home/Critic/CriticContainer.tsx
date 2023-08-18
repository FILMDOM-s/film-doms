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
import CriticList from './CriticList'
import FallbackLoading from '@/components/common/Loading/FallbackLoading'

const CriticContainer = () => {
  const { push } = useRouter()

  return (
    <SectionWrapper>
      <Section.Header
        title="Critic"
        right={
          <Button
            rightIcon={<ArrowRight />}
            onClick={() => push('/article/critic')}
          >
            More
          </Button>
        }
      />
      <SectionBody>
        <ResetErrorBoundary fallback={<div>에러...</div>}>
          <Suspense fallback={<FallbackLoading />}>
            <CriticList />
          </Suspense>
        </ResetErrorBoundary>
      </SectionBody>
    </SectionWrapper>
  )
}

export default CriticContainer

const SectionWrapper = styled(Section)`
  gap: 44px;
  margin-top: 104px;
`

const SectionBody = styled(Section.Body)`
  margin-bottom: 188px;
`
