import { useState } from "react";

// import blogData_36 from '../assets/data/blogData.json';
import Blog_36 from "../components/Blog_36";
import { useEffect } from "react";

const api_url = 'http://localhost:5000/api/blog_36'



const BlogNodePage_36 = () => {
  const [name, setName] = useState('Vincent');
  const [id, setId] = useState(213410136);
  const [blogs_36, setBlogs_36] = useState([])

  const fetchBlogFromNodeSever = async () => {
    try {
      const response = await fetch(api_url)
      const data = await response.json()
      console.log('blogs', data)
      setBlogs_36(data)
    }
    catch (error) {
      console.log('error', error)
    }
    }
  useEffect(() => {
    fetchBlogFromNodeSever()
  }, [])


  return (
  <>
  <section className="blogs">
      <div className="section-title">
        <h2>blogs from Node -- {name}, {id}{' '} </h2>
      </div>
      <div className="blogs-center">
        {blogs_36.map((item) => {
          const {id, img, category, title, descrip} = item;
          return (
            <Blog_36 
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

export default BlogNodePage_36