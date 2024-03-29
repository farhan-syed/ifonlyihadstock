import React from 'react';
import {Link} from 'react-router-dom';

const result = (props) => {

    function gainString() {
        if (props.results.gain > 0) {
            return "missed out on"
        } else {
            return "would've lost"
        }
    }

    function returnGainBorderColor() {
        if(props.results.gain > 0){
            // return "border-green-500"
            return "border-green-500 dark:border-dark-purple"
        } else {
            return "border-red-500"
        }
    }

    function formatToDollar(n){
        let formatter = new Intl.NumberFormat('en-US',{
            style: 'currency',
            currency: 'USD'
        })
        return formatter.format(n)
    }

    return (  
            <div className="flex-none pt-5 pb-5">
                <div className="flex flex-col items-center">
                    <div className={`mt-0 w-80 px-6 py-6 bg-white dark:bg-dark rounded-lg shadow-2xl border-b-8 ${returnGainBorderColor()}`}>
                        {/* <p className="text-center font-bold text-2xl text-black-900">
                        {props.results.companyName}
                        </p> */}
                        <div className="flex flex-row justify-center">
                        <Link className="text-green-500 inline-flex text-2xl font-main font-bold dark:text-dark-purple" to={`/ticker/${props.results.symbol}`}>{props.results.companyName}<svg className="h-full" height="20" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
                        </svg></Link>
                        </div>

                        
                        <p className="text-center font-semibold text-sm text-black dark:text-dark-s">
                        {props.results.symbol} {formatToDollar(props.results.latestPrice)}
                        </p>

                        <hr className="mt-2"/>

                        <p className="mt-2 font-bold text-center text-lg dark:text-dark-p">Purchase on {props.results.purchaseDate}</p>
                        <p className="text-center font-semibold text-sm dark:text-dark-s">{formatToDollar(props.results.amount)} @ ≈ {formatToDollar(props.results.purchasePrice)}/share</p>

                        <p className="mt-2 font-bold text-center text-lg dark:text-dark-p">Sell on {props.results.sellDate}</p>
                        <p className="text-center font-semibold text-sm dark:text-dark-s"> ≈ {formatToDollar(props.results.sellPrice)}/share</p>

                        <p className="mt-2 font-bold text-center text-lg dark:text-dark-p">You {gainString()}</p>
                        <p className="text-center font-semibold text-sm dark:text-dark-s">≈ {formatToDollar(props.results.gain)}</p>

                        <p className="mt-2 font-bold text-center text-lg dark:text-dark-p">Total Value</p>
                        <p className="text-center font-semibold text-sm dark:text-dark-s">≈ {formatToDollar(props.results.value)}</p>
                        <div className="text-center">
                            <a href={`https://twitter.com/intent/tweet?text=If I'd invested ${formatToDollar(props.results.amount)} into ${props.results.symbol} on ${props.results.purchaseDate}. I'd have ${formatToDollar(props.results.value)} if I had sold on ${props.results.sellDate}. Find out for yourself:&url=http://ifonlyihadstock.com&hashtags=ifonlyihadstock`} className="mt-4 inline-flex items-center space-x-2 text-white bg-twitter-blue dark:bg-dark-purple text-sm font-bold p-2 rounded-sm">
                            <svg className="fill-current text-white" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                            <p>Share on Twitter</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
    ) 
}

export default result;
