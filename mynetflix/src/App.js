import { useState } from 'react';
import logo from './logo.svg';
 import './App.css';
import List_film from './List_film';
import Navb from './Navb';
import Data from './Data';
import Film from './Film';
import { useRef } from 'react';

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
    history:history.current.value})
}
const [add,setAdd]=useState(false)
    


  return (
    <div id='App'>
      <Navb searshref={searshref} searsh={searsh} note={note} changeNote={changeNote} />
      {(film &&(note > 1 || titre.length > 0)) && film.map(f => <Film key={f.id} film={f} />)}
      {(!film ||(note ===1 && titre.length == 0)) && <List_film />}
      <dialog id="add_film" className='add-film'>
        <h2>Add New Movie</h2>
        <form>
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

        </form>
      </dialog>
      
      <button onClick={() => {
        const dialog = document.getElementById('add_film');
        dialog.showModal();
        
      }}>add new movie<br/></button>
    </div>
  );
}

export default App;
