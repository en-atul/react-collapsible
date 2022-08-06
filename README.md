## React Collapsible



```
 # If you use npm:
 npm i @atul15r/react-collapsible

 # If you use yarn:
 yarn add @atul15r/react-collapsible


 ES6 Usage
 import { Collapsible } from '@atul15r/react-collapsible';

 Commonjs Usage
 var Collapsible = require('@atul15r/react-collapsible');

```


# Normal Usage

```
<Collapsible 
 items={items}
/>

```

# Usage With Custom Icon Component
   >icon component can be HTMLElement (i.e. svg/image/div/section ...etc)/React-Component

```
<Collapsible 
 items={items}
 icon={(isOpen)=> <IconComponent isOpen={isOpen}/>}
/>

```

# Usage With Custom Styles

```
<Collapsible 
 items={items}
 wrapperClassName="my-2" 
 itemClassName="bg-red-400 custom-class"
 itemContentStyle={{
        padding:"0.8rem 1.2rem",
        background:"#fafafa"
 }}
 iconActiveColor="#039af4"
 iconInActiveColor="gray"
/>

```


# Props

| name                 | type   |          | default   | description                                                                                                                                       |
|----------------------|--------|----------|-----------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| items                | array  | required | []        | it takes an array of object    eg:    {     key: number     title: string     content: string \| ReactNode   }[]                                  |
| wrapperClassName     | string | optional | undefined | add any custom class you want                                                                                                                     |
| wrapperStyle         | object | optional | undefined | eg:         wrapperStyle= {{                    background:"#ccc",                    color:"#999",                    ...etc                  }} |
| itemClassName        | string | optional | undefined | add any custom class you want                                                                                                                     |
| itemStyle            | object | optional | undefined | eg:      itemStyle= {{             padding:5                }}                                                                                    |
| itemTitleClassName   | string | optional | undefined | add any custom class you want eg: "text-lg italic" ...etc                                                                                         |
| itemTitleStyle       | object | optional | undefined | eg:         itemTitleStyle= {{         fontSize:12        }}                                                                                      |
| itemContentClassName | string | optional | undefined | add any custom class you want eg: "p-4 mx-3" ...etc                                                                                               |
| itemContentStyle     | object | optional | undefined | eg:    itemContentStyle= {{       padding:"4px 12px",       background:"#fefefe"     }}                                                           |
| iconActiveColor      | string | optional | undefined | eg: black                                                                                                                                         |
| iconInActiveColor    | string | optional | undefined | eg: gray, #039af4                                                                                                                                 |
| icon                 | func   | optional | undefined | eg:       (isOpen:boolean)=> <IconComponent isOpen={isOpen}/>                                                                                     |