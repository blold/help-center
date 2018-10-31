---
title: Create New Page
---

## Create Page
In order to add a page to existing documentation in the `/docs` folder, you need to create a new `Markdown` or `.md` page in a folder that already exists or by creating a new one.

## Formate of the page
In order to be in compliance with `vuepress`,  your page needs to have a minimum of this setup:
```
---
title:  YOUR TITLE GOES HERE
---

YOUR MARKDOWN GOES HERE
```
Whatever you name the title, it will appear in the `sidbar` as a link.


## 	Deployment
After writing down your documentation and you are happy with it in development, you are now ready to deploy it to the live site.
These are the steps that you need to follow in order to have a successful deployment.
`Important` You can use Github's Desktop to deploy your changes without a hiccup. The following instruction will show you just that.

### FETCH
![Fetch](/images/FETCH.png)

Whenever you are changing a file(s) and working with a multiple poeple on the same repo, you always have to `fetch` first, before you commit.
What `fetch` does is basically goes to the main repository on `Github` or `Bitbucket` and pulls the latest changes to your local repository.


### COMMIT
![COMMIT](/images/COMMIT.jpg)

When you make a change to a file(s), upon saving, your changes will appear in the `Github Desktop` windows.
In order to send your changes to your co-workers, you have to commit it to the online git repository.
To do that, you have to write a `commit` message and `summary`, in the highlighted space, outlining the reason for your changes and once you've done that,
you can go ahead and click the `commit` button.

### PUSH
![PUSH](/images/PUSH.jpg)

In order to send your changes to remote repository, you need to do one last step and that is to `push` your changes.
You can do that by clicking the highlighted `Push origin` button. Once successfully pushed, your changes will appear in a minute or two.