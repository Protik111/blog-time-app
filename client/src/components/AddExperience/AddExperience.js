import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Alert from '../Alert/Alert';
import styles from '../CreateProfile/CreateProfile.module.css';
import Navbar from '../Home/Navbar/Navbar';
import { addExperience } from '../../redux/action/Profile.action';

const AddExperience = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const [current, setCurrent] = useState(false);

    const [formData, setFormData] = useState({
        title: '',
        company: '',
        location: '',
        from: '',
        to: '',
        description: '',
        current: false
    });

    const {
        title,
        company,
        location,
        from,
        to,
        description,
        current
    } = formData;

    // console.log('Formdata', formData);

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(addExperience(formData, navigate))
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    return (
        <div className="container-fulid mb-5 pb-5">
            <Navbar></Navbar>
            <div className="offset-sm-2 offset-md-1 offset-lg-2 mt-4">
                <h3>Let's Add Experience!</h3>
                <div className="w-50 offset-md-1">
                    <Alert></Alert>
                </div>
            </div>

            <div className={`${styles.create_profile_container} offset-sm-2 offset-md-1 offset-lg-2`}>
                <form onSubmit={handleSubmit}>
                    {/* Experience Section */}
                    <div className="mt-4">
                        <h5>Add Experiences</h5>
                    </div>

                    <div className="form-group w-50 m-2 p-1">
                        <input onChange={handleChange} value={title} type="text" className="form-control" name="title" id="title" placeholder="Designation Title" />
                        <label for="title">Designation where you worked for. <span style={{ color: 'red' }}>(required)</span></label>
                    </div>
                    <div className="form-group w-50 m-2 p-1">
                        <input onChange={handleChange} value={company} type="text" className="form-control" name="company" id="company" placeholder="Company Name" />
                        <label for="company">Company name where your worked for. <span style={{ color: 'red' }}>(required)</span></label>
                    </div>

                    <div className="form-group w-50 m-2 p-1">
                        <input onChange={handleChange} value={location} type="text" className="form-control" name="location" id="location" placeholder="Address" />
                        <label for="location">Location of your company. </label>
                    </div>

                    <div className="form-group w-50 m-2 p-1">
                        <h6>From Date <span style={{ color: 'red' }}>(required)</span></h6>
                        <input onChange={handleChange} value={from} className="w-50" type="date" name="from" />
                    </div>
                    <div className="form-group w-50 m-2 p-1">
                        <input
                            type="checkbox"
                            name="current"
                            checked={current}
                            value={current}
                            onChange={() => setFormData({...formData, current: !current})}
                        />{' '}
                        Current Job
                    </div>
                    <div className="form-group  w-50 m-2 p-1">
                        <h6>To Date</h6>
                        <input
                            onChange={handleChange}
                            value={to}
                            type="date"
                            name="to"
                            className="w-50"
                            value={to}
                            disabled={current}
                        />
                    </div>

                    <div className="form-group w-50 m-2 p-1">
                        <textarea
                            onChange={handleChange}
                            value={description}
                            className="w-100"
                            name="description"
                            cols="30"
                            id="desciption"
                            rows="5"
                            placeholder="Job Description"
                            value={description}
                        />
                        <label for="desciption">Descibe what you did in your workplace.</label>
                    </div>

                
                    <button className="btn btn-secondary w-25 offset-md-1 mt-4" type="submit">Add Experience</button>
                </form>
            </div>
        </div>
    );
};

export default AddExperience;