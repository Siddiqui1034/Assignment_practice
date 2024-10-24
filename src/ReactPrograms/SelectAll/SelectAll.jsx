import React, { useState } from 'react'

const list = [
    {
        id: 0,
        name: 'Kingfisher'
    },
    {
        id: 1,
        name: 'CSS'
    },
    {
        id: 2,
        name: 'ReactJS'
    },
    {
        id: 3,
        name: 'Javascript'
    },
    {
        id: 4,
        name: 'lenovo'
    }
]
const SelectAll = () => {

    const [selectedCheckbox, setSelectedCheckbox] = useState(new Set())

    const isSelectedAll = (selectedCheckbox.size === list.length) // isSelectedAll will be true if selectedCheckbox.size equal to list length

    const handleCheckboxChange = (itemId) =>{
        const updatedSelectedCheckbox = new Set(selectedCheckbox)
        if(updatedSelectedCheckbox.has(itemId))
            {
                updatedSelectedCheckbox.delete(itemId) // deselect children checkbox
        }
        else{
            updatedSelectedCheckbox.add(itemId) // select children checkbox
        }

        setSelectedCheckbox(updatedSelectedCheckbox)
    }

    const handleSelectAllCheckbox = () =>{
        if(isSelectedAll){
            setSelectedCheckbox(new Set()) // deselect all checkbox
        }
        else{
            setSelectedCheckbox(new Set(list.map((item)=> item.id)))  // Select All Checkbox
        }
    }
  return (<>
  
    <div className='flex item-center bg-dark-subtle my-4 p-3'>
      <input type='checkbox' className='p-4 text-black' checked={isSelectedAll} onChange={handleSelectAllCheckbox} />
      <label className='ml-2 pl-2 text-black'>Select All</label>
      </div>
      <div>
      {
        list?.map((items)=>
        <div key={items.id} className='flex item-center bg-body  my-4 p-3'>
            <input checked={selectedCheckbox.has(items.id)}  type="checkbox" className='p-4 text-black' onChange={() => handleCheckboxChange(items.id)}/>
            <label className='ml-2 pl-2 text-black'>{items.name}</label>
        </div>
        )
      }
      </div>    
    </>
  )
}

export default SelectAll
