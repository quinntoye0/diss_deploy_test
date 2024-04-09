import React from 'react';
import '../App.css';
import './AboutSplash.css';

function AboutSplash() {
  return (
    <div className="about">
        <div className="about-container">
            
            <div className="about-banner">
                <h1 className='about-heading'>About Us</h1>
            </div>

            <h2>???</h2>
            <br />
            <p>Have you ever worked in a group that has struggled to communicate their ideas properly? Yep, me too.</p>
            <p>So I decided I wanted to build a system that could give everyone an equal voice.</p>
            <br/>
            <p>My solution? Anonymity</p>
            <br/>
            <p>I have seen too many group projects stumble at the first hurdle; discussions.</p>
            <p>
                Too often have I seen the dynamic where half of a team shout and fight over eachother for their ideas to be heard, 
                whilst the other half sit quietly because they don't wish to join in with the chaos.
            </p>
            <br />
            <p>Simply create a group, invite your team, and throw your ideas into the mix without having to fight to be heard.</p>

        </div>
    </div>
  )
}

export default AboutSplash
