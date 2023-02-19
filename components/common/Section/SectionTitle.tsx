import { flexCenter } from '@/styles/emotion'
import { css } from '@emotion/react'
import { PropsWithChildren } from 'react'

interface Props extends Required<PropsWithChildren> {
  custom?: boolean
}

const SectionTitle = ({ children, custom }: Props) => {
  return (
    <>
      {custom ? (
        <>{children}</>
      ) : (
        <div
          css={css`
            ${flexCenter}
          `}
        >
          <h2
            css={css`
              font-size: 1.5rem;
              font-weight: 700;
              width: fit-content;
              height: 30px;
            `}
          >
            {children}
          </h2>
        </div>
      )}
    </>
  )
}

export default SectionTitle
