import Image from "next/image"
import styles from "./sp.module.css"
const SinglePostPage=()=> {
    return (
      <div className={styles.container}>
        <div className={styles.contImage}>
        <Image src="https://images.pexels.com/photos/20367978/pexels-photo-20367978/free-photo-of-landscape-of-rocky-snowcapped-mountains-and-a-forest-in-a-valley.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill ></Image>
        </div>
        <div className={styles.contText}>
          <span id={styles.up0} >hiii</span>
          <div className={styles.contTextProf}>
            <div>
            <Image src="https://images.pexels.com/photos/1777479/pexels-photo-1777479.jpeg?auto=compress&cs=tinysrgb&w=600" alt="txt" fill></Image>
            </div>
            <div>
            <div id={styles.up1}>
        <span >hii</span>
        <span >hii</span>
        </div>
        <div id={styles.up2}>
        <span >hii</span>
        <span >hii</span>
        </div>
            </div>
       
        </div>
        <div id={styles.dn0}>
        jk
        </div>
          </div>
          
      </div>
    )
  }
  
  export default SinglePostPage