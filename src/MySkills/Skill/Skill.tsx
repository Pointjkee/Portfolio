import styles from "./Skill.module.scss";
import React from "react";
import {IoLogoReact} from "react-icons/all";

type propsType = {
    title: string
    description: string
    icon?: any
}

export const Skill = (props: propsType) => {
    return (
        <div className={styles.skill}>
            <div className={styles.icon}>
                {props.icon}
            </div>
            <h3>{props.title}</h3>
            <span className={styles.description}>
                        {props.description}
                    </span>

        </div>
    )
}