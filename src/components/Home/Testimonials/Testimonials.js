import React from 'react';
import './Testimonial.css'
import wilson from '../../../images/wilson.png';
import ema from '../../../images/ema.png';
import aliza from '../../../images/aliza.png';
import Testimonial from '../Testimonial/Testimonial';



const testimonialData = [
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Wilson Harry',
        from : 'California',
        img : wilson
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Ema Gomez',
        from : 'California',
        img : ema
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Aliza Farari',
        from : 'California',
        img : aliza
    }
]
const Testimonials = () => {
    return (
      <section className='testimonials my-5 py-5'>
          <div className="section-header">
              <h5 className="text-primary ms-5 text-uppercase">Testimonial</h5>
              <h1 className='ms-5'>What Our Patients <br/> Says </h1>
          </div>
        <div className="row g-3 card-deck mt-5 ms-5 me-5">
            {
                testimonialData.map(testimonial=><Testimonial testimonial={testimonial} key={testimonial.name}></Testimonial>)
            }
        </div>


      </section>
    );
};

export default Testimonials;