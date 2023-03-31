import { useFetchCritics } from '@/services/critic'
import styled from '@emotion/styled'
import Link from 'next/link'
import Critic from './Critic'

const Critics = () => {
  const { data: critics } = useFetchCritics()

  return (
    <CriticsList>
      {critics.map(critic => (
        <Link key={critic.id} className="critic" href={`/critic/${critic.id}`}>
          <Critic {...critic} />
        </Link>
      ))}
    </CriticsList>
  )
}

export default Critics

const CriticsList = styled.div`
  display: grid;
  gap: 64px 40px;
  grid-template-columns: repeat(3, 400px);
  grid-template-rows: repeat(2, 448px);
`
