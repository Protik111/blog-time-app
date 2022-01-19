import React, { Fragment, useEffect, useState } from 'react';
import Navbar from '../Home/Navbar/Navbar';
import { getOwnProfile } from '../../redux/action/Profile.action';
import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import styles from './Dashboard.module.css';

const Dashboard = () => {
    useEffect(() => {
        dispatch(getOwnProfile());
    }, [])

    const { profile, loading } = useSelector(state => state.profileReducer);
    const { user } = useSelector(state => state.authReducer);
    const dispatch = useDispatch();
    // console.log('profile', profile);

    return (
        <div className="container-fluid p-0">
            <Navbar></Navbar>
            <div className="row">
                <div className="col-sm-10 offset-sm-2 col-md-5 offset-md-1 mt-5">
                    <h2 className={styles.welcome_title}>Welcome To Dashboard</h2>
                </div>
                <div className="col-sm-10 offset-sm-2 col-md-5 offset-md-1 mt-4">
                    {loading && profile === null ? (
                        <Box className="d-flex justify-content-center" sx={{ display: 'flex' }}>
                            <CircularProgress />
                        </Box>)
                        : (<Fragment> <p className={`${styles.welcome_user} ${styles.profile_updates}`}>{user && user.name}</p>
                            {
                                profile !== null ?
                                    <Fragment>
                                        <p>Bio : {profile.bio}</p>
                                    </Fragment> :
                                    <Fragment>
                                        <p className={styles.profile_updates}>You've not created your profile.</p>
                                        <button type="button" className={`${styles.profile_updates} btn btn-outline-secondary`}>Create Profile</button>
                                    </Fragment>
                            }</Fragment>)
                    }
                </div>
            </div>
            <hr />
        </div>
    );
};

export default Dashboard;