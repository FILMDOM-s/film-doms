import { type ReactNode } from 'react'

interface Props {
  value: string
  caseBy: {
    [key: string]: ReactNode
  }
  defaultRender?: ReactNode
}

const SwitchCase = ({ value, caseBy, defaultRender }: Props) => {
  return <>{caseBy[value] ?? defaultRender}</>
}

export default SwitchCase
