import { useState,useEffect } from 'react';
import './App.css';
import axios from 'axios'
import Header from './components/Header';
import CardGrid from './components/CardGrid';

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() =>{
      const fetchPoke = async ()=>{
        const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0')
        setItems(res.data.results);
        setIsLoading(false);
      }
      fetchPoke()
  },[])

  return (
    <div className="container">
      <Header/>
      <CardGrid isLoading={isLoading} pokemons={items}/>
    </div>
  )
}

export default App
