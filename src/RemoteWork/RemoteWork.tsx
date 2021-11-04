import styles from "./RemoteWork.module.css"
import React from "react";
import container from "../common/styles/Container.module.css";

export const RemoteWork = () => {
    return (
        <div className={styles.main}>
         <div className={ `${container.containerStyle} ${styles.remoteContainer}`}>
             <div style={{backgroundColor:'blue'}}>Considering options for remote work</div>
             <button>Hire me</button>
         </div>
        </div>
    )
}