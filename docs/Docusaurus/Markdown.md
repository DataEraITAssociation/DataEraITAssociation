---
title: Learn some Markdown
sidebar_position: 2
sidebar_label: "Learn some Markdown"
---

# Let's learn some markdown language

In our first page, we create a file with extension ".md" which means you can edit and format its content with [Markdown langugae](https://daringfireball.net/projects/markdown/). Personaly, I like the cheetsheet from https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet . You may find more details in both link.

Now let the fun start!

## Add a few headers

Copy the follow codes into your first page and see what happen.

:::caution

Warning! You should always start from a new line and put a blank to seperate your header text.

:::

```

# School

## Rooms

### Teachers

#### Students

##### Books

###### Every pages

```

Your webpage should looks like this. If you have **sharp eyes**, you may find out there are two items listed on the right side.

![Header and Sidebar](/img/docs/docusaurus/Header_sidebar.png)

You are right! They are generated automatically from ## , ### .

## Add an image

To add a photo to your webpage is easy, you have to upload an image. Go to folder "static -> img", click on upload button as below.

![Upload Image](/img/docs/docusaurus/upload_image.png)

After you update an image to folder ```static -> image```, now you may put a link in your page.

```

![Some text about your photo](/img/my-photo-name.png)

```

:::danger Replace some codes

You have to replace "Some text about your photo" in your version and change ```my-photo-name``` to your actual photo name.

:::

Now you should get something like this.

![Add Image Link](/img/docs/docusaurus/add_image_link.png)

> Hey, it is your turn to explore more markdown features. You can add **codeblock**, **link**, **list**, **table**, and even ```inline HTML``` ......
> 
> Go to visit https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet
> 
> Let me know if you like it.

Next we will go more advance mode with React.js component.