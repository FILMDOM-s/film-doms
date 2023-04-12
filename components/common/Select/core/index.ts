import Select from './Select'
import SelectGroup from './SelectGroup'
import SelectModal from './SelectModal'
import SelectOption from './SelectOption'
import SelectOptionBox from './SelectOptionBox'

const _Select = Object.assign(Select, {
  Group: SelectGroup,
  Modal: SelectModal,
  OptionBox: SelectOptionBox,
  Option: SelectOption,
})

export default _Select

export * from './type'
