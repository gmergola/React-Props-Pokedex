import React from 'react';
function Pokecard({id, name, type, base_experience}){

  return (
    <div className="Pokecard-card">
      <div className="Pokecard-inner-card">
        <h1>{name}</h1>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}/>
        <p>{type}</p>
        <p>{base_experience}</p>
      </div>
    </div>
  );
}

export default Pokecard;