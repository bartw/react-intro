# Props

In this example I'm going to introduce props.
Components are the functions of React and props are the arguments.

I'm going to make to "world" in "Hello world!" variable.
Therefore I need to pass it in using props to the hello-component.

```js
import React from 'react';

const Hello = (props) => <h1>Hello {props.name}!</h1>;
export default Hello; 
```

And in the app-component I can pass the name as an attribute.

```js
import React from 'react';
import Hello from './Hello';

const App = () => <Hello name="world" />;
export default App;
```

Because I only need the name property from the props, I can ES6-ify my hello-component a little.

```js
import React from 'react';

const Hello = ({name}) => <h1>Hello {name}!</h1>;
export default Hello; 
```