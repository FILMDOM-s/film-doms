import { rest } from 'msw'

export const getCritics = rest.get('/api/critic', (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json([
      {
        id: 1,
        image: 'https://picsum.photos/seed/critic1/400/600',
        tag: '말머리',
        title: '영화비평에 관한 글 타이틀이 여기 들어갑니다. 최대 두 줄입니다.',
        createAt: '2023.02.11',
      },
      {
        id: 2,
        image: 'https://picsum.photos/seed/critic2/400/600',
        tag: '말머리 길이 테스트입니다.말머리 길이 테스트입니다.말머리 길이 테스트입니다.말머리 길이 테스트입니다.말머리 길이 테스트입니다.말머리 길이 테스트입니다.말머리 길이 테스트입니다.말머리 길이 테스트입니다.말머리 길이 테스트입니다.말머리 길이 테스트입니다.말머리 길이 테스트입니다.',
        title:
          '영화비평에 관한 글 타이틀이 여기 들어갑니다. 최대 두 줄입니다.영화비평에 관한 글 타이틀이 여기 들어갑니다. 최대 두 줄입니다.영화비평에 관한 글 타이틀이 여기 들어갑니다. 최대 두 줄입니다.영화비평에 관한 글 타이틀이 여기 들어갑니다. 최대 두 줄입니다.영화비평에 관한 글 타이틀이 여기 들어갑니다. 최대 두 줄입니다.영화비평에 관한 글 타이틀이 여기 들어갑니다. 최대 두 줄입니다.영화비평에 관한 글 타이틀이 여기 들어갑니다. 최대 두 줄입니다.',
        createAt: '2023.02.11',
      },
      {
        id: 3,
        image: 'https://picsum.photos/seed/critic3/400/600',
        tag: '말머리',
        title: '영화비평에 관한 글 타이틀이 여기 들어갑니다. 최대 두 줄입니다.',
        createAt: '2023.02.11',
      },
      {
        id: 4,
        image: 'https://picsum.photos/seed/critic4/400/600',
        tag: '말머리',
        title: '영화비평에 관한 글 타이틀이 여기 들어갑니다. 최대 두 줄입니다.',
        createAt: '2023.02.11',
      },
      {
        id: 5,
        image: 'https://picsum.photos/seed/critic5/400/600',
        tag: '말머리',
        title: '영화비평에 관한 글 타이틀이 여기 들어갑니다. 최대 두 줄입니다.',
        createAt: '2023.02.11',
      },
    ])
  )
})
