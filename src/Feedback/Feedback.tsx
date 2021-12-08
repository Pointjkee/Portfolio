import styles from "./Feedback.module.scss";
import container from "../common/styles/Container.module.css";
import React from "react";
import {Title} from "../common/components/title/Title";

export const Feedback = () => {
    return (
        <div className={styles.main}>
            <div className={`${container.containerStyle} ${styles.feedbackContainer}`}>
                <Title title={'Contacts'}/>
                <form className={styles.form}>
                    <input placeholder={"Your Name"}/>
                    <input placeholder={"Your Email"}/>
                    <textarea placeholder={"Your Message"}/>
                </form>
                <button>Send</button>
            </div>
        </div>
    )
}