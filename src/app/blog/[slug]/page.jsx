import Image from "next/image"
import styles from "./sp.module.css";
import { getPost,getUser } from "@/lib/data";
export const generateMetadata = async ({ params }) => {
  const { slug } = params;

  const post = await getPost(slug);
  return {
    title: post.title,
    description: post.desc,
  };
};
// const getData=async (slug)=>{
//   const data  = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`)
//   if(!data.ok)
//   {
//     throw new Error('Content cant be loaded');
//   }
//   return data.json();
// }
// const getUser = async()=>{
//   const users = await fetch("https://jsonplaceholder.typicode.com/users");
//   if(!users.ok)
//   {
//     throw new Error('Content cant be loaded');
//   }
//   return users.json();
// }

const SinglePostPage= async ({params})=> {
  const {slug}=params;
  // const data=await getData(slug);
  // const users=await getUser();
  // const user=users.filter((user)=>user.id===data.userId)
  // console.log(user)
  const user=await getUser(slug);
  const post=await getPost(slug);
  console.log(user)
  console.log(post)
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
            <div className={styles.basici}>
            
        <div id={styles.up2}>
        <span style={{color:"grey"}}>Author</span>
        <span >{user.username}</span>
        </div >
        <div id={styles.up1}>
        <span style={{color:"grey"}} >Published</span>
        <span id={styles.spn1}>{post.createdAt.toString().slice(0,16)}</span>
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