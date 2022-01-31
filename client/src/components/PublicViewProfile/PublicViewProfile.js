import React, { Fragment, useEffect } from 'react';
import Navbar from '../Home/Navbar/Navbar';
import { useParams, NavLink } from 'react-router-dom';
import styles from '../ViewProfile/ViewProfile.module.css';
import blankProfile from '../../images/slides/blank.png';
import { AiFillYoutube, AiFillTwitterCircle, AiFillInstagram, AiFillFacebook } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { publicProfile } from '../../redux/action/Profile.action';
import { Box } from "@mui/system";
import LinearProgress from '@mui/material/LinearProgress';
import PublicViewExperience from './PublicViewExperience';

const PublicViewProfile = () => {
    const { userId, name } = useParams();
    const { publicProfiles } = useSelector(state => state.profileReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(publicProfile(userId));
    }, [userId]);

    if (publicProfiles === null) {
        return (
            <Box mt={20} sx={{ width: '100%' }}>
                <LinearProgress />
            </Box>
        )
    }

    console.log('publicProfile', publicProfiles, name);
    return (
        <div>
            <Navbar></Navbar>
            <div className={`${styles.viewProfile_container} mt-4`}>
                <div className="d-flex justify-content-center mt-4">
                    <img className={`${styles.blankProfile}`} src={blankProfile} alt="" />
                </div>
                <div className="d-flex justify-content-center mt-4">
                    <h2 className={`${styles.user_name} ${styles.viewTitle}`}>{name}</h2>
                </div>
                <div className="d-flex justify-content-center">
                    <h5 className={styles.viewTitle}> 🌍 Biography : {publicProfiles[0].bio}</h5>
                </div>

                <div className="d-flex justify-content-center">
                    {publicProfiles[0].company && (<h5 className={styles.viewTitle}> 🏫 Company : {publicProfiles[0].company}</h5>)}
                </div>
                <div className="d-flex justify-content-center">
                    {publicProfiles[0].location && (<h5 className={styles.viewTitle}> 📍 Location : {publicProfiles[0].location}</h5>)}
                </div>
                <div>
                    <div className="d-flex justify-content-center">
                        {publicProfiles[0].social.facebook && (<h5 className={styles.viewTitle}> <AiFillFacebook size={30}></AiFillFacebook> Facebook : {publicProfiles[0].social.facebook}</h5>)}
                    </div>
                    <div className="d-flex justify-content-center">
                        {publicProfiles[0].social.twitter && (<h5 className={styles.viewTitle}> <AiFillTwitterCircle size={30}></AiFillTwitterCircle> Twitter : {publicProfiles[0].social.twitter}</h5>)}
                    </div>
                    <div className="d-flex justify-content-center">
                        {publicProfiles[0].social.youtube && (<h5 className={styles.viewTitle}> <AiFillYoutube size={30}></AiFillYoutube> Youtube : {publicProfiles[0].social.youtube}</h5>)}
                    </div>
                    <div className="d-flex justify-content-center">
                        {publicProfiles[0].social.instagram && (<h5 className={styles.viewTitle}> <AiFillInstagram size={30}></AiFillInstagram> Instagram : {publicProfiles[0].social.instagram}</h5>)}
                    </div>
                    <NavLink to='/' className="d-flex justify-content-center mt-2">
                        <button className="btn btn-primary w-25"> 🏠 Go Home</button>
                    </NavLink>
                </div>
                <hr />
                <div className="d-flex mb-3">
                    <h2 className="offset-1 offset-md-2 mt-2">Experiences</h2>
                </div>

                {publicProfiles[0].experience.length > 0 ? (
                    <Fragment>
                        <PublicViewExperience experiences={publicProfiles[0].experience}></PublicViewExperience>
                    </Fragment>
                ) : (<div className="d-flex justify-content-center">
                    <h5 className={styles.viewTitle}>No Experience For This User</h5>
                </div>)}
            </div>
        </div>
    );
};

export default PublicViewProfile;