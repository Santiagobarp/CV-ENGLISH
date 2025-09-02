// src/pages/CV/Experience.jsx
import React from 'react'; 
import styles from './Experience.module.css';

function Experience() {
    return (
        <div className={styles.profileEduExpContainer}>
            
            {/*-- Education --*/}
            <div className={styles.profileColumn}>
                <h2>
                    <img src="/CV/assets/Icons TS/EDUCATION.png" alt="Education icon" className={styles.skillIcon} />
                Educación
                </h2>
                <p className={styles.eduItem}>Instituto Tecnológico de Estudios Superiores de Occidente</p>
                <p className={styles.eduItem}>Ingeniería en Desarrollo de Software</p>
                <p className={styles.eduItem}>Diciembre 2026 (Previsto)</p>
                <p className={styles.eduItem}>Calificación actual: 87/100</p>
                <p className={styles.eduItem}>Beca: Beca ITESO</p>
            </div>


        <div className={styles.profileDivider}></div>

            {/*-- Experience --*/}
            <div className={styles.profileColumn}>
                <h2>
                    <img src="/CV/assets/Icons TS/WORK.png" alt="Work icon" className={styles.skillIcon} />
                Experiencia
                </h2>
                <div className={styles.experienceItem}>
                <p className={styles.eduItem}><strong>Geovanny Apparel S.A de C.V.</strong><span className={styles.experienceDate}>Abr. 2024 – Abr. 2025</span></p>
                <p className={styles.eduItem}>Jefe de producción</p>
                <ul className={styles.experienceList}>
                    <li>Lideré un equipo de 22 colaboradores, mejorando la productividad y eficiencia mediante estrategias basadas en tecnología.</li>
                    <li>Implementé sistemas de gestión basados en rendimiento, incrementando la producción en un 60 % en seis meses.</li>
                    <li>Optimizé los flujos de trabajo en producción para garantizar la calidad y el cumplimiento en las entregas.</li>
                </ul>
                </div>
                <div className={styles.experienceItem}>
                <p className={styles.eduItem}><strong>Geovanny Apparel S.A de C.V.</strong><span className={styles.experienceDate}>Ago. 2021 – May. 2023</span></p>
                <p className={styles.eduItem}>Asistente de Ventas</p>
                <ul className={styles.experienceList}>
                    <li>Gestioné operaciones de comercio electrónico y publicación de productos en Shopify.</li>
                    <li>Mejoré la experiencia de usuario del sitio web utilizando Shogun y optimicé la presentación de productos.</li>
                    <li>Apoyé el marketing digital utilizando herramientas de Zoho (CRM, Books, Projects).</li>
                </ul>
                </div>
            </div>
        </div>
    );
}

export default Experience;
