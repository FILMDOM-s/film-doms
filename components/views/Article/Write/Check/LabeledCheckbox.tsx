import { colors } from '@/styles/emotion'
import styled from '@emotion/styled'

const LabeledCheckbox = ({ label, ...props }: { label: string }) => {
  return (
    <Container>
      <Checkbox {...props} type={'checkbox'} />
      <Label>{label}</Label>
    </Container>
  )
}
const Container = styled.div`
  display: flex;
  align-items: center;
`

const Checkbox = styled.input`
  width: 20px;
  height: 20px;
  border: 2px solid ${colors.primary.black};
  border-radius: 5px;
  outline: none;
  cursor: pointer;
`
const Label = styled.label`
  color: ${colors.primary.black};
  margin-left: 10px;
  cursor: pointer;
`
export default LabeledCheckbox
