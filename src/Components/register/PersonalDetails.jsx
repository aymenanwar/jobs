import React, {Component, Fragment} from 'react'
import {Row,Col,FormGroup, Input, Container, Progress, Label} from 'reactstrap'
import Hero from './Hero'
export default class PersonalDetails extends Component {
      state={
        gender:''
      }
    
    continue = e => {
        e.preventDefault();
        this.props.nextPage();
      };

      render(){
        const { values, handleChange } = this.props;
        const options = [
            { value: 'Male', label: 'Male' },
            { value: 'Female', label: 'Female' },
            { value: 'Others', label: 'Others' }
          ];
          
        return (
            <Fragment>
                <Hero />
                
                <Container style={{border:"1px grey solid", height:'auto'}}>
                <div style={{margin:'10px'}}>
                    <Progress 
                bar 
                animated 
                color="danger" 
                value={values.progress}
                >
                Lets start
                </Progress>
                </div>
                
                <Row className='pt-4'>
                      <Col className="" md="5">
                        <FormGroup>
                          <label>Full Name</label>
                          <Input
                            defaultValue={values.name}
                            onChange={handleChange('name')}
                            placeholder="Full Name"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="" md="4">
                        <FormGroup>
                          <label htmlFor="exampleInputEmail1">
                            Email address
                          </label>
                          <Input 
                          placeholder="mike@email.com" 
                          type="email"
                          defaultValue={values.email}
                          onChange={handleChange('email')}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                    <Col className="" md="4">
                        <FormGroup>
                          <label>
                            Phone Number
                          </label>
                          <Input 
                          placeholder="+6012345678" 
                          type="text"
                          defaultValue={values.phone}
                          onChange={handleChange('phone')}
                          />
                        </FormGroup>
                      </Col>
                      <Col className="" md="4">
                        <FormGroup>
                          <Label for="exampleSelect">Gender</Label>
                            <Input type="select" name="select" id="exampleSelect">
                              <option>Male</option>
                              <option>Female</option>
                              <option>Others</option>
                            </Input>
                        </FormGroup>
                      </Col>
                      <Col className="" md="4">
                        <FormGroup>
                          <label htmlFor="exampleInputEmail1">
                            Nationality
                          </label>
                          <Input 
                          placeholder="Type your Nationality" 
                          type="text"
                          defaultValue={values.nationality}
                          onChange={handleChange('nationality')}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-md-1" md="4">
                        <FormGroup>
                          <label>City</label>
                          <Input
                            defaultValue={values.city}
                            placeholder="City"
                            type="text"
                            onChange={handleChange('city')}
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="4">
                        <FormGroup>
                          <label>Country</label>
                          <Input
                            defaultValue={values.country}
                            placeholder="Country"
                            type="text"
                            onChange={handleChange('country')}
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-md-1" md="4">
                        <FormGroup>
                          <label>Postal Code</label>
                          <Input 
                           placeholder="ZIP Code"
                           type="text"
                           defaultValue={values.postalCode}
                           onChange={handleChange('postalCode')}
                            />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label>Address</label>
                          <Input
                            defaultValue={values.address}
                            placeholder="Home Address"
                            type="textarea"
                            height="500px"
                            onChange={handleChange('address')}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                        <Col md='12' className='text-center py-4'>
                            <button className='btn btn-primary'
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
