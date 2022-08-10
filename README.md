## React Collapsible

![Build](https://github.com/atul15r/react-collapsible/actions/workflows/main.yml/badge.svg)
![Download](https://img.shields.io/npm/dt/@atul15r/react-collapsible.svg)

**React-Collapsible is an animated collapsible/expandable component which is
designed for react app.**

**[Live Demo](https://codesandbox.io/s/atul15r-react-collapsible-zcrjlw)**

![Alt text](visual/react-collapsible.png?raw=true 'React Collapsible')

# Installation

```js
 # If you use npm:
 npm i @atul15r/react-collapsible

 # If you use yarn:
 yarn add @atul15r/react-collapsible


 ES6 Usage
 import { Collapsible } from '@atul15r/react-collapsible';

 Commonjs Usage
 var Collapsible = require('@atul15r/react-collapsible');

```

# Quick Start

![Alt text](visual/react-collapsible-simple.gif?raw=true 'React Collapsible')

```js
<Collapsible items={items} />
```

# Usage With Custom Styles

> icon component can be HTMLElement (i.e. svg/image/div/section
> ...etc)/React-Component

![Alt text](visual/react-collapsible-black.gif?raw=true 'React Collapsible')

```js

import React from 'react';
import { Collapsible } from '@atul15r/react-collapsible';

const items = [
  {
    key: 1,
    title: "Gain The Competitive Advantage",
    content:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available."
  },
  {
    key: 2,
    title: "Learn The Ins & Outs Of Microservices",
    content:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available."
  },
];


const App = () => {
  return (
   <Collapsible
 items={items}
 itemTitleStyle={{
         background: `repeating-radial-gradient(
         circle,
         purple,
         purple 10px,
         #4b026f 10px,
         #4b026f 20px
  )`,
  font-weight: 500,
  color: "#fff"
 }}
 iconActiveColor="#fff"
 iconInActiveColor="#fff"
/>
  );
};

export default App;

```

# Props

| name                 | type   | required | default   | description                                                                                   |
| -------------------- | ------ | -------- | --------- | --------------------------------------------------------------------------------------------- |
| items                | array  | true     | []        | it takes an array of object `{ key: number title: ReactNode content: string \| ReactNode }[]` |
| wrapperClassName     | string | false    | undefined | add any custom class you want                                                                 |
| wrapperStyle         | object | false    | undefined | `wrapperStyle= {{ background:"#ccc", color:"#999", ...etc }}`                                 |
| itemClassName        | string | false    | undefined | add any custom class you want                                                                 |
| itemStyle            | object | false    | undefined | ` itemStyle= {{ padding:4, }}`                                                                |
| itemTitleClassName   | string | false    | undefined | add any custom class you want eg: "text-lg italic" ...etc                                     |
| itemTitleStyle       | object | false    | undefined | `itemTitleStyle= {{ fontSize:12 }}`                                                           |
| itemContentClassName | string | false    | undefined | add any custom class you want eg: "p-4 mx-3" ...etc                                           |
| itemContentStyle     | object | false    | undefined | `itemContentStyle= {{ padding:"4px 12px", background:"#fefefe" }}`                            |
| icon                 | func   | false    | undefined | `<Collapsible icon={(isOpen:boolean) => <IconComponent isOpen={isOpen}/>} />`                 |
| iconStyle            | object | false    | undefined | ` iconStyle= {{ activeColor:"#fff", inactiveColor: "#fff", width: 20, height: 20 }}`          |
