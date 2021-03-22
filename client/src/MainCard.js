import React, { Component } from 'react';
import DatePicker from './DatePicker';

class Main extends Component {
    state = {
        symbol: '',
        date: '',
        amount: ''
    }

    change = (e) => {

        if (e.target.name == 'symbol')
            e.target.value = e.target.value.toUpperCase();

        this.setState({
            [e.target.name]: e.target.value
        });
    }

    purchaseDateChange = (date) => {
        let dateString = date.toISOString().substring(0,10);
        this.setState({
            date: dateString
        })
    }

    sellDateChange = (date) => {
        let dateString = date.toISOString().substring(0,10);
        console.log(dateString);
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state);
    }

    render(){

        return ( 
            <div className="w-80 p-5 rounded-md shadow-2xl bg-white">
                <p className="font-bold text-center text-black-900 text-2xl leading-none tracking-tight">
                    If only I had stock
                </p>
                <p className="text-xs text-center font-semibold leading-none">
                    Find out how much you could have made
                </p>
    
                
                <form>
                <p className="pt-3 text-xs font-semibold leading-normal">Ticker Symbol</p>
    
                <input 
                    type="text" 
                    placeholder="AAPL" 
                    name="symbol"
                    value={this.state.symbol}
                    onChange={e => this.change(e)}
                    className="h-7 w-full p-3 text-xs rounded-sm shadow-inner bg-gray-100 border-0 focus:ring-green-500 focus:bg-white"
                />

                <div className="flex flex-row">
                    <div className="pr-1">
                        <p className="pt-3 text-xs font-semibold leading-normal">Purchase Date</p>
                        <DatePicker onChange={date => this.purchaseDateChange(date)}/>
                    </div>
                    <div className="pl-1">
                        <p className="pt-3 text-xs font-semibold leading-normal">Sell Date</p>
                        <DatePicker onChange={date => this.sellDateChange(date)}/>
                    </div>
                </div>

                <p className="pt-3 text-xs font-semibold leading-normal">Amount Invested</p>
                <input 
                    type="number" 
                    placeholder="1000" 
                    name="amount"
                    value={this.state.amount}
                    onChange={e => this.change(e)}
                    className="block h-7 w-full p-3 text-xs rounded-sm shadow-inner bg-gray-100 border-0 focus:ring-green-500 focus:bg-white"
                />
    
                <button onClick={(e) => this.onSubmit(e)} className="h-10 w-full text-center font-semibold mt-6 p-1 bg-green-500 text-white rounded-sm hover:bg-green-400 hover:text-white focus:outline-none">Calculate</button>
                </form>
            </div>
        )
    }
}

export default Main;
