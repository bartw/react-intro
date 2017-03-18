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