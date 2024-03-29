import React from 'react';

const footer = (props) => {
    return (
        <div className="flex-1 h-16">
            <div className="flex flex-col text-center mb-4">
                <label className="text-xs font-bold dark:text-dark-s">powered by data from <a className="text-green-500 dark:text-dark-purple" href="https://iexcloud.io">IEX Cloud</a></label>
            </div>
        </div>
    )
}

export default footer;
