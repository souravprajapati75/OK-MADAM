import React, { useState } from 'react';
import { 
  Briefcase, 
  ShieldCheck, 
  CheckCircle, 
  Award, 
  Sparkles, 
  DollarSign, 
  MapPin, 
  Send, 
  ArrowRight,
  Star,
  Clock,
  Heart
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { MATHURA_AREAS } from '../data/mockData';

export default function BecomeProPage() {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [experienceYears, setExperienceYears] = useState('3-5 Years');
  const [primarySkills, setPrimarySkills] = useState(['Bridal Makeup', 'Airbrush']);
  const [coveredArea, setCoveredArea] = useState('All Mathura (20+ Localities)');
  const [portfolioLink, setPortfolioLink] = useState('');
  const [hasOwnKit, setHasOwnKit] = useState('YES_WANTS_OK_MADAM_KIT');
  const [submitted, setSubmitted] = useState(false);

  const skillOptions = [
    'Bridal HD Makeup',
    'Airbrush Artistry',
    'Men\'s Royal Grooming',
    'Safa / Pagdi Tying',
    'Saree & Lehenga Draping',
    'Festive Party Makeup',
    'International Hairstyling',
    'Organic Facials & Skincare'
  ];

  const toggleSkill = (skill) => {
    if (primarySkills.includes(skill)) {
      setPrimarySkills(primarySkills.filter(s => s !== skill));
    } else {
      setPrimarySkills([...primarySkills, skill]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fullName || !phone) {
      alert('Please fill in your full name and contact number.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="become-pro-page-wrap">
      {/* Page Header */}
      <section className="page-header-banner">
        <div className="container">
          <span className="badge badge-gold mb-2">
            <Sparkles size={13} /> Mathura Makeup Artist Network
          </span>
          <h1 className="page-title">Join OK MADAM as a Certified Beauty Professional</h1>
          <p className="page-subtitle">
            Earn premium rates on guaranteed doorstep wedding and party bookings across Mathura. Keep 85% of your service fee with weekly direct bank payouts and subsidized professional vanity kits.
          </p>
        </div>
      </section>

      {/* Benefits Pillars */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid-3 mb-5">
            <div className="pro-benefit-card glass-card p-4">
              <div className="benefit-icon-badge mb-2">
                <DollarSign size={24} className="text-pink" />
              </div>
              <h3 className="font-heading text-lg font-bold">85% Artist Payout</h3>
              <p className="text-xs text-grey-600 mt-2">
                Industry-highest earnings. Transparent direct bank deposit every Monday with zero hidden deduction.
              </p>
            </div>

            <div className="pro-benefit-card glass-card p-4">
              <div className="benefit-icon-badge mb-2">
                <ShieldCheck size={24} className="text-gold" />
              </div>
              <h3 className="font-heading text-lg font-bold">Free Kit Sanitization</h3>
              <p className="text-xs text-grey-600 mt-2">
                Bring your brushes to our Krishna Nagar atelier for complimentary UV-C and autoclave sanitization.
              </p>
            </div>

            <div className="pro-benefit-card glass-card p-4">
              <div className="benefit-icon-badge mb-2">
                <MapPin size={24} className="text-emerald" />
              </div>
              <h3 className="font-heading text-lg font-bold">Doorstep Dispatch Routing</h3>
              <p className="text-xs text-grey-600 mt-2">
                Receive bookings matched to your preferred Mathura localities with live Google Maps routes and customer OTP security.
              </p>
            </div>
          </div>

          {/* Form Container */}
          <div className="pro-application-container glass-card p-5 max-w-2xl mx-auto border border-pink-200 rounded-2xl">
            {submitted ? (
              <div className="text-center py-5 animate-fade-in">
                <div className="confirmation-badge-circle mx-auto mb-3">
                  <CheckCircle size={48} className="text-pink" />
                </div>
                <h2 className="font-heading text-2xl font-bold">Application Received, {fullName}!</h2>
                <p className="text-sm text-grey-600 mt-2 max-w-md mx-auto">
                  Our Mathura Artist Recruitment Coordinator will call you at <strong>{phone}</strong> within 24 hours to schedule your in-person model trial and Aadhaar KYC review at our Krishna Nagar atelier.
                </p>
                <div className="mt-4">
                  <Link to="/" className="btn btn-pink btn-sm">
                    <span>Return to Homepage</span>
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="pro-onboarding-form">
                <div className="form-header mb-4 border-bottom pb-3">
                  <h2 className="font-heading text-xl font-bold">Artist Onboarding Application</h2>
                  <p className="text-xs text-grey-500">
                    Step into Mathura's fastest growing beauty collective.
                  </p>
                </div>

                <div className="grid-2">
                  <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Shweta Upadhyay" 
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="form-input" 
                      required 
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">WhatsApp Contact Number *</label>
                    <input 
                      type="tel" 
                      placeholder="+91 98765 43210" 
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="form-input" 
                      required 
                    />
                  </div>
                </div>

                <div className="grid-2 mt-2">
                  <div className="form-group">
                    <label className="form-label">Email Address (Optional)</label>
                    <input 
                      type="email" 
                      placeholder="artist@gmail.com" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-input" 
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Years of Practical Experience</label>
                    <select 
                      value={experienceYears} 
                      onChange={(e) => setExperienceYears(e.target.value)}
                      className="form-select"
                    >
                      <option value="1-2 Years">1-2 Years (Associate)</option>
                      <option value="3-5 Years">3-5 Years (Lead Artist)</option>
                      <option value="6+ Years">6+ Years (Master Couture MUA)</option>
                    </select>
                  </div>
                </div>

                {/* Primary Skills Chips */}
                <div className="form-group mt-3">
                  <label className="form-label">Select Your Specialized Skills:</label>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {skillOptions.map((skill) => (
                      <button
                        type="button"
                        key={skill}
                        onClick={() => toggleSkill(skill)}
                        className={`filter-pill-btn ${primarySkills.includes(skill) ? 'active' : ''}`}
                      >
                        {skill}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Preferred Zone Coverage */}
                <div className="grid-2 mt-3">
                  <div className="form-group">
                    <label className="form-label">Preferred Mathura Service Hub</label>
                    <select 
                      value={coveredArea} 
                      onChange={(e) => setCoveredArea(e.target.value)}
                      className="form-select"
                    >
                      <option value="All Mathura (20+ Localities)">All Mathura (20+ Localities)</option>
                      <option value="Central Mathura (Krishna Nagar, Dampier, Cantt)">Central Mathura (Krishna Nagar, Dampier, Cantt)</option>
                      <option value="Highway & Refinery Belt">Highway & Refinery Belt</option>
                      <option value="Vrindavan Road & Chhatikara">Vrindavan Road & Chhatikara</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Instagram / Portfolio Link</label>
                    <input 
                      type="text" 
                      placeholder="instagram.com/yourhandle" 
                      value={portfolioLink}
                      onChange={(e) => setPortfolioLink(e.target.value)}
                      className="form-input" 
                    />
                  </div>
                </div>

                {/* Kit Choice */}
                <div className="form-group mt-3">
                  <label className="form-label">Professional Vanity Kit Status:</label>
                  <select 
                    value={hasOwnKit} 
                    onChange={(e) => setHasOwnKit(e.target.value)}
                    className="form-select"
                  >
                    <option value="YES_WANTS_OK_MADAM_KIT">I have my own tools and want subsidized OK MADAM HD Products</option>
                    <option value="COMPLETE_OK_MADAM_VANITY">I want the complete turnkey OK MADAM 3D Vanity Box & Tools</option>
                    <option value="OWN_INTERNATIONAL_KITS">I already have my own MAC / Kryolan professional vanity</option>
                  </select>
                </div>

                <button type="submit" className="btn btn-pink btn-lg w-full mt-4">
                  <Briefcase size={16} />
                  <span>Submit Professional MUA Application</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
