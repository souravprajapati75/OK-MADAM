import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  CheckCircle, 
  ShieldCheck, 
  Sparkles, 
  User, 
  Phone, 
  ArrowRight, 
  ChevronLeft, 
  CreditCard, 
  AlertCircle, 
  Home, 
  Building2 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { MATHURA_AREAS, SERVICE_CATEGORIES } from '../data/mockData';

export default function BookingPage({ initialService, onBookingSuccess }) {
  // Step State (1: Gender & Service, 2: Schedule & Mode, 3: Address & Contact, 4: Brand & Payment)
  const [step, setStep] = useState(1);
  const [selectedGender, setSelectedGender] = useState('WOMEN'); // 'WOMEN', 'MEN', 'SPECIAL'
  const [selectedService, setSelectedService] = useState(
    initialService || SERVICE_CATEGORIES.WOMEN[0]
  );
  
  // Booking Parameters
  const [serviceMode, setServiceMode] = useState('HOME_SERVICE'); // 'HOME_SERVICE', 'STUDIO_SERVICE'
  const [scheduledDate, setScheduledDate] = useState('2026-11-06');
  const [timeSlot, setTimeSlot] = useState('10:00 AM - 12:00 PM (Morning Slot)');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedAreaId, setSelectedAreaId] = useState('m-kn');
  const [selectedPincode, setSelectedPincode] = useState('281001');
  const [addressLine, setAddressLine] = useState('');
  const [landmark, setLandmark] = useState('');
  const [brandPreference, setBrandPreference] = useState('OK_MADAM_DEFAULT');
  const [paymentMode, setPaymentMode] = useState('ADVANCE_25'); // 'ADVANCE_25', 'CASH_ON_SERVICE'
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState(null);

  const selectedAreaObj = MATHURA_AREAS.find(a => a.id === selectedAreaId) || MATHURA_AREAS[0];

  const availableSlots = [
    '07:00 AM - 09:30 AM (Early Muhurat Slot)',
    '10:00 AM - 12:00 PM (Morning Slot)',
    '01:00 PM - 03:00 PM (Afternoon Prep)',
    '04:00 PM - 06:30 PM (Evening Festive)',
    '07:00 PM - 09:30 PM (Reception Prime)'
  ];

  // Pricing Calculation with Transparent Brand Choice Freedom
  const basePrice = selectedService.priceFrom;
  let brandSurcharge = 0;
  if (brandPreference === 'MAC_LUXURY') brandSurcharge = 750;
  else if (brandPreference === 'KRYOLAN_TV') brandSurcharge = 650;
  else if (brandPreference === 'HUDA_ROYALE') brandSurcharge = 850;
  
  const subtotal = basePrice + brandSurcharge;
  const advanceAmount = Math.round(subtotal * 0.25);
  const balanceDue = subtotal - advanceAmount;

  const handleGenderSwitch = (gender) => {
    setSelectedGender(gender);
    const services = SERVICE_CATEGORIES[gender] || SERVICE_CATEGORIES.WOMEN;
    setSelectedService(services[0]);
  };

  const handleConfirmBooking = (e) => {
    e.preventDefault();
    if (!fullName || !phone) {
      alert('Please fill in your name and phone number.');
      return;
    }
    if (serviceMode === 'HOME_SERVICE' && !addressLine) {
      alert('Please enter your service address in Mathura.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      const generatedOtp = Math.floor(1000 + Math.random() * 9000).toString();
      const bookingRecord = {
        bookingId: `OM-MTR-${Math.floor(10000 + Math.random() * 90000)}`,
        serviceTitle: selectedService.title,
        customerName: fullName,
        phone: phone,
        serviceMode: serviceMode === 'HOME_SERVICE' ? 'Home Doorstep Service' : 'OK MADAM Studio Lounge (Krishna Nagar)',
        date: scheduledDate,
        timeSlot: timeSlot,
        address: serviceMode === 'HOME_SERVICE' 
          ? `${addressLine}, near ${landmark || 'Main Road'}, Mathura - ${selectedPincode}`
          : 'OK MADAM Flagship Atelier, Krishna Nagar Main Boulevard, Mathura',
        brandUsed: brandPreference === 'OK_MADAM_DEFAULT' ? 'OK Madam Organic HD (Default)' : 'Disclosed Luxury Alternative (MAC/Kryolan)',
        totalAmount: subtotal,
        advancePaid: paymentMode === 'ADVANCE_25' ? advanceAmount : 0,
        balanceRemaining: paymentMode === 'ADVANCE_25' ? balanceDue : subtotal,
        paymentMode: paymentMode,
        otpCode: generatedOtp,
        status: 'CONFIRMED',
        dispatchRoute: {
          origin: 'OK MADAM Central Atelier (Krishna Nagar)',
          destination: selectedAreaObj.name,
          distanceKm: selectedAreaObj.distanceKm,
          travelMinutes: selectedAreaObj.travelMinutes,
          landmark: landmark || selectedAreaObj.landmark
        },
        assignedPro: {
          name: 'Neha Sharma',
          phone: '+91 98765 43210',
          rating: 4.98,
          badge: 'Senior Mathura Lead Artist',
          avatar: '/images/model-party-dewy.png'
        }
      };

      setIsSubmitting(false);
      setConfirmedBooking(bookingRecord);
      if (onBookingSuccess) {
        onBookingSuccess(bookingRecord);
      }
    }, 1400);
  };

  return (
    <div className="booking-page-wrap">
      {/* Page Header */}
      <section className="page-header-banner">
        <div className="container">
          <span className="badge badge-gold mb-2">Direct Doorstep & Atelier Scheduling</span>
          <h1 className="page-title">Book Your Beauty Appointment</h1>
          <p className="page-subtitle">
            Experience our 10-step seamless booking journey across Mathura. Select your service, date, preferred location, and cosmetic brand with transparent demo pricing.
          </p>
        </div>
      </section>

      <div className="container py-5">
        <div className="booking-container-card glass-card">
          {/* Progress Indicator */}
          {!confirmedBooking && (
            <div className="booking-wizard-steps mb-4" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', marginBottom: '2rem', paddingBottom: '1.25rem', borderBottom: '1px solid #F8BBD0', overflowX: 'auto' }}>
              <div className={`b-step ${step >= 1 ? 'active' : ''}`} style={{ fontSize: '0.85rem', fontWeight: '700', padding: '0.55rem 1.2rem', borderRadius: '9999px', whiteSpace: 'nowrap', background: step >= 1 ? '#E74C72' : '#F9FAFB', color: step >= 1 ? '#FFFFFF' : '#6B7280', border: step >= 1 ? '1px solid #E74C72' : '1px solid #E5E7EB', boxShadow: step >= 1 ? '0 4px 14px rgba(231, 76, 114, 0.25)' : 'none', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <span>1. Gender & Treatment</span>
              </div>
              <div className="b-line" style={{ flex: 1, height: '2px', background: step >= 2 ? '#E74C72' : '#E5E7EB', minWidth: '15px' }}></div>
              <div className={`b-step ${step >= 2 ? 'active' : ''}`} style={{ fontSize: '0.85rem', fontWeight: '700', padding: '0.55rem 1.2rem', borderRadius: '9999px', whiteSpace: 'nowrap', background: step >= 2 ? '#E74C72' : '#F9FAFB', color: step >= 2 ? '#FFFFFF' : '#6B7280', border: step >= 2 ? '1px solid #E74C72' : '1px solid #E5E7EB', boxShadow: step >= 2 ? '0 4px 14px rgba(231, 76, 114, 0.25)' : 'none', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <span>2. Schedule & Mode</span>
              </div>
              <div className="b-line" style={{ flex: 1, height: '2px', background: step >= 3 ? '#E74C72' : '#E5E7EB', minWidth: '15px' }}></div>
              <div className={`b-step ${step >= 3 ? 'active' : ''}`} style={{ fontSize: '0.85rem', fontWeight: '700', padding: '0.55rem 1.2rem', borderRadius: '9999px', whiteSpace: 'nowrap', background: step >= 3 ? '#E74C72' : '#F9FAFB', color: step >= 3 ? '#FFFFFF' : '#6B7280', border: step >= 3 ? '1px solid #E74C72' : '1px solid #E5E7EB', boxShadow: step >= 3 ? '0 4px 14px rgba(231, 76, 114, 0.25)' : 'none', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <span>3. Address Details</span>
              </div>
              <div className="b-line" style={{ flex: 1, height: '2px', background: step >= 4 ? '#E74C72' : '#E5E7EB', minWidth: '15px' }}></div>
              <div className={`b-step ${step >= 4 ? 'active' : ''}`} style={{ fontSize: '0.85rem', fontWeight: '700', padding: '0.55rem 1.2rem', borderRadius: '9999px', whiteSpace: 'nowrap', background: step >= 4 ? '#E74C72' : '#F9FAFB', color: step >= 4 ? '#FFFFFF' : '#6B7280', border: step >= 4 ? '1px solid #E74C72' : '1px solid #E5E7EB', boxShadow: step >= 4 ? '0 4px 14px rgba(231, 76, 114, 0.25)' : 'none', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <span>4. Brand & Lock-in</span>
              </div>
            </div>
          )}

          {/* Confirmation View */}
          {confirmedBooking ? (
            <div className="booking-confirmation-view animate-fade-in">
              <div className="confirmation-badge-circle">
                <CheckCircle size={48} className="text-pink" />
              </div>
              <h2 className="confirm-heading">Your Artist Appointment is Confirmed!</h2>
              <p className="confirm-sub">Booking Reference: <strong>{confirmedBooking.bookingId}</strong></p>

              {/* OTP Security Verification Card */}
              <div className="otp-security-box" style={{ maxWidth: '440px', margin: '0 auto 1.5rem auto' }}>
                <div className="otp-label">
                  <ShieldCheck size={18} className="text-gold" />
                  <span>Arrival Security Service OTP:</span>
                </div>
                <div className="otp-display">{confirmedBooking.otpCode}</div>
                <p className="otp-helper">
                  Share this 4-digit code with your professional only after they arrive at your Mathura venue.
                </p>
              </div>

              {/* Assigned Artist Card */}
              <div className="assigned-pro-card" style={{ maxWidth: '480px', margin: '0 auto 1.5rem auto' }}>
                <img 
                  src={confirmedBooking.assignedPro.avatar} 
                  alt={confirmedBooking.assignedPro.name} 
                  className="pro-avatar-round"
                />
                <div className="pro-details">
                  <span className="pro-assigned-label">Assigned Professional</span>
                  <h4 className="pro-name">{confirmedBooking.assignedPro.name}</h4>
                  <span className="pro-badge-pill">{confirmedBooking.assignedPro.badge}</span>
                  <div className="pro-contact-line mt-1">
                    <Phone size={13} /> {confirmedBooking.assignedPro.phone}
                  </div>
                </div>
              </div>

              {/* Booking Summary */}
              <div className="booking-meta-box" style={{ maxWidth: '480px', margin: '0 auto 1.5rem auto' }}>
                <div className="meta-row">
                  <span>Selected Service:</span>
                  <strong>{confirmedBooking.serviceTitle}</strong>
                </div>
                <div className="meta-row">
                  <span>Appointment Mode:</span>
                  <strong>{confirmedBooking.serviceMode}</strong>
                </div>
                <div className="meta-row">
                  <span>Date & Slot:</span>
                  <strong>{confirmedBooking.date} ({confirmedBooking.timeSlot})</strong>
                </div>
                <div className="meta-row">
                  <span>Location:</span>
                  <span>{confirmedBooking.address}</span>
                </div>
                <div className="meta-row">
                  <span>Cosmetics Standard:</span>
                  <strong>{confirmedBooking.brandUsed}</strong>
                </div>
                {confirmedBooking.dispatchRoute && (
                  <div className="dispatch-route-meta-chip mt-2 pt-2 border-top">
                    <div className="text-xs font-bold text-pink flex items-center gap-1">
                      <MapPin size={13} />
                      <span>Route: Krishna Nagar Hub ➔ {confirmedBooking.dispatchRoute.destination}</span>
                    </div>
                    <div className="flex justify-between text-xs text-grey-600 mt-1">
                      <span>Distance: <strong>{confirmedBooking.dispatchRoute.distanceKm} KM</strong></span>
                      <span>Transit: <strong>~{confirmedBooking.dispatchRoute.travelMinutes} MINS</strong></span>
                      <span className="text-emerald font-semibold">100% Free Travel</span>
                    </div>
                  </div>
                )}
                <div className="meta-row total-row">
                  <span>Total Amount:</span>
                  <strong className="text-pink">₹{confirmedBooking.totalAmount.toLocaleString('en-IN')}*</strong>
                </div>
              </div>

              <div className="confirmation-actions-row" style={{ maxWidth: '480px', margin: '0 auto' }}>
                <Link to="/" className="btn btn-pink w-full">
                  Return to Homepage
                </Link>
                <button onClick={() => { setConfirmedBooking(null); setStep(1); }} className="btn btn-outline w-full mt-2">
                  Book Another Service
                </button>
              </div>
            </div>
          ) : (
            <div>
              {/* STEP 1: Select Gender & Treatment */}
              {step === 1 && (
                <div className="step-content-pane animate-fade-in">
                  <h3 className="pane-title">1. Select Gender & Service Category</h3>
                  
                  {/* Gender Switcher */}
                  <div className="gender-toggle-bar mt-3" style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', background: '#FDF2F4', padding: '0.5rem', borderRadius: '16px', border: '1px solid #F8BBD0' }}>
                    <button
                      type="button"
                      onClick={() => handleGenderSwitch('WOMEN')}
                      className={`gender-switch-btn ${selectedGender === 'WOMEN' ? 'active' : ''}`}
                      style={{ flex: 1, minWidth: '180px', padding: '0.75rem 1.25rem', borderRadius: '12px', fontSize: '0.88rem', fontWeight: '700', cursor: 'pointer', border: 'none', background: selectedGender === 'WOMEN' ? '#FFFFFF' : 'transparent', color: selectedGender === 'WOMEN' ? '#E74C72' : '#374151', boxShadow: selectedGender === 'WOMEN' ? '0 4px 12px rgba(231, 76, 114, 0.15)' : 'none', transition: 'all 0.2s ease' }}
                    >
                      Female (Women's Beauty & Bridal - 13 Services)
                    </button>
                    <button
                      type="button"
                      onClick={() => handleGenderSwitch('MEN')}
                      className={`gender-switch-btn ${selectedGender === 'MEN' ? 'active' : ''}`}
                      style={{ flex: 1, minWidth: '180px', padding: '0.75rem 1.25rem', borderRadius: '12px', fontSize: '0.88rem', fontWeight: '700', cursor: 'pointer', border: 'none', background: selectedGender === 'MEN' ? '#FFFFFF' : 'transparent', color: selectedGender === 'MEN' ? '#E74C72' : '#374151', boxShadow: selectedGender === 'MEN' ? '0 4px 12px rgba(231, 76, 114, 0.15)' : 'none', transition: 'all 0.2s ease' }}
                    >
                      Male (Men's Royal Grooming - 9 Services)
                    </button>
                    <button
                      type="button"
                      onClick={() => handleGenderSwitch('SPECIAL')}
                      className={`gender-switch-btn ${selectedGender === 'SPECIAL' ? 'active' : ''}`}
                      style={{ flex: 1, minWidth: '180px', padding: '0.75rem 1.25rem', borderRadius: '12px', fontSize: '0.88rem', fontWeight: '700', cursor: 'pointer', border: 'none', background: selectedGender === 'SPECIAL' ? '#FFFFFF' : 'transparent', color: selectedGender === 'SPECIAL' ? '#E74C72' : '#374151', boxShadow: selectedGender === 'SPECIAL' ? '0 4px 12px rgba(231, 76, 114, 0.15)' : 'none', transition: 'all 0.2s ease' }}
                    >
                      Combined (Bride + Groom & Family Combos)
                    </button>
                  </div>

                  {/* Service Picker Grid */}
                  <div className="services-selection-grid mt-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '1.5rem' }}>
                    {(SERVICE_CATEGORIES[selectedGender] || SERVICE_CATEGORIES.WOMEN).map((srv) => (
                      <div
                        key={srv.id}
                        onClick={() => setSelectedService(srv)}
                        className={`service-option-card ${selectedService.id === srv.id ? 'selected' : ''}`}
                        style={{ borderRadius: '16px', overflow: 'hidden', border: selectedService.id === srv.id ? '2px solid #E74C72' : '1px solid #FCE7F0', background: selectedService.id === srv.id ? '#FFF5F7' : '#FFFFFF', cursor: 'pointer', transition: 'all 0.2s ease', display: 'flex', flexDirection: 'column', boxShadow: selectedService.id === srv.id ? '0 8px 24px rgba(231, 76, 114, 0.18)' : '0 2px 10px rgba(0, 0, 0, 0.04)' }}
                      >
                        <div style={{ width: '100%', height: '200px', overflow: 'hidden', background: '#FAF8F9' }}>
                          <img 
                            src={srv.image} 
                            alt={srv.title} 
                            className="service-opt-img" 
                            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                          />
                        </div>
                        <div className="service-opt-details" style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                          <span className="badge badge-pink text-xs" style={{ alignSelf: 'flex-start' }}>{srv.badge}</span>
                          <h4 className="service-opt-title mt-1" style={{ fontSize: '1.15rem', fontWeight: '700', color: '#1A181C', margin: '0.4rem 0 0.2rem 0' }}>{srv.title}</h4>
                          <span className="service-opt-duration" style={{ fontSize: '0.78rem', color: '#6B7280', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                            <Clock size={12} /> {srv.duration}
                          </span>
                          <div className="service-opt-price mt-2" style={{ fontSize: '1.25rem', fontWeight: '800', color: '#E74C72', marginTop: 'auto', paddingTop: '0.5rem' }}>
                            ₹{srv.priceFrom.toLocaleString('en-IN')}*
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="wizard-actions mt-4">
                    <div></div>
                    <button onClick={() => setStep(2)} className="btn btn-pink btn-lg">
                      <span>Proceed to Schedule & Location Mode</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: Schedule & Mode Selection */}
              {step === 2 && (
                <div className="step-content-pane animate-fade-in">
                  <h3 className="pane-title">2. Choose Schedule & Service Location Mode</h3>

                  <div className="selected-summary-chip mt-2">
                    <span>Selected: <strong>{selectedService.title}</strong></span>
                    <span>₹{selectedService.priceFrom.toLocaleString('en-IN')}*</span>
                  </div>

                  {/* Home vs Studio Toggle */}
                  <div className="service-mode-grid mt-4">
                    <div 
                      onClick={() => setServiceMode('HOME_SERVICE')}
                      className={`mode-card ${serviceMode === 'HOME_SERVICE' ? 'active' : ''}`}
                    >
                      <Home size={24} className="text-pink" />
                      <div>
                        <h4>Home Doorstep Service</h4>
                        <p>Certified MUA travels to your home/hotel anywhere in Mathura with sterilized kits.</p>
                      </div>
                    </div>

                    <div 
                      onClick={() => setServiceMode('STUDIO_SERVICE')}
                      className={`mode-card ${serviceMode === 'STUDIO_SERVICE' ? 'active' : ''}`}
                    >
                      <Building2 size={24} className="text-gold" />
                      <div>
                        <h4>OK MADAM Studio Lounge</h4>
                        <p>Visit our flagship atelier at Krishna Nagar Main Boulevard for in-lounge pampering.</p>
                      </div>
                    </div>
                  </div>

                  {/* Date & Slot Picker */}
                  <div className="grid-2 mt-4">
                    <div className="form-group">
                      <label className="form-label">Select Date (Mathura Real-Time Slots)</label>
                      <input 
                        type="date" 
                        value={scheduledDate}
                        onChange={(e) => setScheduledDate(e.target.value)}
                        className="form-input"
                        min="2026-11-02"
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Select Time Window</label>
                      <select 
                        value={timeSlot} 
                        onChange={(e) => setTimeSlot(e.target.value)}
                        className="form-select"
                      >
                        {availableSlots.map(s => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="wizard-actions mt-4">
                    <button onClick={() => setStep(1)} className="btn btn-outline">
                      <ChevronLeft size={16} />
                      <span>Back</span>
                    </button>
                    <button onClick={() => setStep(3)} className="btn btn-pink btn-lg">
                      <span>Enter Contact & Address</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: Address & Contact */}
              {step === 3 && (
                <div className="step-content-pane animate-fade-in">
                  <h3 className="pane-title">3. Enter Client Details & Mathura Address</h3>

                  <div className="grid-2 mt-3">
                    <div className="form-group">
                      <label className="form-label">Full Name</label>
                      <input 
                        type="text" 
                        placeholder="e.g. Ananya Agarwal" 
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="form-input"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Phone Number (For WhatsApp Updates)</label>
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

                  {serviceMode === 'HOME_SERVICE' ? (
                    <div className="mt-3">
                      <div className="form-group">
                        <label className="form-label">Mathura Locality & Zone ({MATHURA_AREAS.length} Areas Covered)</label>
                        <select 
                          value={selectedAreaId}
                          onChange={(e) => {
                            setSelectedAreaId(e.target.value);
                            const found = MATHURA_AREAS.find(a => a.id === e.target.value);
                            if (found) setSelectedPincode(found.pincode);
                          }}
                          className="form-select"
                        >
                          {MATHURA_AREAS.map(a => (
                            <option key={a.id} value={a.id}>
                              {a.name} — Pincode {a.pincode} ({a.distanceKm} km from Hub, ~{a.travelMinutes} mins)
                            </option>
                          ))}
                        </select>
                        <div className="route-preview-badge mt-2">
                          <span className="text-xs text-pink font-semibold">
                            📍 Live Route: Krishna Nagar Hub ➔ {selectedAreaObj.name} ({selectedAreaObj.distanceKm} km, ~{selectedAreaObj.travelMinutes} mins) • <strong>100% Free Doorstep Travel</strong>
                          </span>
                        </div>
                      </div>

                      <div className="form-group mt-2">
                        <label className="form-label">House / Flat / Venue Address</label>
                        <textarea 
                          placeholder="e.g. House No. 24, Near Krishna Nagar Central Park" 
                          value={addressLine}
                          onChange={(e) => setAddressLine(e.target.value)}
                          className="form-textarea"
                          rows={2}
                          required
                        ></textarea>
                      </div>

                      <div className="form-group mt-2">
                        <label className="form-label">Nearby Landmark (Optional)</label>
                        <input 
                          type="text" 
                          placeholder="e.g. Opposite Brijwasi Sweets" 
                          value={landmark}
                          onChange={(e) => setLandmark(e.target.value)}
                          className="form-input"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="studio-venue-card glass-card mt-3">
                      <MapPin size={24} className="text-pink" />
                      <div>
                        <h4>Atelier Appointment Address:</h4>
                        <p>OK MADAM Luxury Studio, 2nd Floor, Krishna Nagar Main Boulevard, Mathura, UP - 281001.</p>
                        <span className="text-success font-semibold text-xs">✓ Valet parking & bridal vanity room ready</span>
                      </div>
                    </div>
                  )}

                  <div className="wizard-actions mt-4">
                    <button onClick={() => setStep(2)} className="btn btn-outline">
                      <ChevronLeft size={16} />
                      <span>Back</span>
                    </button>
                    <button 
                      onClick={() => {
                        if (!fullName || !phone) {
                          alert('Please enter your name and phone number.');
                          return;
                        }
                        if (serviceMode === 'HOME_SERVICE' && !addressLine) {
                          alert('Please enter your service address.');
                          return;
                        }
                        setStep(4);
                      }} 
                      className="btn btn-pink btn-lg"
                    >
                      <span>Choose Brand & Review Price</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 4: Brand Selection & Price Review */}
              {step === 4 && (
                <div className="step-content-pane animate-fade-in">
                  <h3 className="pane-title">4. Cosmetic Brand Preference & Booking Lock-in</h3>

                  <div className="brand-options-block mt-3">
                    <label className="form-label">Select Cosmetic Brand Used for Your Makeover (Total Freedom):</label>
                    
                    {/* Choice 1: House Brand OK MADAM */}
                    <div 
                      onClick={() => setBrandPreference('OK_MADAM_DEFAULT')}
                      className={`brand-choice-card ${brandPreference === 'OK_MADAM_DEFAULT' ? 'active' : ''}`}
                    >
                      <div className="choice-radio">
                        <div className={`radio-dot ${brandPreference === 'OK_MADAM_DEFAULT' ? 'checked' : ''}`}></div>
                      </div>
                      <div className="choice-text">
                        <div className="choice-header">
                          <strong className="choice-name">OK MADAM Signature Organic & HD Kits</strong>
                          <span className="badge badge-pink">★ Recommended (Included ₹0)</span>
                        </div>
                        <p className="choice-desc">
                          100% cruelty-free, dewy 16-hour formulas crafted specifically for Mathura Indian weather, mandap pheras, and zero flashback in 4K photography.
                        </p>
                      </div>
                    </div>

                    {/* Choice 2: MAC Studio Fix */}
                    <div 
                      onClick={() => setBrandPreference('MAC_LUXURY')}
                      className={`brand-choice-card ${brandPreference === 'MAC_LUXURY' ? 'active' : ''}`}
                    >
                      <div className="choice-radio">
                        <div className={`radio-dot ${brandPreference === 'MAC_LUXURY' ? 'checked' : ''}`}></div>
                      </div>
                      <div className="choice-text">
                        <div className="choice-header">
                          <strong className="choice-name">MAC Studio Fix Professional Suite</strong>
                          <span className="badge badge-gold">+ ₹750 Material Fee</span>
                        </div>
                        <p className="choice-desc">
                          Original sealed MAC Studio Fix Fluid, Studio Fix Powder, and Prep+Prime setting spray.
                        </p>
                      </div>
                    </div>

                    {/* Choice 3: Kryolan */}
                    <div 
                      onClick={() => setBrandPreference('KRYOLAN_TV')}
                      className={`brand-choice-card ${brandPreference === 'KRYOLAN_TV' ? 'active' : ''}`}
                    >
                      <div className="choice-radio">
                        <div className={`radio-dot ${brandPreference === 'KRYOLAN_TV' ? 'checked' : ''}`}></div>
                      </div>
                      <div className="choice-text">
                        <div className="choice-header">
                          <strong className="choice-name">Kryolan TV Paint Stick & DermaColor</strong>
                          <span className="badge badge-gold">+ ₹650 Material Fee</span>
                        </div>
                        <p className="choice-desc">
                          Legendary high-coverage stage & bridal paint sticks for dramatic bridal glam.
                        </p>
                      </div>
                    </div>

                    {/* Choice 4: Huda Beauty */}
                    <div 
                      onClick={() => setBrandPreference('HUDA_ROYALE')}
                      className={`brand-choice-card ${brandPreference === 'HUDA_ROYALE' ? 'active' : ''}`}
                    >
                      <div className="choice-radio">
                        <div className={`radio-dot ${brandPreference === 'HUDA_ROYALE' ? 'checked' : ''}`}></div>
                      </div>
                      <div className="choice-text">
                        <div className="choice-header">
                          <strong className="choice-name">Huda Beauty #FauxFilter Royale Suite</strong>
                          <span className="badge badge-gold">+ ₹850 Material Fee</span>
                        </div>
                        <p className="choice-desc">
                          Luminous filter-effect Middle Eastern luxury glam with Easy Bake loose baking powder.
                        </p>
                      </div>
                    </div>

                    {/* Choice 5: Bring Your Own */}
                    <div 
                      onClick={() => setBrandPreference('CLIENT_OWN')}
                      className={`brand-choice-card ${brandPreference === 'CLIENT_OWN' ? 'active' : ''}`}
                    >
                      <div className="choice-radio">
                        <div className={`radio-dot ${brandPreference === 'CLIENT_OWN' ? 'checked' : ''}`}></div>
                      </div>
                      <div className="choice-text">
                        <div className="choice-header">
                          <strong className="choice-name">Bring Your Own Personal Makeup Vanity</strong>
                          <span className="badge badge-emerald">Zero Surcharge (₹0)</span>
                        </div>
                        <p className="choice-desc">
                          Our certified artist will work with your trusted personal skincare & makeup products, bringing sanitized brushes, tools, and lighting.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Payment Mode Selection */}
                  <div className="payment-mode-block mt-4">
                    <label className="form-label">Select Payment Preference:</label>
                    <div className="payment-options-grid">
                      <div 
                        onClick={() => setPaymentMode('ADVANCE_25')}
                        className={`payment-option-card ${paymentMode === 'ADVANCE_25' ? 'active' : ''}`}
                      >
                        <strong>25% Slot Lock-in (₹{advanceAmount})</strong>
                        <span>Pay remaining ₹{balanceDue} on service day</span>
                      </div>

                      <div 
                        onClick={() => setPaymentMode('CASH_ON_SERVICE')}
                        className={`payment-option-card ${paymentMode === 'CASH_ON_SERVICE' ? 'active' : ''}`}
                      >
                        <strong>Pay After Service (COD)</strong>
                        <span>Zero upfront payment in Mathura</span>
                      </div>
                    </div>
                  </div>

                  {/* Price Review Breakdown */}
                  <div className="pricing-summary-card mt-4">
                    <div className="summary-row">
                      <span>Service Fee ({selectedService.title}):</span>
                      <span>₹{basePrice.toLocaleString('en-IN')}*</span>
                    </div>
                    {brandSurcharge > 0 && (
                      <div className="summary-row">
                        <span>Alternative Brand Surcharge:</span>
                        <span>₹{brandSurcharge}</span>
                      </div>
                    )}
                    <div className="summary-row">
                      <span>Sanitized Kit & Mathura Travel:</span>
                      <span className="text-success">FREE Included</span>
                    </div>
                    <div className="summary-divider"></div>
                    <div className="summary-row total">
                      <span>Total Estimated Cost:</span>
                      <span className="text-pink">₹{subtotal.toLocaleString('en-IN')}*</span>
                    </div>
                    {paymentMode === 'ADVANCE_25' && (
                      <div className="advance-notice">
                        Due now to confirm artist slot: <strong>₹{advanceAmount}</strong> (Balance ₹{balanceDue} payable upon completion).
                      </div>
                    )}
                  </div>

                  <div className="wizard-actions mt-4">
                    <button onClick={() => setStep(3)} className="btn btn-outline" disabled={isSubmitting}>
                      <ChevronLeft size={16} />
                      <span>Back</span>
                    </button>
                    <button 
                      onClick={handleConfirmBooking} 
                      className="btn btn-pink btn-lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span>Assigning Mathura Artist...</span>
                      ) : (
                        <>
                          <CheckCircle size={18} />
                          <span>Confirm & Book Appointment</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
