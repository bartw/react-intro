# JSX

In this example I'm going to introduce JSX syntax.

Writing React.createElement for everything is too verbose.
So let's replace it with JSX.

JSX looks like html written in a javascript file. It is used to describe React elements.
JSX is not a template language, any javascript expression can be used in JSX.

Replacing React.createElement with JSX is easy in my hello world. I just use the html syntax.

```js
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
    <h1>Hello world!</h1>,
    document.getElementById('root')
);
```