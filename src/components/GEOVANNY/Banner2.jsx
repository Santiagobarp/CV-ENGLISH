import { useEffect, useRef, useState } from 'react';
import styles from './Banner2.module.css';
 
function Banner2() {
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
        <section ref={rootRef} className={styles.hero}>
            <img className={styles.fondo} src="/CV-ESPANOL/assets/geovanny/banner2-fondo.png" alt="" />
            <div className={styles.containerContent}>
                <h2 className={`${styles.reveal} ${styles.title}`}>Conecta. Pedalea. Compite</h2>
                <p className={`${styles.content} ${styles.reveal}`}>
                    <span>GEOVANNY RACING TEAM</span> nace como una <span>visión compartida</span>: crear una <span>comunidad de ciclistas</span> con <span>pasión por el deporte</span>, abierto a todo aquel que desee formar parte de un <span>club</span> con propósito y espíritu competitivo.
                </p>
                <p className={`${styles.content} ${styles.reveal}`}>
                    Este sueño se materializa gracias a la <span>fuerza colectiva de marcas que creen en el ciclismo</span>. Su apoyo no solo viste a la comunidad: le da forma, legitimidad y proyección. <span>Esta aventura no sería posible sin ellos</span>. Hoy comienza una nueva etapa. <span>Haz comunidad</span>.
                </p>
            </div>

            <div className={styles.imgWrap}>
                <img
                    className={`${styles.img} ${styles.reveal}`}
                    src="/CV-ESPANOL/assets/geovanny/img-banner2.png"
                    alt=""
                    onClick={() => setShowModal(true)}
                />
            </div>

            {showModal && (
                <div className={styles.modal} onClick={() => setShowModal(false)}>
                    <img className={styles.modalImage} src="/CV-ESPANOL/assets/geovanny/img-banner2.png" alt="Imagen ampliada" />
                </div>
            )}
        </section>
    );
}

export default Banner2;

