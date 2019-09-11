import React from 'react'
import './Pokemon.css'


const Pokemon = function (props) {
    const pokemonTypes = props.pokemon.types;

    const renderPokemonTypes = () => {
        return pokemonTypes.map((pokemonType, index) => {
            return <li className="pokemon_type" key={index}>{pokemonType}</li>
        })
    }
    console.log(pokemonTypes)
    return (
        <li className="pokemon_item">
            <img className="pokemon_image" src={props.pokemon.url} alt={props.pokemon.name}></img>
            <h2 className="pokemon_title">{props.pokemon.name}</h2>
            <ul className="pokemon_type_list">
                {renderPokemonTypes()}
            </ul>
        </li>
    )
}

export default Pokemon