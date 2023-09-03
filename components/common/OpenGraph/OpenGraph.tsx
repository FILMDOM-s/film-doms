import { type PropsWithChildren } from 'react'
import Head from 'next/head'

interface Props extends PropsWithChildren {
  type?: string
  title?: string
  description?: string
  image?: string
  baseUrl?: string
  path?: string
  url?: string
}

const OpenGraph = ({
  type = 'website',
  title,
  description = '필름덤즈는 영화인을 준비하는 사람들을 위한 공간입니다.',
  image,
  baseUrl = 'https://filmdoms.studio',
  path = '',
  url,
  children,
}: Props) => {
  const _title = title ? `필름덤즈 | ${title}` : '필름덤즈'
  const _url = url ?? `${baseUrl}${path}`
  // TODO: 추후 기본 이미지 경로 수정
  const _image = image ?? 'https://filmdoms.studio/og-image.png'

  return (
    <>
      <Head>
        <title>{_title}</title>
        <meta property="og:type" content={type} />
        <meta property="og:title" content={_title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={_url} />
        <meta property="og:image" content={_image} />
      </Head>
      {children}
    </>
  )
}

export default OpenGraph
