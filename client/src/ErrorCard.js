import React from 'react';

const errorCard = (props) => {
    return (
        <div className="mb-4 p-2 h-auto w-80 rounded-sm bg-green-500 text-center text-white shadow-2xl font-semibold">
            <h1>{props.message}</h1>
        </div>
    )
}

export default errorCard;
