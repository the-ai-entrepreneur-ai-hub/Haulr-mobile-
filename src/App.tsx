/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { 
  Search, 
  MapPin, 
  Bell, 
  Grid, 
  Truck, 
  Package, 
  Trash2, 
  Car, 
  ArrowLeft, 
  Heart, 
  Star, 
  ChevronRight, 
  Home, 
  Compass, 
  User, 
  Settings,
  ShieldCheck,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// --- Types ---
type Screen = "onboarding" | "home" | "details" | "web-dashboard";

// --- Components ---

const WebDashboard = () => {
  const stats = [
    { label: "Total Hauls", value: "124", icon: <Truck size={20} /> },
    { label: "Completed", value: "118", icon: <CheckCircle2 size={20} /> },
    { label: "Active", value: "1", icon: <Package size={20} /> },
    { label: "Saved", value: "12", icon: <Heart size={20} /> },
  ];

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col font-sans">
      {/* Top Navigation */}
      <header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-10 sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#f97316] rounded-xl flex items-center justify-center text-white shadow-lg shadow-orange-100">
            <Truck size={24} />
          </div>
          <span className="text-2xl font-bold text-gray-900 tracking-tight">Haulr</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <button className="text-[#f97316] font-bold text-sm">Dashboard</button>
          <button className="text-gray-400 font-bold text-sm hover:text-gray-600 transition-colors">My Hauls</button>
          <button className="text-gray-400 font-bold text-sm hover:text-gray-600 transition-colors">Drivers</button>
          <button className="text-gray-400 font-bold text-sm hover:text-gray-600 transition-colors">Support</button>
        </nav>

        <div className="flex items-center gap-6">
          <div className="relative p-2 text-gray-400 hover:text-gray-600 cursor-pointer">
            <Bell size={22} />
            <div className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></div>
          </div>
          <div className="h-10 w-px bg-gray-100"></div>
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-bold text-gray-900 group-hover:text-[#f97316] transition-colors">George Wilson</p>
              <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">Premium Member</p>
            </div>
            <img src="https://i.pravatar.cc/100?u=george" className="w-10 h-10 rounded-xl border-2 border-white shadow-sm" alt="Profile" />
          </div>
        </div>
      </header>

      <main className="flex-1 p-10 max-w-7xl mx-auto w-full">
        {/* Welcome Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, George! 👋</h1>
            <p className="text-gray-500">You have one active haul in progress. Your driver is 5 minutes away.</p>
          </div>
          <button className="px-8 py-4 bg-[#f97316] text-white font-bold rounded-2xl shadow-lg shadow-orange-200 flex items-center gap-3 hover:scale-105 active:scale-95 transition-all">
            <Truck size={20} />
            Start a New Haul
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-50 flex items-center gap-5">
              <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center text-[#f97316]">
                {stat.icon}
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Active Haul & Map */}
          <div className="lg:col-span-2 flex flex-col gap-10">
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Active Haul Tracking</h2>
                <span className="px-4 py-1.5 bg-green-50 text-green-600 text-xs font-bold rounded-full uppercase tracking-wider border border-green-100">In Transit</span>
              </div>
              <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-50 grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <img src="https://i.pravatar.cc/100?u=driver" className="w-12 h-12 rounded-2xl object-cover" alt="Driver" />
                      <div>
                        <p className="text-sm font-bold text-gray-900">Marcus Rodriguez</p>
                        <p className="text-xs text-gray-400">Ford F-150 • ABC-1234</p>
                      </div>
                    </div>
                    <div className="space-y-6 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-0.5 before:bg-gray-100">
                      <div className="flex items-start gap-4 relative z-10">
                        <div className="w-6 h-6 bg-white border-4 border-[#f97316] rounded-full"></div>
                        <div>
                          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Pickup</p>
                          <p className="text-sm font-bold text-gray-700">5640 Williams Lake Rd, Waterford, MI</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 relative z-10">
                        <div className="w-6 h-6 bg-white border-4 border-gray-200 rounded-full"></div>
                        <div>
                          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Dropoff</p>
                          <p className="text-sm font-bold text-gray-700">821 West 10th St, New York, NY</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-10 pt-8 border-t border-gray-50 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Estimated Arrival</p>
                      <p className="text-xl font-bold text-[#f97316]">14:30 PM</p>
                    </div>
                    <button className="px-6 py-3 bg-gray-900 text-white text-xs font-bold rounded-xl hover:bg-gray-800 transition-colors">
                      Contact Driver
                    </button>
                  </div>
                </div>
                <div className="h-80 md:h-auto rounded-3xl overflow-hidden relative shadow-inner bg-gray-100">
                  <img src="https://picsum.photos/seed/web-map/800/800" className="w-full h-full object-cover opacity-60" alt="Map" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div 
                      animate={{ y: [0, -10, 0] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="w-12 h-12 bg-[#f97316] rounded-2xl flex items-center justify-center text-white shadow-2xl border-4 border-white"
                    >
                      <Truck size={24} />
                    </motion.div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Our Services</h2>
                <button className="text-[#f97316] text-sm font-bold">View all services</button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { title: "Item Hauling", desc: "Furniture, appliances & more", icon: <Package size={24} /> },
                  { title: "Full Move", desc: "Complete home relocation", icon: <Truck size={24} /> },
                  { title: "Junk Removal", desc: "Eco-friendly disposal", icon: <Trash2 size={24} /> },
                ].map((service, i) => (
                  <div key={i} className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-50 hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer group">
                    <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center text-[#f97316] mb-6 group-hover:bg-[#f97316] group-hover:text-white transition-colors">
                      {service.icon}
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">{service.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar Content */}
          <div className="flex flex-col gap-10">
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Hauls</h2>
              <div className="flex flex-col gap-4">
                {[1, 2, 3].map(i => (
                  <div key={i} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-50 flex items-center justify-between group hover:border-orange-200 transition-colors cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 group-hover:text-[#f97316] transition-colors">
                        <Package size={20} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gray-900">Standard Haul</p>
                        <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">Completed • Feb {20 + i}</p>
                      </div>
                    </div>
                    <p className="text-sm font-bold text-gray-900">$75.00</p>
                  </div>
                ))}
                <button className="w-full py-4 text-gray-400 text-sm font-bold border-2 border-dashed border-gray-100 rounded-3xl hover:bg-gray-50 transition-colors">
                  View Full History
                </button>
              </div>
            </section>

            <section className="bg-gray-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Invite Friends & <br /> Get $20 Credit</h3>
                <p className="text-gray-400 text-sm mb-8 leading-relaxed">Share your referral code with friends and get $20 off your next haul when they complete their first trip.</p>
                <div className="flex items-center gap-2 p-2 bg-white/10 rounded-2xl border border-white/10">
                  <input readOnly value="HAULR-2026" className="bg-transparent flex-1 text-sm font-mono px-2 focus:outline-none" />
                  <button className="px-4 py-2 bg-white text-gray-900 text-[10px] font-bold rounded-xl uppercase tracking-wider">Copy</button>
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#f97316] rounded-full blur-[80px] opacity-30"></div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

const OnboardingScreen = ({ onNext }: { onNext: () => void }) => {
  return (
    <div className="relative h-full w-full bg-white overflow-y-auto no-scrollbar flex flex-col px-6 pt-16 pb-12">
      {/* Background Glows */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-orange-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute top-1/2 -left-20 w-64 h-64 bg-orange-50 rounded-full blur-3xl opacity-40 pointer-events-none"></div>

      {/* Live Activity Indicator */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="absolute top-10 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-2.5 py-0.5 bg-green-50 rounded-full border border-green-100"
      >
        <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse"></div>
        <span className="text-[8px] font-bold text-green-600 uppercase tracking-wider whitespace-nowrap">24 Drivers Online</span>
      </motion.div>

      {/* Logo Section */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center mb-8 relative z-10"
      >
        <div className="w-20 h-20 bg-[#f97316] rounded-[1.75rem] flex items-center justify-center shadow-xl shadow-orange-200 mb-4">
          <Truck size={40} className="text-white" />
        </div>
        <h1 className="text-3xl font-bold text-[#1a1a1a] mb-2 tracking-tight">Haulr</h1>
        <p className="text-gray-500 text-center text-sm leading-relaxed max-w-[240px]">
          On-demand hauling with upfront pricing. Move anything, anytime.
        </p>
        
        {/* Social Proof Badge */}
        <div className="mt-3 flex items-center gap-2 px-3 py-1 bg-gray-50 rounded-full border border-gray-100">
          <div className="flex -space-x-1">
            {[1, 2, 3].map(i => (
              <img key={i} src={`https://i.pravatar.cc/100?u=${i+10}`} className="w-4 h-4 rounded-full border border-white" alt="" />
            ))}
          </div>
          <div className="flex items-center gap-1">
            <Star size={10} className="text-yellow-400 fill-yellow-400" />
            <span className="text-[10px] font-bold text-gray-600">4.9 (10k+ users)</span>
          </div>
        </div>
      </motion.div>

      {/* Features List */}
      <div className="flex flex-col gap-3 mb-8 relative z-10">
        {[
          { icon: <MapPin size={22} />, title: "Book in seconds", desc: "Enter locations, get an instant price" },
          { icon: <ShieldCheck size={22} />, title: "Vetted drivers", desc: "Background-checked and insured" },
          { icon: <CheckCircle2 size={22} />, title: "No surprises", desc: "Upfront guaranteed pricing, always" }
        ].map((feature, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            whileTap={{ scale: 0.98 }}
            className="p-3.5 bg-gray-50 rounded-2xl flex items-center gap-4 border border-gray-100 shadow-sm hover:shadow-md transition-all cursor-pointer"
          >
            <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center text-[#f97316]">
              {feature.icon}
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-xs">{feature.title}</h3>
              <p className="text-gray-500 text-[10px]">{feature.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Action Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-auto flex flex-col items-center gap-4 relative z-10"
      >
        <button 
          onClick={onNext}
          className="w-full py-4 bg-[#f97316] text-white font-bold rounded-2xl shadow-lg shadow-orange-200 flex items-center justify-center gap-2 active:scale-95 transition-transform"
        >
          Get Started <ArrowRight size={20} />
        </button>
        
        <button className="text-gray-400 text-sm font-medium hover:text-gray-600 transition-colors pb-4">
          I already have an account
        </button>
      </motion.div>
    </div>
  );
};

const HomeScreen = ({ onSelect }: { onSelect: () => void }) => {
  return (
    <div className="h-full w-full bg-[#f8f9fa] overflow-y-auto pb-32 no-scrollbar">
      {/* Header */}
      <div className="px-6 pt-12 pb-6 flex items-center justify-between">
        <div>
          <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">Welcome back</p>
          <h1 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            Hey, GEORGE <span className="animate-bounce">👋</span>
          </h1>
        </div>
        <div className="p-2.5 bg-white rounded-xl shadow-sm relative cursor-pointer active:scale-95 transition-transform">
          <Bell size={20} className="text-gray-700" />
          <div className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></div>
        </div>
      </div>

      {/* Top Action Cards */}
      <div className="px-6 flex gap-3 mb-8">
        <button 
          onClick={() => {}} 
          className="flex-1 bg-[#f97316] p-5 rounded-3xl shadow-lg shadow-orange-100 flex flex-col items-center justify-center gap-2 active:scale-95 transition-transform"
        >
          <Truck size={24} className="text-white" />
          <span className="text-white font-bold text-sm">Start a Haul</span>
        </button>
        <div className="flex-1 bg-white p-5 rounded-3xl shadow-sm flex flex-col items-center justify-center gap-1">
          <div className="flex items-center gap-2">
            <Package size={20} className="text-[#f97316]" />
            <span className="text-xl font-bold text-gray-900">1</span>
          </div>
          <span className="text-[10px] text-gray-400 font-medium">Haul completed</span>
        </div>
      </div>

      {/* Active Haul Section */}
      <div className="px-6 mb-8">
        <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-50">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-gray-900">Active Haul</h3>
            <span className="px-3 py-1 bg-orange-50 text-[#f97316] text-[10px] font-bold rounded-full uppercase tracking-wider">Driver Assigned</span>
          </div>
          <p className="text-xs text-gray-500 mb-2">Your driver is preparing</p>
          <div className="flex items-start gap-2 mb-4">
            <MapPin size={14} className="text-gray-400 mt-0.5" />
            <p className="text-[11px] text-gray-400 leading-tight">5640 Williams Lake Rd, Waterford, MI 4...</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-orange-50 rounded-lg flex items-center justify-center text-[#f97316]">
                <Truck size={16} />
              </div>
              <span className="text-xs font-bold text-gray-700">wwewew e.</span>
            </div>
            <ChevronRight size={18} className="text-gray-300" />
          </div>
        </div>
      </div>

      {/* Our Services */}
      <div className="px-6 mb-4">
        <h2 className="text-sm font-bold text-gray-900 mb-4">Our Services</h2>
        <div className="flex gap-4">
          <div 
            onClick={onSelect}
            className="flex-1 bg-white p-5 rounded-3xl shadow-sm border border-gray-50 cursor-pointer active:scale-95 transition-transform"
          >
            <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center text-[#f97316] mb-4">
              <Package size={20} />
            </div>
            <h4 className="text-sm font-bold text-gray-900 mb-1">Item Hauling</h4>
            <p className="text-[10px] text-gray-400">Furniture, appliances & more</p>
          </div>
          <div className="flex-1 bg-white/50 p-5 rounded-3xl border border-dashed border-gray-200">
            <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-gray-300 mb-4">
              <Car size={20} />
            </div>
            <h4 className="text-sm font-bold text-gray-300 mb-1">Towing</h4>
            <p className="text-[10px] text-gray-300 italic">Coming soon</p>
          </div>
        </div>
      </div>

      {/* How it works */}
      <div className="px-6 mb-8 mt-8">
        <h2 className="text-sm font-bold text-gray-900 mb-4">How it works</h2>
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-50 flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center text-[#f97316]">
              <MapPin size={20} />
            </div>
            <span className="text-xs font-semibold text-gray-600">Enter pickup & dropoff locations</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center text-[#f97316]">
              <CheckCircle2 size={20} />
            </div>
            <span className="text-xs font-semibold text-gray-600">Get an upfront guaranteed price</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center text-[#f97316]">
              <Truck size={20} />
            </div>
            <span className="text-xs font-semibold text-gray-600">A vetted driver picks up your items</span>
          </div>
        </div>
      </div>

      {/* Recent Hauls */}
      <div className="px-6 mb-4 flex items-center justify-between">
        <h2 className="text-sm font-bold text-gray-900">Recent Hauls</h2>
        <button className="text-[#f97316] text-[10px] font-bold uppercase tracking-wider">View All</button>
      </div>

      <div className="px-6 overflow-x-auto flex gap-4 no-scrollbar pb-4">
        {[1, 2].map((item) => (
          <div 
            key={item} 
            className="min-w-[160px] bg-white p-4 rounded-3xl shadow-sm border border-gray-50"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-8 h-8 bg-orange-50 rounded-lg flex items-center justify-center text-[#f97316]">
                <Truck size={16} />
              </div>
              <span className="text-[10px] text-gray-400 font-medium">Feb 28</span>
            </div>
            <h4 className="text-xs font-bold text-gray-900 mb-1">Standard Haul</h4>
            <p className="text-[#f97316] text-xs font-bold mb-3">$75.00</p>
            <button className="flex items-center gap-1.5 text-[10px] font-bold text-gray-500 uppercase tracking-wider">
              <Compass size={12} />
              Rebook
            </button>
          </div>
        ))}
      </div>

      {/* Bottom Nav */}
      <div className="absolute bottom-6 left-6 right-6 h-18 bg-white rounded-2xl shadow-xl flex items-center justify-around px-2 z-50">
        <div className="flex flex-col items-center gap-1">
          <Home size={20} className="text-[#f97316]" />
          <span className="text-[8px] font-bold text-[#f97316] uppercase">Home</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Package size={20} className="text-gray-300" />
          <span className="text-[8px] font-bold text-gray-300 uppercase">My Hauls</span>
        </div>
        <div className="relative -top-4">
          <div className="w-14 h-14 bg-[#f97316] rounded-2xl shadow-lg shadow-orange-200 flex items-center justify-center text-white active:scale-90 transition-transform">
            <Truck size={24} />
          </div>
          <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[8px] font-bold text-gray-400 uppercase">Haul</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <User size={20} className="text-gray-300" />
          <span className="text-[8px] font-bold text-gray-300 uppercase">Profile</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Settings size={20} className="text-gray-300" />
          <span className="text-[8px] font-bold text-gray-300 uppercase">Settings</span>
        </div>
      </div>
    </div>
  );
};

const DetailsScreen = ({ onBack }: { onBack: () => void }) => {
  return (
    <div className="h-full w-full bg-white overflow-y-auto pb-32 no-scrollbar">
      {/* Hero Image */}
      <div className="relative h-[45%] w-full">
        <img 
          src="https://picsum.photos/seed/haul-detail/800/1000" 
          alt="Haul Detail" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-12 left-6 right-6 flex items-center justify-between">
          <button 
            onClick={onBack}
            className="p-2.5 bg-white/20 backdrop-blur-md rounded-xl text-white border border-white/30"
          >
            <ArrowLeft size={20} />
          </button>
          <h3 className="text-white font-bold">Details</h3>
          <button className="p-2.5 bg-white/20 backdrop-blur-md rounded-xl text-white border border-white/30">
            <Heart size={20} />
          </button>
        </div>
        
        {/* Pagination Dots */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-1.5">
          <div className="w-6 h-1.5 bg-white rounded-full"></div>
          <div className="w-1.5 h-1.5 bg-white/50 rounded-full"></div>
          <div className="w-1.5 h-1.5 bg-white/50 rounded-full"></div>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 pt-8">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-2xl font-bold text-gray-900">Large Item Hauling</h1>
          <div className="flex items-center gap-1">
            <Star size={16} className="text-yellow-400 fill-yellow-400" />
            <span className="text-sm font-bold text-gray-900">4.90</span>
          </div>
        </div>
        
        <div className="flex items-center gap-1 text-gray-400 text-sm mb-6">
          <MapPin size={14} />
          <span>Service available in Manhattan & Brooklyn</span>
        </div>

        <div className="flex items-center justify-between mb-8">
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-[#f97316]">$45.20 <span className="text-xs text-gray-400 font-normal">/Item</span></span>
          </div>
          <div className="flex items-center -space-x-2">
            {[1, 2, 3].map(i => (
              <img 
                key={i}
                src={`https://i.pravatar.cc/100?u=${i}`} 
                className="w-8 h-8 rounded-full border-2 border-white object-cover"
                alt="User"
              />
            ))}
            <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-[10px] font-bold text-gray-500">+12</div>
            <span className="ml-3 text-[10px] font-semibold text-gray-400">Recent Hauls</span>
          </div>
        </div>

        {/* Info Card */}
        <div className="p-4 bg-orange-50 rounded-2xl flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white rounded-xl">
              <Truck size={18} className="text-[#f97316]" />
            </div>
            <span className="text-xs font-semibold text-gray-700">Get the latest hauling safety advice</span>
          </div>
          <ChevronRight size={18} className="text-gray-400" />
        </div>

        <p className="text-gray-500 text-sm leading-relaxed mb-8">
          Our large item hauling service is perfect for furniture, appliances, and bulky items. We provide two professional loaders and a specialized vehicle to ensure your items are moved safely and efficiently.
        </p>

        <h3 className="text-lg font-bold text-gray-900 mb-4">Location on map</h3>
        <div className="h-40 w-full rounded-3xl overflow-hidden mb-8 relative">
          <img 
            src="https://picsum.photos/seed/map/800/400" 
            alt="Map" 
            className="w-full h-full object-cover opacity-80"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-10 h-10 bg-[#f97316] rounded-full flex items-center justify-center shadow-lg border-4 border-white">
              <MapPin size={20} className="text-white" />
            </div>
          </div>
        </div>

        {/* Action Button */}
        <button className="w-full py-4 bg-[#f97316] text-white font-bold rounded-2xl shadow-lg shadow-orange-200 active:scale-95 transition-transform">
          Book Haul Now
        </button>
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("onboarding");

  if (currentScreen === "web-dashboard") {
    return <WebDashboard />;
  }

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Screen Content */}
      <div className="h-screen w-full relative">
        <AnimatePresence mode="wait">
          {currentScreen === "onboarding" && (
            <motion.div
              key="onboarding"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="h-full w-full"
            >
              <OnboardingScreen onNext={() => setCurrentScreen("home")} />
            </motion.div>
          )}

          {currentScreen === "home" && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="h-full w-full"
            >
              <HomeScreen onSelect={() => setCurrentScreen("details")} />
            </motion.div>
          )}

          {currentScreen === "details" && (
            <motion.div
              key="details"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="h-full w-full"
            >
              <DetailsScreen onBack={() => setCurrentScreen("home")} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Screen Selector (for demo purposes) */}
      <div className="fixed top-4 right-4 flex flex-col gap-2 z-[200]">
        <button 
          onClick={() => setCurrentScreen("onboarding")}
          className={`px-4 py-2 rounded-lg text-xs font-bold ${currentScreen === 'onboarding' ? 'bg-[#f97316] text-white' : 'bg-white text-gray-600 shadow'}`}
        >
          Screen 1
        </button>
        <button 
          onClick={() => setCurrentScreen("home")}
          className={`px-4 py-2 rounded-lg text-xs font-bold ${currentScreen === 'home' ? 'bg-[#f97316] text-white' : 'bg-white text-gray-600 shadow'}`}
        >
          Screen 2
        </button>
        <button 
          onClick={() => setCurrentScreen("details")}
          className={`px-4 py-2 rounded-lg text-xs font-bold ${currentScreen === 'details' ? 'bg-[#f97316] text-white' : 'bg-white text-gray-600 shadow'}`}
        >
          Screen 3
        </button>
        <button 
          onClick={() => setCurrentScreen("web-dashboard")}
          className={`px-4 py-2 rounded-lg text-xs font-bold ${currentScreen === 'web-dashboard' ? 'bg-[#f97316] text-white' : 'bg-white text-gray-600 shadow'}`}
        >
          Screen 4 (Web)
        </button>
      </div>
    </div>
  );
}
