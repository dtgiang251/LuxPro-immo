import React from 'react';

const footerLinks = [
  {
    title: 'Company',
    items: ['About us', 'Services', 'Properties', 'Renovation', 'Careers'],
  },
  {
    title: 'Support',
    items: ['Contact us', 'FAQ', 'Privacy', 'Terms & Conditions'],
  },
  {
    title: 'Resources',
    items: ['Market updates', 'Property advice', 'Partners', 'Press kit'],
  },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white mt-16">
      <div className="section-shell py-10 lg:py-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="h-11 w-11 rounded-full bg-primary text-white grid place-items-center text-lg font-semibold">L</span>
              <div>
                <p className="text-sm font-semibold">LuxPro immo</p>
                <p className="text-xs text-slate-200">Real Estate Experts</p>
              </div>
            </div>
            <p className="max-w-xl text-sm text-slate-200">
              We provide personalized support for all your real estate projects. From buying and selling to renting and renovating, our team is here to help you achieve your goals.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="btn-secondary border-white text-white hover:bg-white hover:text-charcoal">Contact us</button>
              <button className="btn-primary">+352 48 10 35</button>
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {footerLinks.map((group) => (
              <div key={group.title} className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-wide text-slate-300">{group.title}</p>
                <ul className="space-y-2 text-sm text-slate-200">
                  {group.items.map((item) => (
                    <li key={item} className="hover:text-white">
                      <a href="#">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-300 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2024 LuxPro immo. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">
              Privacy policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
