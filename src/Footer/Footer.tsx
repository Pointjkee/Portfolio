import styles from "./Footer.module.scss";
import container from "../common/styles/Container.module.css";
import React from "react";
import {Title} from "../common/components/title/Title";
import {FaTelegram, GrLinkedin, SiCodewars, SiTypescript} from "react-icons/all";

export const Footer = () => {
    return (
        <div className={styles.main}>
            <div className={`${container.containerStyle} ${styles.footerContainer}`}>
                {/*<Title title={'Tsarik Denis'} style={{color:'white'}}/>*/}
                <div className={styles.mainDiv}>
                    <a href={'https://www.linkedin.com/in/%D0%B4%D0%B5%D0%BD%D0%B8%D1%81-%D1%86%D0%B0%D1%80%D0%B8%D0%BA-8a86991a9/'}>
                        <GrLinkedin size={50}/>
                    </a>
                    <a href={'https://t.me/Pointjkee'}
                    >
                        <FaTelegram size={50} style={{textDecoration: 'none'}}/>
                    </a>
                    <a href={'https://www.codewars.com/users/Denis%20Tsarik'}>
                        <SiCodewars size={50}/>
                    </a>

                </div>
                <div className={styles.text}>
                    © 2021, All Rights Reserved.
                </div>
            </div>
        </div>
    )
}