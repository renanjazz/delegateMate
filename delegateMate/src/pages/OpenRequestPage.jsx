import React from 'react';
import RequestCard from '../components/RequestCard';

function OpenRequestPage({ userData, currentUser }) {
  return (
    <div>
      <h1>Open requests</h1>
      <RequestCard/>
      {userData ? (
        <div>
          <h2>User Information:</h2>
          <p>Name: {currentUser}</p>
          <p>Email: {userData.email}</p>
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
}

export default OpenRequestPage;