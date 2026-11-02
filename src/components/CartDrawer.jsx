import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Trash2, 
  Plus, 
  Minus, 
  ArrowRight, 
  CheckCircle, 
  ShieldCheck, 
  Tag 
} from 'lucide-react';

export default function CartDrawer({ 
  isOpen, 
  onClose, 
  cartItems, 
  onUpdateQuantity, 
  onRemoveItem, 
  onClearCart 
}) {
  const [couponCode, setCouponCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(0);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderCompleted, setOrderCompleted] = useState(null);

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const discountAmount = Math.round(subtotal * (appliedDiscount / 100));
  const shipping = subtotal > 999 || subtotal === 0 ? 0 : 99;
  const finalTotal = subtotal - discountAmount + shipping;

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (couponCode.toUpperCase() === 'MATHURAGLOW' || couponCode.toUpperCase() === 'OK10') {
      setAppliedDiscount(10);
      alert('Coupon Applied! 10% Mathura Welcome Discount Activated.');
    } else {
      alert('Invalid code. Try using "MATHURAGLOW" for 10% off.');
    }
  };

  const handleProcessOrder = () => {
    if (cartItems.length === 0) return;
    setIsCheckingOut(true);

    setTimeout(() => {
      const order = {
        orderId: `OKM-ORD-${Math.floor(100000 + Math.random() * 900000)}`,
        itemsCount: cartItems.length,
        total: finalTotal,
        date: new Date().toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' }),
        deliveryCity: 'Mathura, UP',
        estimatedDelivery: 'Tomorrow, by 6:00 PM (Local Mathura Hub)'
      };
      setIsCheckingOut(false);
      setOrderCompleted(order);
      onClearCart();
    }, 1500);
  };

  return (
    <div className="cart-backdrop" onClick={onClose}>
      <div className="cart-drawer glass-card" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="cart-header">
          <div className="cart-header-title">
            <ShoppingBag size={20} className="text-pink" />
            <h3>Your Beauty Bag ({cartItems.reduce((a, b) => a + b.quantity, 0)})</h3>
          </div>
          <button onClick={onClose} className="cart-close-btn">✕</button>
        </div>

        {/* Free Shipping Meter */}
        <div className="free-shipping-bar">
          {subtotal >= 999 ? (
            <span className="text-success font-semibold">
              🎉 You unlocked Free Express Delivery in Mathura!
            </span>
          ) : (
            <span>
              Add ₹{999 - subtotal} more for <strong>Free Express Delivery in Mathura</strong>
            </span>
          )}
        </div>

        {/* Content */}
        <div className="cart-body">
          {orderCompleted ? (
            <div className="order-success-view animate-fade-in">
              <div className="success-badge">
                <CheckCircle size={44} className="text-pink" />
              </div>
              <h3>Order Placed Successfully!</h3>
              <p className="order-num">Order Reference: <strong>{orderCompleted.orderId}</strong></p>
              <div className="order-meta-card">
                <div>
                  <span>Total Paid:</span>
                  <strong>₹{orderCompleted.total.toLocaleString('en-IN')}</strong>
                </div>
                <div>
                  <span>Delivery Zone:</span>
                  <strong>{orderCompleted.deliveryCity}</strong>
                </div>
                <div>
                  <span>Dispatch SLA:</span>
                  <span className="text-success">{orderCompleted.estimatedDelivery}</span>
                </div>
              </div>
              <p className="order-tracking-note">
                Our Mathura dispatch hub has received your request. Tracking updates will be sent via SMS & WhatsApp.
              </p>
              <button onClick={() => { setOrderCompleted(null); onClose(); }} className="btn btn-pink w-full mt-3">
                Continue Shopping
              </button>
            </div>
          ) : cartItems.length === 0 ? (
            <div className="cart-empty-view">
              <ShoppingBag size={48} className="empty-bag-icon" />
              <h4>Your beauty bag is currently empty</h4>
              <p>Explore our signature foundations, brush sets, and luxury trouseau collections.</p>
              <button onClick={onClose} className="btn btn-outline mt-3">
                Explore Cosmetics Atelier
              </button>
            </div>
          ) : (
            <div className="cart-items-list">
              {cartItems.map((item) => (
                <div key={`${item.id}-${item.selectedVariant?.id || 'def'}`} className="cart-item-row">
                  <img src={item.image} alt={item.name} className="cart-item-thumb" />
                  <div className="cart-item-details">
                    <h4 className="cart-item-name">{item.name}</h4>
                    {item.selectedVariant && (
                      <span className="cart-item-variant">
                        Shade: <strong>{item.selectedVariant.shade}</strong>
                      </span>
                    )}
                    <div className="cart-item-price">
                      ₹{item.price.toLocaleString('en-IN')}
                    </div>
                  </div>

                  {/* Quantity Controller */}
                  <div className="cart-qty-ctrl">
                    <button 
                      onClick={() => onUpdateQuantity(item.id, item.selectedVariant?.id, item.quantity - 1)}
                      className="qty-btn"
                    >
                      <Minus size={12} />
                    </button>
                    <span className="qty-num">{item.quantity}</span>
                    <button 
                      onClick={() => onUpdateQuantity(item.id, item.selectedVariant?.id, item.quantity + 1)}
                      className="qty-btn"
                    >
                      <Plus size={12} />
                    </button>
                  </div>

                  <button 
                    onClick={() => onRemoveItem(item.id, item.selectedVariant?.id)}
                    className="cart-remove-btn"
                    title="Remove item"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer & Pricing (if not completed and has items) */}
        {!orderCompleted && cartItems.length > 0 && (
          <div className="cart-footer">
            {/* Promo Code Form */}
            <form onSubmit={handleApplyCoupon} className="coupon-form">
              <input 
                type="text" 
                placeholder="Promo Code (MATHURAGLOW)" 
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                className="coupon-input"
              />
              <button type="submit" className="coupon-apply-btn">Apply</button>
            </form>

            {/* Calculations */}
            <div className="bill-breakdown">
              <div className="bill-row">
                <span>Subtotal</span>
                <span>₹{subtotal.toLocaleString('en-IN')}</span>
              </div>
              {appliedDiscount > 0 && (
                <div className="bill-row discount">
                  <span>Mathura Promo ({appliedDiscount}%)</span>
                  <span>- ₹{discountAmount.toLocaleString('en-IN')}</span>
                </div>
              )}
              <div className="bill-row">
                <span>Mathura Local Delivery</span>
                <span>{shipping === 0 ? <strong className="text-success">FREE</strong> : `₹${shipping}`}</span>
              </div>
              <div className="bill-divider"></div>
              <div className="bill-row total">
                <span>Total Amount</span>
                <span className="text-pink font-bold">₹{finalTotal.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <button 
              onClick={handleProcessOrder} 
              className="btn btn-pink btn-lg w-full mt-3"
              disabled={isCheckingOut}
            >
              {isCheckingOut ? (
                <span>Securing Order at Mathura Hub...</span>
              ) : (
                <>
                  <span>Checkout — ₹{finalTotal.toLocaleString('en-IN')}</span>
                  <ArrowRight size={16} />
                </>
              )}
            </button>

            <div className="safe-checkout-badge mt-2">
              <ShieldCheck size={14} className="text-gold" />
              <span>100% Safe Checkout • Cash on Delivery / UPI Available</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
