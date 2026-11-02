import React from 'react';
import { 
  Sparkles, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  Heart 
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer-section">
      {/* Upper Brand Mission */}
      <div className="footer-mission-banner">
        <div className="container mission-flex">
          <div className="mission-left">
            <Link to="/" className="brand-logo-container">
              <div className="brand-logo-img-wrapper">
                <img 
                  src="/images/ok-madam-logo-hq.jpg" 
                  alt="OK MADAM Logo" 
                  className="brand-logo-img footer-logo-img" 
                />
              </div>
              <div className="brand-title-wrap">
                <span className="brand-name">OK MADAM</span>
                <span className="brand-tagline">Be Beautiful • Be Confident</span>
              </div>
            </Link>
            <p className="mission-desc mt-2">
              Born in Mathura, Uttar Pradesh, <strong>OK MADAM</strong> is pioneering a new standard of accessible luxury by fusing proprietary dermatological cosmetics with verified, at-home professional artistry.
            </p>
          </div>

          <div className="mission-contact-card glass-card">
            <h4>Mathura Headquarters & Leadership</h4>
            <div className="contact-line">
              <MapPin size={15} className="text-pink" />
              <span>Krishna Nagar Main Boulevard, Mathura, UP - 281001</span>
            </div>
            <div className="contact-line">
              <Phone size={15} className="text-pink" />
              <a href="tel:7505754957" className="text-white hover:text-pink">+91 7505754957 (Direct Line & WhatsApp)</a>
            </div>
            <div className="contact-line">
              <Mail size={15} className="text-gold" />
              <a href="mailto:souravprajapati89@gmail.com" className="text-white hover:text-pink">souravprajapati89@gmail.com</a>
            </div>
            <div className="contact-line">
              <ShieldCheck size={15} className="text-pink" />
              <span>Founder & CEO: <strong>Sourav Prajapati</strong></span>
            </div>
            <div className="contact-line">
              <Clock size={15} className="text-gold" />
              <span>Atelier Hours: 07:00 AM – 09:30 PM (Daily)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="footer-links-grid container">
        <div className="footer-col">
          <h4 className="footer-col-title">Atelier Services</h4>
          <ul className="footer-links-list">
            <li><Link to="/services/bridal">Bridal & HD Airbrush</Link></li>
            <li><Link to="/services/women">Haldi & Mehndi Glam</Link></li>
            <li><Link to="/services/party">Party & Cocktail Makeovers</Link></li>
            <li><Link to="/services/men">Men's Groom Architecture</Link></li>
            <li><Link to="/services/women">Couture Saree Draping</Link></li>
            <li><Link to="/services/packages">Wedding Troupe Combos</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-title">Proprietary Cosmetics</h4>
          <ul className="footer-links-list">
            <li><Link to="/store">Skin Silk HD Foundation</Link></li>
            <li><Link to="/store">24K Saffron Glow Elixir</Link></li>
            <li><Link to="/store">15-Piece Rose Gold Brush Roll</Link></li>
            <li><Link to="/store">Empress Matte Lipsticks</Link></li>
            <li><Link to="/store">Grand Bridal Trouseau Kit</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-title">Partnership & Expansion</h4>
          <ul className="footer-links-list">
            <li><Link to="/partner">Become a Certified MUA</Link></li>
            <li><Link to="/partner">Salon B2B Wholesale Supply</Link></li>
            <li><Link to="/franchise">Franchise Studio Opportunities</Link></li>
            <li><Link to="/artists">Mathura Verified Artists</Link></li>
            <li><Link to="/transformations">Client Transformations</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-title">Brand Standards & Policies</h4>
          <ul className="footer-links-list">
            <li><Link to="/contact">100% Sanitized Kit SOP</Link></li>
            <li><Link to="/about">Product Brand Disclosure Policy</Link></li>
            <li><Link to="/contact">DPDP Act Privacy Policy</Link></li>
            <li><Link to="/contact">Cancellation & Refund SOP</Link></li>
            <li><Link to="/about">About OK MADAM</Link></li>
          </ul>
        </div>
      </div>

      {/* Brand Integrity & Disclosure Notice */}
      <div className="footer-disclaimer-strip">
        <div className="container">
          <p className="disclaimer-text">
            <strong>Brand Disclosure Notice:</strong> OK MADAM proudly formulates and manufactures its own proprietary range of cosmetics and professional kits. Where customers request third-party luxury brands (such as MAC or Kryolan), we provide transparent disclosure of product provenance and authentic batch seals. OK Madam does not claim official sponsorship, partnership, or endorsement with third-party trademarks unless explicitly contracted.
          </p>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="footer-copyright-bar">
        <div className="container copyright-flex">
          <span>
            © 2026 <strong>OK MADAM Beauty Technologies Private Limited</strong>. All rights reserved.
          </span>
          <span className="made-with-love">
            Formulated with Passion in Mathura, Uttar Pradesh <Heart size={13} fill="#E74C72" color="#E74C72" />
          </span>
        </div>
      </div>
    </footer>
  );
}
