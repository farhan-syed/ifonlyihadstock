import React from 'react';

const relatedSymbols = (props) => {
    const symbols = props.symbols.slice(0,5);
    const buttons = symbols.map((symbol) => 
        <div className="flex-1" key={symbol}>
            <button className="w-full h-8 hover:text-white hover:bg-black dark:hover:bg-dark-purple focus:outline-none font-semibold" value={symbol} key={symbol} onClick={(e) => props.onSwitch(e.target.value)}>
                {symbol}
            </button>
        </div>
    )
    return (
        <div className="flex-none">
            <div className="flex flex-col items-center">
                <div className="flex w-80 h-auto text-center text-black divide-x divide-black border border-black rounded-sm bg-white dark:bg-dark-menu dark:text-dark-p dark:border-dark shadow-2xl">
                    {buttons}
                </div>
            </div>
        </div>

    )
}

export default relatedSymbols;
