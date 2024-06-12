import React from 'react'
import { Link } from 'react-router-dom'

const CreateRequestPage = () => {
    return (
    <>
        <div>
            <h2>Your request</h2>
            <div className='your-request-greater-container'>
            <div className='your-request-container'>
                <div >
                <h4>Scope of service</h4>
                <ul>
                    <li>We'll make all the boring calls necessary to fulfil the request</li>
                    <li>The relevant service provider will then solve your issue</li>
                    <li>Upon completion, the transaction of the below amount will be concluded</li>
                </ul>
                <h4>Cost</h4>
                <p>120 EUR (incl. VAT + service fee)</p>
                </div>
                 <h4>Your current problem</h4>
                 <p>Please specify the problem you are experiencing below:</p>
                 <div>
                 <label>
                    <input className='problem-input'
                    type="text"
                    placeholder="Your issue"
                    />
                 </label>    
            </div>
            <h4>Delivery</h4>
            </div>
            </div>
        
        </div>
    </>
    
  )
}

export default CreateRequestPage