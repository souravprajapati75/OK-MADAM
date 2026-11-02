import React from 'react';
import { 
  Sparkles, 
  ShieldCheck, 
  Star, 
  Calendar, 
  ShoppingBag, 
  MapPin, 
  Clock, 
  HeartHandshake 
} from 'lucide-react';

export default function Hero({ onOpenBooking, onExploreStore }) {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        {/* Left Editorial Copy */}
        <div className="hero-content">
          <div className="hero-eyebrow-badge">
            <Sparkles size={14} className="sparkle-gold-icon" />
            <span>Mathura's Premier Beauty & Makeup Atelier</span>
          </div>

          <h1 className="hero-title">
            The Science of Radiance. <br />
            <span className="hero-title-italic">The Art of You.</span>
          </h1>

          <p className="hero-description">
            Experience <strong>OK MADAM</strong> — where high-performance proprietary Indian cosmetics meet certified bridal, groom, and party makeover artists directly at your doorstep or wedding venue in Mathura.
          </p>

          {/* Dual Action CTAs */}
          <div className="hero-actions-group">
            <button 
              onClick={onOpenBooking} 
              className="btn btn-pink btn-lg hero-cta-btn"
            >
              <Calendar size={18} />
              <span>Book An Artist at Home</span>
            </button>

            <button 
              onClick={onExploreStore} 
              className="btn btn-outline btn-lg hero-cta-secondary"
            >
              <ShoppingBag size={18} />
              <span>Shop OK Madam Cosmetics</span>
            </button>
          </div>

          {/* Mathura Trust Grid */}
          <div className="hero-trust-grid">
            <div className="trust-card">
              <ShieldCheck size={20} className="trust-icon" />
              <div>
                <h4>100% Sanitized SOPs</h4>
                <p>Sealed single-use palettes & sterilized brushes</p>
              </div>
            </div>

            <div className="trust-card">
              <Sparkles size={20} className="trust-icon" />
              <div>
                <h4>Proprietary Formulas</h4>
                <p>Cruelty-free, HD dewy finish made for Indian skin</p>
              </div>
            </div>

            <div className="trust-card">
              <MapPin size={20} className="trust-icon" />
              <div>
                <h4>Mathura Coverage</h4>
                <p>Zero surge pricing across all Mathura municipal zones</p>
              </div>
            </div>

            <div className="trust-card">
              <Star size={20} className="trust-icon text-gold" />
              <div>
                <h4>Verified MUAs</h4>
                <p>Background checked, certified & vetted artists</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Visual Composition */}
        <div className="hero-visual-wrapper">
          <div className="hero-card-main">
            <img 
              src="/images/hero-luxury-cosmetics.jpg" 
              alt="OK MADAM Luxury Cosmetics & High Perfumery" 
              className="hero-main-img"
            />
            <div className="hero-card-overlay">
              <div className="overlay-badge">
                <span className="dot-gold"></span>
                <span>Signature Trouseau Collection</span>
              </div>
              <h3 className="overlay-heading">Formulated for Indian Weddings</h3>
            </div>
          </div>

          {/* Floating Luxury Model Badges */}
          <div className="hero-floating-card floating-card-top">
            <img 
              src="/images/model-party-dewy.png" 
              alt="Dewy Party Glam Look" 
              className="floating-avatar"
            />
            <div className="floating-info">
              <span className="floating-title">Dewy Party HD Glam</span>
              <div className="floating-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={11} fill="#C5A059" color="#C5A059" />
                ))}
                <span className="floating-rating">4.95</span>
              </div>
              <span className="floating-locality">Krishna Nagar, Mathura</span>
            </div>
          </div>

          <div className="hero-floating-card floating-card-bottom">
            <img 
              src="/images/model-bridal-royal.jpg" 
              alt="Royal North Indian Bridal Look" 
              className="floating-avatar"
            />
            <div className="floating-info">
              <span className="floating-title">Royal Airbrush Bridal</span>
              <span className="floating-sub">3.5 Hr Couture Treatment</span>
              <div className="floating-tag">Booked for Upcoming Muhurat</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
