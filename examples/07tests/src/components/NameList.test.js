import React from 'react';
import { shallow } from 'enzyme';
import NameList from './NameList';
import NameListItem from './NameListItem';

it('given no list when shallow render then it has no list items', () => {
    const component = shallow(<NameList />);
    expect(component.find(NameListItem)).toHaveLength(0);
});

it('given an empty list when shallow render then it has no list items', () => {
    const component = shallow(<NameList names={[]} />);
    expect(component.find(NameListItem)).toHaveLength(0);
});

it('given a list of 5 names when shallow render then it has 5 list items', () => {
    const names = ['Mikey', 'Brand', 'Data', 'Mouth', 'Chunk'];
    const component = shallow(<NameList names={names} />);
    expect(component.find(NameListItem)).toHaveLength(5);
});