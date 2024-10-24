import React, {useState} from 'react'

const SearchBox = () => {
    const [list, setList] = useState(['apple', 'kiwi', 'pears', 'guava', 'pineapple']);
    const [search, setSearch] = useState(list)
    const handleChange = (eve) =>{
        // console.log(eve.target.value)
        let searchedItem = eve.target.value
        // const filteredItem = list.filter((val)=> val === searchedItem)
        const filteredItem = list.filter((val)=> val.includes(searchedItem))
        setSearch(filteredItem)
    }
    return (
    <div>
     <p>Search: <input type="text" onChange={handleChange} placeholder='Type to Search'/></p> 
     <ol>
        {
            search.map((val, i)=>{
                return <li>{val}</li>
            })
        }
     </ol>
    </div>
  )
}

export default SearchBox
