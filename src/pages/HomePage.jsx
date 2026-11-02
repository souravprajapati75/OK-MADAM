import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  ShieldCheck, 
  Star, 
  Calendar, 
  ShoppingBag, 
  MapPin, 
  ArrowRight, 
  ChevronRight, 
  ChevronLeft, 
  CheckCircle2, 
  HeartHandshake, 
  Smile, 
  MessageSquare, 
  Award, 
  Play,
  Users,
  Building2,
  Briefcase,
  Check,
  Eye,
  Package
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  SERVICE_CATEGORIES, 
  PROPRIETARY_PRODUCTS, 
  CERTIFIED_ARTISTS, 
  DEMO_REVIEWS,
  MATHURA_AREAS 
} from '../data/mockData';
import HorizontalSlidingMarquee from '../components/HorizontalSlidingMarquee';
import VerticalSlidingRunway from '../components/VerticalSlidingRunway';
import MathuraLiveDispatchMap from '../components/MathuraLiveDispatchMap';
import Interactive3DVanityBox from '../components/Interactive3DVanityBox';
import FounderVisionSection from '../components/FounderVisionSection';

export default function HomePage({ onOpenBooking, onAddToCart }) {
  const navigate = useNavigate();

  // 1. Hero Slider State
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const heroSlides = [
    {
      badge: 'Mathura Haute Atelier',
      title: 'The Science of Radiance. The Art of You.',
      subtitle: 'Where proprietary luxury Indian cosmetics meet verified bridal, groom, and party makeover artists at your doorstep in Mathura.',
      image: '/images/hero-luxury-cosmetics.jpg',
      ctaPrimary: 'Book Home Artist',
      ctaSecondary: 'Shop Cosmetics',
      ctaPrimaryLink: '/book',
      ctaSecondaryLink: '/store'
    },
    {
      badge: 'Royal Wedding Season',
      title: 'Grand Bridal & Groom Artistry for Royal Moments.',
      subtitle: 'Customized high-definition airbrush makeovers and royal safa styling crafted specifically for North Indian wedding celebrations.',
      image: '/images/ok-madam-couple-makeover.jpg',
      ctaPrimary: 'Explore Bridal Packages',
      ctaSecondary: 'Groom Grooming',
      ctaPrimaryLink: '/services/bridal',
      ctaSecondaryLink: '/services/groom'
    },
    {
      badge: 'Clean Formulations',
      title: 'Dermatological Glamour Made for Indian Skin.',
      subtitle: '16-hour sweat-proof, transfer-proof formulations infused with Kashmiri Saffron and Damask Rose Water.',
      image: '/images/product-rose-serum-collection.png',
      ctaPrimary: 'Explore The Store',
      ctaSecondary: 'Become a Partner',
      ctaPrimaryLink: '/store',
      ctaSecondaryLink: '/partner'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  // 2. Journey Slider State
  const [journeyIndex, setJourneyIndex] = useState(0);
  const journeySlides = [
    {
      step: 'Stage 01',
      title: 'The Mathura Conception',
      desc: 'Founded in the spiritual and cultural heart of Mathura to bring high-fashion runway beauty and verified doorstep makeup artists to Tier-2 & Tier-1 India.',
      image: '/images/luxury-salon-vanity.jpg',
      tag: 'Heritage & Roots'
    },
    {
      step: 'Stage 02',
      title: '100% Sanitized Artist SOPs',
      desc: 'Every certified OK Madam artist is equipped with single-use sterile tools, autoclaved brushes, and sealed proprietary product kits.',
      image: '/images/mua-artist-brushing.jpg',
      tag: 'Safety Protocol'
    },
    {
      step: 'Stage 03',
      title: 'Clean Formulation Atelier',
      desc: 'Formulated without parabens or harsh silicones. We engineer pigments that withstand intense daytime haldi turmeric ceremonies and late-night pheras.',
      image: '/images/product-liquid-lipsticks.jpg',
      tag: 'Cosmetic Innovation'
    },
    {
      step: 'Stage 04',
      title: 'Experiential Franchise Lounges',
      desc: 'Expanding from our Mathura flagship to turnkey beauty studio lounges and authorized salon retail partnerships across Uttar Pradesh.',
      image: '/images/franchise-retail-store.jpg',
      tag: 'Expansion Vision'
    }
  ];

  // 3. Counter Animation State (Target goals)
  const [feedbackCount, setFeedbackCount] = useState(0);
  const [smilesCount, setSmilesCount] = useState(0);

  useEffect(() => {
    let currentFeedback = 0;
    let currentSmiles = 0;
    const interval = setInterval(() => {
      if (currentFeedback < 10000) {
        currentFeedback += 200;
        setFeedbackCount(currentFeedback);
      }
      if (currentSmiles < 100000) {
        currentSmiles += 2000;
        setSmilesCount(currentSmiles);
      }
    }, 30);
    return () => clearInterval(interval);
  }, []);

  // 4. Testimonial Slider State
  const [reviewIndex, setReviewIndex] = useState(0);

  // 5. Transformations Before/After State
  const [activeTransformationTab, setActiveTransformationTab] = useState('BRIDAL');
  const transformationDemos = [
    {
      id: 't-1',
      category: 'BRIDAL',
      title: 'Royal Mandap Bridal HD Transformation',
      location: 'Krishna Nagar, Mathura',
      prepSkin: 'Dehydrated, uneven pigmentation under temple sun',
      finalLook: 'Flawless 16-Hour Sweatproof Glass Skin with Golden Shimmer',
      image: '/images/model-bridal-royal.jpg',
      artist: 'Neha Sharma (Lead MUA)',
      products: 'OK MADAM 16H HD Foundation & Phera Mineral Compact'
    },
    {
      id: 't-2',
      category: 'GROOM',
      title: 'Maharaja Groom Architecture & Safa Sculpt',
      location: 'Dampier Nagar, Mathura',
      prepSkin: 'Post-beard razor burn and forehead shine',
      finalLook: 'Invisible Matte Complexion with Razor-Sharp Beard Outline',
      image: '/images/model-groom-white-sherwani.png',
      artist: 'Rohit Kashyap (Groom Stylist)',
      products: 'OK MADAM Men Matte Skin Tone Balancer & Cedar Beard Oil'
    },
    {
      id: 't-3',
      category: 'COUPLE',
      title: 'Harmonized Royal Couple Wedding Makeover',
      location: 'Highway NH-19 Resort, Mathura',
      prepSkin: 'Tired festive fatigue from pre-wedding sangeet night',
      finalLook: 'Synchronized Luminous Glow matching Pastel Sherwani & Lehenga',
      image: '/images/ok-madam-couple-makeover.jpg',
      artist: 'Priya Verma & Amit Saxena',
      products: 'OK MADAM Dual Master Suite (Airbrush + Safa Alignment)'
    }
  ];

  return (
    <div className="home-page-container">
      {/* =========================================================================
          SECTION 1: HERO SLIDER (Brand Anthem & Direct Action Buttons)
          ========================================================================= */}
      <section className="hero-slider-section">
        {heroSlides.map((slide, idx) => (
          <div
            key={idx}
            className={`hero-slide-pane ${idx === currentHeroSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="hero-slide-overlay">
              <div className="container hero-slide-inner">
                <div className="slide-content-box animate-fade-in">
                  <div className="flex items-center gap-2 mb-3">
                    <img 
                      src="/images/ok-madam-logo-hq.jpg" 
                      alt="OK MADAM" 
                      style={{ width: '38px', height: '38px', borderRadius: '50%', border: '2px solid #C5A059' }} 
                    />
                    <span className="badge badge-gold">{slide.badge}</span>
                  </div>
                  <h1 className="hero-slide-title">{slide.title}</h1>
                  <p className="hero-slide-desc">{slide.subtitle}</p>
                  <div className="hero-slide-actions mt-4 flex flex-wrap gap-3">
                    <Link to={slide.ctaPrimaryLink} className="btn btn-pink btn-lg">
                      <Calendar size={18} />
                      <span>{slide.ctaPrimary}</span>
                    </Link>
                    <Link to={slide.ctaSecondaryLink} className="btn btn-outline btn-lg text-white">
                      <span>{slide.ctaSecondary}</span>
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Hero Slider Dots */}
        <div className="hero-slider-nav">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentHeroSlide(i)}
              className={`hero-dot-btn ${i === currentHeroSlide ? 'active' : ''}`}
            ></button>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: TRUST & HYGIENE STRIP BAR
          ========================================================================= */}
      <div className="trust-strip-bar">
        <div className="container trust-strip-flex">
          <div className="trust-strip-item">
            <ShieldCheck size={20} className="text-pink" />
            <span>100% Sanitized & Autoclaved Tools</span>
          </div>
          <div className="trust-strip-item">
            <Sparkles size={20} className="text-gold" />
            <span>Proprietary 16-Hour Sweatproof Formulas</span>
          </div>
          <div className="trust-strip-item">
            <MapPin size={20} className="text-pink" />
            <span>Serving All 20+ Mathura Municipal Zones</span>
          </div>
          <div className="trust-strip-item">
            <Star size={20} className="text-gold" />
            <span>Police-Verified Background-Checked MUAs</span>
          </div>
        </div>
      </div>

      {/* =========================================================================
          SECTION 3: HORIZONTAL INFINITE SLIDING RUNWAY GALLERY (36+ Looks)
          ========================================================================= */}
      <HorizontalSlidingMarquee />

      {/* =========================================================================
          SECTION 4: GENDER & SERVICE SPECTRUM (Female, Male, and Combined)
          ========================================================================= */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">
              <Sparkles size={14} /> At-Home & In-Studio Artistry
            </span>
            <h2 className="section-title">Select Your Service Spectrum</h2>
            <p className="section-subtitle">
              Whether you need individual bridal couture, sharp groom architecture, or combined couple and wedding family packages across Mathura.
            </p>
          </div>

          <div className="grid-3 service-showcase-grid">
            {/* Spectrum 1: Women */}
            <div className="showcase-category-card glass-card">
              <div className="showcase-img-wrap">
                <img src="/images/model-bridal-royal.jpg" alt="Women's Beauty & Bridal" />
                <span className="showcase-tag">13 Services</span>
              </div>
              <div className="showcase-body">
                <span className="badge badge-pink mb-1 text-xs">Female Specialist</span>
                <h3>Women's Beauty & Bridal</h3>
                <p>Bridal HD, Airbrush, Haldi, Mehndi, Reception, Saree Draping, and Organic Facials.</p>
                <div className="showcase-footer">
                  <span className="showcase-price">From ₹999*</span>
                  <Link to="/services/women" className="btn btn-pink btn-sm">
                    <span>View All 13 Services</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Spectrum 2: Men */}
            <div className="showcase-category-card glass-card">
              <div className="showcase-img-wrap">
                <img src="/images/model-groom-white-sherwani.png" alt="Men's Royal Grooming" />
                <span className="showcase-tag">9 Services</span>
              </div>
              <div className="showcase-body">
                <span className="badge badge-gold mb-1 text-xs">Male Grooming</span>
                <h3>Men's Royal Grooming</h3>
                <p>Wedding Groom Makeover, Beard Architecture, Safa/Turban Tying, and Charcoal Facials.</p>
                <div className="showcase-footer">
                  <span className="showcase-price">From ₹799*</span>
                  <Link to="/services/men" className="btn btn-pink btn-sm">
                    <span>View All 9 Services</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Spectrum 3: Combined Couple & Family */}
            <div className="showcase-category-card glass-card">
              <div className="showcase-img-wrap">
                <img src="/images/ok-madam-couple-makeover.jpg" alt="Bride and Groom Couple Makeover" />
                <span className="showcase-tag">Couple & Family</span>
              </div>
              <div className="showcase-body">
                <span className="badge badge-emerald mb-1 text-xs">Combined Packages</span>
                <h3>Bride + Groom Couple Combos</h3>
                <p>Harmonized 2-artist team dispatched to your venue so Bride and Groom are styled together seamlessly.</p>
                <div className="showcase-footer">
                  <span className="showcase-price">From ₹16,999*</span>
                  <Link to="/services/packages" className="btn btn-pink btn-sm">
                    <span>Explore Couple Combos</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-5">
            <Link to="/services" className="btn btn-outline btn-lg">
              <span>View Complete 28+ Service Price Catalog</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: VERTICAL SLIDING RUNWAY (3 Moving Columns Up & Down)
          ========================================================================= */}
      <VerticalSlidingRunway />

      {/* =========================================================================
          SECTION 6: INTERACTIVE 3D VANITY BOX ATELIER & BRAND FREEDOM
          ========================================================================= */}
      <Interactive3DVanityBox />

      {/* =========================================================================
          SECTION 7: CUSTOMER TRUST, HAPPINESS & BRAND IMPACT SECTION
          ========================================================================= */}
      <section 
        className="brand-impact-section"
        style={{ backgroundImage: `url('/images/luxury-salon-vanity.jpg')` }}
      >
        <div className="brand-impact-overlay">
          <div className="container impact-container">
            <span className="impact-badge">
              <HeartHandshake size={15} /> Customer Trust & Happiness Vision
            </span>

            <h2 className="impact-main-heading">
              10,000+ Feedbacks. 100,000+ Smiles We Aim to Create.
            </h2>

            <p className="impact-subheading">
              "Your Beauty, Your Confidence, Our Commitment."
            </p>

            <p className="impact-body-message">
              At OK MADAM, true luxury is measured by the confidence and joy our clients feel in every celebration. From our pilot atelier in Mathura to our expanding multi-city presence, we continuously evolve our formulations, hygiene audits, and artistry standards with your trust at the center.
            </p>

            {/* Two Large Animated Counters */}
            <div className="impact-counters-grid">
              <div className="impact-counter-card">
                <div className="counter-number">
                  {feedbackCount.toLocaleString('en-IN')}+
                </div>
                <div className="counter-label">
                  Customer Feedbacks — Our Growth Target
                </div>
                <span className="counter-note">Active listening & continuous SOP refinement</span>
              </div>

              <div className="impact-counter-card">
                <div className="counter-number">
                  {smilesCount.toLocaleString('en-IN')}+
                </div>
                <div className="counter-label">
                  Happy Customers — Our Vision
                </div>
                <span className="counter-note">Pan-India doorstep artistry roadmap</span>
              </div>
            </div>

            <div className="impact-actions mt-4 flex flex-wrap justify-center gap-3">
              <Link to="/services" className="btn btn-pink btn-lg">
                <Sparkles size={18} />
                <span>Explore Our Services</span>
              </Link>
              <Link to="/book" className="btn btn-outline btn-lg text-white">
                <span>Book Appointment in Mathura</span>
              </Link>
            </div>

            <div className="impact-disclaimer-note">
              *Disclaimer: These figures reflect OK MADAM's operational targets and customer satisfaction vision as we scale our verified artist network from Mathura across Uttar Pradesh.
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: LIVE MATHURA QUERY & DISPATCH ROUTE TRACKER (20+ Localities)
          ========================================================================= */}
      <MathuraLiveDispatchMap />

      {/* =========================================================================
          SECTION 9: A JOURNEY OF BEAUTY WITH OK MADAM (Brand Heritage Slider)
          ========================================================================= */}
      <section className="section-padding bg-pink-soft">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">
              <Award size={14} /> Brand Genesis & Heritage
            </span>
            <h2 className="section-title">A Journey of Beauty with OK MADAM</h2>
            <p className="section-subtitle">
              From high-performance formulas developed in Mathura to our certified artist network and expanding experiential studio lounges.
            </p>
          </div>

          <div className="journey-slider-wrapper glass-card">
            <div className="journey-slide-grid">
              <div className="journey-img-pane">
                <img 
                  src={journeySlides[journeyIndex].image} 
                  alt={journeySlides[journeyIndex].title} 
                  className="journey-slide-img"
                />
                <span className="journey-tag-badge">{journeySlides[journeyIndex].tag}</span>
              </div>

              <div className="journey-text-pane">
                <span className="journey-step-num">{journeySlides[journeyIndex].step}</span>
                <h3 className="journey-slide-title">{journeySlides[journeyIndex].title}</h3>
                <p className="journey-slide-desc">{journeySlides[journeyIndex].desc}</p>

                <div className="journey-controls mt-4">
                  <div className="journey-dots">
                    {journeySlides.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setJourneyIndex(i)}
                        className={`journey-dot ${i === journeyIndex ? 'active' : ''}`}
                      ></button>
                    ))}
                  </div>

                  <div className="journey-arrow-btns">
                    <button
                      onClick={() => setJourneyIndex((prev) => (prev === 0 ? journeySlides.length - 1 : prev - 1))}
                      className="slider-arrow-btn"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button
                      onClick={() => setJourneyIndex((prev) => (prev + 1) % journeySlides.length)}
                      className="slider-arrow-btn"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-top">
                  <Link to="/about" className="btn btn-outline btn-sm">
                    <span>Read Our Complete Brand Story</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 10: PROPRIETARY COSMETICS ATELIER & PRODUCT SHOWCASE
          ========================================================================= */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">
              <ShoppingBag size={14} /> The OK MADAM Atelier
            </span>
            <h2 className="section-title">Proprietary Cosmetics & Kits</h2>
            <p className="section-subtitle">
              High-performance, cruelty-free cosmetics formulated to thrive in Indian heat, humidity, and festive wedding schedules.
            </p>
          </div>

          <div className="grid-3 product-preview-grid">
            {PROPRIETARY_PRODUCTS.slice(0, 3).map((prod) => (
              <div key={prod.id} className="product-card glass-card">
                <div className="product-img-wrap">
                  <img src={prod.image} alt={prod.name} className="product-img" />
                  <span className="badge badge-pink position-top-left">{prod.badge}</span>
                  <span className="discount-tag position-top-right">{prod.discount}</span>
                </div>
                <div className="product-body">
                  <span className="product-category-sub">{prod.category}</span>
                  <h3 className="product-title">{prod.name}</h3>
                  <p className="product-summary">{prod.summary}</p>
                  <div className="product-card-footer">
                    <div className="product-price-block">
                      <span className="current-price">₹{prod.price.toLocaleString('en-IN')}</span>
                      <span className="mrp-price">₹{prod.mrp.toLocaleString('en-IN')}</span>
                    </div>
                    <button onClick={() => onAddToCart(prod)} className="btn btn-pink btn-sm">
                      <ShoppingBag size={14} />
                      <span>Add to Bag</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-5 flex justify-center gap-3 flex-wrap">
            <Link to="/store" className="btn btn-pink btn-lg">
              <ShoppingBag size={16} />
              <span>Explore Complete Cosmetics Store (9 Categories)</span>
            </Link>
            <Link to="/store" className="btn btn-outline btn-lg">
              <Package size={16} />
              <span>Inspect OK MADAM Luxury Packaging & Logo Specs</span>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 11: REAL CLIENT TRANSFORMATIONS & MAKEOVER SPOTLIGHT
          ========================================================================= */}
      <section className="section-padding bg-pink-soft">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">
              <Sparkles size={14} /> Real Before-to-After Artistry
            </span>
            <h2 className="section-title">Client Transformations in Mathura</h2>
            <p className="section-subtitle">
              Witness how our certified artists prep skin, match tone architecture, and sculpt memorable looks for holy ceremonies.
            </p>

            <div className="flex justify-center gap-2 mt-3">
              {['BRIDAL', 'GROOM', 'COUPLE'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTransformationTab(tab)}
                  className={`btn btn-xs ${activeTransformationTab === tab ? 'btn-pink' : 'btn-outline'}`}
                >
                  {tab === 'BRIDAL' ? "Bride Makeover" : tab === 'GROOM' ? "Groom Makeover" : "Couple Suite"}
                </button>
              ))}
            </div>
          </div>

          <div className="transformations-showcase-grid mt-4">
            {transformationDemos
              .filter(t => t.category === activeTransformationTab)
              .map((t) => (
                <div key={t.id} className="transformation-featured-card glass-card">
                  <div className="transformation-split-visual">
                    <img src={t.image} alt={t.title} className="transformation-img" />
                    <div className="transformation-meta-overlay">
                      <span className="badge badge-gold">{t.location}</span>
                      <h4>{t.title}</h4>
                    </div>
                  </div>

                  <div className="transformation-notes-body p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                      <div className="prep-box p-3 rounded-lg bg-pink-50">
                        <span className="text-xs font-bold text-pink-600 block">Skin & Face Prep:</span>
                        <p className="text-xs text-grey-700 mt-1">{t.prepSkin}</p>
                      </div>
                      <div className="result-box p-3 rounded-lg bg-emerald-50">
                        <span className="text-xs font-bold text-emerald-700 block">Final Makeover Result:</span>
                        <p className="text-xs text-grey-700 mt-1">{t.finalLook}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-top text-xs text-grey-600">
                      <span>Artistry: <strong>{t.artist}</strong></span>
                      <Link to="/transformations" className="text-pink font-bold flex items-center gap-1">
                        <span>View Portfolio Gallery</span>
                        <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 12: MATHURA CERTIFIED ARTISTS ROSTER
          ========================================================================= */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">
              <Users size={14} /> Police & Skill Verified
            </span>
            <h2 className="section-title">Meet Mathura's Top Beauty Professionals</h2>
            <p className="section-subtitle">
              Every artist undergoes 4-stage screening: Aadhaar identity verification, portfolio audit, sanitization exam, and live model trials.
            </p>
          </div>

          <div className="grid-3 artist-preview-grid">
            {CERTIFIED_ARTISTS.slice(0, 3).map((artist) => (
              <div key={artist.id} className="artist-profile-card glass-card">
                <div className="artist-avatar-wrap">
                  <img src={artist.avatar} alt={artist.name} className="artist-avatar-img" />
                  <span className="artist-badge-verified">
                    <ShieldCheck size={12} /> Verified MUA
                  </span>
                </div>
                <div className="artist-card-body text-center p-3">
                  <h3 className="artist-name">{artist.name}</h3>
                  <span className="artist-specialty-tag">{artist.specialty}</span>
                  <div className="artist-rating-stars my-2">
                    {[...Array(5)].map((_, s) => (
                      <Star key={s} size={12} fill="#C5A059" color="#C5A059" />
                    ))}
                    <span className="rating-num-text ml-1">{artist.rating} ({artist.reviewsCount})</span>
                  </div>
                  <p className="artist-bio-snippet text-xs text-grey-600">{artist.bio}</p>
                  <div className="mt-3 pt-2 border-top flex items-center justify-between text-xs">
                    <span>Base: <strong>{artist.location}</strong></span>
                    <Link to="/book" className="btn btn-pink btn-xs">
                      <span>Book Artist</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-4">
            <Link to="/artists" className="btn btn-outline btn-sm">
              <span>View All 28+ Verified Mathura Artists</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 13: CUSTOMER REVIEWS & FEEDBACK SLIDER
          ========================================================================= */}
      <section className="section-padding bg-pink-soft">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">
              <Smile size={14} /> Authentic Experiences
            </span>
            <h2 className="section-title">Loved by Brides, Grooms & Families</h2>
            <p className="section-subtitle">
              Authentic feedback from Mathura residents who experienced our doorstep artistry.
            </p>
          </div>

          <div className="reviews-slider-box glass-card">
            <div className="review-active-card">
              <div className="review-quote-mark">“</div>
              <p className="review-quote-text">{DEMO_REVIEWS[reviewIndex].comment}</p>
              <div className="review-author-row mt-4">
                <img 
                  src={DEMO_REVIEWS[reviewIndex].avatar} 
                  alt={DEMO_REVIEWS[reviewIndex].author} 
                  className="review-author-avatar"
                />
                <div>
                  <h4 className="review-author-name">{DEMO_REVIEWS[reviewIndex].author}</h4>
                  <span className="review-author-loc">
                    {DEMO_REVIEWS[reviewIndex].location} • {DEMO_REVIEWS[reviewIndex].service}
                  </span>
                  <div className="review-stars-row mt-1">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} size={14} fill="#C5A059" color="#C5A059" />
                    ))}
                  </div>
                </div>
              </div>

              <div className="review-slider-controls mt-4">
                <button
                  onClick={() => setReviewIndex((prev) => (prev === 0 ? DEMO_REVIEWS.length - 1 : prev - 1))}
                  className="slider-arrow-btn"
                >
                  <ChevronLeft size={16} />
                </button>
                <span className="review-index-label">{reviewIndex + 1} of {DEMO_REVIEWS.length}</span>
                <button
                  onClick={() => setReviewIndex((prev) => (prev + 1) % DEMO_REVIEWS.length)}
                  className="slider-arrow-btn"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 14: FOUNDER & CEO EXECUTIVE SPOTLIGHT (SOURAV PRAJAPATI)
          ========================================================================= */}
      <FounderVisionSection />

      {/* =========================================================================
          SECTION 15: MULTI-TRACK B2B PARTNERSHIP PORTAL (CLOSING SECTION)
          ========================================================================= */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">
              <Briefcase size={14} /> Commercial Ecosystem
            </span>
            <h2 className="section-title">B2B Partnerships & Professional Network</h2>
            <p className="section-subtitle">
              Expand your salon revenues, join as an independent artist, or distribute our proprietary cosmetics in Mathura & surrounding cities.
            </p>
          </div>

          <div className="grid-3 b2b-portals-grid">
            <div className="b2b-card glass-card p-4">
              <Building2 size={28} className="text-pink mb-2" />
              <h4 className="font-heading text-lg font-bold">Salon & Studio Partners</h4>
              <p className="text-xs text-grey-600 mt-2 mb-3">
                Offer OK MADAM signature facials and retail our HD bridal kits with up to 35% wholesale margin.
              </p>
              <Link to="/partner" className="btn btn-outline btn-xs">
                <span>Salon Partnership Form</span>
                <ArrowRight size={12} />
              </Link>
            </div>

            <div className="b2b-card glass-card p-4">
              <Users size={28} className="text-gold mb-2" />
              <h4 className="font-heading text-lg font-bold">Freelance Makeup Artists</h4>
              <p className="text-xs text-grey-600 mt-2 mb-3">
                Earn steady doorstep bridal bookings across Mathura with transparent 85% artist payout and free tool sterilisation.
              </p>
              <Link to="/become-pro" className="btn btn-outline btn-xs">
                <span>Artist Onboarding Form</span>
                <ArrowRight size={12} />
              </Link>
            </div>

            <div className="b2b-card glass-card p-4">
              <Award size={28} className="text-emerald mb-2" />
              <h4 className="font-heading text-lg font-bold">Franchise Lounge Model</h4>
              <p className="text-xs text-grey-600 mt-2 mb-3">
                Turnkey experiential luxury beauty lounge (600-1200 Sq.Ft.) with central marketing, training, and POS.
              </p>
              <Link to="/franchise" className="btn btn-outline btn-xs">
                <span>Franchise Application Form</span>
                <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
