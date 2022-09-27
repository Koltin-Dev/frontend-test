import styles from './Footer.module.css'
import medium from "../assets/medium.png"
import twitter from "../assets/twitter.png"
import instagram from "../assets/instagram.png"
import linkedin from "../assets/linkedin.png"

const Footer = () => {

    return (
       <section className={styles.footerContainer}>
        <div>
            <img className={styles.footerIcons} src={medium} alt="footer" />
            <img className={styles.footerIcons} src={twitter} alt="footer" />
            <img className={styles.footerIcons} src={instagram} alt="footer" />
            <img className={styles.footerIcons} src={linkedin} alt="footer" />
        </div>
        <div className={styles.footerInfo}>
            <div>
                <h2>CATEGORY</h2>
                <p>CSS</p>
                <p>Javascript</p>
                <p>Tailwind</p>
                <p>Vue</p>
                <p>React</p>
            </div>
            <div>
                <h2 >ABOUT ME</h2>
                <p>About Me</p>
                <p>Projects</p>
               <p>Achievement</p>
           </div>
           <div>
                <h2>GET IN TOUCH</h2>
                <p>+52 5539 96 5990</p>
                <p>lylyzyta@gmail.com</p>
          </div>
          <div>
            <h2>FOLLOW US</h2>
                <p>Medium</p>
                <p>Instagram</p>
                <p>Twitter</p>
                <p>Facebook</p>
           </div>
        </div>
        
        </section>

    )
}

export { Footer };