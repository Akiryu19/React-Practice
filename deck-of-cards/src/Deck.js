import React, { Component } from 'react';
import axios from 'axios';
import Card from './Card';
import './Deck.css';

const API_BASE_URL = 'https://deckofcardsapi.com/api/deck';
class Deck extends Component {
  constructor() {
    super();
    this.state = { deck: null, drawn: [] };
    this.getCard = this.getCard.bind(this);
  }

  async componentDidMount() {
    const res = await axios.get(`${API_BASE_URL}/new/shuffle/`);

    this.setState({ deck: res.data });
  }

  async getCard() {
    try {
      const deck_id = this.state.deck.deck_id;
      const CardRes = await axios.get(`${API_BASE_URL}/${deck_id}/draw/`);
      if (CardRes.data.success) {
        let card = CardRes.data.cards[0];
        this.setState((st) => ({
          drawn: [
            ...st.drawn,
            {
              id: card.code,
              image: card.image,
              name: `${card.value} of ${card.suit}`,
            },
          ],
        }));
      } else {
        throw new Error('No card ');
      }
    } catch (error) {
      alert('No More Card:(');
    }
  }

  componentDidUpdate() {}

  render() {
    return (
      <div className="Deck">
        <h1 className="Deck-title">♧ Card Dealer ♧ </h1>
        <h2 className="Deck-title subtitle">
          ♡ A little demo made with React ♡{' '}
        </h2>
        <button className="Deck-btn" onClick={this.getCard}>
          Get Card
        </button>
        <div className="Deck-cardarea">
          {this.state.drawn.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </div>
      </div>
    );
  }
}

export default Deck;
