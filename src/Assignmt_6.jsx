import React, { useState } from 'react'
import styles from './Assignmt_6.module.css'


const Circle = ({ name, borderRadius, width, height, border, top, marginLeft, activeCircle, selectedCircle}) => {

    const handleClick = (eve) => {
        console.log(eve.target.id);
        selectedCircle(eve.target.id)
    }

    return (
        <div id={name} className={`${activeCircle ? styles.active:""}`} onClick={handleClick} style={{borderRadius, width, height, border, top, marginLeft}} >
        </div>
    )
}

const Board = ({ height, width, border, margin, children }) => {
    return (
        <div style={{ height, width, border, margin }}>
            {children}
        </div>
    )
}

const Assignmt_6 = () => {

    const [color, setColor] = useState("")
    const getActiveCircle = (circleId) =>{
        setColor(circleId)
    }

    return (
        <div className={styles.backgroundColor}>
            Click then Baloon color change
            {/* <Board height="500px" width="500px" border="2px solid red" margin="50px" > */}
                <Circle selectedCircle={getActiveCircle} activeCircle={ color === 'crcl1'} name="crcl1" margin="20px" borderRadius="50%" width="50px" height="50px" top="20px" marginLeft="50" border="5px solid black" />
                <Circle selectedCircle={getActiveCircle} activeCircle={ color === 'crcl2'} name="crcl2" margin="20px" borderRadius="50%" width="100px" height="100px" top="50px" left="100" border="5px solid black" />
                <Circle selectedCircle={getActiveCircle} activeCircle={ color === 'crcl3'} name="crcl3" margin="20px" borderRadius="50%" width="100px" height="100px" top="150px" left="75" border="5px solid black" />
                <Circle selectedCircle={getActiveCircle} activeCircle={ color === 'crcl4'} name="crcl4" margin="50px" borderRadius="50%" width="100px" height="100px" top="200px" left="300" border="5px solid black" />
            {/* </Board > */}
        </div>
    )
}

export default Assignmt_6
