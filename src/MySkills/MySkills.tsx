import styles from "./MySkills.module.scss";
import container from "../common/styles/Container.module.css";
import React from "react";
import {Skill} from "./Skill/Skill";
import {Title} from "../common/components/title/Title";
import {IoLogoReact, SiRedux, SiTypescript} from "react-icons/all";
import { Fade } from "react-awesome-reveal";



export const MySkills = () => {

    return (
        <div className={styles.skillsBlock} id={'skills'}>
            <Fade>
                <div className={`${container.containerStyle} ${styles.skillsContainer}`}>
                    <Title title={'Skills'} style={{color: 'white'}}/>
                    <div className={styles.skills}>
                        <Skill title={'ReactJS'}
                               icon={<IoLogoReact size={50}/>}
                               description={'Using HOCs and Hooks (React.memo, useCallback, useEffect, useState)'}
                        />


                        <Skill title={'Redux'}
                               icon={<SiRedux size={50}/>}
                               description={'Using to manage the application state and applying middleware such as redux-thunk'}
                        />
                        <Skill title={'TypeScript'}
                               icon={<SiTypescript size={50}/>}
                               description={'Using TS because it fixes many of the limitations of JavaScript while keeping all the benefits'}
                        />
                    </div>
                </div>
            </Fade>
        </div>
    )
}