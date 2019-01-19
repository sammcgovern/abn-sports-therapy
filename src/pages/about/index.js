import React from 'react';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';
import Call from '../../components/Call';

const Contact = props => (
  <Layout bodyClass="page-contact">
    <SEO title="Contact" />
    <div className="intro intro-small">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>About me</h1>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <p>My name is Alix Jackson-Bailey and I am a fully qualified mobile sports therapist in and around Teesside, based in Guisborough. I specialize in sports and deep tissue massage and injury management and maintenance.</p>
          
          <p>I Qualified as a sport therapist from Teesside university with a BSc(Hons) Degree. With this I have spent 5 seasons at Guisborough Town FC and 1 season with Guisborough Rugby Club. </p>

          <p>Alongside working for myself I am also the sports therapist for TNT Fitness and run a clinic at Guisborough Town FC. Although my background is sports the majority of my client base have non sports related conditions. </p>
        </div>
      </div>
    </div>
  </Layout>
);

export default Contact;
