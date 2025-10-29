import { useState, useEffect } from 'react';
import blogData_36 from '../assets/data/blogData.json';
import Blog_36 from '../components/Blog_36';

import { supabase } from '../db/clientSupabase';

const BlogSupaPage_36 = () => {
  const [name, setName] = useState('何柏霆');
  const [id, setId] = useState(213410136);
  const [blogs_36, setBlogs_36] = useState([]);

  const fetchBlogFromSupaServer = async () => {
    try {
      let { data, error } = await supabase.from('blog_36').select('*');
      console.log('blogs', data);
      setBlogs_36(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBlogFromSupaServer();
  }, []);

  return (
    <>
      <section className='blogs'>
        <div className='section-title'>
          <h2>
            blogs from Supabase -- {name}, {id}{' '}
          </h2>
        </div>
        <div className='blogs-center'>
          {blogs_36.map((item) => {
            const { id, title, descrip, category, img } = item;
            return (
              <Blog_36
                key={id}
                id={id}
                title={title}
                descrip={descrip}
                category={category}
                img={img}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default BlogSupaPage_36;