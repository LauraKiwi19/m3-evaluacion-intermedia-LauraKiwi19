import React from 'react';
import Pokemon from './Pokemon'
import './../stylesheets/PokeList.css'


const PokeList = function (props) {
    console.log(props)
    return (
        <ul className="container_pokemon_list">
            {props.pokemons.map((pokemon) => {
                return (
                    <li className="pokemon_item" key={pokemon.id}> <Pokemon pokemon={pokemon} /></li>
                )
            })}
        </ul>)

}


export default PokeList;