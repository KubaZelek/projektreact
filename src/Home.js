import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";
import React, { Component }  from 'react';
const Home = () => {
  const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      {isPending && (
  <div className="loading-area">
    <div className="loading-spinner"></div>
    <div><h2 className="loading">Ładowanie....</h2></div>
  </div>
)}
      { blogs && <BlogList blogs={blogs} /> }
    </div>
  );
}
 
export default Home;