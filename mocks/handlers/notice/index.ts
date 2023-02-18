import { rest } from 'msw'

export const getNotices = rest.get('/api/notice', (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json([
      {
        id: 1,
        title: '공지사항입니다.',
        image: 'https://picsum.photos/seed/notice1/161/210',
        startAt: '2023.02.11',
        endAt: '2023.02.28',
      },
      {
        id: 2,
        title: '공지사항입니다.',
        image: 'https://picsum.photos/seed/notice2/161/210',
        startAt: '2023.02.11',
        endAt: '2023.02.28',
      },
      {
        id: 3,
        title: '공지사항입니다.',
        image: 'https://picsum.photos/seed/notice3/161/210',
        startAt: '2023.02.11',
        endAt: '2023.02.28',
      },
      {
        id: 4,
        title: '공지사항입니다.',
        image: 'https://picsum.photos/seed/notice4/161/210',
        startAt: '2023.12.11', // 아직 시작하지 않은 경우
        endAt: '2023.12.28',
      },
      {
        id: 5,
        title: '공지사항입니다.',
        image: 'https://picsum.photos/seed/notice5/161/210',
        startAt: '2023.01.11',
        endAt: '2023.02.01', // 날짜가 지난 경우
      },
    ])
  )
})
