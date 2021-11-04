import styles from "./Footer.module.css";
import container from "../common/styles/Container.module.css";
import React from "react";

export const Footer = () => {
    return (
        <div className={styles.main}>
            <div className={`${container.containerStyle} ${styles.footerContainer}`}>
                <div style={{backgroundColor:"red"}}>Tsarik Denis</div>
                <div className={styles.mainDiv}>
                    <div className={styles.div}></div>
                    <div className={styles.div2}></div>
                    <div className={styles.div}></div>
                    <div className={styles.div2}></div>
                    <div className={styles.div}></div>
                    <div className={styles.div2}></div>
                    <div className={styles.div}></div>
                </div>
            </div>
        </div>
    )
}