import Image from 'next/image';
import styles from './home.module.css'
const Home = () => {
  return <div className={styles.container}>
    <div className={styles.textContainer}>
      <h1>
        Creative Thoughts Agency.
      </h1>
      <p className={styles.desc}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
          blanditiis adipisci minima reiciendis a autem assumenda dolore.
        </p>
    </div>
    <div className={styles.imgContainer}>
      <Image src="/hero.gif" alt='gif' fill/>
    </div>
    </div>
};

export default Home;