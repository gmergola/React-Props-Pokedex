import React from 'react';
import './Pokecard.css';

// forgot to add comments here to mention that this is used inside Pokedex
// place long URL in a const here or globally

function Pokecard({ id, name, type, base_experience }) {

  return (
    <div className="Pokecard-card">
      <div className="Pokecard-inner-card">
        <h3 className="Pokecard-title">{name}</h3>
        <img className="Pokecard-img" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />
        <p className="Pokecard-type">{type}</p>
        <p className="Pokecard-exp">{base_experience}</p>
      </div>
    </div>
  );
}

export default Pokecard;