import React, { Component }  from 'react';
const BlogList = ({blogs, title}) => {

    return ( 
       
        <div className="blog-list">
                   <h1> {title} </h1>
               {blogs.map((blog) => 
            (
                <div className='blog' key={blog.id}>
                    <h1 className='bh1'>Do zrobienia #{blog.id}</h1>
                    <p>{blog.body}</p>
                    <p>{blog.author}</p>
                
                 
                </div>
            )
            )}
        </div>
     );
}
 
export default BlogList;