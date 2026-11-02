import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Sparkles, 
  Star, 
  Heart, 
  Eye, 
  Check, 
  ShieldCheck, 
  ChevronRight, 
  Plus 
} from 'lucide-react';
import { PROPRIETARY_PRODUCTS } from '../data/mockData';

export default function ProductStore({ onAddToCart }) {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [selectedVariants, setSelectedVariants] = useState({});
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [wishlist, setWishlist] = useState([]);
  const [addedAnimationId, setAddedAnimationId] = useState(null);

  const categories = ['ALL', 'Face & Complexion', 'Lips', 'Skincare & Prep', 'Tools & Accessories', 'Professional Kits'];

  const filteredProducts = activeCategory === 'ALL' 
    ? PROPRIETARY_PRODUCTS 
    : PROPRIETARY_PRODUCTS.filter(p => p.category === activeCategory);

  const handleSelectShade = (productId, variant) => {
    setSelectedVariants(prev => ({ ...prev, [productId]: variant }));
  };

  const handleAddToCartClick = (product) => {
    const variant = selectedVariants[product.id] || product.variants[0];
    onAddToCart({
      ...product,
      selectedVariant: variant
    });
    setAddedAnimationId(product.id);
    setTimeout(() => setAddedAnimationId(null), 1500);
  };

  const toggleWishlist = (productId) => {
    setWishlist(prev => 
      prev.includes(productId) ? prev.filter(id => id !== productId) : [...prev, productId]
    );
  };

  return (
    <section id="store" className="store-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <Sparkles size={14} />
            <span>The OK MADAM Cosmetics Atelier</span>
          </div>
          <h2 className="section-title">Formulated for Indian Radiance</h2>
          <p className="section-subtitle">
            Dermatologically curated, 100% cruelty-free, and sweat-resistant formulations designed to thrive in Indian celebrations. Available for doorstep delivery across Mathura.
          </p>

          {/* Category Filter Pills */}
          <div className="store-filter-pills">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`store-pill-btn ${activeCategory === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Catalog Grid */}
        <div className="grid-3 product-grid">
          {filteredProducts.map((product) => {
            const currentVariant = selectedVariants[product.id] || product.variants[0];
            const isWishlisted = wishlist.includes(product.id);
            const isJustAdded = addedAnimationId === product.id;

            return (
              <div key={product.id} className="product-card glass-card">
                {/* Product Image & Badges */}
                <div className="product-img-wrap">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="product-img" 
                    loading="lazy"
                  />
                  <div className="product-top-tags">
                    <span className="badge badge-pink">{product.badge}</span>
                    <span className="discount-tag">{product.discount}</span>
                  </div>

                  <button 
                    onClick={() => toggleWishlist(product.id)}
                    className={`product-wishlist-btn ${isWishlisted ? 'active' : ''}`}
                    title="Add to Wishlist"
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

                {/* Product Content */}
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

                  {/* Shade Swatch Selector */}
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

                  {/* Size & Stock Info */}
                  <div className="stock-info-row">
                    <span className="product-size">{product.size}</span>
                    <span className="stock-badge">
                      <span className="stock-dot"></span> In Stock at Mathura Hub
                    </span>
                  </div>

                  {/* Card Price & CTA */}
                  <div className="product-card-footer">
                    <div className="product-price-block">
                      <span className="current-price">₹{product.price.toLocaleString('en-IN')}</span>
                      <span className="mrp-price">₹{product.mrp.toLocaleString('en-IN')}</span>
                    </div>

                    <button 
                      onClick={() => handleAddToCartClick(product)}
                      className={`btn ${isJustAdded ? 'btn-gold' : 'btn-pink'} product-add-btn`}
                    >
                      {isJustAdded ? (
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
                    <strong>Size/Volume:</strong> <span>{quickViewProduct.size}</span>
                  </div>
                  <div className="info-item">
                    <strong>Ingredients Highlights:</strong> <span>{quickViewProduct.ingredients}</span>
                  </div>
                  <div className="info-item">
                    <strong>Quality Standard:</strong> <span>100% Cruelty-Free, Paraben-Free, Made in India</span>
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
    </section>
  );
}
