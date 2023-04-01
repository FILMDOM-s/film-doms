import { rest } from 'msw'

export const getNotices = rest.get('/api/notice', (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json([
      {
        id: 1,
        title: '필름덤즈 공식 굿즈 출시, 필름덤즈 후드',
        owner: '필름덤즈',
        type: 'notice',
        classification: '동아리',
        image: 'https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/6cc7d58c-4f6e-4d12-149e-a6b2acf87400/public',
        startAt: '2023.08.20',
        endAt: '2023.09.05',
      },
      {
        id: 2,
        title: '대학생 서포터즈 \'구유대감\' 12기 모집 안내 언제나 가득한 에너지로 뜨거운 사랑을 전하는 \'구유대감\'',
        owner: 'VIBRANT',
        type: 'notice',
        classification: '대외활동',
        image: 'https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/6b6b5a9d-39cf-4d79-7946-c6f005716c00/public',
        startAt: '2023.03.13',
        endAt: '2023.04.05',
      },
      {
        id: 3,
        title: 'LG 아트센터 2023년 2학기 전시',
        owner: 'LG ART CENTER',
        type: 'notice',
        classification: '공모전',
        image: 'https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/3c924c89-8594-4de8-120f-1ec4ea968a00/public',
        startAt: '2023.04.20',
        endAt: '2023.04.26',
      },
    ])
  )
})
