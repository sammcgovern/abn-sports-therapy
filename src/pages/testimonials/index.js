import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';

const Testimonials = (props) => {
  const testimonials = props.data.allMarkdownRemark.edges;
  return (
    <Layout bodyClass="page-testimonials">
      <SEO title="Testimonials" />
      <div className="intro intro-small intro-testimonials">
        <h1>Testimonials</h1>
      </div>

      <div className="container pt-8 pt-md-10 pb-8 pb-md-10">
        <div className="row">
          {testimonials.map(edge => (
            <div key={edge.node.frontmatter.path} className="col-12 col-md-6 mb-1">
              <div className="testimonial">
                <div className="testimonials-meta">
                  <h2 className="testimonials-name">{edge.node.frontmatter.name}</h2>
                  <p className="testimonials-treatment">{edge.node.frontmatter.treatment}</p>
                </div>
                <div
                  className="testimonials-content"
                  dangerouslySetInnerHTML={{ __html: edge.node.html }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query TestimonialsQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/testimonials/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            path
            name
            treatment
          }
        }
      }
    }
  }
`;

export default Testimonials;
