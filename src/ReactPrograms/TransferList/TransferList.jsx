import React,{useState} from "react";
import {data }from './data'
import './Transfer.css'

const TransferList = () => {
    const [leftItem, setLeftItem] = useState(data)
    const [rightItem, setRightItem] = useState([])

    const checkedList = (list, id, checked)=>{
        return list?.map((item)=> {
            // console.log(id, checked)
            if(item.id === id){
                return {
                    ...item,
                    isChecked: !checked
                }
            }
            return item
        }
             )
    }
    const handleClick = (id, isChecked, direction)=>{
        // console.log(id, isChecked, direction) // user click item and its id
        if(direction === "LEFT"){
            let clonedItem =[...leftItem] // whole item
            let updatedItem =  checkedList(clonedItem, id, isChecked)
            setLeftItem(updatedItem)
        }
        else{
            let clonedItem =[...rightItem] // whole item
            let updatedItem =  checkedList(clonedItem, id, isChecked)
            setRightItem(updatedItem)
        }
    }

    const resetChecked = (list) =>{
        return list?.map((item)=>{
            return {
                ...item,
                isChecked: false
            }
        })
    }
    const handleTransferBtn = (dir) =>{
        if(dir === "LEFT_TO_RIGHT" ){
            if(leftItem.length){
                const copyItem = [...leftItem];
                const checkedList = copyItem.filter(item => item.isChecked);
                const unCheckedList = copyItem.filter(item => !item.isChecked)
                setLeftItem(unCheckedList)
                setRightItem(resetChecked([...rightItem,...checkedList]))// but it will go with checked status of item so we reset when it go to otherside
            } 
        }
        else {
            const copyItem = [...rightItem]
            const checkedList = copyItem.filter(item => item.isChecked)
            const unCheckedList = copyItem.filter(item => !item.isChecked)
            setLeftItem(resetChecked([...leftItem, ...checkedList]))
            setRightItem(unCheckedList)
        }               
    } 
  return (
    <div>
      <h1>Transfer List</h1> 

        {/* Container Box in which 1.leftBox 2.middleBox 3.RightBox */}
      <div className="container">

        {/* LeftBox */}
        <div className="box">
            {
                leftItem?.map(({id, text, isChecked}, index)=>{
                    return <div onClick={()=>handleClick(id, isChecked, "LEFT")} className={`items ${isChecked && 'checked'}`} key={`left_${id}`}>{text}</div>
                })
            }
        </div>

        {/* middleBox */}
        <div className="middleBox">
            <button onClick={()=>{handleTransferBtn('LEFT_TO_RIGHT')} } className="btn btn-dark">Left</button>
            <button onClick={()=>{handleTransferBtn('RIGHT_TO_LEFT')} } className="btn btn-dark btn-lg">Right</button>
        </div>

        {/* rightBox */}
        <div className="box">
        {
                rightItem?.map(({id, text, isChecked}, index)=>{
                    return <div onClick={()=>handleClick(id, isChecked, "RIGHT")} className={`items ${isChecked && 'checked'}`} key={`right_${id}`}>{text}</div>
                })
            }
        </div>

      </div>
      
    </div>
  );
};

export default TransferList;
