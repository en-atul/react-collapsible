## React Collapsible

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)


![Alt text](visual/react-collapsible.png?raw=true "React Collapsible")


``` js
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

![Alt text](visual/react-collapsible.gif?raw=true "React Collapsible")


``` js
<Collapsible 
 items={items}
/>

```

# Usage With Custom Icon Component
   >icon component can be HTMLElement (i.e. svg/image/div/section ...etc)/React-Component

![Alt text](visual/react-collapsible-custom-icon.gif?raw=true "React Collapsible")


``` js
<Collapsible 
 items={items}
 icon={(isOpen)=> <IconComponent isOpen={isOpen}/>}
/>

```

# Usage With Custom Styles

- Purple

![Alt text](visual/react-collapsible-purple.gif?raw=true "React Collapsible")

``` js
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

```

- Fade Yellow

![Alt text](visual/react-collapsible-yellow.gif?raw=true "React Collapsible")

``` js
<Collapsible 
 items={items}
 itemTitleStyle={{
        background: `repeating-linear-gradient(
    45deg,
    rgba(0, 0, 0, 0.2),
    rgba(0, 0, 0, 0.2) 10px,
    rgba(0, 0, 0, 0.3) 10px,
    rgba(0, 0, 0, 0.3) 20px
  ),
  url(http://s3-us-west-2.amazonaws.com/s.cdpn.io/3/old_map_@2X.png)`,
  font-weight: 600,
  color: "#000"
 }}
 iconActiveColor="#000"
 iconInActiveColor="#000"
/>

```


# Props

| name                 | type   |          | default   | description                                                                                                                                         |
|----------------------|--------|----------|-----------|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| items                | array  | required | []        | it takes an array of object    eg:    `{     key: number     title: string     content: string \| ReactNode   }[]`                                  |
| wrapperClassName     | string | optional | undefined | add any custom class you want                                                                                                                       |
| wrapperStyle         | object | optional | undefined | eg:         `wrapperStyle= {{                    background:"#ccc",                    color:"#999",                    ...etc                  }}` |
| itemClassName        | string | optional | undefined | add any custom class you want                                                                                                                       |
| itemStyle            | object | optional | undefined | eg:      `itemStyle= {{             padding:5                }} `                                                                                   |
| itemTitleClassName   | string | optional | undefined | add any custom class you want eg: "text-lg italic" ...etc                                                                                           |
| itemTitleStyle       | object | optional | undefined | eg:         `itemTitleStyle= {{         fontSize:12        }}`                                                                                      |
| itemContentClassName | string | optional | undefined | add any custom class you want eg: "p-4 mx-3" ...etc                                                                                                 |
| itemContentStyle     | object | optional | undefined | eg:    `itemContentStyle= {{       padding:"4px 12px",       background:"#fefefe"     }}`                                                           |
| iconActiveColor      | string | optional | undefined | eg: black                                                                                                                                           |
| iconInActiveColor    | string | optional | undefined | eg: gray, #039af4                                                                                                                                   |
| icon                 | func   | optional | undefined | eg:   `<Collapsible  icon={(isOpen:boolean) => <IconComponent isOpen={isOpen}/>} />`                                                                |