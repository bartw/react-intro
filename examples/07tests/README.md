# Tests

Something about snapshot testing

```shell
npm install --save-dev jest babel-jest
```

```json
"scripts": {
    "start": "webpack-dev-server --progress -d --colors --content-base ./public",
    "build:dev": "webpack",
    "test": "jest --watch",
    "test:once": "jest"
  }
```

```js
import React from 'react';
import { render } from 'react-dom';
import App from './App';

it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<App />, div);
});
```

```shell
npm install --save-dev enzyme react-addons-test-utils
```

```js
import React from 'react';
import { render } from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';
import Hello from './Hello';
import NameList from './NameList';

it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<App />, div);
});

it('has expected components', () => {
    const component = shallow(<App />);
    expect(component.find(Hello)).toHaveLength(1);
    expect(component.find(NameList)).toHaveLength(1);
});
```

```js
import React from 'react';
import { shallow } from 'enzyme';
import NameList from './NameList';
import NameListItem from './NameListItem';

it('given no list when shallow render then it has no list items', () => {
    const component = shallow(<NameList names={names} />);
    expect(component.find(NameListItem)).toHaveLength(0);
});

it('given an empty list when shallow render then it has no list items', () => {
    const component = shallow(<NameList names={[]} />);
    expect(component.find(NameListItem)).toHaveLength(0);
});

it('given a list of 5 names when shallow render then it has 5 list items', () => {
    const names = ['Ash', 'Linda', 'Cheryl', 'Scotty', 'Shelly'];
    const component = shallow(<NameList names={names} />);
    expect(component.find(NameListItem)).toHaveLength(5);
});
```

```js
import React from 'react';
import NameListItem from './NameListItem';

const NameList = ({ names }) => {
    const listItems = names && names.map((name) => <NameListItem key={name} name={name} />);
    return (
        <ul>
            {listItems}
        </ul>
    );
};
export default NameList;
```