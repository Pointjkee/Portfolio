import React from 'react';
import styles from './Main.module.scss'
import container from '../common/styles/Container.module.css'
//@ts-ignore
import photo from "../assets/image/photo.jpg"


export const Main = () => {
    const photoStyle = {
        backgroundImage: `url(${photo})`,
    };
    return (
        <div className={styles.main} id={'main'}>
            <div className={container.containerStyle}>
                <div className={styles.text}>
                    <span>Hello, ALL!</span>
                    <h1>I'm Denis Tsarik</h1>
                    <p>Front End Developer</p>
                </div>
                <div className={styles.photo} style={photoStyle}>
                </div>
            </div>
        </div>
    )
}