import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../Home/Navbar/Navbar';
import styles from './ViewProfile.module.css';
import blankProfile from '../../images/slides/blank.png';
import { AiFillYoutube, AiFillTwitterCircle, AiFillInstagram, AiFillFacebook } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import Alert from '../Alert/Alert';


const ViewProfile = () => {
    const { profile, loading } = useSelector(state => state.profileReducer);
    const { user } = useSelector(state => state.authReducer);
    return (
        <div className="container-fluid p-0">
            <Navbar></Navbar>
            <Alert></Alert>
            {/* <div className="d-flex justify-content-center mt-4">
                <h2>Your Profile</h2>
            </div> */}
            <div className={`${styles.viewProfile_container} mt-4`}>
                <div className="d-flex justify-content-center mt-4">
                    <img className={`${styles.blankProfile}`} src={blankProfile} alt="" />
                </div>
                <div className="d-flex justify-content-center mt-4">
                    <h2 className={`${styles.user_name} ${styles.viewTitle}`}>{user.name}</h2>
                </div>
                <div className="d-flex justify-content-center">
                    <h5 className={styles.viewTitle}> 🌍 Biography : {profile.bio}</h5>
                </div>

                <div className="d-flex justify-content-center">
                    {profile.company ? (<h5 className={styles.viewTitle}> 🏫 Your Company : {profile.company}</h5>) :
                        (<h5 className={styles.viewTitle}> 🏫 Your Company : Not Added 🚫</h5>)}
                </div>
                <div className="d-flex justify-content-center">
                    {profile.location ? (<h5 className={styles.viewTitle}> 📍 Your Location : {profile.location}</h5>) :
                        (<h5 className={styles.viewTitle}> 📍 Your Location : Not Added 🚫</h5>)}
                </div>
                {profile.social ? <div>
                    <div className="d-flex justify-content-center">
                        {profile.social.facebook ? (<h5 className={styles.viewTitle}> <AiFillFacebook size={30}></AiFillFacebook> Facebook : {profile.social.facebook}</h5>) :
                            (<h5 className={styles.viewTitle}> <AiFillFacebook size={30}></AiFillFacebook> Facebook : Not Added 🚫</h5>)}
                    </div>
                    <div className="d-flex justify-content-center">
                        {profile.social.twitter ? (<h5 className={styles.viewTitle}> <AiFillTwitterCircle size={30}></AiFillTwitterCircle> Twitter : {profile.social.twitter}</h5>) :
                            (<h5 className={styles.viewTitle}> <AiFillTwitterCircle size={30}></AiFillTwitterCircle> Twitter : Not Added 🚫</h5>)}
                    </div>
                    <div className="d-flex justify-content-center">
                        {profile.social.youtube ? (<h5 className={styles.viewTitle}> <AiFillYoutube size={30}></AiFillYoutube> Youtube : {profile.social.youtube}</h5>) :
                            (<h5 className={styles.viewTitle}> <AiFillYoutube size={30}></AiFillYoutube> Youtube : Not Added 🚫</h5>)}
                    </div>
                    <div className="d-flex justify-content-center">
                        {profile.social.instagram ? (<h5 className={styles.viewTitle}> <AiFillInstagram size={30}></AiFillInstagram> Instagram : {profile.social.instagram}</h5>) :
                            (<h5 className={styles.viewTitle}> <AiFillInstagram size={30}></AiFillInstagram> Instagram : Not Added 🚫</h5>)}
                    </div>
                    <div className="d-flex justify-content-center">
                        <NavLink to="/editprofile"><button className="btn btn-secondary">Edit Profile</button></NavLink>
                    </div>
                </div> : (<div className="d-flex justify-content-center">
                    <NavLink to="/editprofile"><button className="btn btn-secondary">Add Social Links Or Edit Profile</button></NavLink>
                </div>)}
                <hr />
                <div className="d-flex mb-3">
                    <h4 className="offset-1 offset-md-3 mt-2">Experiences :</h4>
                    {profile.experience.length < 1 && <button className="btn btn-secondary offset-md-3">Add Experience</button>}
                    {profile.experience.length > 0 && <button className="btn btn-secondary offset-md-3">Edit Experience</button>}
                </div>

                {profile.experience.length > 0 ? (
                    <div>
                        <div className="d-flex justify-content-center">
                            <h5 className={styles.viewTitle}> 💼 Title : {profile.experience[0].title ? profile.experience[0].title : 'Not Added 🚫'}</h5>
                        </div>
                        <div className="d-flex justify-content-center">
                            <h5 className={styles.viewTitle}> 🏫 Company : {profile.experience[0].company ? profile.experience[0].company : 'Not Added 🚫'}</h5>
                        </div>

                        <div className="d-flex justify-content-center">
                            <h5 className={styles.viewTitle}> 📅 From : {profile.experience[0].from ? profile.experience[0].from : 'Not Added 🚫'}</h5>
                        </div>
                        <div className="d-flex justify-content-center">
                            <h5 className={styles.viewTitle}> 📅 To : {profile.experience[0].to ? profile.experience[0].to : 'Not Added 🚫'}</h5>
                        </div>
                    </div>
                ) : (<div className="d-flex justify-content-center">
                    <h5 className={styles.viewTitle}>No Experience Added</h5>
                </div>)}
            </div>
        </div>
    );
};

export default ViewProfile;