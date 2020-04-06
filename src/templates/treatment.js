import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/SEO';
import Layout from '../layouts/index';

const treatment = ({ data }) => {
  console.log(data)
  const props = data.markdownRemark.frontmatter;
  const { html } = data.markdownRemark;
  console.log(props)
  return (
    <Layout bodyClass="page-treatment">
      <SEO title={props.title} />
      <div className="intro intro-small intro-treatment" style={{background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('../${props.image}')`, backgroundSize: 'cover', backgroundPosition:'center'}}>
        <h1>{props.lcTitle}</h1>
      </div>
      <div className="container pt-8 pt-md-10 pb-8 pb-md-10">
        <div className="row justify-content-start pb-4">
          <div className="col-6">
            <h2 className="text-dark">What is {props.lcTitle}</h2>
            <p>{props.whatIsIt}</p>
          </div>
          <img src={props.image} className='col-6'/>
        </div>
        <div className="pt-4 row justify-content-start pb-4">
          <img src={props.image} className='col-6'/>
          <div className="col-6">
            <h2 className="text-dark">How Can ABN Help</h2>
            <p>{props.howCanIHelp}</p>
          </div>
        </div>
        <div className="pt-4 row justify-content-start pb-4">
          <div className="col-6">
            <h2 className="text-dark">What to expect</h2>
            <p>{props.whatToExpect}</p>
          </div>
          <img src={props.image} className='col-6'/>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        lcTitle
        path
        image
        whatIsIt
        howCanIHelp
        whatToExpect
      }
      html
    }
  }
`;

export default treatment;
