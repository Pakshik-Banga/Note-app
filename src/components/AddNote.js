
import {useState} from 'react'
export default function AddNote({handleAddNote}){

    const [textNode,setTextNode] = useState({
             title : "",
             content : ""
    })
    const limitOfText = 200;

function handleChange(event){
      if(limitOfText - (textNode.content.length + textNode.title.length)>0)
      {setTextNode((prev)=>{
            return {
                  ...prev,
                [event.target.name] : event.target.value
            }
     })}
}

function handleSaveClick(){

    if(textNode.content.trim().length> 0 || textNode.title.trim().length>0){
             handleAddNote(textNode)
             setTextNode(()=>{
                return {
                    title : "",
                    content: ""
                }
             })
    }
    
}

const handleKeyDownContent = (event)=>{
      const {key} = event;
      if(key==='Backspace' && textNode.content.length + textNode.title.length===limitOfText){
        //  console.log(textNode.content.length-1)
        //  console.log(textNode.content.slice(0, textNode.content.length-1))
       const newDeletedNode = {
             title : textNode.title,
            content : textNode.content.slice(0, textNode.content.length-1)
       }
    //    console.log(newDeletedNode.content," content")
        // handleAddNote(newDeletedNode)
        setTextNode(newDeletedNode)
      }
       
}

const handleKeyDownTitle = (event)=>{
    const {key} = event;
    if(key==='Backspace' && textNode.title.length + textNode.content.length ===limitOfText){
     
     const newDeletedNode = {
           title : textNode.title.slice(0, textNode.title.length-1),
          content : textNode.content
     }

     setTextNode(newDeletedNode)
     
    //   handleAddNote(newDeletedNode)
    }
     
}


  

    return (
        <div className="note new">
       

            <input type="text" 
                className='title-textarea input'
                placeholder="Add title..."
                name= "title"
                value={textNode.title}   
                onChange={handleChange}
                onKeyDown={handleKeyDownTitle}
            />
              {/* {console.log(textNode.content,"contenttt")} */}
            <textarea id="cin" className="content-textarea input"
            cols="" 
            rows="8" 
            placeholder="Type to add a note..."
            name = "content"
            value = {textNode.content}
            onKeyDown={handleKeyDownContent}
            onChange = {handleChange}
            >
            </textarea>

           <div className="note-footer">
            <small>{limitOfText-(textNode.content.length + textNode.title.length)} remaining</small>
            <button className="save" onClick={handleSaveClick}>Save</button>
           </div>

        </div>
    )

}