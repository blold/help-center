module.exports = {
  title: 'Netlify CMS + VuePress',
  description: 'Netlify + VuePress',
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
