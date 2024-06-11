import React from 'react';

function OpenRequestPage({ userData }) {
  return (
    <div>
      <h1>Open Request Page</h1>
      {userData ? (
        <div>
          <h2>User Information:</h2>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
}

export default OpenRequestPage;