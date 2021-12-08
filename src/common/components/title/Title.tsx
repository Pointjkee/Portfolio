import styles from "./Title.module.scss";
import React from "react";

type propsType = {
    title:string
    style?:{
        color:string
    }
}

export const Title = (props:propsType) => {
    return (
        <div className={styles.title}>
            <h2 style={props.style} >{props.title}</h2>
        </div>
    )
}