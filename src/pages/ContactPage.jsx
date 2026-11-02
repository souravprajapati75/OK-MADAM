import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle, 
  MessageSquare, 
  ChevronDown, 
  ChevronUp, 
  ShieldCheck 
} from 'lucide-react';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('Service Booking Inquiry');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      q: 'How does OK MADAM verify the hygiene of home makeup artists?',
      a: 'Every certified OK MADAM professional is equipped with single-use disposable applicators, sterilized stainless steel mixing palettes, and autoclaved brush sets. Artists wear protective aprons and sanitize their hands in front of the client before starting.'
    },
    {
      q: 'What is your brand disclosure policy for third-party products?',
      a: 'By default, all appointments utilize authentic OK MADAM proprietary formulations. If you request third-party luxury brands such as MAC or Kryolan, we disclose the authentic product batch seals and itemize a transparent material fee of ₹750.'
    },
    {
      q: 'Do you charge extra for travel within Mathura?',
      a: 'No. Travel across all Mathura municipal zones (including Krishna Nagar, Dampier Nagar, Mathura Cantt, Highway NH-19, and Refinery Township) is 100% free and included in your service quote.'
    },
    {
      q: 'What is your booking cancellation and refund policy?',
      a: 'Cancellations made 48 hours or more before the scheduled appointment receive a 100% full refund of the deposit. Rescheduling to another date within Mathura is complimentary subject to artist availability.'
    },
    {
      q: 'Can I purchase OK MADAM cosmetics directly from your Mathura Atelier?',
      a: 'Yes! You can purchase directly online through our web store for 24-hour express doorstep delivery in Mathura, or visit our flagship studio lounge at Krishna Nagar Main Boulevard.'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-page-wrap">
      {/* Banner */}
      <section className="page-header-banner">
        <div className="container">
          <span className="badge badge-gold mb-2">Mathura Headquarters & Concierge</span>
          <h1 className="page-title">Contact OK MADAM</h1>
          <p className="page-subtitle">
            Have questions about our bridal packages, product ingredients, or franchise partnership? Our Mathura concierge team is at your service 7 days a week.
          </p>
        </div>
      </section>

      <div className="container py-5">
        <div className="contact-layout-grid">
          {/* Left Column: Direct Info Cards */}
          <div className="contact-info-col">
            <div className="contact-card-box glass-card mb-4">
              <h3 className="mb-3">Mathura Flagship Atelier</h3>
              
              <div className="contact-detail-line">
                <MapPin size={18} className="text-pink flex-shrink-0" />
                <div>
                  <strong>Address:</strong>
                  <p>2nd Floor, OK MADAM Building, Krishna Nagar Main Boulevard, Mathura, Uttar Pradesh - 281001</p>
                </div>
              </div>

              <div className="contact-detail-line mt-3">
                <Phone size={18} className="text-pink flex-shrink-0" />
                <div>
                  <strong>Direct Concierge & Founder Helpline:</strong>
                  <p><a href="tel:7505754957" className="font-semibold text-charcoal hover:text-pink">+91 7505754957</a></p>
                  <a 
                    href="https://wa.me/917505754957?text=Hello%20Sourav%20ji,%20I%20have%20an%20inquiry%20regarding%20OK%20MADAM" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="whatsapp-btn-chip mt-1 inline-flex"
                  >
                    💬 Chat Directly on WhatsApp (+91 7505754957)
                  </a>
                </div>
              </div>

              <div className="contact-detail-line mt-3">
                <Mail size={18} className="text-pink flex-shrink-0" />
                <div>
                  <strong>Email Inquiries:</strong>
                  <p><a href="mailto:souravprajapati89@gmail.com" className="font-semibold text-charcoal hover:text-pink">souravprajapati89@gmail.com</a></p>
                </div>
              </div>

              <div className="contact-detail-line mt-3">
                <Clock size={18} className="text-gold flex-shrink-0" />
                <div>
                  <strong>Operating Hours:</strong>
                  <p>Monday – Sunday: 07:00 AM – 09:30 PM IST</p>
                </div>
              </div>
            </div>

            {/* Founder & CEO Direct Executive Desk */}
            <div className="contact-founder-desk-card glass-card mb-4 p-4 border-gold">
              <div className="flex items-center gap-3 mb-2">
                <img 
                  src="/images/sourav-prajapati-founder.jpg" 
                  alt="Sourav Prajapati — Founder & CEO" 
                  style={{ width: '56px', height: '56px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #C5A059' }}
                />
                <div>
                  <h4 className="font-bold text-base mb-0">Sourav Prajapati</h4>
                  <span className="text-xs text-pink font-semibold">Founder & CEO, OK MADAM</span>
                  <div className="text-xs text-grey-600 mt-1">Direct Escalation & Customer Care</div>
                </div>
              </div>
              <p className="text-xs text-grey-700 italic mb-3">
                "Hamare kisi bhi customer ko koi bhi shikayat ho ya koi feedback dena chahe, aap direct mujhse WhatsApp ya call par baat kar sakte hain."
              </p>
              <div className="flex gap-2 flex-wrap">
                <a href="tel:7505754957" className="btn btn-xs btn-outline">
                  <Phone size={12} /> Call Founder Directly
                </a>
                <a 
                  href="https://wa.me/917505754957?text=Hello%20Sourav%20ji,%20I%20would%20like%20to%20connect%20regarding%20OK%20MADAM" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-xs btn-pink"
                >
                  💬 Founder WhatsApp
                </a>
              </div>
            </div>

            {/* Service Guarantee Card */}
            <div className="contact-trust-box glass-card">
              <ShieldCheck size={28} className="text-gold mb-2" />
              <h4>Punctuality & Safety Guarantee</h4>
              <p className="text-sm text-grey-600">
                Our artists arrive 15 minutes prior to appointment time with complete disposable sanitization kits. Your 4-digit security OTP ensures complete client control.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form-col">
            <div className="glass-card p-4">
              <h3>Send Us a Message</h3>
              <p className="text-grey-600 text-sm mb-4">
                We typically respond within 2 business hours during operating hours.
              </p>

              {submitted ? (
                <div className="text-center py-5">
                  <CheckCircle size={52} className="text-pink mx-auto mb-3" />
                  <h3>Message Dispatched!</h3>
                  <p className="text-grey-600 mt-2">
                    Thank you, <strong>{name}</strong>. Our Mathura customer care desk has received your message and will reach out shortly.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="btn btn-outline mt-4">
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="partner-form">
                  <div className="grid-2">
                    <div className="form-group">
                      <label className="form-label">Your Name</label>
                      <input 
                        type="text" 
                        placeholder="Full Name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        className="form-input" 
                        required 
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Phone Number</label>
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

                  <div className="form-group mt-2">
                    <label className="form-label">Subject</label>
                    <select value={subject} onChange={(e) => setSubject(e.target.value)} className="form-select">
                      <option value="Service Booking Inquiry">Service Booking Inquiry</option>
                      <option value="Bridal Custom Package Consultation">Bridal Custom Package Consultation</option>
                      <option value="Cosmetics Product & Order Tracking">Cosmetics Product & Order Tracking</option>
                      <option value="Salon B2B Wholesale Partnership">Salon B2B Wholesale Partnership</option>
                      <option value="Franchise Opportunity">Franchise Opportunity</option>
                    </select>
                  </div>

                  <div className="form-group mt-2">
                    <label className="form-label">Your Message</label>
                    <textarea 
                      placeholder="How can we assist you with your beauty or business requirements in Mathura?" 
                      value={message} 
                      onChange={(e) => setMessage(e.target.value)} 
                      className="form-textarea" 
                      rows={4} 
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-pink btn-lg w-full mt-4">
                    <Send size={16} />
                    <span>Send Message to Concierge</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* FAQ Accordion Section */}
        <div className="contact-faq-section mt-5">
          <div className="section-header text-center mb-4">
            <span className="section-eyebrow">
              <MessageSquare size={14} /> Clear Answers
            </span>
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>

          <div className="faq-accordion-box glass-card" style={{ maxWidth: '860px', margin: '0 auto' }}>
            {faqs.map((faq, idx) => (
              <div key={idx} className="faq-item-row">
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="faq-question-btn"
                >
                  <span>{faq.q}</span>
                  {openFaq === idx ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>
                {openFaq === idx && (
                  <div className="faq-answer-pane animate-fade-in">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
