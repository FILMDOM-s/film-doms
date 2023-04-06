import styled from '@emotion/styled'
import { colors, flexCenter, font } from '@/styles/emotion'
import { Divider, RenderIf } from '@/components/common'
import { HEAD } from '../constants'

const THead = () => {
  return (
    <Table>
      <thead>
        <Tr>
          {HEAD.map(({ value, label, css }, index) => {
            return (
              <Box key={value} css={css}>
                <LabelBox>
                  <Label>{label}</Label>
                  <RenderIf
                    condition={index !== HEAD.length - 1}
                    render={
                      <Divider
                        orientation="vertical"
                        size={1}
                        color={colors.grey[100]}
                      />
                    }
                  />
                </LabelBox>
              </Box>
            )
          })}
        </Tr>
      </thead>
    </Table>
  )
}

const Label = styled.span`
  width: 100%;
  ${font({ weight: '700' })}
`

const LabelBox = styled.div`
  ${flexCenter}
  width: 100%;
  height: 24px;
`

const Box = styled.th`
  ${flexCenter}
  height: 100%;
`

const Tr = styled.tr`
  display: flex;
  height: 60px;
`

const Table = styled.table`
  width: 100%;
  border-top: 2px solid ${colors.primary.black};
`

export default THead
