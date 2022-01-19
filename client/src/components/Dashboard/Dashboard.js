import React, { Fragment, useEffect, useState } from 'react';
import Navbar from '../Home/Navbar/Navbar';
import { getOwnProfile } from '../../redux/action/Profile.action';
import { useDispatch, useSelector } from 'react-redux';

const Dashboard = () => {
    useEffect(() => {
        dispatch(getOwnProfile());
    }, [])

    const { profile, loading } = useSelector(state => state.profileReducer);
    const { user } = useSelector(state => state.authReducer);
    const dispatch = useDispatch();
    // console.log('profile', profile);

    return (
        <div>
            <Navbar></Navbar>
            <h2>Hello Dashboard</h2>
            {loading && profile === null ? (<p>...loading</p>) 
            : (<Fragment> <p>Welcome, {user && user.name}</p>
            {
                profile !== null ?
                <Fragment>
                    <p>Bio : {profile.bio}</p>
                </Fragment> : 
                <Fragment>
                    <h6>You've not created your profile.</h6>
                    <button>Create Profile</button>
                </Fragment>
            }</Fragment>)}
        </div>
    );
};

export default Dashboard;