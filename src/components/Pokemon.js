import React from 'react'




const Pokemon = function (props) {
    const pokemonTypes = props.pokemon.types
    return (
        <li>
            <img src={props.pokemon.url} alt={props.pokemon.name}></img>
            <h2>{props.pokemon.name}</h2>
            <div>
                {pokemonTypes.map(pokemonType) => {
                    return (
                <h4>{pokemonType}</h4>)
                }}
            </div>
        </li>
    )
}

/* class Pokemon extends React.Component {
    render() {
        const pokemonTypes = this.props.type
        return (
            <div>
                <img src={this.props.url} alt={this.props.name}></img>
                <h2>{this.props.name}</h2>
                {/*                 <h4>{pokemonTypes.map(pokemonType) => {
                    return (
                    <ul>
                        <li>{pokemonType}</li>
                    </ul>)}}
                </h4> 
            </div >
        )
    }
} */


export default Pokemon