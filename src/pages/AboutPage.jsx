import React from 'react';
import { 
  Sparkles, 
  Award, 
  MapPin, 
  ShieldCheck, 
  HeartHandshake, 
  Building2, 
  TrendingUp, 
  Users, 
  CheckCircle2, 
  ArrowRight,
  Phone,
  Mail,
  Crown
} from 'lucide-react';
import { Link } from 'react-router-dom';
import FounderVisionSection from '../components/FounderVisionSection';

export default function AboutPage() {
  return (
    <div className="about-page-wrap">
      {/* Header Banner */}
      <section className="page-header-banner">
        <div className="container">
          <span className="badge badge-gold mb-2">Heritage Meets Science</span>
          <h1 className="page-title">The Story of OK MADAM</h1>
          <p className="page-subtitle">
            Born in Mathura, Uttar Pradesh — the land of eternal celebration and aesthetic beauty — OK MADAM is crafting India's premier integrated cosmetics brand and verified home beauty service atelier.
          </p>
        </div>
      </section>

      {/* Brand Narrative Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="about-split-grid">
            <div className="about-narrative-text">
              <span className="section-eyebrow">
                <Sparkles size={14} /> Our Brand Philosophy
              </span>
              <h2 className="section-title">Where Tradition Meets Modern Dermatological Science</h2>
              <p className="lead-paragraph">
                For centuries, Mathura and the Brij region have celebrated the poetry of adornment (*Solah Shringar*) — the reverence of natural fragrances, sandalwood, rose water, and auspicious turmeric.
              </p>
              <p className="body-paragraph">
                Yet modern Indian brides, grooms, and festival attendees often face a painful choice: unreliable freelance salon staff with questionable hygiene, or exorbitant metropolitan agencies with inflated fees. 
              </p>
              <p className="body-paragraph">
                <strong>OK MADAM</strong> was established to bridge this divide. We engineer our own clean, high-performance cosmetics formulated specifically for Indian climates and skin undertones, and pair them with rigorously verified, background-checked professional makeup artists delivered directly to your doorstep.
              </p>

              <div className="founder-quote-box glass-card mt-4 p-4 border-gold">
                <div className="founder-mini-profile-row flex items-center gap-3 mb-3">
                  <img 
                    src="/images/sourav-prajapati-founder.jpg" 
                    alt="Sourav Prajapati — Founder & CEO" 
                    className="founder-mini-thumb"
                    style={{ width: '64px', height: '64px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #C5A059' }}
                  />
                  <div>
                    <h4 className="font-bold text-base mb-0" style={{ color: '#2B1E1E' }}>Sourav Prajapati</h4>
                    <span className="text-xs text-pink font-semibold uppercase tracking-wider">Founder & Chief Executive Officer (CEO)</span>
                    <div className="flex gap-3 text-xs text-grey-600 mt-1">
                      <a href="tel:7505754957" className="hover:text-pink flex items-center gap-1">
                        <Phone size={11} className="text-pink" /> +91 7505754957
                      </a>
                      <a href="mailto:souravprajapati89@gmail.com" className="hover:text-pink flex items-center gap-1">
                        <Mail size={11} className="text-gold" /> souravprajapati89@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
                <p className="quote-text italic text-sm text-grey-700">
                  "Har customer ki 100% khushi, satisfaction aur trust hi OK MADAM ki neev hai. Hum Mathura se shuru hokar pure Bharat me proprietary high-quality cosmetics aur verified artists ke sath har ghar me luxury makeup service layenge."
                </p>
                <div className="quote-author mt-2 text-xs font-semibold text-grey-500">
                  <strong>Sourav Prajapati</strong> • Founder & CEO, OK MADAM Beauty Technologies
                </div>
              </div>
            </div>

            <div className="about-narrative-visual">
              <div className="about-img-frame">
                <img src="/images/luxury-salon-vanity.jpg" alt="OK MADAM Luxury Studio Lounge" className="about-main-img" />
                <div className="about-stat-chip">
                  <MapPin size={16} className="text-pink" />
                  <div>
                    <strong>Mathura Flagship</strong>
                    <span>Krishna Nagar Headquarters</span>
                  </div>
                </div>
              </div>

              {/* Official Brand Emblem Feature */}
              <div className="brand-emblem-feature-card glass-card mt-4">
                <img 
                  src="/images/ok-madam-logo-hq.jpg" 
                  alt="OK MADAM Official Emblem" 
                  className="emblem-showcase-img" 
                />
                <div className="emblem-info-text">
                  <span className="emblem-title">The Official OK MADAM Emblem</span>
                  <p className="emblem-motto">"Be Beautiful • Be Confident"</p>
                  <span className="emblem-desc">
                    Adorned with the royal golden crown and graceful silhouette — reflecting our dedication to empowering every client with poise, dignity, and radiant confidence.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 4 Business Pillars */}
      <section className="section-padding bg-pink-soft">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-eyebrow">
              <Building2 size={14} /> Our Integrated Ecosystem
            </span>
            <h2 className="section-title">The Four Pillars of OK MADAM</h2>
            <p className="section-subtitle">
              A comprehensive business architecture designed for long-term customer trust, professional livelihood, and scalable regional growth.
            </p>
          </div>

          <div className="grid-4 pillars-grid mt-4">
            <div className="pillar-card glass-card">
              <div className="pillar-num">01</div>
              <h4>Proprietary Brand Cosmetics</h4>
              <p>Formulated, dermatologically tested clean cosmetic lines and salon-grade professional kits manufactured under the OK MADAM label.</p>
            </div>

            <div className="pillar-card glass-card">
              <div className="pillar-num">02</div>
              <h4>Doorstep & Studio Bookings</h4>
              <p>On-demand and scheduled bridal, groom, and party makeover services dispatched to your home or wedding venue in Mathura.</p>
            </div>

            <div className="pillar-card glass-card">
              <div className="pillar-num">03</div>
              <h4>Certified Artist Network</h4>
              <p>An elite guild of independent MUAs and stylists provided with subsidized pro kits, skill certification, and weekly direct payouts.</p>
            </div>

            <div className="pillar-card glass-card">
              <div className="pillar-num">04</div>
              <h4>Franchise & Retail Partners</h4>
              <p>Turnkey experiential beauty lounges and B2B wholesale supply for regional salon owners seeking authentic product margins.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Experience & Growth Milestones (Editable Sample Data) */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-eyebrow">
              <TrendingUp size={14} /> Milestones & Growth Trajectory
            </span>
            <h2 className="section-title">Experience & Achievements</h2>
            <p className="section-subtitle">
              *Sample benchmarks representing our Mathura pilot achievements and immediate expansion targets. (Configurable in Admin)
            </p>
          </div>

          <div className="grid-4 milestones-grid mt-4">
            <div className="milestone-card glass-card">
              <h3 className="milestone-stat text-pink">500+</h3>
              <span className="milestone-label">Makeovers Delivered</span>
              <p className="milestone-sub">Bridal, Groom & Festive Appointments in Mathura*</p>
            </div>

            <div className="milestone-card glass-card">
              <h3 className="milestone-stat text-gold">28+</h3>
              <span className="milestone-label">Certified MUAs</span>
              <p className="milestone-sub">100% Background & Police Verified Artists*</p>
            </div>

            <div className="milestone-card glass-card">
              <h3 className="milestone-stat text-pink">12+</h3>
              <span className="milestone-label">Proprietary Formulations</span>
              <p className="milestone-sub">Cruelty-Free, Paraben-Free Indian Complexion SKUs*</p>
            </div>

            <div className="milestone-card glass-card">
              <h3 className="milestone-stat text-gold">100%</h3>
              <span className="milestone-label">Sanitization Audit</span>
              <p className="milestone-sub">Sterilized single-use tools & autoclaved brushes*</p>
            </div>
          </div>

          <div className="demo-price-disclaimer-pill text-center mx-auto mt-4" style={{ maxWidth: '600px' }}>
            <span>*Note: The above statistics are editable placeholder metrics for our pilot launch phase.</span>
          </div>
        </div>
      </section>

      {/* Founder & Executive Leadership Spotlight */}
      <FounderVisionSection />

      {/* Future Expansion Map */}
      <section className="section-padding bg-pink-soft">
        <div className="container">
          <div className="expansion-banner glass-card">
            <div className="expansion-text">
              <span className="badge badge-charcoal">Multi-City Scalability</span>
              <h3 className="mt-2">Our Expansion Roadmap: From Mathura to Pan-India</h3>
              <p className="mt-2">
                Following the successful launch in Mathura (Krishna Nagar, Dampier Nagar, Cantt, Highway, Refinery), OK MADAM is initiating Phase 2 expansion across neighboring cultural hubs including <strong>Vrindavan, Agra, Aligarh, Hathras, and Bharatpur</strong> through franchise studios and authorized salon retail stockists.
              </p>
              <div className="expansion-actions mt-4">
                <Link to="/franchise" className="btn btn-pink">
                  <span>Explore Franchise Opportunities</span>
                  <ArrowRight size={16} />
                </Link>
                <Link to="/contact" className="btn btn-outline ml-3">
                  <span>Contact Mathura Headquarters</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
