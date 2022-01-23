import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../Home/Navbar/Navbar';
import styles from './ViewProfile.module.css';
import blankProfile from '../../images/slides/blank.png';

const ViewProfile = () => {
    const { profile, loading } = useSelector(state => state.profileReducer);
    const { user } = useSelector(state => state.authReducer);
    return (
        <div className="container-fluid p-0">
            <Navbar></Navbar>
            {/* <div className="d-flex justify-content-center mt-4">
                <h2>Your Profile</h2>
            </div> */}
            <div className={`${styles.viewProfile_container} mt-4`}>
                <div className="d-flex justify-content-center mt-4">
                    <img className={`${styles.blankProfile}`} src={blankProfile} alt="" />
                </div>
                <div className="d-flex justify-content-center mt-4">
                    <h2 className={styles.user_name}>{user.name}</h2>
                </div>
                <div className="d-flex justify-content-center">
                    <h5> 🌍 Biography : {profile.bio}</h5>
                </div>

                <div className="d-flex justify-content-center">
                    {profile.company ? (<h5> 🏫 Your Company : {profile.company}</h5>) :
                        (<h5> 🏫 Your Company : Not Added 🚫</h5>)}
                </div>
                <div className="d-flex justify-content-center">
                {profile.location ? (<h5> 🏫 Your Company : {profile.location}</h5>) :
                        (<h5> 🏫 Your Location : Not Added 🚫</h5>)}
                </div>
                <hr />
                <div className="d-flex mb-3">
                    <h4 className="offset-md-3 mt-2">Experiences :</h4>
                    {profile.experience.length < 1 && <button className="btn btn-secondary offset-md-3">Add Experience</button>}
                    {profile.experience.length > 0 && <button className="btn btn-secondary offset-md-3">Edit Experience</button>}
                </div>

                {profile.experience.length > 0 ? (
                    <div>
                        <div className="d-flex justify-content-center">
                            <h5> 💼 Title : {profile.experience[0].title ? profile.experience[0].title : 'Not Added 🚫'}</h5>
                        </div>
                        <div className="d-flex justify-content-center">
                            <h5> 🏫 Company : {profile.experience[0].company ? profile.experience[0].company : 'Not Added 🚫'}</h5>
                        </div>

                        <div className="d-flex justify-content-center">
                            <h5> 📅 From : {profile.experience[0].from ? profile.experience[0].from : 'Not Added 🚫'}</h5>
                        </div>
                        <div className="d-flex justify-content-center">
                            <h5> 📅 To : {profile.experience[0].to ? profile.experience[0].to : 'Not Added 🚫'}</h5>
                        </div>
                    </div>
                ) : (<div className="d-flex justify-content-center">
                    <h5>No Experience Added</h5>
                </div>)}
            </div>
        </div>
    );
};

export default ViewProfile;