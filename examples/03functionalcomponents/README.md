# Functional components

In this example I'm going to create a component or two.

React is a library to create composable user interfaces.
Now it's time to create a couple of those composable building blocks, components.

I will also create separate files for our components to keep our code nice and organized.
I create a folder components and add a file for each of the components to the folder.

React components are created with a capital first letter to differentiate from actual html elements.

```shell
mkdir src/components
touch src/App.jsx src/Hello.jsx
```

The hello-component will display the hello world text.
A component is just a function that returns some JSX.

```js
import React from 'react';

export default function Hello() {
    return <h1>Hello world!</h1>;
}
```

The app-component will display the hello-component.

```js
import React from 'react';
import Hello from './Hello';

export default function App () {
    return <Hello />;
}
```

Now I can import the app-component in my index.js and render it.

```js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
```

This looks nice but can be a little better.
I'm going to use some more ES6 and smarter imports to make it look better.

index.js

```js
import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

render(
    <App />,
    document.getElementById('root')
);
```

App.jsx

```js
import React from 'react';
import Hello from './Hello';

const App = () => <Hello />;
export default App;
```

Hello.jsx

```js
import React from 'react';

const Hello = () => <h1>Hello world!</h1>;
export default Hello;
```