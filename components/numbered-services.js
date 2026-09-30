import { ArrowUpRight, BookOpen, Home, Plus, Ruler } from 'lucide-react';
import Link from 'next/link';
import { copy, photos } from '../lib/content';
import { Eyebrow, Picture } from './ui';

const icons = [Home, Ruler, BookOpen];

export default function NumberedServices({ locale }) {
  const c = copy[locale];
  return <section className="home-modern-services" aria-labelledby="home-services-title">
   <div className="shell">
    <div className="home-modern-services-intro"><Eyebrow>{c.home.serviceLabel}</Eyebrow><h2 id="home-services-title">{c.home.serviceTitle}</h2><p>{c.home.serviceText}</p></div>
    <div className="home-modern-services-feature">
      <div className="home-modern-services-feature-image"><Picture src={photos.detail} alt="Detalle de arquitectura y diseño" eager /></div>
      <div className="home-modern-service-list">
     {c.services.items.map(([title, tagline, description], index) => { const Icon = icons[index]; return <details className="home-modern-service" key={title}>
      <summary><span className="home-modern-service-number">0{index + 1}</span><Icon size={20} strokeWidth={1.4}/><span className="home-modern-service-title"><b>{title}</b><em>{tagline}</em></span><Plus size={20} className="home-modern-service-plus" /></summary>
      <p>{description}</p>
     </details>; })}
      </div>
    </div>
    <Link className="home-modern-inline-link home-modern-services-link" href={`/${locale}/services`}>{c.allServices}<ArrowUpRight size={17}/></Link>
   </div>
  </section>;
}
