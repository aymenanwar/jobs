import React from 'react'

export default function Nav() {
  return (
    <div>
      <nav className=" col-12 navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand text-uppercase" href="/">jobHunter</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/">Features</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/jobs">Jobs</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/">About</a>
            </li>
            </ul>
        </div>
      </nav>
    </div>
  )
}
