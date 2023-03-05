const path = require('path')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
  // components, pages 폴더 내부만 추가합니다.
  stories: [
    '../(components|pages)/**/*.stories.mdx',
    '../(components|pages)/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
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

    return config
  },
}
