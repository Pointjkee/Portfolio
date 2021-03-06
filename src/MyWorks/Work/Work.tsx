import styles from "./Work.module.scss";
import React from "react";

type propsType = {
    nameProject: string,
    description: string,
    style?: {
        backgroundImage: string
    },
    site: string,
}

export const Work = (props: propsType) => {
    return (
        <div className={styles.work}>
            <div className={styles.img} style={props.style}>

            </div>
            <a href={props.site} className={styles.btn} > VIEW </a>
            <h3 className={styles.workTitle}>{props.nameProject}</h3>
            <span className={styles.description}>{props.description}</span>
        </div>
    )
}