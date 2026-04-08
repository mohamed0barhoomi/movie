import React ,{useState,useRef}from 'react'
import './film.css'
import etoile from "./star.png"
import heart from "./love.png"




const Navb = ({searshref, searsh, note, changeNote,setfa}) => {
    
  return (
    <nav className='navb'>
      <div className="first">
        <a href="#App">Netflix</a>
        <a href="#App">Home</a>
        <button className='favorite' onClick={() => {setfa()}}>
          <img src={heart} alt="" />
        </button>
      </div>
      <div className="search">
        <span style={{color:"white"}}>Rating :</span>
       <select value={note} onChange={changeNote}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <img className='icon' src={etoile} alt="" />
        <input 
        type="text" 
        placeholder='Search'
        ref={searshref} 
        onChange={searsh}
        />
        <button onClick={()=>{searsh()}}>Search</button>
      </div>
      
      
    </nav>
  )
}

export default Navb
