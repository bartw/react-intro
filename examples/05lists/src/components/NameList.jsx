import React from 'react';

const NameList = (props) => {
    const listItems = props.names.map((name) => <li key={name}>{name}</li>);
    return (
        <ul>
            {listItems}
        </ul>
    );
};
export default NameList;