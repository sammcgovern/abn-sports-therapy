import React from 'react';
import { graphql, withPrefix, Link } from 'gatsby';
import Helmet from 'react-helmet';
import SEO from '../components/SEO';
import Layout from '../layouts/index';
import Call from '../components/Call';

const Home = (props) => {
  const markdown = props.data.allMarkdownRemark.edges;
  const json = props.data.allFeaturesJson.edges;
  return (
    <Layout bodyClass="page-home">
      <SEO title="Home" />
      <Helmet>
        <meta
          name="description"
          content="Small Business Theme. Multiple content types using Markdown and JSON sources. Responsive design and SCSS. This is a beautiful and artfully designed starting theme."
        />
      </Helmet>
      <div className="intro pb-4">
        <h1 className="w-50 text-center">Aches or pains? ABN Sports Therapy can help</h1>
       <Link className="button button-primary mt-2" to="/contact">
           Get in touch
        </Link>
      </div>

      <div className="container pt-8 pt-md-10 pb-8 pb-md-10">
        <div className="row justify-content-start">
          <div className="col-12">
            <h2 className="text-center text-dark mb-3">What does ABN Sports Therapy do?</h2>
          </div>
          
          <div className="col-12 text-center">
            <p className="text-center">Lorem ipsum dolor sit amet, vocent regione persius vix in, ad liber debet nihil vim. Paulo similique an pro, detracto perfecto voluptaria sea eu, eu duo essent sententiae. Cum te scaevola cotidieque. Dicta viderer reprehendunt ut cum, at ius vidit erant officiis. Ex paulo eripuit mei, meis tantas eum et, eam solet laudem ut. Nam audiam postulant no, mel at summo fierent signiferumque, vivendum honestatis scripserit ei mei.</p>
          </div>
        </div>
      </div>
<div className="bg-grey">
<div className="container pt-8 pt-md-10 pb-8 pb-md-10">
        <div className="row justify-content-start">
          <div className="col-12">
            <h2 className="text-dark mb-3">Treatments</h2>
          </div>
          {markdown.map(edge => (
            <div key={edge.node.frontmatter.path} className="col-12 col-md-6 col-lg-4 mb-2">
              <div className="feature">
                <a href={edge.node.frontmatter.path}>
                  {edge.node.frontmatter.image && (
                    <div className="feature-image">
                      <img src={withPrefix(edge.node.frontmatter.image)} />
                    </div>
                  )}
                  <h2 className="feature-title">{edge.node.frontmatter.title}</h2>
                  </a>
                  <div className="feature-content">{edge.node.excerpt}</div>
                
              </div>
            </div>
          ))}
          <div className="col-12 text-center">
            <Link className="button button-primary mt-2" to="/treatments">
              View All treatments
            </Link>
          </div>
        </div>
      </div>



</div>
      

      {/* <div className="container pt-5 pb-5 pt-md-7 pb-md-7">
        <div className="row justify-content-center">
          <div className="col-12">
            <h2 className="title-3 text-dark mb-4">Our Features</h2>
          </div>
          {json.map(edge => (
            <div key={edge.node.id} className="col-12 col-md-6 col-lg-4 mb-2">
              <div className="feature">
                {edge.node.image && (
                  <div className="feature-image">
                    <img src={withPrefix(edge.node.image)} />
                  </div>
                )}
                <h2 className="feature-title">{edge.node.title}</h2>
                <div className="feature-content">{edge.node.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/treatments/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date(formatString: "DD MMMM YYYY")
            image
          }
          excerpt
        }
      }
    }
    allFeaturesJson {
      edges {
        node {
          id
          title
          description
          image
        }
      }
    }
  }
`;

export default Home;
