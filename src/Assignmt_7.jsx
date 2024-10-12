import React, {useState} from 'react'
// import styles from './Assignmt_6.module.css'
import styles from './Assignmt_6.module.css'

    const Box = (props) =>{
        const {name, isActive, getActiveBox} = props;
        
        const handleClick = (eve) =>{
            getActiveBox(eve.target.id)
        }
        return <div className={`backgroundBox ${ isActive ? styles.boxBackgroundColor: ""}`} id={name} onClick={handleClick} >
            Box
        </div>
    }


const Assignmt_7 = () => {

    const [backgroundColor, setBackgroundColor] = useState("")
    const getActiveBox = (boxId) =>{
        setBackgroundColor(boxId)
    }
  return (
    <div className={styles.backgroundDiv}>
        <Box name="green" getActiveBox={getActiveBox} isActive={ backgroundColor === "green"} />
        <Box name="red" getActiveBox={getActiveBox} isActive={ backgroundColor === "red"} />
    </div>
  )
}

export default Assignmt_7
