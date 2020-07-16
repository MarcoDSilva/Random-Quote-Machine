import React, { Component } from "react"; //importing component to not use React.Component all the time
import { render } from "react-dom"; //importing render instead of ReactDOM
import "./index.css";
import logo from "./img/twitter.png";


class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      render: 0,
    };
  }
  
  componentWillMount() {
    this.selectQuote()
  }

  componentDidMount() {
    console.log(`mounted with the state of ${this.state.render}`)
  }

  componentDidUpdate() {
    console.log("updated");
  }

  selectQuote() {
    const size = this.props.quotes.length - 1;
    const random = Math.floor(Math.random() * size);

    this.setState({
      render: random,
    });
  }

  getQuote() {
    const quote = this.props.quotes[this.state.render].quote;
    return quote;
  }

  getAuthor() {
    const author = this.props.quotes[this.state.render].author;
    return author;
  }

  render() {
    const tweetLink = "https://twitter.com/intent/tweet/?text=‘" + this.getQuote() + "’"


    return (
      <div id="quote-box">
        <h1 className="appTitle">Random Quote Generator with React</h1>

        <section class="quote-box">
          <div id="box">
            <p id="text">‘{this.getQuote()}’</p>
            <p id="author">- {this.getAuthor()}</p>
          </div>

          
        </section>

        <section className="clickables">
          <button id="new-quote" onClick={() => this.selectQuote()}>
            new quote
          </button>
          <a class="twitter-share-button" id="tweet-quote" href={tweetLink}>
            <img src={logo} alt="twitter logo" className="twitterLogo" />
          </a>
        </section>

      </div>
    );
  }
}

const quotes = [
  {
    author: "J.R.R Tolkien",
    quote:
      "It is not the strength of the body, but the strength of the spirit.",
  },
  {
    author: "Aragorn",
    quote: "Deeds will not be less valiant because they are unpraised.",
  },
  {
    author: "Lady Galadriel",
    quote: "Even the smallest person can change the course of history.",
  },
  {
    author: "Sam Gamgee",
    quote:
      "There’s some good in this world, Mr. Frodo… and it’s worth fighting for.",
  },
  {
    author: "Aragorn",
    quote:
      "A hunted man sometimes wearies of distrust and longs for friendship.",
  },
  {
    author: "Boromir",
    quote:
      "It is a strange fate that we should suffer so much fear and doubt over so small a thing… such a little thing.",
  },
  {
    author: "Gandalf",
    quote:
      "He that breaks a thing to find out what it is, has left the path of wisdom.",
  },
  {
    author: "Gandalf",
    quote:
      "All we have to decide is what to do with the time that is given us.",
  },
  {
    author: "Gandalf",
    quote:
      "Many that live deserve death. And some that die deserve life. Can you give it to them? Then do not be eager to deal out death in judgement. For even the very wise cannot see all ends.",
  },
  {
    author: "Gandalf",
    quote:
      "The burned hand teaches best. After that advice about fire goes to the heart.",
  },
  {
    author: "Gandalf",
    quote:
      "It is not despair, for despair is only for those who see the end beyond all doubt. We do not!",
  },
  {
    author: "Lady Galadriel",
    quote:
      "Maybe the paths that you each shall tread are already laid before your feet, though you do not see them.",
  },
  {
    author: "Thorin Oakenshield",
    quote:
      "If more of us valued food and cheer and song above hoarded gold, it would be a merrier world.",
  },
  {
    author: "Bilbo Baggins",
    quote: "Not all those who wander are lost.’",
  },
  {
    author: "Aragorn",
    quote:
      "His grief he will not forget; but it will not darken his heart, it will teach him wisdom.",
  },
  {
    author: "Gandalf",
    quote:
      "It is a comfort not to be mistaken at all points. Do I not know it only too well!",
  },
  {
    author: "Elrond",
    quote:
      "It is perilous to study too deeply the arts of the Enemy, for good or for ill.",
  },
  {
    author: "Frodo",
    quote: "Short cuts make delays, but inns make longer ones.",
  },
];

render(<App quotes={quotes} />, document.querySelector("#root"));
