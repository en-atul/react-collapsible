## React Collapsible


```
 # If you use npm:
 npm i @atul15r/react-collapsible

 # If you use yarn:
 yarn add @atul15r/react-collapsible


 ES6 Usage
 import {Collapsible} from '@atul15r/react-collapsible';

```


>Usage

```
<Collapsible 
 items={items}
 icon={(isOpen)=> <IconComponent isOpen={isOpen}/>}
 wrapperClassName="Any Custom Classname/Tailwindcss classname" 
 itemClassName="Any Custom Classname/Tailwindcss classname"
 itemTitleClassName="Any Custom Classname/Tailwindcss classname"
 itemContentClassName="Any Custom Classname/Tailwindcss classname"
 iconActiveColor="Any Custom Classname/Tailwindcss classname"
 iconInActiveColor="Any Custom Classname/Tailwindcss classname"
/>

```



>Props

| name                 | type                                     |          | default   | description                                                                                                       |
|----------------------|------------------------------------------|----------|-----------|-------------------------------------------------------------------------------------------------------------------|
| items                | array                                    | required | []        | it takes an array of object    eg:    {     key: number     title: string     content: string \| ReactNode   }[]  |
| wrapperClassName     | string                                   | optional | undefined | add any custom class you want                                                                                     |
| itemClassName        | string                                   | optional | undefined | add any custom class you want                                                                                     |
| itemTitleClassName   | string                                   | optional | undefined | add any custom class you want                                                                                     |
| itemContentClassName | string                                   | optional | undefined | add any custom class you want                                                                                     |
| iconActiveColor      | string                                   | optional | undefined | eg: gray/#039af4                                                                                                  |
| iconInActiveColor    | string                                   | optional | undefined | eg: gray/#039af4                                                                                                  |
| icon                 | func  (isOpen:boolean)=><IconComponent/> | optional | undefined |                                                                                                                   |