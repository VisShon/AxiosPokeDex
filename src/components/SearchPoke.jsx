import React, {useState} from 'react'

function SearchPoke({getQuery}) {
    const [text,setText] = useState("")
    const onChange = (value) =>{
        setText(value);
        getQuery(value);
    }
  return (
    <section className="search">
        <form>
            <input type="text" 
            className="form-control" 
            placeholder="Search Pokémon" 
            autoFocus
            value={text}
            onChange={(event)=> onChange(event.target.value)}/>
        </form>
    </section>
  )
}

export default SearchPoke