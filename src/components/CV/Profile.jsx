// src/pages/CV/Profile.jsx
import React from 'react';
import styles from './Profile.module.css';

function Profile() {
    return (
        <section id="inicio" className={styles.profile}>
        <div className={styles.profileWrapper}>
            {/*-- IMG --*/}
            <div className={styles.profileImgContainer}>
            <img src="/CV/assets/SBP.jpg" className={styles.profileImg} alt="Profile" />
            </div>

            {/*-- CONTENEDOR DE INFO --*/}
            <div className={styles.profileDataContainer}>
            <div className={styles.profileData}>
                {/*-- SBP --*/}
                <div className={styles.profileDescription}>
                <h1 className={styles.presentationName}>Santiago Barragán Pinzón</h1>
                <p className={styles.profileDescription}>
                    <span className={styles.span}>Estudiante de Ingeniería en Desarrollo de Software</span> con experiencia en operaciones de producción y comercio online. Hábil en liderar equipos, optimizar flujos de trabajo y desarrollar soluciones mediante el uso de tecnología. Apasionado por la resolución de problemas y el aprendizaje continuo.
                </p>
                </div>

                <div className={styles.CV}>
                <span className="material-symbols-outlined" style={{ color: '#000' }}>
                    download
                </span>
                <a className={styles.linkCV} href="/CV/CV-Santiago-Barragan.pdf" download="CV-Santiago-Barragan.pdf">CV en PDF</a>
                </div>

                {/*-- Habilidades Técnicas --*/}
                <div className={styles.profileSkillsContainer}>
                <h2>Habilidades Técnicas</h2>
                <div className={styles.skillsWrapper}>
                    {['HTML', 'CSS', 'JS', 'REACT', 'GIT', 'GITHUB', 'PYTHON', 'UX/UI'].map((skill) => (
                    <div className={styles.skillPill} key={skill}>
                        <img
                        src={`/CV/assets/Icons TS/${skill.replace('/', '_')}.png`} // requiere archivo UX-UI.png
                        alt={`${skill} icon`}
                        className={styles.skillIcon}
                        />
                        {skill === 'JS' ? 'JavaScript' : skill}
                    </div>
                    ))}
                </div>
                </div>

                {/*-- Habilidades Blandas --*/}
                <div className={styles.profileSkillsContainer}>
                <h2>Habilidades Blandas</h2>
                <div className={styles.skillsWrapper}>
                    {[
                    { label: 'Liderazgo', icon: 'Liderazgo' },
                    { label: 'Resolución de Problemas', icon: 'ResolucionProblemas' },
                    { label: 'Adaptabilidad', icon: 'Adaptabilidad' },
                    { label: 'Colaboración', icon: 'Colaboracion' },
                    { label: 'Comunicación', icon: 'Comunicacion' },
                    { label: 'Pensamiento Crítico', icon: 'PensamientoCritico' },
                    ].map(({ label, icon }) => (
                    <div className={styles.skillPill} key={icon}>
                        <img
                        src={`/CV/assets/Icons SS/${icon}.png`}
                        alt={`${label} icon`}
                        className={styles.skillIcon}
                        />
                        {label}
                    </div>
                    ))}
                </div>
                </div>

                {/*-- Idiomas --*/}
                <div className={styles.profileSkillsContainer}>
                <h2>Idiomas</h2>
                <div className={styles.skillsWrapper}>
                    {['INGLES', 'ESPANOL'].map((skill) => {
                    const label = skill === 'INGLES' ? 'Inglés – Intermedio (B1)' : 'Español – Nativo';
                    return (
                        <div className={styles.skillPill} key={skill}>
                        <img
                            src={`/CV/assets/Icons TS/${skill}.png`}
                            alt={`${skill} icon`}
                            className={styles.skillIcon}
                        />
                        {label}
                        </div>
                    );
                    })}
                </div>
                </div>

            </div>
            </div>
        </div>
        </section>
    );
}

export default Profile;
