import SearchIcon from '@mui/icons-material/Search';
// AiOutlineSearch

export default function search({handleSearchText}){


     return (

       <div className="search">
        <SearchIcon className="search-icons" size='1.3rem' />
        <input 
        type="text" 
        placeholder="type to search..." 
        onChange = {(event)=>{
              handleSearchText(event.target.value)
        }}

        />
       </div>

     )


}