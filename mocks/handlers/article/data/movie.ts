import { getRandomNum } from '@/utils'
import { USER_DATA } from '../../user/data'
import { TAG_DATA } from '../../tag/data'

const TAG = TAG_DATA.movie

const TITLE = [
  '미술관 옆 공연장 - 그림에 음악과 향기를 더하다',
  "'2023 예술로, 동행'선정 결과 알림",
  '미술관 옆 공연장 - 그림에 음악과 향기를 더하다'.repeat(5),
  "'2023 예술로, 동행'선정 결과 알림".repeat(5),
]

export const MOVIE_DATA: Article.Item[] = Array.from(
  { length: 178 },
  (_, i) => ({
    id: i + 1,
    tag: TAG[getRandomNum(0, TAG.length - 1)],
    isContainImage: getRandomNum(0, 1) === 1,
    title: TITLE[getRandomNum(0, TITLE.length - 1)],
    comments: Array.from({ length: getRandomNum(0, 150) }, (_, i) => i + 1),
    writer: USER_DATA[getRandomNum(0, USER_DATA.length - 1)],
    createAt: '2023.01.01',
    updateAt: '2023.01.01',
    views: getRandomNum(0, 10000),
    likes: getRandomNum(0, 1500),
    category: 'movie',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae nis',
  })
)
