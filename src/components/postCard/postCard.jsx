import Image from "next/image"
import styles from "./postCard.module.css"
const PostCard=()=> {

    return (
      <div className={styles.container}>
        <div className={styles.cardDate}>
        <div className={styles.cardC}>
        <div className={styles.card}>
       <div className={styles.cardImage}>
        <Image src="https://images.pexels.com/photos/2589453/pexels-photo-2589453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill ></Image>
        </div>
       </div>
        <span>Content</span>
        </div>
        <div className={styles.dte}><span>aoklkok</span></div>
      </div>

      </div>
    )
  }
  
  export default PostCard