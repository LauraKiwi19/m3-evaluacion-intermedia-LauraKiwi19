import React from 'react';
import Pokemon from './Pokemon'
import './PokeList.css'


const PokeList = function (props) {
    console.log(props)
    return (
        <ul className="container_pokemon_list">
            {props.pokemons.map((pokemon, index) => {
                return (
                    <Pokemon key={index} pokemon={pokemon} />
                )
            })}
        </ul>)

}


export default PokeList;