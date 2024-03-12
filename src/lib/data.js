import { Post, User } from "./models.js";
import { connectToDb } from "./utils.js";
import { unstable_noStore as noStore } from "next/cache";

// TEMPORARY DATA
// const users = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Jane" },
// ];

// const posts = [
//   { id: 1, title: "Post 1", body: "......", userId: 1 },
//   { id: 2, title: "Post 2", body: "......", userId: 1 },
//   { id: 3, title: "Post 3", body: "......", userId: 2 },
//   { id: 4, title: "Post 4", body: "......", userId: 2 },
// ];

export const getPosts = async () => {
  try {
    connectToDb();
  let posts = await Post.find({});
    console.log(posts)
    return posts;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch posts!");
  }
};

export const getPost = async (id) => {
  try {
    connectToDb();
     id=id;
     console.log("id:",id)
    let post = await Post.findOne({sd:id});
    // post=post.filter((data)=>data.id===slug)
    // console.log("post:",post)
    return post;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch post!");
  }
};

export const getUser = async (id) => {
  // noStore();
  try {
    console.log("id",id.toString())
    connectToDb();
    let user = await User.findOne({sd:id});
    console.log(user)
    // user.forEach((data)=>{
    //   // if(data.id.toString()===id.toString())console.log("hell yeah")
    //   console.log(data)
    //   console.log("isd:",data.id)
    // })
    
   
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};

export const getUsers = async () => {
  try {
    connectToDb();
    const users = await User.find();
    return users;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};