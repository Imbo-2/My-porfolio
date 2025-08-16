import React from 'react';
import profileImage from '../profile.jpg'; 

function Hero() {
  return (
    <section className="hero">
      <img src={profileImage} alt="Profile" className="profile-pic" />
      <h1>Hello, I'm Ivan Dwight Imbo</h1>
      <p>Welcome to my portfolio website.</p>
    </section>
  );
}

export default Hero;
