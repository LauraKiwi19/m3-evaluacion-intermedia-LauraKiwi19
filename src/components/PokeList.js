import React from 'react';
import Pokemon from './Pokemon'


const PokeList = function (props) {
    console.log(props)
    return (
        <ul>
            {props.pokemons.map((pokemon, index) => {
                return (
                    <Pokemon key={index} pokemon={pokemon} />
                )
            })}
        </ul>)

}


export default PokeList;