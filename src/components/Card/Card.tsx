import styles from './Card.module.css';
export const Card = ({ img, title, subtitle }: any) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <img
          src={img}
          alt="project logo"
          width="120px"
          className={styles.logo}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <div className={styles.subtitle}>{subtitle}</div>
      </div>
    </div>
  );
};
