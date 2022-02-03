import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import styles from './PublicSinglePost.module.css';
import { fetchAllPosts } from '../../../redux/action/Post.action';
import { Box } from "@mui/system";
import LinearProgress from '@mui/material/LinearProgress';
import blankPhoto from '../../../images/slides/blank.png';
import UserInfo from './UserInfo';
import ReactAndComment from './ReactAndComment';
import Alert from '../../Alert/Alert';
import Comment from './Comment';
import { postComment } from '../../../redux/action/Post.action';

const PublicSinglePost = () => {
    const [singlePost, setSinglePost] = useState([]);
    const [commentBox, setCommentBox] = useState(false);
    const [formData, setFormData] = useState({
        text: ''
    });

    const { id } = useParams();
    const { posts } = useSelector(state => state.postReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAllPosts());
        setSinglePost(posts.filter(post => post._id === id));
    }, [posts]);

    if (singlePost.length <= 0) {
        return (
            <Box mt={20} sx={{ width: '100%' }}>
                <LinearProgress />
            </Box>
        )
    }
    const publicFolder = 'https://shielded-anchorage-62161.herokuapp.com/uploads/';

    const { text } = formData;

    const handleCommentChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(postComment(id, formData))
        setCommentBox(false);
    }

    // console.log('formData', formData);

    // console.log('singlePost', singlePost);
    return (
        <div className="container-fluid p-0">
            <Navbar></Navbar>
            <div className={`${styles.publicPost_container} container my-5`}>
                <div className="d-flex justify-content-center">
                    <img className={`${styles.postImg} mt-4`} src={publicFolder + singlePost[0].photo} alt="" />
                </div>
                <div className="d-flex mt-4 offset-1 offset-md-2">
                    <div>
                        <img className={styles.profileImg} src={blankPhoto} alt="" />
                    </div>
                    <div className={`${styles.author} ms-2`}>
                        <UserInfo date={singlePost[0].createdAt} user={singlePost[0].user}></UserInfo>
                    </div>
                </div>
                <div className="w-25 offset-1 offset-md-2">
                    <Alert></Alert>
                </div>
                <div className="offset-1 offset-md-2 mb-3 offset-md-2 d-flex">
                    <ReactAndComment id={id} length={singlePost[0].loves.length} commentBox={commentBox} setCommentBox={setCommentBox}></ReactAndComment>
                </div>
                <div className="offset-1 offset-md-2 mb-3 w-75">
                    <h1 className={styles.title}>{singlePost[0].title}</h1>
                </div>
                <div className="offset-1 offset-md-2 mb-1 w-75">
                    <p className={styles.description}>{singlePost[0].description}</p>
                </div>
                {commentBox && <form action="" onSubmit={handleSubmit}>
                    <div className="form-group w-50 p-1 offset-1 offset-md-2 mb-3">
                        <textarea name="text" value={text} onChange={handleCommentChange} className={`${styles.titleInput} form-control`} id="exampleFormControlTextarea1" rows="5" placeholder="Write Your Comment Here" autoFocus></textarea>
                        <label htmlFor="exampleFormControlTextarea1">Type Your Opinion.<span style={{ color: 'red' }}>(required)</span></label>
                    </div>
                    <div className="offset-md-2 pb-4">
                        <button type="submit" className="btn btn-secondary mt-2 w-25">💬 Comment Now</button>
                    </div>
                </form>}
                <div className="offset-1 offset-md-2 mb-1">
                    <h4>All Comments 💬 </h4>
                    <hr />
                    <Comment id={id}></Comment>
                </div>
            </div>
        </div>
    );
};

export default PublicSinglePost;