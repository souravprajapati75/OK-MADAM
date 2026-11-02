import React, { useState } from 'react';
import { 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  Eye, 
  ArrowRight, 
  Info, 
  Layers, 
  Heart,
  RotateCw,
  Sliders,
  Check,
  Award
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Interactive3DVanityBox() {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedBrandChoice, setSelectedBrandChoice] = useState('ok-madam');
  const [activeItemSpotlight, setActiveItemSpotlight] = useState(null);

  const brandOptions = [
    {
      id: 'ok-madam',
      name: 'OK MADAM Signature Organic HD Kit',
      subtitle: 'House Specialty • Master Formulated for Indian Weather & Pheras',
      surcharge: 0,
      badge: '★ Recommended Default (Included Free)',
      features: [
        '16-Hour Sweatproof & Zero Creasing guarantee',
        'Anti-humidity formula tested for Mathura wedding season',
        '100% cruelty-free & organic botanical extracts',
        'Zero flashback under high-power 4K wedding spotlights'
      ],
      isHouseBrand: true
    },
    {
      id: 'mac',
      name: 'MAC Studio Fix Professional Suite',
      subtitle: 'Iconic Global High-Glam Matte Performance',
      surcharge: 750,
      badge: 'Custom Client Choice',
      features: [
        'MAC Studio Fix Fluid Foundation & Concealers',
        'Prep + Prime Fix+ Setting Mist',
        'Mineralize Skinfinish Highlighters'
      ],
      isHouseBrand: false
    },
    {
      id: 'kryolan',
      name: 'Kryolan DermaColor & TV Paint Stick',
      subtitle: 'Legendary Stage & Ultra-High Coverage Formulation',
      surcharge: 650,
      badge: 'Custom Client Choice',
      features: [
        'Kryolan TV Paint Stick high-definition base',
        'Ultra Camouflage Waterproof concealer system',
        'Translucent fixing powder for 18-hour hold'
      ],
      isHouseBrand: false
    },
    {
      id: 'huda',
      name: 'Huda Beauty #FauxFilter Royale',
      subtitle: 'Luminous Filter-Effect Middle Eastern Luxury Glam',
      surcharge: 850,
      badge: 'Custom Client Choice',
      features: [
        '#FauxFilter Luminous Matte Foundation',
        'Easy Bake Loose Baking & Setting Powder',
        'Empowered & Nude Eyeshadow Palettes'
      ],
      isHouseBrand: false
    },
    {
      id: 'client-own',
      name: 'Bring Your Own Makeup Vanity',
      subtitle: 'Our Verified Artist Works with Your Personal Trusted Products',
      surcharge: 0,
      badge: 'Zero Surcharge (Client Products)',
      features: [
        'Complete freedom to use your own personal skin products',
        'Artist brings sealed professional brushes, sponges & ring light',
        'Ideal for sensitive skin with dermatologist prescriptions'
      ],
      isHouseBrand: false
    }
  ];

  const kitItemDetails = [
    {
      id: 'foundation',
      title: 'OK MADAM 16H Luminescent HD Foundation',
      desc: 'Infused with saffron and rosehip seed extract. Blends like second skin without oxidation.',
      tag: 'Base Perfection'
    },
    {
      id: 'brushes',
      title: 'Rose Gold Microfiber Sterilized Brushes',
      desc: '12 precision brushes UV-C sanitized before every bridal session in sealed envelopes.',
      tag: 'Sanitized Tools'
    },
    {
      id: 'compact',
      title: 'Translucent Phera-Proof Mineral Compact',
      desc: 'Micro-milled rice starch minerals absorb temple smoke and humidity with zero creasing.',
      tag: 'Humidity Shield'
    },
    {
      id: 'lipstick',
      title: 'Velvet Satin Kiss-Proof Indian Lip Lacquer',
      desc: 'Nourishing shea butter core with 14-hour weightless tint in 8 curated Indian festive shades.',
      tag: 'Lip Couture'
    }
  ];

  const currentSelection = brandOptions.find(b => b.id === selectedBrandChoice);

  return (
    <section className="interactive-3d-vanity-section section-padding bg-cream-soft">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center mb-5">
          <span className="section-eyebrow">
            <Sparkles size={14} /> 3D Interactive Vanity Atelier • Total Brand Freedom
          </span>
          <h2 className="section-title">The OK MADAM 3D Luxury Makeup Vanity</h2>
          <p className="section-subtitle">
            Experience our iconic rose gold vanity train case in 3D. Open or close the case, explore our organic proprietary formulas, or choose your own favorite international brand for your big day!
          </p>
        </div>

        {/* 3D Vanity Box Stage */}
        <div className="vanity-3d-interactive-grid">
          {/* Left Column: Interactive 3D Case Preview */}
          <div className="vanity-preview-card glass-card">
            <div className="vanity-card-header flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="badge badge-pink font-mono text-xs">3D INTERACTIVE CASE</span>
                <span className="text-xs text-grey-500">
                  Status: <strong>{isOpen ? 'Open & Illuminated' : 'Closed & Sealed'}</strong>
                </span>
              </div>
              <button 
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className={`btn btn-sm ${isOpen ? 'btn-outline' : 'btn-pink'} flex items-center gap-1`}
              >
                <RotateCw size={14} />
                <span>{isOpen ? 'Close Vanity Case' : 'Open Vanity Case'}</span>
              </button>
            </div>

            {/* 3D Visual Box Container */}
            <div className={`vanity-3d-stage ${isOpen ? 'is-open' : 'is-closed'}`}>
              <div className="vanity-3d-model-wrap">
                <img 
                  src={isOpen ? "/images/ok-madam-3d-vanity-open.jpg" : "/images/ok-madam-3d-vanity-closed.jpg"} 
                  alt={isOpen ? "OK MADAM 3D Open Luxury Vanity Case" : "OK MADAM Closed Quilted Vanity Briefcase"}
                  className="vanity-3d-img animate-fade-in"
                  loading="lazy"
                />

                {/* Hotspot Floating Chips (when open) */}
                {isOpen && (
                  <div className="vanity-hotspots-overlay">
                    <button 
                      type="button" 
                      className="vanity-spot-pin spot-mirror" 
                      onClick={() => setActiveItemSpotlight('mirror')}
                      title="LED Halo Light Mirror"
                    >
                      <span className="spot-dot"></span>
                      <span className="spot-label">LED Studio Mirror</span>
                    </button>

                    <button 
                      type="button" 
                      className="vanity-spot-pin spot-brushes" 
                      onClick={() => setActiveItemSpotlight('brushes')}
                      title="Sealed Sterile Brushes"
                    >
                      <span className="spot-dot"></span>
                      <span className="spot-label">Sterile Brushes</span>
                    </button>

                    <button 
                      type="button" 
                      className="vanity-spot-pin spot-base" 
                      onClick={() => setActiveItemSpotlight('foundation')}
                      title="OK MADAM 16H HD Foundation"
                    >
                      <span className="spot-dot"></span>
                      <span className="spot-label">16H HD Foundation</span>
                    </button>
                  </div>
                )}
              </div>

              {/* Interactive Open/Close Controls Overlay */}
              <div className="vanity-toggle-bar mt-3 flex items-center justify-between">
                <span className="text-xs text-grey-600">
                  {isOpen ? '✨ Glowing interior with tiered rose gold drawers' : '🔒 Quilted pink vegan leather with rose gold lock'}
                </span>
                <div className="flex gap-2">
                  <button 
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className={`btn btn-xs ${!isOpen ? 'btn-pink' : 'btn-ghost'}`}
                  >
                    Lock Case
                  </button>
                  <button 
                    type="button"
                    onClick={() => setIsOpen(true)}
                    className={`btn btn-xs ${isOpen ? 'btn-pink' : 'btn-ghost'}`}
                  >
                    Reveal Inside
                  </button>
                </div>
              </div>
            </div>

            {/* Micro Details Grid */}
            <div className="kit-components-mini-grid mt-4">
              {kitItemDetails.map((item) => (
                <div key={item.id} className="kit-item-mini-card">
                  <span className="kit-item-tag">{item.tag}</span>
                  <strong className="kit-item-title">{item.title}</strong>
                  <p className="kit-item-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Custom Brand Freedom vs OK MADAM House Kit Narrative */}
          <div className="brand-choice-narrative-card glass-card">
            <div className="narrative-badge-box mb-3">
              <span className="badge badge-gold">
                <Award size={13} /> TRANSPARENT CLIENT CHOICE POLICY
              </span>
            </div>

            <h3 className="font-heading text-2xl text-charcoal-900 mb-2">
              Choose Any Luxury Brand You Love, Or Experience Our Master House Kit
            </h3>

            <p className="text-sm text-grey-600 leading-relaxed mb-4">
              At <strong>OK MADAM</strong>, we believe every bride and groom has unique skin desires. You are never forced to use a single product! You can choose our proprietary <strong>OK MADAM Organic HD Kit</strong>, pick your favorite global brand (MAC, Kryolan, Huda), or even bring your own doctor-prescribed makeup kit.
            </p>

            {/* Proprietary Kit Excellence Banner */}
            <div className="house-kit-highlight-banner p-3 mb-4 rounded-xl">
              <div className="flex items-center gap-2 mb-1">
                <Sparkles size={16} className="text-pink" />
                <strong className="text-sm font-heading">Why 94% of Mathura Brides Default to the OK MADAM Kit:</strong>
              </div>
              <ul className="text-xs text-grey-700 space-y-1 pl-4 list-disc">
                <li><strong>Weather Proof:</strong> Formulated for Mathura extreme summer heat & winter mandap humidity.</li>
                <li><strong>16-Hour Phera Lock:</strong> Will not crease, cake, or slide around holy wedding fire (Agni).</li>
                <li><strong>Zero Flashback:</strong> Specially balanced for 4K video lenses and ultra-bright flashlights.</li>
                <li><strong>Included at ₹0 extra:</strong> No hidden markup; included in all base service prices!</li>
              </ul>
            </div>

            {/* Interactive Brand Choice Selector */}
            <div className="brand-selector-section mt-4">
              <label className="text-xs font-bold uppercase tracking-wider text-grey-700 mb-2 block">
                Select Your Desired Product Suite for Booking:
              </label>

              <div className="brand-options-list space-y-2">
                {brandOptions.map((brand) => (
                  <div 
                    key={brand.id}
                    onClick={() => setSelectedBrandChoice(brand.id)}
                    className={`brand-option-item ${selectedBrandChoice === brand.id ? 'active' : ''}`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-2">
                        <div className={`brand-radio-circle ${selectedBrandChoice === brand.id ? 'selected' : ''}`}>
                          {selectedBrandChoice === brand.id && <Check size={12} color="#FFFFFF" />}
                        </div>
                        <div>
                          <span className="brand-name font-bold text-sm text-charcoal-900">{brand.name}</span>
                          <span className="brand-sub block text-xs text-grey-500">{brand.subtitle}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className={`brand-surcharge-tag text-xs font-bold ${brand.surcharge === 0 ? 'text-emerald' : 'text-pink'}`}>
                          {brand.surcharge === 0 ? 'Included (₹0)' : `+ ₹${brand.surcharge}`}
                        </span>
                        <span className="badge-micro block mt-1">{brand.badge}</span>
                      </div>
                    </div>

                    {selectedBrandChoice === brand.id && (
                      <div className="brand-expanded-details mt-2 pt-2 border-top">
                        <ul className="text-xs text-grey-600 space-y-1">
                          {brand.features.map((feat, fIdx) => (
                            <li key={fIdx} className="flex items-center gap-1.5">
                              <CheckCircle2 size={12} className="text-emerald shrink-0" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Action CTA */}
            <div className="mt-5 pt-3 border-top flex items-center justify-between gap-3">
              <div>
                <span className="text-xs text-grey-500 block">Selected Product Protocol:</span>
                <strong className="text-sm text-pink font-bold">{currentSelection.name}</strong>
              </div>

              <Link 
                to={`/book?brand=${selectedBrandChoice}`}
                className="btn btn-pink btn-sm flex items-center gap-2"
              >
                <span>Book Look with This Kit</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
