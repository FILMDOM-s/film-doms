interface Props {
  width?: string
  height?: string
  fill?: string
}

const Image = ({ width = '20', height = '20', fill = '#111111' }: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.5 17.5V2.5H2.5V17.5H17.5ZM7.08333 11.25L9.16667 13.7583L12.0833 10L15.8333 15H4.16667L7.08333 11.25Z"
        fill={fill}
      />
    </svg>
  )
}

export default Image
