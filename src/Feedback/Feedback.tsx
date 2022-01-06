import styles from "./Feedback.module.scss";
import container from "../common/styles/Container.module.css";
import React, {ChangeEvent, useState} from "react";
import {Title} from "../common/components/title/Title";
import {Fade} from "react-awesome-reveal";
import axios from "axios";

export const Feedback = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [text, setText] = useState('')


    const handlerName = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
    }
    const handlerEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }
    const handlerText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.currentTarget.value)
    }
    const handlerClick = () => {
        axios.post('https://smtpnodeserver.herokuapp.com/sendMessage',{
            name, email, text
        })
        setTimeout(()=> {
            setName('')
            setEmail('')
            setText('')
        },500)
        alert('Ваша сообщение отправлено!')
    }

    return (
        <div className={styles.main} id={'contacts'}>
            <Fade>
                <div className={`${container.containerStyle} ${styles.feedbackContainer}`}>
                    <Title title={'Contacts'}/>
                    <form className={styles.form}>
                        <div className="text-field__icon text-field__icon_email">
                            <input placeholder={"Your Name"} className={styles.inputs} onChange={handlerName}
                                   value={name}/>
                        </div>
                        <input placeholder={"Your Email"} className={styles.inputs} onChange={handlerEmail} value={email}/>
                        <textarea placeholder={"Your Message"} className={styles.textarea}
                                  onChange={handlerText} value={text}/>
                    </form>
                    <button type='submit' onClick={handlerClick}>Send</button>
                </div>
            </Fade>
        </div>
    )
}