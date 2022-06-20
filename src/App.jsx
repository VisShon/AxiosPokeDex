import { useState,useEffect } from 'react';
import './App.css';
import axios from 'axios'
import Header from './components/Header';
import CardGrid from './components/CardGrid';
import SearchBar from './components/SearchPoke';
function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('')

  useEffect(() =>{
      const fetchPoke = async ()=>{
        const res = await axios(`https://pokeapi.co/api/v2/pokemon?name=${query}limit=1000`).then(res=>setItems(res.data.results))
        console.log(items)
        setIsLoading(false);
      }
      fetchPoke()
  },[query])

  return (
    <div className="container">
      <Header/>
      <SearchBar getQuery={(q)=>setQuery(q)}/>
      <CardGrid isLoading={isLoading} pokemons={items}/>
    </div>
  )
}

export default App
