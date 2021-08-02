import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/TopBar';
import BookAppointment from '../BookAppointment/BookAppointment';
import AppointmentHeader from "./../AppointmentHeader/AppointmentHeader";

const Appointment = () => {
    const [selectedDate,setSelectedDate]=useState(new Date());
    const handleDateChange=(date)=>{
       setSelectedDate(date)
    }
    return (
        <div>
            <Navbar></Navbar>
            <AppointmentHeader handleDateChange={handleDateChange}></AppointmentHeader>
            <BookAppointment date={selectedDate}></BookAppointment>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;