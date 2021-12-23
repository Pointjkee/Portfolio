import React from 'react';
import styles from './Nav.module.scss'
import {Link} from "react-scroll/modules";


export const Nav = () => {
    return (
        <div className={styles.nav}>

            <Link spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to="main"
                  style={{cursor: "pointer"}}> Main</Link>
            <Link spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to="skills"
                  style={{cursor: "pointer"}}>Skills</Link>
            <Link spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to="projects"
                  style={{cursor:"pointer"}}>Projects</Link>
            <Link spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to="contacts"
                  style={{cursor:"pointer"}}>Contacts</Link>
        </div>
    )
}