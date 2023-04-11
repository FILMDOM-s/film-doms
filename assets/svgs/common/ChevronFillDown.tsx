interface Props {
    width?: string
    height?: string
    fill?: string
  }
  
  const ChevronFillDown = ({
    width = '14',
    height = '7',
    fill = '#444444',
  }: Props) => {
    return (
        <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.748047 0.499023L6.99805 6.74902L13.248 0.499023H0.748047Z" fill={fill}/>
        </svg>
        

        
    )
  }
  
  export default ChevronFillDown
  