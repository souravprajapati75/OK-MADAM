import React, { useState } from 'react';
import { 
  User, 
  Calendar, 
  ShoppingBag, 
  MapPin, 
  ShieldCheck, 
  Clock, 
  ChevronRight, 
  CheckCircle, 
  Phone 
} from 'lucide-react';

export default function CustomerAccount({ isOpen, onClose, userBookings = [] }) {
  const [activeTab, setActiveTab] = useState('BOOKINGS'); // 'BOOKINGS', 'ORDERS', 'ADDRESSES'

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div className="account-modal glass-card" onClick={(e) => e.stopPropagation()}>
        <div className="account-modal-header">
          <div className="account-user-badge">
            <div className="account-avatar">
              <User size={24} />
            </div>
            <div>
              <h3 className="user-name">Ananya Agarwal</h3>
              <span className="user-city">Mathura, UP • Member since 2026</span>
            </div>
          </div>
          <button onClick={onClose} className="modal-close-btn">✕</button>
        </div>

        {/* Tab Switcher */}
        <div className="account-tabs">
          <button 
            onClick={() => setActiveTab('BOOKINGS')}
            className={`acc-tab-btn ${activeTab === 'BOOKINGS' ? 'active' : ''}`}
          >
            <Calendar size={15} />
            <span>My Bookings ({userBookings.length})</span>
          </button>

          <button 
            onClick={() => setActiveTab('ORDERS')}
            className={`acc-tab-btn ${activeTab === 'ORDERS' ? 'active' : ''}`}
          >
            <ShoppingBag size={15} />
            <span>Cosmetics Orders (1)</span>
          </button>

          <button 
            onClick={() => setActiveTab('ADDRESSES')}
            className={`acc-tab-btn ${activeTab === 'ADDRESSES' ? 'active' : ''}`}
          >
            <MapPin size={15} />
            <span>Saved Mathura Addresses</span>
          </button>
        </div>

        {/* Tab Body */}
        <div className="account-body">
          {activeTab === 'BOOKINGS' && (
            <div className="acc-bookings-view animate-fade-in">
              {userBookings.length === 0 ? (
                <div className="empty-acc-state">
                  <Calendar size={40} className="empty-icon" />
                  <h4>No Active Bookings Found</h4>
                  <p>Schedule your bridal or party makeover directly with our verified Mathura artists.</p>
                </div>
              ) : (
                <div className="bookings-history-list">
                  {userBookings.map((b, idx) => (
                    <div key={idx} className="acc-booking-card glass-card">
                      <div className="booking-card-top">
                        <div>
                          <span className="booking-ref-badge">{b.bookingId}</span>
                          <h4 className="mt-1">{b.serviceTitle}</h4>
                          <span className="booking-datetime">
                            <Clock size={13} /> {b.date} • {b.timeSlot}
                          </span>
                        </div>
                        <div className="booking-status-tag">
                          <span className="badge badge-pink">Confirmed</span>
                        </div>
                      </div>

                      <div className="otp-reminder-strip">
                        <span>Arrival Security OTP: <strong>{b.otpCode}</strong></span>
                        <span className="sub-hint">(Share with artist upon arrival)</span>
                      </div>

                      <div className="booking-card-bottom">
                        <div className="assigned-pro-chip">
                          <img src={b.assignedPro.avatar} alt={b.assignedPro.name} className="pro-chip-avatar" />
                          <div>
                            <span className="pro-chip-name">{b.assignedPro.name}</span>
                            <span className="pro-chip-phone">{b.assignedPro.phone}</span>
                          </div>
                        </div>

                        <div className="booking-financial-chip">
                          <span>Advance Paid: <strong>₹{b.advancePaid}</strong></span>
                          <span>Balance: <strong>₹{b.balanceRemaining}</strong></span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === 'ORDERS' && (
            <div className="acc-orders-view animate-fade-in">
              <div className="acc-order-card glass-card">
                <div className="order-header-line">
                  <div>
                    <strong>Order #OKM-MTR-8812</strong>
                    <span className="order-date-sub">Placed on Nov 2, 2026</span>
                  </div>
                  <span className="badge badge-gold">Processing at Mathura Hub</span>
                </div>

                <div className="order-items-summary mt-2">
                  <div className="order-item-mini">
                    <img src="/images/product-luxury-palette.png" alt="Foundation" className="mini-thumb" />
                    <div>
                      <span>OK MADAM Skin Silk HD Foundation (Warm Sand 01)</span>
                      <span className="mini-qty">Qty: 1 • ₹1,199</span>
                    </div>
                  </div>
                </div>

                <div className="order-footer-line mt-3">
                  <span>Delivery to: Krishna Nagar, Mathura - 281001</span>
                  <strong>Total: ₹1,199</strong>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'ADDRESSES' && (
            <div className="acc-addresses-view animate-fade-in">
              <div className="address-card glass-card">
                <div className="address-tag-row">
                  <span className="badge badge-pink">Home (Primary)</span>
                </div>
                <h4 className="mt-1">Ananya Agarwal</h4>
                <p className="address-text">
                  Flat 302, Govardhan Heights, Opposite Brijwasi Sweets, Krishna Nagar, Mathura, Uttar Pradesh - 281001
                </p>
                <div className="address-phone mt-1">
                  <Phone size={13} /> +91 98765 43210
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
