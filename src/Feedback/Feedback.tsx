import styles from "./Feedback.module.scss";
import container from "../common/styles/Container.module.css";
import React from "react";
import {Title} from "../common/components/title/Title";
import {Fade} from "react-awesome-reveal";

export const Feedback = () => {
    return (
        <div className={styles.main} id={'contacts'}>
            <Fade>
                <div className={`${container.containerStyle} ${styles.feedbackContainer}`}>
                    <Title title={'Contacts'}/>
                    <form className={styles.form}>
                        <div className="text-field__icon text-field__icon_email">
                            <input placeholder={"Your Name"} className={styles.inputs}/>
                        </div>
                        <input placeholder={"Your Email"} className={styles.inputs}/>
                        <textarea placeholder={"Your Message"} className={styles.textarea}/>
                    </form>
                    <button type='submit'>Send</button>
                </div>
            </Fade>
        </div>
    )
}