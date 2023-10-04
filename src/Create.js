import { useState } from "react";
const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Pati');
    const [personFor, setPersonFor] = useState('Pati')

    const [isPending, setIsPending] = useState(false)
    
    const handleSubmit = (e) => {
      setIsPending(true);
      e.preventDefault();
      const blog = {title, body, author, personFor};
      fetch('http://localhost:8000/blogs', {
        method: 'POST',
        headers: {'Content-type': "application/json" },
        body: JSON.stringify(blog)
      }).then(() => {
        alert("Dodano nowego bloga");
        setIsPending(false);
      })
    }
    return (  
        <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Zadanie od:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="Pati">Pati</option>
          <option value="Zelek">Żelek</option>
        </select>
        <label>Zadanie dla:</label>
        <select
          value={personFor}
          onChange={(e) => setPersonFor(e.target.value)}
        >
          <option value="Pati">Pati</option>
          <option value="Zelek">Żelek</option>
        </select>
        {!isPending && <button className="btn-enabled">Dodaj zadanie</button>}
        {isPending && <button className="btn-disabled" disabled>Dodawanie...</button>}

      </form>
      
    </div>
    );
}
 
export default Create;