import styles from "./MyWorks.module.scss";
import React from "react";
import container from "../common/styles/Container.module.css";
import {Work} from "./Work/Work";
import {Title} from "../common/components/title/Title";
//@ts-ignore
import todoImage from "../assets/image/todo2.JPG"
//@ts-ignore
import counterImage from "../assets/image/counter.JPG"


export const MyWorks = () => {
    const todo = {
        backgroundImage: `url(${todoImage})`,
    };
    const counter = {
        backgroundImage: `url(${counterImage})`,
    };
    return (
        <div className={styles.works}>
            <div className={`${container.containerStyle} ${styles.worksContainer}`}>
                <Title title={'My works'}/>
                <div className={styles.work}>
                    <Work nameProject={'Todolist'}
                          style={todo}
                          description={'TS, Redux, RestAPI, Thunk, Axios, Material UI, Unit Tests'}
                    />
                    <Work style={counter}
                          nameProject={'Counter'}
                          description={'TS, Redux, Reducers'}
                    />
                </div>
            </div>
        </div>
    )
}