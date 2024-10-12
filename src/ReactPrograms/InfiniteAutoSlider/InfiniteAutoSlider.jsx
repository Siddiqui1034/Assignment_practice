import React from 'react'
import styles from './InfiniteAutoSlider.module.css'
// import Image from 'next/image'

const InfiniteAutoSlider = () => {
    return (
        <div className={`slider`}>
            <div className={`sliderTrack`}>
                <div className={`slide`}>
                    <img src="/images/html.png" alt="" width='150' height='150' />
                </div>
                <div className={`slide`}>
                    <img src="/images/css.png" alt="" width='150' height='150' />
                </div>
                <div className={`slide`}>
                    <img src="/images/express.png" alt="" width='150' height='150' />
                </div>
                <div className={`slide`}>
                    <img src="/images/bootstrap.png" alt="" width='150' height='150' />
                </div>
                <div className={`slide`}>
                    <img src="/images/js.png" alt="" width='150' height='150' />
                </div>
                <div className={`slide`}>
                    <img src="/images/react.png" alt="" width='150' height='150' />
                </div>
                <div className={`slide`}>
                    <img src="/images/node.png" alt="" width='150' height='150' />
                </div>
                <div className={`slide`}>
                    <img src="/images/mongodb.png" alt="" width='150' height='150' />
                </div>

                {/* Save 9 slides */}

                <div className={`slide`}>
                    <img className={styles.imgDiv} src="/images/html.png" alt="" width='150' height='150' />
                </div>
                <div className={`slide`}>
                    <img src="/images/css.png" alt="" width='150' height='150' />
                </div>
                <div className={`slide`}>
                    <img src="/images/express.png" alt="" width='150' height='150' />
                </div>
                <div className={`slide`}>
                    <img src="/images/bootstrap.png" alt="" width='150' height='150' />
                </div>
                <div className={`slide`}>
                    <img src="/images/js.png" alt="" width='150' height='150' />
                </div>
                <div className={`slide`}>
                    <img src="/images/react.png" alt="" width='150' height='150' />
                </div>
                <div className={`slide`}>
                    <img src="/images/node.png" alt="" width='150' height='150' />
                </div>
                <div className={`slide`}>
                    <img src="/images/mongodb.png" alt="" width='150' height='150' />
                </div>
            </div>
        </div>
    )
}

export default InfiniteAutoSlider
