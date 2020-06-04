import React from 'react';

import './card.styles.scss';

class Card extends React.Component {
  render() {
    return(
      <div className={`card ${this.props.classes}`}> 
        <img 
          src={`https://robohash.org/${this.props.id}`} 
          onClick={this.props.handleClick} 
        />
      </div>
    );
  }
}

export default Card;