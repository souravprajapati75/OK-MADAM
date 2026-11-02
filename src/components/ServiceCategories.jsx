import React, { useState } from 'react';
import { 
  Sparkles, 
  Clock, 
  CheckCircle2, 
  ChevronRight, 
  ArrowRight, 
  Heart, 
  Info,
  ShieldCheck 
} from 'lucide-react';
import { SERVICE_CATEGORIES } from '../data/mockData';

export default function ServiceCategories({ onSelectServiceToBook }) {
  const [activeTab, setActiveTab] = useState('WOMEN');
  const [selectedServiceForModal, setSelectedServiceForModal] = useState(null);

  const currentServices = SERVICE_CATEGORIES[activeTab] || [];

  return (
    <section id="services" className="services-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <Sparkles size={14} />
            <span>Curated At-Home & In-Studio Services</span>
          </div>
          <h2 className="section-title">Elevate Your Occasion with Haute Artistry</h2>
          <p className="section-subtitle">
            Every booking includes certified OK Madam hygienic tool sterilisation, skin undertone matching, and complimentary pre-makeover consultation in Mathura.
          </p>

          {/* Gender & Occasion Segment Switcher: Female, Male, and Combined */}
          <div className="gender-tab-switcher">
            <button
              onClick={() => setActiveTab('WOMEN')}
              className={`gender-tab-btn ${activeTab === 'WOMEN' ? 'active' : ''}`}
            >
              <span>Female (Women's Beauty & Bridal)</span>
              <span className="tab-count-badge">13 Services</span>
            </button>

            <button
              onClick={() => setActiveTab('MEN')}
              className={`gender-tab-btn ${activeTab === 'MEN' ? 'active' : ''}`}
            >
              <span>Male (Men's Groom & Barber)</span>
              <span className="tab-count-badge">9 Services</span>
            </button>

            <button
              onClick={() => setActiveTab('SPECIAL')}
              className={`gender-tab-btn ${activeTab === 'SPECIAL' ? 'active' : ''}`}
            >
              <span>Combined (Bride + Groom & Family Combos)</span>
              <span className="tab-count-badge">Couple Combos</span>
            </button>
          </div>
        </div>

        {/* Services Card Grid */}
        <div className="grid-3 services-grid">
          {currentServices.map((service) => (
            <div key={service.id} className="service-card glass-card">
              <div className="service-img-wrap">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="service-img" 
                  loading="lazy"
                />
                <span className="service-badge">{service.badge}</span>
                <div className="service-duration-pill">
                  <Clock size={13} />
                  <span>{service.duration}</span>
                </div>
              </div>

              <div className="service-body">
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-tagline">{service.tagline}</p>
                <p className="service-card-desc">{service.description}</p>

                {/* Included Inclusions List */}
                <div className="service-inclusions-list">
                  {service.includes.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="inclusion-item">
                      <CheckCircle2 size={14} className="inclusion-icon" />
                      <span>{item}</span>
                    </div>
                  ))}
                  {service.includes.length > 3 && (
                    <button 
                      onClick={() => setSelectedServiceForModal(service)}
                      className="more-inclusions-btn"
                    >
                      + {service.includes.length - 3} more treatments included
                    </button>
                  )}
                </div>

                <div className="service-card-footer">
                  <div className="service-price-block">
                    <span className="price-label">Service Price</span>
                    <span className="price-amount">₹{service.priceFrom.toLocaleString('en-IN')}</span>
                  </div>

                  <button 
                    onClick={() => onSelectServiceToBook(service)}
                    className="btn btn-pink service-book-btn"
                  >
                    <span>Book Now</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Brand Product Guarantee Callout */}
        <div className="brand-product-guarantee-strip">
          <div className="guarantee-icon-box">
            <ShieldCheck size={28} className="text-gold" />
          </div>
          <div className="guarantee-text">
            <h4>OK Madam Proprietary Product Assurance</h4>
            <p>
              By default, all appointments utilize 100% authentic <strong>OK Madam</strong> dermatological formulations. Should you request alternative international luxury kits (MAC, Kryolan), we ensure upfront transparent disclosure with verified product seals.
            </p>
          </div>
        </div>
      </div>

      {/* Service Details Modal */}
      {selectedServiceForModal && (
        <div className="modal-backdrop" onClick={() => setSelectedServiceForModal(null)}>
          <div className="modal-sheet glass-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <span className="badge badge-pink">{selectedServiceForModal.badge}</span>
                <h3 className="modal-title mt-1">{selectedServiceForModal.title}</h3>
                <span className="modal-duration"><Clock size={13} /> {selectedServiceForModal.duration}</span>
              </div>
              <button 
                onClick={() => setSelectedServiceForModal(null)}
                className="modal-close-btn"
              >
                ✕
              </button>
            </div>

            <div className="modal-body">
              <p className="modal-description">{selectedServiceForModal.description}</p>
              <h4 className="modal-subheading">Complete Treatment Protocol & Inclusions:</h4>
              <ul className="modal-full-inclusions">
                {selectedServiceForModal.includes.map((inc, i) => (
                  <li key={i}>
                    <CheckCircle2 size={16} className="text-pink" />
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>

              <div className="modal-pricing-box">
                <div>
                  <span className="price-label">Mathura Fixed Price</span>
                  <div className="modal-price">₹{selectedServiceForModal.priceFrom.toLocaleString('en-IN')}</div>
                  <span className="tax-sub">Includes travel & disposable sanitization kit</span>
                </div>
                <button 
                  onClick={() => {
                    const s = selectedServiceForModal;
                    setSelectedServiceForModal(null);
                    onSelectServiceToBook(s);
                  }}
                  className="btn btn-pink btn-lg"
                >
                  Proceed to Schedule
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
