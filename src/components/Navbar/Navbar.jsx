import styles from '../../styles/Navbar.module.css'
import {MenuItems} from './MenuItems'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'


import { useState, useEffect } from 'react';

export default function Navbar() {

    const [clicked, setClicked] = useState(false);

   
        function handleClickChange(status) {
            setClicked(!clicked)
        }


    return (
        <nav className={styles.bar}>
            <h1 className={styles.navbarLogo}>LOJINHA DA MAYUMI</h1>

            <div className={styles.menuIcon} onClick={(handleClickChange)}>
            <FontAwesomeIcon icon={clicked? faTimes : faBars} color={'white'}>

            </FontAwesomeIcon>
            </div>

            <ul className={clicked ? styles.menuActive : styles.navMenu}>

                {MenuItems.map((item, index) => {
                    return (
                        <li className={styles.navbarItem} key={index}><a className={styles.navLink} href={item.url}>
                            {item.title}
                            </a>
                            </li>
                    )
                })}
            </ul>
        </nav>
    )
}


