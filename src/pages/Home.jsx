import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import PropertyCard from '../components/PropertyCard';
import ArticleCard from '../components/ArticleCard';
import Footer from '../components/Footer';

const serviceItems = [
  {
    title: 'We provide assistance in managing all of your real estate projects in Luxembourg',
    description: 'Our experts offer tailored guidance for buyers, sellers, tenants and investors. We ensure every step is managed with care and precision.',
    cta: 'Let’s talk about your project',
  },
  {
    title: 'Hire LuxPro immo for easy and stress free buying of real estate in Luxembourg',
    description: 'From first viewing to signing, we negotiate and secure the right property for you while keeping the process transparent and efficient.',
    cta: 'See how we can help',
  },
  {
    title: 'Sell or rent your property with us to get the best outcome with expert advice',
    description: 'We craft impactful listings, qualify buyers, and manage visits so you receive the best possible offer quickly and securely.',
    cta: 'Read more about our service',
  },
];

const properties = [
  {
    title: '11 bedroom penthouse with roof terrace and pool',
    price: '€ 1,250,000',
    location: 'Kirchberg, Luxembourg',
    specs: '235 m² • Penthouse • 11 bedrooms • 4 bathrooms • Rooftop terrace',
    tag: 'New listing',
    image: 'https://images.unsplash.com/photo-1512914890250-353c97c9e7dc?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Renovated 3 bedroom house',
    price: '€ 790,000',
    location: 'Esch-sur-Alzette',
    specs: '145 m² • House • 3 bedrooms • 2 bathrooms • Garden',
    tag: 'New listing',
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Modern duplex with terrace',
    price: '€ 680,000',
    location: 'Differdange',
    specs: '120 m² • Duplex • 3 bedrooms • 2 bathrooms • Terrace',
    tag: 'New listing',
    image: 'https://images.unsplash.com/photo-1470246973918-29a93221c455?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Classy studio in the city center',
    price: '€ 410,000',
    location: 'Luxembourg city center',
    specs: '58 m² • Studio • 1 bedroom • 1 bathroom',
    tag: 'New listing',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
  },
];

const articles = [
  {
    title: 'Luxury Living in Kirchberg: A Deep Dive into Luxembourg’s Modern District',
    date: 'Sep 03',
    excerpt: 'Explore the prime amenities, architecture, and investment opportunities that define Luxembourg’s vibrant financial hub.',
    image: 'https://images.unsplash.com/photo-1529429617124-aee5f4ae7890?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'What 2024 brings to the real estate market in Luxembourg',
    date: 'Aug 31',
    excerpt: 'From pricing trends to new developments, here’s what you need to know to stay ahead in Luxembourg’s property landscape.',
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Expert advice before buying your new apartment',
    date: 'Aug 17',
    excerpt: 'Key tips on financing, location, and property inspections to ensure your next purchase is stress-free.',
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80',
  },
];

export default function Home() {
  return (
    <div className="bg-white text-charcoal">
      <Header />
      <main className="space-y-16">
        <Hero />

        <section className="section-shell space-y-8">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-2">
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">Who are we?</p>
              <h2 className="text-2xl font-semibold sm:text-3xl text-charcoal">Let us handle your real estate needs in Luxembourg</h2>
              <p className="max-w-3xl text-sm text-stone sm:text-base">
                With over a decade of experience in the Luxembourg market, we provide tailored support for all your real estate projects.
                From valuation to renovation, we deliver smooth, transparent experiences.
              </p>
            </div>
            <button className="btn-primary self-start">Let’s talk about your project</button>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {serviceItems.map((item) => (
              <ServiceCard key={item.title} {...item} />
            ))}
          </div>
        </section>

        <section className="bg-sand/60 py-12">
          <div className="section-shell space-y-6">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-primary">The properties for you</p>
                <h2 className="text-2xl font-semibold sm:text-3xl">Latest listed properties</h2>
                <p className="max-w-3xl text-sm text-stone sm:text-base">
                  Discover our newest listings across Luxembourg. Every property is vetted and presented with complete transparency.
                </p>
              </div>
              <button className="btn-primary self-start">See all listings</button>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {properties.slice(0, 3).map((property) => (
                <PropertyCard key={property.title} {...property} />
              ))}
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {properties.slice(3).map((property) => (
                <PropertyCard key={property.title} {...property} />
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell space-y-8">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">What to read</p>
              <h2 className="text-2xl font-semibold sm:text-3xl">Market updates & Property advice</h2>
              <p className="max-w-3xl text-sm text-stone sm:text-base">
                Stay ahead with insights on Luxembourg’s market, expert tips, and highlights of our featured properties.
              </p>
            </div>
            <button className="btn-primary self-start">Visit our blog</button>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {articles.map((article) => (
              <ArticleCard key={article.title} {...article} />
            ))}
          </div>
        </section>

        <section className="bg-sand/60 py-12">
          <div className="section-shell grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">LuxPro immo will support you</p>
              <h2 className="text-2xl font-semibold sm:text-3xl">
                Let’s turn your property idea into a reality together
              </h2>
              <p className="max-w-2xl text-sm text-stone sm:text-base">
                Our experts align with your goals to craft a clear roadmap for your project, whether you are buying, selling, or renovating.
              </p>
              <div className="flex flex-wrap gap-3">
                <button className="btn-primary">Tell us about your project</button>
                <button className="btn-secondary">Book an appointment</button>
              </div>
            </div>
            <div className="card-surface overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1470246973918-29a93221c455?auto=format&fit=crop&w=1100&q=80"
                alt="LuxPro team"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
