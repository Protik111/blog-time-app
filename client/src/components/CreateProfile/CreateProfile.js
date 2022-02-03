import React, { useState } from 'react';
import Navbar from '../Home/Navbar/Navbar';
import styles from './CreateProfile.module.css';
import { AiFillYoutube, AiFillTwitterCircle, AiFillInstagram, AiFillFacebook } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { createProfile } from '../../redux/action/Profile.action';
import Alert from '../Alert/Alert';
import { useNavigate } from "react-router-dom";

const CreateProfile = () => {
    const dispatch = useDispatch();
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
        dispatch(createProfile(formData, navigate))
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <div className="container-fulid mb-5 pb-5">
            <Navbar></Navbar>
            <div className="offset-sm-2 offset-md-1 offset-lg-2 mt-4">
                <h3>Let's Create Profile!</h3>
                <div className="w-50 offset-md-1">
                    <Alert></Alert>
                </div>
            </div>

            <div className={`${styles.create_profile_container} offset-sm-2 offset-md-1 offset-lg-2`}>
                <form onSubmit={handleSubmit}>
                    <div className="form-group w-75 m-2 p-1">
                        <input type="text" className="form-control" id="bio" placeholder="Biography" name="bio" onChange={handleChange} value={bio} />
                        <label htmlFor="bio">Type about yourself. <span style={{ color: 'red' }}>(required)</span></label>
                    </div>
                    <div className="form-group w-75 m-2 p-1">
                        <input onChange={handleChange} value={company} type="text" className="form-control" id="company" placeholder="Company/Workplace" name="company" />
                        <label htmlFor="company">Could be your own company or where you work.</label>
                    </div>
                    <div className="form-group w-75 m-2 p-1">
                        <input onChange={handleChange} value={website} type="text" className="form-control" name="website" id="website" placeholder="Website Url" />
                        <label htmlFor="website">Enter your website address.</label>
                    </div>
                    <div className="form-group w-75 m-2 p-1">
                        <input onChange={handleChange} value={location} type="text" className="form-control" name="location" id="location" placeholder="Location" />
                        <label htmlFor="location">City and country. <span style={{ color: 'red' }}>(eg. Dhaka, Bangladesh)</span></label>
                    </div>

                    {/* collapse */}

                    <p>
                        <a className="btn btn-secondary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                            Add Social Links
                        </a>
                    </p>
                    <div className="collapse w-75" id="collapseExample">
                        <div className="form-group w-50 m-2 p-1 d-flex justify-content-center">
                            <AiFillYoutube size={50}></AiFillYoutube>
                            <input onChange={handleChange} value={youtube} type="text" className="form-control m-2" name="youtube" id="youtube" placeholder="www.youtube.com" />
                        </div>

                        <div className="form-group w-50 m-2 p-1 d-flex justify-content-center">
                            <AiFillTwitterCircle size={50}></AiFillTwitterCircle>
                            <input onChange={handleChange} value={twitter} type="text" className="form-control m-2" name="twitter" id="twitter" placeholder="www.twitter.com" />
                        </div>
                        <div className="form-group w-50 m-2 p-1 d-flex justify-content-center">
                            <AiFillInstagram size={50}></AiFillInstagram>
                            <input onChange={handleChange} value={instagram} type="text" className="form-control m-2" name="instagram" id="instagram" placeholder="www.instagram.com" />
                        </div>
                        <div className="form-group w-50 m-2 p-1 d-flex justify-content-center">
                            <AiFillFacebook size={50}></AiFillFacebook>
                            <input onChange={handleChange} value={facebook} type="text" className="form-control m-2" name="facebook" id="facebook" placeholder="www.facebook.com" />
                        </div>
                    </div>
                    <button className="btn btn-secondary w-25 offset-md-1 mt-4" type="submit">Create Profile</button>
                </form>
            </div>
        </div>
    );
};

export default CreateProfile;