import React from 'react'
import '../App.css'
import Pokeball from '../pokeball.png'
function Loading() {
  return (
    <div id="loading">
        <img id="loadingImg" src={Pokeball}/>
    </div>
  )
}

export default Loading