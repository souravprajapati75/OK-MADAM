import React, { useState } from 'react';
import { 
  SlidersHorizontal, 
  Users, 
  Calendar, 
  Package, 
  TrendingUp, 
  ShieldCheck, 
  CheckCircle, 
  Clock, 
  MapPin, 
  AlertTriangle, 
  Building2, 
  Search, 
  Check, 
  X, 
  Filter,
  Bell,
  Navigation,
  Phone,
  Send,
  ExternalLink,
  Sparkles,
  Award,
  Layers
} from 'lucide-react';
import { MATHURA_AREAS } from '../data/mockData';

export default function AdminDashboard({ isOpen, onClose, activeBookings = [] }) {
  const [activeTab, setActiveTab] = useState('DISPATCH'); // 'DISPATCH', 'FRANCHISE_MISSIONS', 'KYC', 'INVENTORY'
  const [showNotificationsDrawer, setShowNotificationsDrawer] = useState(false);
  const [dispatchToast, setDispatchToast] = useState(null);

  // Simulated Notifications
  const [notifications, setNotifications] = useState([
    {
      id: 'notif-1',
      type: 'FRANCHISE',
      title: 'New Franchise Opportunity Inquiry',
      message: 'Sunil Agrawal (Mathura Highway NH-19, 900 sq.ft, ₹18L investment proposed) submitted an application.',
      time: '12 Mins Ago',
      unread: true,
      actionTab: 'FRANCHISE_MISSIONS'
    },
    {
      id: 'notif-2',
      type: 'BOOKING',
      title: 'New Bridal Makeover Booking Dispatched',
      message: 'Pooja Agarwal booked Complete Bridal Package at Krishna Nagar. Route calculated: 1.8 KM (~8 mins).',
      time: '28 Mins Ago',
      unread: true,
      actionTab: 'DISPATCH'
    },
    {
      id: 'notif-3',
      type: 'PARTNER',
      title: 'Salon Partner Wholesale Request',
      message: 'Looks & Locks Salon (Dampier Nagar, 6 chairs) requested OK MADAM B2B Retail Kit onboarding.',
      time: '1 Hour Ago',
      unread: true,
      actionTab: 'FRANCHISE_MISSIONS'
    },
    {
      id: 'notif-4',
      type: 'KYC',
      title: 'MUA KYC Verification Document Uploaded',
      message: 'Shweta Upadhyay uploaded Aadhaar Card & Bridal Portfolio for Mathura Cantt zone verification.',
      time: '2 Hours Ago',
      unread: false,
      actionTab: 'KYC'
    }
  ]);

  // Bookings Dispatch List
  const [bookings, setBookings] = useState([
    {
      id: 'OM-MTR-9041',
      customer: 'Pooja Agarwal',
      phone: '+91 98371 42810',
      service: 'Bridal & Wedding Makeup',
      date: 'Today, 04:00 PM',
      area: 'Krishna Nagar, Mathura',
      pro: 'Neha Sharma',
      status: 'CONFIRMED',
      brand: 'OK Madam Signature HD',
      total: 12999,
      otp: '4821',
      coords: { lat: 27.498, lng: 77.674 }
    },
    {
      id: 'OM-MTR-9042',
      customer: 'Vikram Chaudhary',
      phone: '+91 97600 11223',
      service: 'Royal Wedding Groom Makeover',
      date: 'Today, 06:30 PM',
      area: 'Dampier Nagar, Mathura',
      pro: 'Rohit Kashyap',
      status: 'ASSIGNED',
      brand: 'OK Madam Signature HD',
      total: 5999,
      otp: '7319',
      coords: { lat: 27.492, lng: 77.681 }
    },
    {
      id: 'OM-MTR-9043',
      customer: 'Simran Goyal',
      phone: '+91 94122 88441',
      service: 'Bride & Groom Couple Makeover',
      date: 'Tomorrow, 11:00 AM',
      area: 'Highway NH-19, Mathura',
      pro: 'Priya Verma & Amit Saxena',
      status: 'CONFIRMED',
      brand: 'OK Madam Signature HD',
      total: 27999,
      otp: '6104',
      coords: { lat: 27.525, lng: 77.652 }
    }
  ]);

  // Franchise & Partner Mission Assignments ("Yahan Jaana Hai Tumhe")
  const [franchiseMissions, setFranchiseMissions] = useState([
    {
      id: 'MSN-MTR-301',
      partnerName: 'Krishna Nagar Flagship Atelier',
      partnerType: 'Franchise Studio Lounge',
      assignedPro: 'Neha Sharma (Lead MUA)',
      customerName: 'Pooja Agarwal',
      customerPhone: '+91 98371 42810',
      destinationAddress: 'House 42, Civil Lines Road, near Krishna Nagar Central Park, Mathura',
      locality: 'Krishna Nagar (Pincode 281001)',
      distanceKm: 1.8,
      transitEta: '8 Mins',
      scheduledTime: 'Today, 04:00 PM (Muhurat: 06:15 PM)',
      serviceTitle: 'Complete Royal Airbrush Bridal Makeover',
      otpCode: '4821',
      kitIssued: 'OK MADAM 16H Organic HD Bridal Kit (Sealed Barcode: OM-BKT-884)',
      missionStatus: 'ACTIVE_DISPATCH',
      mapsUrl: 'https://www.google.com/maps/dir/?api=1&origin=Krishna+Nagar+Mathura+UP&destination=Civil+Lines+Krishna+Nagar+Mathura+UP'
    },
    {
      id: 'MSN-MTR-302',
      partnerName: 'Dampier Nagar Partner Salon',
      partnerType: 'Affiliate Partner Hub',
      assignedPro: 'Rohit Kashyap (Groom Stylist)',
      customerName: 'Vikram Chaudhary',
      customerPhone: '+91 97600 11223',
      destinationAddress: 'Brij Heritage Villa, Plot 12, Dampier Nagar Colony, Mathura',
      locality: 'Dampier Nagar (Pincode 281001)',
      distanceKm: 3.2,
      transitEta: '12 Mins',
      scheduledTime: 'Today, 06:30 PM',
      serviceTitle: 'Royal Groom Makeover & Safa Tying',
      otpCode: '7319',
      kitIssued: 'OK MADAM Men Matte HD Kit & Golden Safa Trouseau',
      missionStatus: 'ACTIVE_DISPATCH',
      mapsUrl: 'https://www.google.com/maps/dir/?api=1&origin=Krishna+Nagar+Mathura+UP&destination=Dampier+Nagar+Mathura+UP'
    },
    {
      id: 'MSN-MTR-303',
      partnerName: 'Highway NH-19 Express Pod',
      partnerType: 'Franchise Applicant Territory',
      assignedPro: 'Priya Verma (Airbrush Specialist)',
      customerName: 'Simran Goyal',
      customerPhone: '+91 94122 88441',
      destinationAddress: 'Grand Radisson Resort & Banquets, NH-19 Bypass, Mathura',
      locality: 'Highway NH-19 (Pincode 281004)',
      distanceKm: 7.5,
      transitEta: '20 Mins',
      scheduledTime: 'Tomorrow, 11:00 AM',
      serviceTitle: 'Bride & Groom Harmonized Wedding Suite',
      otpCode: '6104',
      kitIssued: 'OK MADAM 16H Dual Artist Master Suite',
      missionStatus: 'PENDING_PARTNER_ACCEPT',
      mapsUrl: 'https://www.google.com/maps/dir/?api=1&origin=Krishna+Nagar+Mathura+UP&destination=NH-19+Bypass+Mathura+UP'
    }
  ]);

  // Franchise Applications Pipeline
  const [franchiseApps, setFranchiseApps] = useState([
    {
      id: 'FRAN-APP-01',
      applicantName: 'Sunil Agrawal',
      phone: '+91 98970 88219',
      targetLocation: 'Highway NH-19 Commercial Complex, Mathura',
      carpetArea: '900 Sq.Ft',
      investmentBracket: '₹15L - ₹20L',
      status: 'UNDER_REVIEW'
    },
    {
      id: 'FRAN-APP-02',
      applicantName: 'Dr. Meenakshi Bansal',
      phone: '+91 94120 33451',
      targetLocation: 'Vrindavan Road Prime Crossing, Mathura',
      carpetArea: '1200 Sq.Ft',
      investmentBracket: '₹20L - ₹30L',
      status: 'TERRITORY_RESERVED'
    }
  ]);

  const [kycQueue, setKycQueue] = useState([
    {
      id: 'PRO-APP-101',
      name: 'Shweta Upadhyay',
      phone: '+91 94118 73291',
      exp: '4 Years',
      skills: 'Bridal & Saree Draping',
      pincode: '281001 (Krishna Nagar)',
      aadhaarStatus: 'Uploaded & Verified',
      kitAudit: 'OK Madam Pro Kit Ready',
      status: 'PENDING'
    },
    {
      id: 'PRO-APP-102',
      name: 'Manish Rawat',
      phone: '+91 98971 65432',
      exp: '5 Years',
      skills: 'Men Grooming & Safa Tying',
      pincode: '281003 (Mathura Cantt)',
      aadhaarStatus: 'Uploaded & Verified',
      kitAudit: 'Sanitized Tools Audited',
      status: 'PENDING'
    }
  ]);

  const unreadCount = notifications.filter(n => n.unread).length;

  const handleSendMissionNotification = (mission) => {
    setDispatchToast(`🚀 "Yahan Jaana Hai Tumhe" mission alert dispatched to ${mission.assignedPro} via WhatsApp/SMS! Location & Route: ${mission.locality}`);
    setTimeout(() => setDispatchToast(null), 4500);
  };

  const markAllNotificationsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, unread: false })));
  };

  const handleUpdateStatus = (bookingId, nextStatus) => {
    setBookings(prev => prev.map(b => b.id === bookingId ? { ...b, status: nextStatus } : b));
  };

  const handleApprovePro = (proId) => {
    setKycQueue(prev => prev.map(p => p.id === proId ? { ...p, status: 'APPROVED' } : p));
  };

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div className="admin-modal glass-card" onClick={(e) => e.stopPropagation()}>
        {/* Admin Header */}
        <div className="admin-modal-header">
          <div className="admin-title-row">
            <div className="admin-badge">
              <SlidersHorizontal size={18} />
              <span>OK MADAM COMMAND CENTER</span>
            </div>
            <span className="hub-badge">Mathura Central Hub (Admin: You)</span>

            {/* Live Notification Bell with Unread Badge */}
            <div className="notification-bell-wrap relative">
              <button 
                type="button"
                onClick={() => setShowNotificationsDrawer(!showNotificationsDrawer)}
                className={`notif-bell-btn ${unreadCount > 0 ? 'has-unread' : ''}`}
                title="View Live Notifications"
              >
                <Bell size={18} />
                {unreadCount > 0 && <span className="notif-badge-pill">{unreadCount}</span>}
              </button>

              {/* Notification Center Dropdown */}
              {showNotificationsDrawer && (
                <div className="admin-notif-dropdown glass-card animate-fade-in">
                  <div className="notif-drop-header flex items-center justify-between pb-2 border-bottom">
                    <strong className="text-sm font-heading">Real-Time Atelier Alerts ({unreadCount} New)</strong>
                    <button onClick={markAllNotificationsRead} className="text-xs text-pink underline">
                      Mark all read
                    </button>
                  </div>
                  <div className="notif-drop-list mt-2 space-y-2">
                    {notifications.map((notif) => (
                      <div 
                        key={notif.id} 
                        className={`notif-drop-item ${notif.unread ? 'unread' : ''}`}
                        onClick={() => {
                          setActiveTab(notif.actionTab);
                          setShowNotificationsDrawer(false);
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <span className="notif-item-type">{notif.type}</span>
                          <span className="notif-item-time">{notif.time}</span>
                        </div>
                        <h5 className="notif-item-title">{notif.title}</h5>
                        <p className="notif-item-msg">{notif.message}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          <button onClick={onClose} className="modal-close-btn">✕</button>
        </div>

        {/* Dispatch Toast Alert */}
        {dispatchToast && (
          <div className="admin-toast-banner animate-fade-in">
            <Sparkles size={16} />
            <span>{dispatchToast}</span>
          </div>
        )}

        {/* Executive KPI Bar */}
        <div className="admin-kpi-grid">
          <div className="kpi-card">
            <span className="kpi-label">Mathura M-T-D GMV</span>
            <h3 className="kpi-value text-pink">₹4,82,500</h3>
            <span className="kpi-sub text-success">↑ 18.4% this month</span>
          </div>
          <div className="kpi-card">
            <span className="kpi-label">Active Bookings Today</span>
            <h3 className="kpi-value">14 Appointments</h3>
            <span className="kpi-sub">Across 20 Mathura zones</span>
          </div>
          <div className="kpi-card">
            <span className="kpi-label">Certified MUAs & Partners</span>
            <h3 className="kpi-value">28 Active Pros</h3>
            <span className="kpi-sub">100% Background Verified</span>
          </div>
          <div className="kpi-card">
            <span className="kpi-label">Franchise Inquiries</span>
            <h3 className="kpi-value text-gold">{franchiseApps.length} In Pipeline</h3>
            <span className="kpi-sub text-success">Mathura Highway & Vrindavan</span>
          </div>
        </div>

        {/* Admin Nav Tabs */}
        <div className="admin-tabs-row">
          <button 
            onClick={() => setActiveTab('DISPATCH')}
            className={`admin-tab-pill ${activeTab === 'DISPATCH' ? 'active' : ''}`}
          >
            <Calendar size={15} />
            <span>Customer Dispatches ({bookings.length})</span>
          </button>

          <button 
            onClick={() => setActiveTab('FRANCHISE_MISSIONS')}
            className={`admin-tab-pill ${activeTab === 'FRANCHISE_MISSIONS' ? 'active' : ''}`}
          >
            <Navigation size={15} />
            <span>Franchise & Partner Missions ("Yahan Jaana Hai")</span>
          </button>

          <button 
            onClick={() => setActiveTab('KYC')}
            className={`admin-tab-pill ${activeTab === 'KYC' ? 'active' : ''}`}
          >
            <ShieldCheck size={15} />
            <span>Pro KYC Verification ({kycQueue.filter(k => k.status === 'PENDING').length})</span>
          </button>

          <button 
            onClick={() => setActiveTab('INVENTORY')}
            className={`admin-tab-pill ${activeTab === 'INVENTORY' ? 'active' : ''}`}
          >
            <Package size={15} />
            <span>Warehouse Inventory & Batches</span>
          </button>
        </div>

        {/* Tab Content */}
        <div className="admin-tab-body">
          {/* TAB 1: DISPATCHER RADAR */}
          {activeTab === 'DISPATCH' && (
            <div className="dispatch-table-wrap animate-fade-in">
              <div className="table-header-ctrl">
                <h4>Active Mathura Service Dispatches</h4>
                <div className="filter-pill-mini">
                  <Filter size={13} />
                  <span>Showing Today's Schedule</span>
                </div>
              </div>

              <div className="admin-table-container">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Booking Ref</th>
                      <th>Client Details</th>
                      <th>Treatment</th>
                      <th>Date & Slot</th>
                      <th>Zone / Area</th>
                      <th>Assigned Pro</th>
                      <th>Status & OTP</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookings.map((b) => (
                      <tr key={b.id}>
                        <td><strong>{b.id}</strong></td>
                        <td>
                          <div>{b.customer}</div>
                          <span className="text-xs text-grey-500">{b.phone}</span>
                        </td>
                        <td>
                          <div>{b.service}</div>
                          <span className="badge badge-pink text-xs">{b.brand}</span>
                        </td>
                        <td>{b.date}</td>
                        <td>
                          <div className="flex items-center gap-1">
                            <MapPin size={12} className="text-pink" />
                            <span>{b.area}</span>
                          </div>
                        </td>
                        <td>
                          <strong>{b.pro}</strong>
                        </td>
                        <td>
                          <div className="status-otp-wrap">
                            <span className={`status-badge ${b.status.toLowerCase()}`}>
                              {b.status}
                            </span>
                            <span className="otp-pill">OTP: {b.otp}</span>
                          </div>
                        </td>
                        <td>
                          {b.status === 'CONFIRMED' ? (
                            <button 
                              onClick={() => handleUpdateStatus(b.id, 'EN_ROUTE')}
                              className="btn btn-xs btn-outline"
                            >
                              Dispatch Pro
                            </button>
                          ) : b.status === 'EN_ROUTE' ? (
                            <button 
                              onClick={() => handleUpdateStatus(b.id, 'COMPLETED')}
                              className="btn btn-xs btn-success"
                            >
                              Verify OTP & Complete
                            </button>
                          ) : (
                            <span className="text-xs text-success flex items-center gap-1">
                              <CheckCircle size={12} /> Closed
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 2: FRANCHISE & PARTNER MISSIONS ("Yahan Jaana Hai Tumhe") */}
          {activeTab === 'FRANCHISE_MISSIONS' && (
            <div className="missions-panel-wrap animate-fade-in">
              <div className="missions-header mb-4 flex items-center justify-between">
                <div>
                  <h4 className="font-heading text-lg">Partner & Franchise Dispatch Mission Center</h4>
                  <p className="text-xs text-grey-600">
                    Live destination routing for assigned franchise partners and makeup artists ("Yahan jaana hai tumhe" — Route, Client Contact, OTP & Kit Details).
                  </p>
                </div>
                <span className="badge badge-gold">{franchiseMissions.length} Missions Active in Mathura</span>
              </div>

              {/* Mission Cards Grid */}
              <div className="missions-cards-grid grid grid-cols-1 md:grid-cols-2 gap-4">
                {franchiseMissions.map((mission) => (
                  <div key={mission.id} className="mission-card glass-card p-4 border border-pink-200 rounded-xl relative">
                    <div className="mission-card-top flex items-start justify-between mb-2">
                      <div>
                        <span className="badge badge-pink text-xs">{mission.id}</span>
                        <h5 className="font-heading text-base font-bold text-charcoal-900 mt-1">
                          {mission.serviceTitle}
                        </h5>
                        <span className="text-xs text-grey-500 font-semibold block">
                          Assigned: <strong>{mission.assignedPro}</strong> ({mission.partnerName})
                        </span>
                      </div>
                      <span className="badge badge-gold text-xs">OTP: {mission.otpCode}</span>
                    </div>

                    {/* "Yahan Jaana Hai Tumhe" Target Destination Box */}
                    <div className="destination-target-box p-3 my-2 rounded-lg bg-pink-50 border border-pink-200">
                      <div className="flex items-center gap-1.5 text-pink font-bold text-xs uppercase tracking-wide">
                        <MapPin size={14} />
                        <span>Yahan Jaana Hai Tumhe (Destination Details):</span>
                      </div>
                      <p className="text-sm font-semibold text-charcoal-900 mt-1">
                        {mission.destinationAddress}
                      </p>
                      <div className="text-xs text-grey-600 mt-1 flex items-center gap-3">
                        <span>Locality: <strong>{mission.locality}</strong></span>
                        <span>Distance: <strong>{mission.distanceKm} KM (~{mission.transitEta})</strong></span>
                      </div>
                      <div className="text-xs text-grey-700 mt-2 flex items-center justify-between border-top pt-2">
                        <span>Client: <strong>{mission.customerName}</strong></span>
                        <a href={`tel:${mission.customerPhone}`} className="text-pink font-bold flex items-center gap-1">
                          <Phone size={12} /> {mission.customerPhone}
                        </a>
                      </div>
                    </div>

                    {/* Kit & Timing Bar */}
                    <div className="mission-meta-bar text-xs text-grey-600 space-y-1 mb-3">
                      <div>🕒 Reporting Time: <strong>{mission.scheduledTime}</strong></div>
                      <div>📦 Kit Protocol: <strong>{mission.kitIssued}</strong></div>
                    </div>

                    {/* Mission Actions */}
                    <div className="mission-actions-row flex items-center gap-2 mt-3 pt-2 border-top">
                      <button 
                        type="button"
                        onClick={() => handleSendMissionNotification(mission)}
                        className="btn btn-pink btn-xs flex-1 flex items-center justify-center gap-1.5"
                      >
                        <Send size={13} />
                        <span>Send "Yahan Jana Hai" Alert</span>
                      </button>

                      <a 
                        href={mission.mapsUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn btn-outline btn-xs flex items-center gap-1"
                      >
                        <Navigation size={13} />
                        <span>Open Route Map</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Franchise Pipeline Section */}
              <div className="franchise-pipeline-section mt-5 pt-4 border-top">
                <h5 className="font-heading text-base mb-3 flex items-center gap-2">
                  <Building2 size={16} className="text-pink" />
                  <span>Franchise Lounge Applicants & Expansion Pipeline</span>
                </h5>
                <div className="admin-table-container">
                  <table className="admin-table">
                    <thead>
                      <tr>
                        <th>Applicant</th>
                        <th>Proposed Location</th>
                        <th>Floor Area</th>
                        <th>Investment</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {franchiseApps.map((fa) => (
                        <tr key={fa.id}>
                          <td>
                            <strong>{fa.applicantName}</strong>
                            <div className="text-xs text-grey-500">{fa.phone}</div>
                          </td>
                          <td>{fa.targetLocation}</td>
                          <td>{fa.carpetArea}</td>
                          <td><strong className="text-pink">{fa.investmentBracket}</strong></td>
                          <td>
                            <span className="badge badge-gold text-xs">{fa.status}</span>
                          </td>
                          <td>
                            <button 
                              onClick={() => alert(`Approval contract prepared for ${fa.applicantName} (${fa.targetLocation}). Directing to onboarding checklist.`)}
                              className="btn btn-xs btn-outline"
                            >
                              Approve Territory
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: PRO KYC VERIFICATION */}
          {activeTab === 'KYC' && (
            <div className="kyc-panel-wrap animate-fade-in">
              <h4>Makeup Artist & Groomer Onboarding KYC Queue</h4>
              <p className="panel-sub">Verify Aadhaar, background clearance, and sanitary kit inspection before dispatching artists.</p>

              <div className="kyc-cards-grid mt-3">
                {kycQueue.map((pro) => (
                  <div key={pro.id} className="kyc-card glass-card">
                    <div className="kyc-card-header">
                      <div>
                        <h4>{pro.name}</h4>
                        <span className="kyc-phone">{pro.phone}</span>
                      </div>
                      <span className={`status-badge ${pro.status.toLowerCase()}`}>
                        {pro.status}
                      </span>
                    </div>

                    <div className="kyc-meta-grid">
                      <div className="meta-item">
                        <span>Experience:</span>
                        <strong>{pro.exp}</strong>
                      </div>
                      <div className="meta-item">
                        <span>Zone:</span>
                        <strong>{pro.pincode}</strong>
                      </div>
                      <div className="meta-item">
                        <span>Skills:</span>
                        <strong>{pro.skills}</strong>
                      </div>
                      <div className="meta-item">
                        <span>Government ID:</span>
                        <strong className="text-success">{pro.aadhaarStatus}</strong>
                      </div>
                      <div className="meta-item col-span-2">
                        <span>OK Madam Kit Status:</span>
                        <strong className="text-gold">{pro.kitAudit}</strong>
                      </div>
                    </div>

                    <div className="kyc-actions mt-3">
                      {pro.status === 'PENDING' ? (
                        <>
                          <button 
                            onClick={() => handleApprovePro(pro.id)}
                            className="btn btn-sm btn-pink flex-1"
                          >
                            <Check size={14} /> Approve & Activate
                          </button>
                          <button className="btn btn-sm btn-outline">
                            <X size={14} /> Reject
                          </button>
                        </>
                      ) : (
                        <span className="text-success text-xs font-semibold flex items-center gap-1">
                          <CheckCircle size={14} /> Active on Mathura Roster
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: INVENTORY */}
          {activeTab === 'INVENTORY' && (
            <div className="inventory-panel-wrap animate-fade-in">
              <h4>Mathura Central Fulfillment Hub Inventory</h4>
              <p className="panel-sub">Real-time stock ledger for OK Madam proprietary cosmetic formulations.</p>

              <div className="inventory-table-wrap mt-3">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Product SKU</th>
                      <th>Item Name & Shade</th>
                      <th>Category</th>
                      <th>Warehouse Stock</th>
                      <th>Reorder Level</th>
                      <th>Batch Code</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>OKM-FND-01</strong></td>
                      <td>Skin Silk HD Foundation — Warm Sand 01</td>
                      <td>Face</td>
                      <td>42 Units</td>
                      <td>10 Units</td>
                      <td>BATCH-MTR-26A</td>
                      <td><span className="badge badge-success">Healthy</span></td>
                    </tr>
                    <tr>
                      <td><strong>OKM-FND-02</strong></td>
                      <td>Skin Silk HD Foundation — Golden Honey 02</td>
                      <td>Face</td>
                      <td><strong className="text-warning">3 Units</strong></td>
                      <td>10 Units</td>
                      <td>BATCH-MTR-26A</td>
                      <td><span className="badge badge-gold">Low Stock Alert</span></td>
                    </tr>
                    <tr>
                      <td><strong>OKM-BRS-15</strong></td>
                      <td>15-Piece Rose Gold Brush Atelier Roll</td>
                      <td>Tools</td>
                      <td>28 Units</td>
                      <td>8 Units</td>
                      <td>BATCH-MTR-25D</td>
                      <td><span className="badge badge-success">Healthy</span></td>
                    </tr>
                    <tr>
                      <td><strong>OKM-ELX-24K</strong></td>
                      <td>24K Saffron & Rose Glow Elixir (30ml)</td>
                      <td>Skincare</td>
                      <td>35 Units</td>
                      <td>12 Units</td>
                      <td>BATCH-MTR-26B</td>
                      <td><span className="badge badge-success">Healthy</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
