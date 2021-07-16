---
title: Getting Started
sidebar_position: 1
sidebar_label: "Get started"
---
# First time to use Docusaurus?

:::tip My tip

We will follow the steps below from 0 to hero!!!

:::

---

- [You need two accounts](#need-2-accounts)
- [Try Docusaurus](#try-docusaurus)
- [Don't panic](#donot-panic)
- [First page](#first-page)

---

## You need two accounts {#need-2-accounts}

First of first, you must have a GITHUB account. If you don't have it, go to https://github.com/ . Click "Sign up" button to register.

Secondly, you should register an account with CodeSandbox at https://codesandbox.io/ . You may use your new GITHUB account or Google account.

**Now let's have some fun~~~**

## Try Docusaurus {#try-docusaurus}

export const CoolButton = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '10px',
      cursor: 'pointer',
    }}
    onClick={() => {
      alert('Hey! Not me. You should find it on the CodeSandbox website!!!');
    }}>
    {children}
  </span>
);

Login your CodeSandbox at https://codesandbox.io/ , click on button <CoolButton color="rgb(9, 113, 241)">Create Sandbox</CoolButton> .

Now you should type "Docusaurus" in the filter input as below.

![template filter](/img/docs/docusaurus/template_filter.png)

** Choose docusaurus item, BOOM!!! A new sandbox is creating...... **

![Codesandbox Docusaurus](/img/docs/docusaurus/codesandbox_docusaurus.png)

## Don't be panic! {#donot-panic}

There are menus, buttons, codes, windows...... **Oh, No!** They are everywhere!!!

:::info

Calm down and breath~~~

:::

We will get into each part soon :-)

## First page {#first-page}

Let's have some fun by creating the first page. Find the folder called "pages" as below then click on the tiny "New page" button. (There is 1-2-3 to guide you in the picture.)

![Create page](/img/docs/docusaurus/createpage_bar.png)

Give it a name "myfirstpage.md".

:::tip File Extension

You may have .md or .mdx as its extension. 
Surely we will cover it later. But you can visit [markdown features](https://docusaurus.io/docs/markdown-features) to learn more.

:::

Now put your code below to the file myfirstpage.md .

```jsx title="src/pages/myfirstpage.md"
---
title: my hello page title
description: my hello page description
---

# Hello

How are you?
```

![First page code](/img/docs/docusaurus/firstcoding_page_md.png)

:::danger Change your URL

Make sure your URL is pointing to "myfirstpage" in order to show your content.

:::

We will have more experiments coming in the next lesson. Let's go!