const ADMIN = {
  id: 1,
  nickname: '운영자',
  profile: null,
}

export const NOTICE_DATA: Article.Notice[] = [
  {
    id: 1,
    tag: '공지',
    isContainImage: false,
    title: '게시판 이용안내',
    comments: Array.from({ length: 30 }, (_, i) => i + 1),
    writer: ADMIN,
    createAt: '2023.01.01',
    updateAt: '2023.01.01',
    views: 1500,
    likes: 20,
    category: 'notice',
  },
  {
    id: 2,
    tag: '공지',
    isContainImage: true,
    title: '게시판 이용안내',
    comments: [],
    writer: ADMIN,
    createAt: '2023.01.01',
    updateAt: '2023.01.01',
    views: 850,
    likes: 100,
    category: 'notice',
  },
]
