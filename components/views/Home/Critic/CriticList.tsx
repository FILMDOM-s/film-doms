import { useFetchCriticList } from '@/services/main'
import styled from '@emotion/styled'
import Link from 'next/link'
import Critic from './Critic'
import { useScrollFadeIn } from '@/hooks'

const CriticList = () => {
  const { data: criticList } = useFetchCriticList()
  const scrollFadeIn = useScrollFadeIn(0.2, '10%')

  return (
    <CriticsList {...scrollFadeIn}>
      {criticList.map(critic => (
        <Link
          key={critic.id}
          className="critic"
          href={`/article/critic/${critic.id}`}
        >
          <Critic
            {...critic}
            createAt={critic.createdAt}
            image={critic.mainImage ?? ''}
            author={critic.author.nickname}
          />
        </Link>
      ))}
    </CriticsList>
  )
}

export default CriticList

const CriticsList = styled.div`
  display: grid;
  gap: 64px 40px;
  grid-template-columns: repeat(3, 400px);
  grid-template-rows: repeat(2, 448px);
`
