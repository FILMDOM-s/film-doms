interface Props {
  width?: string
  height?: string
  fill?: string
}

const ChevronFillUp = ({
  width = '14',
  height = '7',
  fill = '#444444',
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
        d="M0.748047 6.50098L6.99805 0.250977L13.248 6.50098H0.748047Z"
        fill={fill}
      />
    </svg>
  )
}

export default ChevronFillUp
