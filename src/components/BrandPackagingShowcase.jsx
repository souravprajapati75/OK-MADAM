import React, { useState } from 'react';
import { 
  Sparkles, 
  ShieldCheck, 
  Package, 
  Layers, 
  Award, 
  CheckCircle2, 
  Eye, 
  Box, 
  Crown, 
  Feather, 
  Lock, 
  ArrowRight,
  Maximize2
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BrandPackagingShowcase() {
  const [activePackIndex, setActivePackIndex] = useState(0);

  const packagingSuites = [
    {
      id: 'pack-suite-1',
      title: 'The Signature Rigid Magnetic Gift Box',
      category: 'Master Gifting & Bridal Trouseau',
      image: '/images/hero-luxury-cosmetics.jpg',
      badge: 'Flagship Packaging',
      description: 'Crafted from 1200 GSM recycled rigid greyboard wrapped in custom-dyed blush pink textured paper with soft-touch matte lamination. Features debossed 24K hot-stamped gold foil logo and magnetic concealed closure with silk grosgrain pull ribbon.',
      materials: [
        { label: 'Exterior Box', value: '1200 GSM Heavyweight Rigid Greyboard' },
        { label: 'Foil Stamping', value: '24K Metallic Hot Gold Foil (Debossed 0.8mm)' },
        { label: 'Closure Mechanism', value: 'Dual Neodymium Magnetic Concealed Snaps' },
        { label: 'Inner Cushioning', value: 'High-Density Laser-Cut Velvet Cavity Tray' },
        { label: 'Hygiene Seal', value: 'Tamper-Evident Hologram Band with Mathura QC Code' }
      ],
      details: [
        'Concealed magnetic snap closure with satisfying tactile click',
        'Laser-cut velvet-lined compartments engineered to hold products upright in transit',
        'Complimentary gold-bordered authenticity card signed by lead formulator'
      ]
    },
    {
      id: 'pack-suite-2',
      title: 'Silk HD Foundation & 24K Saffron Flacons',
      category: 'Complexion & Skincare Flacons',
      image: '/images/product-rose-serum-collection.png',
      badge: 'Frosted Glass Flacon',
      description: 'Heavyweight Italian-molded frosted glass flacons (75g empty tare weight) that feel substantial and cool to the touch. Fitted with airtight vacuum airless pumps in brushed rose gold to protect active Kashmiri Saffron and Hyaluronic Acid from air and sunlight.',
      materials: [
        { label: 'Bottle Body', value: 'Double-Wall Frosted Flint Glass (100% Recyclable)' },
        { label: 'Dispenser Pump', value: 'Airless Vacuum Pump in Brushed Rose Gold' },
        { label: 'Label Printing', value: 'Direct Ceramic Silkscreen + Gold Hot-Stamp' },
        { label: 'Protection', value: 'UV-Shield Treated Glass (Zero Photo-Degradation)' },
        { label: 'Dosage Precision', value: '0.2ml Micro-Dose Metered Output' }
      ],
      details: [
        'Airless vacuum pump guarantees zero product oxidation and 99.8% bottle evacuation',
        'Silk-screened measurement graduations on side for easy dosage tracking',
        'Frosted gradient finish prevents fingerprints and slipping during makeup application'
      ]
    },
    {
      id: 'pack-suite-3',
      title: 'Empress Velvet Matte Lipsticks & Monogram Compacts',
      category: 'Color Cosmetics & Compacts',
      image: '/images/product-compact-highlighter.jpg',
      badge: 'Couture Metalware',
      description: 'Custom-tooled weighted aluminum compacts and lipstick tubes finished in electroplated rose gold and soft-touch blush casing. Embossed with the signature OK MADAM Queen Crown logo on the top cap and lipstick bullet.',
      materials: [
        { label: 'Compact Shell', value: 'Weighted Anodized Aluminum Alloy (115g Hand Weight)' },
        { label: 'Mirror Quality', value: 'True-HD Distortion-Free Silver-Backed Mirror' },
        { label: 'Lipstick Mechanism', value: 'Precision 3-Stage Magnetic Twist Bullet' },
        { label: 'Logo Detailing', value: 'Deep 3D Die-Cast Queen Crown Relief' },
        { label: 'Puff / Applicator', value: 'Antibacterial Microfiber Velvet Sponge' }
      ],
      details: [
        'Magnetic closure with satisfying sensory "snap"',
        'Full-size distortion-free compact mirror for effortless touch-ups at wedding venues',
        'Logo embossed directly into the lipstick tip for an unmistakably luxury feel'
      ]
    },
    {
      id: 'pack-suite-4',
      title: '15-Piece Couture Brush Atelier Roll Case',
      category: 'Professional Beauty Tools',
      image: '/images/product-brush-kit.jpg',
      badge: 'Vegan Leather Atelier',
      description: 'A bespoke foldable travel roll crafted from cruelty-free blush pink vegan leather with water-resistant rose gold metallic lining. Each brush handle is carved from FSC-certified birchwood with seamless copper ferrules double-crimped for zero shedding.',
      materials: [
        { label: 'Roll Case Outer', value: 'Supple Grain Vegan PU Leather (Waterproof & Wipeable)' },
        { label: 'Ferrule Material', value: 'Solid Seamless Copper Alloy (Double-Crimped)' },
        { label: 'Brush Handles', value: '7-Coat Enamel-Lacquered FSC Birchwood' },
        { label: 'Bristles', value: '100% Antimicrobial Japanese Silk Nanofibers' },
        { label: 'Closure Strap', value: 'Wrap-Around Gold Buckle with Engraved Monogram' }
      ],
      details: [
        'Each brush pocket is individually numbered with recommended usage instructions',
        'Fold-over protective flap prevents bristle bending during bridal travel',
        'Wipe-clean inner lining designed specifically for busy makeup artists'
      ]
    },
    {
      id: 'pack-suite-5',
      title: 'Grand Bridal Vanity Trouseau Trunk',
      category: 'Experiential Master Collection',
      image: '/images/ok-madam-3d-vanity-open.jpg',
      badge: 'Royal Heirloom Trunk',
      description: 'The pinnacle of OK MADAM packaging artistry. A handcrafted heirloom trouseau trunk in diamond-quilted blush leatherette with solid brass hardware, corner edge protectors, and double combination locks designed to become a bridal keepsake for generations.',
      materials: [
        { label: 'Trunk Structure', value: 'Reinforced MDF Wood Core with Diamond Quilting' },
        { label: 'Hardware', value: 'Solid Polished Antiqued Brass Locks & Hinges' },
        { label: 'Interior Lining', value: 'Plush Dust-Resistant Velvet in Champagne Nude' },
        { label: 'Organization', value: 'Multi-Tier Cantilever Trays with LED Vanity Mirror' },
        { label: 'Personalization', value: 'Engraved Brass Nameplate with Bride’s Initials' }
      ],
      details: [
        'Built-in tri-temperature LED studio lighting with dimming touch switch',
        'Spill-proof lined compartments tailored for all 8 full-size OK MADAM products',
        'Lockable for secure storage during destination weddings across India'
      ]
    }
  ];

  const currentPack = packagingSuites[activePackIndex];

  return (
    <section className="brand-packaging-section section-padding bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center mb-5">
          <span className="section-eyebrow">
            <Crown size={14} /> Haute Cosmetics Craftsmanship
          </span>
          <h2 className="section-title">The OK MADAM Packaging & Brand Architecture</h2>
          <p className="section-subtitle">
            Luxury begins with the touch. Inspect our proprietary packaging standards: Italian frosted glass flacons, 24K hot-stamped gold typography, magnetic closures, and heirloom bridal vanity trunks.
          </p>
        </div>

        {/* 1. Brand Logo & Identity Anatomy Card */}
        <div className="brand-anatomy-banner glass-card mb-5">
          <div className="anatomy-grid">
            {/* Left: Official Brand Logo Display */}
            <div className="anatomy-logo-pane">
              <div className="official-logo-frame">
                <img 
                  src="/images/ok-madam-logo-hq.jpg" 
                  alt="OK MADAM Official Luxury Emblem" 
                  className="official-logo-img"
                />
              </div>
              <div className="text-center mt-3">
                <span className="badge badge-gold">Official Registered Trademark</span>
                <h3 className="font-heading text-xl mt-2 font-bold">OK MADAM</h3>
                <span className="brand-sub-tagline">BE BEAUTIFUL • BE CONFIDENT</span>
                <p className="text-xs text-grey-600 mt-2">
                  Headquartered at Krishna Nagar Main Boulevard, Mathura, UP
                </p>
              </div>
            </div>

            {/* Right: Packaging Design Principles */}
            <div className="anatomy-specs-pane">
              <h4 className="text-lg font-heading font-bold mb-3 flex items-center gap-2">
                <Award size={18} className="text-pink" />
                <span>How Our Logo & Brand Identity Is Printed on Products</span>
              </h4>

              <div className="logo-specs-list">
                <div className="logo-spec-item">
                  <div className="spec-dot gold"></div>
                  <div>
                    <strong>1. The Royal Queen Crown Emblem:</strong>
                    <p className="text-xs text-grey-600">
                      Die-cast in 3D relief on every lipstick cap, stamped in gold leaf on compact lids, and watermarked onto tamper-proof seals to signify royal confidence.
                    </p>
                  </div>
                </div>

                <div className="logo-spec-item">
                  <div className="spec-dot pink"></div>
                  <div>
                    <strong>2. 24K Hot Foil Stamping:</strong>
                    <p className="text-xs text-grey-600">
                      We never use cheap screen ink for typography. The letters 'OK MADAM' are permanently embossed with heat-bonded gold foil that never rubs off or fades with oil and sweat.
                    </p>
                  </div>
                </div>

                <div className="logo-spec-item">
                  <div className="spec-dot charcoal"></div>
                  <div>
                    <strong>3. Italian Frosted Glass & Weighted Metals:</strong>
                    <p className="text-xs text-grey-600">
                      Every foundation bottle and serum vial weighs 75g to 120g empty. You feel true substantial luxury in the palm of your hand from the first touch.
                    </p>
                  </div>
                </div>

                <div className="logo-spec-item">
                  <div className="spec-dot emerald"></div>
                  <div>
                    <strong>4. Holographic Mathura QC & Batch Authentication:</strong>
                    <p className="text-xs text-grey-600">
                      Every packaging unit has a tamper-evident holographic seal with a QR code tracing the formulation batch, dermatological test results, and hygiene clearance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Interactive Packaging Showcase (5 Suites) */}
        <div className="packaging-selector-tabs mb-4 flex flex-wrap justify-center gap-2">
          {packagingSuites.map((suite, idx) => (
            <button
              key={suite.id}
              onClick={() => setActivePackIndex(idx)}
              className={`pack-tab-btn ${activePackIndex === idx ? 'active' : ''}`}
            >
              <Package size={14} />
              <span>{suite.badge}</span>
            </button>
          ))}
        </div>

        <div className="packaging-stage-card glass-card">
          <div className="pack-stage-grid">
            {/* Visual Image Showcase */}
            <div className="pack-visual-wrap">
              <div className="pack-img-container">
                <img 
                  src={currentPack.image} 
                  alt={currentPack.title} 
                  className="pack-featured-img"
                />
                <span className="pack-category-badge">{currentPack.category}</span>
                <div className="pack-zoom-tag">
                  <Maximize2 size={13} />
                  <span>Couture Packaging Spec</span>
                </div>
              </div>

              {/* Quick Quality Chips */}
              <div className="pack-quick-chips mt-3">
                <span className="chip-item">
                  <ShieldCheck size={13} className="text-pink" /> 100% Sealed
                </span>
                <span className="chip-item">
                  <Feather size={13} className="text-gold" /> Recyclable Glass
                </span>
                <span className="chip-item">
                  <Lock size={13} className="text-emerald" /> Magnetic Lock
                </span>
              </div>
            </div>

            {/* Packaging Specification Table & Unboxing Details */}
            <div className="pack-info-wrap">
              <span className="badge badge-pink mb-1">{currentPack.badge}</span>
              <h3 className="pack-title font-heading text-2xl font-bold mt-1">
                {currentPack.title}
              </h3>
              <p className="pack-desc text-sm text-grey-600 mt-2 line-height-relaxed">
                {currentPack.description}
              </p>

              {/* Material Hierarchy Table */}
              <div className="pack-specs-table-box mt-4">
                <h5 className="specs-table-heading">
                  <Layers size={14} className="text-gold" />
                  <span>Material & Engineering Blueprint</span>
                </h5>
                <div className="specs-rows">
                  {currentPack.materials.map((m, i) => (
                    <div key={i} className="spec-row">
                      <span className="spec-lbl">{m.label}</span>
                      <strong className="spec-val">{m.value}</strong>
                    </div>
                  ))}
                </div>
              </div>

              {/* Unboxing Experience Highlights */}
              <div className="unboxing-highlights mt-4">
                <h5 className="unboxing-title text-xs font-bold text-charcoal-900 uppercase tracking-wider mb-2">
                  ✨ The Unboxing Sensory Experience:
                </h5>
                <ul className="unboxing-points">
                  {currentPack.details.map((detail, dIdx) => (
                    <li key={dIdx} className="unboxing-point-item">
                      <CheckCircle2 size={14} className="text-pink shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="pack-action-row mt-4 pt-3 border-top flex gap-3">
                <Link to="/store" className="btn btn-pink flex-1">
                  <Package size={16} />
                  <span>Shop This Packaging Collection</span>
                </Link>
                <Link to="/book" className="btn btn-outline">
                  <span>Book Atelier Session</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 3. The 4-Step Unboxing Journey Bar */}
        <div className="unboxing-journey-bar mt-5">
          <div className="text-center mb-4">
            <span className="section-eyebrow">
              <Box size={14} /> The Client Unboxing Ceremony
            </span>
            <h3 className="text-xl font-heading font-bold">Every Order Arrives Like a Royal Gift</h3>
          </div>

          <div className="grid-4 unboxing-steps-grid">
            <div className="unboxing-step-card glass-card">
              <div className="step-num-pill">01</div>
              <h4 className="font-heading font-bold text-sm mt-2">Security Hologram</h4>
              <p className="text-xs text-grey-600 mt-1">
                Tamper-evident Mathura HQ security band guarantees your cosmetics have never been opened or handled.
              </p>
            </div>

            <div className="unboxing-step-card glass-card">
              <div className="step-num-pill">02</div>
              <h4 className="font-heading font-bold text-sm mt-2">Magnetic Snap</h4>
              <p className="text-xs text-grey-600 mt-1">
                Acoustic concealed neodymium magnets release with a satisfying luxury click upon lifting the grosgrain ribbon.
              </p>
            </div>

            <div className="unboxing-step-card glass-card">
              <div className="step-num-pill">03</div>
              <h4 className="font-heading font-bold text-sm mt-2">Laser Velvet Cushion</h4>
              <p className="text-xs text-grey-600 mt-1">
                Each flacon and palette rests securely in custom-molded high-density champagne velvet cavities.
              </p>
            </div>

            <div className="unboxing-step-card glass-card">
              <div className="step-num-pill">04</div>
              <h4 className="font-heading font-bold text-sm mt-2">Formulator Certificate</h4>
              <p className="text-xs text-grey-600 mt-1">
                Gold-stamped card with batch number, formulation date, and signature from our Mathura Quality Atelier.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
