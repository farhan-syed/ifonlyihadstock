import React from 'react';

const errorCard = (props) => {
    return (
        <div className="mt-7 p-2 h-auto w-80 rounded-lg bg-green-500 text-center text-white shadow-2xl">
            <h1>{props.message}</h1>
        </div>
    )
}

export default errorCard;
