import React from 'react';

export default function ServiceCard({ title, description, cta }) {
  return (
    <div className="card-surface flex flex-col gap-3 p-6">
      <h3 className="text-lg font-semibold text-charcoal">{title}</h3>
      <p className="text-sm text-stone flex-1">{description}</p>
      <button className="text-sm font-semibold text-primary">{cta} →</button>
    </div>
  );
}
