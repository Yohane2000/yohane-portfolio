"use client";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Menu, X, MoveUpRight, Code2, Layers3, Database, Globe2, Sun, Moon } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import Image from "next/image";
import Link from "next/link";

const links = [
 {id:"work",key:"work" as const},{id:"services",key:"services" as const},{id:"about",key:"about" as const},{id:"contact",key:"contact" as const}
];
const projectSlugs = [
  "nexora-crm",
  "outal",
  "sales-insights",
  "gestion-services",
  "atlantic-web-studio",
];
function Reveal({children,delay=0,className=""}:{children:React.ReactNode;delay?:number;className?:string}){const reduce=useReducedMotion();return <motion.div className={className} initial={reduce?false:{opacity:0,y:28}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.16}} transition={{duration:.7,delay,ease:[.22,1,.36,1]}}>{children}</motion.div>}

const projectImages = [
  "/projects/nexora.png",
  "/projects/outal.png",
  "/projects/sales-insights.png",
  "/projects/gestion-services.png",
  "/projects/atlantic.png",
];

const projectNames = [
  "Nexora CRM",
  "OUTAL",
  "Sales Insights",
  "Gestion Services",
  "Atlantic Web Studio",
];

function Art({ index }: { index: number }) {
  return (
    <div className="project-art relative overflow-hidden">
      <Image
        src={projectImages[index]}
        alt={`Aperçu de ${projectNames[index]}`}
        fill
        sizes="(max-width: 768px) 100vw, 80vw"
        className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
      />
    </div>
  );
}
export default function Portfolio(){
 const {language,setLanguage,theme,setTheme,t}=useLanguage();const [menuOpen,setMenuOpen]=useState(false);const toggleTheme=()=>setTheme(theme==="dark"?"light":"dark");
 return <main className="grain overflow-hidden">
  <header className="site-header fixed inset-x-0 top-0 z-50 border-b border-white/[.08] backdrop-blur-xl"><div className="shell flex h-[76px] items-center justify-between"><a href="#home" className="text-[15px] font-black tracking-[-.08em]">YOHANE-WAGRA <span className="accent"> ® </span></a><nav className="hidden items-center gap-8 md:flex">{links.map(l=><a key={l.id} href={`#${l.id}`} className="nav-link text-[10px] uppercase tracking-[.16em]">{t.nav[l.key]}</a>)}</nav><div className="hidden items-center gap-5 md:flex"><span className="flex items-center gap-2 text-[9px] uppercase tracking-widest text-neutral-500"><span className="h-1.5 w-1.5 rounded-full bg-[var(--acid)]"/>{t.nav.availability}</span><button onClick={()=>setLanguage(language==="fr"?"en":"fr")} className="border-l border-white/15 pl-5 text-[10px] font-bold tracking-widest hover:text-[var(--acid)]">{language.toUpperCase()}</button><button onClick={toggleTheme} className="theme-toggle" aria-label={theme==="dark"?"Activer le mode clair":"Activer le mode sombre"} title={theme==="dark"?"Mode clair":"Mode sombre"}>{theme==="dark"?<Sun size={16}/>:<Moon size={16}/>}</button></div><div className="flex items-center gap-4 md:hidden"><button onClick={()=>setLanguage(language==="fr"?"en":"fr")} className="text-[10px] font-bold">{language.toUpperCase()}</button><button onClick={toggleTheme} className="theme-toggle" aria-label={theme==="dark"?"Activer le mode clair":"Activer le mode sombre"} title={theme==="dark"?"Mode clair":"Mode sombre"}>{theme==="dark"?<Sun size={16}/>:<Moon size={16}/>}</button><button aria-label={menuOpen?"Close menu":"Open menu"} onClick={()=>setMenuOpen(!menuOpen)} className="p-2">{menuOpen?<X size={21}/>:<Menu size={21}/>}</button></div></div>{menuOpen&&<nav className="mobile-menu absolute inset-x-4 top-[68px] flex flex-col p-5 md:hidden">{links.map(l=><a key={l.id} href={`#${l.id}`} onClick={()=>setMenuOpen(false)} className="border-b border-white/10 py-4 text-sm uppercase tracking-widest">{t.nav[l.key]}</a>)}</nav>}</header>
  <section id="home" className="shell flex min-h-[850px] flex-col justify-center pb-20 pt-36 md:min-h-[900px] md:pt-32"><div className="mb-9 flex items-center gap-3"><span className="h-[1px] w-8 bg-[var(--acid)]"/><span className="eyebrow">{t.hero.kicker}</span></div><div className="hero-grid"><div><motion.h1 initial={{opacity:0,y:45}} animate={{opacity:1,y:0}} transition={{duration:.9,ease:[.22,1,.36,1]}} className="display hero-title">{t.hero.line1}<br/><span className="outline-text">{t.hero.line2}</span><br/>{t.hero.line3}<span className="accent">.</span><br/><span className="accent">{t.hero.line4}</span></motion.h1></div><Reveal delay={.25} className="hero-side"><p className="text-sm leading-7 text-neutral-400">{t.hero.description}</p><div className="mt-8 flex flex-col items-start gap-3"><a className="button-acid" href="#work">{t.hero.work}<ArrowUpRight size={15}/></a><a className="button-ghost" href="#contact">{t.hero.contact}<ArrowUpRight size={14}/></a></div></Reveal></div><div className="mt-20 flex flex-wrap items-center justify-between gap-6 border-t rule pt-5"><span className="eyebrow">{t.hero.index}</span><a href="#intro" className="flex items-center gap-3 text-[9px] uppercase tracking-[.18em] text-neutral-400 hover:text-[var(--acid)]">{t.hero.scroll}<ArrowDownRight size={16}/></a><span className="eyebrow">01 / 05</span></div></section>
  <div className="marquee py-5"><div className="marquee-track">{Array.from({length:4}).map((_,i)=><span key={i}>Design-minded developer&nbsp;·&nbsp;Digital craft&nbsp;·&nbsp;Build with purpose&nbsp;·&nbsp;</span>)}</div></div>
  <section id="intro" className="shell grid grid-cols-1 gap-14 py-28 md:grid-cols-[.7fr_1.3fr] md:py-40"><Reveal><span className="eyebrow">{t.intro.label}</span><div className="mt-10 flex items-center gap-3 text-xs text-neutral-500"><span className="h-2 w-2 rounded-full bg-[var(--acid)]"/>YOHANE WAGRAMALE</div></Reveal><Reveal delay={.12}><h2 className="display text-6xl sm:text-7xl md:text-8xl">{t.intro.title1}<br/><span className="accent">{t.intro.title2}</span><br/>{t.intro.title3}</h2><div className="mt-12 grid grid-cols-1 gap-8 border-t rule pt-8 sm:grid-cols-2"><p className="text-sm leading-8 text-neutral-300">{t.intro.body}</p><div><p className="text-sm leading-8 text-neutral-500">{t.intro.body2}</p><p className="mt-6 text-[10px] uppercase tracking-[.16em] text-[var(--acid)]">{t.intro.signature}</p></div></div></Reveal></section>
  <section id="work" className="shell py-24 md:py-32"><Reveal className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end"><div><span className="eyebrow">{t.work.label}</span><h2 className="display mt-8 text-6xl sm:text-7xl md:text-8xl">{t.work.title1}<br/><span className="outline-text">{t.work.title2}</span><br/>{t.work.title3}</h2></div><p className="max-w-sm text-sm leading-7 text-neutral-500">{t.work.description}</p></Reveal><div className="grid grid-cols-1 gap-5 md:grid-cols-2">{t.work.items.map((p,i)=><Reveal key={p.name} delay={(i%2)*.1} className={i===0?"md:col-span-2":""}><article className="project-card group"><Link href={`/work/${projectSlugs[i]}`} aria-label={`${t.work.open}: ${p.name}`}><div className="flex items-center justify-between px-5 py-4"><span className="project-number">0{i+1} / {p.type}</span><ArrowUpRight size={17} className="text-neutral-500 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[var(--acid)]"/></div><Art index={i}/><div className="flex flex-col justify-between gap-5 p-5 sm:flex-row sm:items-end sm:p-7"><div><h3 className="display text-4xl sm:text-5xl">{p.name}<span className="accent">.</span></h3><p className="mt-3 max-w-lg text-xs leading-6 text-neutral-500">{p.desc}</p></div><div className="flex flex-wrap gap-2">{p.tags.map(tag=><span className="tag" key={tag}>{tag}</span>)}</div></div></Link></article></Reveal>)}</div></section>
  <section id="services" className="section-panel border-y rule"><div className="shell py-24 md:py-32"><Reveal className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end"><div><span className="eyebrow">{t.services.label}</span><h2 className="display mt-8 max-w-3xl text-6xl sm:text-7xl md:text-8xl">{t.services.title}</h2></div><p className="max-w-sm text-sm leading-7 text-neutral-500">{t.services.desc}</p></Reveal>{t.services.items.map((s,i)=><Reveal key={s.n} delay={i*.08}><article className="service-row"><span className="project-number">/{s.n}</span><div><h3 className="text-2xl font-bold tracking-tight sm:text-3xl">{s.title}</h3><p className="service-description mt-4 max-w-sm text-xs leading-7 text-neutral-500">{s.desc}</p></div><div className="service-description flex items-end justify-between gap-4"><span className="text-[10px] leading-6 tracking-wider text-neutral-500">{s.detail}</span>{i===0?<Code2 className="shrink-0 text-[var(--acid)]"/>:i===1?<Database className="shrink-0 text-[var(--acid)]"/>:<Layers3 className="shrink-0 text-[var(--acid)]"/>}</div></article></Reveal>)}</div></section>
  <section id="about" className="shell grid grid-cols-1 gap-12 py-24 md:grid-cols-[.7fr_1.3fr] md:py-36"><Reveal><span className="eyebrow">{t.about.label}</span><div className="mt-10 inline-flex h-20 w-20 items-center justify-center rounded-full border border-white/15 text-[var(--acid)]"><Globe2 size={30} strokeWidth={1}/></div><p className="mt-6 text-[10px] uppercase leading-6 tracking-[.15em] text-neutral-500">{t.about.location}</p></Reveal><Reveal delay={.1}><h2 className="display text-7xl sm:text-8xl md:text-9xl">{t.about.title1}<br/><span className="accent">{t.about.title2}</span></h2><div className="mt-12 grid grid-cols-1 gap-8 border-t rule pt-8 sm:grid-cols-2"><div><p className="text-sm leading-8 text-neutral-300">{t.about.body}</p><p className="mt-6 text-sm leading-8 text-neutral-500">{t.about.body2}</p></div><div className="flex flex-col justify-between gap-8"><div><span className="eyebrow">Education</span><p className="mt-3 text-sm leading-7">{t.about.education}</p></div><p className="border-l border-[var(--acid)] pl-4 text-xs uppercase leading-6 tracking-[.13em] text-[var(--acid)]">{t.about.approach}</p></div></div></Reveal></section>
  <section id="contact" className="border-t rule bg-[#c5f467] text-[#11110f]"><div className="shell py-24 md:py-36"><Reveal><span className="text-[10px] uppercase tracking-[.18em] text-black/60">{t.contact.label}</span><div className="mt-12 flex flex-col justify-between gap-12 md:flex-row md:items-end"><h2 className="display text-7xl sm:text-8xl md:text-[clamp(90px,13vw,190px)]">{t.contact.title1}<br/>{t.contact.title2}<br/><span className="outline-text" style={{WebkitTextStroke:"1px rgba(17,17,15,.7)"}}>{t.contact.title3}</span></h2><div className="max-w-xs pb-3"><p className="text-sm leading-7 text-black/70">{t.contact.desc}</p><a className="mt-7 inline-flex items-center gap-4 border-b border-black pb-3 text-xs font-bold uppercase tracking-[.15em]" href="mailto:yohanewagra94@email.com">{t.contact.cta}<MoveUpRight size={18}/></a></div></div></Reveal><div className="mt-24 flex flex-col justify-between gap-7 border-t border-black/20 pt-6 sm:flex-row sm:items-center"><div><span className="text-[9px] uppercase tracking-widest text-black/50">{t.contact.emailLabel}</span><a href="mailto:yohanewagra94@email.com" className="mt-2 block text-sm font-bold">ton-adresse@email.com</a></div><div><span className="text-[9px] uppercase tracking-widest text-black/50">{t.contact.social}</span><div className="mt-2 flex gap-5 text-sm font-bold"><a href="https://github.com/Yohane2000" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/yohane-wagramale-542a98122" target="_blank" rel="noreferrer">LinkedIn ↗</a></div></div><a href="#home" className="text-[10px] font-bold uppercase tracking-widest">{t.contact.back} ↑</a></div><p className="mt-12 text-[9px] uppercase tracking-widest text-black/50">{t.contact.rights}</p></div></section>
 </main>;
}
