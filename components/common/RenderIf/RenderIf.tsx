import { type ReactNode } from 'react'

interface Props {
  condition: boolean
  render: ReactNode
}

const RenderIf = ({ condition, render }: Props) => {
  return condition ? <>{render}</> : null
}

export default RenderIf
