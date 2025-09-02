import styles from './FormaParte.module.css';
import { useEffect, useRef } from 'react';

const steps = [
    {
        title: "Adquiere tu uniforme",
        description: "Compra el uniforme oficial del GEOVANNY RACING TEAM y espera tu pedido.",
        image: "/CV/assets/geovanny/uniforme.png", // reemplaza por tu asset
        alt: "Uniforme"
    },
    {
        title: "Escanea y únete",
        description: "Una vez que recibas tu kit, escanea el código QR y únete a la comunidad.",
        image: "/CV/assets/geovanny/unete.png",
        alt: "QR escaneado"
    },
    {
        title: "Comparte tus experiencias.",
        description: "Sube tus logros, entrena con nosotros y conecta.",
        image: "/CV/assets/geovanny/comunidad.png",
        alt: "Comunidad"
    }
];

export default function Onboarding() {
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
        <section ref={rootRef} className={styles.container}>
            <h2 className={`${styles.title} ${styles.reveal}`}>FORMA PARTE DE LA COMUNIDAD</h2>
            <div className={`${styles.steps} ${styles.reveal}`}>
                {steps.map((step, i) => (
                <div key={i} className={styles.step}>
                    <div className={styles.imageWrapper}>
                    <img src={step.image} alt={step.alt} className={styles.image} />
                    </div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                </div>
                ))}
            </div>
        </section>
    );
}
