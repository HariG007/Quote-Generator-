import React, {useState , useEffect } from 'react';
import twitterIcon from '../Twitter-Logo.wine.svg';
import instagramIcon from '../Instagram-Logo.wine.svg';
import backgroundimage from '../1.jpg' ;
const Quotes = () => {
    const [quote, setQuote]=useState('');
    const [author, setAuthor]=useState('');

    useEffect(() => {
        getQuote()
    }, []);
    const getQuote = () => {
        let url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
        fetch(url)
        .then(res => res.json())
        .then(data => {
            let dataQuotes = data.quotes;
            let randomNum = Math.floor(Math.random() * dataQuotes.length);
            let randomQuote = dataQuotes[randomNum];
            setQuote(randomQuote.quote);
            setAuthor(randomQuote.author);
        })
    }

    const handleClick = () => {
        getQuote();
    }
    return (
        <center>
      <div id="quote-box">
        <div id="text">
        <p>{quote}</p>
        </div>
        <div id="author"><p>{author}</p></div>
        <div id="buttons">
            <div className="social-media">
                <a href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D" id="twet-quote">
                    <span><img src={twitterIcon} alt=""/></span>
                </a>
                <a href="https://www.instagram.com/" id="tumlr-quote">
                    <span><img src={instagramIcon} alt=""/></span>
                </a>
            </div>
            <button onClick={handleClick} id="new-quote">New Quote</button>
        </div>
      </div>
      </center>
      
    );
  }
  

export default Quotes;
