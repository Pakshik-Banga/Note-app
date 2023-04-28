import Note from  './Note'
  import AddNote from './AddNote'

export default function NoteList({notes,handleAddNote,handleDeleteNote}){
      //  console.log(notes,"notes")
    // console.log(handleAddNote)
      // console.log(handleDeleteNode," delete node")

      return <div className="notes-list">
          
             <AddNote handleAddNote={handleAddNote}
                    
             />
          {notes.map((note)=>{
            return <div className="note-outer"> 
            <Note
            
                         id={note.id}
                         textTitle = {note.textTitle}
                         text={note.text}
                         date = {note.date}
                         handleDeleteNote = {handleDeleteNote}
            />
            
            </div>
                })}
              
      </div>
}