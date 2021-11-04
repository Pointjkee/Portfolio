import styles from "./Work.module.css";
import React from "react";

type propsType = {
    nameProject: string,
    description: string
}

export const Work = (props: propsType) => {
    return (
        <div className={styles.work}>
            <div className={styles.img}>
                <a className={styles.a} href={'www'}> Watch </a>
            </div>
            <h3>    {props.nameProject}</h3>
            <span> {props.description}</span>
        </div>
    )
}