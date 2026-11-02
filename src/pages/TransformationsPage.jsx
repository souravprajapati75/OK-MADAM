import React, { useState } from 'react';
import { 
  Sparkles, 
  Star, 
  Calendar, 
  MapPin, 
  Eye, 
  ArrowRight, 
  CheckCircle2 
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TransformationsPage() {
  const [filter, setFilter] = useState('ALL');

  const galleryItems = [
    {
      id: 1,
      title: 'Royal North Indian Bridal Airbrush',
      category: 'BRIDAL',
      image: '/images/model-bridal-royal.jpg',
      tagline: 'Deep Crimson Velvet Lehenga with Kundan Jewelry',
      location: 'Krishna Nagar, Mathura',
      artist: 'Neha Sharma',
      makeupBase: 'OK MADAM Skin Silk HD (Warm Sand 01) + 24K Saffron Elixir',
      lashes: '3D Silk Mink Flutter'
    },
    {
      id: 2,
      title: 'Grand Mandap Royal Groom Styling',
      category: 'GROOM',
      image: '/images/model-groom-white-sherwani.png',
      tagline: 'Textured Ivory Sherwani with Gold Safa & Kalgi',
      location: 'Dampier Nagar, Mathura',
      artist: 'Rohit Kashyap',
      makeupBase: 'Invisible Matte Complexion Evening + Cedarwood Beard Sculpt',
      lashes: 'Natural Undetectable'
    },
    {
      id: 3,
      title: 'Diamond & Emerald Jewelry Engagement Look',
      category: 'BRIDAL',
      image: '/images/model-engagement-emerald-bridal.jpg',
      tagline: 'Pastel Rose Embroidered Couture with Shimmery Eyes',
      location: 'Civil Lines, Mathura',
      artist: 'Neha Sharma',
      makeupBase: 'Dewy Glass Skin Foundation + Empress Liquid Lipstick in Dampier Nude',
      lashes: 'Flared Accent'
    },
    {
      id: 4,
      title: 'Palace Pavilion Haldi Groom Look',
      category: 'GROOM',
      image: '/images/model-groom-yellow-haldi.jpg',
      tagline: 'Radiant Mustard Kurta with Coordinated Yellow Safa',
      location: 'Highway NH-19, Mathura',
      artist: 'Rohit Kashyap',
      makeupBase: 'Anti-Shine Pore Refining Barrier + Beard Outline',
      lashes: 'N/A'
    },
    {
      id: 5,
      title: 'Red Carpet Cocktail & Sangeet Glam',
      category: 'PARTY',
      image: '/images/model-red-cocktail-ruffle.jpg',
      tagline: 'Dramatic Architectural Shoulder Ruffle with Smokey Eye',
      location: 'Refinery Township, Mathura',
      artist: 'Kavita Chawla',
      makeupBase: 'Dreamscape 18-Shade Palette + Waterproof Winged Liner',
      lashes: 'Dramatic Volume'
    },
    {
      id: 6,
      title: 'Turmeric-Safe Dewy Haldi Radiance',
      category: 'HALDI',
      image: '/images/model-haldi-bridal.png',
      tagline: 'Natural Yellow Festive Attire with Floral Jewelry',
      location: 'Krishna Nagar, Mathura',
      artist: 'Priya Verma',
      makeupBase: 'Waterproof Glow Drops + Skin Resolution Toner Prep',
      lashes: 'Soft Cluster'
    },
    {
      id: 7,
      title: 'Emerald Velvet Reception Glamour',
      category: 'PARTY',
      image: '/images/model-reception-green-glam.jpg',
      tagline: 'Classic Winged Liner & Velvet Berry Pout',
      location: 'Vrindavan Road, Mathura',
      artist: 'Kavita Chawla',
      makeupBase: 'Empress Liquid Lipstick in Mathura Rose + Hollywood Waves',
      lashes: 'Winged Outer Corner'
    },
    {
      id: 8,
      title: 'Auspicious Bridal Mehndi Adornment',
      category: 'HALDI',
      image: '/images/bridal-mehndi-art.jpg',
      tagline: 'Intricate Floral Henna with Pure Gold Bangles',
      location: 'Mathura Cantt',
      artist: 'Priya Verma',
      makeupBase: 'Organic Turmeric Barrier & Marigold Essence',
      lashes: 'N/A'
    }
  ];

  const filteredGallery = filter === 'ALL' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <div className="transformations-page-wrap">
      {/* Header Banner */}
      <section className="page-header-banner">
        <div className="container">
          <span className="badge badge-gold mb-2">Real Celebrations • Real Artistry</span>
          <h1 className="page-title">Our Work & Transformations</h1>
          <p className="page-subtitle">
            Explore authentic wedding day, engagement, and festive makeover stories delivered by our certified Mathura talent network using OK MADAM proprietary formulations.
          </p>

          {/* Filter Pills */}
          <div className="store-cat-nav mt-4">
            <button 
              onClick={() => setFilter('ALL')} 
              className={`store-tab-btn ${filter === 'ALL' ? 'active' : ''}`}
            >
              All Makeovers ({galleryItems.length})
            </button>
            <button 
              onClick={() => setFilter('BRIDAL')} 
              className={`store-tab-btn ${filter === 'BRIDAL' ? 'active' : ''}`}
            >
              Royal Bridal
            </button>
            <button 
              onClick={() => setFilter('GROOM')} 
              className={`store-tab-btn ${filter === 'GROOM' ? 'active' : ''}`}
            >
              Groom Grooming
            </button>
            <button 
              onClick={() => setFilter('PARTY')} 
              className={`store-tab-btn ${filter === 'PARTY' ? 'active' : ''}`}
            >
              Cocktail & Reception
            </button>
            <button 
              onClick={() => setFilter('HALDI')} 
              className={`store-tab-btn ${filter === 'HALDI' ? 'active' : ''}`}
            >
              Haldi & Mehndi
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <div className="container py-5">
        <div className="grid-2 transformation-grid">
          {filteredGallery.map(item => (
            <div key={item.id} className="transformation-card glass-card">
              <div className="transform-img-wrap">
                <img src={item.image} alt={item.title} className="transform-img" loading="lazy" />
                <span className="badge badge-pink position-top-left">{item.category}</span>
                <span className="transform-loc-badge">
                  <MapPin size={12} /> {item.location}
                </span>
              </div>

              <div className="transform-body">
                <h3 className="transform-title">{item.title}</h3>
                <p className="transform-tagline">{item.tagline}</p>

                <div className="transform-specs-box mt-3">
                  <div className="spec-row">
                    <strong>Lead Artist:</strong> <span>{item.artist} (Certified MUA)</span>
                  </div>
                  <div className="spec-row">
                    <strong>Formulations Used:</strong> <span>{item.makeupBase}</span>
                  </div>
                </div>

                <div className="transform-card-footer mt-4">
                  <Link to="/book" className="btn btn-pink btn-sm w-full">
                    <Calendar size={14} />
                    <span>Book This Style for Your Occasion</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
