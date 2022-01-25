import React from 'react';
import { useSelector } from 'react-redux';
import styles from './ViewExperience.module.css';
import Moment from 'react-moment';

const ViewExperience = () => {
    const { profile, loading } = useSelector(state => state.profileReducer);
    const { user } = useSelector(state => state.authReducer);

    const experiences = profile.experience.map((exp) => (
        <tr key={exp._id}>
            <td>{exp.company}</td>
            <td className="hide-sm">{exp.title}</td>
            <td>
                <Moment format="YYYY/MM/DD">{exp.from}</Moment> -{" "}
                {exp.current !== false ? 'Now' :
                    <Moment format="YYYY/MM/DD">
                        {exp.to}
                    </Moment>}
            </td>
            <td>
                <button
                    //   onClick={() => deleteExperience(exp._id)}
                    className="btn btn-danger w-100"
                >
                    Delete
                </button>
            </td>
        </tr>
    ));

    return (
        <div className={`${styles.ViewExperience} w-100 mt-3 container-fluid`}>
            <div className="row">
                <div className="col-12">
                    <table className="table table-sm text-center">
                        <thead>
                            <tr>
                                <th>Company 🏫</th>
                                <th className="hide-sm">Title 💼</th>
                                <th className="hide-sm">Years (From-To) 📅</th>
                                <th className="hide-sm">Action ❌</th>
                            </tr>
                        </thead>
                        <tbody>{experiences}</tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ViewExperience;