import React from 'react';
import { 
  Sparkles, 
  ShieldCheck, 
  Award, 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  MessageSquare, 
  Heart, 
  ArrowRight,
  Crown,
  Quote
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FounderVisionSection() {
  const founderPhone = '+91 7505754957';
  const founderEmail = 'souravprajapati89@gmail.com';
  const whatsappUrl = 'https://wa.me/917505754957?text=Hello%20Sourav%20ji,%20I%20visited%20OK%20MADAM%20website%20and%20would%20like%20to%20connect.';

  return (
    <section className="founder-vision-section section-padding bg-charcoal text-white">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center mb-5">
          <span className="section-eyebrow" style={{ color: '#F8BBD0' }}>
            <Crown size={14} className="text-gold" /> Leadership & Founding Vision
          </span>
          <h2 className="section-title text-white">A Personal Message from Our Founder</h2>
          <p className="section-subtitle text-grey-300">
            "Your Beauty. Your Confidence. Our Sacred Commitment." How OK MADAM was conceived to revolutionize Indian beauty and at-home makeover artistry starting from the holy city of Mathura.
          </p>
        </div>

        {/* Founder Card Master Grid */}
        <div className="founder-master-card glass-card-dark">
          <div className="founder-grid">
            {/* Left Column: Founder Authentic Standing Portrait in Suit & Quick Contacts */}
            <div className="founder-portrait-pane text-center">
              <div className="founder-standing-figure-frame">
                <div className="founder-img-wrapper">
                  <img 
                    src="/images/sourav-prajapati-founder.jpg" 
                    alt="Sourav Prajapati — Founder & CEO of OK MADAM standing in formal coat pant suit" 
                    className="founder-portrait-img"
                  />
                  <div className="founder-badge-pill">
                    <ShieldCheck size={14} className="text-emerald" />
                    <span>Founder & CEO</span>
                  </div>
                </div>
                <div className="founder-standing-pedestal">
                  <span className="pedestal-title">Sourav Prajapati</span>
                  <span className="pedestal-sub">Founder & CEO • In Black Suit / Coat-Pant</span>
                </div>
              </div>

              {/* Identity Details */}
              <h3 className="founder-name mt-3">Sourav Prajapati</h3>
              <p className="founder-designation">Founder & Chief Executive Officer (CEO)</p>
              <span className="founder-brand-label">OK MADAM Cosmetics & Atelier</span>

              <div className="founder-direct-contacts-box mt-3">
                <a 
                  href={`tel:${founderPhone.replace(/\s+/g, '')}`} 
                  className="founder-contact-chip"
                >
                  <Phone size={14} className="text-pink" />
                  <span>+91 7505754957 (Direct Line)</span>
                </a>

                <a 
                  href={whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="founder-contact-chip whatsapp-chip"
                >
                  <MessageSquare size={14} />
                  <span>Chat on WhatsApp Directly</span>
                </a>

                <a 
                  href={`mailto:${founderEmail}`} 
                  className="founder-contact-chip"
                >
                  <Mail size={14} className="text-gold" />
                  <span>souravprajapati89@gmail.com</span>
                </a>

                <div className="founder-location-note mt-2">
                  <MapPin size={13} className="text-pink" />
                  <span>Central Atelier, Krishna Nagar, Mathura, UP</span>
                </div>
              </div>
            </div>

            {/* Right Column: Founder's Story & Customer Satisfaction Pledge */}
            <div className="founder-story-pane">
              <div className="quote-icon-bubble">
                <Quote size={28} className="text-pink" />
              </div>

              <h4 className="story-heading">
                "Har Customer Ki 100% Khushi Aur Satisfaction Hi OK MADAM Ki Sabse Badi Kamyabi Hai."
              </h4>

              <div className="story-paragraphs">
                <p>
                  Namaste! Main <strong>Sourav Prajapati</strong>, OK MADAM ka Founder & CEO. Jab maine iss brand ki neev rakhi, to mera sabse bada maksad ek hi tha: <em>hamari behno, dulhano aur parivaron ko ek aisi beauty service aur cosmetic brand dena jis par wo aankh band karke vishwas kar sakein.</em>
                </p>

                <p>
                  Hamne dekha ki Mathura me aksar shaadi-byah ya party me salon ke chakkar lagane padte hain, hygiene ka koi bharosa nahi hota, aur mehnge brands ke naam par local products lagaye jate hain. <strong>OK MADAM me humne ye sab badal diya hai:</strong>
                </p>
              </div>

              {/* 4 Pillars of Sourav's Vision */}
              <div className="founder-pillars-grid mt-3">
                <div className="founder-pillar-item">
                  <div className="p-dot gold"></div>
                  <div>
                    <strong>1. 100% Customer Satisfaction First:</strong>
                    <p className="text-xs text-grey-300">
                      Hamari policy bilkul saaf hai — har client ko queen jaisa aadar aur perfect look milna chahiye. Agar aap santusht nahi hain, to hum turant touch-up aur resolution dete hain.
                    </p>
                  </div>
                </div>

                <div className="founder-pillar-item">
                  <div className="p-dot pink"></div>
                  <div>
                    <strong>2. Proprietary Indian Clean Cosmetics:</strong>
                    <p className="text-xs text-grey-300">
                      Humne apne khud ke clean, high-definition cosmetic formulations launch kiye hain jo 16 ghante sweatproof rehte hain aur Kashmiri Kesar aur Damask Rose se bane hain.
                    </p>
                  </div>
                </div>

                <div className="founder-pillar-item">
                  <div className="p-dot emerald"></div>
                  <div>
                    <strong>3. 100% Sealed & Sanitized Hygiene:</strong>
                    <p className="text-xs text-grey-300">
                      Har appointment me police-verified background-checked makeup artists aate hain jo single-use autoclaved tools aur sealed kits client ke samne open karte hain.
                    </p>
                  </div>
                </div>

                <div className="founder-pillar-item">
                  <div className="p-dot blue"></div>
                  <div>
                    <strong>4. Direct Founder Access:</strong>
                    <p className="text-xs text-grey-300">
                      Koi corporate wall nahi hai. Agar aapko koi feedback dena hai, kisi service me sudhar chahiye, ya partnership karni hai, to aap seedha mujhe call ya WhatsApp kar sakte hain.
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Actions & Founder Sign-off */}
              <div className="founder-footer-row mt-4 pt-3 border-top-dark">
                <div className="founder-sign-wrap">
                  <span className="signature-font">Sourav Prajapati</span>
                  <span className="sign-caption">Founder & CEO • OK MADAM</span>
                </div>

                <div className="founder-cta-btns">
                  <a 
                    href={`tel:${founderPhone.replace(/\s+/g, '')}`} 
                    className="btn btn-pink"
                  >
                    <Phone size={15} />
                    <span>Call Founder Directly</span>
                  </a>
                  <Link to="/book" className="btn btn-outline text-white">
                    <span>Book Your Makeover</span>
                    <ArrowRight size={14} />
                  </Link>
                  <Link to="/partner" className="btn btn-outline text-white">
                    <span>Partner with Us</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
