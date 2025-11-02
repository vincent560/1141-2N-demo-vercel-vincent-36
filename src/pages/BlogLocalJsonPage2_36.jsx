import { useState } from "react";
import blogData_36 from '../assets/data/blogData.json';
import Blog2_36 from "../components/Blog2_36";
import Wrapper from "../assets/wrappers/Blog2_36";
import Alert_36 from '../components/Alert_36';

const BlogLocalJsonPage2_36 = () => {
  const [name, setName] = useState('Vincent');
  const [id, setId] = useState(213410136);
  const [blogs_36, setBlogs_36] = useState(blogData_36)
  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: '',
  });

const showAlert = (show = false, msg = '', type = '') => {
    setAlert({ show, msg, type });
  };

const removeItem =(id)=>{
  setBlogs_36(blogs_36.filter((blog)=>blog.id !== id))
}
const clearAllBlogs =()=>{
  setBlogs_36([])
}
const loadAllBlogs =()=>{
  setBlogs_36(blogData_36)
}

  return (
  <Wrapper>
    {alert.show && <Alert_xx alert={alert} showAlert={showAlert} />}
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
            descrip={descrip}
            removeItem={removeItem}
            />
          )
        })}
        
        
      </div>
      <div className="flex justify-center items-center gap-8">
        <button type="button" className="text-red-700 bg-red-200 hover:bg-red-300 capitalize px-4 py-2 text-base rounded" 
          onClick={clearAllBlogs}>clear all blogs</button>
        <button type="button" className=" text-blue-700 bg-blue-200 hover:bg-blue-300 capitalize px4 py2 text-base rounded"
          onClick={loadAllBlogs}>load all blogs</button>
      </div>
    </section>
  </Wrapper>
  )
}

export default BlogLocalJsonPage2_36