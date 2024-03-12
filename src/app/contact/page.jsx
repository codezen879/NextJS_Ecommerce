

import Image from 'next/image'
import styles from './contact.module.css'
export const metadata = {
  title: 'Contact',
  description: 'Next.js starter app description',
}
const ContactPage=()=> {
    return (
      <div className={styles.container}>
        <div className={styles.imgcontainer}>
        <Image src="/contact.png" fill></Image>
        </div>
        <div className={styles.formcontainer}>
        <input id={styles.inp1} placeholder='Name and Surname'>
        </input>
        <input id={styles.inp1}placeholder='Name and Surname'>
        </input>
        <input id={styles.inp1}placeholder='Name and Surname'>
        </input>
        <input id={styles.inp1}placeholder='Name and Surname'>
        </input>
        <textarea id={styles.inp2}placeholder='Message'>
        </textarea>
        <button id={styles.bt1}>Send</button>
      </div>
      </div>
    )
  }
  
  export default ContactPage