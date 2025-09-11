import { secondsToMilliseconds } from 'framer-motion';
import styles from './UniformeOficial.module.css';
import { useEffect, useRef, useState } from 'react';

export default function UniformeOficial () {

    const rootRef = useRef(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => { 
        const root = rootRef.current;
        if (!root) return;

        const targets = root.querySelectorAll(`.${styles.reveal}`);
        const visibleClass = styles.isVisible;

        const io = new IntersectionObserver((entries, obs) => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    e.target.classList.add(visibleClass);
                    obs.unobserve(e.target);
                }
            });
        }, { threshold: 0.15, rootMargin: '0px 0px -10% 0px' });

        targets.forEach(el => io.observe(el));
        return () => io.disconnect();
    }, []);

    return (
        <section ref={rootRef} className={styles.container}>
            <img className={styles.fondo} src="/CV-ESPANOL/assets/geovanny/fondo-uniforme-oficial.png" alt="Fondo" />
            <h2 className={`${styles.title} ${styles.reveal}`}>UNIFORME OFICIAL</h2>
            <img className={`${styles.logo} ${styles.reveal}`} src="/CV-ESPANOL/assets/geovanny/logo_rs_racing.png" alt="Logo RS PRO RACE RACING" />
            <div className={`${styles.containerContent} ${styles.reveal}`}>
                <p className={styles.content}>El Jersey RS ProRace fusiona tecnología textil avanzada con diseño aerodinámico para responder a las exigencias del ciclismo competitivo. Ventilación estratégica, ajuste compresivo y resistencia extrema en una sola prenda.</p>
                <p className={styles.content}>Diseñado para el máximo rendimiento, su estructura elimina fricción y optimiza el control corporal. No es solo un uniforme: es el estándar técnico de una escudería con visión global.</p>
            </div>
            <img className={`${styles.img} ${styles.reveal}`} src="/CV-ESPANOL/assets/geovanny/img-uniforme-oficial.png" alt="Imagen modelo" onClick={() => setShowModal(true)}/>

            {showModal && (
                <div className={styles.modal} onClick={() => setShowModal(false)}>
                    <img className={styles.modalImage} src="/CV-ESPANOL/assets/geovanny/img-uniforme-oficial.png" alt="Imagen ampliada" />
                </div>
            )}
        </section>
    );
}