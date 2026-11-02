import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Search, 
  Filter, 
  Info,
  Calendar 
} from 'lucide-react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { SERVICE_CATEGORIES } from '../data/mockData';

export default function ServicesPage({ onSelectServiceToBook }) {
  const { categoryFilter } = useParams();
  const navigate = useNavigate();

  // Active Category State: 'ALL', 'WOMEN', 'MEN', 'BRIDAL', 'GROOM', 'PARTY', 'PACKAGES'
  const [activeTab, setActiveTab] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedServiceModal, setSelectedServiceModal] = useState(null);

  useEffect(() => {
    if (categoryFilter) {
      const formatted = categoryFilter.toUpperCase();
      if (['WOMEN', 'MEN', 'BRIDAL', 'GROOM', 'PARTY', 'PACKAGES'].includes(formatted)) {
        setActiveTab(formatted);
      }
    }
  }, [categoryFilter]);

  // Consolidate all services with category tags
  const allServices = [
    ...SERVICE_CATEGORIES.WOMEN.map(s => ({ ...s, genderCategory: 'WOMEN' })),
    ...SERVICE_CATEGORIES.MEN.map(s => ({ ...s, genderCategory: 'MEN' })),
    ...SERVICE_CATEGORIES.SPECIAL.map(s => ({ ...s, genderCategory: 'PACKAGES' }))
  ];

  // Filtering Logic
  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          service.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (!matchesSearch) return false;

    if (activeTab === 'ALL') return true;
    if (activeTab === 'WOMEN') return service.genderCategory === 'WOMEN';
    if (activeTab === 'MEN') return service.genderCategory === 'MEN';
    if (activeTab === 'BRIDAL') return service.subCategory === 'Bridal';
    if (activeTab === 'GROOM') return service.subCategory === 'Groom';
    if (activeTab === 'PARTY') return service.subCategory === 'Party';
    if (activeTab === 'PACKAGES') return service.genderCategory === 'PACKAGES';
    return true;
  });

  const handleBookClick = (service) => {
    if (onSelectServiceToBook) {
      onSelectServiceToBook(service);
    }
    navigate('/book');
  };

  return (
    <div className="services-page-wrap">
      {/* Header Banner */}
      <section className="page-header-banner">
        <div className="container">
          <span className="badge badge-gold mb-2">Doorstep & Atelier Artistry</span>
          <h1 className="page-title">Curated Beauty & Makeup Services</h1>
          <p className="page-subtitle">
            Explore our comprehensive menu of high-definition makeovers, royal bridal packages, and precision grooming in Mathura. All prices are transparent sample rates with zero hidden surge fees.
          </p>

          {/* Quick Filter Navigation Bar */}
          <div className="services-nav-bar mt-4">
            <button
              onClick={() => setActiveTab('ALL')}
              className={`filter-btn ${activeTab === 'ALL' ? 'active' : ''}`}
            >
              All Services ({allServices.length})
            </button>
            <button
              onClick={() => setActiveTab('WOMEN')}
              className={`filter-btn ${activeTab === 'WOMEN' ? 'active' : ''}`}
            >
              Women's Beauty (13)
            </button>
            <button
              onClick={() => setActiveTab('MEN')}
              className={`filter-btn ${activeTab === 'MEN' ? 'active' : ''}`}
            >
              Men's Grooming (9)
            </button>
            <button
              onClick={() => setActiveTab('BRIDAL')}
              className={`filter-btn ${activeTab === 'BRIDAL' ? 'active' : ''}`}
            >
              Bridal & Engagement
            </button>
            <button
              onClick={() => setActiveTab('GROOM')}
              className={`filter-btn ${activeTab === 'GROOM' ? 'active' : ''}`}
            >
              Wedding Groom
            </button>
            <button
              onClick={() => setActiveTab('PARTY')}
              className={`filter-btn ${activeTab === 'PARTY' ? 'active' : ''}`}
            >
              Party & Sangeet Glam
            </button>
            <button
              onClick={() => setActiveTab('PACKAGES')}
              className={`filter-btn ${activeTab === 'PACKAGES' ? 'active' : ''}`}
            >
              Wedding Packages (6)
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container py-5">
        {/* Search & Notice Bar */}
        <div className="services-ctrl-bar mb-4">
          <div className="search-input-box">
            <Search size={18} className="search-icon" />
            <input 
              type="text" 
              placeholder="Search treatments (e.g. Bridal, Safa, Saree, Haldi, Airbrush)..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="service-search-input"
            />
          </div>

          <div className="demo-price-disclaimer-pill">
            <Info size={15} />
            <span>*All displayed prices are editable sample rates configurable in Admin</span>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid-3 services-page-grid">
          {filteredServices.map(service => (
            <div key={service.id} className="service-card glass-card">
              <div className="service-img-wrap">
                <img src={service.image} alt={service.title} className="service-img" loading="lazy" />
                <span className="service-badge">{service.badge}</span>
                <div className="service-duration-pill">
                  <Clock size={13} />
                  <span>{service.duration}</span>
                </div>
              </div>

              <div className="service-body">
                <span className="service-sub-tag">{service.subCategory || service.genderCategory}</span>
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-tagline">{service.tagline}</p>
                <p className="service-card-desc">{service.description}</p>

                <div className="service-inclusions-list">
                  <span className="inclusions-heading">What's Included:</span>
                  {service.includes.slice(0, 3).map((inc, i) => (
                    <div key={i} className="inclusion-item">
                      <CheckCircle2 size={14} className="inclusion-icon" />
                      <span>{inc}</span>
                    </div>
                  ))}
                  {service.includes.length > 3 && (
                    <button 
                      onClick={() => setSelectedServiceModal(service)}
                      className="more-inclusions-btn"
                    >
                      + {service.includes.length - 3} more treatments included
                    </button>
                  )}
                </div>

                <div className="service-card-footer">
                  <div className="service-price-block">
                    <span className="price-label">Starting Price*</span>
                    <span className="price-amount">₹{service.priceFrom.toLocaleString('en-IN')}</span>
                    <span className="demo-tag-sub">Demo Sample Price</span>
                  </div>

                  <div className="service-actions-pair">
                    <button 
                      onClick={() => setSelectedServiceModal(service)}
                      className="btn btn-outline btn-sm"
                      title="View Complete Scope"
                    >
                      Details
                    </button>
                    <button 
                      onClick={() => handleBookClick(service)}
                      className="btn btn-pink btn-sm"
                    >
                      <Calendar size={14} />
                      <span>Book Now</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Brand Product Guarantee Notice */}
        <div className="brand-product-guarantee-strip mt-5">
          <div className="guarantee-icon-box">
            <ShieldCheck size={28} className="text-gold" />
          </div>
          <div className="guarantee-text">
            <h4>OK MADAM Proprietary Formulation Standard</h4>
            <p>
              By default, all at-home and in-studio bookings utilize 100% authentic <strong>OK MADAM</strong> dermatologically tested, cruelty-free cosmetic lines. Where clients request third-party luxury brands (MAC, Kryolan), we provide full disclosure with verified sealed materials.
            </p>
          </div>
        </div>
      </div>

      {/* Service Details Modal */}
      {selectedServiceModal && (
        <div className="modal-backdrop" onClick={() => setSelectedServiceModal(null)}>
          <div className="modal-sheet glass-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <span className="badge badge-pink">{selectedServiceModal.badge}</span>
                <h3 className="modal-title mt-1">{selectedServiceModal.title}</h3>
                <span className="modal-duration"><Clock size={13} /> {selectedServiceModal.duration}</span>
              </div>
              <button onClick={() => setSelectedServiceModal(null)} className="modal-close-btn">✕</button>
            </div>

            <div className="modal-body">
              <p className="modal-description">{selectedServiceModal.description}</p>
              <h4 className="modal-subheading">Complete Treatment Protocol & Inclusions:</h4>
              <ul className="modal-full-inclusions">
                {selectedServiceModal.includes.map((inc, i) => (
                  <li key={i}>
                    <CheckCircle2 size={16} className="text-pink" />
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>

              <div className="modal-pricing-box">
                <div>
                  <span className="price-label">Mathura Fixed Price*</span>
                  <div className="modal-price">₹{selectedServiceModal.priceFrom.toLocaleString('en-IN')}</div>
                  <span className="tax-sub">*Demo Price (Editable) • Includes travel & sanitized disposable kit</span>
                </div>
                <button 
                  onClick={() => {
                    const s = selectedServiceModal;
                    setSelectedServiceModal(null);
                    handleBookClick(s);
                  }}
                  className="btn btn-pink btn-lg"
                >
                  Schedule Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
