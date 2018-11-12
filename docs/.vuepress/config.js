const dirTree = require('directory-tree');
const fs = require('fs');
const path = require('path');

let DirStructure = dirTree('docs/', {normalizePath: true}).children;
let mdFiles = [];

DirStructure.forEach(d => {
  if (d.name !== ".vuepress" && d.name !== "README.md") {
    mdFiles.push({
      title: d.path.split('/').slice(1).join(' ').split("_")[1],
      collapsable: false,
      children: d.children.map(ch => {
        if (ch.name === 'README.md') return `${ch.path.split('/')[1]}/`;
        else return ch.path.split('/').slice(1).join('/').split('.')[0];
      })
    })
  }
});

module.exports = {
  title: 'Nauticus Help Center',
  description: 'FAQ and other Helpful Information',
  base:"/help/",
  themeConfig: {
    docsDir: 'docs',
    repo: 'NauticusOfficial/help-center',
		sidebar: mdFiles,
    nav: [
      {
        text: 'Admin',
        link: '/admin/#/',
      }
    ]
  }
}
