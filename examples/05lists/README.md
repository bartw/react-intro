# Lists

In this example I'm going to render a list.
The key for usings lists in React is to use keys for list items.
Using a key makes it easy for React to determine which items have changed.

I'm going to make a new component that shows a list of names.
The list names is passed using the props and we can map this list to list of li elements using jsx.

```js
import React from 'react';

const NameList = ({ names }) => {
    const listItems = names.map((name) => <li>{name}</li>);
    return (
        <ul>
            {listItems}
        </ul>
    );
};
export default NameList;
```

And in the app-component I can use this new component.

```js
import React from 'react';
import Hello from './Hello';
import NameList from './NameList';

const names = ['Jan', 'Piet', 'Joris', 'Korneel'];

const App = () => (
    <div>
        <Hello name="world" />
        <NameList names={names} />
    </div>
);
export default App;
```

If I look in the browser, I can see that my list has rendered just fine.
But in the console I can see a warning that reminds me to add a key to my list items.
This key should be unique for each list item.
Because I don't have a real unique key in my list but the names are all different I can just use
the name for now.

```js
import React from 'react';

const NameList = ({ names }) => {
    const listItems = names.map((name) => <li key={name}>{name}</li>);
    return (
        <ul>
            {listItems}
        </ul>
    );
};
export default NameList;
```