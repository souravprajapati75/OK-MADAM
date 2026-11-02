import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Sparkles, 
  Star, 
  Heart, 
  Eye, 
  Check, 
  ShieldCheck, 
  Search, 
  Filter 
} from 'lucide-react';
import { PROPRIETARY_PRODUCTS } from '../data/mockData';
import BrandPackagingShowcase from '../components/BrandPackagingShowcase';

export default function StorePage({ onAddToCart }) {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedVariants, setSelectedVariants] = useState({});
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [wishlist, setWishlist] = useState([]);
  const [justAddedId, setJustAddedId] = useState(null);

  const categories = [
    'ALL',
    'Face Makeup',
    'Eye Makeup',
    'Lip Makeup',
    'Skincare',
    'Makeup Kits',
    'Bridal Makeup Kits',
    'Groom Grooming Kits',
    'Beauty Accessories'
  ];

  const filteredProducts = PROPRIETARY_PRODUCTS.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.summary.toLowerCase().includes(searchQuery.toLowerCase());
    if (!matchesSearch) return false;
    if (activeCategory === 'ALL') return true;
    return product.category === activeCategory;
  });

  const handleSelectShade = (productId, variant) => {
    setSelectedVariants(prev => ({ ...prev, [productId]: variant }));
  };

  const handleAddToCartClick = (product) => {
    const variant = selectedVariants[product.id] || product.variants[0];
    onAddToCart({
      ...product,
      selectedVariant: variant
    });
    setJustAddedId(product.id);
    setTimeout(() => setJustAddedId(null), 1500);
  };

  const toggleWishlist = (productId) => {
    setWishlist(prev => 
      prev.includes(productId) ? prev.filter(id => id !== productId) : [...prev, productId]
    );
  };

  return (
    <div className="store-page-wrap">
      {/* Banner */}
      <section className="page-header-banner">
        <div className="container">
          <span className="badge badge-pink mb-2">100% Cruelty-Free • Formulated in India</span>
          <h1 className="page-title">OK MADAM Cosmetics Store</h1>
          <p className="page-subtitle">
            Explore our proprietary line of high-definition foundations, velvety lip stains, 24K saffron serums, and salon-grade professional makeup brushes. Free express delivery in Mathura.
          </p>

          {/* Category Tabs */}
          <div className="store-cat-nav mt-4">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`store-tab-btn ${activeCategory === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Store Area */}
      <div className="container py-5">
        {/* Search & Stock Indicator */}
        <div className="services-ctrl-bar mb-4">
          <div className="search-input-box">
            <Search size={18} className="search-icon" />
            <input 
              type="text" 
              placeholder="Search products (Foundation, Saffron Serum, Palette, Brushes)..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="service-search-input"
            />
          </div>

          <div className="hub-stock-badge">
            <span className="stock-dot"></span>
            <span>Mathura Central Hub Dispatch Active • Ships in 24 Hours</span>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid-3 product-page-grid">
          {filteredProducts.map(product => {
            const currentVariant = selectedVariants[product.id] || product.variants[0];
            const isWishlisted = wishlist.includes(product.id);
            const isAdded = justAddedId === product.id;

            return (
              <div key={product.id} className="product-card glass-card">
                <div className="product-img-wrap">
                  <img src={product.image} alt={product.name} className="product-img" loading="lazy" />
                  <div className="product-top-tags">
                    <span className="badge badge-pink">{product.badge}</span>
                    <span className="discount-tag">{product.discount}</span>
                  </div>

                  <button 
                    onClick={() => toggleWishlist(product.id)}
                    className={`product-wishlist-btn ${isWishlisted ? 'active' : ''}`}
                  >
                    <Heart size={16} fill={isWishlisted ? '#E74C72' : 'none'} color={isWishlisted ? '#E74C72' : '#656470'} />
                  </button>

                  <button 
                    onClick={() => setQuickViewProduct(product)}
                    className="quick-view-btn"
                  >
                    <Eye size={14} />
                    <span>Quick View</span>
                  </button>
                </div>

                <div className="product-body">
                  <div className="product-meta-row">
                    <span className="product-category-sub">{product.category}</span>
                    <div className="product-rating">
                      <Star size={13} fill="#C5A059" color="#C5A059" />
                      <span>{product.rating}</span>
                      <span className="reviews-count">({product.reviewsCount})</span>
                    </div>
                  </div>

                  <h3 className="product-title">{product.name}</h3>
                  <p className="product-summary">{product.summary}</p>

                  {/* Shade Swatches */}
                  {product.variants.length > 1 && (
                    <div className="shade-picker-wrap">
                      <span className="shade-label">
                        Shade: <strong>{currentVariant.shade}</strong>
                      </span>
                      <div className="swatch-list">
                        {product.variants.map((v) => (
                          <button
                            key={v.id}
                            onClick={() => handleSelectShade(product.id, v)}
                            className={`swatch-circle ${currentVariant.id === v.id ? 'active' : ''}`}
                            style={{ backgroundColor: v.hex }}
                            title={`${v.shade} (${v.tone})`}
                          ></button>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="stock-info-row">
                    <span className="product-size">{product.size}</span>
                    <span className="stock-badge">
                      <span className="stock-dot"></span> In Stock at Mathura
                    </span>
                  </div>

                  <div className="product-card-footer">
                    <div className="product-price-block">
                      <span className="current-price">₹{product.price.toLocaleString('en-IN')}</span>
                      <span className="mrp-price">₹{product.mrp.toLocaleString('en-IN')}</span>
                    </div>

                    <button 
                      onClick={() => handleAddToCartClick(product)}
                      className={`btn ${isAdded ? 'btn-gold' : 'btn-pink'} product-add-btn`}
                    >
                      {isAdded ? (
                        <>
                          <Check size={16} />
                          <span>Added to Bag!</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag size={15} />
                          <span>Add to Bag</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* OK MADAM Luxury Packaging & Formulations Atelier */}
      <BrandPackagingShowcase />

      {/* Quick View Modal */}
      {quickViewProduct && (
        <div className="modal-backdrop" onClick={() => setQuickViewProduct(null)}>
          <div className="modal-sheet product-modal glass-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <span className="badge badge-pink">{quickViewProduct.category}</span>
              <button onClick={() => setQuickViewProduct(null)} className="modal-close-btn">✕</button>
            </div>

            <div className="quickview-grid">
              <div className="quickview-img-col">
                <img src={quickViewProduct.image} alt={quickViewProduct.name} className="quickview-img" />
              </div>

              <div className="quickview-details-col">
                <h3 className="quickview-title">{quickViewProduct.name}</h3>
                <div className="product-rating mt-1">
                  <Star size={14} fill="#C5A059" color="#C5A059" />
                  <strong>{quickViewProduct.rating}</strong>
                  <span>({quickViewProduct.reviewsCount} customer reviews)</span>
                </div>

                <div className="quickview-price-row mt-3">
                  <span className="current-price fs-large">₹{quickViewProduct.price.toLocaleString('en-IN')}</span>
                  <span className="mrp-price">₹{quickViewProduct.mrp.toLocaleString('en-IN')}</span>
                  <span className="badge badge-gold">{quickViewProduct.discount}</span>
                </div>

                <p className="quickview-desc mt-3">{quickViewProduct.summary}</p>

                <div className="quickview-info-box mt-3">
                  <div className="info-item">
                    <strong>Size / Volume:</strong> <span>{quickViewProduct.size}</span>
                  </div>
                  <div className="info-item">
                    <strong>Key Ingredients:</strong> <span>{quickViewProduct.ingredients}</span>
                  </div>
                  <div className="info-item">
                    <strong>Skin Compatibility:</strong> <span>Formulated for Indian Tones & High-Humidity</span>
                  </div>
                  <div className="info-item">
                    <strong>Ethics:</strong> <span>100% Cruelty-Free, Paraben-Free</span>
                  </div>
                </div>

                <div className="quickview-actions mt-4">
                  <button 
                    onClick={() => {
                      handleAddToCartClick(quickViewProduct);
                      setQuickViewProduct(null);
                    }}
                    className="btn btn-pink btn-lg w-full"
                  >
                    <ShoppingBag size={18} />
                    <span>Add to Beauty Bag — ₹{quickViewProduct.price.toLocaleString('en-IN')}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
