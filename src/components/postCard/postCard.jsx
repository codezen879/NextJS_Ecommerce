import Image from "next/image"
import styles from "./postCard.module.css"
const PostCard=({post})=> {
console.log(post)
    return (
      <div className={styles.container}>
        <div className={styles.cardDate}>
        <div className={styles.cardC}>
        <div className={styles.card}>
       <div className={styles.cardImage}>
        <Image src="https://images.pexels.com/photos/534164/pexels-photo-534164.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" fill ></Image>
        </div>
       </div>
        <span>{post.body}</span>
        </div>
        <div className={styles.dte}><span>aoklkok</span></div>
      </div>

      </div>
    )
  }
  
  export default PostCard