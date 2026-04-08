import React from 'react'
import { Link } from 'react-router-dom';
import "./film.css"
import Data from './Data';
import { useParams } from 'react-router-dom';
import heart from "./love.png"

const Trailer = ({ add_favorite }) => {
    const id = useParams();
    const film = Data.find(film => film.id === parseInt(id.id));
    console.log(film)
    console.log(parseInt(id.id))
  return (
    <div className='Trailler'>
        <h2>{film.titre} trailer</h2>
        <iframe width="560" height="315" src={film.Trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <p>{film.history}</p>
        <button className='add' onClick={() => {
                    add_favorite(film.id);
                  }}>add -<img className='icon' src={heart} alt="" /></button>
        <button><Link to="/">Back to Movies</Link></button>
      
    </div>
  )
}

export default Trailer
