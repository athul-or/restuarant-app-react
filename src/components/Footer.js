import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer-modern">
      <div className="footer-container">

        {/* Left Section */}
        <div className="footer-section footer-left">
          <h3>Flavor<span>Haven</span></h3>
          <p className="footer-company-name">© {new Date().getFullYear()} Flavor Haven</p>
        </div>

        {/* Center Section */}
        <div className="footer-section footer-center">
          <div>
            <FaMapMarkerAlt className="footer-icon"/>
            <p><span>444 S. Cedros Ave</span> Solana Beach, California</p>
          </div>
          <div>
            <FaPhoneAlt className="footer-icon"/>
            <p>+1 555 555 5555</p>
          </div>
          <div>
            <FaEnvelope className="footer-icon"/>
            <p>support@flavorhaven.com</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="footer-section footer-right">
          <p className="footer-about">
            Savor the taste of authentic dishes, crafted with love. Follow us on social media for updates and offers!
          </p>
          <div className="footer-socials">
            <a href="/home"><FaFacebookF /></a>
            <a href="/home"><FaTwitter /></a>
            <a href="/home"><FaInstagram /></a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
