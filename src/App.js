import React from 'react';
import './App.css';
import pokemonData from './pokemondata'
import PokeList from './components/PokeList'

console.log(pokemonData);

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemons: pokemonData
    };
  }


  render() {
    return (
      <div>
        <PokeList pokemons={this.state.pokemons} />
      </div>
    )
  }
}


export default App;
