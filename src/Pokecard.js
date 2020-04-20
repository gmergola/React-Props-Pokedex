import React from 'react';
import './Pokecard.css';
const POKE_IMG_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon'

/** Pokecard: Used inside of Pokedex to render each pokemon card */ 

function Pokecard({ id, name, type, base_experience }) {

  return (
    <div className="Pokecard-card">
      <div className="Pokecard-inner-card">
        <h3 className="Pokecard-title">{name}</h3>
        <img className="Pokecard-img" src={`${POKE_IMG_API}/${id}.png`} />
        <p className="Pokecard-type">{type}</p>
        <p className="Pokecard-exp">{base_experience}</p>
      </div>
    </div>
  );
}

export default Pokecard;