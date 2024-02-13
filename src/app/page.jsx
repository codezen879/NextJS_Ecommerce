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
        <div className={styles.btn}>
        <button id={styles.bt1}>Learn More</button>
        <button id='bt2'>Contact</button>
        </div>
        <div className={styles.imgsec}>
          <Image src="/brands.png" alt='brands' fill></Image>
        </div>
    </div>
    <div className={styles.imgContainer}>
      <Image src="/hero.gif" alt='gif' fill/>
    </div>
    </div>
};

export default Home;