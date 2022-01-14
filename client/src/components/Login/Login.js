import React, { useState } from 'react';
import styles from './Login.module.css';
import Navbar from '../Home/Navbar/Navbar';

const Login = () => {
    const [newUser, setNewUser] = useState(false);
    return (
        <>
            <Navbar></Navbar>
            <div className={`${styles.registration_container} container-fluid py-5`}>
                <div className="m-2 d-flex justify-content-center">
                    {newUser ? <h3>Account Sign Up</h3> : <h3>Account Login</h3>}
                </div>
                <div className={styles.login_container}>
                    <form action="">
                        {newUser && <div>
                            <label htmlFor="name">Name</label>
                            <br />
                            <input className="" type="text" name="name" id="name" />
                        </div>}
                        <div>
                            <label htmlFor="email">Email</label>
                            <br />
                            <input className="" type="email" name="email" id="email" autoFocus />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <br />
                            <input type="text" name="password" id="password" />
                        </div>
                        {newUser && <div>
                            <label htmlFor="password2">Confirm Password</label>
                            <br />
                            <input type="text" name="password2" id="password2" />
                        </div>}
                        <div className={`${styles.login_btn} mt-3`}>
                            <button type="submit">{newUser ? 'Sign Up' : 'Login'}</button>
                            <div className="mt-1">
                                {newUser ?
                                    <a style={{ color: 'green', cursor: 'pointer' }} onClick={() => setNewUser(!newUser)}>Already Have Account?</a>
                                    : <a style={{ color: 'green', cursor: 'pointer' }} onClick={() => setNewUser(!newUser)}>Are A New User?</a>}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;