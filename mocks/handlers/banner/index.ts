import { rest } from 'msw'

export const getBanners = rest.get('/api/banner', (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json([
      {
        id: 1,
        type: 'movie',
        image:
          'https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/49cb4117-f183-4976-f203-ee463c556200/public',
        title: '[홍콩영화] 중경삼림 리마스터링',
        subtitle: '"내 사랑의 유통기한은..."',
      },
      {
        id: 2,
        type: 'movie',
        image:
          'https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/0f3d744c-20b1-4e82-f322-df32336ad700/public',
        title: "[한국독립영화] '철원기행'",
        subtitle: '결국 산다는 대답',
      },
      {
        id: 3,
        type: 'movie',
        image:
          'https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/bc6fe661-53aa-4c87-c3d7-7d16f1154600/public',
        title: "[한국독립영화] '철원기행'",
        subtitle: '결국 산다는 대답',
      },
      {
        id: 4,
        type: 'movie',
        image:
          'https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/0823976f-4a91-4693-f767-d62084c58400/public',
        title: "[한국독립영화] '철원기행'",
        subtitle: '결국 산다는 대답',
      },
      {
        id: 5,
        type: 'movie',
        image:
          'https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/1bb3ba23-e983-4f16-b117-664eaf154600/public',
        title: "[한국독립영화] '철원기행'",
        subtitle: '결국 산다는 대답',
      },
    ])
  )
})
