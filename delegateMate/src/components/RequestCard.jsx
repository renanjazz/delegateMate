import React from 'react'

const RequestCard = () => {
  return (
    <>
     <div className='request-card-container'>
        <div className='card-details'>
            <h4>Company name</h4>
            <p>Service requested: plumbing</p>
            <p>Timeframe: 5-365 days</p>
            <p>Status: pending</p>
            <Button>Standard delivery</Button>
            <Button></Button>
        </div>

        <div className='your-mate'>
            <img src="" alt="dobby" />
            <p>Your mate:</p>
            <p>Dobby</p>
        </div>
     </div>
    </>
  )
}

export default RequestCard