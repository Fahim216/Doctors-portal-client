import React, { useEffect, useState } from 'react';
import AppointmentByDate from '../AppointmentsByDate/AppointmentByDate';
import Sidebar from "./../Sidebar/Sidebar";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { useContext } from "react";
import { UserContext } from "./../../../App";


const containerStyle = {
    backgroundColor: '#F4FDFB',
    height: '100%'
}

const Dashboard = () => {
    const [loggedInUser,setLoggedInUser]=useContext(UserContext);
    const [selectedDate,setSelectedDate]=useState(new Date());
    const [appointments,setAppointments] = useState([]);
    const handleDateChange=(date)=>{
       setSelectedDate(date);
    }
    useEffect(()=>{
        fetch('http://localhost:5000/appointmentsByDate',{
            method:'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({date:selectedDate,email:loggedInUser.email})
        })
        .then(res=>res.json())
        .then(data=>setAppointments(data))
    },[selectedDate])
    return (
        <section>
            <div style={containerStyle} className="container-fluid row">

          
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-3 ms-5 mt-5">
            <Calendar
        onChange={handleDateChange}
        value={new Date()}
      />
            </div>
            <div className="col-md-3">
                <AppointmentByDate appointments={appointments}></AppointmentByDate>
            </div>
            </div>
        </section>
    );
};

export default Dashboard;