import styles from "./blog.module.css"
import PostCard from "@/components/postCard/postCard"
import { getPosts } from "@/lib/data"
export const metadata = {
  title: 'Blog',
  description: 'Next.js starter app description',
}
const BlogPage=async({params})=> {

  const posts=await getPosts();
  
    return (
      <div>
        <div className={styles.container}>
        {posts?.map((data,index)=>
        {
          return <PostCard data={data} key={index}/>}
        )}
        </div>
      </div>
    )
  }
  
  export default BlogPage 