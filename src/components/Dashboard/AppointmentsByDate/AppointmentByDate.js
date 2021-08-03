import React from 'react';

import AppointmentList from "./AppointmentList/AppointmentList";

const AppointmentByDate = ({appointments}) => {
    return (
        <div>
          <h2>appointments</h2>
         {
             appointments.length ? <AppointmentList appointments={appointments}></AppointmentList>
             : <div className="p-5">
                 <h4 className='text-center lead'>No appointments</h4>
                 </div>
  
            }
        </div>
    );
};

export default AppointmentByDate;