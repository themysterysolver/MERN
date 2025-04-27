import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [user, setUser] = useState(null);
  let nav=useNavigate();
  useEffect(() => {
    const data = localStorage.getItem('currentUser');
    if (data) {
      setUser(JSON.parse(data));
    }
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">Welcome {user.firstName}!</h2>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <button onClick={()=>nav('/feedback')}>Feed back form</button>
    </div>
  );
};

export default Profile;
