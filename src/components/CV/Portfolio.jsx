// src/pages/CV/Portfolio.jsx
import React from 'react';
import styles from './Portfolio.module.css';
import { Link } from "react-router-dom";

function Portfolio() { 
    return (
        <section id="proyectos" className={styles.portfolio}>
            <h2 className={styles.portfolioTitle}>Portafolio</h2>
            <div className={styles.portfolioProjectContainer}>
                
                <div className={styles.portfolioProjectCard}>
                    <img src="/CV/assets/EVOLVE.png" alt="EVOLVE" className={styles.portfolioCardImg} />
                    <div className={styles.portfolioCardContent}>
                        <h3 className={styles.portfolioCardTitle}>
                        <Link to="/evolve">EVOLVE</Link>
                        </h3>
                        <p className={styles.portfolioCardDescription}>
                        Aplicación para seguimiento de hábitos y crecimiento personal
                        </p>
                    </div>
                </div>

                <div className={styles.portfolioProjectCard}>
                    <img src="/CV/assets/GEOVANNY.png" alt="EVOLVE" className={styles.portfolioCardImg} />
                    <div className={styles.portfolioCardContent}>
                        <h3 className={styles.portfolioCardTitle}>
                        <Link to="/GEOVANNY">GEOVANNY RACING TEAM</Link>
                        </h3>
                        <p className={styles.portfolioCardDescription}>
                        Aplicación para seguimiento de hábitos y crecimiento personal
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Portfolio;
