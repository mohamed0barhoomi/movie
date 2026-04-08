import { useState } from 'react';
import logo from './logo.svg';
 import './App.css';
import List_film from './List_film';
import Navb from './Navb';
import Data from './Data';
import Film from './Film';
import { useRef } from 'react';
import "./film.css"
import { Route, Routes } from 'react-router-dom';
import Trailer from './Trailer';

function App() {
const searshref=useRef()
const [note,setNote]=useState(1)
const [film,setFilm]=useState(null)
const [titre,settitre]=useState("")
const changeNote=(e)=>{
    setNote(e.target.value)
}
const searsh=()=>{
        settitre(searshref.current.value)
        const film=Data.filter(film => (film.titre.toLowerCase().includes((titre).toLowerCase().trim())&& film.note >= note))
        return film ? setFilm(film):setFilm(null);
       }
const name=useRef()
const photo=useRef()
const caractaire=useRef()
const rating=useRef()
const history=useRef()
const addFilm=()=>{
  Data.push({
    titre:name.current.value,
    photo:photo.current.value,
    caractaire:caractaire.current.value,
    note:rating.current.value,
    history:history.current.value
  })
}
const [add,setAdd]=useState(false)
const [favorite,setFavorite]=useState(true)
const setfa=()=> {
  setFavorite(!favorite)
}
const [list_favorite,setlist_Favorite]=useState([])
const add_favorite=(id)=>{
  if(list_favorite.includes(id))
    return;
  setlist_Favorite([...list_favorite, id])
}
  return favorite ?(
    <div id='App'>
      <Navb searshref={searshref} searsh={searsh} note={note} changeNote={changeNote} setfa={setfa} />
      <Routes>
        <Route path="/" element={<>
        {(film &&(note > 1 || titre.length > 0)) && film.map(f => <Film key={f.id} film={f} add_favorite={add_favorite} />)}
        {(!film ||(note ===1 && titre.length == 0)) && <List_film add_favorite={add_favorite} />}
      <dialog id="add_film" className='add_film'>
        <h2>Add New Movie</h2>
          <input type="text" placeholder="Title" required ref={name}/>
          <input type="text" placeholder="Photo URL" required ref={photo}/>
          <input type="text" placeholder="Caractaire URL" required ref={caractaire}/>
          <input type="number" placeholder="Rating" min="1" max="5" required ref={rating}/>
          <textarea placeholder="History" required ref={history}></textarea>
          <button type="submit" onClick={()=>{
            document.getElementById('add_film').close()
            addFilm()
            setAdd(!add)
          }}>Submit</button>
          <button onClick={() => {
            document.getElementById('add_film').close()
          }}>cancel</button>
      </dialog>
      
      <button onClick={() => {
        const dialog = document.getElementById('add_film');
        dialog.showModal();
        
      }}>add new movie<br/></button>
        </>} />
        <Route path="/trailer/:id" element={<Trailer add_favorite={add_favorite} />} />
      </Routes>
    </div>
  ):(
    <div className='second'>
      <div id='App'>
      <Navb searshref={searshref} searsh={searsh} note={note} changeNote={changeNote} setfa={setfa} />
      <Routes>
        <Route path="/" element={<>
      {(film &&(note > 1 || titre.length > 0)) && film.map(f => <Film key={f.id} film={f} add_favorite={add_favorite} />)}
      {(!film ||(note ===1 && titre.length == 0)) && <List_film add_favorite={add_favorite} />}
      <dialog id="add_film" className='add_film'>
        <h2>Add New Movie</h2>
          <input type="text" placeholder="Title" required ref={name}/>
          <input type="text" placeholder="Photo URL" required ref={photo}/>
          <input type="text" placeholder="Caractaire URL" required ref={caractaire}/>
          <input type="number" placeholder="Rating" min="1" max="5" required ref={rating}/>
          <textarea placeholder="History" required ref={history}></textarea>
          <button type="submit" onClick={()=>{
            document.getElementById('add_film').close()
            addFilm()
            setAdd(!add)
          
            
          }}>Submit</button>

      </dialog>
      
      <button onClick={() => {
        const dialog = document.getElementById('add_film');
        dialog.showModal();
        
      }}>add new movie<br/></button>
        </>} />
        <Route path="/trailer/:id" element={<Trailer add_favorite={add_favorite} />} />
      </Routes>
    </div>

    <div className='baner_fav'>
      <h3>My Favorite Movies</h3>
      <p>Here are some of my favorite movies that I highly recommend :</p>
      <ul>
        {list_favorite.map(id => {
          const film =Data.find(film => film.id === id)
          return film ? <li ><h5>{film.titre}</h5>
                             <img src={film.photo} alt={film.titre} width="100px"/>  
                           </li> : null;
        })
          }
      </ul>
    </div>
    </div>

    

  );
}

export default App;
