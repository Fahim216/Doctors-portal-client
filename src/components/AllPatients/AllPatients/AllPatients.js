import React, { useEffect, useState } from 'react';
import PatientsList from '../PatientsList/PatientsList';
import Sidebar from "./../../Dashboard/Sidebar/Sidebar";

const AllPatients = () => {
    const [appointments,setAppointments]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/appointments')
        .then(res => res.json())
        .then(data=>setAppointments(data))
    },[])
    return (
        <div className="container-fluid row">
           <div className="col-md-2 me-5 "><Sidebar></Sidebar></div>
            <div className="col-md-8 p-4 pr-5" style={{ position: 'align-item-center'}}>
                <h5>All patients</h5>
                <PatientsList appointments={appointments}></PatientsList>
            </div>
        </div>
    );
};

export default AllPatients;