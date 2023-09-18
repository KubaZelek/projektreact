const BlogList = ({blogs, title, handleDelete}) => {

    return ( 
       
        <div className="blog-list">
                   <h1> {title} </h1>
               {blogs.map((blog) => 
            (
                <div className='blog' key={blog.id}>
                    <h1 className='bh1'>{blog.title}</h1>
                    <p>{blog.author}</p>
                    <p>{blog.price}zł</p>
                    <button onClick={() => handleDelete(blog.id)}>Nie interesuje mnie ta książka</button>
                </div>
            )
            )}
        </div>
     );
}
 
export default BlogList;