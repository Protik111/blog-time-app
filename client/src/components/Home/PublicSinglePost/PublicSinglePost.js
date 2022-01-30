import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import styles from './PublicSinglePost.module.css';
import { fetchAllPosts } from '../../../redux/action/Post.action';
import { loadUserOfPost } from '../../../redux/action/User.action';
import { Box } from "@mui/system";
import LinearProgress from '@mui/material/LinearProgress';
import blankPhoto from '../../../images/slides/blank.png';

const PublicSinglePost = () => {
    const [singlePost, setSinglePost] = useState([]);
    const { id } = useParams();
    const { posts } = useSelector(state => state.postReducer);
    const { users } = useSelector(state => state.userReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAllPosts());
        setSinglePost(posts.filter(post => post._id === id));
        // dispatch(loadUserOfPost(userId))
    }, [id]);

    if (singlePost.length <= 0) {
        return (
            <Box mt={20} sx={{ width: '100%' }}>
                <LinearProgress />
            </Box>
        )
    }

    // const { user } = singlePost[0];
    // console.log('userId', user);

    console.log('singlePost', singlePost, id, posts);
    // console.log('user', user);
    const publicFolder = 'http://localhost:5000/uploads/';
    return (
        <div className="container-fluid p-0">
            <Navbar></Navbar>
            <div className={`${styles.publicPost_container} container my-5`}>
                {/* <div>
                    <h3>{singlePost[0].title}</h3>
                </div> */}
                <div className="d-flex justify-content-center">
                    <img className={`${styles.postImg} mt-4`} src={publicFolder + singlePost[0].photo} alt="" />
                </div>
                <div className="d-flex mt-4 offset-md-2">
                    <div>
                        <img className={styles.profileImg} src={blankPhoto} alt="" />
                    </div>
                    <div className={`${styles.author} ms-2 off`}>
                        <h6>Rafiur Rahman Protik</h6>
                        <p>Posted on Jan 27</p>
                    </div>
                </div>
                <div className="offset-md-2 mb-3">
                    <h1 className={styles.title}>{singlePost[0].title}</h1>
                </div>
                <div className="offset-md-2 mb-3">
                    <p className={styles.description}>{singlePost[0].description}</p>
                </div>
            </div>
        </div>
    );
};

export default PublicSinglePost;