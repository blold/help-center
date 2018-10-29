const dirTree = require('directory-tree');
const fs = require('fs');
const path = require('path');

let mdFiles = dirTree('docs/', {normalizePath: true}).children;
mdFiles.splice(-1);
mdFiles = mdFiles.slice(1).map(d => {

	return {
		title: d.path.split('_').slice(1).join(' '),
		collapsable: false,
		children: d.children.map(ch => {
			if (ch.name === 'README.md') return `${ch.path.split('/')[1]}/`;
			else return ch.path.split('/').slice(1).join('/').split('.')[0];
		})
	}
});

module.exports = {
  title: 'Nauticus: Help Center',
  description: 'If you\'ve got a problem, yo, i\'ll solve it 😎!',
  base:"/",
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
