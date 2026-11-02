import React, { useState } from 'react';
import { Sparkles, ArrowRight, Heart, Star, Calendar } from 'lucide-react';
import { ALL_BEAUTY_IMAGES } from '../data/mockData';
import { Link } from 'react-router-dom';

export default function VerticalSlidingRunway() {
  // Divide images into 3 distinct vertical columns (12 images each)
  const col1 = ALL_BEAUTY_IMAGES.slice(0, 12);
  const col2 = ALL_BEAUTY_IMAGES.slice(12, 24);
  const col3 = ALL_BEAUTY_IMAGES.slice(24, 36);

  // Duplicate for seamless vertical infinite animation
  const column1Images = [...col1, ...col1];
  const column2Images = [...col2, ...col2];
  const column3Images = [...col3, ...col3];

  return (
    <section className="vertical-runway-section section-padding bg-pink-soft">
      <div className="container">
        <div className="section-header text-center mb-5">
          <span className="section-eyebrow">
            <Sparkles size={14} /> Runway Artistry in Motion
          </span>
          <h2 className="section-title">The Vertical Beauty Stream</h2>
          <p className="section-subtitle">
            Immerse yourself in our continuous vertical lookbook. From dramatic royal pheras to clean groom architecture and satin lipsticks.
          </p>
          <div className="pause-indicator-pill mt-2">
            <span>✨ Hover over any column to inspect that stream — other columns continue gliding smoothly!</span>
          </div>
        </div>

        {/* 3-Column Vertical Runway Stage - Individual Column Pause */}
        <div className="vertical-runway-stage">
          {/* Column 1: Scrolling Downwards */}
          <div className="vertical-runway-column scroll-down">
            <div className="vertical-scroll-track down">
              {column1Images.map((item, idx) => (
                <div key={`col1-${idx}`} className="runway-stream-card glass-card">
                  <div className="stream-img-box">
                    <img src={item.src} alt={item.title} className="stream-img" loading="lazy" />
                    <span className="stream-badge-category">{item.category}</span>
                  </div>
                  <div className="stream-body">
                    <h4>{item.title}</h4>
                    <span className="stream-tag-text">{item.tag}</span>
                    <div className="stream-footer mt-2">
                      <div className="stream-stars">
                        {[...Array(5)].map((_, s) => (
                          <Star key={s} size={11} fill="#C5A059" color="#C5A059" />
                        ))}
                      </div>
                      <Link to="/book" className="stream-book-link">
                        <span>Book Look</span>
                        <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Scrolling Upwards (Opposite Motion) */}
          <div className="vertical-runway-column scroll-up">
            <div className="vertical-scroll-track up">
              {column2Images.map((item, idx) => (
                <div key={`col2-${idx}`} className="runway-stream-card glass-card highlight-card">
                  <div className="stream-img-box">
                    <img src={item.src} alt={item.title} className="stream-img" loading="lazy" />
                    <span className="stream-badge-category royal">{item.category}</span>
                  </div>
                  <div className="stream-body">
                    <h4>{item.title}</h4>
                    <span className="stream-tag-text">{item.tag}</span>
                    <div className="stream-footer mt-2">
                      <div className="stream-stars">
                        {[...Array(5)].map((_, s) => (
                          <Star key={s} size={11} fill="#C5A059" color="#C5A059" />
                        ))}
                      </div>
                      <Link to="/book" className="stream-book-link">
                        <span>Book Look</span>
                        <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Scrolling Downwards */}
          <div className="vertical-runway-column scroll-down">
            <div className="vertical-scroll-track down">
              {column3Images.map((item, idx) => (
                <div key={`col3-${idx}`} className="runway-stream-card glass-card">
                  <div className="stream-img-box">
                    <img src={item.src} alt={item.title} className="stream-img" loading="lazy" />
                    <span className="stream-badge-category">{item.category}</span>
                  </div>
                  <div className="stream-body">
                    <h4>{item.title}</h4>
                    <span className="stream-tag-text">{item.tag}</span>
                    <div className="stream-footer mt-2">
                      <div className="stream-stars">
                        {[...Array(5)].map((_, s) => (
                          <Star key={s} size={11} fill="#C5A059" color="#C5A059" />
                        ))}
                      </div>
                      <Link to="/book" className="stream-book-link">
                        <span>Book Look</span>
                        <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Action Call to Action */}
        <div className="text-center mt-5">
          <Link to="/book" className="btn btn-pink btn-lg">
            <Calendar size={18} />
            <span>Book Your Desired Look with Mathura MUA</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
