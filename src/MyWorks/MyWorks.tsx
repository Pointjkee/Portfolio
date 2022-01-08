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
//@ts-ignore
import packImage from "../assets/image/packs.JPG"
//@ts-ignore
import selectImage from "../assets/image/select.JPG"
import {Fade} from "react-awesome-reveal";


export const MyWorks = () => {
    const todo = {
        backgroundImage: `url(${todoImage})`,
    }
    const counter = {
        backgroundImage: `url(${counterImage})`,
    }
    const social = {
        backgroundImage: `url(${socialImage})`,
    }
    const packs = {
        backgroundImage: `url(${packImage})`,
    }
    const select = {
        backgroundImage: `url(${selectImage})`,
    }


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
                        <Work style={packs}
                              nameProject={'Packs game'}
                              description={'TS, Redux-toolkit, RestAPI, Thunk, Axios, formik, MUI'}
                              site={'https://pointjkee.github.io/Final-Project-Friday/'}
                        />
                        <Work style={select}
                              nameProject={'Extended select'}
                              description={'VanillaJS'}
                              site={'https://pointjkee.github.io/Extended-Select/'}
                        />
                    </div>
                </div>
            </Fade>
        </div>
    )
}