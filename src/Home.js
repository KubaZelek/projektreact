import { useState } from 'react';
import BlogList from './BlogList';
import './index.css';

const Home = () => {
    const [blogs, setBlog] = useState([
        {id: 1, title: "Za górami i za lasami", author: "Jakub Zelechowski", price: 11.9, country: "Poland"},
        {id: 2, title: "Sztuka podrywu", author: "Michał Raszewski", price: 20.99, country: "Poland"},
        {id: 3, title: "Pasym - źródło terroru", author: "Maciej Szabat", price: 13.99, country: "Poland"},
        {id: 4, title: "Holandia", author: "Jakub Zelechowski", price: 11.99, country: "Poland"},
        {id: 5, title: "How to crack an egg?", author: "Jacob Miraculum", price: 30.99, country: "Germany"}
    
    
    ])

    const handleDelete = (id) =>{
        const newBlogs = blogs.filter((blog) => blog.id !== id);
        setBlog(newBlogs);
        if(newBlogs.length === 0){
            console.log("pusto");
        }
    }
    return ( 

        <div>
         
        <BlogList blogs={blogs} title="Wszystkie książki" handleDelete={handleDelete}/>
        <BlogList blogs={blogs.filter((blog) => blog.country !== "Poland" )} title="Książki zagraniczne"/>


        </div>

     );
}
 
export default Home;

    
