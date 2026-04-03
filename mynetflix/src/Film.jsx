import React,{useState} from 'react'
import './film.css'

const Film = ({film}) => {
    const dialogId = `history-${film.titre}`;
    const [stat,setStat]=useState(true)
          return stat ? (
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
          <button onClick={()=>{setStat(!stat)}}>history</button>
          <button className='add'>add -<img className='icon' src="love.png" alt="" /></button>
        </div>
        
    </div>
  ):(
    <div className='card' id={dialogId}>
        <div className="contenu">
            <p>{film.history}</p>
            <button onClick={()=>{setStat(!stat)}}>Close</button>
        </div>
            
        </div>


  )
    }
   
export default Film
