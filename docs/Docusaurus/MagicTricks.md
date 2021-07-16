---
title: There're some tricks you may want to know
sidebar_position: 3
sidebar_label: "Magic Tricks"
---

# There're some tricks you may want to know

## How to copy the format

In Docusaurus web pages, they usually has a link called "Edit this page". It is pointing to its GITHUB source code.

For example, in reactjs.org https://reactjs.org/docs/react-without-jsx.html , you may find the link as below.

<div style={{textAlign: 'center'}}>

![Edit this page](/img/docs/docusaurus/edit_this_page.png)

</div>

After clicked on this link, you will navigate to https://github.com/reactjs/reactjs.org/blob/main/content/docs/react-without-jsx.md . You could find the button "Raw" and "Blame". Click on either of them and you can find out its source code.

<div style={{textAlign: 'center'}}>

![Button to find souce code](/img/docs/docusaurus/raw_blame.png)

</div>

## Frontmatter

At the top of each markdown page, we put some information about this page between "---" . You may wonder what it is. Well, they are ```metadata``` in each web page to tell the search engine something about the content of this page. Also, it defines the custom link and doc id, hide the right "table of content (TOC)".

Check it out here: https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-frontmatter

## Codesandbox issue

* Codesandbox maybe becomes stall and one way to resume it is to refresh the page.
* The right window showing the web page might be a bit small. You can click on button "Open new window" to open a new tab for browse it.

<div style={{textAlign: 'center'}}>

![Open new window](/img/docs/docusaurus/Open_new_window.png)

</div>

## How to center image

You might find some methods in this post https://stackoverflow.com/questions/57788506/center-a-hyperlink-or-an-image-in-docusaurus . So wrap the image with some JSX code should be one of them as below.

```jsx

<div style={{textAlign: 'center'}}>

![Open new window](/img/docs/docusaurus/Open_new_window.png)

</div>

```


Now let us begin with React.js programming in the next lesson.