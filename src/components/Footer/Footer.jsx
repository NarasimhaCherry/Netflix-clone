import React from 'react'
import './Footer.css'
import Github from '../../assets/github.png'
import Twitter from '../../assets/twitter_icon.png'
import Instagram from '../../assets/instagram_icon.png'
import Facebook from '../../assets/facebook_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <a href="https://github.com/NarasimhaCherry" target="_blank"><img src={Github} alt="Github-icon" /></a>
        <a href="https://www.instagram.com/mr.___.cherry/" target="_blank"><img src={Instagram} alt="Instagram-icon" /></a>
        <a href="https://twitter.com/UnstoppableChe1" target="_blank"><img src={Twitter} alt="Twitter-icon" /></a>
        <a href="https://www.facebook.com/share/tNgaZC9rpzrCPNEB/?mibextid=qi2Omg" target="_blank"><img src={Facebook} alt="Facebook-icon" /></a>
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className='copyright-text'>© 1997-2024 Netflix, Inc.</p>
    </div>
  )
}

export default Footer
