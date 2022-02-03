import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import Navbar from '../Home/Navbar/Navbar';
import styles from '../TotalPosts/TotalPosts.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from "@mui/system";
import LinearProgress from '@mui/material/LinearProgress';
import { deletePost } from '../../redux/action/Post.action';

const SinglePost = () => {
    const { id } = useParams();
    // console.log('ids', id);
    const [singlePost, setSinglePost] = useState([]);
    const { post } = useSelector(state => state.postReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        setSinglePost(post.filter(post => post._id === id));
    }, [id]);

    if (singlePost.length <= 0) {
        return (
            <Box mt={20} sx={{ width: '100%' }}>
                <LinearProgress />
            </Box>
        )
    }

    const publicFolder = "http://localhost:5000/uploads/";

    // console.log('newPost', singlePost);
    return (
        <div>
            <Navbar></Navbar>
            <div className={`${styles.totalPosts_container} container mt-5 mb-3`}>
                <div className="mt-4">
                    <img src={publicFolder + singlePost[0].photo} className={`${styles.blogPhoto} pt-4 img-fluid rounded mx-auto d-block`} alt="Not Found" />
                </div>
                <div className="offset-1 offset-md-2 w-75">
                    <div className="d-flex justify-content-center mt-4">
                        <h1>{singlePost[0].title}</h1>
                    </div>
                    <div className="text-center">
                        <p style={{ fontSize: '15px', color: 'gray' }}>{singlePost[0].description}</p>
                    </div>
                    <div className={`${styles.button_container} d-flex justify-content-between`}>
                        <div className="text-center">
                            <NavLink to={`/editpost/${id}`}><button className="p-2 btn btn-secondary mt-4"> ✍️ Edit Your Post</button></NavLink>
                        </div>
                        <div className="text-center">
                            <NavLink to="/dashboard"><button className=" p-2 btn btn-secondary mt-4"> 🏠 Go To Dashboard</button></NavLink>
                        </div>
                        <div className="text-center mb-3">
                            <button className="p-2 btn btn-secondary mt-4" onClick={() => dispatch(deletePost(id, navigate))}> ❌ Delete Your Post</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SinglePost;