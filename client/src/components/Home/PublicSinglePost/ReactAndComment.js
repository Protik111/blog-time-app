import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postLoveReact } from '../../../redux/action/Post.action';
import { fetchAllPosts } from '../../../redux/action/Post.action';
import { Box } from "@mui/system";
import LinearProgress from '@mui/material/LinearProgress';
import { setAlert } from '../../../redux/action/Alert.action';
import { undoLoveReact } from '../../../redux/action/Post.action';

const ReactAndComment = ({ id, length, commentBox, setCommentBox }) => {
    const [singlePost, setSinglePost] = useState([]);
    const { posts } = useSelector(state => state.postReducer);
    const { user, isAuthenticated } = useSelector((state => state.authReducer));
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
    let love = null;
    if (user === null) {
        love = false;
    }else{
        love = singlePost[0].loves.map(love => love.user === user._id)
    }
    // console.log('user from react', user._id, singlePost, love);
    // let love =false;

    const handleLove = () => {
        if (isAuthenticated) {
            dispatch(postLoveReact(id))
        } else {
            dispatch(setAlert('Please Login To React', 'notcreated'))
        }
    }
    const handleRemoveLove = () => {
        dispatch(undoLoveReact(id));
    }

    const handleComment = () => {
        if (isAuthenticated) {
            setCommentBox(!commentBox);
        } else {
            dispatch(setAlert('Plz Login To Comment', 'notcreated'))
        }
    }

    // console.log('singlePost', singlePost);
    return (
        <Fragment>
            {isAuthenticated && <> <div className="d-flex justify-content-center">
                {!love.includes(true) ? (<a onClick={handleLove} style={{ 'cursor': 'pointer' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-hidden="true" className="crayons-icon">
                        <path d="M21.179 12.794l.013.014L12 22l-9.192-9.192.013-.014A6.5 6.5 0 0112 3.64a6.5 6.5 0 019.179 9.154zM4.575 5.383a4.5 4.5 0 000 6.364L12 19.172l7.425-7.425a4.5 4.5 0 10-6.364-6.364L8.818 9.626 7.404 8.21l3.162-3.162a4.5 4.5 0 00-5.99.334l-.001.001z"></path>
                    </svg>
                </a>) :
                    (<a onClick={handleRemoveLove} style={{ 'cursor': 'pointer' }}>
                        <span class="crayons-reaction__icon crayons-reaction__icon--active">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-hidden="true" className="crayons-icon" style={{ 'fill': 'red' }}>
                                <path d="M2.821 12.794a6.5 6.5 0 017.413-10.24h-.002L5.99 6.798l1.414 1.414 4.242-4.242a6.5 6.5 0 019.193 9.192L12 22l-9.192-9.192.013-.014z"></path>
                            </svg>
                        </span>
                    </a>)}
                <p className='ms-1' style={{ 'fontSize': '20px' }}>{singlePost[0].loves.length}</p>
            </div>
            <div>
                <a className="ms-2" onClick={handleComment} style={{ 'cursor': 'pointer' }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" aria-label="responses" class="od oe nn nr of"><path d="M18 16.8a7.14 7.14 0 0 0 2.24-5.32c0-4.12-3.53-7.48-8.05-7.48C7.67 4 4 7.36 4 11.48c0 4.13 3.67 7.48 8.2 7.48a8.9 8.9 0 0 0 2.38-.32c.23.2.48.39.75.56 1.06.69 2.2 1.04 3.4 1.04.22 0 .4-.11.48-.29a.5.5 0 0 0-.04-.52 6.4 6.4 0 0 1-1.16-2.65v.02zm-3.12 1.06l-.06-.22-.32.1a8 8 0 0 1-2.3.33c-4.03 0-7.3-2.96-7.3-6.59S8.17 4.9 12.2 4.9c4 0 7.1 2.96 7.1 6.6 0 1.8-.6 3.47-2.02 4.72l-.2.16v.26l.02.3a6.74 6.74 0 0 0 .88 2.4 5.27 5.27 0 0 1-2.17-.86c-.28-.17-.72-.38-.94-.59l.01-.02z"></path></svg>
                </a>
            </div>
            </>}

            {!isAuthenticated && <> <div className="d-flex justify-content-center">
                <a onClick={handleLove} style={{ 'cursor': 'pointer' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-hidden="true" className="crayons-icon">
                        <path d="M21.179 12.794l.013.014L12 22l-9.192-9.192.013-.014A6.5 6.5 0 0112 3.64a6.5 6.5 0 019.179 9.154zM4.575 5.383a4.5 4.5 0 000 6.364L12 19.172l7.425-7.425a4.5 4.5 0 10-6.364-6.364L8.818 9.626 7.404 8.21l3.162-3.162a4.5 4.5 0 00-5.99.334l-.001.001z"></path>
                    </svg>
                </a>
                <p className='ms-1' style={{ 'fontSize': '20px' }}>{singlePost[0].loves.length}</p>
            </div>
            <div>
                <a className="ms-2" onClick={handleComment} style={{ 'cursor': 'pointer' }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" aria-label="responses" class="od oe nn nr of"><path d="M18 16.8a7.14 7.14 0 0 0 2.24-5.32c0-4.12-3.53-7.48-8.05-7.48C7.67 4 4 7.36 4 11.48c0 4.13 3.67 7.48 8.2 7.48a8.9 8.9 0 0 0 2.38-.32c.23.2.48.39.75.56 1.06.69 2.2 1.04 3.4 1.04.22 0 .4-.11.48-.29a.5.5 0 0 0-.04-.52 6.4 6.4 0 0 1-1.16-2.65v.02zm-3.12 1.06l-.06-.22-.32.1a8 8 0 0 1-2.3.33c-4.03 0-7.3-2.96-7.3-6.59S8.17 4.9 12.2 4.9c4 0 7.1 2.96 7.1 6.6 0 1.8-.6 3.47-2.02 4.72l-.2.16v.26l.02.3a6.74 6.74 0 0 0 .88 2.4 5.27 5.27 0 0 1-2.17-.86c-.28-.17-.72-.38-.94-.59l.01-.02z"></path></svg>
                </a>
            </div>
            </>}
        </Fragment>
    );
};

export default ReactAndComment;