import React, { Component, Fragment } from 'react'
import {ListGroup, ListGroupItem, Progress, Container, Row, Col} from 'reactstrap'
import Hero from './Hero'

export default class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextPage();
      };
      back = e => {
          e.preventDefault()
          this.props.prevPage()
      }

  render() {
    const {values: {name, gender, email, phone, whyYou,jobEnding,
        jobStarting,jobDesc, jobTitle, gradYear,company,
        nationality, uni, degree, cv, coverLetter, city, country, postalCode, address,progress}}
        = this.props
    return (
        <Fragment>
        <Hero />
        <Container style={{border:"1px grey solid", padding:'10px auto'}}>
        <Progress
         bar
         animated 
         color="success" 
         value={progress}
         className='mt-3'>
         Congratulation! You made it!
         </Progress>
         <h5 className='my-3'>Please Confirm your information is accurate</h5>
        <ListGroup className='confirm-apply'>
        <h3>Personal Details</h3>
        <ListGroupItem >Your name: {name}</ListGroupItem>
        <ListGroupItem >Gender: {gender}</ListGroupItem>
        <ListGroupItem >Nationality: {nationality}</ListGroupItem>
        <h3>Contact Information</h3>
        <ListGroupItem>Email: {email}</ListGroupItem>
        <ListGroupItem>phone: {phone}</ListGroupItem>
        <h3>Location</h3>
        <ListGroupItem>City: {city}</ListGroupItem>
        <ListGroupItem>Country: {country}</ListGroupItem>
        <ListGroupItem>Postal Code: {postalCode}</ListGroupItem>
        <ListGroupItem>Address: {address}</ListGroupItem>
        <h3>Education Details</h3>
        <ListGroupItem>Instituation Name: {uni}</ListGroupItem>
        <ListGroupItem>Degree Level: {degree}</ListGroupItem>
        <ListGroupItem>Graduation Year: {gradYear}</ListGroupItem>
        <h3>Experince Details</h3>
        <ListGroupItem>Company Name: {company}</ListGroupItem>
        <ListGroupItem>Position: {jobTitle}</ListGroupItem>
        <ListGroupItem>From: {jobStarting} to {jobEnding}</ListGroupItem>
        <ListGroupItem>Job Description: {jobDesc}</ListGroupItem>
        <h3>Supporting Documents</h3>
        <ListGroupItem>CV: {cv}</ListGroupItem>
        <ListGroupItem>Cover Letter: {coverLetter}</ListGroupItem>
        <ListGroupItem>Why we should choose you: {whyYou}</ListGroupItem>
      </ListGroup>
      <Row>           
        <Col md='6' className='text-center py-4'>
            <button className='btn btn-warning'
            onClick={this.back}>
            Go Back & Edit
            </button>

            <button className='btn btn-primary ml-3'
                onClick={this.continue}>
                Submit your Application
                </button>
        </Col>            
        </Row>
      </Container>
      </Fragment>
    )
  }
}
