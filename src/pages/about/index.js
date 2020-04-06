import React from 'react';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';
import Call from '../../components/Call';

const Contact = props => (
  <Layout bodyClass="page-about" >
    <SEO title="Contact" />
    <div className="intro intro-small intro-about">
      <h1>About Us</h1>
    </div>
    <div className="container pt-8 pt-md-10 pb-8 pb-md-10">
      <div className="row justify-content-start">
      <div className="flex">
          <div className="col-8">
            <h2 className="text-dark">Alix Jackson-Bailey</h2>
              <p>My name is Alix Jackson-Bailey and I am a fully qualified mobile sports therapist in and around Teesside, based in Guisborough. I specialize in sports and deep tissue massage and injury management and maintenance.</p>
              <p>I Qualified as a sport therapist from Teesside university with a BSc(Hons) Degree. With this I have spent 5 seasons at Guisborough Town FC and 1 season with Guisborough Rugby Club. </p>
              <p>Alongside working for myself I am also the sports therapist for TNT Fitness and run a clinic at Guisborough Town FC. Although my background is sports the majority of my client base have non sports related conditions. </p>
          </div>
         <img className='col-4' src='general/abn-family-photo.png' />
        </div>
        <div className="col-12">
        <h3 className="text-dark">My Qualifications</h3>
          <ul>
            <li>University degree (2017)</li>
            <li>Pregnancy massage course</li>
          </ul>
        </div>
      </div>
    </div>
  </Layout>
);

export default Contact;
