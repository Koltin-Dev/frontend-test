import styles from './Subscribe.module.css'
import subscribe from '../assets/subscribe.png'

const Subscribe= () => {

    return (
       <section className={styles.subsContainer}>
         <div>
            <img className={styles.subsImage} src={subscribe} alt='susbscribe' />
        </div>
        <div>
            <h2 className={styles.subsTitle}> Subscribe For The Latest Updates</h2>
            <p className={styles.subsParagraph}> Subscribe to newsletter and never miss the new post every week</p>
            <input className={styles.subsInput} value="Enter your email here...." />
            <button className={styles.subsButton}>Subscribe</button>
        </div>
       
      </section>

    )
}

export { Subscribe };