import { motion } from "framer-motion";
import Image from "next/image";

type ProjectCardProps = {
  title: string;
  description: string;
  imageAlt: string;
  imageUrl?: string;
  href?: string;
};

export function ProjectCard({
  title,
  description,
  imageAlt,
  imageUrl,
  href,
}: ProjectCardProps) {
  const card = (
    <motion.article
      className="glass-card flex flex-col overflow-hidden"
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div className="image-shell relative aspect-video w-full">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={imageAlt}
            loading="lazy"
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-xs font-medium tracking-wide text-white/60">
            {imageAlt}
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5 md:p-6">
        <h3 className="text-sm font-semibold tracking-wide text-white/90">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-white/70">{description}</p>
        {href && (
          <span className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-emerald-400/90">
            Read article →
          </span>
        )}
      </div>
    </motion.article>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block transition opacity-90 hover:opacity-100 focus:opacity-100"
      >
        {card}
      </a>
    );
  }

  return card;
}

