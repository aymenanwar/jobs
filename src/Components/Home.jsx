import React from 'react'
import {Link} from 'react-router-dom'
import {
  Jumbotron,
  Row,
  Col
} from "reactstrap";
export default function Home() {
  return (
    <div>
        <Row>
            <Col lg="12" className='text-center'>
              <Jumbotron className='jumbotron-fluid bg-white'>
                <h1 className="display-3">Careers At Job<span className='text-primary bold'>H</span>unter</h1>
                <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr className="my-2" />
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <Link to='/jobs' className='btn btn-primary py-3'>Check Careers Oppurtunities >></Link>
              </Jumbotron>
            </Col>
        </Row>
    </div>
  )
}
