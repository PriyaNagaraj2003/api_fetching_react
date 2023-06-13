import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Dummyjson(){
  const [users, setUsers] = useState([]);


  useEffect(() => {
    axios.get('https://dummyjson.com/users')
      .then(res => {
        console.log(res.data)
        setUsers(res.data.users);
      })
  }, []);

  return (
    <table style={{ border: '1px solid black', padding: '10px' }}>
      <thead>
        <tr style={{ backgroundColor: '#ccc' }}>
          <th style={{ padding: '10px' }}>Name</th>
          <th style={{ padding: '10px' }}>Email</th>
          <th style={{ padding: '10px' }}>Phone</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id} style={{ borderBottom: '1px solid #ccc' }}>
            <td style={{ padding: '10px' }}>{user.firstName + ' ' + user.lastName}</td>
            <td style={{ padding: '10px' }}>{user.email}</td>
            <td style={{ padding: '10px' }}>{user.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Dummyjson;

