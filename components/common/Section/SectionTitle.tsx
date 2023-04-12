import styled from '@emotion/styled'
import { flexCenter, mediaQuery } from '@/styles/emotion'

interface Props extends StrictPropsWithChildren {
  custom?: boolean
}

const SectionTitle = ({ children, custom }: Props) => {
  return (
    <>
      {custom ? (
        <>{children}</>
      ) : (
        <Box>
          <Title>{children}</Title>
        </Box>
      )}
    </>
  )
}

const Title = styled.h1`
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  width: fit-content;
  height: 30px;
  color: #222222;

  ${mediaQuery.tablet`
    font-size: 24px;
    line-height: 36px;
  `}

  ${mediaQuery.laptop`
    font-size: 28px;
    line-height: 42px;
  `}

  ${mediaQuery.pc`
    font-size: 32px;
    line-height: 48px;
  `}
`

const Box = styled.div`
  ${flexCenter}
`

export default SectionTitle
