const path = require('path')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
  // stories에 작성된 경로의 story가 추가됩니다.
  stories: [
    '../(components|pages|assets/svgs|styles/emotion)/**/*.stories.mdx',
    '../(components|pages|assets/svgs|styles/emotion)/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-next',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  staticDirs: ['../public'],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: [
              // storybook에 ts를 사용하기 위한 설정입니다.
              '@babel/preset-env',
              '@babel/preset-typescript',

              // emotion의 css prop을 사용하기 위한 설정입니다.
              '@emotion/babel-preset-css-prop',
            ],
            plugins: [
              // react를 사용하기 위한 설정입니다.
              'babel-plugin-react-require',
            ],
          },
        },
      ],
    })

    // tailwind css를 사용하기 위한 설정입니다.
    config.module.rules.push({
      test: /\.css$/i,
      use: [
        {
          loader: 'postcss-loader',
          options: {
            implementation: require.resolve('postcss'),
          },
        },
      ],
      include: path.resolve(__dirname, '../'),
    })

    // tsconfig에서 설정한 alias를 사용하기 위한 설정입니다.
    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin({
        extensions: config.resolve.extensions,
      }),
    ]

    // 기존 svg 규칙들을 제거합니다.
    config.module.rules
      .filter(rule => rule.test.test('.svg')) // svg 찾기
      .forEach(rule => {
        rule.exclude = /\.svg$/i
      })

    // svg를 component로 사용하기 위한 설정입니다.
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}
