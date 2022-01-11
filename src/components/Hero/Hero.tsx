import styles from './Hero.module.css';

export const Hero = () => (
  <section className={styles.hero}>
    <div className={styles.container}>
      <div className={styles.banner}>
        <h1 className={styles.title}>
          Node provider for <br /> blockchain projects
        </h1>
        <h5 className={styles.subtitle}>
          We operate an enterprise-grade infrastructure and help leading
          projects run their networks.
        </h5>
      </div>
    </div>
  </section>
);
