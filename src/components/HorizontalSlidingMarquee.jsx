import React, { useState } from 'react';
import { Sparkles, ArrowRight, Eye, X } from 'lucide-react';
import { ALL_BEAUTY_IMAGES } from '../data/mockData';
import { Link } from 'react-router-dom';

export default function HorizontalSlidingMarquee() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [activeFilter, setActiveFilter] = useState('ALL');

  const categories = ['ALL', 'Bridal Couture', 'Royal Grooming', 'Cocktail & Evening', 'Haldi & Mehndi', 'Proprietary Brand'];

  const filteredImages = activeFilter === 'ALL' 
    ? ALL_BEAUTY_IMAGES 
    : ALL_BEAUTY_IMAGES.filter(img => img.category === activeFilter);

  // Duplicate list to achieve seamless infinite loop
  const marqueeImages = [...filteredImages, ...filteredImages];

  return (
    <section className="horizontal-slider-section">
      <div className="container">
        <div className="section-header text-center mb-4">
          <span className="section-eyebrow">
            <Sparkles size={14} /> 360° Visual Splendor
          </span>
          <h2 className="section-title">The OK MADAM Runway Gallery</h2>
          <p className="section-subtitle">
            Explore 35+ real Indian bridal transformations, royal groom grooming, and clean couture cosmetics. Sliding continuously left to right.
          </p>

          {/* Quick Filter Pills */}
          <div className="marquee-filter-pills mt-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`filter-pill-btn ${activeFilter === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Infinite Horizontal Marquee Track (Left to Right / Continuous) */}
      <div className="marquee-slider-container">
        <div className="marquee-sliding-track">
          {marqueeImages.map((item, index) => (
            <div 
              key={`${item.id}-${index}`} 
              className="marquee-card"
              onClick={() => setSelectedImg(item)}
            >
              <div className="marquee-img-wrap">
                <img 
                  src={item.src} 
                  alt={item.title} 
                  className="marquee-img" 
                  loading="lazy" 
                />
                <div className="marquee-img-overlay">
                  <span className="marquee-card-category">{item.category}</span>
                  <h4 className="marquee-card-title">{item.title}</h4>
                  <span className="marquee-card-tag">{item.tag}</span>
                  <button className="marquee-zoom-btn">
                    <Eye size={14} />
                    <span>View Detail</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reverse Marquee Track (Right to Left) for Double Dynamic Motion */}
      <div className="marquee-slider-container reverse mt-3">
        <div className="marquee-sliding-track reverse">
          {[...marqueeImages].reverse().map((item, index) => (
            <div 
              key={`rev-${item.id}-${index}`} 
              className="marquee-card"
              onClick={() => setSelectedImg(item)}
            >
              <div className="marquee-img-wrap">
                <img 
                  src={item.src} 
                  alt={item.title} 
                  className="marquee-img" 
                  loading="lazy" 
                />
                <div className="marquee-img-overlay">
                  <span className="marquee-card-category">{item.category}</span>
                  <h4 className="marquee-card-title">{item.title}</h4>
                  <span className="marquee-card-tag">{item.tag}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container text-center mt-4">
        <Link to="/transformations" className="btn btn-outline btn-sm">
          <span>View All Client Makeovers</span>
          <ArrowRight size={14} />
        </Link>
      </div>

      {/* Lightbox Preview Modal */}
      {selectedImg && (
        <div className="service-modal-overlay animate-fade-in" onClick={() => setSelectedImg(null)}>
          <div className="service-modal-content p-4 text-center max-w-lg" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedImg(null)}>
              <X size={20} />
            </button>
            <div className="lightbox-img-wrap mb-3">
              <img src={selectedImg.src} alt={selectedImg.title} className="lightbox-large-img" />
            </div>
            <span className="badge badge-pink mb-1">{selectedImg.category}</span>
            <h3 className="font-heading text-xl mt-1">{selectedImg.title}</h3>
            <p className="text-sm text-grey-600 mt-1">{selectedImg.tag}</p>
            <div className="mt-4 flex justify-center gap-3">
              <Link to="/book" className="btn btn-pink btn-sm">
                <span>Book This Look</span>
              </Link>
              <button onClick={() => setSelectedImg(null)} className="btn btn-outline btn-sm">
                <span>Close</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
