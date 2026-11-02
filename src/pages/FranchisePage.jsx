import React, { useState } from 'react';
import { 
  Award, 
  Store, 
  Building2, 
  ShieldCheck, 
  CheckCircle, 
  MapPin, 
  TrendingUp, 
  Send, 
  ArrowRight 
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FranchisePage() {
  const [applicantName, setApplicantName] = useState('');
  const [phone, setPhone] = useState('');
  const [cityCatchment, setCityCatchment] = useState('Mathura (Krishna Nagar / Highway)');
  const [floorArea, setFloorArea] = useState('600 - 1000 sq. ft.');
  const [investmentBracket, setInvestmentBracket] = useState('₹15 Lakhs - ₹25 Lakhs');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!applicantName || !phone) {
      alert('Please fill in your name and phone number.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="franchise-page-wrap">
      {/* Header Banner */}
      <section className="page-header-banner">
        <div className="container">
          <span className="badge badge-charcoal mb-2">Turnkey Business Opportunity</span>
          <h1 className="page-title">OK MADAM Franchise Studios</h1>
          <p className="page-subtitle">
            Partner with an established beauty and cosmetics brand. Open an experiential OK MADAM Beauty & Bridal Lounge in your city with standardized interior design, product exclusivity, and centralized marketing.
          </p>
        </div>
      </section>

      {/* Flagship Interior Showcase */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="franchise-concept-grid">
            <div className="concept-img-pane">
              <img 
                src="/images/franchise-retail-store.jpg" 
                alt="OK MADAM Luxury Retail Studio" 
                className="franchise-large-img" 
              />
              <span className="concept-caption">
                OK MADAM Standardized Experiential Studio & Retail Display (Mathura Hub Concept)
              </span>
            </div>

            <div className="concept-details-pane">
              <span className="section-eyebrow">
                <Store size={14} /> The Experiential Model
              </span>
              <h2 className="section-title">A Modern Beauty Destination</h2>
              <p className="lead-paragraph">
                Unlike traditional neighborhood parlors, an <strong>OK MADAM Studio Lounge</strong> combines a dedicated retail cosmetics boutique with luxury private bridal suites, hair ateliers, and groom grooming vanity stations.
              </p>

              <div className="franchise-metrics-cards mt-4">
                <div className="f-metric-card glass-card">
                  <span className="f-num">600 - 1200</span>
                  <span className="f-label">Sq. Ft. Carpet Area</span>
                  <p>Prime ground-floor or high-street commercial catchment.</p>
                </div>

                <div className="f-metric-card glass-card">
                  <span className="f-num">Dual Revenue</span>
                  <span className="f-label">Services + Retail</span>
                  <p>Earn both from high-ticket bridal bookings and cosmetic sales.</p>
                </div>

                <div className="f-metric-card glass-card">
                  <span className="f-num">Turnkey</span>
                  <span className="f-label">Fit-Out Support</span>
                  <p>Full architectural drawings, rose gold vanity fixtures, and displays.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operational Support & Sourcing */}
      <section className="section-padding bg-pink-soft">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-eyebrow">
              <ShieldCheck size={14} /> Comprehensive Partner Support
            </span>
            <h2 className="section-title">What OK MADAM Provides</h2>
            <p className="section-subtitle">
              We empower our franchise partners with end-to-end operational, logistical, and technical backing.
            </p>
          </div>

          <div className="grid-3 franchise-perks-grid mt-4">
            <div className="perk-card glass-card">
              <Building2 size={28} className="text-pink mb-3" />
              <h4>Centralized Product Supply</h4>
              <p>Direct supply of OK MADAM proprietary foundations, serums, kits, and sterilized single-use tools at subsidized master partner transfer rates.</p>
            </div>

            <div className="perk-card glass-card">
              <Award size={28} className="text-gold mb-3" />
              <h4>Staff Training & SOP Academy</h4>
              <p>Rigorous onboarding of your salon managers, makeup artists, and hair technicians at the OK MADAM Artistry Academy.</p>
            </div>

            <div className="perk-card glass-card">
              <TrendingUp size={28} className="text-pink mb-3" />
              <h4>Marketing & Booking Dispatch</h4>
              <p>Local digital ad campaigns, social media promotion, and direct overflow booking dispatches from our central web and app booking engine.</p>
            </div>
          </div>

          {/* Legal Separation Notice */}
          <div className="franchise-disclaimer-card glass-card mt-5">
            <ShieldCheck size={20} className="text-gold" />
            <div>
              <strong>Important Franchise Transparency Notice:</strong>
              <p>
                Subscription to OK MADAM partner tools does not automatically grant a franchise. All franchise licenses require bilateral legal disclosure, criminal background vetting, catchment site approval, and executed franchise agreements. OK Madam does not promise or guarantee speculative income or returns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="section-padding bg-white">
        <div className="container" style={{ maxWidth: '780px' }}>
          <div className="franchise-form-card glass-card p-4">
            <div className="section-header text-center mb-4">
              <span className="section-eyebrow">
                <Send size={14} /> Expression of Interest
              </span>
              <h2 className="section-title" style={{ fontSize: '1.85rem' }}>Franchise Application Form</h2>
              <p className="section-subtitle">Submit your commercial space and financial profile for Mathura or regional expansion review.</p>
            </div>

            {submitted ? (
              <div className="text-center py-5">
                <CheckCircle size={56} className="text-pink mx-auto mb-3" />
                <h3>Expression of Interest Received!</h3>
                <p className="mt-2 text-grey-600">
                  Thank you, <strong>{applicantName}</strong>. Our franchise expansion director will review your commercial location parameters for <strong>{cityCatchment}</strong> and reach out within 48 business hours.
                </p>
                <button onClick={() => setSubmitted(false)} className="btn btn-outline mt-4">
                  Submit Another Inflow
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="partner-form">
                <div className="grid-2">
                  <div className="form-group">
                    <label className="form-label">Principal Applicant Name</label>
                    <input 
                      type="text" 
                      placeholder="Your full legal name" 
                      value={applicantName} 
                      onChange={(e) => setApplicantName(e.target.value)} 
                      className="form-input" 
                      required 
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Contact Mobile (WhatsApp)</label>
                    <input 
                      type="tel" 
                      placeholder="+91 98765 00000" 
                      value={phone} 
                      onChange={(e) => setPhone(e.target.value)} 
                      className="form-input" 
                      required 
                    />
                  </div>
                </div>

                <div className="grid-2 mt-2">
                  <div className="form-group">
                    <label className="form-label">Proposed City & Commercial Area</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Krishna Nagar Main Road, Mathura" 
                      value={cityCatchment} 
                      onChange={(e) => setCityCatchment(e.target.value)} 
                      className="form-input" 
                      required 
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Available Commercial Space</label>
                    <select value={floorArea} onChange={(e) => setFloorArea(e.target.value)} className="form-select">
                      <option value="400 - 600 sq. ft. (Express Studio)">400 - 600 sq. ft. (Express Studio)</option>
                      <option value="600 - 1000 sq. ft. (Flagship Lounge)">600 - 1000 sq. ft. (Flagship Lounge)</option>
                      <option value="1000+ sq. ft. (Grand Atelier)">1000+ sq. ft. (Grand Atelier)</option>
                    </select>
                  </div>
                </div>

                <div className="form-group mt-2">
                  <label className="form-label">Planned Investment Capability</label>
                  <select value={investmentBracket} onChange={(e) => setInvestmentBracket(e.target.value)} className="form-select">
                    <option value="₹10 Lakhs - ₹15 Lakhs">₹10 Lakhs - ₹15 Lakhs</option>
                    <option value="₹15 Lakhs - ₹25 Lakhs">₹15 Lakhs - ₹25 Lakhs</option>
                    <option value="₹25 Lakhs+">₹25 Lakhs+</option>
                  </select>
                </div>

                <div className="form-group mt-2">
                  <label className="form-label">Business Background & Experience in Beauty/Retail</label>
                  <textarea 
                    placeholder="Briefly describe your existing commercial experience or commercial property ownership..." 
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)} 
                    className="form-textarea" 
                    rows={3}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-lg w-full mt-4">
                  <Award size={16} />
                  <span>Submit Formal Franchise Expression of Interest</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
