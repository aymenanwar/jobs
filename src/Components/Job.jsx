import React,{Component} from 'react'
import {Link, Route} from 'react-router-dom'
import { css } from 'react-emotion';
import { RingLoader } from 'react-spinners'
import Register from './register'

const override = css `
    display: block;
    margin: 0 auto;
    border-color: red;
`;

export default class Job extends Component {
  
  state={
    job:{
      resp:[],
      skills:[]
    },
    loading:true  
  }
  
  async componentDidMount() {
    const id = this.props.match.params.id
    await fetch(`http://localhost:3004/jobs/${id}`)
   .then(res=> res.json())
   .then(info => 
     this.setState({ loading: false, job: info })
    )
   
  }
   
  render(){
    const{id,title, salary, type, location, desc, postDate, resp, skills, company} = this.state.job
    const allRespo = resp.map(respo=> <li key={respo.index}>{respo}</li>)
    const allSkills = skills.map(skill => <li key={skill.index}>{skill}</li>)
    return (
      <div className='mt-4 job '>
      <div className='sweet-loading'>
        <RingLoader
          className={override}
          sizeUnit={"px"}
          size={100}
          color={'#123abc'}
          loading={this.state.loading}
        />
      </div> 
        <h1 className="text-success">{title}</h1>
        <span>{company} - {type}</span><br />
        <span>Location: {location}</span><br/>
        <span>Salary: {salary}</span><br/>
        <span>Post Date: {postDate}</span>
        <br/>
        <br />
        <h2>Job Description</h2>
        <hr />
        <p>{desc}</p>
        <h2>Role Responsibilities</h2>
        <hr />
        {allRespo} <br/>
        <h2>Skills Required</h2>
        <hr />
        {allSkills}
        <hr />
        <Link to={`/job/${id}/register`}  className='btn btn-primary my-3 px-3'>Apply</Link>
        <Route exact path={'/job/:id/register'} render={()=>{return <Register id={this.state.job.id}/>}}/>
        
      </div>
    )
  }
 
}
