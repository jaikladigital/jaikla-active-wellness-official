import React, { useEffect, useState } from 'react';
import {
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Expand,
  Film,
  LayoutGrid,
  Layers,
  Pause,
  Play,
  X,
} from 'lucide-react';
import {
  FIELD_GALLERY_ITEMS,
  FIELD_GALLERY_UI,
  FieldCaptionContent,
  FieldFrameLayoutMode,
  FieldGalleryItem,
  FieldPhotoCategory,
} from '../data/fieldGalleryData';
import { SupportedLocale } from '../data/i18nData';
import {
  formatTextForLocaleAndViewport,
  SmartEnglishText,
  SmartThaiText,
  useViewportTypography,
} from '../utils/typographyEngine';
import { JaiklaSymbolMark } from './KineticGraphics';

interface FieldActivityGallerySectionProps {
  locale: SupportedLocale;
}

const SHOWCASE_LAYOUT_MODES: FieldFrameLayoutMode[] = [
  'cinema-deck',
  'fan-stack',
  'kinetic-filmstrip',
];

function pickRandomLayoutMode(): FieldFrameLayoutMode {
  const randomIndex = Math.floor(Math.random() * SHOWCASE_LAYOUT_MODES.length);
  return SHOWCASE_LAYOUT_MODES[randomIndex] ?? 'cinema-deck';
}

function parseObjectPosition(pos: string): { x: number; y: number } {
  const parts = pos.replace(/%/g, '').trim().split(/\s+/);
  const x = Number.parseFloat(parts[0] ?? '50');
  const y = Number.parseFloat(parts[1] ?? '35');
  return {
    x: Number.isFinite(x) ? x : 50,
    y: Number.isFinite(y) ? y : 35,
  };
}

export const FieldActivityGallerySection: React.FC<FieldActivityGallerySectionProps> = ({
  locale,
}) => {
  const { width } = useViewportTypography();
  const ui = FIELD_GALLERY_UI[locale] || FIELD_GALLERY_UI.en;

  const [activeCategory, setActiveCategory] = useState<FieldPhotoCategory>('ALL');
  // Randomly select one of the 3 unified showcase presentation modes on every fresh page load
  const [layoutMode, setLayoutMode] = useState<FieldFrameLayoutMode>(() => pickRandomLayoutMode());

  // Unified animated frame state
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const [isHoverPaused, setIsHoverPaused] = useState<boolean>(false);

  // Fullscreen Lightbox state
  const [lightboxItemId, setLightboxItemId] = useState<string | null>(null);

  const filteredItems =
    activeCategory === 'ALL'
      ? FIELD_GALLERY_ITEMS
      : FIELD_GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const safeActiveIdx = filteredItems.length > 0 ? activeIndex % filteredItems.length : 0;
  const activeItem: FieldGalleryItem = filteredItems[safeActiveIdx] || FIELD_GALLERY_ITEMS[0];

  // Reset active index when category changes
  useEffect(() => {
    setActiveIndex(0);
  }, [activeCategory]);

  // Auto-cycle animation across all photos inside the single frame
  useEffect(() => {
    if (!isAutoPlaying || isHoverPaused || lightboxItemId || filteredItems.length <= 1) {
      return;
    }
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % filteredItems.length);
    }, 4200);
    return () => window.clearInterval(timer);
  }, [isAutoPlaying, isHoverPaused, lightboxItemId, filteredItems.length]);

  const activeLightboxIndex = lightboxItemId
    ? FIELD_GALLERY_ITEMS.findIndex((item) => item.id === lightboxItemId)
    : -1;
  const activeLightboxItem: FieldGalleryItem | null =
    activeLightboxIndex >= 0 ? FIELD_GALLERY_ITEMS[activeLightboxIndex] : null;

  useEffect(() => {
    if (!lightboxItemId) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxItemId(null);
      } else if (e.key === 'ArrowRight') {
        const nextIdx = (activeLightboxIndex + 1) % FIELD_GALLERY_ITEMS.length;
        setLightboxItemId(FIELD_GALLERY_ITEMS[nextIdx].id);
      } else if (e.key === 'ArrowLeft') {
        const prevIdx =
          (activeLightboxIndex - 1 + FIELD_GALLERY_ITEMS.length) % FIELD_GALLERY_ITEMS.length;
        setLightboxItemId(FIELD_GALLERY_ITEMS[prevIdx].id);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxItemId, activeLightboxIndex]);

  const getFocalForPhoto = (item: FieldGalleryItem) => {
    return parseObjectPosition(item.defaultObjectPosition);
  };

  const getCaptionForPhoto = (
    item: FieldGalleryItem,
    targetLocale: SupportedLocale = locale
  ): FieldCaptionContent => {
    const base = item.captions[targetLocale] || item.captions.en;
    return {
      tag: formatTextForLocaleAndViewport(base.tag, targetLocale, width, 2),
      title: formatTextForLocaleAndViewport(base.title, targetLocale, width, 2),
      description: formatTextForLocaleAndViewport(base.description, targetLocale, width, 2),
      locationNote: formatTextForLocaleAndViewport(base.locationNote, targetLocale, width, 2),
    };
  };

  const activeCaption = getCaptionForPhoto(activeItem, locale);
  const activeFocal = getFocalForPhoto(activeItem);

  const row1Marquee = [...FIELD_GALLERY_ITEMS.slice(0, 7), ...FIELD_GALLERY_ITEMS.slice(0, 7)];
  const row2Marquee = [...FIELD_GALLERY_ITEMS.slice(7, 13), ...FIELD_GALLERY_ITEMS.slice(7, 13)];

  return (
    <section
      id="field-gallery"
      className="relative py-20 lg:py-28 bg-[#111115] border-b border-[#F8F8FA]/10 overflow-hidden jaikla-grain"
    >
      {/* Ambient Violet Studio Lighting aligned with main website theme */}
      <div
        className="pointer-events-none absolute -top-24 left-1/4 w-[560px] h-[560px] rounded-full bg-[#4B1FD6]/16 blur-[150px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 right-1/5 w-[500px] h-[500px] rounded-full bg-[#7C3AED]/14 blur-[150px]"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10 space-y-8">
        {/* Top Editorial Header + Trust-Building Proof Points */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7 space-y-3.5">
            <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono-tabular tracking-widest text-[#EBDDFF]">
              <JaiklaSymbolMark className="w-5 h-4 shrink-0" variant="color" />
              <span>{formatTextForLocaleAndViewport(ui.kicker, locale, width, 2)}</span>
            </div>

            <h2 className="font-display jaikla-display-section font-extrabold text-[#F8F8FA]">
              <span className="block">
                {formatTextForLocaleAndViewport(ui.headline1, locale, width, 2)}
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#F8F8FA] via-[#EBDDFF] to-[#7C3AED]">
                {formatTextForLocaleAndViewport(ui.headline2, locale, width, 2)}
              </span>
            </h2>

            {/* 3 Clean Unboxed Trust Proof Points with Typographic Separators */}
            <div className="pt-1 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#EBDDFF]/90">
              {ui.trustBadges.map((badge, i) => (
                <React.Fragment key={badge}>
                  <span className="inline-flex items-center gap-1.5 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#7C3AED] shrink-0" />
                    <span>{formatTextForLocaleAndViewport(badge, locale, width, 2)}</span>
                  </span>
                  {i < ui.trustBadges.length - 1 && (
                    <span className="text-[#F8F8FA]/25" aria-hidden="true">
                      ·
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 space-y-3">
            <SmartEnglishText
              text={ui.lead}
              className="text-sm sm:text-base text-[#F8F8FA]/90"
            />
            <SmartThaiText
              text={ui.subLead}
              className="text-xs sm:text-sm text-[#A1A1AA] border-l-2 border-[#7C3AED] pl-3.5"
            />
          </div>
        </div>

        {/* ===================================================================
            SINGLE UNIFIED ANIMATED SHOWCASE FRAME (RANDOMIZED MODE ON LOAD)
        =================================================================== */}
        <div
          onMouseEnter={() => setIsHoverPaused(true)}
          onMouseLeave={() => setIsHoverPaused(false)}
          className="rounded-3xl bg-gradient-to-b from-[#171721] via-[#13131A] to-[#111116] border border-[#7C3AED]/45 shadow-[0_28px_80px_rgba(0,0,0,0.75),0_0_50px_rgba(75,31,214,0.16)] overflow-hidden"
        >
          {/* Top Unified Frame Control Bar */}
          <div className="px-4 sm:px-6 py-3.5 bg-[#111116]/90 border-b border-[#F8F8FA]/10 flex flex-col xl:flex-row xl:items-center justify-between gap-3">
            {/* Left: Animation Play/Pause + 3 Showcase Display Modes (Randomized on Page Open) */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className={`px-3.5 py-2 rounded-xl text-xs font-mono-tabular inline-flex items-center gap-2 transition-colors cursor-pointer min-h-[38px] ${
                  isAutoPlaying
                    ? 'bg-[#4B1FD6] text-[#F8F8FA] shadow-sm'
                    : 'bg-[#181820] text-[#EBDDFF] border border-[#F8F8FA]/12 hover:border-[#7C3AED]'
                }`}
              >
                {isAutoPlaying ? (
                  <>
                    <Pause className="w-3.5 h-3.5" />
                    <span>{ui.pauseLabel}</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5" />
                    <span>{ui.autoPlayLabel}</span>
                  </>
                )}
              </button>

              {/* Unified Frame Mode Switcher */}
              <div
                role="tablist"
                aria-label="Unified showcase layout mode"
                className="inline-flex flex-wrap gap-1 p-1 rounded-xl bg-[#16161E] border border-[#F8F8FA]/10"
              >
                {(
                  [
                    { id: 'cinema-deck', icon: LayoutGrid },
                    { id: 'fan-stack', icon: Layers },
                    { id: 'kinetic-filmstrip', icon: Film },
                  ] as { id: FieldFrameLayoutMode; icon: React.FC<{ className?: string }> }[]
                ).map((m) => {
                  const IconComp = m.icon;
                  const active = layoutMode === m.id;
                  return (
                    <button
                      key={m.id}
                      type="button"
                      role="tab"
                      aria-selected={active}
                      onClick={() => setLayoutMode(m.id)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium inline-flex items-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap ${
                        active
                          ? 'bg-[#7C3AED] text-[#F8F8FA]'
                          : 'text-[#A1A1AA] hover:text-[#F8F8FA]'
                      }`}
                    >
                      <IconComp className="w-3.5 h-3.5" />
                      <span>{ui.frameModes[m.id]}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right: Category Filter */}
            <div className="flex flex-wrap items-center justify-between xl:justify-end gap-2">
              <div className="inline-flex flex-wrap gap-1 p-1 rounded-xl bg-[#16161E] border border-[#F8F8FA]/10">
                {(['ALL', 'RECOVERY', 'MUSCLE_DEV', 'TEAM_GUIDANCE'] as FieldPhotoCategory[]).map(
                  (cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setActiveCategory(cat)}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-medium transition-colors cursor-pointer whitespace-nowrap ${
                        activeCategory === cat
                          ? 'bg-[#4B1FD6] text-[#F8F8FA]'
                          : 'text-[#A1A1AA] hover:text-[#F8F8FA]'
                      }`}
                    >
                      {ui.categories[cat]}
                    </button>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Segmented Animated Progress Bar (No Photo Count Numbers) */}
          <div className="grid grid-cols-13 gap-1 px-4 sm:px-6 py-2 bg-[#0E0E13] border-b border-[#F8F8FA]/8">
            {FIELD_GALLERY_ITEMS.map((item, idx) => {
              const isCurrent = item.id === activeItem.id;
              const isInFilter = filteredItems.some((f) => f.id === item.id);
              const cap = getCaptionForPhoto(item, locale);
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    if (!isInFilter) setActiveCategory('ALL');
                    const targetIdx =
                      activeCategory === 'ALL'
                        ? idx
                        : filteredItems.findIndex((f) => f.id === item.id);
                    setActiveIndex(targetIdx >= 0 ? targetIdx : idx);
                  }}
                  aria-label={cap.title}
                  title={cap.title}
                  className="group py-1 cursor-pointer focus-visible:outline-none"
                >
                  <div
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      isCurrent
                        ? 'bg-gradient-to-r from-[#4B1FD6] via-[#7C3AED] to-[#EBDDFF] scale-y-125'
                        : isInFilter
                          ? 'bg-[#F8F8FA]/20 group-hover:bg-[#7C3AED]/60'
                          : 'bg-[#F8F8FA]/8'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* =================================================================
              MODE 1: UNIFIED CINEMA SPOTLIGHT + CARD MATRIX IN ONE FRAME
              (Dedicated Caption Panel below photo so images NEVER overlap text)
          ================================================================= */}
          {layoutMode === 'cinema-deck' && (
            <div className="p-4 sm:p-6 lg:p-7">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                {/* Left 7 Columns: Active Spotlight Card with Separated Image & Caption Box */}
                <div className="lg:col-span-7 rounded-2xl overflow-hidden bg-[#0D0D11] border border-[#7C3AED]/50 flex flex-col justify-between shadow-xl">
                  {/* Top Photo Stage (Unobstructed by text paragraphs) */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0A0A0E] group">
                    <img
                      key={activeItem.id}
                      src={activeItem.localSrc}
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (target.src !== activeItem.fallbackSrc) {
                          target.src = activeItem.fallbackSrc;
                        }
                      }}
                      alt={activeCaption.title}
                      style={{
                        objectPosition: `${activeFocal.x}% ${activeFocal.y}%`,
                      }}
                      className="w-full h-full object-cover transition-all duration-700 jaikla-field-grade-nocturne"
                    />

                    {/* Main Website Signature Obsidian-Violet Mood Tint Overlay */}
                    <div
                      className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#111111]/45 via-[#4B1FD6]/14 to-[#7C3AED]/10 mix-blend-multiply"
                      aria-hidden="true"
                    />

                    {/* Subtle Top Vignette for Badge Readability */}
                    <div
                      className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#0B0B0F]/80 to-transparent"
                      aria-hidden="true"
                    />

                    {/* Top Bar: Location Note + Fullscreen Button */}
                    <div className="absolute top-3.5 left-4 right-4 z-10 flex flex-wrap items-center justify-between gap-2">
                      <span className="text-[11px] font-mono-tabular tracking-wider text-[#EBDDFF] bg-[#111116]/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#F8F8FA]/12">
                        {ui.featuredLabel} · {activeCaption.locationNote}
                      </span>

                      <button
                        type="button"
                        onClick={() => setLightboxItemId(activeItem.id)}
                        className="px-3.5 py-1.5 rounded-xl bg-[#111116]/85 hover:bg-[#4B1FD6] text-xs font-mono-tabular text-[#F8F8FA] border border-[#F8F8FA]/15 inline-flex items-center gap-1.5 backdrop-blur-md transition-colors cursor-pointer"
                      >
                        <Expand className="w-3.5 h-3.5 text-[#EBDDFF]" />
                        <span>{ui.expandFullBtn}</span>
                      </button>
                    </div>

                    {/* Prev / Next Quick Arrows */}
                    <div className="absolute inset-x-3 top-1/2 -translate-y-1/2 z-10 flex items-center justify-between pointer-events-none">
                      <button
                        type="button"
                        onClick={() =>
                          setActiveIndex(
                            (safeActiveIdx - 1 + filteredItems.length) % filteredItems.length
                          )
                        }
                        aria-label={ui.lightboxPrev}
                        className="pointer-events-auto p-2.5 rounded-xl bg-[#111116]/75 hover:bg-[#4B1FD6] text-[#F8F8FA] border border-[#F8F8FA]/15 transition-colors cursor-pointer"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveIndex((safeActiveIdx + 1) % filteredItems.length)}
                        aria-label={ui.lightboxNext}
                        className="pointer-events-auto p-2.5 rounded-xl bg-[#111116]/75 hover:bg-[#4B1FD6] text-[#F8F8FA] border border-[#F8F8FA]/15 transition-colors cursor-pointer"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  {/* Dedicated Bottom Corporate & Marketing Caption Box (Zero Overlap with Photo) */}
                  <div className="p-5 sm:p-6 bg-[#111118] border-t border-[#F8F8FA]/10 space-y-2.5 flex-1 flex flex-col justify-center">
                    <p className="text-[11px] font-mono-tabular tracking-widest text-[#EBDDFF]">
                      {activeCaption.tag}
                    </p>
                    <h3 className="font-display text-lg sm:text-xl lg:text-2xl font-bold text-[#F8F8FA] leading-snug">
                      {activeCaption.title}
                    </h3>
                    <SmartEnglishText
                      text={activeCaption.description}
                      className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed"
                      constrainMeasure={false}
                    />
                  </div>
                </div>

                {/* Right 5 Columns: Unified Interactive Deck Matrix (Clean Unobstructed Thumbnails) */}
                <div className="lg:col-span-5 flex flex-col justify-between bg-[#111117] rounded-2xl p-4 sm:p-5 border border-[#F8F8FA]/10 space-y-4">
                  <div className="flex items-center justify-between gap-2 border-b border-[#F8F8FA]/10 pb-2.5">
                    <span className="text-[11px] font-mono-tabular tracking-wider text-[#EBDDFF]">
                      {ui.deckHeader}
                    </span>
                  </div>

                  {/* Synchronized Card Grid (Pure Photography Frames - No Truncated Text Overlays) */}
                  <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-3 gap-2.5">
                    {FIELD_GALLERY_ITEMS.map((card, idx) => {
                      const isSelected = card.id === activeItem.id;
                      const isMatchedFilter =
                        activeCategory === 'ALL' || card.category === activeCategory;
                      const focal = getFocalForPhoto(card);
                      const cap = getCaptionForPhoto(card, locale);

                      return (
                        <button
                          key={card.id}
                          type="button"
                          onClick={() => {
                            if (!isMatchedFilter) {
                              setActiveCategory('ALL');
                              setActiveIndex(idx);
                            } else {
                              const fIdx = filteredItems.findIndex((f) => f.id === card.id);
                              setActiveIndex(fIdx >= 0 ? fIdx : 0);
                            }
                          }}
                          onDoubleClick={() => setLightboxItemId(card.id)}
                          title={cap.title}
                          aria-label={cap.title}
                          className={`group relative rounded-xl overflow-hidden aspect-[4/3] border transition-all duration-300 cursor-pointer text-left ${
                            idx === 12 ? 'col-span-3 sm:col-span-4 lg:col-span-3 aspect-[16/5]' : ''
                          } ${
                            isSelected
                              ? 'border-[#7C3AED] ring-2 ring-[#7C3AED]/80 scale-[1.02] z-10 shadow-[0_8px_24px_rgba(124,58,237,0.35)]'
                              : isMatchedFilter
                                ? 'border-[#F8F8FA]/12 opacity-80 hover:opacity-100 hover:border-[#EBDDFF]/50'
                                : 'border-[#F8F8FA]/5 opacity-30 hover:opacity-75'
                          }`}
                        >
                          <img
                            src={card.localSrc}
                            onError={(e) => {
                              const target = e.currentTarget;
                              if (target.src !== card.fallbackSrc) {
                                target.src = card.fallbackSrc;
                              }
                            }}
                            alt={cap.title}
                            loading="lazy"
                            style={{
                              objectPosition: `${focal.x}% ${focal.y}%`,
                            }}
                            className="w-full h-full object-cover jaikla-field-grade-nocturne"
                          />
                          <div
                            className={`pointer-events-none absolute inset-0 transition-opacity ${
                              isSelected
                                ? 'ring-inset ring-2 ring-[#EBDDFF]/50 bg-gradient-to-t from-[#4B1FD6]/25 via-transparent to-transparent'
                                : 'bg-[#0D0D12]/20 group-hover:bg-transparent'
                            }`}
                          />
                        </button>
                      );
                    })}
                  </div>

                  <div className="pt-2 border-t border-[#F8F8FA]/10 flex items-center justify-between gap-3 text-[11px] text-[#A1A1AA]">
                    <span className="truncate">{activeCaption.locationNote}</span>
                    <button
                      type="button"
                      onClick={() => setLightboxItemId(activeItem.id)}
                      className="text-[#EBDDFF] hover:text-[#7C3AED] underline font-mono-tabular shrink-0 cursor-pointer"
                    >
                      {ui.expandFullBtn} →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* =================================================================
              MODE 2: INTERACTIVE 3D LAYERED CARD FAN STACK IN ONE FRAME
              (Clean photography fan stage + dedicated full caption panel below)
          ================================================================= */}
          {layoutMode === 'fan-stack' && (
            <div className="p-6 sm:p-8 lg:p-10 space-y-6">
              {/* 3D Layered Card Fan Stage (Unobstructed photography frames) */}
              <div className="relative h-[320px] sm:h-[400px] lg:h-[440px] flex items-center justify-center overflow-hidden">
                {FIELD_GALLERY_ITEMS.map((card, idx) => {
                  const total = FIELD_GALLERY_ITEMS.length;
                  const activeFullIdx = FIELD_GALLERY_ITEMS.findIndex(
                    (c) => c.id === activeItem.id
                  );
                  let diff = idx - activeFullIdx;
                  if (diff > total / 2) diff -= total;
                  if (diff < -total / 2) diff += total;

                  const absDiff = Math.abs(diff);
                  const isCenter = diff === 0;
                  const focal = getFocalForPhoto(card);
                  const cap = getCaptionForPhoto(card, locale);

                  const translateX = diff * 58;
                  const translateY = absDiff * 8;
                  const scale = Math.max(0.62, 1 - absDiff * 0.065);
                  const rotateDeg = diff * 2.6;
                  const zIndex = 30 - absDiff;
                  const opacity = Math.max(0.28, 1 - absDiff * 0.12);

                  return (
                    <div
                      key={card.id}
                      onClick={() => {
                        if (isCenter) {
                          setLightboxItemId(card.id);
                        } else {
                          setActiveCategory('ALL');
                          setActiveIndex(idx);
                        }
                      }}
                      role="button"
                      tabIndex={0}
                      aria-label={cap.title}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setActiveCategory('ALL');
                          setActiveIndex(idx);
                        }
                      }}
                      style={{
                        transform: `translate3d(${translateX}px, ${translateY}px, 0) scale(${scale}) rotate(${rotateDeg}deg)`,
                        zIndex,
                        opacity,
                        transition: 'all 520ms cubic-bezier(0.22, 1, 0.36, 1)',
                      }}
                      className={`absolute w-[280px] sm:w-[440px] lg:w-[540px] aspect-[16/10] rounded-2xl overflow-hidden cursor-pointer border shadow-2xl ${
                        isCenter
                          ? 'border-[#7C3AED] ring-2 ring-[#7C3AED]/70 shadow-[0_25px_70px_rgba(75,31,214,0.45)]'
                          : 'border-[#F8F8FA]/20 hover:border-[#EBDDFF]'
                      }`}
                    >
                      <img
                        src={card.localSrc}
                        onError={(e) => {
                          const target = e.currentTarget;
                          if (target.src !== card.fallbackSrc) {
                            target.src = card.fallbackSrc;
                          }
                        }}
                        alt={cap.title}
                        style={{
                          objectPosition: `${focal.x}% ${focal.y}%`,
                        }}
                        className="w-full h-full object-cover jaikla-field-grade-nocturne"
                      />
                      <div
                        className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#111111]/45 via-[#4B1FD6]/14 to-[#7C3AED]/10 mix-blend-multiply"
                        aria-hidden="true"
                      />

                      {isCenter && (
                        <div className="absolute top-3.5 left-4 right-4 flex items-center justify-between gap-2">
                          <span className="text-xs font-mono-tabular font-semibold px-3 py-1 rounded-lg bg-[#111116]/85 text-[#EBDDFF] border border-[#F8F8FA]/12 backdrop-blur-md">
                            {cap.locationNote}
                          </span>
                          <span className="px-3 py-1 rounded-lg bg-[#4B1FD6]/90 text-[11px] font-mono-tabular text-[#F8F8FA] inline-flex items-center gap-1.5 shrink-0 backdrop-blur-md">
                            <Expand className="w-3 h-3" />
                            <span>{ui.expandFullBtn}</span>
                          </span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Active Card Full Corporate & Marketing Caption Bar below 3D Fan (Zero Overlap) */}
              <div className="rounded-2xl bg-[#111118] border border-[#F8F8FA]/12 p-5 sm:p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-5">
                <div className="space-y-2 max-w-3xl">
                  <div className="text-[11px] font-mono-tabular tracking-wider text-[#EBDDFF]">
                    {activeCaption.tag}
                  </div>
                  <h3 className="font-display text-lg sm:text-xl lg:text-2xl font-bold text-[#F8F8FA] leading-snug">
                    {activeCaption.title}
                  </h3>
                  <SmartEnglishText
                    text={activeCaption.description}
                    className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed"
                    constrainMeasure={false}
                  />
                </div>

                <div className="flex items-center gap-2.5 shrink-0">
                  <button
                    type="button"
                    onClick={() =>
                      setActiveIndex(
                        (safeActiveIdx - 1 + filteredItems.length) % filteredItems.length
                      )
                    }
                    aria-label={ui.lightboxPrev}
                    className="p-2.5 rounded-xl bg-[#181822] hover:bg-[#4B1FD6] text-[#F8F8FA] border border-[#F8F8FA]/12 cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveIndex((safeActiveIdx + 1) % filteredItems.length)}
                    aria-label={ui.lightboxNext}
                    className="p-2.5 rounded-xl bg-[#181822] hover:bg-[#4B1FD6] text-[#F8F8FA] border border-[#F8F8FA]/12 cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setLightboxItemId(activeItem.id)}
                    className="px-4 py-2.5 rounded-xl bg-[#4B1FD6] hover:bg-[#7C3AED] text-xs font-mono-tabular text-[#F8F8FA] inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Expand className="w-3.5 h-3.5" />
                    <span>{ui.expandFullBtn}</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* =================================================================
              MODE 3: CONTINUOUS KINETIC DUAL FILMSTRIP IN ONE FRAME
              (Structured cards with photo above + dedicated caption footer below)
          ================================================================= */}
          {layoutMode === 'kinetic-filmstrip' && (
            <div className="py-6 space-y-5 overflow-hidden">
              {/* Track 1 Gliding Left */}
              <div className="overflow-hidden">
                <div className="jaikla-animate-marquee-left gap-4 px-4 items-stretch">
                  {row1Marquee.map((card, i) => {
                    const focal = getFocalForPhoto(card);
                    const cap = getCaptionForPhoto(card, locale);
                    const isSelected = card.id === activeItem.id;
                    return (
                      <div
                        key={`${card.id}-r1-${i}`}
                        onClick={() => {
                          const idx = FIELD_GALLERY_ITEMS.findIndex((c) => c.id === card.id);
                          if (idx >= 0) {
                            setActiveCategory('ALL');
                            setActiveIndex(idx);
                          }
                          setLightboxItemId(card.id);
                        }}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            setLightboxItemId(card.id);
                          }
                        }}
                        className={`group flex flex-col w-[310px] sm:w-[360px] rounded-2xl overflow-hidden shrink-0 border bg-[#111118] cursor-pointer transition-all ${
                          isSelected
                            ? 'border-[#7C3AED] ring-2 ring-[#7C3AED]/60'
                            : 'border-[#F8F8FA]/12 hover:border-[#7C3AED]'
                        }`}
                      >
                        {/* Clean Unobstructed Photo Frame */}
                        <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0B0B10]">
                          <img
                            src={card.localSrc}
                            alt={cap.title}
                            style={{ objectPosition: `${focal.x}% ${focal.y}%` }}
                            className="w-full h-full object-cover jaikla-field-grade-nocturne"
                          />
                          <div
                            className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#111111]/45 via-[#4B1FD6]/14 to-[#7C3AED]/10 mix-blend-multiply"
                            aria-hidden="true"
                          />
                          <div className="absolute top-2.5 left-3 right-3 flex items-center justify-between gap-2">
                            <span className="text-[10px] font-mono-tabular px-2.5 py-0.5 rounded bg-[#111116]/85 text-[#EBDDFF]">
                              {cap.locationNote}
                            </span>
                            <Expand className="w-3.5 h-3.5 text-[#EBDDFF] opacity-80 group-hover:opacity-100 shrink-0" />
                          </div>
                        </div>

                        {/* Dedicated Card Text Box Below Photo (Never Overlaps Photo) */}
                        <div className="p-4 space-y-1.5 flex-1 flex flex-col justify-between border-t border-[#F8F8FA]/8 bg-[#111118]">
                          <div className="space-y-1">
                            <p className="text-[10px] font-mono-tabular text-[#EBDDFF]">
                              {cap.tag}
                            </p>
                            <h4 className="text-sm font-bold text-[#F8F8FA] leading-snug">
                              {cap.title}
                            </h4>
                          </div>
                          <p className="text-xs text-[#A1A1AA] leading-relaxed">
                            {cap.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Track 2 Gliding Right */}
              <div className="overflow-hidden">
                <div className="jaikla-animate-marquee-right gap-4 px-4 items-stretch">
                  {row2Marquee.map((card, i) => {
                    const focal = getFocalForPhoto(card);
                    const cap = getCaptionForPhoto(card, locale);
                    const isSelected = card.id === activeItem.id;
                    return (
                      <div
                        key={`${card.id}-r2-${i}`}
                        onClick={() => {
                          const idx = FIELD_GALLERY_ITEMS.findIndex((c) => c.id === card.id);
                          if (idx >= 0) {
                            setActiveCategory('ALL');
                            setActiveIndex(idx);
                          }
                          setLightboxItemId(card.id);
                        }}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            setLightboxItemId(card.id);
                          }
                        }}
                        className={`group flex flex-col w-[310px] sm:w-[360px] rounded-2xl overflow-hidden shrink-0 border bg-[#111118] cursor-pointer transition-all ${
                          isSelected
                            ? 'border-[#7C3AED] ring-2 ring-[#7C3AED]/60'
                            : 'border-[#F8F8FA]/12 hover:border-[#7C3AED]'
                        }`}
                      >
                        {/* Clean Unobstructed Photo Frame */}
                        <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0B0B10]">
                          <img
                            src={card.localSrc}
                            alt={cap.title}
                            style={{ objectPosition: `${focal.x}% ${focal.y}%` }}
                            className="w-full h-full object-cover jaikla-field-grade-nocturne"
                          />
                          <div
                            className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#111111]/45 via-[#4B1FD6]/14 to-[#7C3AED]/10 mix-blend-multiply"
                            aria-hidden="true"
                          />
                          <div className="absolute top-2.5 left-3 right-3 flex items-center justify-between gap-2">
                            <span className="text-[10px] font-mono-tabular px-2.5 py-0.5 rounded bg-[#111116]/85 text-[#EBDDFF]">
                              {cap.locationNote}
                            </span>
                            <Expand className="w-3.5 h-3.5 text-[#EBDDFF] opacity-80 group-hover:opacity-100 shrink-0" />
                          </div>
                        </div>

                        {/* Dedicated Card Text Box Below Photo (Never Overlaps Photo) */}
                        <div className="p-4 space-y-1.5 flex-1 flex flex-col justify-between border-t border-[#F8F8FA]/8 bg-[#111118]">
                          <div className="space-y-1">
                            <p className="text-[10px] font-mono-tabular text-[#EBDDFF]">
                              {cap.tag}
                            </p>
                            <h4 className="text-sm font-bold text-[#F8F8FA] leading-snug">
                              {cap.title}
                            </h4>
                          </div>
                          <p className="text-xs text-[#A1A1AA] leading-relaxed">
                            {cap.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* Unified Frame Footer Bar */}
          <div className="px-4 sm:px-6 py-3 bg-[#0E0E13] border-t border-[#F8F8FA]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-[#A1A1AA]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#7C3AED] animate-pulse" />
              <span>{formatTextForLocaleAndViewport(ui.driveSourceLabel, locale, width, 2)}</span>
            </div>
            <span className="font-mono-tabular text-[11px] text-[#EBDDFF]">
              {formatTextForLocaleAndViewport(ui.inspectHint, locale, width, 2)}
            </span>
          </div>
        </div>
      </div>

      {/* =====================================================================
          FULL-RESOLUTION LIGHTBOX MODAL (CLEAN PROFESSIONAL SHOWCASE VIEW)
      ===================================================================== */}
      {activeLightboxItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={getCaptionForPhoto(activeLightboxItem, locale).title}
          className="fixed inset-0 z-50 bg-[#0B0B0E]/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6 lg:p-10"
          onClick={() => setLightboxItemId(null)}
        >
          <div
            className="relative w-full max-w-[1200px] bg-[#14141A] border border-[#F8F8FA]/15 rounded-2xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Left 7 Columns: High-Res Image Stage with Prev/Next Controls */}
            <div className="lg:col-span-7 relative bg-[#0D0D10] min-h-[300px] sm:min-h-[440px] lg:min-h-[560px] flex items-center justify-center overflow-hidden">
              {(() => {
                const focal = getFocalForPhoto(activeLightboxItem);
                const cap = getCaptionForPhoto(activeLightboxItem, locale);
                return (
                  <>
                    <img
                      src={activeLightboxItem.localSrc}
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (target.src !== activeLightboxItem.fallbackSrc) {
                          target.src = activeLightboxItem.fallbackSrc;
                        }
                      }}
                      alt={cap.title}
                      style={{
                        objectPosition: `${focal.x}% ${focal.y}%`,
                      }}
                      className="w-full h-full object-cover transition-all duration-200 jaikla-field-grade-nocturne"
                    />
                    <div
                      className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#111111]/45 via-[#4B1FD6]/14 to-transparent"
                      aria-hidden="true"
                    />
                  </>
                );
              })()}

              {/* Prev / Next Navigation Buttons */}
              <button
                type="button"
                onClick={() => {
                  const prevIdx =
                    (activeLightboxIndex - 1 + FIELD_GALLERY_ITEMS.length) %
                    FIELD_GALLERY_ITEMS.length;
                  setLightboxItemId(FIELD_GALLERY_ITEMS[prevIdx].id);
                }}
                aria-label={ui.lightboxPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-xl bg-[#111115]/85 hover:bg-[#4B1FD6] text-[#F8F8FA] border border-[#F8F8FA]/15 transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={() => {
                  const nextIdx = (activeLightboxIndex + 1) % FIELD_GALLERY_ITEMS.length;
                  setLightboxItemId(FIELD_GALLERY_ITEMS[nextIdx].id);
                }}
                aria-label={ui.lightboxNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-xl bg-[#111115]/85 hover:bg-[#4B1FD6] text-[#F8F8FA] border border-[#F8F8FA]/15 transition-colors cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Right 5 Columns: Corporate & Marketing Caption Details + Thumbnail Strip */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6 overflow-y-auto bg-[#121218]">
              {(() => {
                const cap = getCaptionForPhoto(activeLightboxItem, locale);
                return (
                  <>
                    <div className="space-y-5">
                      <div className="flex items-center justify-between gap-2 pb-4 border-b border-[#F8F8FA]/10">
                        <span className="text-xs font-mono-tabular text-[#EBDDFF]">
                          {cap.locationNote}
                        </span>
                        <button
                          type="button"
                          onClick={() => setLightboxItemId(null)}
                          className="px-3 py-1.5 rounded-lg bg-[#1C1C24] hover:bg-[#7C3AED] text-xs font-medium text-[#F8F8FA] inline-flex items-center gap-1.5 cursor-pointer"
                        >
                          <X className="w-3.5 h-3.5" />
                          <span>{ui.lightboxClose}</span>
                        </button>
                      </div>

                      <div className="space-y-2.5">
                        <p className="text-xs font-mono-tabular tracking-widest text-[#EBDDFF]">
                          {cap.tag}
                        </p>
                        <h3 className="font-display text-xl sm:text-2xl font-bold text-[#F8F8FA] leading-snug">
                          {cap.title}
                        </h3>
                      </div>

                      <SmartEnglishText
                        text={cap.description}
                        className="text-sm sm:text-base text-[#F8F8FA]/85 leading-relaxed"
                        constrainMeasure={false}
                      />

                      <div className="pt-2 space-y-2 border-t border-[#F8F8FA]/10">
                        {ui.trustBadges.map((badge) => (
                          <div
                            key={badge}
                            className="flex items-center gap-2 text-xs text-[#EBDDFF]/90"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#7C3AED] shrink-0" />
                            <span>{formatTextForLocaleAndViewport(badge, locale, width, 2)}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Thumbnail Strip inside Lightbox */}
                    <div className="pt-4 border-t border-[#F8F8FA]/10">
                      <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
                        {FIELD_GALLERY_ITEMS.map((thumb) => {
                          const isCurrent = thumb.id === activeLightboxItem.id;
                          const thumbCap = getCaptionForPhoto(thumb, locale);
                          return (
                            <button
                              key={thumb.id}
                              type="button"
                              onClick={() => setLightboxItemId(thumb.id)}
                              title={thumbCap.title}
                              className={`relative w-12 h-10 rounded-lg overflow-hidden shrink-0 border transition-all cursor-pointer ${
                                isCurrent
                                  ? 'border-[#7C3AED] ring-2 ring-[#7C3AED]/50'
                                  : 'border-[#F8F8FA]/15 opacity-55 hover:opacity-100'
                              }`}
                            >
                              <img
                                src={thumb.localSrc}
                                alt={thumbCap.title}
                                className="w-full h-full object-cover jaikla-field-grade-nocturne"
                              />
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </>
                );
              })()}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
