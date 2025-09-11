// src/components/CV/Header.jsx
import React from 'react';
import styles from './Header.module.css';

function Header() {
    return (
        <header className={styles.header}>
            <nav className={styles.headerNav}>
                <ul className={styles.headerNavList}>
                    <li className={styles.headerNavItem}><a href="#perfil">Perfil</a></li>
                    <li className={styles.headerNavItem}><a href="#contacto">Contacto</a></li>
                    <li className={styles.headerNavItem}><a href="#experiencia">Experiencia</a></li>
                    <li className={styles.headerNavItem}><a href="#portafolio">Portafolio</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;


