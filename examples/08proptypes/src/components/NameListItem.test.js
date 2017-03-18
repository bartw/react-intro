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