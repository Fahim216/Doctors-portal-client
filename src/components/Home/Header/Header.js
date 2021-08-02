import React from 'react';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import Navbar from "../../Shared/Navbar/TopBar";
import HeaderMain from "./../HeaderMain/HeaderMain";
import './Header.css';

const Header = () => {
    return (
        <div className='header-container'>
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
            <BusinessInfo></BusinessInfo>

        </div>
    );
};

export default Header;