import { forwardRef } from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { rotate, keyframes, colors, flex, font } from '@/styles/emotion'
import { ChevronRight } from '@svgs/common'
import Select, { type Option, type SelectRef } from '../core'

interface Props {
  options: Option[]
}

const SearchSelect = forwardRef<SelectRef, Props>(({ options }, ref) => {
  return (
    <Select.Group css={Container} options={options} ref={ref}>
      <Select css={SelectBox}>
        {({ selected, isOpen }) => {
          return (
            <>
              {selected.label}
              <ArrowBox isOpen={isOpen}>
                <ChevronRight />
              </ArrowBox>
            </>
          )
        }}
      </Select>
      <Select.Modal>
        {({ isOpen }) => {
          return (
            <Select.OptionBox css={OptionBox(isOpen)}>
              {({ option }) => {
                return (
                  <Select.Option css={Option} option={option}>
                    {({ isSelected }) => {
                      return (
                        <Label isSelected={isSelected}>{option.label}</Label>
                      )
                    }}
                  </Select.Option>
                )
              }}
            </Select.OptionBox>
          )
        }}
      </Select.Modal>
    </Select.Group>
  )
})

const Label = styled.div<{ isSelected: boolean }>`
  width: 100%;
  height: 100%;
  ${flex({ align: 'center' })}
  ${font({
    size: '14px',
    weight: 700,
  })}
  color: ${({ isSelected }) =>
    isSelected ? colors.primary.orange : colors.primary.black};

  &:hover {
    color: ${colors.primary.orange};
  }
`

const Option = css`
  width: 100%;
  height: 40px;
  cursor: pointer;
  padding: 0 8px;
`

const OptionBox = (isOpen: boolean) => css`
  position: absolute;
  top: 120%;
  left: 0;
  width: 100%;
  border: 2px solid ${colors.primary.black};
  background-color: #ffffff;
  z-index: 20;
  animation: ${
    isOpen
      ? css`
          ${keyframes.fadeIn} 0.1s linear forwards
        `
      : css`
          ${keyframes.fadeOut} 0.1s linear forwards
        `
  };
  }
`

const ArrowBox = styled.div<{ isOpen: boolean }>`
  ${({ isOpen = false }) => (isOpen ? rotate(270) : rotate(90))}
  transition: transform 0.1s linear;
`

const SelectBox = css`
  width: 100%;
  height: 100%;
  ${flex({ justify: 'space-between', align: 'center' })}
  color: ${colors.primary.black};
  border: 2px solid ${colors.primary.black};
  background-color: #ffffff;
  padding: 0 8px;
  ${font({
    size: '14px',
    weight: 700,
  })}
  cursor: pointer;

  &:focus {
    border: 3px solid ${colors.primary.black};
  }
`

const Container = css`
  position: relative;
  width: 120px;
  height: 32px;
`

SearchSelect.displayName = 'SearchSelect'

export default SearchSelect
