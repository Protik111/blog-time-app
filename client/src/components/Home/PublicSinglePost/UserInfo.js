import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadUserOfPost } from '../../../redux/action/User.action';
import Moment from 'react-moment';
import { Box } from "@mui/system";
import LinearProgress from '@mui/material/LinearProgress';


const UserInfo = ({ user, date }) => {
    const { users } = useSelector(state => state.userReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadUserOfPost(user));
    }, [user, date]);

    if (users === null) {
        return (
            <Box mt={20} sx={{ width: '100%' }}>
                <LinearProgress />
            </Box>
        )
    }

    // console.log('users', users);
    return (
        <div>
            <h6>{users[0].name}</h6>
            <p>Posted<Moment format="D MMM YYYY" withTitle>{date}</Moment></p>
        </div>
    );
};

export default UserInfo;