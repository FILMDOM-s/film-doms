import { atom } from 'recoil'

const tempState = atom({
  key: 'tempState',
  default: '리코일 시작을 위한 임시 상태',
})

// 여기서 atom은 상태를 관리하는 객체입니다.
// 이제 전역에서 사용할 수 있도록 export 해줍니다.
// useRecoilState, useRecoilValue를 사용하여 상태를 가져올 수 있습니다.

// const [temp, setTemp] = useRecoilState(tempState)
// 이제 tempState를 사용할 수 있습니다.
// setTemp를 사용하여 상태를 변경할 수 있습니다.
// Drilling을 방지하기 위해 사용합니다.

export { tempState }
