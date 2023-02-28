import {
  ResetErrorBoundary,
  Section,
  SwitchCase,
  Tab,
} from '@/components/common'
import { flexCenter, mediaQuery } from '@/styles/emotion'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import { Fragment, Suspense, useState } from 'react'
import MovieReviewContainer from './MovieReview'
import RecentContainer from './Recent'

const tabs = ['recent', 'movie']

const CommunityContainer = () => {
  const { push } = useRouter()
  const [tab, setTab] = useState(tabs[0])

  return (
    <Section css={SectionContainer}>
      <Section.Title>COMMUNITY</Section.Title>
      <Section.Body css={SectionBody}>
        <Tab.Group css={TabGroup} selected={tab} onChange={setTab}>
          <Tab.List css={TabList}>
            {tabs.map((tab, index) => {
              return (
                <Fragment key={`Tab-${tab}`}>
                  <Tab css={TabBox} value={tab}>
                    {({ isActive }) => (
                      <button css={TabButton(isActive)}>
                        {tab[0].toUpperCase() + tab.slice(1)}
                      </button>
                    )}
                  </Tab>
                  {index !== tabs.length - 1 && <Divider />}
                </Fragment>
              )
            })}
          </Tab.List>
          <Tab.Views css={TabViews}>
            {({ selected: tab }) => {
              return (
                <ResetErrorBoundary fallback={<div>에러...</div>}>
                  <Suspense fallback={<div>로딩...</div>}>
                    <SwitchCase
                      value={tab}
                      caseBy={{
                        recent: <RecentContainer />,
                        movie: <MovieReviewContainer />,
                      }}
                    />
                  </Suspense>
                </ResetErrorBoundary>
              )
            }}
          </Tab.Views>
          <Button onClick={() => push(`/community/${tab}`)}>
            <Text>전체보기</Text>
          </Button>
        </Tab.Group>
      </Section.Body>
    </Section>
  )
}

const Divider = styled.div`
  width: 1px;
  height: 60%;
  background-color: #dddddd;
`

const Button = styled.button`
  width: 100%;
  height: 44px;
  background-color: #f5f5f5;

  ${mediaQuery.tablet`
    height: 48px;
    ${flexCenter};
  `}

  ${mediaQuery.pc`
    max-width: 1094px;
    height: 55px;
  `}
`
const Text = styled.span`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;

  ${mediaQuery.tablet`
    font-size: 16px;
  `}

  ${mediaQuery.pc`
    font-size: 18px;
    line-height: 27px;
  `}
`

const TabButton = (isActive: boolean) => css`
  width: 60%;
  height: 100%;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  background-color: #ffffff;
  color: ${isActive ? '#f0380f' : '#999999'};
  border-bottom: ${isActive ? '2px solid #f0380f' : 'none'};

  ${mediaQuery.tablet`
    font-size: 22px;
    line-height: 33px;
    width: 50%;
  `}

  ${mediaQuery.laptop`
    font-size: 24px;
    line-height: 36px;
    width: 60%;
  `}

  ${mediaQuery.pc`
    font-size: 28px;
    line-height: 42px;
  `}
`

const TabBox = css`
  width: 50%;
  height: 100%;
  ${flexCenter}
`

const TabViews = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 24px 0 40px 0;

  ${mediaQuery.tablet`
    margin-bottom: 46px;
  `}

  ${mediaQuery.laptop`
    margin: 32px 0 56px 0;
  `}

  ${mediaQuery.pc`
    margin: 40px 0 72px 0;
  `}
`

const TabList = css`
  width: 100%;
  height: 48px;
  ${flexCenter}
  border-bottom: 1px solid #dddddd;
`

const TabGroup = css`
  width: 100%;
  ${flexCenter}
  flex-direction: column;
`

const SectionBody = css`
  ${flexCenter}
  width: 100%;
  max-width: 1320px;
  padding: 0 20px;

  ${mediaQuery.tablet`
    padding: 0 40px;
  `}

  ${mediaQuery.pc`
    padding: 0;
  `}
`

const SectionContainer = css`
  ${flexCenter}
`

export default CommunityContainer
