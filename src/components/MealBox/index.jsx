import React, { Component } from 'react';

class MealBox extends Component {
  constructor() {
    super();
    this.state = {};
    // this.handleQuantity = this.handleQuantity.bind(this);
  }

  /* handleQuantity() {
    const quantity = this.props.quantity;

    this.setState(previousState => ({
      quantity: 0
    }));
  } */

  render() {
    const { name, calories, image } = this.props;
    return (
      <div className="media border border-primary m-4">
        <img
          src={image}
          className="img-thumbnail mr-3 mw-25 border-0"
          style={{ 'max-width': '10em' }}
        />
        <div className="media-body align-self-center">
          <h5 className="mt-0 mb-1">{name}</h5>
          <small>{calories} calories</small>
        </div>
        <form className="row align-self-center">
          <input
            className="form-control col-9"
            type="number"
            value="1"
            /* onClick={this.handleQuantity} */
          />
          <button className="btn btn-primary col-3">+</button>
        </form>
      </div>
    );
  }
}

export default MealBox;
