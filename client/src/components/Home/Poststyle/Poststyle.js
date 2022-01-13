import React from 'react';
import styles from './Poststyle.module.css';
import { GrFormNextLink } from 'react-icons/gr';

const Poststyle = (props) => {
    const { id, name, fullDescription, category, image } = props.item;
    return (
        <div className={`${styles.poststyle_container} col-12 col-sm-6 col-md-4 m-1 mb-5`}>
            <div className={`${styles.post_image}`}>
                <img src={image} alt="" />
            </div>
            <div className={`${styles.date_duration} mt-3 d-flex justify-content-evenly`}>
                <p>April 2, 2019</p>
                <p>Fashion</p>
                <p>2 minutes read</p>
            </div>
            <div className="text-center">
                <h4 className={styles.news_title}>{name}</h4>
                <p className={`${styles.full_description} mt-3`}>{fullDescription}</p>
                <button type="button" className={styles.more_btn}>Read More<GrFormNextLink/></button>
            </div>
        </div>
    );
};

export default Poststyle;