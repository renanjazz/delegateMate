import React from 'react'
import dobby from '../assets/dobby.png'
import { Link } from 'react-router-dom'

const RequestCard = () => {
  return (
    <>
     <div className='open-request-page-container'>
     <div className='request-card-container'>
        <div className='card-details'>
            <h3>Plumber Pro</h3>
            <p><strong>Service requested:</strong> plumbing</p>
            <p><strong>Delivery:</strong> 5-365 days</p>
            <p><strong>Status:</strong> pending</p>
            <div className='update-cancel-button-container'>
            <Link to="/update-delivery">
            <button className='update-delivery-button'>Update delivery</button>
            </Link>
            <button className='cancel-request-button'>Cancel request</button>
            </div>

        </div>

        <div className='your-mate'>
            <img src={dobby} alt="dobby" style={{height: "120px"}}/>
            <h4>Your mate:</h4>
            <p className='mate-name'>Dobby</p>
        </div>
     </div>
     </div>
    </>
  )
}

export default RequestCard