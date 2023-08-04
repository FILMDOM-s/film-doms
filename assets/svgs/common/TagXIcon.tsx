interface Props {
  width?: string
  height?: string
  fill?: string
}

const TagXIcon = ({ width = '16', height = '16', fill = '#FF5414' }: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.95372 3L8 7.04628L12.0463 3L13 3.95372L8.95372 8L13 12.0463L12.0463 13L8 8.95372L3.95372 13L3 12.0463L7.04628 8L3 3.95372L3.95372 3Z"
        fill={fill}
        stroke={fill}
        strokeWidth="0.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default TagXIcon
