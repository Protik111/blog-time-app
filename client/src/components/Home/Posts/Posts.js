import React, { useEffect, useState } from 'react';
import datas from '../../Fakedata/Fakedata.json';
import Poststyle from '../Poststyle/Poststyle';
import { FaFacebookF } from 'react-icons/fa';
import { ImPinterest } from 'react-icons/im';
import { AiOutlineTwitter, AiFillGithub, AiOutlineGooglePlus, AiFillInstagram, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import styles from './Posts.module.css';
import Popularpost from '../Popularpost/Popularpost';
import { Swiper, SwiperSlide } from "swiper/react";

import blogPhoto from '../../../images/slides/blogs_writing.jpg';
import economyPhoto from '../../../images/slides/economy.jpg';
import healthPhoto from '../../../images/slides/health.jpg';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"



// import Swiper core and required modules
import SwiperCore, {
    Pagination
} from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination]);

const Posts = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        setData(datas);
    }, []);

    const pagination = {
        "clickable": true,
        "renderBullet": function (index, className) {
            return '<span class=' + className + '>' + (index + 1) + '</span>';
        }
    }

    const handleSubscribe = (e) => {
        e.preventDefault();
    }
    return (
        <>
            <div className="container">
                <div className='row'>
                    <div className="col-12 col-md-6 mt-5 pt-5 pb-5 text-center offset-md-1">
                        <h1 className={styles.give_title}>Give A Read On Article</h1>
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

                    <div className={`${styles.newsletter_container}`}>
                        <div className='mt-5 d-flex justify-content-center'>
                            <p className={styles.newsletter}>Newsletter Subscribe</p>
                        </div>
                        <form onSubmit={handleSubscribe}>
                            <div className="mt-2 d-flex justify-content-center">
                                <input className={`${styles.letter_input} p-3 p-md-1`} type="text" name="" id="" placeholder='your e-mail address' />
                            </div>
                            <br />
                            <div className={`${styles.subscribe_btn} mt-2 d-flex justify-content-center`}>
                                <button className="px-5 py-3 px-md-3 py-md-2" type="submit">SUBSCRIBE</button>
                            </div>
                        </form>
                    </div>

                    <div className={`${styles.sponser_container}`}>
                        <div className="mx-4">
                            <h3 className={styles.subscribe_title}>Featured Article</h3>
                            <hr className={styles.heading} />
                        </div>
                        <Swiper pagination={pagination} className="mySwiper">
                            <SwiperSlide>
                                <div className="d-flex justify-content-center">
                                    <img className={styles.sponser_photo} src={blogPhoto} alt="" />
                                </div>
                                <div className={`${styles.sponsor_title_container}`}>
                                    <h4 className={`${styles.sponsor_title} px-3`}>Create Your Own Blog Within A Minute.</h4>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="d-flex justify-content-center">
                                    <img className={styles.sponser_photo} src={economyPhoto} alt="" />
                                </div>
                                <div className={`${styles.sponsor_title_container}`}>
                                    <h4 className={`${styles.sponsor_title} px-3`}>Write On Economy Production and Consumption.</h4>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="d-flex justify-content-center">
                                    <img className={styles.sponser_photo} src={healthPhoto} alt="" />
                                </div>
                                <div className={`${styles.sponsor_title_container}`}>
                                    <h4 className={`${styles.sponsor_title} px-3`}>Share Your Health Tips By Writing Article..</h4>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Posts;