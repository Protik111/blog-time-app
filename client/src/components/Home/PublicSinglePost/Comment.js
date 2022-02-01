import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllPosts } from '../../../redux/action/Post.action';
import { Box } from "@mui/system";
import LinearProgress from '@mui/material/LinearProgress';
import CommentStyle from './CommentStyle';

const Comment = ({ id }) => {
    const [singlePost, setSinglePost] = useState([]);
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

    // console.log('single from comment', singlePost);

    return (
        <div >
            {singlePost[0].comments.map(comment => <CommentStyle id={id} comment={comment}></CommentStyle>)}
        </div>
    );
};

export default Comment;