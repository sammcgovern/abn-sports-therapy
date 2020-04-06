import React from 'react';
import { Link, graphql } from 'gatsby';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';

const Treatments = (props) => {
  const treatments = props.data.allMarkdownRemark.edges;
  return (
    <Layout bodyClass="page-treatments">
      <SEO title="Treatements" />

      <div className="intro intro-small intro-treatments">
        <h1>Treatments</h1>
      </div>

      <div className="container pt-8 pt-md-10 pb-8 pb-md-10">
        <div className="row justify-content-start pb-4">
          <div className="col-12">
            <h2 className="text-dark">Some of the treatements we offer</h2>
              <p>Here at ABN, we are qualified in offering a number of different treatments. If you are unsure, contact us or see below.</p>
          </div>
        </div>
        <div className="row">
          {treatments.map(edge => (
          <div key={edge.node.frontmatter.path} className="col-12 col-md-6 col-lg-4 mb-2">
              <div className="feature">
                  {edge.node.frontmatter.image && (
                  <div className="feature-image">
                    <img src={edge.node.frontmatter.image} />
                  </div>
                )}
                <h3>{edge.node.frontmatter.title}</h3>
                <div className="feature-content">
                  
                  <p>{edge.node.excerpt}</p>
                
                <Link className="button button-primary" to={edge.node.frontmatter.path}>
                  VIEW {edge.node.frontmatter.title}
                </Link>
                </div>
                
            </div> 
          </div>
          ))}
        </div>
        <div className=" pt-8  row justify-content-start">
          <div className="col-12">
            <h2 className="text-dark">What to expect</h2>
              <p>FAQs maybe?</p>
          </div>
        </div>
          </div>

    
    </Layout>
  );
};

export const query = graphql`
  query TreatmentsQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/treatments/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            title
            path
            image
          }
        }
      }
    }
  }
`;

export default Treatments;
