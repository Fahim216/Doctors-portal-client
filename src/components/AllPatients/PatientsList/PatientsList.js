import React from 'react';

const PatientsList = ({appointments}) => {
    return (
      <table className='table table-border-primary'>
          <thead>
              <tr>
              <th className="text-secondary text-left" scope="col">Sr No</th>
                <th className="text-secondary   ps-5" scope="col">Name</th>
                <th className="text-secondary  ps-5" scope="col">Gender</th>
                <th className="text-secondary ps-5" scope="col">Age</th>
                <th className="text-secondary ps-5" scope="col">Weight</th>
                <th className="text-secondary ps-5" scope="col">Phone</th>
                <th className="text-secondary ps-5" scope="col">Email</th>
              </tr>
          </thead>
          <tbody>
              {appointments.map((appointment,index) =>
              
              <tr>
                    <td className="text-secondary">{index+1}</td>
                    <td className="text-secondary ps-5">{appointment.name}</td>
                    <td className="text-secondary ps-5">{appointment.gender}</td>
                    <td className="text-secondary ps-5">{appointment.age}</td>
                    <td className="text-secondary ps-5">{appointment.weight}KG</td>
                    <td className="text-secondary ps-5">{appointment.number}</td>
                    <td className="text-secondary ps-5">{appointment.email}</td>
              </tr>
              )}
          </tbody>
      </table>
    );
};

export default PatientsList;