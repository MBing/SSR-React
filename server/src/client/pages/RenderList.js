import React from 'react';

const RenderList = ({list, type}) => {
    if (list.length === 0) {
        return <div>No {type} found!</div>;
    }

    return (
        <ul>
            {list.map(item => {
                return <li key={item.id}>{item.name}</li>;
            })}
        </ul>
    );
};

export { RenderList };