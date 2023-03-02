import { atom } from 'recoil'
import { v1 } from 'uuid'

const navShowState = atom<boolean>({
  key: `navShowState/${v1()}`,
  default: false,
})

export default navShowState
