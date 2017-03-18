import React from 'react';

const NameListItem = ({ name }) => <li>{name}</li>;

NameListItem.propTypes = {
    name: React.PropTypes.string.isRequired
};

export default NameListItem;