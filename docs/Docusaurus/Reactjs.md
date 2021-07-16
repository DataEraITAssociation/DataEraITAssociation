---
title: Learn ReactJS component
sidebar_position: 4
sidebar_label: "Learn ReactJS component"
---

import Link from '@docusaurus/Link';

# Learn ReactJS component

## Let add a small component

At the last part of <Link to="/docs/Docusaurus/Markdown#add-some-html">Add some HTML</Link>, I mentioned about JSX . That's part of ReactJS thing. Now let's create a color style component.

:::info

JSX stands for JavaScript XML~~~

You should find more detail in official document [Markdown Features](https://docusaurus.io/docs/markdown-features/react)

:::

Now add this JSX code in order to change the color of your text.

```jsx

<span style={{backgroundColor: "green"}}>Docusaurus green</span>

```

:::info

* JSX is slightly different from HTML. It uses ```className``` instead of ```class``` . 
* In HTML, we usually wraps property value with ```"``` like ```<span style="background-color: green">Docusaurus green</span>```. But in JSX, it uses Javascript object to wrap the property value as above.
* Learn more about JSX at [W3School](https://www.w3schools.com/react/react_jsx.asp)
* Learn style at [reactjs.org](https://reactjs.org/docs/dom-elements.html#style)

:::

Let's do more codes. You can change the code to a function.

```jsx

export function BGColor ({children, color}) {
    return (
        <span
            style={{
            backgroundColor: color
            }}>
            {children}
        </span>
    );
};

<BGColor color="#25c2a0">Docusaurus green</BGColor>
<BGColor color="red">I'm red color.</BGColor>

```

Cool! now we have a component. You may change its color in your markdown file by using your component.

![Add component](/img/docs/docusaurus/add_component.png)

Look! there is a special property called ```children``` whose value is from the element between your new tag.

Meanwhile, your custom property ```color``` is given from ```<BGColor color="red">``` .

## Move the component outside my markdown file

If you put the component code in the same markdown file, it will eventually look a mess. Let us move these code into a new file.

Follow the steps and see how it works.

* Create a file called ```BGColor.js``` which is a javascript file.
* Add the first line ```import React from 'react';``` into your new file.
* Cut and paste the ```function``` from your markdown file here. 

![Create component file](/img/docs/docusaurus/create_component_file.png)

* Now go back to your markdown file and add a reference to your new component as below

```js

import { BGColor } from './BGColor';

```

![Add component reference](/img/docs/docusaurus/add_file_reference.png)

Now you should have more fun to code with ReactJS.

