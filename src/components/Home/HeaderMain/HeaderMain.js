import React from 'react';
import chair from '../../../images/Mask Group 1.png'

const HeaderMain = () => {
    return (
        <main style={{height:'600px'}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
            <h1 style={{color:'#203047'}}>Your New Smile <br /> Starts Here</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nisi voluptatibus necessitatibus totam.</p>
            <button className="btn-primary">GET APPOINTMENT</button>
            </div>
            <div className="col-md-6">
                <img className="img-fluid" src={chair} alt="" />
            </div>

        </main>
    );
};  

export default HeaderMain;