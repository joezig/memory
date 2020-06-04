import React from 'react';
import ReactCardFlip from 'react-card-flip';

import Card from '../card/card.component';
import CardBack from '../card-back/card-back.component';

import './card-list.styles.scss';

class CardList extends React.Component {
  state = {
    isFlipped: false,
    cards: [
      {
        id: 0
      },
      {
        id: 1
      },
      {
        id: 2
      },
      {
        id: 3
      },
    ]
  }

  
  

  handleClick = (e) => {
    e.preventDefault();
    this.setState(prevSt => ({ isFlipped: !prevSt.isFlipped }));
    console.log('fdsfsda')
    
  }
  render() {
    return(
      <div className='cardlist'>
        {this.state.cards.map(C => (
          <ReactCardFlip isFlipped={this.state.isFlipped} key={this.state.cards[C]} >
            <Card handleClick={this.handleClick} id={C.id}></Card>

            <CardBack handleClick={this.handleClick}></CardBack>
          </ReactCardFlip>
        ))}
      </div>
    );
  }
}
// TRY USING REACTFLIPCARD IN INDIVIDUAL CARD COMPONENT

export default CardList;