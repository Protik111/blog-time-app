import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Alert.module.css';

const Alert = () => {
    const { alertReducer } = useSelector(state => state);
    console.log('alert', alertReducer);
    return (
        <div className="mt-2">
            {alertReducer !== null && alertReducer.length > 0 && alertReducer.map(alert =>
                <div className={`${styles.alert_cotainer}`}>
                    <p className={`${styles.alertTitle} px-5 py-1`} key={alert.id}>{alert.msg}</p>
                </div>
            )}
        </div>
    );
};

export default Alert;