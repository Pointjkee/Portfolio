import styles from "./MyWorks.module.css";
import React from "react";
import container from "../common/styles/Container.module.css";
import { Work } from "./Work/Work";

export const MyWorks = () => {
    return (
        <div className={styles.works}>
            <div className={`${container.containerStyle} ${styles.worksContainer}`}>
                <div className={styles.title}>
                    <span style={{backgroundColor:'blue'}}>My works</span>
                </div>
                <div className={styles.work}>
                  <Work nameProject={'Todolist' } description={'lalalala llala lalalall alalala lal alalalalala sda sda sdasdas'}/>
                  <Work nameProject={'Counter'} description={'gagag agagag aga gagag aga gagaga'}/>
                </div>
            </div>
        </div>
    )
}