
import NoteList  from "./components/NotesList"
import {useState, useEffect} from 'react'
import {nanoid}  from  'nanoid'
import AddNote  from "./components/AddNote"
import Search from './components/Search'
import Header from "./components/header"
export default function App(){
const [notes,setNotes] = useState([])

function addNote({title,content}){
  const today = new Date();
  const newnode  = {
    id : nanoid(),
     textTitle : title,
     text :content,
     date : today.toDateString()
  }

  const newNotes = [...notes,newnode]
   setNotes(newNotes);
   localStorage.setItem("react-app-notes-data",JSON.stringify(newNotes))
}

 function deleteNote(id){
     console.log(id,"id")
      const newNotess = notes.filter((ind)=>ind.id!==id)

      setNotes(newNotess)
      localStorage.setItem("react-app-notes-data",JSON.stringify(newNotess))
    
 
 }

  const [searchText,setSearchText] = useState('')

  const [darkMode,changeMode] = useState(false)

  useEffect(()=>{
    setNotes(JSON.parse(localStorage.getItem('react-app-notes-data')))        
},[]) 


   
  

  return (
  <div className= { `${(darkMode)?"dark-mode":""}`}>  
    <div className="container" >
      <Header handleDarkMode={changeMode}/>
     <Search handleSearchText={setSearchText} />
      <NoteList notes = {(searchText.trim()==='')?notes:notes.filter((note)=>{
                                  {console.log("hello ",note.textTitle.toLowerCase())}
                                return   (note.textTitle.toLowerCase().includes(searchText.trim().toLowerCase()) ||
                                           note.text.toLowerCase().includes(searchText.trim().toLowerCase()) 
                                )    
      })} 
      handleAddNote={addNote}
      
      handleDeleteNote = {deleteNote}
      />
    </div>
   
   </div>
  )
}
