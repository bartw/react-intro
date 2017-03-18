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