interface Props {
  width?: string
  height?: string
  fill?: string
}

const ChevronLeft = ({
  width = '10',
  height = '16',
  fill = '#111111',
}: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.88 1.88L8 0L0 8L8 16L9.88 14.12L3.77333 8L9.88 1.88Z"
        fill={fill}
      />
    </svg>
  )
}

export default ChevronLeft
