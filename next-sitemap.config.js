/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: 'https://filmdoms.studio',
  changefreq: 'daily',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
}
