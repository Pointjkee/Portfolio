import styles from "./RemoteWork.module.scss"
import React from "react";
import container from "../common/styles/Container.module.css";
import {Title} from "../common/components/title/Title";

export const RemoteWork = () => {
    return (
        <div className={styles.main}>
            <div className={`${container.containerStyle} ${styles.remoteContainer}`}>
                <Title style={{color: 'white'}}
                       title={'Considering options for remote work'}
                />
                <button>Hire me</button>
            </div>
        </div>
    )
}