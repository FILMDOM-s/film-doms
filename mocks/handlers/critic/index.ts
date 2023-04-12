import { rest } from 'msw'

export const getCritics = rest.get('/api/critic', (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json([
      {
        id: 1,
        image:
          'https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/722098c6-21f9-41da-1fe7-37cd06a3c200/public',
        tag: 'Movie',
        title:
          '테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트',
        description:
          '테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트',
        createAt: '2023. 02. 11',
        author: '글쓴이',
      },
      {
        id: 2,
        image:
          'https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/6345e0ba-43ce-4d71-a483-d3594ff97700/public',
        tag: 'Director',
        title: '콘텐츠 타이틀 이 영역은 최대 28자까지 보입니다.',
        description:
          '콘텐츠 본문 폰트: 프리텐다드 16px (Medium) 이 영역은 최대 75자까지 보입니다.',
        createAt: '2023. 02. 11',
        author: '글쓴이',
      },
      {
        id: 3,
        image:
          'https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/1d4216e9-2c86-45f8-565b-d1cb217e9b00/public',
        tag: 'Actor',
        title: '콘텐츠 타이틀 이 영역은 최대 28자까지 보입니다.',
        description:
          '콘텐츠 본문 폰트: 프리텐다드 16px (Medium) 이 영역은 최대 75자까지 보입니다.',
        createAt: '2023. 02. 11',
        author: '글쓴이',
      },
      {
        id: 4,
        image:
          'https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/62cb1d37-231c-43ad-40b5-0ccb26db0900/public',
        tag: 'Movie',
        title: '콘텐츠 타이틀 이 영역은 최대 28자까지 보입니다.',
        description:
          '콘텐츠 본문 폰트: 프리텐다드 16px (Medium) 이 영역은 최대 75자까지 보입니다.',
        createAt: '2023. 02. 11',
        author: '글쓴이',
      },
      {
        id: 5,
        image:
          'https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/257ebb42-8702-463a-7288-dc6c0454d700/public',
        tag: 'Actor',
        title: '콘텐츠 타이틀 이 영역은 최대 28자까지 보입니다.',
        description:
          '콘텐츠 본문 폰트: 프리텐다드 16px (Medium) 이 영역은 최대 75자까지 보입니다.',
        createAt: '2023. 02. 11',
        author: '글쓴이',
      },
      {
        id: 6,
        image:
          'https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/3d3711d6-ab4b-4e3d-8985-eb79ac8d7700/public',
        tag: 'Editor',
        title: '콘텐츠 타이틀 이 영역은 최대 28자까지 보입니다.',
        description:
          '콘텐츠 본문 폰트: 프리텐다드 16px (Medium) 이 영역은 최대 75자까지 보입니다.',
        createAt: '2023. 02. 11',
        author: '글쓴이',
      },
    ])
  )
})
