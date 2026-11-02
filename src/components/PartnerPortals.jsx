import React, { useState } from 'react';
import { 
  Briefcase, 
  Store, 
  Building2, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle, 
  ArrowRight, 
  Award, 
  Send, 
  Clock, 
  PackageCheck 
} from 'lucide-react';
import { MATHURA_AREAS } from '../data/mockData';

export default function PartnerPortals() {
  const [activeTab, setActiveTab] = useState('PRO'); // 'PRO', 'RETAIL', 'FRANCHISE'
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Pro Form State
  const [proName, setProName] = useState('');
  const [proPhone, setProPhone] = useState('');
  const [proExperience, setProExperience] = useState('3-5 Years');
  const [proSpeciality, setProSpeciality] = useState('Bridal & HD Makeup');
  const [proPincode, setProPincode] = useState('281001');

  // Retail Form State
  const [businessName, setBusinessName] = useState('');
  const [gstNumber, setGstNumber] = useState('');
  const [businessType, setBusinessType] = useState('Beauty Parlor / Salon');
  const [monthlyVolume, setMonthlyVolume] = useState('₹25,000 - ₹50,000');

  // Franchise Form State
  const [applicantName, setApplicantName] = useState('');
  const [proposedLocation, setProposedLocation] = useState('Krishna Nagar / Cantt Road, Mathura');
  const [investmentBracket, setInvestmentBracket] = useState('₹15 Lakhs - ₹25 Lakhs');
  const [floorArea, setFloorArea] = useState('600 - 1000 sq. ft.');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      // Keep notification active for visual feedback
    }, 500);
  };

  const resetForm = () => {
    setFormSubmitted(false);
  };

  return (
    <section id="partners" className="partners-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <Building2 size={14} />
            <span>Scale with OK MADAM in Mathura & Beyond</span>
          </div>
          <h2 className="section-title">Partner, Distribute or Franchise</h2>
          <p className="section-subtitle">
            We offer distinct, dedicated programs for freelance artists, established salon retailers, and visionary franchise investors with zero role confusion.
          </p>

          {/* Partner Role Tabs */}
          <div className="partner-tabs-wrapper">
            <button
              onClick={() => { setActiveTab('PRO'); resetForm(); }}
              className={`partner-tab-btn ${activeTab === 'PRO' ? 'active' : ''}`}
            >
              <Briefcase size={16} />
              <span>1. Beauty Professional / MUA</span>
            </button>

            <button
              onClick={() => { setActiveTab('RETAIL'); resetForm(); }}
              className={`partner-tab-btn ${activeTab === 'RETAIL' ? 'active' : ''}`}
            >
              <Store size={16} />
              <span>2. Salon Retailer & B2B Stockist</span>
            </button>

            <button
              onClick={() => { setActiveTab('FRANCHISE'); resetForm(); }}
              className={`partner-tab-btn ${activeTab === 'FRANCHISE' ? 'active' : ''}`}
            >
              <Award size={16} />
              <span>3. Franchise Studio Opportunity</span>
            </button>
          </div>
        </div>

        {/* Dynamic Partner Container */}
        <div className="partner-card-container glass-card">
          {formSubmitted ? (
            <div className="partner-success-state animate-fade-in">
              <div className="success-icon-badge">
                <CheckCircle size={48} className="text-pink" />
              </div>
              <h3>Application Submitted Successfully!</h3>
              <p>
                Thank you for applying to the <strong>OK MADAM {activeTab} Program</strong>. Our Mathura regional partnership desk will review your details and reach out within 24 business hours.
              </p>
              <button onClick={resetForm} className="btn btn-outline mt-3">
                Submit Another Inquiry
              </button>
            </div>
          ) : (
            <div>
              {/* TAB 1: PROFESSIONAL MUA */}
              {activeTab === 'PRO' && (
                <div className="partner-split-grid animate-fade-in">
                  <div className="partner-info-col">
                    <span className="badge badge-pink">For Freelance MUAs & Beauticians</span>
                    <h3 className="partner-heading mt-2">Join the Elite OK Madam Mathura Roster</h3>
                    <p className="partner-desc">
                      Take control of your schedule. Get high-value bridal and party makeover bookings dispatched directly to your phone in Mathura with guaranteed weekly payouts.
                    </p>

                    <ul className="partner-perks-list">
                      <li>
                        <CheckCircle size={16} className="text-pink" />
                        <span><strong>Subsidized Pro Kits:</strong> Access official OK Madam professional cosmetics at 40% subsidized partner rates.</span>
                      </li>
                      <li>
                        <CheckCircle size={16} className="text-pink" />
                        <span><strong>Zero Client Haggling:</strong> Upfront fixed transparent pricing with customer advance deposits locked in.</span>
                      </li>
                      <li>
                        <CheckCircle size={16} className="text-pink" />
                        <span><strong>Weekly Direct Payouts:</strong> Bank transfers every Monday with detailed digital statement slips.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="partner-form-col">
                    <form onSubmit={handleSubmit} className="partner-form">
                      <h4 className="form-legend">Apply as a Professional</h4>
                      <div className="form-group">
                        <label className="form-label">Full Name</label>
                        <input 
                          type="text" 
                          placeholder="Your official name" 
                          value={proName}
                          onChange={(e) => setProName(e.target.value)}
                          className="form-input"
                          required
                        />
                      </div>

                      <div className="form-group mt-2">
                        <label className="form-label">Contact Mobile (WhatsApp Active)</label>
                        <input 
                          type="tel" 
                          placeholder="+91 98765 00000" 
                          value={proPhone}
                          onChange={(e) => setProPhone(e.target.value)}
                          className="form-input"
                          required
                        />
                      </div>

                      <div className="grid-2 mt-2">
                        <div className="form-group">
                          <label className="form-label">Years of Experience</label>
                          <select 
                            value={proExperience} 
                            onChange={(e) => setProExperience(e.target.value)}
                            className="form-select"
                          >
                            <option value="1-2 Years">1 - 2 Years</option>
                            <option value="3-5 Years">3 - 5 Years</option>
                            <option value="5+ Years">5+ Years (Senior Lead)</option>
                          </select>
                        </div>

                        <div className="form-group">
                          <label className="form-label">Primary Specialization</label>
                          <select 
                            value={proSpeciality} 
                            onChange={(e) => setProSpeciality(e.target.value)}
                            className="form-select"
                          >
                            <option value="Bridal & HD Makeup">Bridal & HD Makeup</option>
                            <option value="Airbrush Artistry">Airbrush Artistry</option>
                            <option value="Men Groom Styling & Safa">Men Groom Styling & Safa</option>
                            <option value="Skincare & Facials">Skincare & Facials</option>
                          </select>
                        </div>
                      </div>

                      <div className="form-group mt-2">
                        <label className="form-label">Preferred Mathura Service Territory</label>
                        <select 
                          value={proPincode} 
                          onChange={(e) => setProPincode(e.target.value)}
                          className="form-select"
                        >
                          {MATHURA_AREAS.map((a) => (
                            <option key={a.pincode} value={a.pincode}>{a.name} ({a.pincode})</option>
                          ))}
                        </select>
                      </div>

                      <button type="submit" className="btn btn-pink w-full mt-3">
                        <Send size={15} />
                        <span>Submit MUA Onboarding Application</span>
                      </button>
                    </form>
                  </div>
                </div>
              )}

              {/* TAB 2: RETAIL & SALON B2B STOCKIST */}
              {activeTab === 'RETAIL' && (
                <div className="partner-split-grid animate-fade-in">
                  <div className="partner-info-col">
                    <span className="badge badge-gold">For Salons & Cosmetic Retailers</span>
                    <h3 className="partner-heading mt-2">Stock OK MADAM Products in Your Salon</h3>
                    <p className="partner-desc">
                      Supply your beauty parlor or retail store with Mathura's most coveted clean makeup and skincare formulations with attractive wholesale margins and guaranteed territory exclusivity.
                    </p>

                    <ul className="partner-perks-list">
                      <li>
                        <CheckCircle size={16} className="text-pink" />
                        <span><strong>High Margin Tiers:</strong> Enjoy 20% to 35% margin on retail cosmetics with zero consignment risk.</span>
                      </li>
                      <li>
                        <CheckCircle size={16} className="text-pink" />
                        <span><strong>Mathura Same-Day Replenishment:</strong> Central Mathura hub dispatch guarantees no out-of-stock downtime.</span>
                      </li>
                      <li>
                        <CheckCircle size={16} className="text-pink" />
                        <span><strong>Client Overflow Referrals:</strong> Certified salon partners receive nearby OK Madam studio service bookings.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="partner-form-col">
                    <form onSubmit={handleSubmit} className="partner-form">
                      <h4 className="form-legend">Register B2B Retail Account</h4>
                      <div className="form-group">
                        <label className="form-label">Salon / Enterprise Name</label>
                        <input 
                          type="text" 
                          placeholder="e.g. Radhika Beauty Lounge" 
                          value={businessName}
                          onChange={(e) => setBusinessName(e.target.value)}
                          className="form-input"
                          required
                        />
                      </div>

                      <div className="grid-2 mt-2">
                        <div className="form-group">
                          <label className="form-label">Business Type</label>
                          <select 
                            value={businessType} 
                            onChange={(e) => setBusinessType(e.target.value)}
                            className="form-select"
                          >
                            <option value="Beauty Parlor / Salon">Beauty Parlor / Salon</option>
                            <option value="Cosmetics Retail Store">Cosmetics Retail Store</option>
                            <option value="Bridal Studio / Boutique">Bridal Studio / Boutique</option>
                          </select>
                        </div>

                        <div className="form-group">
                          <label className="form-label">GST / Trade License (Optional)</label>
                          <input 
                            type="text" 
                            placeholder="09AAAAA0000A1Z5" 
                            value={gstNumber}
                            onChange={(e) => setGstNumber(e.target.value)}
                            className="form-input"
                          />
                        </div>
                      </div>

                      <div className="form-group mt-2">
                        <label className="form-label">Estimated Monthly Product Order Volume</label>
                        <select 
                          value={monthlyVolume} 
                          onChange={(e) => setMonthlyVolume(e.target.value)}
                          className="form-select"
                        >
                          <option value="₹10,000 - ₹25,000 (Starter)">₹10,000 - ₹25,000 (Starter)</option>
                          <option value="₹25,000 - ₹50,000 (Silver Partner)">₹25,000 - ₹50,000 (Silver Partner)</option>
                          <option value="₹50,000+ (Gold Master Stockist)">₹50,000+ (Gold Master Stockist)</option>
                        </select>
                      </div>

                      <button type="submit" className="btn btn-gold w-full mt-3">
                        <PackageCheck size={16} />
                        <span>Request B2B Wholesale Catalogue & Terms</span>
                      </button>
                    </form>
                  </div>
                </div>
              )}

              {/* TAB 3: FRANCHISE STUDIO */}
              {activeTab === 'FRANCHISE' && (
                <div id="franchise" className="partner-split-grid animate-fade-in">
                  <div className="partner-info-col">
                    <span className="badge badge-charcoal">Turnkey Business Opportunity</span>
                    <h3 className="partner-heading mt-2">Open an OK MADAM Luxury Studio Lounge</h3>
                    <p className="partner-desc">
                      Leverage our brand equity, centralized marketing engine, standardized training academies, and proprietary product pipeline to open an experiential beauty lounge in your commercial area.
                    </p>

                    <div className="partner-store-preview mt-3">
                      <img 
                        src="/images/franchise-retail-store.jpg" 
                        alt="OK MADAM Luxury Studio & Retail Display" 
                        className="partner-store-img"
                      />
                      <span className="store-preview-caption">OK MADAM Experiential Retail Store Concept (Mathura Hub)</span>
                    </div>

                    <div className="franchise-metrics-callout mt-3">
                      <div className="metric-box">
                        <strong>600 - 1200</strong>
                        <span>Min Carpet Area (Sq. Ft.)</span>
                      </div>
                      <div className="metric-box">
                        <strong>Turnkey</strong>
                        <span>Interior & Display Kit</span>
                      </div>
                      <div className="metric-box">
                        <strong>Exclusive</strong>
                        <span>Territory Protection</span>
                      </div>
                    </div>

                    <p className="policy-disclaimer mt-3">
                      *Note: Subscription to partner tools does not constitute a franchise grant. Franchise agreements require formal background scoring, site inspection, and bilateral legal execution.
                    </p>
                  </div>

                  <div className="partner-form-col">
                    <form onSubmit={handleSubmit} className="partner-form">
                      <h4 className="form-legend">Expression of Interest (EOI)</h4>
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

                      <div className="form-group mt-2">
                        <label className="form-label">Proposed City / Commercial Catchment</label>
                        <input 
                          type="text" 
                          placeholder="e.g. Krishna Nagar Main Road, Mathura" 
                          value={proposedLocation}
                          onChange={(e) => setProposedLocation(e.target.value)}
                          className="form-input"
                          required
                        />
                      </div>

                      <div className="grid-2 mt-2">
                        <div className="form-group">
                          <label className="form-label">Available Commercial Space</label>
                          <select 
                            value={floorArea} 
                            onChange={(e) => setFloorArea(e.target.value)}
                            className="form-select"
                          >
                            <option value="400 - 600 sq. ft. (Express Studio)">400 - 600 sq. ft. (Express Studio)</option>
                            <option value="600 - 1000 sq. ft. (Flagship Lounge)">600 - 1000 sq. ft. (Flagship Lounge)</option>
                            <option value="1000+ sq. ft. (Grand Atelier)">1000+ sq. ft. (Grand Atelier)</option>
                          </select>
                        </div>

                        <div className="form-group">
                          <label className="form-label">Investment Capability</label>
                          <select 
                            value={investmentBracket} 
                            onChange={(e) => setInvestmentBracket(e.target.value)}
                            className="form-select"
                          >
                            <option value="₹10 Lakhs - ₹15 Lakhs">₹10 Lakhs - ₹15 Lakhs</option>
                            <option value="₹15 Lakhs - ₹25 Lakhs">₹15 Lakhs - ₹25 Lakhs</option>
                            <option value="₹25 Lakhs+">₹25 Lakhs+</option>
                          </select>
                        </div>
                      </div>

                      <button type="submit" className="btn btn-primary w-full mt-3">
                        <Award size={16} />
                        <span>Submit Franchise Application</span>
                      </button>
                    </form>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
