import React from 'react'
import {Jumbotron} from 'reactstrap'
import {Link} from 'react-router-dom'
export default  ({values:{name, email}}) => {
  return (
    <Jumbotron className='text-center'>
      <h1>Thank you <strong className='text-danger'>{name}</strong> for your submission</h1>
      <p className='lead'>An email has be sent to <strong className='text-danger'>{email}</strong> for further instructions</p>

      <p>Meanwhile please check other job upportunities <Link to='/jobs'>HERE</Link></p>
    </Jumbotron>
  )
}
