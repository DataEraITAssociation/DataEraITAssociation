---
title: Learn some Markdown
sidebar_position: 2
sidebar_label: "Learn some Markdown"
---

# Let's learn some markdown language

In our first page, we create a file with extension ".md" which means you can edit and format its content with [Markdown langugae](https://daringfireball.net/projects/markdown/). Personaly, I like the cheetsheet from https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet . You may find more details in both link.

Now let the fun starts!

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

## Code Blocks

Markdown code blocks are supported with Syntax highlighting in Docusaurus.

    ```jsx title="src/components/HelloDocusaurus.js"
    function HelloDocusaurus() {
        return (
            <h1>Hello, Docusaurus!</h1>
        )
    }
    ```

```jsx title="src/components/HelloDocusaurus.js"
function HelloDocusaurus() {
  return <h1>Hello, Docusaurus!</h1>;
}
```

## Admonitions

Docusaurus has a special syntax to create admonitions and callouts:
```
:::note

The content and title *can* include markdown.

:::

:::tip You can specify an optional title

Heads up! Here's a pro-tip.

:::

:::info

Useful information.

:::

:::caution

Warning! You better pay attention!

:::

:::danger

Danger danger, mayday!

:::

:::note Your Title

The content and title *can* include markdown.

:::
```

They should look like these. **You also can put a title as the last piece.**

:::note

The content and title *can* include markdown.

:::

:::tip You can specify an optional title

Heads up! Here's a pro-tip.

:::

:::info

Useful information.

:::

:::caution

Warning! You better pay attention!

:::

:::danger

Danger danger, mayday!

:::

:::note Your Title

The content and title *can* include markdown.

:::

## Add some HTML 

:::info

hm... may be not HTML but JSX

:::

Now let's copy and paste these code to your page.

```html

<div class="avatar avatar--vertical">
  <img
    class="avatar__photo avatar__photo--xl"
    src="https://avatars1.githubusercontent.com/u/977348?s=460&amp;v=4"
  />
  <div class="avatar__intro">
    <div class="avatar__name">Jordan Walke</div>
    <small class="avatar__subtitle">
      Maker of things: ReactJS. Working on:
      <a href="https://twitter.com/reasonml">@reasonml</a>. At: Facebook
      Engineering.
    </small>
  </div>
</div>

```

It should look like this.

![Add HTML](/img/docs/docusaurus/add_html.png)

The smart people like you might realize there is some warning in the console. Basically it says it doesn't like "class" but "className".

Oh Yea~!? Docusaurus is built with React.js thus it likes JSX instead.

Now let's change all the ```class=``` to ```className=``` like below and refresh your page to see if the warning is gone or not.

```jsx

<div className="avatar avatar--vertical">
  <img
    className="avatar__photo avatar__photo--xl"
    src="https://avatars1.githubusercontent.com/u/977348?s=460&amp;v=4"
  />
  <div className="avatar__intro">
    <div className="avatar__name">Jordan Walke</div>
    <small className="avatar__subtitle">
      Maker of things: ReactJS. Working on:
      <a href="https://twitter.com/reasonml">@reasonml</a>. At: Facebook
      Engineering.
    </small>
  </div>
</div>

```

Later we will talk about React.js component and JSX. Before that, I just want to tell some ```magic trick```~~~