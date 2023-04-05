interface Props {
  width?: string
  height?: string
  fill?: string
}

const ChevronRight = ({
  width = '20',
  height = '20',
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
        d="M4.89844 3.43464L11.4651 10.0013L4.89844 16.568L6.6651 18.3346L14.9984 10.0013L6.6651 1.66797L4.89844 3.43464Z"
        fill={fill}
      />
    </svg>
  )
}

export default ChevronRight
