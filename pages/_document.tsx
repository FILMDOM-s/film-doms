import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <title>필름덤즈</title>
        <link
          rel="stylesheet"
          type="text/css"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/static/pretendard.css"
        />
        <meta
          name="google-site-verification"
          content="Hvb2wMyklXkCej_4lFCpfNLSjX2CwEIdbbCzUG31vbw"
        />
        <meta
          name="naver-site-verification"
          content="b4bfad55f5b0004677f55afa4a9c0a715ddf8cb9"
        />
        <meta name="description" content="영화인의 모든 것, 필름덤즈" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="필름덤즈" />
        <meta property="og:description" content="영화인의 모든 것, 필름덤즈" />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:url" content="https://filmdoms.studio" />
        <meta property="og:site_name" content="필름덤즈" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
