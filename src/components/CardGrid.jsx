import React, { useState } from 'react'
import PokeCard from './PokeCard';


function CardGrid({isLoading,pokemons}) {
    return isLoading ? (<div>Loading...</div>) :
        (<div className="cards">
            {pokemons.map((pokemon,index) =>(
                <PokeCard url={(pokemon.url)} key={index}/>
            ))}
        </div>
    );
}

export default CardGrid