<h1 align="center">
    babel-statictype-plugin
</h1>

[![Build Status](https://travis-ci.org/albertzzy/babel-statictype-plugin.svg?branch=master)](https://travis-ci.org/albertzzy/babel-statictype-plugin)

## install
```bash
npm install babel-statictype-plugin

```

## usage 

```js
{
    "plugins":["babel-statictype-plugin"]
}


//in your code('xx' is a custom name,also u can catch up with the example)
let Num_xx;   // number
let Str_xx;   //string
let Bool_xx;  // boolean
let Obj_xx;   // object
let Null_xx;  //null
let Und_xx;  //undefined
let Sym_xx;   //Symbol

function foo(Num_a,Str_b){

}

foo(1,'a') // won't throw an error
foo(1,1) // will throw an error,cause second 1 is not a string-type value


```