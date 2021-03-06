import React from 'react';

const NameList = ({ names }) => {
    const listItems = names.map((name) => <li key={name}>{name}</li>);
    return (
        <ul>
            {listItems}
        </ul>
    );
};
export default NameList;