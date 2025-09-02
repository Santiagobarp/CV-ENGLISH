import { useEffect, useRef } from 'react';
import styles from './Banner1.module.css';

function Banner1() {
    const rootRef = useRef(null);

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
            <img className={styles.img} src="/CV/assets/geovanny/fondo-banner1.png" loading="lazy" alt="" />
            <img
                className={`${styles.logo} ${styles.reveal}`}
                src="/CV/assets/geovanny/geovanny-racing-team-logo.png"
                alt="LOGO GEOVANNY RACING TEAM"
            />
            <p className={`${styles.content} ${styles.reveal}`}>
                GEOVANNY RACING TEAM es una comunidad de ciclistas unidos por la pasión y el pedal. Un club para soñar en grande, compartir la ruta y dejarlo todo en cada kilómetro.
            </p>
        </section>
    );
}

export default Banner1;
