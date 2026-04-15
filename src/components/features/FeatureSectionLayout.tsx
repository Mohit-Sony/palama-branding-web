"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, ChevronRight } from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

export type FeatureBullet = {
  icon: React.ElementType;
  title: string;
  description: string;
};

export type FeatureStat = {
  value: string;
  label: string;
};

export type FeatureCTA = {
  label: string;
  href: string;
  variant: "primary" | "ghost";
};

/**
 * Visual slot: pass either a ReactNode (custom widget / animation) OR a
 * media descriptor for a static image or GIF.
 *
 * ReactNode  — rendered as-is inside the left column container.
 * MediaVisual — wrapped in a nicely styled image container automatically.
 */
export type VisualMedia = {
  type: "image" | "gif";
  src: string;
  alt: string;
  /** Optional width for Next.js <Image> (ignored for gif → plain <img>). Default 800. */
  width?: number;
  /** Optional height for Next.js <Image> (ignored for gif → plain <img>). Default 600. */
  height?: number;
};

export type FeatureSectionProps = {
  /** Section anchor id, e.g. "online-booking" */
  id?: string;

  /**
   * The visual shown on the "media" side.
   * Pass a ReactNode for custom animated widgets, or a VisualMedia object
   * for images / GIFs.
   */
  visual: React.ReactNode | VisualMedia;

  /**
   * Optional extra chips / badges to float around the visual.
   * Pass as a ReactNode — position them with `absolute` inside the relative
   * visual wrapper.
   */
  visualOverlay?: React.ReactNode;

  /**
   * Which side the visual sits on. Default: "left".
   * Alternate between sections to create a zig-zag layout.
   */
  visualSide?: "left" | "right";

  /** Section background colour class. Default: "bg-white". */
  bgClass?: string;

  /** Hex accent colour used for the label, bullet icons, stats, and headline spans. */
  accentColor?: string;

  /** Label shown above the headline with a small icon. */
  labelIcon: React.ElementType;
  label: string;

  /**
   * Main headline. Pass a string for plain text, or a ReactNode to include
   * coloured `<span>` accents.
   */
  headline: React.ReactNode;

  /** Short paragraph below the headline. */
  description: string;

  /** List of highlight bullets. Up to 4 recommended. */
  bullets?: FeatureBullet[];

  /** Stat strip shown below the bullets. Up to 3 recommended. */
  stats?: FeatureStat[];

  /** Primary CTA button. */
  primaryCTA?: FeatureCTA;

  /** Secondary text-link CTA. */
  secondaryCTA?: FeatureCTA;
};

// ─── Helper: detect VisualMedia ───────────────────────────────────────────────

function isVisualMedia(v: unknown): v is VisualMedia {
  return (
    typeof v === "object" &&
    v !== null &&
    "type" in v &&
    "src" in v &&
    "alt" in v
  );
}

// ─── MediaVisual wrapper ──────────────────────────────────────────────────────

/**
 * Exported convenience wrapper so consumers can also build their own
 * styled image block and pass it as a ReactNode.
 *
 * Usage:
 *   <MediaVisual src="/feature.gif" alt="Demo" type="gif" />
 */
export function MediaVisual({
  src,
  alt,
  type,
  width = 800,
  height = 600,
}: VisualMedia) {
  return (
    <div className="relative w-full rounded-[2rem] overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.12)] border border-white/60 bg-white">
      {type === "gif" ? (
        // Plain <img> so the GIF animates (Next.js Image can strip animation)
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          className="w-full h-auto object-cover"
          loading="lazy"
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="w-full h-auto object-cover"
          loading="lazy"
        />
      )}
    </div>
  );
}

// ─── BulletItem ───────────────────────────────────────────────────────────────

function BulletItem({
  bullet,
  accentColor,
}: {
  bullet: FeatureBullet;
  accentColor: string;
}) {
  const Icon = bullet.icon;
  return (
    <div className="flex items-start gap-3.5 group">
      <div
        className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors duration-300"
        style={
          {
            "--accent": accentColor,
            background: `${accentColor}14`,
          } as React.CSSProperties
        }
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.background = accentColor;
          const icon = e.currentTarget.querySelector("svg");
          if (icon) (icon as SVGElement).style.color = "#ffffff";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.background = `${accentColor}14`;
          const icon = e.currentTarget.querySelector("svg");
          if (icon) (icon as SVGElement).style.color = accentColor;
        }}
      >
        <Icon
          style={{ width: 18, height: 18, color: accentColor, transition: "color 0.3s" }}
        />
      </div>
      <div>
        <div className="text-[15px] font-bold text-[#101921] mb-0.5">
          {bullet.title}
        </div>
        <div className="text-[14px] text-[#5E6C84] leading-relaxed">
          {bullet.description}
        </div>
      </div>
    </div>
  );
}

// ─── FeatureSectionLayout ─────────────────────────────────────────────────────

export default function FeatureSectionLayout({
  id,
  visual,
  visualOverlay,
  visualSide = "left",
  bgClass = "bg-white",
  accentColor = "#107050",
  labelIcon: LabelIcon,
  label,
  headline,
  description,
  bullets,
  stats,
  primaryCTA,
  secondaryCTA,
}: FeatureSectionProps) {
  const isFlipped = visualSide === "right";

  // Resolve the visual ReactNode
  const visualNode = isVisualMedia(visual) ? (
    <MediaVisual {...visual} />
  ) : (
    visual
  );

  const contentCol = (
    <div className="flex-1 max-w-[520px] w-full">
      {/* Label badge */}
      <div className="flex items-center gap-2 mb-5">
        <div
          className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
          style={{ background: `${accentColor}16` }}
        >
          <LabelIcon style={{ width: 16, height: 16, color: accentColor }} />
        </div>
        <span
          className="text-[13px] font-bold tracking-widest uppercase"
          style={{ color: accentColor }}
        >
          {label}
        </span>
      </div>

      {/* Headline */}
      <h2 className="text-[36px] sm:text-[44px] md:text-[52px] font-extrabold text-[#101921] leading-[1.05] tracking-[-0.02em] mb-5">
        {headline}
      </h2>

      {/* Description */}
      <p className="text-[16px] sm:text-[17px] text-[#5E6C84] leading-relaxed font-medium mb-10 max-w-[430px]">
        {description}
      </p>

      {/* Bullets */}
      {bullets && bullets.length > 0 && (
        <div className="flex flex-col gap-5 mb-10">
          {bullets.map((b) => (
            <BulletItem key={b.title} bullet={b} accentColor={accentColor} />
          ))}
        </div>
      )}

      {/* CTAs */}
      {(primaryCTA || secondaryCTA) && (
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10">
          {primaryCTA && (
            <a
              href={primaryCTA.href}
              className="inline-flex items-center gap-2 text-white px-7 py-4 rounded-full text-[15px] font-bold transition-all active:scale-95 shadow-lg shadow-black/10 hover:opacity-90"
              style={{ background: "#101921" }}
            >
              {primaryCTA.label}
              <ArrowRight style={{ width: 16, height: 16 }} />
            </a>
          )}
          {secondaryCTA && (
            <a
              href={secondaryCTA.href}
              className="inline-flex items-center gap-1.5 text-[#101921] text-[15px] font-bold border-b-2 border-[#101921]/20 hover:border-[#101921] pb-0.5 transition-all duration-200 group"
            >
              {secondaryCTA.label}
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          )}
        </div>
      )}

      {/* Stats strip */}
      {stats && stats.length > 0 && (
        <div className="pt-8 border-t border-gray-100 flex flex-wrap gap-x-8 gap-y-3">
          {stats.map((s) => (
            <div key={s.label}>
              <div
                className="text-[22px] font-black tracking-tight leading-none"
                style={{ color: "#101921" }}
              >
                {s.value}
              </div>
              <div className="text-[12px] font-medium text-[#5E6C84] mt-0.5">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const visualCol = (
    <div
      className={`flex-1 flex items-center relative pt-8 pb-12 ${
        isFlipped
          ? "justify-center lg:justify-start pl-0 pr-8"
          : "justify-center lg:justify-end pl-8"
      }`}
    >
      {visualNode}
      {/* Optional floating overlays (badges, chips) */}
      {visualOverlay}
    </div>
  );

  return (
    <>
      {/* Shared keyframes — idempotent if already present on page */}
      <style>{`
        @keyframes fsl-floatBadge1 {
          0%, 100% { transform: translateY(0px) rotate(-2deg); }
          50%       { transform: translateY(-10px) rotate(-2deg); }
        }
        @keyframes fsl-floatBadge2 {
          0%, 100% { transform: translateY(0px) rotate(2deg); }
          50%       { transform: translateY(-12px) rotate(2deg); }
        }
        .fsl-float-1 { animation: fsl-floatBadge1 4s ease-in-out infinite; }
        .fsl-float-2 { animation: fsl-floatBadge2 5s ease-in-out 0.8s infinite; }
      `}</style>

      <section
        id={id}
        className={`relative py-24 md:py-36 overflow-hidden ${bgClass}`}
      >
        {/* ── Decorative: soft accent blob ── */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: 600,
            height: 600,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${accentColor}09 0%, transparent 70%)`,
            top: -160,
            [isFlipped ? "left" : "right"]: -160,
          }}
        />

        {/* ── Decorative: dot grid on the visual side ── */}
        <div
          className="absolute top-1/2 -translate-y-1/2 w-48 h-96 pointer-events-none opacity-25"
          style={{
            [isFlipped ? "right" : "left"]: 0,
            backgroundImage: "radial-gradient(circle, #101921 1px, transparent 1px)",
            backgroundSize: "20px 20px",
            maskImage: isFlipped
              ? "radial-gradient(ellipse 60% 80% at 100% 50%, black 0%, transparent 100%)"
              : "radial-gradient(ellipse 60% 80% at 0% 50%, black 0%, transparent 100%)",
            WebkitMaskImage: isFlipped
              ? "radial-gradient(ellipse 60% 80% at 100% 50%, black 0%, transparent 100%)"
              : "radial-gradient(ellipse 60% 80% at 0% 50%, black 0%, transparent 100%)",
          }}
        />

        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex flex-col ${
              isFlipped ? "lg:flex-row-reverse" : "lg:flex-row"
            } items-center gap-16 lg:gap-24`}
          >
            {visualCol}
            {contentCol}
          </div>
        </div>
      </section>
    </>
  );
}
