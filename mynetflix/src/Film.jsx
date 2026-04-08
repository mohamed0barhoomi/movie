import React,{useRef, useState} from 'react'
import './film.css'
import Data from './Data';
import { Link } from 'react-router-dom';
import Trailer from './Trailer';

const Film = ({film, add_favorite}) => {
    const dialogId = `history-${film.titre}`;
    const [stat,setStat]=useState(1)
    const nameref=useRef()
    const photoref=useRef()
    const caractaireref=useRef()
    const ratingref = useRef()
    const historyref=useRef()
    const Update_film=()=>{
      const target=Data.find(elem => elem.id === film.id)
      if (!target) return

      target.titre = nameref.current?.value || target.titre
      target.photo = photoref.current?.value || target.photo
      target.caractaire = caractaireref.current?.value || target.caractaire
      target.note = ratingref.current?.value || target.note
      target.history = historyref.current?.value || target.history
    }
    const [favorite,setFavorite]=useState([])

          return stat===1 ? (
    <div className='card'>
        <div className="contenu">
            <img className='photo' src={film.photo} alt={film.titre} />
            <span>{film.titre}</span>
            <div className="funct">
                
                <div>
                    <span>{film.note}</span>
                    <img className='icon' src="star.png" alt="" />
                </div>
            </div>
            <img className='charactaire' src={film.caractaire} alt="" />
        </div>
        
        <div className="funct">
          <button onClick={()=>{setStat(2)}}>history</button>
          <button onClick={()=>{setStat(3)}}>update</button>
          
          <button><Link to={`/trailer/${film.id}`}> Trailer</Link></button>
        </div>
        
    </div>
  ):(stat===2)?(
    <div className='card' id={dialogId}>
        <div className="contenu">
            <p>{film.history}</p>
            <button onClick={()=>{setStat(1)}}>Close</button>
        </div>
            
        </div>
  ):(
    <div id="up_film" className='up-film'>
        <h2>update movie</h2>
          <input type="text" placeholder="Title" required ref={nameref}/>
          <input type="text" placeholder="Photo URL" required ref={photoref}/>
          <input type="text" placeholder="Caractaire URL" required ref={caractaireref}/>
          <input type="number" placeholder="Rating" min="1" max="5" required ref={ratingref}/>
          <textarea placeholder="History" required ref={historyref}></textarea>
          <button type="submit" onClick={()=>{
            Update_film()
            setStat(1)
          }}>Submit</button>
          </div>
)
}
export default Film
