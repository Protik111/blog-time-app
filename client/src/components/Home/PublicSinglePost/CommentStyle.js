import React, { useEffect } from 'react';
import styles from './Comment.module.css';
import { deleteComment } from '../../../redux/action/Post.action';
import { useDispatch, useSelector } from 'react-redux';
import { setAlert } from '../../../redux/action/Alert.action';
import Alert from '../../Alert/Alert';
import { laodCommentor } from '../../../redux/action/User.action';

const CommentStyle = ({ comment, id }) => {
    const { user, isAuthenticated } = useSelector((state => state.authReducer));
    const dispatch = useDispatch();
    const handleCommentDelete = () => {
        if (isAuthenticated) {
            dispatch(deleteComment(id, comment._id));
        }else{
            dispatch(setAlert('Must Be Login To Delete', 'notCreated'))
        }
    }
    console.log('commentstyler', comment.user);
    return (
        <div className="d-flex">
            <div className={`${styles.comment_container} p-3 w-75 m-2 d-flex justify-content-start`}>
                <p>{comment.name}--</p>
                <h6>{comment.text}</h6>
            </div>
            <div>
                <button onClick={handleCommentDelete} className="btn btn-danger m-4">Delete</button>
            </div>
        </div>
    );
};

export default CommentStyle;