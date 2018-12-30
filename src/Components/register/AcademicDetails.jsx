import React, { Component, Fragment } from 'react'
import {Row,Col,FormGroup, Input, Container, Progress} from 'reactstrap'
import Hero from './Hero'

const FIELDS = {
        uni:{
          type:'input',
          label:'Institution Name'
        },
        degree:{
          type:'input',
          label:'Degree Level'
        },
        gradYear:{
          type:'input',
          label:'Graduation Year'
        }
      }

export default class AcademicDetails extends Component {
  
    continue = e => {
        e.preventDefault();
        this.props.nextPage();
      };
      back = e => {
          e.preventDefault()
          this.props.prevPage()
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
         color="warning" 
         value={values.progress}
         className='mt-3'>
         Here we go!
         </Progress>
                <Row className='pt-4'>
                      <Col className="" md="6">
                        <FormGroup>
                          <label>Instituatin Name</label>
                          <Input
                            defaultValue={values.uni}
                            onChange={handleChange('uni')}
                            placeholder="University/College Name"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      </Row>
                      <Row>
                      <Col className="" md="6">
                        <FormGroup>
                          <label>
                           Degree Level
                          </label>
                          <Input 
                          placeholder="" 
                          type="email"
                          defaultValue={values.degree}
                          onChange={handleChange('degree')}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                    <Col className="" md="6">
                        <FormGroup>
                          <label>
                            Graduation Year
                          </label>
                          <Input 
                          placeholder="dd/mm/yyyy" 
                          type="text"
                          defaultValue={values.gradYear}
                          onChange={handleChange('gradYear')}
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
