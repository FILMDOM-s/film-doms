import { getMockImage, getRandomNum } from '@/utils'

const NICKNAME = [
  '작성자',
  '글쓴이',
  '유저',
  '닉네임',
  'helloworld',
  'apple banana apple banana',
  'coke pepsi coke pepsi',
  '한글english혼합hello',
]

export const USER_DATA: User[] = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  nickname: `${i}${NICKNAME[getRandomNum(0, NICKNAME.length - 1)]}`,
  profile:
    i < 50 ? getMockImage(`user${i}`, { width: 200, height: 200 }) : null,
}))
