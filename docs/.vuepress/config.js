const dirTree = require('directory-tree');

let DirStructure = dirTree('docs/', {normalizePath: true}).children;
let mdFiles = [];

DirStructure.forEach(d => {
  if (d.name !== ".vuepress" && d.name !== "README.md" && d.name !== "index.md") {
		d.name = d.name.split('.md')[0];
		mdFiles.push(`/${d.name}`);
  }
});

// Sort the filenames
mdFiles = mdFiles.sort((a, b) => a.localeCompare(b, undefined, {
	numeric: true,
	sensitivity: 'base'
}));



module.exports = {
  title: 'Nauticus Help Center',
  description: 'FAQ and other Helpful Information',
	base: "/help",
  themeConfig: {
    docsDir: 'docs',
		repo: 'NauticusOfficial/help-center',
		sidebar: mdFiles,
    nav: false
  }
}
