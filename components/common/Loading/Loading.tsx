import styled from '@emotion/styled'
import FilmDomsLoading from '@svgs/common/FilmDomsLoading.svg'
import RenderIf from '../RenderIf'
interface Props {
  width?: string
  height?: string
  empty?: boolean
  iconSize?: 'sm' | 'md' | 'lg'
}

const size = {
  sm: '2rem',
  md: '4rem',
  lg: '8rem',
}

const Loading = ({ width, height, empty = false, iconSize = 'md' }: Props) => {
  return (
    <LoadingWrapper width={width} height={height}>
      <RenderIf
        condition={!empty}
        render={
          <IconBox iconSize={iconSize}>
            <FilmDomsLoading />
          </IconBox>
        }
      />
    </LoadingWrapper>
  )
}

export default Loading

const IconBox = styled.div<Required<Pick<Props, 'iconSize'>>>`
  width: ${({ iconSize }) => size[iconSize]};
  height: ${({ iconSize }) => size[iconSize]};
`

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
