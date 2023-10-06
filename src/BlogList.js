import React, { Component }  from 'react';
import {Link} from 'react-router-dom';
const BlogList = ({blogs, title}) => {

    return ( 
       
        <div className="blog-list">
                   <h1> {title} </h1>
               {blogs.map((blog) => 
            (
                <div className='blog' key={blog.id}>
                     <Link to={`/blogs/${blog.id}`}>
            <h2>{ blog.title }</h2>
         {blog.personFor == "Zelek" &&  <p className='personForZelek'>Zadanie dla: { blog.personFor } </p>}  
         {blog.personFor == "Pati" &&  <p className='personForPati'>Zadanie dla: { blog.personFor } </p>}  

            <p className='personFromP'>od: {blog.author}</p>

          </Link>
                
                 
                </div>
            )
            )}
        </div>
     );
}
 
export default BlogList;