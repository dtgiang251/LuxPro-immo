import React from 'react';

const navLinks = [
  'Buy',
  'Sell',
  'Rent',
  'Market Updates',
  'About us',
  'Contact',
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-slate-100">
      <div className="section-shell flex items-center justify-between py-4">
        <div className="flex items-center gap-3">
          <span className="h-10 w-10 rounded-full bg-primary text-white grid place-items-center text-lg font-semibold">L</span>
          <div className="leading-tight">
            <p className="text-xs uppercase tracking-wide text-stone">LuxPro immo</p>
            <p className="text-sm font-semibold text-charcoal">Real Estate Experts</p>
          </div>
        </div>
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-charcoal">
          {navLinks.map((link) => (
            <a key={link} href="#" className="hover:text-primary">
              {link}
            </a>
          ))}
        </nav>
        <div className="hidden sm:flex items-center gap-3">
          <button className="btn-secondary">+352 48 10 35</button>
          <button className="btn-primary">Book an appointment</button>
        </div>
        <button className="lg:hidden inline-flex items-center rounded-full border border-slate-200 px-3 py-2 text-sm font-semibold text-charcoal">
          Menu
        </button>
      </div>
    </header>
  );
}
