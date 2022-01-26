import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Alert from '../Alert/Alert';
import Navbar from '../Home/Navbar/Navbar';
import styles from './CreatePost.module.css';
import { createPost } from '../../redux/action/Post.action';
import { NavLink, useNavigate } from 'react-router-dom';

const CreatePost = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        photo: '',
        categories: []
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { title, description, photo, categories } = formData;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(createPost(formData, navigate));
    }

    return (
        <div className="container-fluid p-0">
            <Navbar></Navbar>
            <div className="d-flex justify-content-center">
                <Alert></Alert>
            </div>
            <div className="offset-sm-2 offset-md-1 offset-lg-2 mt-4">
                <h3>Let's Create a Post!</h3>

            </div>
            <div className="offset-sm-2 offset-md-1 offset-lg-2">
                <form onSubmit={handleSubmit}>
                    <div className="form-group w-75 m-2 p-1">
                        <input type="text" className={`${styles.titleInput} form-control`} id="title" placeholder="Title" name="title" value={title} autoFocus onChange={handleChange} />
                        <label for="bio">Write Title of The Post. <span style={{ color: 'red' }}>(required)</span></label>
                    </div>
                    <div class="form-group w-75 m-2 p-1">
                        <textarea className={`${styles.titleInput} form-control`} id="exampleFormControlTextarea1" name="description" value={description} onChange={handleChange} rows="5" placeholder="Write Story Description"></textarea>
                        <label for="exampleFormControlTextarea1">Write About Your Story<span style={{ color: 'red' }}>(required)</span></label>
                    </div>
                    <button type="submit" className="btn btn-secondary mt-2 w-25">📝 Publish</button>
                </form>
                <div className="mb-3 pb-3 mb-4">
                    <NavLink to="/dashboard"><button className="w-25 btn btn-secondary mt-4"> 🏠 Go To Dashboard</button></NavLink>
                </div>
            </div>
        </div>
    );
};

export default CreatePost;