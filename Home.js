import React, {useState} from 'react';
import  Form from '../components/Form';
import PostList from '../components/PostList';
import PostItem from '../components/PostItem';

function Home() {
  const[posts, setPosts] =useState([])
  const [form, setForm] = useState({title: "", content: "", id: null })
  return (
    <div className="App">
    	<div className='container'>
        <Form
        form={form}
        posts={posts}
        setForm={setForm}
        setPosts={setPosts}/>
      </div>
      <PostList posts={(posts)} /> 
    </div>
  );
}




export default Home;
