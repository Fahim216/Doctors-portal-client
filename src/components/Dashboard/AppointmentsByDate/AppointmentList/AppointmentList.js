import React from 'react';

const AppointmentList = ({appointments}) => {
    return (
        <table className='table table-border-primary'>
            <thead>
                <tr>
                    <th className="text-secondary" scope='col'>Name</th>
                    <th className="text-secondary" scope='col'>Phone</th>
                    <th className="text-secondary" scope='col'>Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    appointments.map((appointment,index)=>
                    <tr>
                        <td>{appointment.name}</td>
                        <td>{appointment.number}</td>
                        <td>{appointment.email}</td>
                    </tr>
                    )
                }
            </tbody>
        </table>
    );
};

export default AppointmentList;