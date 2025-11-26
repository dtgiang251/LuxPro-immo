import React from 'react';

const stats = [
  { value: '900+', label: 'Successful sales in 10 years' },
  { value: '1B', label: 'Value of achieved transactions' },
  { value: '520K€', label: 'Average property price on the market' },
];

export default function Hero() {
  return (
    <section className="section-shell grid gap-10 lg:grid-cols-[1.05fr_1fr] items-center py-12 lg:py-16">
      <div className="space-y-6 lg:pr-8">
        <p className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold text-primary">
          Consultancy, rent, buy, sell, renovate
        </p>
        <h1 className="text-3xl leading-tight font-semibold sm:text-4xl lg:text-5xl lg:leading-tight text-charcoal">
          Your real estate projects are in good hands with our experts
        </h1>
        <p className="text-base text-stone sm:text-lg max-w-2xl">
          We provide tailored support for buying, selling, renting, or renovating. Our expert team offers personalized advice to
          help you navigate the Luxembourg market with confidence.
        </p>
        <div className="flex flex-wrap gap-3">
          <button className="btn-primary">Plan a call</button>
          <button className="btn-secondary">+352 48 10 35</button>
        </div>
        <div className="grid gap-3 sm:grid-cols-3 pt-4">
          {stats.map((stat) => (
            <div key={stat.value} className="rounded-2xl bg-sand px-4 py-5 text-center shadow-card">
              <p className="text-2xl font-semibold text-primary">{stat.value}</p>
              <p className="text-sm text-stone">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative">
        <div className="card-surface overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1100&q=80"
            alt="Modern property"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute -bottom-6 -left-6 hidden lg:block rounded-3xl bg-white shadow-card px-6 py-5 w-64">
          <p className="text-xs font-semibold text-primary uppercase tracking-wide">Latest valuation</p>
          <p className="mt-2 text-2xl font-semibold text-charcoal">€ 2,546,000</p>
          <p className="text-sm text-stone">2-4 Rue Theo Kerg, L-2678 Luxembourg</p>
          <button className="mt-3 text-sm font-semibold text-primary">See details →</button>
        </div>
      </div>
    </section>
  );
}
