import { useState } from "react";
import blogData_36 from '../assets/data/blogData.json';
import Blog2_36 from "../components/Blog2_36";

const BlogLocalJsonPage2_36 = () => {
  const [name, setName] = useState('Vincent');
  const [id, setId] = useState(213410136);
  const [blogs_36, setBlogs_36] = useState(blogData_36)
  return (
  <>
  <section className="blogs">
      <div className="section-title">
        <h2>blogs from local json -- {name}, {id}{' '} </h2>
      </div>
      <div className="blogs-center">
        {blogs_36.map((item) => {
          const {id, img, category, title, descrip} = item;
          return (
            <Blog2_36 
            key={id} 
            id={id} 
            img={img} 
            category={category} 
            title={title} 
            descrip={descrip} />
          )
        })}
        
        
      </div>
    </section>
  </>
  )
}

export default BlogLocalJsonPage2_36