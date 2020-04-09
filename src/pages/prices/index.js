import React from 'react';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';
import Call from '../../components/Call';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';

const Prices = props => (
  <Layout bodyClass="page-prices" >
    <SEO title="Prices" />
    <div className="intro intro-small intro-prices">
      <h1>Prices</h1>
    </div>
    <div className="container p-5 pt-8 pt-md-10 pb-8 pb-md-10">
    <div className="row justify-content-start pb-4">
          <div className="col-12">
            <h2 className="text-dark">Price list</h2>
              <p>Here at ABN, we try to keep prices low...</p>
          </div>
        </div>
      <div className='row'>
      <div className='col-md-6'>
        <Accordion defaultActiveKey="0">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0" style={{ width: '100%' }}>
              Pregnancy Massage
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>£ per hour/half hour</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <br />
        <Accordion defaultActiveKey="1">
        <Card >
            <Accordion.Toggle as={Card.Header} eventKey="1" style={{ width: '100%' }}>
              Sports Massage
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>£ per hour/half hour</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <br />
        <Accordion defaultActiveKey="2">
        <Card >
            <Accordion.Toggle as={Card.Header} eventKey="2" style={{ width: '100%' }}>
              Relaxation Massage
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body>£ per hour/half hour</Card.Body>
            </Accordion.Collapse>
          </Card>
          </Accordion>
          </div>
          <div className='col-md-6'>
          <Accordion defaultActiveKey="3">
          <Card >
            <Accordion.Toggle as={Card.Header} eventKey="3" style={{ width: '100%' }}>
             Taping and strapping
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="3">
              <Card.Body>£ per hour/half hour</Card.Body>
            </Accordion.Collapse>
          </Card>
          </Accordion>
          <br />
          <Accordion defaultActiveKey="4">
          <Card >
            <Accordion.Toggle as={Card.Header} eventKey="4" style={{ width: '100%' }}>
             Injury Treatment
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="4">
              <Card.Body>£ per hour/half hour</Card.Body>
            </Accordion.Collapse>
          </Card>
          </Accordion>
          <br />
          <Accordion defaultActiveKey="5">
          <Card >
            <Accordion.Toggle as={Card.Header} eventKey="5" style={{ width: '100%' }}>
             Rehabilitation
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="5">
              <Card.Body>£ per hour/half hour</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        </div>
        </div>
    </div>
  </Layout>
);

export default Prices;
