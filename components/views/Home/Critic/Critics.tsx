import { useFetchCritics } from '@/services/critic'
import { mediaQuery } from '@/styles/emotion'
import { css } from '@emotion/react'
import Link from 'next/link'
import React from 'react'
import Critic from './Critic'

const Critics = () => {
  const { data: critics } = useFetchCritics()

  return (
    <div css={CriticsList}>
      {critics.map(critic => (
        <Link key={critic.id} className="critic" href={`/critic/${critic.id}`}>
          <Critic {...critic} />
        </Link>
      ))}
    </div>
  )
}

export default Critics

const CriticsList = css`
  display: grid;
  justify-content: center;
  width: 100%;
  grid-template-columns: repeat(1, minmax(335px, 1fr));
  grid-template-columns: repeat(1, 1fr);

  grid-template-rows: repeat(4, 132px);
  row-gap: 24px;
  .critic:nth-of-type(n + 5) {
    display: none;
  }

  ${mediaQuery.tablet`{
    grid-template-columns: repeat(2, minmax(335px, 1fr));
    grid-template-columns: repeat(2, 1fr);

    grid-template-rows: repeat(3, 132px);
    column-gap: 16px;

    .critic:nth-of-type(n + 5) {
      display: flex;
    }
    .critic:nth-of-type(n + 7) {
      display: none;
    }
  `}

  ${mediaQuery.laptop`{
    grid-template-columns: repeat(3, minmax(295px, 1fr));
    grid-template-columns: repeat(3, 1fr);

    grid-template-rows: repeat(2, 320px);
    column-gap: 30px;
    row-gap: 48px;
  `}

  ${mediaQuery.pc`{
    grid-template-columns: repeat(3, 416px);
    grid-template-rows: repeat(2, 427px);
    column-gap: 36px;
    row-gap: 72px;
    padding: 0 60px;
  `}

  a {
    width: 100%;
  }
`
