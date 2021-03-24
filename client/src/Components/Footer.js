import React from 'react';

const footer = (props) => {
    return (
        <footer>
        <div className="flex flex-col text-center mb-4">
            <label className="text-xs font-bold">created by <a className="text-green-500" href="https://twitter.com/dark_prgrmmr">@dark_prgrmmr</a></label>
            <label className="text-xs font-bold">powered by data from <a className="text-green-500" href="https://iexcloud.io">IEX Cloud</a></label>
        </div>
        </footer>
    )
}

export default footer;
