import React, { useState } from 'react';
import AppointmentForm from "./../AppointmentForm/AppointmentForm";

const BookingCard = ({booking ,date}) => {

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
      setIsOpen(true);
    }
  
    function closeModal() {
      setIsOpen(false);
    }
    return (
        <div className='col-md-4 mb-5'>
            <div className="border border-info bg-  ">
                <div className="p-5 ms-5 ">
                    <h5  style={{color:'#15d1c7'}} >{booking.subject}</h5>
                    <h6>{booking.visitingHour}</h6>
                    <p>{booking.totalSpace}SPACE AVAILABLE</p>
                    <button onClick={openModal} className=''  style={{color:'#15d1c7'}} >Book Appointment</button>
                    <AppointmentForm AppointmentOn={booking.subject} date={date} modalIsOpen={modalIsOpen} closeModal={closeModal}></AppointmentForm>
                </div>
            </div>
            
        </div>
    );
};

export default BookingCard;