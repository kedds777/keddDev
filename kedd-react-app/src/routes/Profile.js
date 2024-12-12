// src/Profile.js
import React, { useState, useEffect } from 'react';
import AuthService from './AuthService';
import axios from 'axios';

const Profile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user && user.token) {
      axios.get('http://localhost:8080/profile', {
        headers: {
          'Authorization': user.token,
        },
      }).then(response => {
        setProfile(response.data.message);
      }).catch(error => {
        console.error('Profile error', error);
      });
    }
  }, []);

  return (
    <div>
      <h2>Profile</h2>
      {profile ? <p>{profile}</p> : <p>Please log in to view your profile.</p>}
    </div>
  );
};

export default Profile;
