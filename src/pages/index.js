import React from 'react';
import { graphql, withPrefix, Link } from 'gatsby';
import Helmet from 'react-helmet';
import SEO from '../components/SEO';
import Layout from '../layouts/index';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = (props) => {
  
  const markdown = props.data.allMarkdownRemark.edges;
  const json = props.data.allFeaturesJson.edges;
  console.log(json)
  return (
    <Layout bodyClass="page-home" id='color-overlay'>
      <SEO title="Home" />
      <Helmet>
        <meta
          name="description"
          content="Small Business Theme. Multiple content types using Markdown and JSON sources. Responsive design and SCSS. This is a beautiful and artfully designed starting theme."
        />
      </Helmet>
      <div className="intro pb-4">
        <h2 className="w-50 text-center">SUFFERING WITH ACHES AND PAINS?</h2>
        <h1 className="w-70 text-center">ABN SPORTS THERAPY CAN HELP!</h1>
       <Link className="button button-primary mt-2" to="/contact">
           Get in touch
        </Link>
      </div>
      <div className="bg-grey">
        <div className="container pt-8 pt-md-10 pb-8 pb-md-10">
          <div className="row justify-content-start">
            <div className="flex">
              <img className='col-4' src='abn-family-photo.png' />
              <div className="col-8 right">
                <h2 className="text-dark mb-3">OUR STORY</h2>
                <p>My name is Alix and I work from home or mobile and am fully flexible. I also work evening and weekends around your work and family life. I offer different types of massage tailored to your needs to help with: Pain, stiffness, discomfort and mobility. I also offer Advice and support for injury management or injury maintenance.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div >
        <div className="container pt-8 pt-md-10 pb-8 pb-md-10">
          <div className="row justify-content-start">
            <div className="col-12">
              <div className='flex mb-3 end'>  
                <h2 className="text-dark">TREATMENTS</h2>
                <Link className="button button-primary " to="/treatments">
                  ALL TREATMENTS
                </Link>
              </div>
              <p className=" mb-3">A little bit here about the treatments you offer and why they're important</p>
            </div>
            {markdown.map(edge => (
              <div key={edge.node.frontmatter.path} className="col-12 col-md-6 col-lg-4 mb-2">
                  <div className="feature">
                     {edge.node.frontmatter.image && (
                      <div className="feature-image">
                        <img src={withPrefix(edge.node.frontmatter.image)} />
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
        </div>
      </div>  
      <div className="bg-red">
        <div className="container pt-8 pt-md-10 pb-8 pb-md-10">
          <div className="row justify-content-start">
            <div className="col-12">
              <h2 className="mb-3">Testimonials</h2>
              <p>Many people have benefited from our services over the past couple of years.</p>
            </div>
            <div className="col-12">
              <Carousel>
              {json.map(testimonial => (
                <Carousel.Item>
                  <div className='carousel-slide'> 
                    <Carousel.Caption>
                      <p>{testimonial.node.description}</p>
                      <h3>{testimonial.node.title} - {testimonial.node.treatment} </h3>
                    </Carousel.Caption>
                  </div>
                </Carousel.Item>
              ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container pt-8 pt-md-10 pb-8 pb-md-10">
        <div className="row justify-content-start">
            <div className="col-12">
              <h2 className="text-dark">Get in touch</h2>
              <p>To book an appointment, or just get some advice please contact us on the information below.</p>
            </div>
            </div>
          <div className="pt-4 row justify-content-start">
            <div className="col-6">
            <h4 className='mb-4'>Find us</h4>
            <span><strong>ABN Sports Therapy</strong></span>
              <br/>
              <span>15 Maple Gardens</span><br/>
              <span>Guisborough</span><br/>
              <span>TS14 6NY</span>
            </div> 
              <div className='col-6'> 
                <h4 className='mb-4'>For general enquiries or to book an appointment</h4>
                <div className='flex mb-2'>
                  <img width='25px' height='25px' src='facebook.png'  className='flex mr-4'/>
                  <a src="https://www.facebook.com/ABNSportTherapy/" target='_blank'>@ABNSportTherapy</a>
                </div>
                <div className='flex mb-2'>
                  <img width='25px' height='25px'src='call.png'  className='flex mr-4'/>
                  <a src="https://www.facebook.com/ABNSportTherapy/" target='_blank'>07540731115</a>
                </div>
                <div className='flex mb-2'>
                  <img width='25px' height='25px'src='gmail.png' className='flex mr-4'/>
                  <a src="https://mail.google.com/" target='_blank'>abnsportstherapy@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2314.8738789889508!2d-1.063621084390983!3d54.5357190926583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487eef5efb6595fd%3A0xc45585dd7cf5667a!2s15%20Maple%20Gardens%2C%20Guisborough!5e0!3m2!1sen!2suk!4v1585839212445!5m2!1sen!2suk" width="100%" height="400px" frameborder="0"  allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
      </div>
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
          treatment
        }
      }
    }
  }
`;

export default Home;
