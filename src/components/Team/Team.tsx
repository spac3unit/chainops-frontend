import styles from './Team.module.css';
const teamData = [
  {
    name: 'Denis Potapov',
    photo:
      'https://st4.depositphotos.com/5575514/23597/v/600/depositphotos_235978748-stock-illustration-neutral-profile-picture.jpg',
    role: 'Full-stack dev',
    twitter: '',
    email: '',
    discord: '',
    telegram: '',
  },
  {
    name: 'Alexander Arkhipov',
    photo:
      'https://st4.depositphotos.com/5575514/23597/v/600/depositphotos_235978748-stock-illustration-neutral-profile-picture.jpg',
    role: 'Devops',
    twitter: '',
    email: '',
    discord: '',
    telegram: '',
  },
  {
    name: 'Vitaliy Horelyk',
    photo:
      'https://st4.depositphotos.com/5575514/23597/v/600/depositphotos_235978748-stock-illustration-neutral-profile-picture.jpg',
    role: 'Devops',
    twitter: '',
    email: '',
    discord: '',
    telegram: '',
  },
];
export const Team = () => (
  <section className={styles.team}>
    <div className={styles.container}>
      <div className="inner">
        <div className={styles.header}>
          <h1 className={styles.title}>Meet our team</h1>
        </div>
        <div className={styles.content}>
          {teamData.map((member) => (
            <div className="member">
              <div className={styles.photo}>
                <img src={member.photo} alt="" width="200px" />
              </div>
              <div className="info">
                <div className="name">{member.name}</div>
                <div className="role">{member.role}</div>
                <div className="contacts">tw discord tg mail</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
