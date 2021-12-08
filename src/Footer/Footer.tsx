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
                    <GrLinkedin size={50}/>
                    <FaTelegram size={50}/>
                    <SiCodewars size={50}/>
                </div>
                <div className={styles.text}>
                    © 2021, All Rights Reserved.
                </div>
            </div>
        </div>
    )
}