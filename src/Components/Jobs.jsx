import React, { Component } from 'react'
import Hero from './register/Hero'
import {Link} from 'react-router-dom'
import {
    Card,
    CardBody,
    CardFooter,
    CardText,
    CardTitle,
    Col,
    Row,
    Container,
    FormGroup,
    Label,
    Input
  } from "reactstrap"
  import { css } from 'react-emotion';
import { RingLoader } from 'react-spinners'
const override = css `
    display: block;
    margin: 0 auto;
    border-color: red;
    position: absolute;
    top: 70%;
    z-index: 999;
`;

function searchingFor(term){
  return function(x){
    return x.title.toLowerCase().includes(term.toLowerCase()) || !term;
  }
}

export default class Jobs extends Component {

    state={
        jobs:[], loading:true, term:''
      }
      componentDidMount(){
        fetch('http://localhost:3004/jobs')
        .then(res => res.json())
        .then(data => 
          setTimeout(() => this.setState({ loading: false, jobs: data }), 1000))        
      }
      
    searchHandler = e =>{
      this.setState({term: e.target.value})
    }
  render() {
    const jobs = this.state.jobs.filter(searchingFor(this.state.term)).map(job => (

       
         
        <Col lg='3'>
          <Card key={job.id} className='text-center mt-4'>
            <CardBody>
              <CardTitle><h3>{job.title}</h3></CardTitle>
              <CardTitle>{job.company}</CardTitle>
              <CardText>{job.type} - {job.salary}</CardText>
              <Link className="btn btn-primary text-light" to={`/job/${job.id}`}>Apply Now</Link>
            </CardBody>
            <CardFooter>
              <span className='float-left'>{job.location}</span> 
              <span className='float-right'>{job.postDate}</span>
              </CardFooter>
          </Card>
        </Col>
      
  )) 
    return (
        
      <Container>
        <Row><Hero /></Row>
        
        <Row>
          <Col>
            <FormGroup>
          <Label for="exampleSearch">Search</Label>
          <Input
            type="search"
            name="search"
            id="exampleSearch"
            placeholder="search job title"
            onChange={this.searchHandler}
          />
        </FormGroup>
          </Col>
        
        </Row>
        <RingLoader
          className={override}
          sizeUnit={"px"}
          size={100}
          color={'#123abc'}
          loading={this.state.loading}
        />
      <Row className='mt-5'>{jobs}</Row>
      </Container>
      
      
    )
  }
}
