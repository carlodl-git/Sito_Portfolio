"use client";

import { ArrowDownRight, Linkedin, Mail, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExperienceCard } from "@/components/ExperienceCard";
import { ProjectCard } from "@/components/ProjectCard";

const sectionTitleVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const navLinks = [
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
];

export function HomeClient() {
  return (
    <main className="min-h-screen bg-black text-foreground">
      <nav
        className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl"
        aria-label="Main navigation"
      >
        <div className="section-max-width flex flex-wrap items-center justify-center gap-6 py-3 md:gap-8 md:py-4">
          <a
            href="#top"
            className="text-xs font-semibold tracking-wide text-white/90 transition hover:text-white"
          >
            Carlo De Luca
          </a>
          <ul className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-xs font-medium tracking-wide text-white/60 transition hover:text-white/90"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className="section-max-width flex flex-col gap-24 pb-24 pt-16 md:gap-28 md:pb-32 md:pt-24 lg:gap-32">
        {/* HERO */}
        <section id="top" className="flex flex-col gap-12 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl space-y-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative h-32 w-32 overflow-hidden rounded-full border-2 border-white/20 shadow-lg md:h-44 md:w-44"
            >
              <Image
                src="/profile.png"
                alt="Carlo De Luca"
                fill
                className="object-cover"
                priority
                sizes="176px"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium tracking-[0.18em] uppercase text-white/60"
            >
              <Sparkles className="h-3 w-3 text-emerald-400" />
              Portfolio of Carlo De Luca
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.06, duration: 0.5, ease: "easeOut" }}
              className="space-y-4"
            >
              <h1 className="text-balance text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-5xl">
                Carlo De Luca
              </h1>
              <p className="text-pretty text-sm font-medium tracking-wide text-white/70 md:text-base">
                CEMS Master’s Candidate | Nova SBE &amp; UCD | Bocconi
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.5, ease: "easeOut" }}
              className="flex flex-wrap gap-3 pt-1"
            >
              <a
                href="https://linkedin.com/in/carlodeluca01"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white text-xs font-medium tracking-wide text-black transition hover:border-emerald-400 hover:bg-emerald-400/95"
              >
                <span className="flex items-center gap-2 px-4 py-2">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </span>
              </a>
              <a
                href="mailto:delucacarlo2001@gmail.com"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 text-xs font-medium tracking-wide text-white transition hover:border-emerald-400/70 hover:bg-white/10"
              >
                <span className="flex items-center gap-2 px-4 py-2">
                  <Mail className="h-4 w-4" />
                  Email
                </span>
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.6, ease: "easeOut" }}
            className="glass-card relative max-w-sm flex-1 space-y-4 border-white/15 bg-gradient-to-br from-zinc-950/80 via-zinc-900/80 to-zinc-950/90 p-6 md:p-7"
          >
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/40">
              Focus
            </p>
            <p className="text-sm leading-relaxed text-white/80">
              Bilingual (Italian &amp; English) CEMS Master’s candidate and Bocconi
              graduate with proven entrepreneurial experience as the Founder of an
              IoT startup. Drove business growth by building direct sales channels
              and negotiating B2B partnerships with agencies to secure recurring
              revenue. Specialize in operational efficiency through AI automation
              and sustainable technology, having successfully implemented robotic
              systems in golf management.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {["IoT & Startups", "B2B & Sales", "AI & Sustainability"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.7rem] font-medium tracking-wide text-white/60"
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>
            <div className="flex items-center gap-2 pt-2 text-xs text-white/40">
              <ArrowDownRight className="h-4 w-4" />
              Scroll to explore experience, projects, education, and skills.
            </div>
          </motion.div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="space-y-8">
          <motion.div
            variants={sectionTitleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="space-y-2"
          >
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
              Selected Projects
            </h2>
            <p className="max-w-xl text-sm text-white/55">
              A curated view of digital products, research, and automation
              initiatives at the intersection of AI, data, and golf.
            </p>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <ProjectCard
              title="Indoor Golf Simulator Booking System"
              description="A streamlined digital platform that centralizes reservations, session management, and availability for indoor golf simulators, improving utilization and experience for players and operators."
              imageAlt="Indoor golf simulation facility with bays, projection screens, and modern design."
              imageUrl="/indoor-golf.png"
            />
            <ProjectCard
              title="BTC Price Prediction Machine Learning Program"
              description="An end-to-end machine learning workflow designed to forecast Bitcoin price trends, exploring feature engineering, model evaluation, and risk-aware interpretation of predictions."
              imageAlt="Abstract data visualization representing cryptocurrency price movement."
              imageUrl="https://images.unsplash.com/photo-1622630998477-20aa696ecb05?auto=format&fit=crop&w=1200&q=80"
            />
            <ProjectCard
              title="DLC Tech IoT Solutions"
              description="Sustainable NFC-enabled digital business cards and review platforms that replace traditional print materials, reduce friction for customers, and enable data-driven insights for businesses."
              imageAlt="DLC Tech product presentation – sustainable NFC solutions."
              imageUrl="/dlc-tech.png"
            />
            <ProjectCard
              title="Robotic Golf Management"
              description="Published research and on-course implementation of autonomous systems in golf, focusing on robotic mowing, course data, and long-term sustainability impact."
              imageAlt="Robotic lawnmowers on a golf course green with pond and trees in the background."
              imageUrl="/robotic-golf.png"
              href="https://acsess.onlinelibrary.wiley.com/doi/full/10.1002/agg2.70271"
            />
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="space-y-8">
          <motion.div
            variants={sectionTitleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="space-y-2"
          >
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
              Experience
            </h2>
            <p className="max-w-xl text-sm text-white/55">
              A vertical snapshot of consulting, entrepreneurship, and research
              across AI, automation, and sustainable technology.
            </p>
          </motion.div>

          <div className="relative mt-4 space-y-5 border-l border-white/10 pl-8">
            <ExperienceCard
              role="Student Consultant – AI Readiness & ROI Toolkits"
              company="Kibo AI"
              location="Dublin"
              description="Developing structured AI readiness and ROI frameworks to help organizations assess automation opportunities, prioritize high-impact initiatives, and translate AI strategy into measurable business outcomes."
              logoSlot={
                <span className="relative block h-12 w-12 overflow-hidden rounded-xl">
                  <Image
                    src="/kibo-ai-logo.png"
                    alt="Kibo AI"
                    fill
                    className="object-contain scale-110"
                    sizes="48px"
                  />
                </span>
              }
            />
            <ExperienceCard
              role="Founder – IoT & Sustainable NFC Solutions"
              company="DLC Tech"
              location="Italy / Portugal"
              description="Building an IoT-focused startup delivering sustainable NFC-enabled products such as digital business cards and review platforms that reduce waste and simplify customer engagement."
              logoSlot={
                <span className="relative block h-12 w-12">
                  <Image
                    src="/dlc-tech-logo.png"
                    alt="DLC Tech"
                    fill
                    className="object-contain"
                    sizes="48px"
                  />
                </span>
              }
            />
            <ExperienceCard
              role="Researcher & Consultant – Robotic Mowers & Green Tech"
              company="Montecchia Group"
              location="Italy"
              description="Conducting applied research and implementation of robotic mowers and green technology, exploring how autonomous systems can maintain golf courses more efficiently and sustainably."
              logoSlot={
                <span className="relative block h-12 w-12">
                  <Image
                    src="/montecchia-logo.svg"
                    alt="Montecchia Group"
                    fill
                    className="object-contain"
                    sizes="48px"
                  />
                </span>
              }
            />
            <ExperienceCard
              role="Management Assistant – International Tournament Logistics"
              company="Montecchia Group"
              location="Italy"
              description="Supporting logistics and coordination for international golf tournaments, ensuring smooth operations across players, sponsors, and on-course experiences."
              logoSlot={
                <span className="relative block h-12 w-12">
                  <Image
                    src="/montecchia-logo.svg"
                    alt="Montecchia Group"
                    fill
                    className="object-contain"
                    sizes="48px"
                  />
                </span>
              }
            />
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="space-y-8">
          <motion.div
            variants={sectionTitleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="space-y-2"
          >
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
              Education
            </h2>
            <p className="max-w-xl text-sm text-white/55">
              An academic journey combining management, impact entrepreneurship,
              and international experience.
            </p>
          </motion.div>

          <div className="relative mt-4 border-l border-white/10 pl-8">
            {/* Timeline: newest (top) → oldest (bottom) */}
            <div className="relative pb-2">
              <span className="absolute -left-[9px] top-0 h-2 w-2 rounded-full border border-emerald-400/80 bg-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.9)]" />
              <div className="glass-card space-y-3 p-5 md:p-6">
                <div className="flex items-center gap-4">
                  <div className="relative h-10 w-full max-w-[120px]">
                    <Image
                      src="/nova-sbe-logo.png"
                      alt="Nova SBE"
                      fill
                      className="object-contain object-left"
                      sizes="120px"
                    />
                  </div>
                  <div className="relative h-10 w-10 shrink-0">
                    <Image
                      src="/ucd-logo.png"
                      alt="UCD Dublin"
                      fill
                      className="object-contain"
                      sizes="40px"
                    />
                  </div>
                </div>
                <h3 className="text-sm font-semibold text-white/90">
                  Master in International Management (CEMS)
                </h3>
                <p className="text-xs text-white/60">Nova SBE 2024–2025 / UCD 2026</p>
              </div>
            </div>
            <div className="relative py-2">
              <span className="absolute -left-[9px] top-7 h-2 w-2 rounded-full border border-emerald-400/80 bg-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.9)]" />
              <div className="glass-card space-y-3 p-5 md:p-6">
                <div className="relative h-10 w-full max-w-[120px]">
                  <Image
                    src="/nova-sbe-logo.png"
                    alt="Nova SBE"
                    fill
                    className="object-contain object-left"
                    sizes="120px"
                  />
                </div>
                <h3 className="text-sm font-semibold text-white/90">
                  Master in Impact Entrepreneurship &amp; Innovation
                </h3>
                <p className="text-xs text-white/60">Nova SBE · 2024–2025</p>
              </div>
            </div>
            <div className="relative py-2">
              <span className="absolute -left-[9px] top-7 h-2 w-2 rounded-full border border-emerald-400/80 bg-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.9)]" />
              <div className="glass-card space-y-3 p-5 md:p-6">
                <div className="relative h-10 w-full max-w-[100px]">
                  <Image
                    src="/aalto-logo.png"
                    alt="Aalto University"
                    fill
                    className="object-contain object-left"
                    sizes="100px"
                  />
                </div>
                <h3 className="text-sm font-semibold text-white/90">
                  Erasmus Program
                </h3>
                <p className="text-xs text-white/60">Aalto University · 2023</p>
              </div>
            </div>
            <div className="relative pt-2">
              <span className="absolute -left-[9px] top-7 h-2 w-2 rounded-full border border-emerald-400/80 bg-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.9)]" />
              <div className="glass-card space-y-3 p-5 md:p-6">
                <div className="relative h-10 w-10">
                  <Image
                    src="/bocconi-logo.png"
                    alt="Bocconi University"
                    fill
                    className="object-contain"
                    sizes="40px"
                  />
                </div>
                <h3 className="text-sm font-semibold text-white/90">
                  Bachelor in Economics and Management
                </h3>
                <p className="text-xs text-white/60">Bocconi University · 2020–2023</p>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="space-y-8">
          <motion.div
            variants={sectionTitleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="space-y-2"
          >
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
              Skills &amp; Beyond Work
            </h2>
            <p className="max-w-xl text-sm text-white/55">
              A blend of technical expertise, languages, and high-performance
              sport.
            </p>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-3">
            <div className="glass-card space-y-3 p-5 md:p-6">
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/55">
                Technical Skills
              </h3>
              <ul className="space-y-1 text-sm text-white/70">
                <li>Programming</li>
                <li>AI Automation</li>
                <li>Cybersecurity</li>
                <li>Machine Learning</li>
              </ul>
            </div>

            <div className="glass-card space-y-3 p-5 md:p-6">
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/55">
                Languages
              </h3>
              <ul className="space-y-1 text-sm text-white/70">
                <li>Italian — Native</li>
                <li>English — Fluent</li>
                <li>Spanish — Intermediate</li>
                <li>French — Basic</li>
              </ul>
            </div>

            <div className="glass-card space-y-3 p-5 md:p-6">
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/55">
                Personal
              </h3>
              <p className="text-sm leading-relaxed text-white/70">
                Competitive golf player with a +1 handicap, bringing the same
                discipline, focus, and strategic thinking from the course into
                business and technology.
              </p>
            </div>
          </div>
        </section>

        <footer className="pt-4 text-xs text-white/35">
          Crafted with Next.js, Tailwind CSS, Framer Motion, and Lucide on a
          pure black canvas.
        </footer>
      </div>
    </main>
  );
}
