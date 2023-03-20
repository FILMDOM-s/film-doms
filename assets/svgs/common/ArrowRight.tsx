interface Props {
  width?: string
  height?: string
  fill?: string
}

const ArrowRight = ({
  width = '20',
  height = '12',
  fill = '#111111',
}: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.7357 12L19.9999 6L13.7357 0L12.4149 1.26512L16.4242 5.10536L0 5.10536V6.89451L16.4243 6.89451L12.4149 10.7349L13.7357 12Z"
        fill={fill}
      />
    </svg>
  )
}

export default ArrowRight
