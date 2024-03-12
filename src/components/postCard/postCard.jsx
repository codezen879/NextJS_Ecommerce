'use client'
import Image from "next/image"
import styles from "./postCard.module.css"
import { usePathname, useSearchParams } from 'next/navigation'
const PostCard=({data})=> {
let id=data.sd-'0';
    return (
      <div className={styles.container}>
        <div className={styles.cardDate}>
        <div className={styles.cardC}>
        <div className={styles.card}>
       <div className={styles.cardImage}>
        <Image src="https://images.pexels.com/photos/20367978/pexels-photo-20367978/free-photo-of-landscape-of-rocky-snowcapped-mountains-and-a-forest-in-a-valley.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill ></Image>
       
        </div>
        <div>
          {data.title}
        </div>
       </div>
        <span>{data.body}</span>
        <div className={styles.btn1}>
        <button ><a href={`/blog/${id}`}>Read More...</a></button>
        </div>  
        
        </div>
        <div className={styles.dte}><span>{data.createdAt.toString().slice(0,16)}</span></div>
      </div>

      </div>
    ) 
  }
  
  export default PostCard