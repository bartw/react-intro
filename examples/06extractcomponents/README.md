# Extract components

This example shows a simple but important best practice in React.
In the previous example we created a component that shows a list of names.
While this component is small now, the list item can be quite complex.
It is good practice to keep components as small as possible so now I'm going to extract the list item into a component.

```js
import React from 'react';

const NameListItem = ({ name }) => <li>{name}</li>;
export default NameListItem;
```

And in the namelist-component I can use this new component.
Notice that the key is now on the component and did not move into the component.

```js
import React from 'react';
import NameListItem from './NameListItem';

const NameList = ({ names }) => {
    const listItems = names.map((name) => <NameListItem key={name} name={name} />);
    return (
        <ul>
            {listItems}
        </ul>
    );
};
export default NameList;
```