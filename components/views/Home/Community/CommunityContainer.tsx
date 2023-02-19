import { ResetErrorBoundary, Section } from '@/components/common'
import { flexCenter } from '@/styles/emotion'
import { css } from '@emotion/react'
import { useRouter } from 'next/router'
import { Suspense, useState } from 'react'
import MovieReviewContainer from './MovieReview'
import RecentContainer from './Recent'

type Tap = 'recent' | 'movie'

const getViewsByTap = (tap: Tap) => {
  switch (tap) {
    case 'recent':
      return <RecentContainer />
    case 'movie':
      return <MovieReviewContainer />
  }
}

const CommunityContainer = () => {
  const { push } = useRouter()
  const [tap, setTap] = useState<Tap>('recent')

  return (
    <Section>
      <Section.Title>COMMUNITY</Section.Title>
      <Section.Body
        css={css`
          ${flexCenter}
          padding: 0 1rem;
        `}
      >
        <div
          css={css`
            width: 100%;
            ${flexCenter}
            flex-direction: column;
            gap: 1.5rem;
          `}
        >
          <div
            css={css`
              width: 100%;
              max-width: 375px;
              height: 48px;
              ${flexCenter}
              border-bottom: 1px solid #dddddd;
            `}
          >
            <div css={TapContainer}>
              <button
                css={TapButton(tap === 'recent')}
                onClick={() => setTap('recent')}
              >
                Recent
              </button>
            </div>
            <div
              css={css`
                width: 1px;
                height: 60%;
                background-color: #dddddd;
              `}
            />
            <div css={TapContainer}>
              <button
                css={TapButton(tap === 'movie')}
                onClick={() => setTap('movie')}
              >
                Movie
              </button>
            </div>
          </div>
          <ResetErrorBoundary fallback={<div>에러...</div>}>
            <Suspense fallback={<div>로딩...</div>}>
              {getViewsByTap(tap)}
            </Suspense>
          </ResetErrorBoundary>
          <button
            css={css`
              width: 100%;
              max-width: 375px;
              height: 44px;
              background-color: #f5f5f5;
            `}
            onClick={() => push(`/community/${tap}`)}
          >
            <span
              css={css`
                font-size: 14px;
                font-weight: 500;
                line-height: 20px;
                letter-spacing: 1%;
              `}
            >
              전체보기
            </span>
          </button>
        </div>
      </Section.Body>
    </Section>
  )
}

export default CommunityContainer

const TapContainer = css`
  width: 50%;
  height: 100%;
  ${flexCenter}
`

const TapButton = (isActive: boolean) => css`
  width: 80%;
  height: 100%;
  font-weight: 700;
  background-color: #ffffff;
  color: ${isActive ? '#f0380f' : '#dddddd'};
  border-bottom: ${isActive ? '2px solid #f0380f' : 'none'};
`
