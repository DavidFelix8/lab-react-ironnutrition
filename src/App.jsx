import React, { Component } from 'react';
import './App.scss';
// import meals from './meals';
import meals from './meals.json';
import MealBox from './components/MealBox';

// import './style.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      meals: meals,
      newForm: true,
      name: '',
      calories: '',
      image: ''
    };
    this.newMeal = this.newMeal.bind(this);
  }

  newMeal(event) {
    event.preventDefault();
    const data = {
      name: this.state.name,
      calories: this.state.calories,
      image: this.state.image
    };
    this.setState(previousState => ({
      newForm: !previousState.newForm
    }));
  }

  render() {
    return (
      // console.log(meals);
      <div>
        <h1>Meals</h1>
        <button onClick={() => this.newMeal()}>Add a new meal</button>
        <form onSubmit={this.newForm}>
          <input
            type="text"
            placeholder="Name"
            value={this.state.name}
            onChange={this.changeName}
          />
          <input
            type="text"
            placeholder="Calories"
            name="calories"
            onChange={this.handleInputChange}
          />
          <input type="file" name="image" value={this.state.image} />
        </form>
        {this.state.meals.map(meal => (
          <MealBox {...meal} />
        ))}
      </div>
    );
  }
}

export default App;
