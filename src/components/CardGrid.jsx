import React from 'react'
import PokeCard from './PokeCard';
import Loading from './Loading';


function CardGrid({isLoading,pokemons}) {
    return isLoading ? (<Loading/>) :
        (<div className="cards">
            {pokemons.map((pokemon,index) =>(
                <PokeCard url={(pokemon.url)} key={index}/>
            ))}
        </div>
    );
}

export default CardGrid