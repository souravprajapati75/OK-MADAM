import React from 'react';
import { 
  Star, 
  ShieldCheck, 
  Award, 
  MapPin, 
  CheckCircle, 
  Calendar, 
  Sparkles 
} from 'lucide-react';
import { CERTIFIED_ARTISTS } from '../data/mockData';

export default function ArtistNetwork({ onBookSpecificArtist }) {
  return (
    <section id="artists" className="artists-section">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">
            <Sparkles size={14} />
            <span>The Certified Mathura Talent Network</span>
          </div>
          <h2 className="section-title">Meet Our Master Makeup Artists</h2>
          <p className="section-subtitle">
            Every OK Madam professional undergoes strict government identity vetting, background checks, hygiene audits, and hands-on artistry certification before entering your home.
          </p>
        </div>

        <div className="grid-3 artists-grid">
          {CERTIFIED_ARTISTS.map((artist) => (
            <div key={artist.id} className="artist-card glass-card">
              <div className="artist-img-frame">
                <img src={artist.image} alt={artist.name} className="artist-img" />
                <div className="artist-verified-badge">
                  <ShieldCheck size={14} />
                  <span>Vetted & Certified</span>
                </div>
              </div>

              <div className="artist-body">
                <div className="artist-rating-row">
                  <div className="artist-stars">
                    <Star size={14} fill="#C5A059" color="#C5A059" />
                    <strong>{artist.rating}</strong>
                    <span>({artist.reviews} reviews)</span>
                  </div>
                  <span className="artist-exp-badge">{artist.experience}</span>
                </div>

                <h3 className="artist-name">{artist.name}</h3>
                <span className="artist-role">{artist.title}</span>

                <div className="artist-speciality-box">
                  <span className="spec-label">Artistry Signature:</span>
                  <p className="spec-value">{artist.speciality}</p>
                </div>

                <div className="artist-locality-row">
                  <MapPin size={14} className="text-pink" />
                  <span>Serving: {artist.area}</span>
                </div>

                <div className="artist-stats-row">
                  <div>
                    <strong>{artist.completedJobs}+</strong>
                    <span>Successful Makeovers</span>
                  </div>
                  <div>
                    <strong>100%</strong>
                    <span>Sanitized Kit Audit</span>
                  </div>
                </div>

                <button 
                  onClick={() => onBookSpecificArtist(artist)}
                  className="btn btn-outline artist-book-btn"
                >
                  <Calendar size={15} />
                  <span>Request {artist.name.split(' ')[0]} for Service</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
