import styles from './Collection.module.css';
import { useEffect, useRef } from 'react';

function Collection() {

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
        <section ref={rootRef} className={styles.collection}>
        <h2 className={`${styles.title} ${styles.reveal}`}>COLECCIÓN</h2>
        <div className={`${styles.grid} ${styles.reveal}`}>
            {["hombre", "bib-hombre", "mujer", "bib-mujer"].map((item) => (
            <div key={item} className={`${styles.card} ${styles.reveal}`}>
                <div className={styles.imageContainer}>
                <img
                    className={styles.image}
                    src={`/CV/assets/geovanny/item${item}-a.png`}
                    alt={`Producto ${item}`}
                />
                <img
                    className={styles.imageHover}
                    src={`/CV/assets/geovanny/item${item}-b.png`}
                    alt={`Producto ${item} alternativo`}
                />
                </div >
                <div className={styles.details}>
                    <h3 className={styles.name}>Nombre del producto</h3>
                    <p className={styles.description}>Descripción breve del producto.</p>
                    <p className={styles.price}>$000.00</p>
                </div>
            </div>
            ))}
        </div>
        </section>
    );
}

export default Collection;
