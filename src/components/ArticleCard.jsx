import React from 'react';

export default function ArticleCard({ image, title, date, excerpt }) {
  return (
    <article className="card-surface flex flex-col overflow-hidden">
      <img src={image} alt={title} className="h-44 w-full object-cover" />
      <div className="flex flex-1 flex-col gap-3 p-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">{date}</p>
        <h3 className="text-lg font-semibold text-charcoal">{title}</h3>
        <p className="text-sm text-stone flex-1">{excerpt}</p>
        <button className="text-sm font-semibold text-charcoal">Read more →</button>
      </div>
    </article>
  );
}
