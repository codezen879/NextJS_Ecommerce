import Image from "next/image"
import styles from "./postCard.module.css"
const PostCard=({data})=> {

    return (
      <div className={styles.container}>
        <div className={styles.cardDate}>
        <div className={styles.cardC}>
        <div className={styles.card}>
       <div className={styles.cardImage}>
        <Image src="https://images.pexels.com/photos/20367978/pexels-photo-20367978/free-photo-of-landscape-of-rocky-snowcapped-mountains-and-a-forest-in-a-valley.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill ></Image>
        </div>
       </div>
        <span>{data.body}</span>
        </div>
        <div className={styles.dte}><span>12/03/24</span></div>
      </div>

      </div>
    )
  }
  
  export default PostCard