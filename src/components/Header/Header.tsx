import styles from './Header.module.css';
export const Header = () => (
  <header className={styles.header}>
    <div className={styles.container}>
      <nav className={styles.navigation}>
        <div className={styles.logo}>
          <a href="#">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/8b/Cryptocurrency_Logo.svg"
              alt=""
              width="50"
              height="50"
            />
            <span>ChainOps</span>
          </a>
        </div>
        <div className={styles.links}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <a href="#" className={styles.link}>
                Networks
              </a>
            </li>
            <li className={styles.item}>
              <a href="#" className={styles.link}>
                Stake
              </a>
            </li>
            <li className={styles.item}>
              <a href="#" className={styles.link}>
                Team
              </a>
            </li>
            <li className={styles.item}>
              <a href="#" className={styles.link}>
                Blog
              </a>
            </li>
            <li className={styles.item}>
              <a href="#" className={styles.link}>
                Contacts
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
);
