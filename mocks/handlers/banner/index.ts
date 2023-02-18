import { rest } from 'msw'

export const getBanners = rest.get('/api/banner', (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json({
      banner: [
        {
          id: 1,
          image: 'https://picsum.photos/seed/banner1/2880/760',
          title: '이것은 배너입니다.',
        },
        {
          id: 2,
          image: 'https://picsum.photos/seed/banner2/2880/760',
          title:
            '이것은 배너입니다.이것은 배너입니다.이것은 배너입니다.이것은 배너입니다.이것은 배너입니다.이것은 배너입니다.이것은 배너입니다.이것은 배너입니다.이것은 배너입니다.이것은 배너입니다.이것은 배너입니다.이것은 배너입니다.이것은 배너입니다.이것은 배너입니다.이것은 배너입니다.이것은 배너입니다.이것은 배너입니다.이것은 배너입니다.이것은 배너입니다.',
        },
        {
          id: 3,
          image: 'https://picsum.photos/seed/banner3/2880/760',
          title: '이것은 배너입니다.',
        },
        {
          id: 4,
          image: 'https://picsum.photos/seed/banner4/2880/760',
          title: '이것은 배너입니다.',
        },
        {
          id: 5,
          image: 'https://picsum.photos/seed/banner5/2880/760',
          title: '이것은 배너입니다.',
        },
      ],
    })
  )
})
