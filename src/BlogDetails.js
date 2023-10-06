import { Check } from "lucide-react";
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
          <h2 className="bh2">{ blog.title }</h2>
          <p>Od: { blog.author } dla: {blog.personFor}</p>
          <div>{ blog.body }</div>
          {!isPending && <button onClick={handleDelete} className="btn-enabled btn-done"> <span>Zrobione</span> <span className="check"> <Check size={48}/></span> </button>}
        {isPending && <button className="btn-disabled" disabled>Dodawanie...</button>}
        </article>
      )}
    </div>
  );
}
 
export default BlogDetails;