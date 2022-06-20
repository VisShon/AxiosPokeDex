import axios from 'axios';
import React, { useState ,useEffect} from 'react'
import Loading from './Loading';


function PokeCard({url}) {
    const[isLoadingPoke,setIsLoadingPoke]=useState(true);
    const[data,setData]=useState();

    let getData = async () =>{
        setIsLoadingPoke(true);
        const res =await  axios.get(url).then(res => setData(res.data));
        setIsLoadingPoke(false);
    } 

    useEffect(()=>{
        getData()
    },[url])

    return isLoadingPoke?((<div className="card">
        <div className="card-inner">
            <Loading/>
        </div>
    </div>)):( (
    <div className="card">
        <div className="card-inner">
            <div className='card-front'>
                <img src={data.sprites.front_default} alt='' />
            </div>
            <div className='card-back'>
                <h1 style={{color: '#FECA1C'}}>{data.name.toUpperCase()}</h1>
                <span><b>Species: </b>{data.species.name}</span> 
                <span><b>Base Experience: </b>{data.base_experience}</span> 
                <span><b>Height: </b>{data.height}</span> 
                <span><b>Weight: </b> {data.weight}</span> 
            </div>
        </div>
    </div>)
  )
}

export default PokeCard