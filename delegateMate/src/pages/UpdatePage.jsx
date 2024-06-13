import React from 'react'
import { Link } from 'react-router-dom'

const UpdatePage = () => {
  return (
    <>
    <h2>Update delivery</h2>
    <div className='update-page-container'>
        <p>Would you like to change your delivery date? Please note expediting will add an additional fee.</p>
        <div className='update-page-button-container'>
            <button className='standard-delivery-button'><strong>Standard delivery:</strong> 5-365 days</button>
            <button className='expedited-delivery-button'><strong>Expedited delivery:</strong> yesterday <i>(+1000 EUR)</i></button>
        </div>
        <Link to="/open-requests">
            <button className='proceed-button'>Back</button>
        </Link>
    </div>
    </>
  )
}

export default UpdatePage