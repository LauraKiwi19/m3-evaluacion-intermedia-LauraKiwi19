import React from 'react'
import './../stylesheets/Pokemon.css'


const Pokemon = function (props) {
    const pokemonTypes = props.pokemon.types;

    const renderPokemonTypes = () => {
        return pokemonTypes.map((pokemonType, index) => {
            return <li className="pokemon_type" key={index}>{pokemonType}</li>
        })
    }
    console.log(pokemonTypes)
    return (
        <div>
            <img className="pokemon_image" src={props.pokemon.url} alt={props.pokemon.name} />
            <h2 className="pokemon_title">{props.pokemon.name}</h2>
            <ul className="pokemon_type_list">
                {renderPokemonTypes()}
            </ul>
        </div>
    )
}

export default Pokemon