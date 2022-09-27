import styles from './Navbar.module.css'

const Navbar = () => {

    return (
       <section className={styles.navContainer}>
        <nav className={styles.navLogo}>Koltin.Blog </nav>
        <nav className={styles.navMenu}>Home </nav>
        <nav className={styles.navMenu}>Category</nav>
        <nav className={styles.navMenu}>About Me</nav>
        <nav className={styles.navMenu}>🔍Search</nav>
        </section>

    )
}

export { Navbar };