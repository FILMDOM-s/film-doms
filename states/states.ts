import { atom } from 'recoil'
import { v1 } from 'uuid'

const navState = atom<boolean>({
  key: `navState/${v1()}`,
  default: false,
})

export { navState }
