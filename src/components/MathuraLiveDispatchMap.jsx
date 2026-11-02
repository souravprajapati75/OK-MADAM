import React, { useState } from 'react';
import { 
  MapPin, 
  Navigation, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Compass, 
  ExternalLink,
  Car,
  Layers,
  Key
} from 'lucide-react';
import { MATHURA_AREAS, MATHURA_HUB_COORDINATES } from '../data/mockData';
import { Link } from 'react-router-dom';

export default function MathuraLiveDispatchMap({ onSelectArea }) {
  const [selectedAreaId, setSelectedAreaId] = useState('m-dn'); // Default to Dampier Nagar
  const [searchFilter, setSearchFilter] = useState('');
  const [mapMode, setMapMode] = useState('google'); // Default to Google Maps Live
  const [showKeyConfig, setShowKeyConfig] = useState(false);
  const [customKeyInput, setCustomKeyInput] = useState('');

  const envKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '';
  const [localKey, setLocalKey] = useState(
    typeof window !== 'undefined' ? localStorage.getItem('ok_madam_gmaps_key') || '' : ''
  );
  const googleMapsApiKey = localKey || envKey;

  const handleSaveCustomKey = (e) => {
    e.preventDefault();
    if (customKeyInput.trim()) {
      localStorage.setItem('ok_madam_gmaps_key', customKeyInput.trim());
      setLocalKey(customKeyInput.trim());
      setShowKeyConfig(false);
    }
  };

  const handleRemoveKey = () => {
    localStorage.removeItem('ok_madam_gmaps_key');
    setLocalKey('');
    setCustomKeyInput('');
  };

  const currentArea = MATHURA_AREAS.find(a => a.id === selectedAreaId) || MATHURA_AREAS[1];

  const filteredAreas = MATHURA_AREAS.filter(area => 
    area.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
    area.pincode.includes(searchFilter) ||
    area.zone.toLowerCase().includes(searchFilter.toLowerCase())
  );

  // SVG Map Coordinate Mapping (Normalized for Mathura Box)
  // Mathura bounds: Lat ~ 27.32 to 27.61, Lng ~ 77.59 to 77.82
  const mapWidth = 600;
  const mapHeight = 440;
  
  const getX = (lng) => {
    return Math.round(((lng - 77.58) / (77.83 - 77.58)) * mapWidth);
  };
  
  const getY = (lat) => {
    return Math.round((1 - (lat - 27.31) / (27.62 - 27.31)) * mapHeight);
  };

  const hubX = getX(MATHURA_HUB_COORDINATES.lng);
  const hubY = getY(MATHURA_HUB_COORDINATES.lat);
  const destX = getX(currentArea.lng);
  const destY = getY(currentArea.lat);

  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&origin=Krishna+Nagar+Mathura+UP&destination=${encodeURIComponent(currentArea.name + ', Mathura, UP')}`;

  const googleEmbedSrc = googleMapsApiKey
    ? `https://www.google.com/maps/embed/v1/place?key=${googleMapsApiKey}&q=${encodeURIComponent(currentArea.name + ', Mathura, UP')}&zoom=14`
    : `https://maps.google.com/maps?q=${encodeURIComponent(currentArea.name + ', Mathura, UP')}&t=&z=14&ie=UTF8&iwloc=&output=embed`;

  return (
    <section className="mathura-map-section section-padding bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center mb-5">
          <span className="section-eyebrow">
            <Compass size={14} /> Full Mathura Coverage • Zero Travel Surcharges
          </span>
          <h2 className="section-title">Live Mathura Query & Dispatch Route Tracker</h2>
          <p className="section-subtitle">
            Wherever your home or wedding venue is located in Mathura — from Krishna Nagar to Refinery, Vrindavan Road, or Farah border — see live distance, artist travel time, and instant doorstep dispatch routes.
          </p>
        </div>

        <div className="mathura-dispatch-grid">
          {/* Left Column: Interactive Locality Selector (All Mathura Locations) */}
          <div className="locality-selector-pane glass-card">
            <div className="selector-header">
              <h3 className="text-lg font-heading flex items-center gap-2">
                <MapPin size={18} className="text-pink" />
                <span>Select Your Mathura Location ({MATHURA_AREAS.length} Zones)</span>
              </h3>
              <p className="text-xs text-grey-600 mt-1">
                Click any locality to calculate live route from Krishna Nagar Central Hub
              </p>
              <div className="search-box-mini mt-3">
                <input 
                  type="text" 
                  placeholder="Search colony, road, or pincode (e.g. 281001, Dampier, Vrindavan)..." 
                  value={searchFilter}
                  onChange={(e) => setSearchFilter(e.target.value)}
                  className="mini-search-input"
                />
              </div>
            </div>

            {/* List of All Mathura Localities */}
            <div className="localities-scroll-list mt-3">
              {filteredAreas.map((area) => (
                <div 
                  key={area.id}
                  onClick={() => {
                    setSelectedAreaId(area.id);
                    if (onSelectArea) onSelectArea(area);
                  }}
                  className={`locality-select-item ${area.id === selectedAreaId ? 'active' : ''}`}
                >
                  <div className="locality-info-left">
                    <span className="locality-name">{area.name}</span>
                    <span className="locality-sub">{area.landmark} • Pincode: <strong>{area.pincode}</strong></span>
                  </div>
                  <div className="locality-info-right text-right">
                    <span className="locality-distance">{area.distanceKm} km</span>
                    <span className="locality-eta">{area.travelMinutes} mins</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="selector-footer-tip mt-3 pt-3 border-top">
              <span className="text-xs text-grey-600">
                ✨ Free doorstep service: We charge <strong>₹0 travel fee</strong> anywhere across Mathura municipal limits!
              </span>
            </div>
          </div>

          {/* Right Column: Live Route Visualization & Dispatch Telemetry */}
          <div className="route-visualizer-pane glass-card">
            {/* Map Mode Switcher & API Status */}
            <div className="flex items-center justify-between mb-3 pb-2 border-bottom">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setMapMode('radar')}
                  className={`btn btn-xs ${mapMode === 'radar' ? 'btn-pink' : 'btn-outline'}`}
                >
                  <Layers size={13} />
                  <span>Atelier Radar Map</span>
                </button>
                <button
                  type="button"
                  onClick={() => setMapMode('google')}
                  className={`btn btn-xs ${mapMode === 'google' ? 'btn-pink' : 'btn-outline'}`}
                >
                  <Navigation size={13} />
                  <span>Google Maps Live</span>
                </button>
              </div>

              <div className="text-xs text-grey-500 flex items-center gap-2">
                <span className="badge badge-emerald flex items-center gap-1">
                  <CheckCircle2 size={11} />
                  <span>Google Maps: Active</span>
                </span>
                <button
                  type="button"
                  onClick={() => setShowKeyConfig(!showKeyConfig)}
                  className={`badge ${googleMapsApiKey ? 'badge-pink' : 'badge-gold'} cursor-pointer flex items-center gap-1`}
                  title="Configure Custom Google Maps API Key"
                >
                  <Key size={11} />
                  <span>{googleMapsApiKey ? 'Custom API Key Saved' : 'Enter API Key'}</span>
                </button>
              </div>
            </div>

            {/* API Key Modal / Drawer if user wants to enter key directly */}
            {showKeyConfig && (
              <div className="mb-3 p-3 bg-pink-50 border border-pink-200 rounded-lg animate-fade-in text-xs">
                <p className="text-grey-700 font-semibold mb-2">
                  📍 Mathura Live Google Map is currently active with all 20+ localities. If you have a personal Google Cloud Platform API Key, paste it below to enable custom API embedding:
                </p>
                <form onSubmit={handleSaveCustomKey} className="flex items-center gap-2">
                  <input 
                    type="text" 
                    placeholder="Paste Google Maps API Key (AIzaSy...)" 
                    value={customKeyInput}
                    onChange={(e) => setCustomKeyInput(e.target.value)}
                    className="form-input text-xs flex-1 py-1"
                  />
                  <button type="submit" className="btn btn-pink btn-xs">
                    Save Key
                  </button>
                  {localKey && (
                    <button type="button" onClick={handleRemoveKey} className="btn btn-outline btn-xs">
                      Reset
                    </button>
                  )}
                  <button type="button" onClick={() => setShowKeyConfig(false)} className="btn btn-outline btn-xs">
                    Close
                  </button>
                </form>
                <span className="text-grey-500 mt-2 block" style={{ fontSize: '0.72rem' }}>
                  *Tip: If you added the key inside <code>.env</code>, remember to save the file (Ctrl+S) and restart Vite with <code>npm run dev</code>.
                </span>
              </div>
            )}

            {/* Google Maps or Vector Radar Map Frame */}
            {mapMode === 'google' ? (
              <div className="google-map-embed-frame" style={{ height: '380px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', position: 'relative' }}>
                <iframe
                  title="Google Maps Route"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  src={googleEmbedSrc}
                />
              </div>
            ) : (
              /* Visual Vector Route Map */
              <div className="vector-map-frame">
                <svg 
                  viewBox={`0 0 ${mapWidth} ${mapHeight}`} 
                  className="mathura-vector-svg"
                >
                {/* Background Grid & River Yamuna Accent */}
                <rect width={mapWidth} height={mapHeight} fill="#FBF9FA" />
                <path 
                  d={`M ${mapWidth * 0.72} 0 Q ${mapWidth * 0.68} ${mapHeight * 0.4} ${mapWidth * 0.75} ${mapHeight * 0.7} T ${mapWidth * 0.8} ${mapHeight}`}
                  fill="none" 
                  stroke="#E0F2FE" 
                  strokeWidth="28" 
                  strokeLinecap="round"
                />
                <text x={mapWidth * 0.76} y="40" fill="#0284C7" fontSize="11" fontWeight="600" opacity="0.6">
                  Yamuna River Belt
                </text>

                {/* Major Highway NH-19 Line */}
                <path 
                  d={`M ${mapWidth * 0.25} 0 L ${mapWidth * 0.35} ${mapHeight}`}
                  fill="none" 
                  stroke="#F3E8FF" 
                  strokeWidth="8" 
                  strokeDasharray="6 4"
                />
                <text x={mapWidth * 0.12} y="80" fill="#7E22CE" fontSize="10" opacity="0.5">
                  Highway NH-19 (Delhi-Agra)
                </text>

                {/* All Mathura Location Dots */}
                {MATHURA_AREAS.map((area) => {
                  const x = getX(area.lng);
                  const y = getY(area.lat);
                  const isCurrent = area.id === selectedAreaId;
                  const isHub = area.distanceKm === 0;

                  if (isHub) return null;

                  return (
                    <g key={area.id} className="area-node-dot">
                      <circle 
                        cx={x} 
                        cy={y} 
                        r={isCurrent ? 7 : 3.5} 
                        fill={isCurrent ? "#E74C72" : "#CBD5E1"} 
                        stroke="#FFFFFF"
                        strokeWidth="1.5"
                      />
                      {isCurrent && (
                        <circle 
                          cx={x} 
                          cy={y} 
                          r="16" 
                          fill="none" 
                          stroke="#E74C72" 
                          strokeWidth="1.5" 
                          opacity="0.4"
                          className="animate-pulse"
                        />
                      )}
                    </g>
                  );
                })}

                {/* Animated Dispatch Polyline from Hub to Destination */}
                <line 
                  x1={hubX} 
                  y1={hubY} 
                  x2={destX} 
                  y2={destY} 
                  stroke="#E74C72" 
                  strokeWidth="3.5" 
                  strokeDasharray="6 6"
                  className="route-dash-animated"
                />

                {/* Origin Pin: Krishna Nagar Central Hub */}
                <g transform={`translate(${hubX}, ${hubY})`}>
                  <circle cx="0" cy="0" r="10" fill="#242226" />
                  <circle cx="0" cy="0" r="18" fill="none" stroke="#F8BBD0" strokeWidth="2" className="animate-ping" />
                  <circle cx="0" cy="0" r="5" fill="#F8BBD0" />
                  <text x="14" y="4" fill="#242226" fontSize="11" fontWeight="800">
                    HUB: Krishna Nagar
                  </text>
                </g>

                {/* Destination Pin: Selected Client Location */}
                <g transform={`translate(${destX}, ${destY})`}>
                  <circle cx="0" cy="0" r="8" fill="#E74C72" />
                  <circle cx="0" cy="0" r="15" fill="none" stroke="#E74C72" strokeWidth="2" opacity="0.6" />
                  <text x="12" y="4" fill="#E74C72" fontSize="11" fontWeight="700">
                    DEST: {currentArea.name.split(' ')[0]}
                  </text>
                </g>
              </svg>

              {/* Overlay Badge */}
              <div className="map-live-status-pill">
                <span className="live-dot green"></span>
                <span>Live Route Dispatch Active</span>
              </div>
            </div>
            )}

            {/* Route Details Card */}
            <div className="route-telemetry-body mt-4">
              <div className="route-points-summary">
                <div className="route-point-item">
                  <span className="point-badge origin">FROM (Artist Hub)</span>
                  <span className="point-title">OK MADAM Flagship Atelier, Krishna Nagar</span>
                  <span className="point-sub">Main Boulevard Hub • Pincode 281001</span>
                </div>

                <div className="route-arrow-divider">
                  <Navigation size={18} className="text-pink rotate-90" />
                </div>

                <div className="route-point-item">
                  <span className="point-badge dest">TO (Query Destination)</span>
                  <span className="point-title">{currentArea.name}</span>
                  <span className="point-sub">{currentArea.landmark} • Pincode {currentArea.pincode}</span>
                </div>
              </div>

              {/* Stats Bar */}
              <div className="route-stats-grid mt-3">
                <div className="route-stat-box">
                  <span className="stat-label">Estimated Distance</span>
                  <strong className="stat-value">{currentArea.distanceKm} KM</strong>
                </div>

                <div className="route-stat-box">
                  <span className="stat-label">Artist Transit Time</span>
                  <strong className="stat-value text-pink">{currentArea.travelMinutes} MINS</strong>
                </div>

                <div className="route-stat-box">
                  <span className="stat-label">Doorstep Travel Fee</span>
                  <strong className="stat-value text-emerald">₹0 (Free)</strong>
                </div>

                <div className="route-stat-box">
                  <span className="stat-label">Hygiene Kit Protocol</span>
                  <strong className="stat-value text-gold">100% Sealed</strong>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="route-actions-row mt-4">
                <Link to="/book" className="btn btn-pink flex-1">
                  <span>Book Artist To {currentArea.name.split('&')[0]}</span>
                  <ArrowRight size={16} />
                </Link>

                <a 
                  href={googleMapsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-outline btn-icon-only"
                  title="Open in Google Maps"
                >
                  <ExternalLink size={16} />
                  <span>View in Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
