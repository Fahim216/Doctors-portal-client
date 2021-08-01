import React from 'react';

const ServiceInfoDetails = ({service}) => {
    return (
        <div className='col-md-4 text-center'>
            <img  className='' style={{height:'60px'}} src={service.img} alt="" />
            <h5 className='mb-3 mt-4'>{service.title}</h5>
            <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, ipsam.</p>          
        </div>
    );
};

export default ServiceInfoDetails;