import React, { useState } from 'react'
import './MoveLeftToRight.css'

const Box = ({ side, name, handleCallback, clickedItem }) => {
    return <>
        <div className='boxDiv' >
            {console.log(side)}
            {
                side.map((val, ind) => {
                    return <div className={clickedItem === val ? "active" : ""} data-name={name} key={`item_${ind}`} onClick={handleCallback}  > {val} </div>
                })
            }
        </div>
    </>
}

const MoveLeftToRight = () => {
    const [left, setLeft] = useState(['Sachin', "Dhoni", "Kohli"])
    const [right, setRight] = useState(['UV', 'Panth'])
    const [rightItem, setrightItem] = useState('')
    const [leftItem, setleftItem] = useState('')

    const MoveFunction = (eve) => {
        const { dataset, innerText } = eve.target;
        // console.log(name, innerText)
        // console.log(getAttribute('name'), innerText)
        console.log(dataset.name, innerText)
        if (dataset.name === 'leftItems') {
            setleftItem(innerText)
        }
        if (dataset.name === 'rightItems') {
            setrightItem(innerText)
        }
        console.log(dataset.name, innerText)
    }

    const handleRightClick = () => {
        // when click on moveRight the selected leftItem should remove from left and add to right array
        // 1. I need active selected item 
        // 2. I need to remove from left array
        // 3. I need to add this in right array 
        const left = [...left] // these are my current left values sachin dhoni kohli in state variable left array
        const right = [...right]  
        left.splice(left.indexOf(leftItem), 1) // from selected leftItem state value i need to know selectedleftItem index and will splice and remvoe from left state array
        right.push(leftItem)
        setLeft(left)
        setRight(right)
        setleftItem(" ")
    }

    const handleLeftClick = () => {

    }

    return <>
        <div className='container'>
            <Box clickedItem={leftItem} name="leftItems" side={left} handleCallback={MoveFunction} />
            <div className='midDiv'>
                <button disabled={!leftItem} onClick={handleRightClick}>Move Right</button>
                <button disabled={!rightItem} onClick={handleLeftClick}>Move Left</button>
            </div>
            <Box clickedItem={rightItem} name="rightItems" side={right} handleCallback={MoveFunction} />
        </div>
    </>

}

export default MoveLeftToRight
