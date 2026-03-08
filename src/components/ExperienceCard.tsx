import { ReactNode } from "react";
import { motion } from "framer-motion";

type ExperienceCardProps = {
  role: string;
  company: string;
  location: string;
  period?: string;
  description: string;
  logoSlot?: ReactNode;
};

export function ExperienceCard({
  role,
  company,
  location,
  period,
  description,
  logoSlot,
}: ExperienceCardProps) {
  return (
    <motion.article
      className="glass-card relative flex gap-4 p-5 md:p-6"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div className="flex h-12 w-12 flex-none items-center justify-center rounded-xl border border-white/15 bg-white/5">
        {logoSlot ?? (
          <span className="text-xs font-medium tracking-wide text-white/70">
            Logo
          </span>
        )}
      </div>

      <div className="space-y-2">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="text-sm font-semibold tracking-wide text-white/90">
            {role}
          </h3>
          {period && (
            <span className="text-xs uppercase tracking-[0.18em] text-white/40">
              {period}
            </span>
          )}
        </div>
        <p className="text-xs font-medium text-white/60">
          {company} · {location}
        </p>
        <p className="text-sm leading-relaxed text-white/70">{description}</p>
      </div>

      <span className="absolute -left-5 top-7 h-2 w-2 rounded-full border border-emerald-400/80 bg-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.9)]" />
    </motion.article>
  );
}

