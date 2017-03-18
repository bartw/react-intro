import React from 'react';
import Hello from './Hello';
import NameList from './NameList';

const names = ['Ash', 'Linda', 'Cheryl', 'Scotty', 'Shelly'];

const App = () => (
    <div>
        <Hello name="world" />
        <NameList names={names} />
    </div>
);
export default App;