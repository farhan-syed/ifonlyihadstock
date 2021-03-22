import React from 'react';

const relatedSymbols = (props) => {
    const symbols = props.symbols.slice(0,5);
    const buttons = symbols.map((symbol) => 
        <div className="flex-1">
            <button className="w-full h-8 hover:text-white hover:bg-black focus:outline-none" value={symbol} key={symbol} onClick={(e) => props.onSwitch(e.target.value)}>
                {symbol}
            </button>
        </div>
    )
    return (
        <div className="flex w-80 h-auto text-center text-black divide-x divide-black border border-black rounded-sm bg-white shadow-2xl">
            {buttons}
        </div>
    )
}

export default relatedSymbols;
