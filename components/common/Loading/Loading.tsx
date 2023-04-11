import styled from '@emotion/styled'
import FilmDomsLoading from '@svgs/common/FilmDomsLoading.svg'
interface Props {
  width?: string
  height?: string
}

const Loading = ({ width, height }: Props) => {
  return (
    <LoadingWrapper width={width} height={height}>
      <FilmDomsLoading/>
    </LoadingWrapper>
  )
}

export default Loading

export const LoadingWrapper = styled.div<{
  width?: string
  height?: string
  fill?: string
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => width || '32px'};
  height: ${({ height }) => height || '32px'};
`
