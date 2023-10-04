import { useState } from "react";
const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Pati');
    const [personFor, setPersonFor] = useState('Pati')
    return (  
        <div className="create">
      <h2>Add a New Blog</h2>
      <form>
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
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="Pati">Pati</option>
          <option value="Zelek">Żelek</option>
        </select>
        <button>Dodaj zadanie</button>
      </form>
      
    </div>
    );
}
 
export default Create;