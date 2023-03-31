interface Props {
    width?: string
    height?: string
    fill?: string
  }
  
  const LogoWhite = ({
    width = '40',
    height = '40',
    fill = '#F7F7F5',
  }: Props) => {
    return (
        <svg width={width} height={height} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M40 10.6667V0H22.2222H0V10.6667V17.7778V28.4444V40H22.2222V28.4444H35.5556V17.7778H22.2222V10.6667H40Z" fill={fill}/>
        </svg>
        
    )
  }
  
  export default LogoWhite
  