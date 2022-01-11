import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/navigation";
import SwiperCore, {
    Navigation
} from 'swiper';
import blogPhoto from '../../../images/slides/blogs_writing.jpg';
import economyPhoto from '../../../images/slides/economy.jpg';
import healthPhoto from '../../../images/slides/health.jpg';
import styles from './Header.module.css';

// install Swiper modules
SwiperCore.use([Navigation]);

const Header = () => {
    const [date, setDate] = useState();
    useEffect(() => {
        setDate(new Date().toDateString());
    }, []);
    
    return (
        <div className="mb-5">
            <Swiper navigation={true} className="mySwiper">
                <SwiperSlide className={`${styles.slider_container}`}>
                    <div className="d-flex justify-content-center">
                        <img className={styles.slide_photo} src={blogPhoto} alt="" />
                    </div>
                    <div className='d-flex justify-content-center'>
                        <div className={`${styles.slider_title_container} d-flex justify-content-center`}>
                            <p className={`${styles.date} mb-5`}>{date}</p>
                            <h2 className={`${styles.slider_title} mt-3`}>Create Your Own Blog Within A Minute.</h2>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={`${styles.slider_container}`}>
                    <div className="d-flex justify-content-center">
                        <img className={styles.slide_photo} src={economyPhoto} alt="" />
                    </div>
                    <div className='d-flex justify-content-center'>
                        <div className={`${styles.slider_title_container} d-flex justify-content-center`}>
                            <p className={`${styles.date} mb-5`}>{date}</p>
                            <h2 className={`${styles.slider_title} mt-3`}>Write On Economy Production and Consumption.</h2>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={`${styles.slider_container}`}>
                    <div className="d-flex justify-content-center">
                        <img className={styles.slide_photo} src={healthPhoto} alt="" />
                    </div>
                    <div className='d-flex justify-content-center'>
                        <div className={`${styles.slider_title_container} d-flex justify-content-center`}>
                            <p className={`${styles.date} mb-5`}>{date}</p>
                            <h2 className={`${styles.slider_title} mt-3`}>Share Your Health Tips By Writing Article.</h2>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Header;