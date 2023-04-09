import { type HTMLAttributes, forwardRef } from 'react'
import styled from '@emotion/styled'
import { Search } from '@svgs/common'
import { colors, flex, flexCenter, typography } from '@/styles/emotion'

interface Props extends HTMLAttributes<HTMLInputElement> {}

const SearchInput = forwardRef<HTMLInputElement, Props>(
  ({ placeholder, ...props }, ref) => {
    return (
      <Box>
        <Input
          type="text"
          ref={ref}
          placeholder={placeholder ?? '검색'}
          {...props}
        />
        <Button type="submit">
          <Search width="20" height="20" fill={colors.primary.black} />
        </Button>
      </Box>
    )
  }
)

const Button = styled.button`
  ${flexCenter}
  width: 32px;
  height: 100%;
  border: 2px solid ${colors.primary.black};
  border-left: none;

  &:focus {
    outline: none;

    svg {
      border: 1px solid ${colors.primary.black};
    }
  }
`

const Input = styled.input`
  flex: 1;
  height: 100%;
  border: 2px solid ${colors.primary.black};
  border-right: none;
  text-indent: 16px;
  ${typography.tag}
  color: ${colors.primary.black};
  outline: none;
`

const Box = styled.div`
  ${flex({ justify: 'space-between', align: 'center' })}
  width: min-content;
  height: 32px;
`

SearchInput.displayName = 'SearchInput'

export default SearchInput
