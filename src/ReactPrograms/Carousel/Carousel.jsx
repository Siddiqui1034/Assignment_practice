import React, { useState, useEffect } from 'react'
import styles from './Carousel.module.css'

const Carousel = () => {
    const [cnt, setCnt] = useState(1)

    function fnCarousel() {
        setInterval(() => {

            setCnt( function(cnt){
                if (cnt === 3) {
                    return 1
                }
                return cnt + 1
            })

        }, 3000);
    }
    useEffect(() => {
        fnCarousel()
    }, [])
    return (
        // <div className={`${styles.parent}`}>
        //     <div className={`${styles.child}`}>
        //         <img src={`${cnt}.jpg`} alt="" />
        //     </div>
        // </div>
        <p>
             <img src={`${cnt}.jpg`} alt={`${cnt}.jpg`} />
        </p>
    )
}

export default Carousel
