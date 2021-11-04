import styles from "../Skill/Skill.module.css";
import React from "react";

type propsType = {
    title: string
    description: string
}

export const Skill = (props: propsType) => {
    return (
        <div className={styles.skill}>
            <div className={styles.icon}></div>
            <h3>{props.title}</h3>
            <span className={styles.description}>
                        {props.description}
                    </span>

        </div>
    )
}