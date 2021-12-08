import styles from "./Work.module.scss";
import React from "react";

type propsType = {
    nameProject: string,
    description: string,
    style?: {
        backgroundImage: string
    }
}

export const Work = (props: propsType) => {
    return (
        <div className={styles.work}>
            <div className={styles.img} style={props.style}>
                <a href={'www'} className={styles.btn}> VIEW </a>
            </div>
            <h3 className={styles.workTitle}>{props.nameProject}</h3>
            <span className={styles.description}>{props.description}</span>
        </div>
    )
}