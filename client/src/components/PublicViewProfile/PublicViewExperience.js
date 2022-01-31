import React from 'react';
import styles from '../ViewExperience/ViewExperience.module.css';
import Moment from 'react-moment';

const PublicViewExperience = ({ experiences }) => {
    const experience = experiences.map((exp) => (
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
                            </tr>
                        </thead>
                        <tbody>{experience}</tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PublicViewExperience;