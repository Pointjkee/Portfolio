import React from 'react';
import styles from './Main.module.scss'
import container from '../common/styles/Container.module.css'
import photo from "../assets/image/photo.jpg"
import {Fade} from "react-awesome-reveal";


export const Main = () => {
    const photoStyle = {
        backgroundImage: `url(${photo})`,
    };
    return (
        <div className={styles.main} id={'main'} >
            <Fade >
                <div className={container.containerStyle}>
                    <div className={styles.text}>
                        <span>Hello, ALL!</span>
                        <h1>I'm Denis Tsarik</h1>
                        <p>Front End Developer</p>
                    </div>
                    <div className={styles.photo} style={photoStyle}>
                    </div>
                </div>
            </Fade>
        </div>
    )
}