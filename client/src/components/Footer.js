import React from 'react'
import { Button } from './Button';
import './Footer.css'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>

      <section className='footer-subscriptions'>
        <p className='footer-subscription-heading'>
          Example Heading: Join our email newsletter
        </p>

        <p className='footer-subscription-text'>
          Examptle Text: It's fun, or unsubscribe, that's your call
        </p>

        <div className="input-areas">
          <form>
            <input type='email' name='email' placeholder='Your Email' className='footer-input' />
            <Button buttonStyle='btn--outline'>Subscribe Now!</Button>
          </form>
        </div>
      </section>

      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/'>What is this?</Link>
            <Link to='/'>Why is this?</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Placeholder</Link>
            <Link to='/'>Placeholder</Link>
          </div>
        </div>

        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Placeholder</h2>
            <Link to='/'>Holding Place</Link>
            <Link to='/'>Holding Place</Link>
          </div>
          <div class='footer-link-items'>
            <h2>The Boring Bits</h2>
            <Link to='/'>Terms and Conditions</Link>
            <Link to='/'>Placeholder</Link>
          </div>
        </div>

      </div>

      <section class='social-media'>
        <div class='social-media-wrap'>

          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Anonymity Web Application
            </Link>
            <Link to='/' className='social-logo'>
              <i class='fa-solid fa-worm'/>
            </Link>
          </div>

          <small class='website-rights'>copyright stuffs or whatever</small>

          <div class='social-icons'>
            <Link class='social-icon-link facebook' to='/' target='_blank' aria-label='Facebook'>
              <i class='fab fa-facebook-f' />
            </Link>
            <Link class='social-icon-link instagram' to='/' target='_blank' aria-label='Instagram'>
              <i class='fab fa-instagram' />
            </Link>
          </div>
          
        </div>
      </section>

    </div>
  )
}

export default Footer
