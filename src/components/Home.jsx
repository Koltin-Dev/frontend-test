import styles from "./Home.module.css";
import home from "../assets/home.png";

const Home = () => {
  return (
    <section className={styles.homeContainer}>
      <section>
        <h1 className={styles.homeTitle}>
          {" "}
          Hi, I´m Liliana Hdez <br />
          Front End Dev
        </h1>
        <p className={styles.homeParagraph}>
          {" "}
          │On this blog I share tips and tricks, frameworks, projects,
          tutorials, etc.
          <br />
          │Make sure you subscribe to get the latest updates
        </p>
        <input className={styles.homeInput} value="Enter your email here...." />
        <button className={styles.homeSubs}>Subscribe</button>
      </section>
      <section>
        <img className={styles.homeImage} src={home} alt="logo-icon" />
      </section>
    </section>
  );
};

export { Home };
