import React from 'react';
import Navbar from '../Home/Navbar/Navbar';
import styles from './CreateProfile.module.css';

const CreateProfile = () => {
    const handleSubmit = () => {

    }
    const handleChange = () => {

    }
    return (
        <div className="container-fulid mb-5">
            <Navbar></Navbar>
            <div className="offset-sm-2 offset-md-1 offset-lg-2 mt-4">
                <h3>Let's Create Profile!</h3>
            </div>

            <div className={`${styles.create_profile_container} offset-sm-2 offset-md-1 offset-lg-2`}>
                <form onSubmit={handleSubmit}>
                    <div className="form-group w-75 m-2 p-1">
                        <input type="text" className="form-control" id="bio" placeholder="biography" />
                        <label for="bio">Type about yourself. <span style={{ color: 'red' }}>(required)</span></label>
                    </div>
                    <div className="form-group w-75 m-2 p-1">
                        <input type="text" className="form-control" id="company" placeholder="company or workplace" />
                        <label for="company">Could be your own company or where you work.</label>
                    </div>
                    <div className="form-group w-75 m-2 p-1">
                        <input type="text" className="form-control" id="website" placeholder="https://www.blogs.com" />
                        <label for="website">Enter your website address.</label>
                    </div>
                    <div className="form-group w-75 m-2 p-1">
                        <input type="text" className="form-control" id="location" placeholder="Dhaka, Bangladesh" />
                        <label for="location">City and country. <span style={{ color: 'red' }}>(eg. Dhaka, Bangladesh)</span></label>
                    </div>

                    {/* Experience Section */}
                    <div className="mt-4">
                        <h5>Add Experiences</h5>
                    </div>

                    <div className="form-group w-50 m-2 p-1">
                        <input type="text" className="form-control" id="title" placeholder="Software Developer" />
                        <label for="title">Designation where you worked for. <span style={{ color: 'red' }}>(required)</span></label>
                    </div>
                    <div className="form-group w-50 m-2 p-1">
                        <input type="text" className="form-control" id="companyC" placeholder="Tech Insights Ltd" />
                        <label for="companyC">Company name where your worked for.</label>
                    </div>
                    <div className="form-group w-50 m-2 p-1">
                        <input type="text" className="form-control" id="desciption" placeholder="description" />
                        <label for="desciption">Descibe what you did in your workplace.</label>
                    </div>
                    <div className="form-group w-50 m-2 p-1">
                        <input type="text" className="form-control" id="locationC" placeholder="169/2/A Niketon, Dhaka, Bangladesh" />
                        <label for="locationC">Location of your company. </label>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateProfile;