import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';

const Testimonials = (props) => {
  const testimonials = props.data.allMarkdownRemark.edges;
  const json = props.data.allFeaturesJson.edges;
  return (
    <Layout bodyClass="page-testimonials">
      <SEO title="Testimonials" />
      <div className="intro intro-small intro-testimonials">
        <h1>Testimonials</h1>
      </div>

      <div className="container pt-8 pt-md-10 pb-8 pb-md-10">
        <div className="row justify-content-start">
          <div className="col-12">
            <h2 className="text-dark">Kind messages from clients</h2>
              <p>Many clients leave comments...</p>
          </div>
        </div>

        <div className="row justify-content-start">
          {json.map(testimonial => (
            <div key={testimonial.node.title} className="col-12 col-md-6 mb-1">
              <div className="testimonial">
                <div className="testimonials-meta">
                  <h2 className="testimonials-name">{testimonial.node.title}</h2>
                  <p className="testimonials-treatment">{testimonial.node.treatment}</p>
                </div>
                <div
                  className="testimonials-content"
                  
                >
                  <blockquote>
                    <p>{testimonial.node.description}</p>
                  </blockquote>
                </div>
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
    allFeaturesJson {
      edges {
        node {
          id
          title
          description
          treatment
        }
      }
    }
  }
  
`;

export default Testimonials;
