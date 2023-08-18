import styled from '@emotion/styled'
import RenderIf from '../RenderIf'
interface Props {
  width?: string
  height?: string
  empty?: boolean
}

const Loading = ({ width, height, empty = false }: Props) => {
  return (
    <LoadingWrapper width={width} height={height}>
      <RenderIf
        condition={!empty}
        render={
          <div className="music">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        }
      />
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
  width: ${({ width }) => width || '100px'};
  height: ${({ height }) => height || '50px'};

  .music {
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    width: 100%;
    height: 100%;
  }

  .music .bar {
    width: calc(100% / 16);
    height: calc(100% / 8);
    border-radius: 10px;
    background-color: white;
    animation: up_down 1.5s ease-in-out infinite;
  }

  @keyframes up_down {
    0%,
    100% {
      height: calc(100% / 4);
    }
    50% {
      height: 100%;
    }
  }

  .music .bar:nth-child(1) {
    background-color: purple;
    animation-delay: 1s;
  }

  .music .bar:nth-child(2) {
    background-color: crimson;
    animation-delay: 0.8s;
  }

  .music .bar:nth-child(3) {
    background-color: deeppink;
    animation-delay: 0.6s;
  }

  .music .bar:nth-child(4) {
    background-color: orange;
    animation-delay: 0.4s;
  }

  .music .bar:nth-child(5) {
    background-color: gold;
    animation-delay: 0.2s;
  }

  .music .bar:nth-child(6) {
    background-color: gold;
    animation-delay: 0.2s;
  }

  .music .bar:nth-child(7) {
    background-color: orange;
    animation-delay: 0.4s;
  }

  .music .bar:nth-child(8) {
    background-color: deeppink;
    animation-delay: 0.6s;
  }

  .music .bar:nth-child(9) {
    background-color: crimson;
    animation-delay: 0.8s;
  }

  .music .bar:nth-child(10) {
    background-color: purple;
    animation-delay: 1s;
  }
`
