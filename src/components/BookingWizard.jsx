import React, { useState } from 'react';
import { 
  Calendar as CalendarIcon, 
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
  AlertCircle 
} from 'lucide-react';
import { MATHURA_AREAS, SERVICE_CATEGORIES } from '../data/mockData';

export default function BookingWizard({ preSelectedService, onClose, onBookingSuccess }) {
  // Step State: 1 = Service, 2 = Date/Time, 3 = Address, 4 = Brand & Payment
  const [step, setStep] = useState(preSelectedService ? 2 : 1);
  const [selectedService, setSelectedService] = useState(
    preSelectedService || SERVICE_CATEGORIES.WOMEN[0]
  );

  // Form State
  const [scheduledDate, setScheduledDate] = useState('2026-11-05');
  const [timeSlot, setTimeSlot] = useState('10:00 AM - 12:00 PM (Morning Slot)');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedPincode, setSelectedPincode] = useState('281001');
  const [addressLine, setAddressLine] = useState('');
  const [landmark, setLandmark] = useState('');
  const [brandPreference, setBrandPreference] = useState('OK_MADAM_DEFAULT');
  const [paymentMode, setPaymentMode] = useState('ADVANCE_25'); // ADVANCE_25, FULL_ONLINE, CASH_ON_SERVICE
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState(null);

  const timeSlots = [
    '07:00 AM - 09:30 AM (Early Muhurat)',
    '10:00 AM - 12:00 PM (Morning Slot)',
    '01:00 PM - 03:00 PM (Afternoon Prep)',
    '04:00 PM - 06:30 PM (Evening Festive)',
    '07:00 PM - 09:30 PM (Reception Prime)'
  ];

  // Price Calculations
  const basePrice = selectedService.priceFrom;
  const brandSurcharge = brandPreference === 'ALTERNATIVE_LUXURY' ? 750 : 0;
  const subtotal = basePrice + brandSurcharge;
  const advanceAmount = Math.round(subtotal * 0.25);
  const balanceDue = subtotal - advanceAmount;

  const handleConfirmBooking = (e) => {
    e.preventDefault();
    if (!fullName || !phone || !addressLine) {
      alert('Please fill in your name, contact phone, and Mathura address.');
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
        date: scheduledDate,
        timeSlot: timeSlot,
        address: `${addressLine}, near ${landmark || 'Main Road'}, Mathura - ${selectedPincode}`,
        brandUsed: brandPreference === 'OK_MADAM_DEFAULT' ? 'OK Madam Organic HD' : 'Disclosed Luxury Alternative (MAC/Kryolan)',
        totalAmount: subtotal,
        advancePaid: paymentMode === 'ADVANCE_25' ? advanceAmount : paymentMode === 'FULL_ONLINE' ? subtotal : 0,
        balanceRemaining: paymentMode === 'ADVANCE_25' ? balanceDue : paymentMode === 'FULL_ONLINE' ? 0 : subtotal,
        paymentMode: paymentMode,
        otpCode: generatedOtp,
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
    }, 1200);
  };

  return (
    <div className="modal-backdrop">
      <div className="booking-wizard-modal glass-card" onClick={(e) => e.stopPropagation()}>
        {/* Wizard Header */}
        <div className="wizard-header">
          <div className="wizard-title-group">
            <span className="badge badge-gold">Mathura At-Home Service</span>
            <h2 className="wizard-title">
              {confirmedBooking ? 'Booking Confirmed!' : 'Schedule Your Beauty Experience'}
            </h2>
          </div>
          <button onClick={onClose} className="modal-close-btn" title="Close">✕</button>
        </div>

        {/* Wizard Progress Steps (If not yet confirmed) */}
        {!confirmedBooking && (
          <div className="wizard-step-indicator">
            <div className={`step-dot ${step >= 1 ? 'active' : ''}`}>1. Service</div>
            <div className="step-line"></div>
            <div className={`step-dot ${step >= 2 ? 'active' : ''}`}>2. Schedule</div>
            <div className="step-line"></div>
            <div className={`step-dot ${step >= 3 ? 'active' : ''}`}>3. Address</div>
            <div className="step-line"></div>
            <div className={`step-dot ${step >= 4 ? 'active' : ''}`}>4. Brand & Lock-in</div>
          </div>
        )}

        {/* Wizard Body */}
        <div className="wizard-body">
          {confirmedBooking ? (
            /* Confirmation Screen */
            <div className="booking-confirmation-view animate-fade-in">
              <div className="confirmation-badge-circle">
                <CheckCircle size={48} className="text-pink" />
              </div>

              <h3 className="confirm-heading">Your Artist is Scheduled!</h3>
              <p className="confirm-sub">
                Booking Reference: <strong>{confirmedBooking.bookingId}</strong>
              </p>

              {/* OTP Security Verification Card */}
              <div className="otp-security-box">
                <div className="otp-label">
                  <ShieldCheck size={18} className="text-gold" />
                  <span>Security Service OTP:</span>
                </div>
                <div className="otp-display">{confirmedBooking.otpCode}</div>
                <p className="otp-helper">
                  Share this 4-digit code with your professional only after they arrive at your Mathura venue.
                </p>
              </div>

              {/* Assigned Artist Card */}
              <div className="assigned-pro-card">
                <img 
                  src={confirmedBooking.assignedPro.avatar} 
                  alt={confirmedBooking.assignedPro.name} 
                  className="pro-avatar-round"
                />
                <div className="pro-details">
                  <span className="pro-assigned-label">Assigned Professional</span>
                  <h4 className="pro-name">{confirmedBooking.assignedPro.name}</h4>
                  <span className="pro-badge-pill">{confirmedBooking.assignedPro.badge}</span>
                  <div className="pro-contact-line">
                    <Phone size={13} /> {confirmedBooking.assignedPro.phone}
                  </div>
                </div>
              </div>

              {/* Booking Summary Card */}
              <div className="booking-meta-box">
                <div className="meta-row">
                  <span>Treatment:</span>
                  <strong>{confirmedBooking.serviceTitle}</strong>
                </div>
                <div className="meta-row">
                  <span>Date & Slot:</span>
                  <strong>{confirmedBooking.date} ({confirmedBooking.timeSlot})</strong>
                </div>
                <div className="meta-row">
                  <span>Service Address:</span>
                  <span>{confirmedBooking.address}</span>
                </div>
                <div className="meta-row">
                  <span>Cosmetics Standard:</span>
                  <strong>{confirmedBooking.brandUsed}</strong>
                </div>
                <div className="meta-row total-row">
                  <span>Total Amount:</span>
                  <strong className="text-pink">₹{confirmedBooking.totalAmount.toLocaleString('en-IN')}</strong>
                </div>
              </div>

              <button onClick={onClose} className="btn btn-pink w-full mt-4">
                Done & Return to Atelier
              </button>
            </div>
          ) : (
            /* Multi-Step Wizard Flow */
            <div>
              {/* STEP 1: Select or Confirm Service */}
              {step === 1 && (
                <div className="wizard-step-content animate-fade-in">
                  <h3 className="step-title">Choose Your Service</h3>
                  <div className="service-pick-list">
                    {[...SERVICE_CATEGORIES.WOMEN, ...SERVICE_CATEGORIES.MEN, ...SERVICE_CATEGORIES.SPECIAL].map((srv) => (
                      <div 
                        key={srv.id} 
                        onClick={() => setSelectedService(srv)}
                        className={`service-pick-item ${selectedService.id === srv.id ? 'selected' : ''}`}
                      >
                        <img src={srv.image} alt={srv.title} className="pick-thumb" />
                        <div className="pick-info">
                          <h4 className="pick-title">{srv.title}</h4>
                          <span className="pick-duration"><Clock size={12} /> {srv.duration}</span>
                        </div>
                        <div className="pick-price">₹{srv.priceFrom.toLocaleString('en-IN')}</div>
                      </div>
                    ))}
                  </div>

                  <div className="wizard-actions">
                    <div></div>
                    <button onClick={() => setStep(2)} className="btn btn-pink">
                      <span>Select Date & Time</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: Date & Slot Selection */}
              {step === 2 && (
                <div className="wizard-step-content animate-fade-in">
                  <h3 className="step-title">When Would You Like the Service?</h3>
                  <div className="selected-summary-chip">
                    <span>Selected: <strong>{selectedService.title}</strong></span>
                    <span>₹{selectedService.priceFrom.toLocaleString('en-IN')}</span>
                  </div>

                  <div className="form-group mt-3">
                    <label className="form-label">Select Date (Mathura Availability)</label>
                    <input 
                      type="date" 
                      value={scheduledDate}
                      onChange={(e) => setScheduledDate(e.target.value)}
                      className="form-input"
                      min="2026-11-02"
                    />
                  </div>

                  <div className="form-group mt-3">
                    <label className="form-label">Select Preferred Time Slot</label>
                    <div className="slots-grid">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setTimeSlot(slot)}
                          className={`slot-pill ${timeSlot === slot ? 'active' : ''}`}
                        >
                          <Clock size={14} />
                          <span>{slot}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="wizard-actions mt-4">
                    <button onClick={() => setStep(1)} className="btn btn-outline">
                      <ChevronLeft size={16} />
                      <span>Back</span>
                    </button>
                    <button onClick={() => setStep(3)} className="btn btn-pink">
                      <span>Enter Address</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: Mathura Location Details */}
              {step === 3 && (
                <div className="wizard-step-content animate-fade-in">
                  <h3 className="step-title">Enter Mathura Service Address</h3>
                  
                  <div className="grid-2">
                    <div className="form-group">
                      <label className="form-label">Your Full Name</label>
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
                        placeholder="e.g. +91 98765 43210" 
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="form-input"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group mt-2">
                    <label className="form-label">Mathura Locality & Pincode</label>
                    <select 
                      value={selectedPincode}
                      onChange={(e) => setSelectedPincode(e.target.value)}
                      className="form-select"
                    >
                      {MATHURA_AREAS.map((area) => (
                        <option key={area.pincode} value={area.pincode}>
                          {area.name} — {area.pincode} ({area.zone})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group mt-2">
                    <label className="form-label">House / Flat / Hotel / Venue Address</label>
                    <textarea 
                      placeholder="e.g. Villa 14, Govardhan Enclave, Near Krishna Nagar Park" 
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

                  <div className="wizard-actions mt-4">
                    <button onClick={() => setStep(2)} className="btn btn-outline">
                      <ChevronLeft size={16} />
                      <span>Back</span>
                    </button>
                    <button 
                      onClick={() => {
                        if (!fullName || !phone || !addressLine) {
                          alert('Please enter your full name, phone number, and address.');
                          return;
                        }
                        setStep(4);
                      }} 
                      className="btn btn-pink"
                    >
                      <span>Choose Brand & Payment</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 4: Brand Preference & Payment Option */}
              {step === 4 && (
                <div className="wizard-step-content animate-fade-in">
                  <h3 className="step-title">Brand Preference & Booking Lock-in</h3>

                  {/* Brand Choice Guarantee */}
                  <div className="brand-options-block">
                    <label className="form-label">Select Cosmetic Brand Used for Your Makeover:</label>
                    
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
                          <span className="badge badge-pink">Default & Included</span>
                        </div>
                        <p className="choice-desc">
                          100% cruelty-free, dewy 16-hour formulas crafted specifically for Indian climates and skin tones.
                        </p>
                      </div>
                    </div>

                    <div 
                      onClick={() => setBrandPreference('ALTERNATIVE_LUXURY')}
                      className={`brand-choice-card ${brandPreference === 'ALTERNATIVE_LUXURY' ? 'active' : ''}`}
                    >
                      <div className="choice-radio">
                        <div className={`radio-dot ${brandPreference === 'ALTERNATIVE_LUXURY' ? 'checked' : ''}`}></div>
                      </div>
                      <div className="choice-text">
                        <div className="choice-header">
                          <strong className="choice-name">Disclosed Luxury Alternative (MAC / Kryolan)</strong>
                          <span className="badge badge-gold">+ ₹750 Material Fee</span>
                        </div>
                        <p className="choice-desc">
                          Full disclosure of authentic sealed third-party kits. Transparently priced for special client requests.
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

                  {/* Summary Pricing Breakdown */}
                  <div className="pricing-summary-card mt-4">
                    <div className="summary-row">
                      <span>Service Fee ({selectedService.title}):</span>
                      <span>₹{basePrice.toLocaleString('en-IN')}</span>
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
                      <span className="text-pink">₹{subtotal.toLocaleString('en-IN')}</span>
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
