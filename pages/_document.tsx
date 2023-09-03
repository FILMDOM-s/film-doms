import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ko">
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
          content="Hvb2wMyklXkCej_4lFCpfNLSjX2CwEIdbbCzUG31vbw"
        />
        <meta
          name="naver-site-verification"
          content="b4bfad55f5b0004677f55afa4a9c0a715ddf8cb9"
        />
        <meta name="description" content="영화인의 모든 것, 필름덤즈" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
