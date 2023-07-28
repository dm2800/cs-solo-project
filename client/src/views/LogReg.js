import React from 'react'
import Login from '../components/Login'
import Register from '../components/Register'
import {Link} from 'react-router-dom'; 

const LogReg = (props) => {
  return(
    <div className="log-reg-container">
        
        <header>
        <section class="section-intro bg-primary padding-y-lg">
            <div class="container">
                <h1>GearShare</h1>
                <h6>Lend & borrow your favorite gear.</h6>
            </div>
        </section>

        <Link to={'/'}>Home</Link>
    </header>

      <Login/>
      <br></br>
      <Register/> 
    </div>
  )
}

export default LogReg;