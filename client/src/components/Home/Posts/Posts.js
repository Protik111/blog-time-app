import React, { useEffect, useState } from 'react';
import datas from '../../Fakedata/Fakedata.json';
import Poststyle from '../Poststyle/Poststyle';
import { FaFacebookF } from 'react-icons/fa';
import { ImPinterest } from 'react-icons/im';
import { AiOutlineTwitter, AiFillGithub, AiOutlineGooglePlus, AiFillInstagram, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import styles from './Posts.module.css';
import Popularpost from '../Popularpost/Popularpost';

const Posts = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        setData(datas);
    }, [])
    return (
        <>
            <div className="container">
                <div className='row'>
                    <div className="col-12 col-md-6 mt-5 pt-5 pb-5 text-center offset-md-1">
                        <h1>Give A Read On Article</h1>
                        <p>Borem ipsum dolor sit amet, adhuc iriure dissentias est in, est ne diam graece tincidunt. Sit et liber minimuam tsea no doctus fastidii.An molestiae definiebas mel. Quo everti vituperata et, quo cu omnis maiorum aetaea fierentlaboramus eum.Nam at dicant deterruisset.</p>
                    </div>
                    <div className="col-12 col-md-3 offset-md-2 mt-5 pt-5">
                        <div className="">
                            <h3 className={styles.subscribe_title}>Subscribe & Follow</h3>
                            <hr className={styles.heading} />
                        </div>
                        <div className={`${styles.social_icon_container} d-flex`}>
                            <div className={`${styles.social_icon} py-3 m-1`}>
                                <FaFacebookF></FaFacebookF>
                            </div>
                            <div className={`${styles.social_icon} py-3 m-1`}>
                                <AiOutlineTwitter></AiOutlineTwitter>
                            </div>
                            <div className={`${styles.social_icon} py-3 m-1`}>
                                <AiOutlineGooglePlus></AiOutlineGooglePlus>
                            </div>
                            <div className={`${styles.social_icon} py-3 m-1`}>
                                <AiFillLinkedin></AiFillLinkedin>
                            </div>

                        </div>

                        <div className={`${styles.social_icon_container} d-flex`}>
                            <div className={`${styles.social_icon} py-3 m-1`}>
                                <AiFillYoutube></AiFillYoutube>
                            </div>
                            <div className={`${styles.social_icon} py-3 m-1`}>
                                <AiFillInstagram></AiFillInstagram>
                            </div>
                            <div className={`${styles.social_icon} py-3 m-1`}>
                                <AiFillGithub></AiFillGithub>
                            </div>
                            <div className={`${styles.social_icon} py-3 m-1`}>
                                <ImPinterest></ImPinterest>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles.post_map_container} container-fluid mt-5`}>
                <div className="row">
                    {
                        data.map(item => <Poststyle item={item}></Poststyle>).slice(0, 6)
                    }
                    <div className={`${styles.popular_post} col-md-3`}>
                        <div className="">
                            <h3 className={styles.subscribe_title}>Popular Posts</h3>
                            <hr className={styles.heading} />
                        </div>
                        {
                            data.map(item => <Popularpost item={item}></Popularpost>).slice(0, 4)
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Posts;