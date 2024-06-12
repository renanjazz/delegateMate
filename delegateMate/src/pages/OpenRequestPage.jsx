import React from 'react';

function OpenRequestPage({ userData, currentUser }) {
  return (
    <div>
      <h1>Open requests</h1>
      {userData ? (
        <div>
          <h2>User Information:</h2>
          <p>Name: {currentUser}</p>
          <p>Email: {userData.email}</p>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
}

export default OpenRequestPage;