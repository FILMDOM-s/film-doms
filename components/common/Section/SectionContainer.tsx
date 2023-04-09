import { type ComponentProps, type ReactNode } from 'react'
import { css } from '@emotion/react'
import SectionBody from './SectionBody'
import SectionHeader from './SectionHeader'
import SectionTitle from './SectionTitle'

interface Props extends ComponentProps<'div'> {
  children: ReactNode
}

const SectionContainer = ({ children, ...rest }: Props) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        gap: 1rem;
      `}
      {...rest}
    >
      {children}
    </div>
  )
}

export default Object.assign(SectionContainer, {
  Title: SectionTitle,
  Body: SectionBody,
  Header: SectionHeader,
})
