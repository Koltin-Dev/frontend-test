import React, { useState, useEffect } from 'react';

import ShowArticles from './ShowArticles';

const Articles = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const url = `https://6328f6acd2c97d8c525f8f80.mockapi.io/api/v1/blogs?p=${currentPage}&l=5`;
  const [articles, setArticles] = useState([]);
  
  const getAllArticles = () => {
    fetch(url)
      .then((response) => response.json())
      .then((FetchArticles) => { 
        console.log(FetchArticles)
        setArticles(articles.concat(FetchArticles)); 
      });
  };

  useEffect(() => {
    getAllArticles(url)
  }, [currentPage])

  return (
    <>
      <ShowArticles articles={articles} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
    </>
  )
}

export default Articles