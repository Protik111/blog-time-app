import React from 'react';
import styles from './Popularpost.module.css';

const Popularpost = (props) => {
    const { id, name, fullDescription, category, image } = props.item;
    return (
        <div className={`${styles.single_popular_post} mt-3`}>
            <div className={`${styles.popular_post_image}`}>
                <img src={image} alt="" />
            </div>
            <div className={styles.date_title_container}>
                <div className={`${styles.popular_date_duration} d-flex justify-content-evenly`}>
                    <p>April 2, 2019</p>
                    <p>Fashion</p>
                </div>
                <div>
                    <h5 className={styles.heading_title}>{name}</h5>
                </div>
            </div>
        </div>
    );
};

export default Popularpost;