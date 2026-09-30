import { ArrowRight, BookOpen, Check, Home as HomeIcon, Ruler } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { copy, pageMetadata, locales, photos } from '../../lib/content';
import { Eyebrow, Picture, CallToAction } from '../../components/ui';

export async function generateMetadata({ params }) { return pageMetadata((await params).locale, 0); }

export default async function Home({ params }) {
 const { locale } = await params;
 if (!locales.includes(locale)) notFound();
 const c = copy[locale];
 const services = [
  [HomeIcon,'Diseño','Diseño arquitectónico, reformas, ampliaciones y soluciones de mobiliario pensadas para cada proyecto.'],
  [Ruler,'Planos','Planos y documentación técnica para desarrollar y llevar tu proyecto a una etapa concreta.'],
  [BookOpen,'Cursos y capacitaciones','Formación práctica para aprender herramientas y procesos aplicables a arquitectura y diseño.']
 ];
 return <main className="diana-home">
  <section className="diana-hero">
   <div className="shell diana-hero-grid">
    <div className="diana-hero-copy">
     <Eyebrow>ARQ. DIANA G. PIÑANEZ · PARAGUAY</Eyebrow>
     <h1>Arquitectura que empieza con una idea.</h1>
     <p>Diseño, planos y formación para convertir ideas en proyectos concretos.</p>
     <div className="diana-actions"><Link className="diana-primary" href={`/${locale}/contact`}>Quiero empezar mi proyecto <ArrowRight size={18}/></Link><Link className="diana-secondary" href={`/${locale}/services`}>Ver servicios</Link></div>
     <div className="diana-specialties"><span>Diseño</span><span>Planos</span><span>Cursos</span></div>
    </div>
    <div className="diana-hero-image"><Picture src={photos.hero} alt="Referencia visual de arquitectura residencial" eager/><div className="diana-image-note"><span>ARQUITECTURA + DISEÑO</span><b>Espacios pensados para vos.</b></div></div>
   </div>
  </section>

  <section className="shell diana-services">
   <div className="diana-section-heading"><Eyebrow>SERVICIOS</Eyebrow><h2>Lo que hago</h2><p>Tres líneas de trabajo para acompañarte desde el diseño de un proyecto hasta la formación profesional.</p></div>
   <div className="diana-service-grid">{services.map(([Icon,title,text],i)=><Link href={`/${locale}/services#service-${i+1}`} className="diana-service-card" key={title}><div><span>0{i+1}</span><Icon size={25} strokeWidth={1.4}/></div><h3>{title}</h3><p>{text}</p><b>Ver servicio <ArrowRight size={16}/></b></Link>)}</div>
  </section>

  <section className="diana-feature">
   <div className="shell diana-feature-grid">
    <div className="diana-feature-image"><Picture src={photos.detail} alt="Referencia de interiorismo residencial"/></div>
    <div className="diana-feature-copy"><Eyebrow>EL ESTUDIO</Eyebrow><h2>Arquitectura cercana, funcional y personal.</h2><p>Cada proyecto comienza escuchando cómo querés vivir el espacio. Diana acompaña el proceso de forma directa para convertir necesidades, ideas y presupuesto en una propuesta clara.</p><ul><li><Check size={17}/> Atención directa con la arquitecta</li><li><Check size={17}/> Diseño pensado para cada cliente</li><li><Check size={17}/> Acompañamiento durante el desarrollo</li></ul><Link className="diana-secondary" href={`/${locale}/about`}>Conocé a Diana <ArrowRight size={16}/></Link></div>
   </div>
  </section>

  <section className="shell diana-project-preview">
   <div className="diana-section-heading diana-project-head"><div><Eyebrow>PROYECTOS</Eyebrow><h2>Diseño que se vive.</h2></div><p>Próximamente vamos a incorporar aquí el portfolio real de trabajos realizados por el estudio.</p></div>
   <div className="diana-project-images"><div><Picture src={photos.architecture} alt="Referencia visual de vivienda"/><span>Viviendas</span></div><div><Picture src={photos.interior} alt="Referencia visual de interiorismo"/><span>Interiores</span></div><div><Picture src={photos.workplace} alt="Referencia visual de diseño"/><span>Diseño</span></div></div>
  </section>

  <section className="diana-course">
   <div className="shell diana-course-grid"><div><Eyebrow light>CURSOS Y CAPACITACIONES</Eyebrow><h2>Aprendé arquitectura y diseño de forma práctica.</h2><p>Cursos y capacitaciones pensados para estudiantes, profesionales y personas que quieren incorporar herramientas concretas a su trabajo.</p><Link className="diana-course-link" href={`/${locale}/insights`}>Ver cursos y capacitaciones <ArrowRight size={18}/></Link></div><div className="diana-course-list"><div><span>01</span><b>Herramientas de diseño</b></div><div><span>02</span><b>Procesos y documentación</b></div><div><span>03</span><b>Aplicación práctica</b></div><div><span>04</span><b>Capacitaciones personalizadas</b></div></div></div>
  </section>

  <section className="shell diana-process"><div className="diana-section-heading"><Eyebrow>PROCESO</Eyebrow><h2>Simple, claro y acompañado.</h2></div><div className="diana-process-grid">{[['01','Conversamos','Nos contás qué necesitás.'],['02','Diseñamos','Definimos la propuesta.'],['03','Desarrollamos','Resolvemos planos y detalles.'],['04','Entregamos','Te presentamos el proyecto.']].map(([n,t,x])=><div key={n}><span>{n}</span><h3>{t}</h3><p>{x}</p></div>)}</div></section>
  <CallToAction locale={locale} compact/>
 </main>;
}
