import React, { useState } from 'react';
import { 
  Star, 
  ShieldCheck, 
  Award, 
  MapPin, 
  CheckCircle, 
  Calendar, 
  Sparkles, 
  Briefcase, 
  Send 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { CERTIFIED_ARTISTS, MATHURA_AREAS } from '../data/mockData';

export default function ArtistsPage({ onSelectServiceToBook }) {
  const navigate = useNavigate();
  const [selectedArtistPortfolio, setSelectedArtistPortfolio] = useState(null);
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [applySubmitted, setApplySubmitted] = useState(false);

  // MUA Form State
  const [muaName, setMuaName] = useState('');
  const [muaPhone, setMuaPhone] = useState('');
  const [muaExp, setMuaExp] = useState('3-5 Years');
  const [muaSkills, setMuaSkills] = useState('Bridal HD & Airbrush Artistry');
  const [muaPincode, setMuaPincode] = useState('281001');

  const handleBookArtist = (artist) => {
    navigate('/book');
  };

  const handleApplySubmit = (e) => {
    e.preventDefault();
    setApplySubmitted(true);
  };

  return (
    <div className="artists-page-wrap">
      {/* Header Banner */}
      <section className="page-header-banner">
        <div className="container">
          <span className="badge badge-gold mb-2">Mathura Guild of Master Artistry</span>
          <h1 className="page-title">Our Certified Makeup Artists</h1>
          <p className="page-subtitle">
            Every OK MADAM professional undergoes government Aadhaar KYC verification, police background checks, hygiene sterilization audits, and hands-on artistry trials before entering your home.
          </p>
          <div className="mt-4">
            <button onClick={() => setShowApplyModal(true)} className="btn btn-pink">
              <Briefcase size={16} />
              <span>Join As A Professional MUA</span>
            </button>
          </div>
        </div>
      </section>

      {/* Artists Roster Grid */}
      <div className="container py-5">
        <div className="grid-2 artists-detail-grid">
          {CERTIFIED_ARTISTS.map(artist => (
            <div key={artist.id} className="artist-extended-card glass-card">
              <div className="artist-header-row">
                <div className="artist-main-avatar-wrap">
                  <img src={artist.image} alt={artist.name} className="artist-large-avatar" />
                  <div className="artist-verified-pill">
                    <ShieldCheck size={14} />
                    <span>Verified MUA</span>
                  </div>
                </div>

                <div className="artist-intro-details">
                  <div className="rating-pill-row">
                    <div className="stars-box">
                      <Star size={14} fill="#C5A059" color="#C5A059" />
                      <strong>{artist.rating}</strong>
                      <span>({artist.reviews} verified reviews)</span>
                    </div>
                    <span className="exp-badge">{artist.experience} Experience</span>
                  </div>

                  <h3 className="artist-full-name mt-1">{artist.name}</h3>
                  <span className="artist-full-title">{artist.title}</span>

                  <div className="artist-loc-row mt-2">
                    <MapPin size={14} className="text-pink" />
                    <span>Serving: <strong>{artist.area}</strong></span>
                  </div>

                  <div className="artist-skills-box mt-3">
                    <span className="skills-label">Specialist Focus:</span>
                    <p className="skills-text">{artist.speciality}</p>
                  </div>
                </div>
              </div>

              {/* Portfolio Preview Gallery */}
              <div className="artist-portfolio-section mt-3">
                <span className="portfolio-label">Recent Client Transformations:</span>
                <div className="portfolio-thumbnails-row mt-2">
                  {artist.portfolio.map((imgUrl, i) => (
                    <div 
                      key={i} 
                      className="portfolio-thumb-wrap"
                      onClick={() => setSelectedArtistPortfolio({ name: artist.name, imgUrl })}
                    >
                      <img src={imgUrl} alt={`${artist.name} portfolio ${i + 1}`} className="portfolio-thumb" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="artist-card-action-bar mt-4">
                <div className="availability-indicator">
                  <span className="live-dot"></span>
                  <span>Available for Upcoming Mathura Muhurats</span>
                </div>

                <button onClick={() => handleBookArtist(artist)} className="btn btn-pink">
                  <Calendar size={15} />
                  <span>Book {artist.name.split(' ')[0]}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal for Portfolio Inspection */}
      {selectedArtistPortfolio && (
        <div className="modal-backdrop" onClick={() => setSelectedArtistPortfolio(null)}>
          <div className="modal-sheet glass-card text-center" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{selectedArtistPortfolio.name}'s Real Client Portfolio</h3>
              <button onClick={() => setSelectedArtistPortfolio(null)} className="modal-close-btn">✕</button>
            </div>
            <div className="modal-body">
              <img 
                src={selectedArtistPortfolio.imgUrl} 
                alt="Client Transformation" 
                style={{ width: '100%', maxHeight: '480px', objectFit: 'cover', borderRadius: '12px' }}
              />
              <span className="text-xs text-grey-600 mt-2 block">100% Genuine OK MADAM Client Makeover</span>
            </div>
          </div>
        </div>
      )}

      {/* MUA Application Modal */}
      {showApplyModal && (
        <div className="modal-backdrop" onClick={() => setShowApplyModal(false)}>
          <div className="modal-sheet glass-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <span className="badge badge-pink">MUA Onboarding</span>
                <h3 className="mt-1">Apply to Join OK MADAM Talent Guild</h3>
              </div>
              <button onClick={() => setShowApplyModal(false)} className="modal-close-btn">✕</button>
            </div>

            <div className="modal-body">
              {applySubmitted ? (
                <div className="text-center py-4">
                  <CheckCircle size={48} className="text-pink mx-auto mb-3" />
                  <h3>Application Submitted!</h3>
                  <p className="text-grey-600 mt-2">
                    Our Mathura regional MUA onboarding supervisor will verify your details and schedule your hygiene & artistry trial within 24 hours.
                  </p>
                  <button onClick={() => { setApplySubmitted(false); setShowApplyModal(false); }} className="btn btn-pink mt-4">
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApplySubmit} className="partner-form">
                  <div className="form-group">
                    <label className="form-label">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="Your official legal name" 
                      value={muaName} 
                      onChange={(e) => setMuaName(e.target.value)} 
                      className="form-input" 
                      required 
                    />
                  </div>

                  <div className="form-group mt-2">
                    <label className="form-label">WhatsApp Mobile Number</label>
                    <input 
                      type="tel" 
                      placeholder="+91 98765 00000" 
                      value={muaPhone} 
                      onChange={(e) => setMuaPhone(e.target.value)} 
                      className="form-input" 
                      required 
                    />
                  </div>

                  <div className="grid-2 mt-2">
                    <div className="form-group">
                      <label className="form-label">Experience</label>
                      <select value={muaExp} onChange={(e) => setMuaExp(e.target.value)} className="form-select">
                        <option value="1-2 Years">1 - 2 Years</option>
                        <option value="3-5 Years">3 - 5 Years</option>
                        <option value="5+ Years">5+ Years (Lead Artist)</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Primary Skill</label>
                      <select value={muaSkills} onChange={(e) => setMuaSkills(e.target.value)} className="form-select">
                        <option value="Bridal HD & Airbrush Artistry">Bridal HD & Airbrush</option>
                        <option value="Party & Evening Glam">Party & Evening Glam</option>
                        <option value="Men Groom Styling & Safa">Men Groom Styling & Safa</option>
                        <option value="Saree Draping & Hair Design">Saree Draping & Hair</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group mt-2">
                    <label className="form-label">Mathura Preferred Territory</label>
                    <select value={muaPincode} onChange={(e) => setMuaPincode(e.target.value)} className="form-select">
                      {MATHURA_AREAS.map(a => (
                        <option key={a.id} value={a.name}>{a.name} — Pincode {a.pincode} ({a.zone})</option>
                      ))}
                    </select>
                  </div>

                  <button type="submit" className="btn btn-pink w-full mt-4">
                    <Send size={15} />
                    <span>Submit Verification Request</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
