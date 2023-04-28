
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
export default function Notes({id,textTitle,text,date,handleDeleteNote}){
    

    return (
        <div className="note">
            <div className="context">
            <p className="textTitle">{textTitle}</p>
     
            <span className='textContent' id="cin2">{text}</span>
            </div>
            <div className="note-footer">
                <small>{date}</small>
                <DeleteForeverIcon onClick={()=>handleDeleteNote(id)} className='delete-icon' size='1.3rem'/>
            </div>

        </div>
    )
}