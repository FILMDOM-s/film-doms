import { LinkList } from './type'

export const CONTACT: LinkList = [
  {
    title: 'Contact Us',
    link: '/contact',
  },
]

export const ABOUT: LinkList = [
  {
    title: 'About Us',
    link: '/about',
  },
]

export const FOLLOWUS: LinkList = [
  {
    title: 'Instagram',
    link: 'https://www.instagram.com/filmdoms/',
  },
  {
    title: 'Twitter',
    link: 'https://twitter.com/filmdoms',
  },
  {
    title: 'Facebook',
    link: 'https://www.facebook.com/filmdoms',
  },
]

export const FILMDOMS_INFO = {
  대표자: '허창훈',
  등록번호: '273-92-01709',
  등록일: '2022.12.01',
  contact: 'Filmdomaypole@naver.com',
} as const
