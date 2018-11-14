const dirTree = require('directory-tree');
const fs = require('fs');
const path = require('path');

let DirStructure = dirTree('docs/', {normalizePath: true}).children;
let mdFiles = [];
mdFiles.push('/');
DirStructure.forEach(d => {
  if (d.name !== ".vuepress" && d.name !== "README.md" && d.name !== "index.md") {
		d.name = d.name.split('.md')[0];
		mdFiles.push(`/${d.name}`);
  }
});

console.log(mdFiles)

module.exports = {
  title: 'Nauticus Help Center',
  description: 'FAQ and other Helpful Information',
  base: "/",
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
