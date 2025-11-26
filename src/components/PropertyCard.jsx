import React from 'react';

export default function PropertyCard({ image, title, price, location, specs, tag }) {
  return (
    <article className="card-surface overflow-hidden hover:-translate-y-1 transition transform">
      <div className="relative h-52 w-full">
        <img src={image} alt={title} className="h-full w-full object-cover" />
        {tag && <span className="absolute left-4 top-4 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-white">{tag}</span>}
      </div>
      <div className="flex flex-col gap-3 p-5">
        <div className="flex items-center gap-2 text-xs text-stone">
          <span className="inline-block h-2 w-2 rounded-full bg-primary" />
          {location}
        </div>
        <h3 className="text-lg font-semibold text-charcoal">{title}</h3>
        <p className="text-sm text-stone">{specs}</p>
        <div className="flex items-center justify-between pt-2">
          <p className="text-xl font-semibold text-primary">{price}</p>
          <button className="text-sm font-semibold text-charcoal">See listing →</button>
        </div>
      </div>
    </article>
  );
}
