import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Alert from '../Alert/Alert';
import Navbar from '../Home/Navbar/Navbar';
import styles from './EditPost.module.css';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { updatePost } from '../../redux/action/Post.action';

const EditPost = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        photo: '',
        categories: []
    });
    const [file, setFile] = useState(null);
    const [singlePost, setSinglePost] = useState([]);
    const { id } = useParams();
    const { post } = useSelector(state => state.postReducer);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { title, description } = formData;

    useEffect(() => {
        setSinglePost(post.filter(post => post._id === id));
    }, [id]);
    // console.log('singlePost', singlePost);


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

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(updatePost(formData, id, navigate));
    }

    return (
        <div className="container-fluid p-0">
            <Navbar></Navbar>
            <div className="d-flex justify-content-center">
                <Alert></Alert>
            </div>
            <div className="offset-sm-2 offset-md-1 offset-lg-2 mt-4">
                <h3>Let's Update The Post!</h3>

            </div>
            <div className="offset-sm-2 offset-md-1 offset-lg-2">
                {file && (<div className="mb-3">
                    <img className={styles.uploadedImg} src={URL.createObjectURL(file)} alt="" />
                </div>)}
                <form onSubmit={handleSubmit}>

                    <div class="input-group mb-3">
                        <div class="custom-file">
                            <input type="file" className="custom-file-input" id="inputGroupFile01" onChange={handleFile} />
                        </div>
                    </div>

                    <div className="form-group w-75 m-2 p-1">
                        <input type="text" className={`${styles.titleInput} form-control`} id="title" placeholder="Title" name="title" value={title} onChange={handleChange} />
                        <label htmlFor="bio">Write Title of The Post. <span style={{ color: 'red' }}>(required)</span></label>
                    </div>
                    <div class="form-group w-75 m-2 p-1">
                        <textarea className={`${styles.titleInput} form-control`} id="exampleFormControlTextarea1" name="description" value={description} onChange={handleChange} rows="5" placeholder="Write Story Description"></textarea>
                        <label htmlFor="exampleFormControlTextarea1">Write About Your Story<span style={{ color: 'red' }}>(required)</span></label>
                    </div>
                    <button type="submit" className="btn btn-secondary mt-2">📝 Make Edit</button>
                </form>
                <div className="mb-3 pb-3 mb-4 ">
                    <NavLink to="/dashboard"><button className="btn btn-secondary mt-4"> 🏠 Go To Dashboard</button></NavLink>
                </div>
            </div>
        </div>
    );
};

export default EditPost;