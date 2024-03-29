interface Props {
  width?: string
  height?: string
  fill?: string
}

const M = ({ width = '129', height = '129', fill = '#E75B4E' }: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M88.0357 0L65.7938 28.8164L42.9632 0H0.769531V129.318H29.4873H29.6884V86.1689L43.997 129.318H86.966L101.275 86.1689V129.318H101.282H130V0H88.0357Z"
        fill={fill}
      />
    </svg>
  )
}

export default M
