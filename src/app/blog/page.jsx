import styles from "./blog.module.css"
import PostCard from "@/components/postCard/postCard"
const getData=async()=>{
const res= await fetch("https://jsonplaceholder.typicode.com/posts");
if(!res.ok)
{
  throw new Error('Content cant be loaded');
}
return res.json();
}

const BlogPage=async()=> {
  const data = await getData();
    return (
      <div>
        <div className={styles.container}>
        {data.map((data)=>
        {return <PostCard data={data}/>}
        )}
        </div>
      </div>
    )
  }
  
  export default BlogPage