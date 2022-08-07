import React from 'react'

export const Form = ({form, setForm, posts, setPosts}) => {
    //console.log(form)

    const handleChange = (e) => {
        const {name, value} =e.target;
        setForm({...form, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        setPosts([...posts, form])
        setForm({title: "", content: "", id: null})
    }

    return (
        <form className='form-container' onSubmit={handleSubmit}>
            <h1 className='text-center'>Blog Posts</h1>
            <div className='row'>
                <div className='mb-2'>
                    <label htmlFor='title'>Post Title</label>
                    <input 
                    type='text'
                    placeholder='Post Title'
                    id='title'
                    name='title'
                    className='form-control'
                    value={form.title}
                    onChange={handleChange} />
                </div>
                <div className='mb-2'>
                    <label htmlFor='content'>Content</label>
                    <textarea 
                    value={form.content}
                    placeholder='What is this post about?'
                    id='content'
                    name='content'
                    className='form-control'
                    onChange={handleChange}
                    />
                </div>
            </div>
            <div className='mb-3'>
                <button id='submit' type='submit' className='btn btn-primary'>Submit</button>
            </div>
        </form>
    )

}

export default Form;