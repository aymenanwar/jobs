import React, { Component, Fragment } from 'react'
import {Row,Col,FormGroup, Input, Container, Progress} from 'reactstrap'
import Hero from './Hero'
export default class AcademicDetails extends Component {
    state={
        title:''
    }
    continue = e => {
        e.preventDefault();
        this.props.nextPage();
      };
      back = e => {
          e.preventDefault()
          this.props.prevPage()
      }

      async componentDidMount(){
          await fetch(`http://localhost:3004/jobs/${this.props.values.position}`)
                .then(res => res.json())
                .then(data => this.setState({title:data.title}))
      }

    render() {
        const {values, handleChange} = this.props
    return (
      <Fragment>
        <Hero />
        <Container Center style={{border:"1px grey solid", height:'auto'}}>
        <Progress
         bar
         animated 
         color="primary" 
         value={values.progress}
         className='mt-3'>
         Almost there!
         </Progress>
         <h5 className='mt-3'>Enter your latest job information</h5>
                <Row className='pt-4'>
                      <Col className="" md="6">
                        <FormGroup>
                          <label>Company name</label>
                          <Input
                            defaultValue={values.company}
                            onChange={handleChange('company')}
                            placeholder="Company Name"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                </Row>

                    <Row>
                      <Col className="" md="4">
                        <FormGroup>
                          <label>
                           Job Title
                          </label>
                          <Input 
                          placeholder="Job Title" 
                          type="text"
                          defaultValue={values.jobTitle}
                          onChange={handleChange('jobTitle')}
                          />
                        </FormGroup>
                      </Col>
                    
                    
                    <Col className="" md="4">
                        <FormGroup>
                          <label>
                            Start Date
                          </label>
                          <Input 
                          placeholder="dd/mm/yyyy" 
                          type="text"
                          defaultValue={values.jobStarting}
                          onChange={handleChange('jobStarting')}
                          />
                        </FormGroup>
                      </Col>
                      <Col className="" md="4">
                        <FormGroup>
                          <label>
                            End Date
                          </label>
                          <Input 
                          placeholder="dd/mm/yyyy" 
                          type="text"
                          defaultValue={values.jobEnding}
                          onChange={handleChange('jobEnding')}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FormGroup>
                                <label>
                                    Job Description
                                </label>
                                <Input
                                placeholder='Include main tasks and reason for leaving'
                                defaultValue={values.jobDesc}
                                onChange={handleChange('jobDesc')}
                                type='textarea'
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <label htmlFor="file">
                            Please upload your updated CV
                            </label>
                            <Input
                            type='file'
                            onChange={handleChange('cv')}
                            />
                        </Col>
                       
                    </Row>
                    <Row>
                    <Col>
                            <FormGroup>
                                <label>
                                    Cover Letter
                                </label>
                                <Input
                                placeholder='Paste your cover letter here'
                                defaultValue={values.coverLetter}
                                onChange={handleChange('coverLetter')}
                                type='textarea'
                                />
                            </FormGroup>
                        </Col>
                        </Row>
                    <Row>
                    <Col>
                            <FormGroup>
                                <label>
                                    Reasons why we should hire you for the role: <strong>{this.state.title}</strong>
                                </label>
                                <Input
                                placeholder='Say anything you think we should know'
                                defaultValue={values.whyYou}
                                onChange={handleChange('whyYou')}
                                type='textarea'
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                    
                        <Col md='6' className='text-center py-4'>
                            <button className='btn btn-warning'
                            onClick={this.back}>
                            Back
                            </button>

                            <button className='btn btn-primary ml-3'
                                onClick={this.continue}>
                                Continue
                                </button>
                        </Col>
                        
                    </Row>
                    </Container>
      </Fragment>
    )
  }
}
