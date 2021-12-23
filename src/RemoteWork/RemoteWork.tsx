import styles from "./RemoteWork.module.scss"
import React from "react";
import container from "../common/styles/Container.module.css";
import {Title} from "../common/components/title/Title";
import {Fade} from "react-awesome-reveal";

export const RemoteWork = () => {
    return (
        <div className={styles.main}>
            <Fade>
                <div className={`${container.containerStyle} ${styles.remoteContainer}`}>
                    <Title style={{color: 'white'}}
                           title={'Considering options for remote work'}
                    />
                    <button>Hire me</button>
                </div>
            </Fade>
        </div>
    )
}