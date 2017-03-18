# Tests

In this example I will add some tests for my components.
For testing I will use Jest and Enzyme.
Jest is a testing tool by Facebook.
Enzyme is a testing utility for React that makes it easier to assert, manipulate, and traverse your React Components' output by AirBnB.

Jest supports snapshot testing.
A snapshot test takes a snapshot of the rendered html and saves this. 
If you run the test later it will compare your output with the saved snapshot and report if therer are differences.

I will not go into snapshot testing here.

To use jest I'm going to install it using npm.

```shell
npm install --save-dev jest babel-jest
```

I will also add some scripts to my package.json file so that I can easily run my tests.

```json
"scripts": {
    "start": "webpack-dev-server --progress -d --colors --content-base ./public",
    "build:dev": "webpack",
    "test": "jest --watch",
    "test:once": "jest"
  }
```

The first test will just check if I can render my app component without crashing.

```js
import React from 'react';
import { render } from 'react-dom';
import App from './App';

it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<App />, div);
});
```

Let's make it a little more interesting by using enzyme.
Enzyme is a wrapper around react-addons-test-utils that saves me a lot of trouble.

```shell
npm install --save-dev enzyme react-addons-test-utils
```

Now I can do a shallow render of my app component and assert that it contains the expected components.

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

I'm also going to write some test for my NameList component.

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

It turns out that my NameList component crashes if I don't supply a list of names.
Let's fix that using conditional rendering.
If I don't have names the "names && foo" expression will always evaluate to false.
React will ignore the boolean and false and just render nothing.

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