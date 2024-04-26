import React from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

const UsersPage = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    // cache: 'no-store', // disables caching (useful for when we have data that changes frequently)
    next: { revalidate: 10 }, // run background job and get fresh data every 10 seconds
  });
  const users: User[] = await res.json();

  return (
    <>
      <h1>Users</h1>

      {/* <p>{new Date().toLocaleTimeString()}</p>   */}

      <table className='table table-bordered'>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UsersPage;
