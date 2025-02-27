import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import {removeQuote, downvoteQuote, upvoteQuote} from '../actions/quotes'

class Quotes extends Component {

  render() {
    const {quotes, removeQuote, upvoteQuote, downvoteQuote } = this.props;
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {quotes.map(quote => <QuoteCard key={quote.id} upvoteQuote={upvoteQuote} downvoteQuote={downvoteQuote} removeQuote={removeQuote} quote={quote}/>)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//add arguments to connect as needed
const mapPropsToState = state => {
  return ({
    quotes: state.quotes
  })
}
export default connect(mapPropsToState, {removeQuote, upvoteQuote, downvoteQuote})(Quotes);
