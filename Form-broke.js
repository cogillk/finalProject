import React, { useState } from 'react';
//import Form from 'react-bootstrap';
//import Button from 'react-bootstrap'


export const Form = (props) => {
    //console.log(form)
    //const id = useId();
    const [post, setPost, setForm, form] = useState({
        //title: props.post ? props.post.tile : '',
        //content: props.post ? props.post.content : '',
        //setForm: props.post ? props.post.setForm : '',

    });

    const { title, content} = post;

    const handleChange = (e) => {
        const {name, value} =e.target;
        setForm({...Form, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        setPost([...post, Form])
        setForm({title: "", content: "", id: null})
    }

    return (
        <form className='form-container' onSubmit={handleSubmit}>
            <div>
                <h1 className='text-center'>Posts</h1>
                <div className='row'>
                    <label htmlFor='title'>Post Title</label>
                    <input
                    type='text'
                    placeholder='Post Title'
                    id='title'
                    name='title'
                    className='form-control'
                    value={title}
                    onChange={handleChange} />
                </div>
                <div className='mb-2'>
                    <label htmlFor='content'>Content</label>
                    <textarea
                    value={content}
                    placeholder='What is this post about?'
                    id='content'
                    name='content'
                    className='form-control'
                    onChange={handleChange}
                    />
                </div>
                <div className='mb-3'>
                    <button id='submit' type='submit' className='btn btn-terr'>Submit</button>
                </div>
            </div>
        </form>
    )

}

export default Form;