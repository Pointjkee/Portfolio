import styles from "./MyWorks.module.scss";
import React from "react";
import container from "../common/styles/Container.module.css";
import {Work} from "./Work/Work";
import {Title} from "../common/components/title/Title";
//@ts-ignore
import todoImage from "../assets/image/todo2.JPG"
//@ts-ignore
import counterImage from "../assets/image/counter.JPG"
//@ts-ignore
import socialImage from "../assets/image/social.JPG"
import {Fade} from "react-awesome-reveal";


export const MyWorks = () => {
    const todo = {
        backgroundImage: `url(${todoImage})`,
    };
    const counter = {
        backgroundImage: `url(${counterImage})`,
    };
    const social = {
        backgroundImage: `url(${socialImage})`,
    };

    return (
        <div className={styles.works} id={'projects'}>
            <Fade>
                <div className={`${container.containerStyle} ${styles.worksContainer}`}>
                    <Title title={'My works'}/>
                    <div className={styles.work}>
                        <Work nameProject={'Todolist'}
                              style={todo}
                              description={'TS, Redux, RestAPI, Thunk, Axios, Material UI, Unit Tests'}
                              site={'https://pointjkee.github.io/todolist/'}
                        />
                        <Work style={counter}
                              nameProject={'Counter'}
                              description={'TS, Redux, Reducers'}
                              site={'https://pointjkee.github.io/Counter/'}
                        />
                        <Work style={social}
                              nameProject={'Social network'}
                              description={'TS, Redux, RestAPI, Thunk, Axios, formik'}
                              site={'https://pointjkee.github.io/Social_network/'}
                        />
                    </div>
                </div>
            </Fade>
        </div>
    )
}