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
        <h1 className="title">Mi lista Pokémon</h1>
        <div className="container__pokemon">
          <PokeList pokemons={this.state.pokemons} />
        </div>
      </div>
    )
  }
}


export default App;
