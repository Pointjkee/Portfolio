import React from 'react';
import styles from './Main.module.css'
import container from '../common/styles/Container.module.css'


export const Main = () => {
    return (
        <div className={styles.main}>
          <div className={container.containerStyle}>
              <div className={styles.text}>
                  <span>Hello, ALL!</span>
                  <h1>I'm Denis Tsarik</h1>
                  <p>Front End Developer</p>
              </div>
              <div className={styles.photo}>
              </div>
          </div>
        </div>
    )
}