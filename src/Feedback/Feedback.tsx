import styles from "./Feedback.module.css";
import container from "../common/styles/Container.module.css";
import React from "react";

export const Feedback = () => {
    return (
        <div className={styles.main}>
            <div className={`${container.containerStyle} ${styles.feedbackContainer}`}>
                <div className={styles.contacts}>Contacts</div>
                    <form className={styles.form}>
                        <input/>
                        <input/>
                        <textarea/>
                    </form>
                <button>Send</button>
            </div>
        </div>
    )
}