import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import AdminDashboard from './components/AdminDashboard';
import CustomerAccount from './components/CustomerAccount';

// Dedicated Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import StorePage from './pages/StorePage';
import BookingPage from './pages/BookingPage';
import ArtistsPage from './pages/ArtistsPage';
import PartnerPage from './pages/PartnerPage';
import BecomeProPage from './pages/BecomeProPage';
import FranchisePage from './pages/FranchisePage';
import TransformationsPage from './pages/TransformationsPage';
import ContactPage from './pages/ContactPage';

import './App.css';

// Scroll to top helper on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [cartItems, setCartItems] = useState([
    {
      id: 'prod-brush-kit',
      name: 'OK MADAM 15-Piece Couture Rose Gold Brush Atelier',
      price: 2299,
      quantity: 1,
      image: '/images/product-brush-kit.jpg',
      selectedVariant: { id: 'b1', shade: 'Blush Rose Gold' }
    }
  ]);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [selectedServiceToBook, setSelectedServiceToBook] = useState(null);

  // User Bookings History
  const [userBookings, setUserBookings] = useState([
    {
      bookingId: 'OM-MTR-8120',
      serviceTitle: 'Bridal & Wedding Makeup',
      date: 'Nov 12, 2026',
      timeSlot: '07:00 AM - 09:30 AM (Early Muhurat Slot)',
      advancePaid: 3250,
      balanceRemaining: 9749,
      otpCode: '5812',
      serviceMode: 'Home Doorstep Service',
      assignedPro: {
        name: 'Neha Sharma',
        phone: '+91 98765 43210',
        avatar: '/images/model-party-dewy.png'
      }
    }
  ]);

  // Cart Operations
  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const variantId = product.selectedVariant?.id || 'default';
      const existing = prev.find(
        (item) => item.id === product.id && (item.selectedVariant?.id || 'default') === variantId
      );
      if (existing) {
        return prev.map((item) =>
          item.id === product.id && (item.selectedVariant?.id || 'default') === variantId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (productId, variantId, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(productId, variantId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === productId && (item.selectedVariant?.id || 'default') === (variantId || 'default')
          ? { ...item, quantity: newQty }
          : item
      )
    );
  };

  const handleRemoveItem = (productId, variantId) => {
    setCartItems((prev) =>
      prev.filter(
        (item) =>
          !(item.id === productId && (item.selectedVariant?.id || 'default') === (variantId || 'default'))
      )
    );
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleBookingSuccess = (newBooking) => {
    setUserBookings((prev) => [newBooking, ...prev]);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="ok-madam-app">
        {/* Navigation Header */}
        <Navbar
          cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)}
          onOpenCart={() => setIsCartOpen(true)}
          onOpenAdmin={() => setIsAdminOpen(true)}
          onOpenAccount={() => setIsAccountOpen(true)}
        />

        {/* Multi-Page Route Switcher */}
        <main className="main-content-layout">
          <Routes>
            <Route 
              path="/" 
              element={
                <HomePage 
                  onOpenBooking={() => setSelectedServiceToBook(null)}
                  onAddToCart={handleAddToCart}
                />
              } 
            />
            <Route path="/about" element={<AboutPage />} />
            <Route 
              path="/services" 
              element={<ServicesPage onSelectServiceToBook={setSelectedServiceToBook} />} 
            />
            <Route 
              path="/services/:categoryFilter" 
              element={<ServicesPage onSelectServiceToBook={setSelectedServiceToBook} />} 
            />
            <Route 
              path="/store" 
              element={<StorePage onAddToCart={handleAddToCart} />} 
            />
            <Route 
              path="/book" 
              element={
                <BookingPage 
                  initialService={selectedServiceToBook}
                  onBookingSuccess={handleBookingSuccess}
                />
              } 
            />
            <Route 
              path="/artists" 
              element={<ArtistsPage onSelectServiceToBook={setSelectedServiceToBook} />} 
            />
            <Route path="/transformations" element={<TransformationsPage />} />
            <Route path="/partner" element={<PartnerPage />} />
            <Route path="/become-pro" element={<BecomeProPage />} />
            <Route path="/franchise" element={<FranchisePage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Fallback */}
            <Route 
              path="*" 
              element={
                <HomePage 
                  onOpenBooking={() => setSelectedServiceToBook(null)}
                  onAddToCart={handleAddToCart}
                />
              } 
            />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Slide-out Cart Drawer */}
        <CartDrawer
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          cartItems={cartItems}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveItem={handleRemoveItem}
          onClearCart={handleClearCart}
        />

        {/* Enterprise Admin Command Center */}
        <AdminDashboard
          isOpen={isAdminOpen}
          onClose={() => setIsAdminOpen(false)}
          activeBookings={userBookings}
        />

        {/* Customer Account & Booking History */}
        <CustomerAccount
          isOpen={isAccountOpen}
          onClose={() => setIsAccountOpen(false)}
          userBookings={userBookings}
        />
      </div>
    </BrowserRouter>
  );
}
