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
        <div className="col-12 text-center pb-4">
          <p className="text-center">Lorem ipsum dolor sit amet, vocent regione persius vix in, ad liber debet nihil vim. Paulo similique an pro, detracto perfecto voluptaria sea eu, eu duo essent sententiae. Cum te scaevola cotidieque. Dicta viderer reprehendunt ut cum, at ius vidit erant officiis. Ex paulo eripuit mei, meis tantas eum et, eam solet laudem ut. Nam audiam postulant no, mel at summo fierent signiferumque, vivendum honestatis scripserit ei mei.</p>
        </div>
        <div className="row">
          {treatments.map(edge => (
            <div key={edge.node.frontmatter.path} className="col-12 col-md-4 mb-1">
              <div className="feature">
                  <a href={edge.node.frontmatter.path}>
                    {edge.node.frontmatter.image && (
                      <div className="feature-image">
                        <img src={edge.node.frontmatter.image} />
                      </div>
                    )}
                    <h2 className="feature-title">{edge.node.frontmatter.title}</h2>
                    </a>
                    <div className="feature-content">{edge.node.excerpt}</div>
                  
                </div>
            </div>
          ))}
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
