// src/pages/CV/ContactForm.jsx
import React from 'react';
import styles from './ContactForm.module.css';

function ContactForm() {
    return (
        <>
        <h2 id="contacto" className={styles.formTitle}>Ponte en contacto.</h2>
        <p className={styles.profileDescription}>Si deseas más información sobre mi perfil o experiencia, no dudes en enviarme un mensaje.</p>
        <section className={styles.form}>
            <form>
                <h3 className={styles.formSection}>Información de contacto.</h3>
                <div className={styles.formInput}>
                    <input type="text" placeholder="Nombre completo" id="nombre" />
                </div>
            <div className={styles.formInput}>
                <input type="email" placeholder="Correo electrónico" id="email" />
            </div>
            <div className={styles.formInput}>
                <input type="number" placeholder="Número de teléfono" id="phone" />
            </div>

            <h3 className={`${styles.formSection} ${styles.titleTextarea}`}>Cuéntame sobre la vacante.</h3>
            <div className={styles.formInput}>
                <textarea
                className={styles.textarea}
                rows="10"
                placeholder="Detalles de la vacante o de la oportunidad laboral."
                id="message"
                ></textarea>
            </div>
            </form>
        </section>
        </>
    );
}

export default ContactForm;
