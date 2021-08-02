import React from 'react';
import Blogs from '../Blogs/Blogs';
import Doctors from '../Doctors/Doctors';
import FeatureServices from '../FeatureServices/FeatureServices';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Header from "./../Header/Header";
import Testimonials from "./../Testimonials/Testimonials";
import Contact from "./../Contact/Contact";
import Footer from '../../Shared/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header/>
            <Services></Services>
            <FeatureServices></FeatureServices>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
            <Blogs></Blogs>
            <Doctors></Doctors>
            <Contact></Contact>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;