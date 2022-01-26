import React from 'react';
import styles from '../Home/Poststyle/Poststyle.module.css';
import demoImage from '../../images/emptyBlog.jpg';
import { GrFormNextLink } from 'react-icons/gr';

const ViewPostStyle = (props) => {
    const {title, photo, description} = props.post;
    return (
        <div>
            <div className={`${styles.poststyle_container} p-3 col-12 col-sm-6 col-md-4 m-1 mb-5`}>
                <div className={`${styles.post_image}`}>
                    <img src={demoImage} alt="" />
                </div>
                <div className="text-center">
                    <h4 className={styles.news_title}>{title}</h4>
                    <button type="button" className={styles.more_btn}>See Details<GrFormNextLink /></button>
                </div>
            </div>
        </div>
    );
};

export default ViewPostStyle;