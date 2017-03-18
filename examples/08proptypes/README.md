# Proptypes

```js
import React from 'react';
import { shallow } from 'enzyme';
import NameListItem from './NameListItem';

it('given no name when render then a warning is shown', () => {
    global.console = { error: jest.fn() };
    shallow(<NameListItem />);
    expect(console.error).toBeCalled();
    expect(console.error.mock.calls[0][0].includes('Failed prop type: The prop `name` is marked as required in `NameListItem`')).toBeTruthy();
});

it('given a name when shallow render then the text is the name', () => {
    const name = 'the man with no name';
    const component = shallow(<NameListItem name={name} />);
    expect(component.text()).toBe(name);
});
```

```js
import React from 'react';

const NameListItem = ({ name }) => <li>{name}</li>;

NameListItem.propTypes = {
    name: React.PropTypes.string.isRequired
};

export default NameListItem;
```