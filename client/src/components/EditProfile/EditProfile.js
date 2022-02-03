import React, { useEffect, useState } from 'react';
import Navbar from '../Home/Navbar/Navbar';
import { AiFillYoutube, AiFillTwitterCircle, AiFillInstagram, AiFillFacebook } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { createProfile } from '../../redux/action/Profile.action';
import Alert from '../Alert/Alert';
import { useNavigate, NavLink } from "react-router-dom";
import styles from '../CreateProfile/CreateProfile.module.css';
import { getOwnProfile } from '../../redux/action/Profile.action';

const EditProfile = () => {
    const dispatch = useDispatch();
    const { profile, loading } = useSelector(state => state.profileReducer);
    // const { user } = useSelector(state => state.authReducer);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        bio: '',
        company: '',
        website: '',
        location: '',
        youtube: '',
        twitter: '',
        instagram: '',
        facebook: ''
    });

    
    useEffect(() => {
        dispatch(getOwnProfile());

        setFormData({
            bio: !profile.bio ? '' : profile.bio,
            company: !profile.company ? '' : profile.company,
            website: !profile.website ? '' : profile.website,
            location: !profile.location ? '' : profile.location,
            youtube: !profile.social ? '' : profile.social.youtube,
            twitter: !profile.social ? '' : profile.social.twitter,
            instagram: !profile.social ? '' : profile.social.instagram,
            facebook: !profile.social ? '' : profile.social.instagram
        })
    }, [loading]);

    const {
        bio,
        company,
        website,
        location,
        youtube,
        twitter,
        instagram,
        facebook
    } = formData;

    // console.log('Formdata', formData);

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(createProfile(formData, navigate, true))
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <div className="container-fluid p-0 mb-5">
            <Navbar></Navbar>
            <div className="offset-sm-2 offset-md-1 offset-lg-2 mt-4">
                <h3>Let's Update Profile!</h3>
                <div className="w-50 offset-md-1">
                    <Alert></Alert>
                </div>
            </div>

            <div className={`${styles.create_profile_container} offset-sm-2 offset-md-1 offset-lg-2`}>
                <form onSubmit={handleSubmit}>
                    <div className="form-group w-75 m-2 p-1">
                        <input type="text" className="form-control" id="bio" placeholder="biography" name="bio" onChange={handleChange} value={bio} />
                        <label htmlFor="bio">Type about yourself. <span style={{ color: 'red' }}>(required)</span></label>
                    </div>
                    <div className="form-group w-75 m-2 p-1">
                        <input onChange={handleChange} value={company} type="text" className="form-control" id="company" placeholder="company or workplace" name="company" />
                        <label htmlFor="company">Could be your own company or where you work.</label>
                    </div>
                    <div className="form-group w-75 m-2 p-1">
                        <input onChange={handleChange} value={website} type="text" className="form-control" name="website" id="website" placeholder="https://www.blogs.com" />
                        <label htmlFor="website">Enter your website address.</label>
                    </div>
                    <div className="form-group w-75 m-2 p-1">
                        <input onChange={handleChange} value={location} type="text" className="form-control" name="location" id="location" placeholder="Dhaka, Bangladesh" />
                        <label htmlFor="location">City and country. <span style={{ color: 'red' }}>(eg. Dhaka, Bangladesh)</span></label>
                    </div>

                    <p>
                        <a className="btn btn-secondary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                            Update Social Links
                        </a>
                    </p>
                    <div className="collapse w-75" id="collapseExample">
                        <div className="form-group m-2 p-1 d-flex justify-content-center">
                            <AiFillYoutube size={50}></AiFillYoutube>
                            <input onChange={handleChange} value={youtube} type="text" className="form-control m-2" name="youtube" id="youtube" placeholder="www.youtube.com" />
                        </div>

                        <div className="form-group m-2 p-1 d-flex justify-content-center">
                            <AiFillTwitterCircle size={50}></AiFillTwitterCircle>
                            <input onChange={handleChange} value={twitter} type="text" className="form-control m-2" name="twitter" id="twitter" placeholder="www.twitter.com" />
                        </div>
                        <div className="form-group m-2 p-1 d-flex justify-content-center">
                            <AiFillInstagram size={50}></AiFillInstagram>
                            <input onChange={handleChange} value={instagram} type="text" className="form-control m-2" name="instagram" id="instagram" placeholder="www.instagram.com" />
                        </div>
                        <div className="form-group m-2 p-1 d-flex justify-content-center">
                            <AiFillFacebook size={50}></AiFillFacebook>
                            <input onChange={handleChange} value={facebook} type="text" className="form-control m-2" name="facebook" id="facebook" placeholder="www.facebook.com" />
                        </div>
                    </div>
                    <button className="btn btn-secondary mt-4" type="submit">Update Profile</button>
                </form>
                <NavLink to="/viewprofile"><buttton className="btn btn-primary mt-4">Go Back</buttton></NavLink>
            </div>
        </div>
    );
};

export default EditProfile;