import React from 'react';
import Fluoride from '../../../images/Fluoride.png';
import Cavity from '../../../images/Cavity.png';
import Teath from '../../../images/Teath.png';
import ServiceInfoDetails from '../ServiceInfoDetails/ServiceInfoDetails';

const serviceInfo =[
    {
        img:Fluoride,
        title:'Fluoride Treatment',
    },
    {
        img:Cavity,
        title:'Cavity Filling',
    },
    {
        img:Teath,
        title:'Teath Whitening',
    }
]




const Services = () => {
    return (
       <section className="services-container mt-5">
           <div className="text-center">
               <h5 style={{color:'#5fc7c7'}}>OUR SERVICES</h5>
               <h2 style={{color:'#203047'}}>Services We Provide</h2>
           </div>
           <div className='d-flex justify-content-center'>
           <div className='w-75 row mt-5 pt-5'>
           {
                serviceInfo.map(service=><ServiceInfoDetails service={service}></ServiceInfoDetails>)
            }
           </div>
        </div>
       </section>
    );
};

export default Services;