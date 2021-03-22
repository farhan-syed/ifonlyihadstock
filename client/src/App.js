import React, { Component } from 'react';
import axios from 'axios'

import ResultCard from './ResultCard'
import ErrorCard from './ErrorCard'
import RelatedSymbols from './RelatedSymbols'
import Footer from './Footer'
import MainCard from './MainCard.js'
import errorCard from './ErrorCard';
import Header from './Header';


const development = false;
let token = "";
let URL = "";

if (development === true){
  token = "Tpk_dd2e3d0b8fb04bec8feb29896fb11f2a";
  URL = "https://sandbox.iexapis.com/stable/"
} else {
  token = "pk_701acc729bf74ab59b8cbd56aaa4e526";
  URL = "https://cloud.iexapis.com/stable/";
}


// symbol = stock symbol; pDate = purchase date; fClose = fully adjusted close price; amount = amount invested on pDate;

class App extends Component {
  // Initialize state

  constructor(props){
    super(props);
    this.state = {
      showResult: false,
      showError: false,
      fields: {}
    }
  }

  // handle submit button; 1
  onSubmit = async fields => {
    this.setState({fields});
    const data = await this.dataResponseHandler(fields.symbol, fields.date, fields.sDate, fields.amount);
    this.handleData(data);
  }

  switchSymbol = async (symbol) => {
    const data = await this.dataResponseHandler(symbol, this.state.fields.date, this.state.fields.amount);
    this.handleData(data);
  }

  // call api; 2
  dataResponseHandler = async(symbol, pDate, sDate) => {
  
    let responseData = {
      quote: {},
      peers: {},
      pData: {},
      sData: {},
      error: {}
    }

    let iexDateFormatPDate = pDate.replace(/-/g,"");

    let iexDateFormatSDate = sDate.replace(/-/g,"");

    try {
        const response = await axios.get(`${URL}stock/${symbol}/batch?types=quote,peers,chart&exactDate=${iexDateFormatPDate}&chartByDay=true&token=${token}`);
        const response2 = await axios.get(`https://cloud.iexapis.com/stable/stock/${symbol}/chart/${iexDateFormatSDate}?token=${token}`);
        console.log(response2)
        responseData.quote = response.data.quote;
        responseData.peers = response.data.peers;
        responseData.pData = response.data.chart;
        responseData.sData = response2.data[0];
        responseData.error = {
          "didFail": false, 
          "message": null
        }
        return responseData;
    } catch (error) {
        responseData.error = {
          "didFail": true,
          "message": "Please try again. We couldn't fetch that data."
        }
        return responseData;
      }
  }

  // handle data after api call; 3
  handleData = (data) => {
    console.log(data)
    if (data.error.didFail === true) {
      this.setState({
        showResult: false,
        showError: true,
        errorMessage: data.error.message
      })
    } else if (data.pData.length <= 0) {
      this.setState({
        showResult: false,
        showError: true,
        errorMessage: ` Couldn't fetch ${this.state.fields.symbol} on the chosen date. Please try again.`
      })
    } else {

      // continue here.

      const {symbol, companyName, latestPrice} = data.quote;
      const {low: fClose, label: pDateLabel} = data.pData[0];
      const amount = parseFloat(this.state.fields.amount);

      const numOfShares = (amount / fClose);
      const value = (numOfShares * latestPrice);
      const gain = (value - amount); 

      const results = {
        symbol: symbol,
        companyName: companyName,
        date: pDateLabel,
        amount: amount,
        latestPrice: latestPrice,
        fClose: fClose,
        value: value, 
        gain: gain,
        peers: data.peers
      };

      this.setState({
        showResult: true,
        showError: false,
        results: results
      })
    }
  }
  
  render() {
    return (
    <div className="App">
        <body>
            <div className="flex flex-col min-h-screen font-main">

                <div className="flex-none xs:flex-1 text-right">
                    <h1 className="mt-4 mr-4 mb-4">
                        <Header/>
                    </h1>
                </div>

                <div className="flex-none pt-5 pb-5">
                    <div className="flex flex-col items-center">
                        <div className="">
                            <MainCard onSubmit={fields => this.onSubmit(fields)}/>
                        </div>
                    </div>
                </div>

                {this.state.showResult &&
                <div className="flex-none">
                    <div className="flex flex-col items-center">
                        <RelatedSymbols symbols={this.state.results.peers} onSwitch={symbol => this.switchSymbol(symbol)}/>
                    </div>
                </div>
                }
                {this.state.showResult &&
                <div className="flex-none pt-5 pb-5">
                    <div className="flex flex-col items-center">
                        <div className="">
                            <ResultCard results={this.state.results}/>
                        </div>
                    </div>
                </div>
                }
                <div className="flex-1 h-16">
                    <Footer/>
                </div>

            </div>
        </body>
    </div>

    );
  }
}

export default App;