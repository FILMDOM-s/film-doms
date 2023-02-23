interface Props {
  value: string
  caseBy: {
    [key: string]: React.ReactNode
  }
  defaultRender?: React.ReactNode
}

const SwitchCase = ({ value, caseBy, defaultRender }: Props) => {
  return <>{caseBy[value] ?? defaultRender}</>
}

export default SwitchCase
