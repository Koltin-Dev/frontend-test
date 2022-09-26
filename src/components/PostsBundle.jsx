import { useEffect, useState } from "react";
import getBlogs from "../helpers/api"
import styles from "./PostsBundle.module.css";
import dateFormat from 'dateformat';

function PostsBundle() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    getBlogs(
      "https://6328f6acd2c97d8c525f8f80.mockapi.io/api/v1/blogs?page=1&limit=5"
    ).then((json) => setBlogs(json));
  }, []);

  return (
    <section className={styles.blogsContainer}>
      <div className={styles.titleContainer}>
        <h2>Feature Article — </h2>
        <h2>See All Article ›</h2>
      </div>

      <section >
        <div className={styles.cardContainer}>
          {blogs.map((blog) => (
            <section  className={styles.cardStyle} key={blogs.id}>
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
