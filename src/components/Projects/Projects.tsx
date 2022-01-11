import { Card } from '../Card';
import styles from './Projects.module.css';

// https://metanit.com/web/typescript/2.11.php
enum Statuses {
  Active = 'active',
  Ended = 'ended',
  Upcoming = 'upcoming',
}
enum Stage {
  Testnet = 'Testnet',
  Mainnet = 'Mainnet',
  Incentivized = 'Incentivized Testnet',
}
const projectsData = [
  {
    title: 'Iron Fish',
    subtitle: 'Incentivized Testnet',
    image: 'https://anyvalid.com/images/projects/IronFish.jpg',
    status: Statuses.Active,
  },
  {
    title: 'NEAR',
    subtitle: 'Incentivized Testnet',
    image: 'https://anyvalid.com/images/projects/NEAR.png',
    status: Statuses.Active,
  },
  {
    title: 'Spacemesh',
    subtitle: 'Incentivized Testnet',
    image: 'https://anyvalid.com/images/projects/Spacemesh.jpg',
    status: Statuses.Active,
  },
  {
    title: 'Umee',
    subtitle: 'Incentivized Testnet',
    image: 'https://anyvalid.com/images/projects/Umee.png',
    status: Statuses.Active,
  },
  {
    title: 'Chainflip',
    subtitle: 'Incentivized Testnet',
    image: 'https://anyvalid.com/images/projects/Chainflip.png',
    status: Statuses.Active,
  },
  {
    title: 'Axelar',
    subtitle: 'Incentivized Testnet',
    image: 'https://anyvalid.com/images/projects/Axelar.jpg',
    status: Statuses.Active,
  },
];

export const Projects = () => {
  return (
    <section className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.text}>
            <h2>Mainnets and Testnets</h2>
            <h5>Projects at the Mainnet and Testnet stages that we validate</h5>
          </div>
          <div className={styles.filter}>
            <a href="#" className={styles.filter_link}>
              Active
            </a>
            <a href="#" className={styles.filter_link}>
              Upcoming
            </a>
            <a href="#" className={styles.filter_link}>
              Ended
            </a>
          </div>
        </div>

        <div className={styles.inner}>
          {projectsData.map((project) => (
            <div className={styles.project}>
              <Card
                title={project.title}
                subtitle={project.subtitle}
                img={project.image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
