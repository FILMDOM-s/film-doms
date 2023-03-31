import Link from 'next/link'
import styled from '@emotion/styled'
import { flexGap, typography } from '@/styles/emotion'
import { type LinkList } from './type'
import { Text } from './Footer'

interface Props {
  title: string
  list: LinkList
}

const LinkSection = ({ title, list }: Props) => {
  return (
    <Container>
      <Text typo={typography.contentTitle}>{title}</Text>
      <Box>
        {list.map(({ title, link }) => {
          return (
            <Link key={title} href={link}>
              <Text>{title}</Text>
            </Link>
          )
        })}
      </Box>
    </Container>
  )
}

const Box = styled.div`
  ${flexGap('20px')}
`

const Container = styled.div`
  ${flexGap('24px')};
`

export default LinkSection
