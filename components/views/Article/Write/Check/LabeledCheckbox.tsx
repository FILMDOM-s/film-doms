import { colors } from '@/styles/emotion'
import styled from '@emotion/styled'

const LabeledCheckbox = ({
  label,
  register,
  name,
}: {
  label: string
  register: any
  name: string
}) => {
  return (
    <Container>
      <Checkbox
        type={'checkbox'}
        {...register(name)}
        name={name}
        defaultChecked
      />
      <Label>{label}</Label>
    </Container>
  )
}
const Container = styled.div`
  display: flex;
  align-items: center;
`

const Checkbox = styled.input`
  appearance: none;
  outline: none;
  cursor: pointer;
  color: #f7f7f5;
  background: transparent;
  border: 2px solid ${colors.primary.black};
  width: 18px;
  height: 18px;
  &:checked {
    background-color: ${colors.primary.black};
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 150% 150%;
    background-position: 50%;
    background-repeat: no-repeat;
  }
`
const Label = styled.label`
  color: ${colors.primary.black};
  margin-left: 10px;
  cursor: pointer;
`
export default LabeledCheckbox
