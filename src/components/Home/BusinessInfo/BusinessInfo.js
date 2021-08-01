import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock,faMapMarker,faPhone } from '@fortawesome/free-solid-svg-icons'
const infosData=[
    {
        title: 'Opening Hours',
        descriptions:'We are open 7 days',
        icon: faClock,
        background:'primary'
    },
    {
        title: 'Visit Our Location',
        descriptions:'Brooklyn,NY 1003 USA',
        icon: faMapMarker,
        background:'dark'
    },
    {
        title: 'Call us now',
        descriptions:'+5462134641',
        icon: faPhone,
        background:'primary'
    }
]


const BusinessInfo = () => {
    return (
        <section className=' d-flex justify-content-center'>
           <div className='w-75 g-2 row'>
           {
                infosData.map(info =><InfoCard info={info}></InfoCard>)
            }
           </div>
        </section>
    );
};

export default BusinessInfo;