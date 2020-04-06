import React from 'react';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';
import Call from '../../components/Call';

const Contact = props => (
  <Layout bodyClass="page-contact">
    <SEO title="Contact" />
    <div className="intro intro-small intro-contact">
      <h1>Contact</h1>
    </div>
    <div className="container pt-8 pt-md-10 pb-8 pb-md-10">
      <div className="row justify-content-start">
        <div className="col-12">
          <h2 className="text-dark mb-3">Contact</h2>
        </div>
        <div className="col-12">
          <p>Please message and I will be more than happy to help. Also, you don't have to take part in sports to see a sports therapist! I'm here to help.</p>
        </div>
        <div className="col-12 flex">
          <div className='col-6'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2314.8738789889508!2d-1.063621084390983!3d54.5357190926583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487eef5efb6595fd%3A0xc45585dd7cf5667a!2s15%20Maple%20Gardens%2C%20Guisborough!5e0!3m2!1sen!2suk!4v1585839212445!5m2!1sen!2suk" width="100%" height="300px" frameborder="0"  allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
          </div>
          <div className='col-6'> 
            <div className='flex mb-4'>
              <img width='25px' height='25px' src='general/facebook.png'  className='flex mr-4'/>
              <a src="https://www.facebook.com/ABNSportTherapy/" target='_blank'>@ABNSportTherapy</a>
            </div>
            <div className='flex mb-4'>
              <img width='25px' height='25px'src='general/call.png'  className='flex mr-4'/>
              <a src="https://www.facebook.com/ABNSportTherapy/" target='_blank'>07540731115</a>
            </div>
            <div className='flex mb-4'>
              <img width='25px' height='25px'src='general/gmail.png' className='flex mr-4'/>
              <a src="https://mail.google.com/" target='_blank'>abnsportstherapy@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Contact;
