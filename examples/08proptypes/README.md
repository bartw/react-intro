# Proptypes

```js
import React from 'react';

const NameListItem = ({ name }) => <li>{name}</li>;

NameListItem.propTypes = {
    name: React.PropTypes.string.isRequired
};

export default NameListItem;
```

```js
import React from 'react';
import { shallow } from 'enzyme';
import NameListItem from './NameListItem';

it('given no name when render then an error is thrown', () => {
    expect(shallow(<NameListItem />)).toThrow();
});

it('given a name when shallow render then the text is the name', () => {
    const name = '';
    const component = shallow(<NameListItem name={name} />);
    expect(component.text()).toBe(name);
});
```