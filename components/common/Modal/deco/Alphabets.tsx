import { F, I, L, M, D, O, S } from '@/assets/svgs/alphabet'
import styled from '@emotion/styled'

type AlphabetsProps = {
  theme: 'dark' | 'white'
}

const Alphabets = ({ theme }: AlphabetsProps) => {
  return (
    <Container theme={theme}>
      <F width="129" height="129" />
      <I width="129" height="129" />
      <L width="129" height="129" />
      <M width="129" height="129" />
      <D width="129" height="129" />
      <O width="129" height="129" />
      <M fill="#67C05F" />
      <S width="129" height="129" />
    </Container>
  )
}

export default Alphabets

const Container = styled.div<{ theme: 'dark' | 'white' }>`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  column-gap: 14.5px;
  row-gap: 14.5px;
  scale: ${({ theme }) => (theme === 'dark' ? 1 : 0.3)};
  ${({ theme }) => (theme === 'dark' ? 'height: auto' : 'height: 120px')};
`
