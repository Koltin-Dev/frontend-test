import React from "react";
import { useEffect, useState } from "react";
import getBlogs from "../helpers/api"
import styles from "./PostsBundle.module.css";
import dateFormat from 'dateformat';
import Popup from "./Popup";

function PostsBundle() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    getBlogs(
      "https://6328f6acd2c97d8c525f8f80.mockapi.io/api/v1/blogs?page=1&limit=5"
    ).then((json) => setBlogs(json));
  }, []);

  const [isOpen, setIsOpen] = useState(false);
 const [blogUnique, setBlogUnique] = useState([]);
  
  const togglePopup = (blogID) => {
     setIsOpen(!isOpen);
     fetch(
    (`https://6328f6acd2c97d8c525f8f80.mockapi.io/api/v1/blogs/${blogID}`),
        )
    .then((response) => response.json())
    .then((data) => setBlogUnique(data.content) ) }
  


  return (
     <section className={styles.blogsContainer}>
      <div className={styles.titleContainer}>
        <h2>Feature Article — </h2>
        <h2>See All Article ›</h2>
      </div>

      <section >
        <div className={styles.cardContainer}>
          {blogs.map((blog) => (
             <section  className={styles.cardStyle} key={blog.id} >
              <>
              <img
                className={styles.blogsImg}
                src={blog.thumbnail}
                alt="logo-icon"
              />
               <p  className={styles.blogsTitle}>{blog.title}</p>

               <p className={styles.blogsName}>{blog.author.name}</p>
              <img
                className={styles.blogsAuthorImg}
                src={blog.author.avatar}
                alt="logo-icon"
              /> 
              <p className={styles.blogsCreated}>{dateFormat(blog.createdAt,"mmm dd, yyyy")}</p> 
              <button className={styles.blogMore} onClick={() => togglePopup(blog.id)} > + </button>
                      
             {isOpen && <Popup 
      content={ 
       <><b className={styles.blogContent}>{blogUnique}</b>
        <br></br>
        <br></br>
        <br></br>
     
        <button className={styles.buttonClose} onClick={togglePopup}>Close</button>
      </>        
       }
      handleClose={togglePopup}
    />} 
            </>
            </section>
          ))}
        </div>
      </section>
    </section>
  );
}

export { PostsBundle };
