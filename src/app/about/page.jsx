"use client"
import Image from "next/image"
import styles from "./about.module.css"
const AboutPage=()=> {
  // const handleClick=()=>{
  //   console.log(":hi9i")
  // }
  return (
   
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <button onClick={()=>console.log("hiii")}>
          hiii
        </button>
      <h1>
        About Agency
      </h1>
        <p id={styles.p1}>
          I am Stronger,Smater better
          I am Better!
        </p>
        <p id={styles.p2}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, amet, corporis a eos necessitatibus neque modi consequuntur perspiciatis voluptas, enim aperiam soluta fugiat illum voluptatem dolorem esse atque eaque voluptatum?
        </p>
        <div className={styles.template}>
          <p>
            10 K+
            <br/>
            <span>Year of Experience</span>
          </p>
          <p>
            234 K+
            <br/>
            <span>people Reached</span>
          </p>
          <p>
            5 K+
            <br/>
            <span>Service and Plugins</span>
          </p>
        </div>
      </div>
      <div className={styles.imgContainer}>
      <Image src="/about.png" alt="about iamge" fill/>
      </div>
    </div>
    
  )
}

export default AboutPage