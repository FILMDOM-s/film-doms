import { ComponentProps, PropsWithChildren, ReactNode } from 'react'

interface Props extends ComponentProps<'div'> {
  children: ReactNode
}

const SectionBody = ({ children, ...rest }: Props) => {
  return <div {...rest}>{children}</div>
}

export default SectionBody
