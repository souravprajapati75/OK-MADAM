import React, { useState, useEffect } from 'react';
import { 
  Building2, 
  Store, 
  Briefcase, 
  Award, 
  PackageCheck, 
  Users, 
  ShieldCheck, 
  CheckCircle, 
  Send, 
  Sparkles 
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function PartnerPage() {
  const location = useLocation();
  const [partnerType, setPartnerType] = useState(
    location.pathname === '/become-pro' ? 'MUA' : 'SALON_OWNER'
  );
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('Mathura');
  const [businessName, setBusinessName] = useState('');
  const [experience, setExperience] = useState('3-5 Years');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (location.pathname === '/become-pro') {
      setPartnerType('MUA');
    }
  }, [location.pathname]);

  const partnerOptions = [
    {
      id: 'SALON_OWNER',
      title: 'Salon & Parlour Owners',
      icon: Store,
      badge: 'B2B Wholesale & Client Overflows',
      benefits: [
        'Wholesale margins of 20% to 35% on authentic OK MADAM beauty products',
        'Nearby client appointment overflow referrals dispatched to your salon',
        'Certified branding materials, window signage, and retail display racks',
        'Same-day replenishment delivery from our central Mathura logistics hub'
      ],
      eligibility: 'Operational beauty salon/parlor with valid trade license or Udyam registration.'
    },
    {
      id: 'MUA',
      title: 'Freelance Makeup Artists',
      icon: Briefcase,
      badge: 'High-Value Doorstep Bookings',
      benefits: [
        'Bridal and party appointments dispatched directly to your mobile app',
        'Subsidized 40% discount on OK MADAM professional vanity makeup kits',
        'Guaranteed weekly direct bank payouts (Every Monday via NEFT/IMPS)',
        'Zero client price bargaining — fixed transparent upfront customer advance'
      ],
      eligibility: 'Min 2 years demonstrable bridal/party makeup experience and clean background check.'
    },
    {
      id: 'BEAUTY_PRO',
      title: 'Beauty Professionals & Aestheticians',
      icon: Users,
      badge: 'Skincare & Draping Guild',
      benefits: [
        'Doorstep bookings for organic facials, waxing, manicures, and couture draping',
        '100% disposable hygienic kits and single-use supplies provided',
        'Continuous upskilling workshops on modern Korean and Ayurvedic treatments',
        'Flexible hours — set your own weekly availability and Mathura travel radius'
      ],
      eligibility: 'Certified beautician course diploma and validated identity KYC.'
    },
    {
      id: 'RETAILER',
      title: 'Cosmetics Product Retailers',
      icon: PackageCheck,
      badge: 'High Turn Retail Stockist',
      benefits: [
        'Stock Mathura\'s fastest growing proprietary D2C clean cosmetic brand',
        'Exclusive 1.5 km territory protection preventing price competition',
        'Comprehensive promotional POS marketing material and tester stands',
        'Low minimum order quantities (MOQ starting at ₹10,000)'
      ],
      eligibility: 'Physical retail shop in commercial Mathura market with GST registration.'
    },
    {
      id: 'DISTRIBUTOR',
      title: 'Regional Product Distributors',
      icon: Building2,
      badge: 'Zonal Master Consignments',
      benefits: [
        'Exclusive master distribution rights across designated district zones',
        'Direct factory wholesale consignment margins (up to 45%)',
        'Centralized lead forwarding of all local salon and retailer inquiries',
        'Dedicated zonal account manager and logistics freight support'
      ],
      eligibility: 'Established FMCG/cosmetics distribution network with warehousing capability.'
    },
    {
      id: 'FRANCHISE',
      title: 'Franchise Studio Partners',
      icon: Award,
      badge: 'Turnkey Luxury Lounges',
      benefits: [
        'Turnkey architectural blueprints, branded interior fit-outs, and vanity furniture',
        'Centralized brand marketing campaigns driving local booking traffic',
        'Comprehensive staff training academy and standardized operational manuals',
        'Decoupled from simple software subscriptions — formal bilateral license'
      ],
      eligibility: '600–1200 sq. ft. prime commercial floor space and investment capability.'
    }
  ];

  const currentOption = partnerOptions.find(p => p.id === partnerType) || partnerOptions[0];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone || !businessName) {
      alert('Please fill in your name, phone number, and business name.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="partner-page-wrap">
      {/* Header Banner */}
      <section className="page-header-banner">
        <div className="container">
          <span className="badge badge-pink mb-2">B2B & Professional Network</span>
          <h1 className="page-title">Become An OK MADAM Business Partner</h1>
          <p className="page-subtitle">
            Partner with Mathura's most dynamic beauty ecosystem. We offer distinct, structured programs for salon owners, freelance artists, distributors, and franchise partners with zero role confusion.
          </p>
        </div>
      </section>

      <div className="container py-5">
        {/* Category Switcher Tabs */}
        <div className="partner-role-pills-bar mb-5">
          {partnerOptions.map(opt => {
            const Icon = opt.icon;
            return (
              <button
                key={opt.id}
                onClick={() => { setPartnerType(opt.id); setSubmitted(false); }}
                className={`partner-role-pill ${partnerType === opt.id ? 'active' : ''}`}
              >
                <Icon size={16} />
                <span>{opt.title}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Partner Details & Application Split */}
        <div className="partner-split-container glass-card">
          {submitted ? (
            <div className="partner-submitted-view animate-fade-in text-center py-5">
              <CheckCircle size={56} className="text-pink mx-auto mb-3" />
              <h2>Application Registered Successfully!</h2>
              <p className="mt-2 text-grey-600" style={{ maxWidth: '580px', margin: '0 auto' }}>
                Thank you, <strong>{name}</strong>. Your expression of interest for the <strong>{currentOption.title}</strong> program in <strong>{city}</strong> has been logged in our enterprise admin queue.
              </p>
              <div className="approval-notice-box mt-4 mx-auto" style={{ maxWidth: '520px' }}>
                <ShieldCheck size={18} className="text-gold" />
                <span>All applications undergo formal verification and territory suitability review before approval. Our team will contact you within 24 business hours.</span>
              </div>
              <button onClick={() => setSubmitted(false)} className="btn btn-outline mt-4">
                Submit Another Application
              </button>
            </div>
          ) : (
            <div className="partner-content-grid">
              {/* Left Column: Benefits & Opportunity */}
              <div className="partner-info-pane">
                <span className="badge badge-gold">{currentOption.badge}</span>
                <h2 className="pane-heading mt-2">{currentOption.title}</h2>
                
                <h4 className="mt-4 mb-2">Key Commercial Benefits:</h4>
                <ul className="benefits-checklist">
                  {currentOption.benefits.map((b, i) => (
                    <li key={i}>
                      <CheckCircle size={16} className="text-pink" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="eligibility-box mt-4">
                  <strong>Partner Eligibility Criteria:</strong>
                  <p>{currentOption.eligibility}</p>
                </div>

                {partnerType === 'FRANCHISE' && (
                  <div className="mt-4">
                    <Link to="/franchise" className="btn btn-outline btn-sm">
                      <span>View Full Turnkey Franchise Blueprint</span>
                    </Link>
                  </div>
                )}
              </div>

              {/* Right Column: Application Form */}
              <div className="partner-form-pane">
                <h3 className="form-heading">Partner Application Form</h3>
                <p className="form-sub">Direct channel to OK MADAM Mathura Business Operations</p>

                <form onSubmit={handleSubmit} className="partner-interactive-form mt-3">
                  <div className="form-group">
                    <label className="form-label">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="Your official legal name" 
                      value={name} 
                      onChange={(e) => setName(e.target.value)} 
                      className="form-input" 
                      required 
                    />
                  </div>

                  <div className="grid-2 mt-2">
                    <div className="form-group">
                      <label className="form-label">Phone Number (WhatsApp Active)</label>
                      <input 
                        type="tel" 
                        placeholder="+91 98765 00000" 
                        value={phone} 
                        onChange={(e) => setPhone(e.target.value)} 
                        className="form-input" 
                        required 
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">City / Territory</label>
                      <input 
                        type="text" 
                        placeholder="e.g. Mathura / Vrindavan" 
                        value={city} 
                        onChange={(e) => setCity(e.target.value)} 
                        className="form-input" 
                        required 
                      />
                    </div>
                  </div>

                  <div className="grid-2 mt-2">
                    <div className="form-group">
                      <label className="form-label">Enterprise / Salon Name</label>
                      <input 
                        type="text" 
                        placeholder="e.g. Agarwal Beauty Care" 
                        value={businessName} 
                        onChange={(e) => setBusinessName(e.target.value)} 
                        className="form-input" 
                        required 
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Years of Experience</label>
                      <select value={experience} onChange={(e) => setExperience(e.target.value)} className="form-select">
                        <option value="1-2 Years">1 - 2 Years</option>
                        <option value="3-5 Years">3 - 5 Years</option>
                        <option value="5+ Years">5+ Years (Established)</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group mt-2">
                    <label className="form-label">Application Message / Specific Inquiries</label>
                    <textarea 
                      placeholder="Tell us about your client base, current monthly cosmetic volume, or store location..." 
                      value={message} 
                      onChange={(e) => setMessage(e.target.value)} 
                      className="form-textarea" 
                      rows={3}
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-pink btn-lg w-full mt-4">
                    <Send size={16} />
                    <span>Submit Partner Application for Review</span>
                  </button>

                  <p className="form-legal-note mt-2">
                    *Note: Submission of an application does not automatically grant partnership rights. All applications are subject to admin review and background check.
                  </p>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
