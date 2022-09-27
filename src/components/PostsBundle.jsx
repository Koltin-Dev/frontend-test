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
  const [blogID, setBlogID] = useState([]);
  const [blogUnique, setBlogUnique] = useState([]);
  
  const togglePopup = (props) => {
    
     setIsOpen(!isOpen);
     setBlogID(props)
          
        // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
    getBlogs(
     // eslint-disable-next-line no-template-curly-in-string
     
     `https://6328f6acd2c97d8c525f8f80.mockapi.io/api/v1/blogs/${blogID}`
   ).then((json) => setBlogUnique(json));
}, []);
}

  return (
    <section className={styles.blogsContainer}>
      <div className={styles.titleContainer}>
        <h2>Feature Article — </h2>
        <h2>See All Article ›</h2>
      </div>

      <section >
        <div className={styles.cardContainer}>
          {blogs.map((blog) => (
             <section  className={styles.cardStyle} key={blogs.id}  onClick={() => togglePopup(blog.id)}>
                {isOpen && <Popup 
      content={ 
       <><b>{blogUnique}</b>
        <p>{blog.content}</p>
        <button>Close</button>
      </>        
       }
      handleClose={togglePopup}
    />}
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
            </>
            </section>
          ))}
        </div>
      </section>
    </section>
  );
}

export { PostsBundle };
