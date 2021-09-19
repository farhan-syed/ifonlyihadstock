import React, { Component } from 'react';
import axios from 'axios'

import Header from './Components/Header';
import MainCard from './Components/MainCard.js'
import ResultCard from './Components/ResultCard'
import RelatedSymbols from './Components/RelatedSymbols'
import ErrorCard from './Components/ErrorCard'
import Footer from './Components/Footer'



// const development = false;
// var token = "";
// var URL = "";

// if (development === true){
//   token = process.env.REACT_APP_DEVELOPMENT_KEY;
//   URL = "https://sandbox.iexapis.com/stable/"
// } else {
//   token = process.env.REACT_APP_PRODUCTION_KEY;
//   URL = "https://cloud.iexapis.com/stable/";
// }


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
    if (fields.symbol == "" || fields.date == "" || fields.sDate == "" || fields.amount == ""){
      return this.setState({
        showResult: false,
        showError: true,
        errorMessage: "Please fill out all fields."
      })
    }

    this.setState({fields});
    const data = await this.dataResponseHandler(fields.symbol, fields.date, fields.sDate, fields.amount);
    this.handleData(data);
  }

  switchSymbol = async (symbol) => {
    const data = await this.dataResponseHandler(symbol, this.state.fields.date, this.state.fields.sDate, this.state.fields.amount);
    this.handleData(data);
  }

  returnFormattedDate = (date) => {
    return date.replace(/-/g,"");
  }

  // call api; 2
  dataResponseHandler = async(symbol, pDate, sDate, amount) => {
  
    let responseData = {
      quote: {},
      peers: {},
      pData: {},
      sData: {},
      error: {}
    }

    try {
        const response = await axios.get(`${URL}stock/${symbol}/batch?types=quote,peers,chart&exactDate=${this.returnFormattedDate(pDate)}&chartByDay=true&token=${process.env.REACT_APP_PRODUCTION_KEY}`);
        const response2 = await axios.get(`${URL}stock/${symbol}/chart/date/${this.returnFormattedDate(sDate)}?chartByDay=true&token=${process.env.REACT_APP_PRODUCTION_KEY}`);
        responseData.quote = response.data.quote;
        responseData.peers = response.data.peers;
        responseData.pData = response.data.chart;
        responseData.sData = response2.data;
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

      const {symbol, companyName, latestPrice} = data.quote;
      const {low: purchasePrice, label: purchaseDate} = data.pData[0];
      const {high: sellPrice, label: sellDate} = data.sData[0];
      const amount = parseFloat(this.state.fields.amount);

      const numOfShares = (amount / purchasePrice);
      const value = (numOfShares * sellPrice);
      const gain = (value - amount); 

      const results = {
        symbol: symbol,
        companyName: companyName,
        amount: amount,
        latestPrice: latestPrice,
        purchasePrice: purchasePrice,
        purchaseDate: purchaseDate,
        sellPrice: sellPrice,
        sellDate: sellDate,
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
            <div className="flex flex-col min-h-screen font-main">

                <Header/>

                <MainCard onSubmit={fields => this.onSubmit(fields)}/>

                {this.state.showError &&
                <ErrorCard message={this.state.errorMessage}/>
                }
                
                
                {this.state.showResult &&

                <RelatedSymbols symbols={this.state.results.peers} onSwitch={symbol => this.switchSymbol(symbol)}/>
                }
                
                
                {this.state.showResult &&

                <ResultCard results={this.state.results}/>

                }


                <Footer/>

            </div>
        </div>

    );
  }
}

export default App;