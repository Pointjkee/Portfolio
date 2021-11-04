import styles from "../MySkills/MySkills.module.css";
import container from "../common/styles/Container.module.css";
import React from "react";
import {Skill} from "./Skill/Skill";

export const MySkills = () => {
    return (
        <div className={styles.skillsBlock}>
            <div className={`${container.containerStyle} ${styles.skillsContainer}`}>
                <h2 className={styles.title}>Skills</h2>
                <div className={styles.skills}>
                <Skill title={'ReactJS'} description={'description1 description1 description1 description1 description1 description1 description1 description1 description1'}/>
                <Skill title={'Redux'} description={'description2 description2 description2 description2 description2 description2 description2 description2 description2 description2'}/>
                <Skill title={'TypeScript'} description={'description3 description3 description3 description3 description3 description3 description3 description3 description3 description3'}/>
                </div>
            </div>
        </div>
    )
}