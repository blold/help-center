module.exports = {
  title: 'Nauticus: Help Center',
  description: 'If you\'ve got a problem, yo, i\'ll solve it 😎',
  base:"/help/",
  themeConfig: {
    docsDir: 'docs',
    repo: 'andreliem/vuepress-netlify-cms',
    sidebar: [
      '/',
      '/welcome',
      '/test'
    ],
    nav: [
      {
        text: 'Admin',
        link: '/admin/#/',
      }
    ]
  }
}
