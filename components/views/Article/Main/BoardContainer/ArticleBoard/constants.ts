import { Date, Likes, Tag, Title, Views, Writer } from './styles'

export const HEAD = [
  {
    value: 'tag',
    label: '태그',
    css: Tag,
  },
  {
    value: 'title',
    label: '제목',
    css: Title,
  },
  {
    value: 'writer',
    label: '작성자',
    css: Writer,
  },
  {
    value: 'createAt',
    label: '날짜',
    css: Date,
  },
  {
    value: 'views',
    label: '조회수',
    css: Views,
  },
  {
    value: 'likes',
    label: '추천',
    css: Likes,
  },
] as const
