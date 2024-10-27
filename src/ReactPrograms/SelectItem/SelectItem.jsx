
import React, { useState } from 'react';

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
];

const SelectAll = () => {
    const [selectedItems, setSelectedItems] = useState([]);
    
    // Check if all items are selected
    const isSelectedAll = selectedItems.length === list.length;

    // Handle individual checkbox selection
    const handleSelectedItem = (id) => {
        if (selectedItems.includes(id)) {
            // If item is already selected, remove it
            setSelectedItems(selectedItems.filter(item => item !== id));
        } else {
            // If item is not selected, add it
            setSelectedItems([...selectedItems, id]);
        }
    };

    // Handle select all checkbox
    const handleSelectedAll = () => {
        if (isSelectedAll) {
            // If all items are selected, clear selection
            setSelectedItems([]);
        } else {
            // If not all items are selected, select all
            const allIds = list.map(item => item.id);
            setSelectedItems(allIds);
        }
    };

    return (
        <div>
            <h2>Select All Component</h2>
            <div style={{backgroundColor: 'grey', padding: 10}}>
                <input 
                    type="checkbox" 
                    checked={isSelectedAll}
                    onChange={handleSelectedAll}
                />
                <label className='p-4'>Select All</label>
            </div>
            <div style={{backgroundColor: 'skyblue', padding: 10}}>
                {list.map(({name, id}) => (
                    <div key={id}>
                        <input 
                            type="checkbox"
                            checked={selectedItems.includes(id)}
                            onChange={() => handleSelectedItem(id)}
                            className='p-4 m-1'
                        />
                        <label>{name}</label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SelectAll;


















































// import React, {useState} from "react";

// const list = [
//   {
//     id: 0,
//     name: "Kingfisher",
//     checked: false
//   },
//   {
//     id: 1,
//     name: "CSS",
//     checked: false
//   },
//   {
//     id: 2,
//     name: "ReactJS",
//     checked: false

//   },
//   {
//     id: 3,
//     name: "Javascript",
//     checked: false

//   },
//   {
//     id: 4,
//     name: "lenovo",
//     checked: false

//   },
// ];

// const SelectItem = () => {
//   const [childChecked, setChildChecked] = useState(list)

//   const handleCheckbox = (id) => {
//   console.log(id)
//   }
//   return (
//     <div>
//       <h1 className="text-center">Select All Checkbox</h1>
//       <div className="bg-primary text-white p-5">
//         <input type="checkbox" id="Select All" />
//         <label htmlFor="Select All">Select All</label>
//       </div>
//       <div>
//         {
//         list?.map(({id, name}) => {
//           return (
//             <>
//               <div className="bg-black text-white p-1">
//                 <input onChange={()=>handleCheckbox(id)} key={`item_${id}`} type="checkbox" id={id} className="m-2"  />
//                 <label key={`label_${id}`} htmlFor="items" className="p-2">
//                   {name}
//                 </label>
//               </div>
//             </>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default SelectItem;
