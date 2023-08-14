import Link from 'next/link'
import styled from '@emotion/styled'
import Critic from '@/components/views/Home/Critic/Critic'

interface Props {
  criticItems: Article.MainContent[]
}

const CriticBoard = ({ criticItems }: Props) => {
  return (
    <CriticsList>
      {criticItems.map(critic => (
        <Link
          key={critic.id}
          className="critic"
          href={`/article/critic/${critic.id}`}
        >
          <Critic
            {...critic}
            createAt={critic.createdAt}
            image={critic.mainImage}
            author={critic.author.nickname}
            description={critic.title}
          />
        </Link>
      ))}
    </CriticsList>
  )
}

export default CriticBoard

const CriticsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 64px 40px;
  margin-bottom: 40px;
  max-width: 1280px;

  & > a {
    display: inline;
    width: fit-content;
  }
`
