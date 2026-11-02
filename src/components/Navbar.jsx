import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Calendar, 
  MapPin, 
  Menu, 
  X, 
  Sparkles, 
  User, 
  SlidersHorizontal, 
  ChevronDown 
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { MATHURA_AREAS } from '../data/mockData';

export default function Navbar({ 
  cartCount, 
  onOpenCart, 
  onOpenAdmin, 
  onOpenAccount 
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [atelierDropdownOpen, setAtelierDropdownOpen] = useState(false);
  const [partnerDropdownOpen, setPartnerDropdownOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState('Mathura, UP');
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="navbar-sticky">
      {/* Top Banner Announcement */}
      <div className="top-announcement-bar">
        <div className="container announcement-content">
          <div className="announcement-left">
            <span className="live-dot"></span>
            <span>Now Live in <strong>Mathura, Uttar Pradesh</strong> — Serving Krishna Nagar, Dampier Nagar & NH-19</span>
          </div>
          <div className="announcement-right">
            <span className="announcement-tag">100% Sanitized Kits</span>
            <span className="announcement-divider">•</span>
            <span className="announcement-tag">Certified MUA Network</span>
            <span className="announcement-divider">•</span>
            <button onClick={onOpenAdmin} className="admin-quick-link" title="Open Enterprise Admin Console">
              <SlidersHorizontal size={13} />
              <span>Admin Console</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="navbar-main">
        <div className="container nav-flex">
          {/* Brand Logo with Queen Crown Emblem */}
          <Link to="/" className="brand-logo-container" onClick={() => setMobileMenuOpen(false)}>
            <div className="brand-logo-img-wrapper">
              <img 
                src="/images/ok-madam-logo-hq.jpg" 
                alt="OK MADAM Logo" 
                className="brand-logo-img" 
              />
            </div>
            <div className="brand-title-wrap">
              <span className="brand-name">OK MADAM</span>
              <span className="brand-tagline">Be Beautiful • Be Confident</span>
            </div>
          </Link>

          {/* Location Selector (Mathura Focus) */}
          <div className="location-pill">
            <MapPin size={14} className="location-pin-icon" />
            <select 
              value={selectedCity} 
              onChange={(e) => setSelectedCity(e.target.value)}
              className="location-select"
            >
              <option value="Mathura, UP">Mathura (All 20+ Zones)</option>
              {MATHURA_AREAS.map(a => (
                <option key={a.id} value={a.name}>
                  {a.name} ({a.pincode})
                </option>
              ))}
            </select>
          </div>

          {/* Desktop Nav Links */}
          <div className="nav-links-desktop">
            <Link to="/" className={`nav-link-btn ${isActive('/') ? 'active' : ''}`}>
              Home
            </Link>

            {/* Services Dropdown */}
            <div 
              className="nav-dropdown-wrapper"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <Link to="/services" className={`nav-link-btn ${location.pathname.startsWith('/services') ? 'active' : ''}`}>
                <span>Our Services</span>
                <ChevronDown size={13} className="dropdown-arrow-icon" />
              </Link>

              {servicesDropdownOpen && (
                <div className="nav-dropdown-menu animate-fade-in">
                  <div className="dropdown-section-title">SERVICE CATALOG</div>
                  <Link to="/services" className="dropdown-item">All Services & Prices</Link>
                  <Link to="/services/women" className="dropdown-item">Women's Beauty & Bridal</Link>
                  <Link to="/services/men" className="dropdown-item">Men's Royal Grooming</Link>
                  <Link to="/services/bridal" className="dropdown-item">Bridal & Engagement</Link>
                  <Link to="/services/groom" className="dropdown-item">Wedding Groom Makeup</Link>
                  <Link to="/services/party" className="dropdown-item">Party & Cocktail Glam</Link>
                  <Link to="/services/packages" className="dropdown-item">Special Wedding Packages</Link>
                </div>
              )}
            </div>

            <Link to="/store" className={`nav-link-btn ${isActive('/store') ? 'active' : ''}`}>
              Our Store
            </Link>

            {/* Atelier & Artists Dropdown */}
            <div 
              className="nav-dropdown-wrapper"
              onMouseEnter={() => setAtelierDropdownOpen(true)}
              onMouseLeave={() => setAtelierDropdownOpen(false)}
            >
              <span className={`nav-link-btn ${isActive('/artists') || isActive('/transformations') ? 'active' : ''}`}>
                <span>Atelier</span>
                <ChevronDown size={13} className="dropdown-arrow-icon" />
              </span>

              {atelierDropdownOpen && (
                <div className="nav-dropdown-menu animate-fade-in">
                  <div className="dropdown-section-title">ARTISTS & LOOKBOOK</div>
                  <Link to="/artists" className="dropdown-item">Verified Mathura Artists</Link>
                  <Link to="/transformations" className="dropdown-item">Real Client Transformations</Link>
                </div>
              )}
            </div>

            {/* Partnership Dropdown */}
            <div 
              className="nav-dropdown-wrapper align-right"
              onMouseEnter={() => setPartnerDropdownOpen(true)}
              onMouseLeave={() => setPartnerDropdownOpen(false)}
            >
              <Link to="/partner" className={`nav-link-btn ${isActive('/partner') || isActive('/become-pro') || isActive('/franchise') ? 'active' : ''}`}>
                <span>Partnership</span>
                <ChevronDown size={13} className="dropdown-arrow-icon" />
              </Link>

              {partnerDropdownOpen && (
                <div className="nav-dropdown-menu align-right animate-fade-in">
                  <div className="dropdown-section-title">B2B & EXPANSION</div>
                  <Link to="/partner" className="dropdown-item">Salon & Retail Partners</Link>
                  <Link to="/become-pro" className="dropdown-item">Join as Freelance MUA</Link>
                  <Link to="/franchise" className="dropdown-item">Franchise Lounge Opportunity</Link>
                </div>
              )}
            </div>

            <Link to="/about" className={`nav-link-btn ${isActive('/about') ? 'active' : ''}`}>
              About
            </Link>

            <Link to="/contact" className={`nav-link-btn ${isActive('/contact') ? 'active' : ''}`}>
              Contact
            </Link>
          </div>

          {/* Action CTAs */}
          <div className="nav-actions">
            <button 
              onClick={onOpenAccount} 
              className="icon-action-btn"
              title="Customer Account & Booking History"
            >
              <User size={19} />
            </button>

            <button 
              onClick={onOpenCart} 
              className="cart-action-btn" 
              title="View Beauty Bag"
            >
              <ShoppingBag size={19} />
              {cartCount > 0 && <span className="cart-badge-count">{cartCount}</span>}
            </button>

            <Link 
              to="/book" 
              className="btn btn-pink nav-book-btn"
            >
              <Calendar size={16} />
              <span>Book Appointment</span>
            </Link>

            {/* Mobile Menu Toggle */}
            <button 
              className="mobile-hamburger-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="mobile-dropdown animate-fade-in">
            <div className="mobile-links-wrap">
              <Link to="/" onClick={() => setMobileMenuOpen(false)} className="mobile-link-item">Home</Link>
              <Link to="/services" onClick={() => setMobileMenuOpen(false)} className="mobile-link-item">All Services & Prices</Link>
              <Link to="/services/women" onClick={() => setMobileMenuOpen(false)} className="mobile-sublink-item">• Women's Beauty (13 Categories)</Link>
              <Link to="/services/men" onClick={() => setMobileMenuOpen(false)} className="mobile-sublink-item">• Men's Grooming (9 Categories)</Link>
              <Link to="/services/packages" onClick={() => setMobileMenuOpen(false)} className="mobile-sublink-item">• Wedding Packages & Troupes</Link>
              <Link to="/store" onClick={() => setMobileMenuOpen(false)} className="mobile-link-item">OK MADAM Cosmetics Store</Link>
              <Link to="/artists" onClick={() => setMobileMenuOpen(false)} className="mobile-link-item">Our Makeup Artists</Link>
              <Link to="/transformations" onClick={() => setMobileMenuOpen(false)} className="mobile-link-item">Our Work & Transformations</Link>
              <Link to="/partner" onClick={() => setMobileMenuOpen(false)} className="mobile-link-item">Become a Partner</Link>
              <Link to="/become-pro" onClick={() => setMobileMenuOpen(false)} className="mobile-sublink-item">• Become a Professional (MUA / Stylist)</Link>
              <Link to="/franchise" onClick={() => setMobileMenuOpen(false)} className="mobile-link-item">Franchise Opportunities</Link>
              <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="mobile-link-item">About OK MADAM</Link>
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="mobile-link-item">Contact Us</Link>
              
              <div className="mobile-divider"></div>
              
              <Link to="/book" onClick={() => setMobileMenuOpen(false)} className="btn btn-pink w-full">
                <Calendar size={16} />
                <span>Book Appointment Now</span>
              </Link>
              
              <button onClick={() => { onOpenAdmin(); setMobileMenuOpen(false); }} className="btn btn-outline w-full mt-2">
                <SlidersHorizontal size={15} />
                <span>Admin Command Center</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
