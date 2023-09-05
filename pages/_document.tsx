import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ko">
      <title>필름덤즈</title>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/static/pretendard.css"
        />
        <meta
          name="google-site-verification"
          content={process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION}
        />
        <meta
          name="naver-site-verification"
          content={process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION}
        />
        <meta
          name="description"
          content={process.env.NEXT_PUBLIC_DESCRIPTION}
        />
        <meta property="og:type" content={process.env.NEXT_PUBLIC_OG_TYPE} />
        <meta property="og:title" content={process.env.NEXT_PUBLIC_OG_TITLE} />
        <meta
          property="og:description"
          content={process.env.NEXT_PUBLIC_OG_DESCRIPTION}
        />
        <meta property="og:image" content={process.env.NEXT_PUBLIC_OG_IMAGE} />
        <meta
          property="og:site_name"
          content={process.env.NEXT_PUBLIC_OG_SITE_NAME}
        />
        <meta property="og:url" content="https://filmdoms.studio" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
