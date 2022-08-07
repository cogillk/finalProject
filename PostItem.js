import React from "react";


/*const PostItem = ({ post}) => {
    return (
        <div className="row">
            <div>
                <div className="card mb-2">
                    <div className="card-header">
                        <h3>{post.title}</h3>
                    </div>
                    <div className="card-body">
                        <p>{post.content}</p>
                    </div>
                </div>
            </div>
        </div>
    )
} */


//export const PostItem = ({itemForm, setItemForm, itemPost, setItemPost}) => {
    //console.log(form)

export const PostItem = ({post, setItemForm, itemForm, setItemPost}) => {


    const handleChange = (e) => {
        const {name, value} =e.target;
        console.log(value);
        setItemForm({...itemForm, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        setItemPost([...post, itemForm]);
        setItemForm({title: "", content: "", id: null});
    }

    return (
        <form className='container form-container' onSubmit={handleSubmit}>
        <div className="row">
        <div className="card postCard">
            <div className='row'>
            <div className="mb-2 mt-2">
                <input 
                type='text'
                placeholder='Post Title'
                id='title'
                name='title'
                className='form-control'
                value={post.title}
                onChange={handleChange} />
            </div>
            <div className='mb-2'>
                <textarea 
                value={post.content}
                placeholder='What is this post about?'
                id='content'
                name='content'
                className='form-control'
                onChange={handleChange}
                />
            </div>
            </div>
         </div>
         </div>
        </form>
    )

}


export default PostItem;