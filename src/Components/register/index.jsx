import React, { Component } from 'react'
import PersonalDetails from './PersonalDetails'
import ExperinceDetails from './ExperinceDetails'
import Confirm from './Confirm'
import Done from './Done'
import AcademicDetails from './AcademicDetails';

export default class Register extends Component {
   
  state={
      page:1,
        name:'',
        gender:'',
        email:'',
        phone:'',
        nationality:'',
        degree:'',
        uni:'',
        gradYear:'',
        company:'',
        jobTitle:'',
        jobStarting:'',
        jobEnding:'',
        jobDesc:'',
        whyYou:'',
        cv:'',
        coverLetter:'',
        city:'',
        country:'',
        postalCode:'',
        address:'',
        position:this.props.match.params.id,
        progress:25
    }
    nextPage = () => {
      const {page, progress} = this.state
      this.setState({
        page:  page+1, progress: progress+25
      })
    }

    prevPage = () => {
      const {page, progress} = this.state
      this.setState({
        page: page-1, progress:progress-25
      })
    }

    handleChange = input => e =>{
      this.setState({
        [input]: e.target.value
      })
    }
  
    render() {
      const {page} = this.state
      const {name, gender, email, phone, whyYou,jobEnding,
         jobStarting,jobDesc, jobTitle, gradYear, company,
         nationality, uni, degree, cv, coverLetter, city, country, postalCode, address, position, progress } = this.state

      const values = {name, gender, email, phone, whyYou,jobEnding,
        jobStarting,jobDesc, jobTitle, gradYear,company,
        nationality, uni, degree, cv, coverLetter, city, country, postalCode, address, position, progress}
        
      
          switch(page){
            case 1:
            return <PersonalDetails 
            values={values}
            handleChange={this.handleChange}
            nextPage= {this.nextPage}
            
            />

            case 2:
            return <AcademicDetails 
            values={values}
            handleChange = {this.handleChange}
            nextPage= {this.nextPage}
            prevPage={this.prevPage}
            />
            case 3:
            return <ExperinceDetails 
            values={values}
            handleChange = {this.handleChange}
            nextPage= {this.nextPage}
            prevPage={this.prevPage}
            />
            case 4:
            return <Confirm 
            values={values}
            handleChange = {this.handleChange}
            nextPage= {this.nextPage}
            prevPage={this.prevPage}
            />
            case 5:
            return <Done 
            values={values}
            />

            default:
            return <h1>Please Register</h1>
          }
        
  }
}
