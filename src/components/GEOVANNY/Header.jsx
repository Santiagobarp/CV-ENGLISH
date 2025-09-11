import styles from './Header.module.css';

function Header() {
    return (
        <header className={styles.header}>
        <nav className={styles.left} aria-label="Categorías">
            <a className={styles.navItem} href="#">HOMBRE</a>
            <a className={styles.navItem} href="#">MUJER</a>
            <a className={styles.navItem} href="#">ACCESORIOS</a>
        </nav>

        <a href="#" className={styles.center} aria-label="Inicio">
            {/* Por qué: nombre correcto de la clase para poder controlar tamaño */}
            <img className={styles.logo} src="/CV-ESPANOL/assets/geovanny/geovanny-logo.png" alt="GEOVANNY" />
        </a>

        <nav className={styles.right} aria-label="Cuenta y búsqueda">
            <a className={styles.navIcon} href="#" aria-label="Cuenta">
            <span className="material-symbols-outlined" style={{ color: '#000' }}>person</span>
            </a>
            <a className={styles.navIcon} href="#" aria-label="Buscar">
            <span className="material-symbols-outlined" style={{ color: '#000' }}>search</span>
            </a>
            <a className={styles.navIcon} href="#" aria-label="Bolsa">
            <span className="material-symbols-outlined" style={{ color: '#000' }}>shopping_bag</span>
            </a>
        </nav>
        </header>
    );
}

export default Header;