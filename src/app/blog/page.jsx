import styles from "./blog.module.css"
import PostCard from "@/components/postCard/postCard"
const getData= async ()=>{
  const res=await fetch("https://jsonplaceholder.typicode.com/posts")
  if(!res.ok)
  {
    throw new Error("Something Went wrong");
  }
  return res.json()
}
const BlogPage=async ()=> {
  const posts =await getData();
    return (
      <div >
          <div className={styles.container}>
        {posts.map((post)=>(
            <PostCard post={post}/>
           ))}
        </div>
           
      </div>
    )
  }
  
  export default BlogPage