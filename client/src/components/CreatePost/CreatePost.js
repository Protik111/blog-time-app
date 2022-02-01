import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Alert from '../Alert/Alert';
import Navbar from '../Home/Navbar/Navbar';
import styles from './CreatePost.module.css';
import { createPost } from '../../redux/action/Post.action';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreatePost = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        photo: '',
        categories: ''
    });
    const [uploading, setUploading] = useState(false);
    const [file, setFile] = useState(null);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { title, description, photo, categories } = formData;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleFile = async (e) => {
        const file = e.target.files[0]
        setFile(file);

        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("image", file);
            formData.photo = filename;
            try {
                await axios.post("/api/upload", data);
            } catch (err) {

            }
        }
        try {
            const res = await axios.post("/api/user/createpost", formData);
            window.location.replace("/api/user/createpost" + res.data._id);
        } catch (err) {

        }
    };

    // const formData = new FormData()
    // formData.append('image', file)
    // setUploading(true)

    // try {
    //   const config = {
    //     headers: {
    //       'Content-Type': 'multipart/form-data',
    //     },
    //   }

    //   const { data } = await axios.post('/api/upload', formData, config)

    //   setFormData({...formData, photo: data})
    //   setUploading(false)
    // } catch (error) {
    //   console.error(error)
    //   setUploading(false);
    // }
    //   }



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
                {file && (<div className="mb-3">
                    <img className={styles.uploadedImg} src={URL.createObjectURL(file)} alt="" />
                </div>)}
                <form onSubmit={handleSubmit}>

                    <div class="input-group mb-3">
                        <div class="custom-file">
                            <input type="file" class="custom-file-input" id="inputGroupFile01" onChange={handleFile} />
                        </div>
                    </div>

                    <div className="form-group w-75 m-2 p-1">
                        <input type="text" className={`${styles.titleInput} form-control`} id="title" placeholder="Title" name="title" value={title} onChange={handleChange} />
                        <label for="bio">Write Title of The Post. <span style={{ color: 'red' }}>(required)</span></label>
                    </div>
                    <div class="form-group w-75 m-2 p-1">
                        <textarea className={`${styles.titleInput} form-control`} id="exampleFormControlTextarea1" name="description" value={description} onChange={handleChange} rows="5" placeholder="Write Story Description"></textarea>
                        <label for="exampleFormControlTextarea1">Write About Your Story<span style={{ color: 'red' }}>(required)</span></label>
                    </div>
                    <div className="mb-2 mt-3">
                        <label for="categories">Select Category :</label>
                        <select value={categories} onChange={handleChange} name="categories" className="form-select w-75" aria-label="Default select example">
                            <option value="">Any Category</option>
                            <option value="Nature">Nature</option>
                            <option value="Computers">Computers</option>
                            <option value="Mathematics">Mathematics</option>
                            <option value="Science">Science</option>
                            <option value="Sports">Sports</option>
                            <option value="Geography">Geography</option>
                            <option value="History">History</option>
                            <option value="Politics">Politics</option>
                            <option value="Programming">Programming</option>
                            <option value="Books">Books</option>
                            <option value="Film">Film</option>
                            <option value="Music">Music</option>
                        </select>
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