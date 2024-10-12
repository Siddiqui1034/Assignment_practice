import React, { useState } from 'react'

const Tab =(props)=>{
    // const [activeTab, setActiveTab] = useState("List")
    const [activeTabIndex, setActiveTabIndex] = useState(0)
    const {items, children} = props

    const handleClick =(i) =>{
        // alert(eve.target)
        // setActiveTab(e.target.value)
    //    alert(i)
       setActiveTabIndex(i)
    }
    return (<>
        <div className='tabs'> 
            {
                items.map((item, ind)=>{
                 return   <span className={ind===activeTabIndex ? "activeTab": "" } key={`tab_${ind}`} onClick={()=>handleClick(ind)}>{item}</span>
                })
            }           
        </div>
         
         {
            // children[0] // 0 first items will display
            children[activeTabIndex] // 0 first items will display
        }
        </>
        
    )
}

const AjaxListGrid = () => {
  return (
    <div> 
        <h1 className={`text-center bg-danger text-white mb-4 py-3`}>Tabs Views</h1>
      <Tab items={["List", "Grid", "Table", "Cards"]}>  
        <div>List View</div>
        <div>Grid View</div>
      </Tab>   
    </div>
  )
}

export default AjaxListGrid
