// src/pages/CV/Portfolio.jsx
import React from 'react';
import styles from './Portfolio.module.css';
import { Link } from "react-router-dom";

function Portfolio() { 
    return (
        <section id="portafolio" className={styles.portfolio}>
            <h2 className={styles.portfolioTitle}>Portafolio</h2>
            <div className={styles.portfolioProjectContainer}>

                <div className={styles.portfolioProjectCard}>
                    <img src="/CV-ESPANOL/assets/GEOVANNY.png" alt="EVOLVE" className={styles.portfolioCardImg} />
                    <div className={styles.portfolioCardContent}>
                        
                        

                        <h3 className={styles.portfolioCardTitle}>
                        <Link to="/GEOVANNY">GEOVANNY RACING TEAM</Link>
                        </h3>
                        <p className={styles.portfolioCardDescription}>
                        Página personalizada para marca de ropa deportiva de ciclismo
                        </p>
                        
                        <div className={styles.skillsWrapper}>
                        {['REACT', 'CSS', 'UX/UI'].map((skill) => (
                        <div className={styles.skillPill} key={skill}>
                        <img
                            src={`/CV-ESPANOL/assets/Icons TS/${skill.replace('/', '_')}.png`} // requiere archivo UX-UI.png
                            alt={`${skill} icon`}
                            className={styles.skillIcon}
                        />
                        {skill === 'JS' ? 'JavaScript' : skill}
                        </div>
                        ))}
                        </div>

                    </div>
                </div>


                <div className={styles.portfolioProjectCard}>
                    <img src="/CV-ESPANOL/assets/EVOLVE.png" alt="EVOLVE" className={styles.portfolioCardImg} />
                    <div className={styles.portfolioCardContent}>
                        <h3 className={styles.portfolioCardTitle}>
                        <Link to="/evolve">EVOLVE</Link>
                        </h3>
                        <p className={styles.portfolioCardDescription}>
                        Aplicación para seguimiento de hábitos y crecimiento personal
                        </p>

                        <div className={styles.skillsWrapper}>
                        {['REACT', 'CSS',].map((skill) => (
                        <div className={styles.skillPill} key={skill}>
                        <img
                            src={`/CV-ESPANOL/assets/Icons TS/${skill.replace('/', '_')}.png`} // requiere archivo UX-UI.png
                            alt={`${skill} icon`}
                            className={styles.skillIcon}
                        />
                        {skill === 'JS' ? 'JavaScript' : skill}
                        </div>
                        ))}
                        </div>


                    </div>
                </div>

                

            </div>
        </section>
    );
}

export default Portfolio;
