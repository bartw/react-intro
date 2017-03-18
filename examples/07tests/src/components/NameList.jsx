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