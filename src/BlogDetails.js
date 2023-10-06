import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const BlogDetails = () => {
  const history = useHistory();
  const { id } = useParams();
  
  const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
  const handleDelete = () =>{
      fetch('http://localhost:8000/blogs/'+blog.id, {
        method: 'DELETE'
      }).then(() => {
        history.push('/');
      })
  }
  return (
    <div className="blog-details">
     {isPending && (
  <div className="loading-area">
    <div className="loading-spinner"></div>
    <div><h2 className="loading">Ładowanie....</h2></div>
  </div>
)}
      { error && <div>{ error }</div> }
      { blog && (
        <article className="bd">
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
          <div>{ blog.body }</div>
          {!isPending && <button onClick={handleDelete} className="btn-enabled">Usuwanie</button>}
        {isPending && <button className="btn-disabled" disabled>Dodawanie...</button>}
        </article>
      )}
    </div>
  );
}
 
export default BlogDetails;