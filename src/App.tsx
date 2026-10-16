/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  ChevronRight,
  Layers,
  Menu,
  Monitor,
  Pause,
  Play,
  Sliders,
  Smartphone,
  Sparkles,
  Tablet,
  Type,
  X,
} from 'lucide-react';
import {
  CAMPAIGN_IMAGES,
  EXPERT_GUIDANCE_PILLARS,
  FLYWHEEL_NODES,
  ImageCategory,
  JOURNEY_STAGES,
  SOLUTIONS_DATA,
  STUDIO_WIDE_IMAGES,
  WHY_JAIKLA_CAPABILITIES,
} from './data/jaiklaData';
import {
  CapabilityKineticArtwork,
  ExpertPillarScienceDiagram,
  FlywheelDiagram,
  HeroKineticRibbon,
  HumanPerformanceTelemetrySvg,
  JaiklaHorizontalLogo,
  JaiklaPrimaryLogo,
  JaiklaSymbolMark,
  JaiklaWordmarkSvg,
  SmartCampaignImage,
  StageTrajectorySvg,
} from './components/KineticGraphics';
import {
  HeaderLanguageSelector,
  LanguageSwitcherBar,
} from './components/BrandIdentitySheet';
import { FieldActivityGallerySection } from './components/FieldActivityGallerySection';
import { openProjectInquiryModal, ProjectInquirySubmission } from './utils/projectModal';
import { LOCALE_OPTIONS } from './data/i18nData';
import {
  auditMultilingualOrthography,
  formatTextForLocaleAndViewport,
  SCRIPT_TYPOGRAPHY_PROFILES,
  SmartEnglishText,
  SmartThaiText,
  THAI_FONT_PRESETS,
  ThaiFontPreset,
  TypographyScalePreset,
  useViewportTypography,
  ViewportTypographyProvider,
} from './utils/typographyEngine';

type PositioningLens = 'jaikla' | 'clinical' | 'gym' | 'event';

interface BlueprintConfig {
  audience: 'Corporate Workforce' | 'Consumer Brand' | 'Retail & Shopping Center' | 'Sport Community';
  objective:
    | 'Movement Readiness & Office Reset'
    | 'Endurance & Run Culture'
    | 'Recovery & Longevity'
    | 'Flagship Wellness Festival';
  scale:
    | 'Boutique Lab (30–80 pax)'
    | 'Organization Program (100–500 pax)'
    | 'Campaign / Festival (500+ pax)';
}

interface SocialChannelItem {
  id: 'facebook' | 'tiktok' | 'instagram' | 'youtube' | 'line';
  name: string;
  handle: string;
  actionTh: string;
  actionEn: string;
  href: string;
  accentBadge: string;
}

const JAIKLA_SOCIAL_CHANNELS: SocialChannelItem[] = [
  {
    id: 'facebook',
    name: 'Facebook',
    handle: 'JaiklaActiveWellness',
    actionTh: 'ติดตามข่าวสารและบทความสุขภาพ',
    actionEn: 'Follow news & wellness insights',
    href: 'https://www.facebook.com/JaiklaActiveWellness',
    accentBadge: 'FB',
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    handle: '@JaiklaActiveWellness',
    actionTh: 'รับชมคลิปเทคนิคการเคลื่อนไหว',
    actionEn: 'Watch short movement clips',
    href: 'https://www.tiktok.com/@JaiklaActiveWellness',
    accentBadge: 'TT',
  },
  {
    id: 'instagram',
    name: 'Instagram',
    handle: '@jaiklaactivewellness',
    actionTh: 'อัปเดตภาพกิจกรรมและคอมมูนิตี้',
    actionEn: 'Explore visual stories & events',
    href: 'https://www.instagram.com/jaiklaactivewellness',
    accentBadge: 'IG',
  },
  {
    id: 'youtube',
    name: 'YouTube',
    handle: '@JaiklaActiveWellness',
    actionTh: 'รับชมวิดีโอเทคนิคและการเคลื่อนไหว',
    actionEn: 'Watch video guides & movements',
    href: 'https://www.youtube.com/@JaiklaActiveWellness',
    accentBadge: 'YT',
  },
  {
    id: 'line',
    name: 'LINE Official',
    handle: '@JaiklaActiveWellness',
    actionTh: 'เพิ่มเพื่อน LINE OA เพื่อรับข่าวสารและสอบถาม',
    actionEn: 'Add friend on LINE OA for updates & inquiries',
    href: 'https://lin.ee/YEfyYwy',
    accentBadge: 'LINE OA',
  },
];

function SocialPlatformIcon({
  id,
  className = 'w-5 h-5',
}: {
  id: SocialChannelItem['id'];
  className?: string;
}) {
  switch (id) {
    case 'facebook':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
        </svg>
      );
    case 'tiktok':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
        </svg>
      );
    case 'instagram':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
        </svg>
      );
    case 'youtube':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      );
    case 'line':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
        </svg>
      );
  }
}

function JaiklaActiveWellnessContent() {
  const viewportMeta = useViewportTypography();
  const { t, locale, setLocale } = viewportMeta;

  // Navigation & scroll state
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeNavSection, setActiveNavSection] = useState('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Subtle hero mouse parallax
  const [heroParallax, setHeroParallax] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement | null>(null);

  // Section 03: The Idea positioning lens
  const [positioningLens, setPositioningLens] = useState<PositioningLens>('jaikla');

  // Section 04: Signature 5-Stage Interactive Journey (PREPARE → MOVE → PERFORM → RECOVER → DEVELOP)
  const [activeStageIdx, setActiveStageIdx] = useState(0);
  const [autoCycleStages, setAutoCycleStages] = useState(false);

  // Section 05: Why JAIKLA active capability
  const [activeCapabilityIdx, setActiveCapabilityIdx] = useState(0);

  // Section 06: Solutions Accordion + 2027 Interactive Experience Blueprint Configurator
  const [activeSolutionIdx, setActiveSolutionIdx] = useState(0);
  const [blueprint, setBlueprint] = useState<BlueprintConfig>({
    audience: 'Corporate Workforce',
    objective: 'Movement Readiness & Office Reset',
    scale: 'Organization Program (100–500 pax)',
  });

  // Section 07: Human Performance Telemetry UI state
  const [telemetryMode, setTelemetryMode] = useState<'prepare' | 'perform' | 'recover'>('perform');

  // Section 08: Expert Guidance filter & Campaign Asset Classification Drawer
  const [selectedExpertCategory, setSelectedExpertCategory] = useState<string>('ALL');
  const [assetInspectorOpen, setAssetInspectorOpen] = useState(false);
  const [inspectorCategoryFilter, setInspectorCategoryFilter] = useState<ImageCategory | 'ALL'>('ALL');

  // Responsive Typography & Word-Segmentation Calibration Drawer
  const [typoInspectorOpen, setTypoInspectorOpen] = useState(false);
  const [simulatedPreviewWidth, setSimulatedPreviewWidth] = useState<number | null>(null);
  const [customTestThaiCopy, setCustomTestThaiCopy] = useState(
    SCRIPT_TYPOGRAPHY_PROFILES.en.sampleVerificationText
  );

  // Sync sample verification copy with active locale so non-Thai locales never show mixed Thai text
  useEffect(() => {
    const profile = SCRIPT_TYPOGRAPHY_PROFILES[locale] || SCRIPT_TYPOGRAPHY_PROFILES.en;
    setCustomTestThaiCopy(profile.sampleVerificationText);
  }, [locale]);

  // Section 09: Community — hidden by default, revealed when clicking the ledger text heading
  const [showCommunityStats, setShowCommunityStats] = useState(false);

  // Section 10 & 11: Business Formula & Flywheel
  const [activeFormulaStep, setActiveFormulaStep] = useState<number>(4);
  const [activeFlywheelIdx, setActiveFlywheelIdx] = useState<number>(0);
  const [flywheelRotation, setFlywheelRotation] = useState<number>(0);

  // Submitted inquiries in current session
  const [submissions, setSubmissions] = useState<ProjectInquirySubmission[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(100, Math.max(0, (scrollY / docHeight) * 100)) : 0;

      setIsScrolled(scrollY > 36);
      setScrollProgress(progress);
      setFlywheelRotation((scrollY * 0.04) % 360);

      const sections = ['about', 'journey', 'solutions', 'science', 'community', 'partner'];
      for (const secId of sections) {
        const el = document.getElementById(secId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 240 && rect.bottom >= 240) {
            setActiveNavSection(secId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!autoCycleStages) return;
    const timer = window.setInterval(() => {
      setActiveStageIdx((prev) => (prev + 1) % JOURNEY_STAGES.length);
    }, 4200);
    return () => window.clearInterval(timer);
  }, [autoCycleStages]);

  const handleHeroMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!heroRef.current || viewportMeta.width < 1024) return;
    const rect = heroRef.current.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width - 0.5;
    const relY = (e.clientY - rect.top) / rect.height - 0.5;
    setHeroParallax({
      x: Number((relX * 12).toFixed(2)),
      y: Number((relY * 10).toFixed(2)),
    });
  };

  const handleLaunchProjectModal = (defaultType = 'Corporate Wellness', notes = '') => {
    openProjectInquiryModal(
      defaultType,
      notes,
      (newSubmission) => {
        setSubmissions((prev) => [newSubmission, ...prev]);
      },
      locale
    );
  };

  const currentStage = JOURNEY_STAGES[activeStageIdx];
  const currentStageLocale = t.journey.stages[activeStageIdx] || t.journey.stages[0];
  const currentSolution = SOLUTIONS_DATA[activeSolutionIdx];
  const currentSolutionLocale = t.solutions.items[activeSolutionIdx] || t.solutions.items[0];
  const currentFlywheelNode = FLYWHEEL_NODES[activeFlywheelIdx];
  const currentFlywheelLocale =
    t.partner.flywheelNodes[activeFlywheelIdx] || t.partner.flywheelNodes[0];

  const filteredExpertPillars =
    selectedExpertCategory === 'ALL'
      ? EXPERT_GUIDANCE_PILLARS.map((p, i) => ({ ...p, loc: t.expert.pillars[i] || p }))
      : EXPERT_GUIDANCE_PILLARS.map((p, i) => ({ ...p, loc: t.expert.pillars[i] || p })).filter(
          (p) => p.category === selectedExpertCategory
        );

  const allCampaignAssets = Object.values(CAMPAIGN_IMAGES);
  const filteredInspectorAssets =
    inspectorCategoryFilter === 'ALL'
      ? allCampaignAssets
      : allCampaignAssets.filter(
          (img) =>
            img.category === inspectorCategoryFilter ||
            img.secondaryCategory === inspectorCategoryFilter
        );

  const getBlueprintRecommendation = (cfg: BlueprintConfig) => {
    const projectTypeMap: Record<BlueprintConfig['audience'], string> = {
      'Corporate Workforce': 'Corporate Wellness',
      'Consumer Brand': 'Brand Activation',
      'Retail & Shopping Center': 'Sport Event',
      'Sport Community': 'Community',
    };

    const moduleMap: Record<BlueprintConfig['objective'], string[]> =
      locale === 'th'
        ? {
            'Movement Readiness & Office Reset': [
              'การประเมินโครงสร้างท่าทางและความยืดหยุ่นของร่างกาย',
              'กิจกรรมปรับสมดุลร่างกายและคลายออฟฟิศซินโดรมระหว่างวัน',
              'คู่มือการเคลื่อนไหวตามหลักสรีรศาสตร์สำหรับพนักงาน',
            ],
            'Endurance & Run Culture': [
              'แล็บวิเคราะห์ชีวกลศาสตร์การวิ่งและการกะระดับความหนัก',
              'โปรแกรมพัฒนาศักยภาพคลับวิ่งและคลับเดินอย่างเป็นระบบ',
              'โซนคลายพังผืดกล้ามเนื้อและฟื้นฟูร่างกายหลังการวิ่ง',
            ],
            'Recovery & Longevity': [
              'คลินิกคลายพังผืดกล้ามเนื้อและเพิ่มความคล่องตัวของข้อต่อ',
              'โซนฝึกสมดุลการหายใจและฟื้นฟูระบบประสาทอัตโนมัติ',
              'โปรแกรมดูแลข้อต่อและความแข็งแรงสำหรับกลุ่มวัย 40+',
            ],
            'Flagship Wellness Festival': [
              'โซนกิจกรรมครบวงจร: เตรียมร่างกาย · เคลื่อนไหว · ฟื้นฟู',
              'บูธให้คำแนะนำโดยทีมผู้เชี่ยวชาญด้านวิทยาศาสตร์การเคลื่อนไหว',
              'การผลิตคอนเทนต์วิดีโอแคมเปญและประชาสัมพันธ์ครบวงจร',
            ],
          }
        : {
            'Movement Readiness & Office Reset': [
              'Know Your Body Posture & Mobility Screening',
              'Office Body Reset Micro-Sessions',
              'Ergonomic Movement Literacy Playbook',
            ],
            'Endurance & Run Culture': [
              'Biomechanics & Pacing Calibration Lab',
              'Structured Run/Walk Club Progression',
              'Post-Run Myofascial Recovery Station',
            ],
            'Recovery & Longevity': [
              'Guided Myofascial & Thoracic Mobility Clinic',
              'Autonomic Breathwork & Down-Regulation Zone',
              'Active 40+ Joint Longevity Protocol',
            ],
            'Flagship Wellness Festival': [
              'Multi-Zone Prepare → Move → Recover Arena',
              'Allied Health Coaching Pods & Live Demos',
              'JAIKLA Digital Documentary & Social Amplification',
            ],
          };

    return {
      mappedProjectType: projectTypeMap[cfg.audience],
      modules: moduleMap[cfg.objective],
      summary: `${cfg.audience} program focused on ${cfg.objective} (${cfg.scale})`,
    };
  };

  const blueprintResult = getBlueprintRecommendation(blueprint);
  const effectivePreviewWidth = simulatedPreviewWidth || viewportMeta.width;
  const activePositioningCard = t.idea.matrix[positioningLens];

  return (
    <div className="min-h-screen bg-[#111111] text-[#F8F8FA] relative selection:bg-[#7C3AED] selection:text-[#F8F8FA]">
      {/* Top Scroll Progress Indicator */}
      <div
        className="fixed top-0 left-0 right-0 h-[2px] z-50 pointer-events-none bg-transparent"
        aria-hidden="true"
      >
        <div
          className="h-full bg-gradient-to-r from-[#4B1FD6] via-[#7C3AED] to-[#EBDDFF] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* =====================================================================
          01 — NAVIGATION (Official Horizontal Logo + Nav Links + 6-Language Switcher + CTA)
      ===================================================================== */}
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#111111]/90 backdrop-blur-xl border-b border-[#F8F8FA]/10 py-3'
            : 'bg-gradient-to-b from-[#111111]/85 to-transparent py-4'
        }`}
      >
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between gap-3">
          {/* Zone 1: Official PDF Horizontal Logo */}
          <a
            href="#"
            aria-label="JAIKLA ACTIVE WELLNESS Home"
            className="shrink-0 focus-visible:outline-2 focus-visible:outline-[#7C3AED] rounded-lg"
          >
            <JaiklaHorizontalLogo />
          </a>

          {/* Zone 2: 6 clean single-line navigation links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden xl:flex items-center gap-6 text-xs font-medium tracking-wider text-[#A1A1AA]"
          >
            {[
              { id: 'about', label: t.nav.about },
              { id: 'journey', label: t.nav.experience },
              { id: 'solutions', label: t.nav.solutions },
              { id: 'science', label: t.nav.science },
              { id: 'community', label: t.nav.community },
              { id: 'partner', label: t.nav.partner },
            ].map((item) => {
              const isActive = activeNavSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`relative py-1 whitespace-nowrap transition-colors duration-200 hover:text-[#F8F8FA] ${
                    isActive ? 'text-[#F8F8FA]' : 'text-[#A1A1AA]'
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-0 right-0 h-[2px] rounded-full bg-[#7C3AED] transition-transform duration-200 origin-left ${
                      isActive ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Prominent 6-Language Switcher + Primary CTA */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            <HeaderLanguageSelector
              locale={locale}
              onSelectLocale={setLocale}
            />

            <button
              type="button"
              onClick={() => handleLaunchProjectModal('Corporate Wellness')}
              className="hidden sm:inline-flex jaikla-btn-primary px-4 sm:px-5 py-2.5 rounded-xl text-xs font-semibold tracking-wider text-[#F8F8FA] whitespace-nowrap cursor-pointer focus-visible:outline-2 focus-visible:outline-[#EBDDFF] min-h-[42px] items-center"
            >
              {t.nav.startProject}
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              className="xl:hidden p-2.5 rounded-xl bg-[#17171A] border border-[#F8F8FA]/12 text-[#F8F8FA] min-w-[42px] min-h-[42px] flex items-center justify-center cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile / Tablet Offcanvas Navigation Drawer with Full 6-Language Selector */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#121215]/98 backdrop-blur-2xl border-b border-[#F8F8FA]/12 px-6 py-6 space-y-5">
            <div>
              <p className="text-[10px] font-mono-tabular text-[#EBDDFF] mb-2">
                SELECT LANGUAGE (EN / ไทย / 简体中文 / 한국어 / 日本語 / العربية)
              </p>
              <div className="flex flex-wrap gap-1.5">
                <LanguageSwitcherBar locale={locale} onSelectLocale={setLocale} compact={false} />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              {[
                { id: 'about', label: `01 · ${t.nav.about}` },
                { id: 'journey', label: `02 · ${t.nav.experience}` },
                { id: 'solutions', label: `03 · ${t.nav.solutions}` },
                { id: 'science', label: `04 · ${t.nav.science}` },
                { id: 'community', label: `05 · ${t.nav.community}` },
                { id: 'partner', label: `06 · ${t.nav.partner}` },
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-3 px-3 rounded-lg text-sm font-medium text-[#F8F8FA] hover:bg-[#4B1FD6]/20 border-b border-[#F8F8FA]/5 flex items-center justify-between min-h-[44px]"
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-4 h-4 text-[#7C3AED]" />
                </a>
              ))}
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleLaunchProjectModal('Corporate Wellness');
                }}
                className="mt-2 w-full jaikla-btn-primary py-3.5 rounded-lg text-xs font-semibold tracking-wider text-center"
              >
                {t.nav.startProject}
              </button>

              <div className="pt-3 border-t border-[#F8F8FA]/10 space-y-2">
                <p className="text-[10px] font-mono-tabular text-[#EBDDFF]">
                  {locale === 'th'
                    ? 'ช่องทางโซเชียลมีเดียและ LINE OA'
                    : 'FOLLOW US ON SOCIAL MEDIA & LINE OA'}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {JAIKLA_SOCIAL_CHANNELS.map((social) => (
                    <a
                      key={social.id}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-3 py-2.5 rounded-lg bg-[#17171E] hover:bg-[#4B1FD6]/30 border border-[#F8F8FA]/12 hover:border-[#7C3AED] text-xs font-medium text-[#F8F8FA] transition-all ${
                        social.id === 'line'
                          ? 'col-span-2 justify-center border-[#7C3AED]/40 bg-[#1A1A24]'
                          : ''
                      }`}
                    >
                      <SocialPlatformIcon id={social.id} className="w-4 h-4 text-[#EBDDFF] shrink-0" />
                      <span className="truncate">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* =====================================================================
            02 — HERO (Full Viewport Cinematic Hero — Distinct Non-Duplicate Visuals)
        ===================================================================== */}
        <section
          ref={heroRef}
          onMouseMove={handleHeroMouseMove}
          className="relative min-h-screen pt-28 pb-16 lg:py-0 flex items-center overflow-hidden border-b border-[#F8F8FA]/8"
        >
          {/* Full-bleed Widescreen Backdrop with subtle parallax */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              transform: `translate3d(${heroParallax.x * -0.6}px, ${heroParallax.y * -0.6}px, 0) scale(1.04)`,
              transition: 'transform 450ms cubic-bezier(0.22, 1, 0.36, 1)',
            }}
          >
            <SmartCampaignImage
              src={STUDIO_WIDE_IMAGES.hero}
              fallbackSrc={CAMPAIGN_IMAGES.campaign_14.src}
              alt="JAIKLA ACTIVE WELLNESS athletic movement backdrop"
              className="w-full h-full opacity-45"
              overlayIntensity="medium"
              eager={true}
            />
          </div>

          <div
            className="pointer-events-none absolute -top-32 right-1/4 w-[560px] h-[560px] rounded-full bg-[#4B1FD6]/18 blur-[140px]"
            aria-hidden="true"
          />

          <HeroKineticRibbon />

          <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10 w-full py-10 lg:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left 7 Columns: Statement + Localized Copy */}
              <div className="lg:col-span-7 space-y-6">
                <div className="pt-3 sm:pt-5 lg:pt-7 space-y-3.5 sm:space-y-4">
                  <h1 className="font-display jaikla-display-hero font-extrabold text-[#F8F8FA]">
                    <span className="block">{t.hero.line1}</span>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#F8F8FA] via-[#EBDDFF] to-[#7C3AED] mt-1">
                      {t.hero.line2}
                    </span>
                  </h1>

                  <div className="space-y-3 sm:space-y-3.5">
                    <SmartEnglishText
                      text={t.hero.lead}
                      className="text-lg sm:text-xl text-[#F8F8FA]/92 font-normal"
                    />

                    <SmartThaiText
                      text={t.hero.secondaryLead}
                      className="text-base sm:text-lg text-[#A1A1AA] font-light border-l-2 border-[#7C3AED] pl-4"
                    />
                  </div>
                </div>

                {/* Primary & Secondary CTAs */}
                <div className="flex flex-wrap items-center gap-4 pt-1">
                  <a
                    href="#journey"
                    className="jaikla-btn-primary px-7 py-4 rounded-xl text-xs sm:text-sm font-semibold tracking-wider text-[#F8F8FA] inline-flex items-center gap-2.5 whitespace-nowrap min-h-[48px]"
                  >
                    <span>{t.hero.ctaExplore}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <button
                    type="button"
                    onClick={() => handleLaunchProjectModal('Corporate Wellness')}
                    className="px-7 py-4 rounded-xl text-xs sm:text-sm font-semibold tracking-wider text-[#F8F8FA] bg-[#17171A]/90 hover:bg-[#22222A] border border-[#F8F8FA]/15 hover:border-[#7C3AED] transition-all duration-200 inline-flex items-center gap-2 whitespace-nowrap min-h-[48px] cursor-pointer"
                  >
                    <span>{t.hero.ctaWork}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#EBDDFF]" />
                  </button>
                </div>

                {/* Core Concept + Social Media Follow Bar (Tightly unified so it's fully visible above fold) */}
                <div className="pt-3 border-t border-[#F8F8FA]/10 space-y-1.5">
                  <p className="text-xs font-mono-tabular tracking-wider text-[#A1A1AA] leading-relaxed">
                    <span className="text-[#EBDDFF]">{t.hero.coreConceptLabel}</span> ·{' '}
                    {t.hero.coreConceptFormula}
                  </p>

                  <div className="pt-0.5 space-y-1">
                    <p className="text-[10.5px] font-mono-tabular text-[#EBDDFF] tracking-wider uppercase">
                      {locale === 'th'
                        ? 'ช่องทางโซเชียลมีเดียและ LINE OA'
                        : 'Social Channels & LINE OA'}
                    </p>
                    <div className="flex flex-nowrap items-center gap-2 overflow-x-auto no-scrollbar py-0.5">
                      {JAIKLA_SOCIAL_CHANNELS.map((social) => (
                        <a
                          key={social.id}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Follow JAIKLA ACTIVE WELLNESS on ${social.name}`}
                          className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-[#16161D] hover:bg-[#4B1FD6] border border-[#F8F8FA]/12 hover:border-[#7C3AED] text-xs font-medium text-[#F8F8FA] transition-all whitespace-nowrap shrink-0 shadow-sm"
                        >
                          <SocialPlatformIcon id={social.id} className="w-4 h-4 text-[#EBDDFF] shrink-0" />
                          <span>{social.name}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right 5 Columns: Supplied Campaign Hero Composition
                  Left Card: campaign_15 (Sunrise Bridge Runner)
                  Right Card: campaign_09 (Functional Strength & Load Studio Coaching)
                  Bottom Full-Width Readout: Architectural Positioning Card */}
              <div className="lg:col-span-5">
                <div
                  className="relative mx-auto max-w-[480px] lg:max-w-none grid grid-cols-12 gap-4 items-stretch"
                  style={{
                    transform: `translate3d(${heroParallax.x * 0.5}px, ${heroParallax.y * 0.5}px, 0)`,
                    transition: 'transform 450ms cubic-bezier(0.22, 1, 0.36, 1)',
                  }}
                >
                  {/* Main Hero Portrait Card (Realistic Runner in Motion) */}
                  <div className="col-span-6 group rounded-2xl overflow-hidden border border-[#F8F8FA]/12 bg-[#141418] shadow-2xl flex flex-col justify-between">
                    <div className="relative aspect-[4/5] w-full overflow-hidden">
                      <SmartCampaignImage
                        src="/assets/images/realistic/hero_card_runner.jpg"
                        fallbackSrc={STUDIO_WIDE_IMAGES.hero}
                        alt={locale === 'th' ? 'การวิ่งและการเคลื่อนไหวกลางแจ้ง' : 'Active Movement & Running'}
                        className="w-full h-full"
                        imgClassName="jaikla-photo-grade-hover"
                        overlayIntensity="subtle"
                        eager={true}
                      />
                    </div>
                    <div className="p-3.5 sm:p-4 bg-[#131318] border-t border-[#F8F8FA]/10">
                      <p className="text-[10px] font-mono-tabular tracking-widest text-[#EBDDFF]">
                        {locale === 'th' ? 'ฮีโร่ · การเคลื่อนไหว' : 'HERO · MOVEMENT'}
                      </p>
                      <SmartThaiText
                        text={
                          locale === 'th'
                            ? 'จังหวะการวิ่งและอิสรภาพในการเคลื่อนไหว'
                            : 'Active Movement & Running Rhythm'
                        }
                        className="text-xs sm:text-sm font-medium text-[#F8F8FA] mt-0.5"
                      />
                    </div>
                  </div>

                  {/* Secondary Performance Frame (Realistic Strength & Conditioning) */}
                  <div className="col-span-6 group rounded-2xl overflow-hidden border border-[#F8F8FA]/12 bg-[#141418] shadow-2xl flex flex-col justify-between">
                    <div className="relative aspect-[4/5] w-full overflow-hidden">
                      <SmartCampaignImage
                        src="/assets/images/realistic/hero_card_strength.jpg"
                        fallbackSrc={STUDIO_WIDE_IMAGES.perform}
                        alt={locale === 'th' ? 'การฝึกความแข็งแรงเชิงหน้าที่' : 'Functional Strength Training'}
                        className="w-full h-full"
                        imgClassName="jaikla-photo-grade-hover"
                        overlayIntensity="subtle"
                        eager={true}
                      />
                    </div>
                    <div className="p-3.5 sm:p-4 bg-[#131318] border-t border-[#F8F8FA]/10">
                      <p className="text-[10px] font-mono-tabular tracking-widest text-[#EBDDFF]">
                        {locale === 'th' ? 'สมรรถภาพ · ความแข็งแรง' : 'PERFORMANCE · STRENGTH'}
                      </p>
                      <SmartThaiText
                        text={
                          locale === 'th'
                            ? 'ความแข็งแรงเชิงหน้าที่และสมรรถภาพทางกาย'
                            : 'Functional Strength & Conditioning'
                        }
                        className="text-xs sm:text-sm font-medium text-[#F8F8FA] mt-0.5"
                      />
                    </div>
                  </div>

                  {/* Full-Width Architectural Positioning Readout Below Photos */}
                  <div className="col-span-12 p-4 sm:p-5 rounded-2xl bg-[#16161B]/95 border border-[#F8F8FA]/12 backdrop-blur-md">
                    <p className="text-[11px] font-mono-tabular text-[#EBDDFF]">
                      {t.hero.positioningLabel}
                    </p>
                    <p className="text-sm font-semibold text-[#F8F8FA] mt-1">
                      {t.hero.positioningTitle}
                    </p>
                    <SmartThaiText
                      text={t.hero.positioningSub}
                      className="text-xs text-[#A1A1AA] mt-1"
                      constrainMeasure={false}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            02B — REAL FIELD TRACK RECORD (UNIFIED 13-PHOTO ANIMATED SHOWCASE)
            Positioned immediately below the Hero so clients and visitors see
            our specialist team's real on-ground muscle recovery & conditioning
            work right away to build immediate credibility and trust.
        ===================================================================== */}
        <FieldActivityGallerySection locale={locale} />

        {/* =====================================================================
            03 — THE IDEA (Editorial Statement & Full-Width 12-Column Positioning Matrix)
        ===================================================================== */}
        <section
          id="about"
          className="relative py-24 lg:py-32 bg-[#121212] border-b border-[#F8F8FA]/8 jaikla-grain"
        >
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10 space-y-16">
            {/* Top Row: 7-Column Editorial Statement + 5-Column Campaign Photography */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left 7 Columns: Sequential Editorial Statement */}
              <div className="lg:col-span-7 space-y-6">
                <p className="text-xs font-mono-tabular tracking-widest text-[#EBDDFF]">
                  {t.idea.kicker}
                </p>

                <div className="space-y-2 sm:space-y-3">
                  <p className="font-display jaikla-display-statement font-bold text-[#A1A1AA]/55 transition-colors duration-300 hover:text-[#F8F8FA]/85">
                    {t.idea.notFitness}
                  </p>
                  <p className="font-display jaikla-display-statement font-bold text-[#A1A1AA]/70 transition-colors duration-300 hover:text-[#F8F8FA]/90">
                    {t.idea.notWellness}
                  </p>
                  <p className="font-display jaikla-display-statement font-bold text-[#A1A1AA]/85 transition-colors duration-300 hover:text-[#F8F8FA]">
                    {t.idea.notEvent}
                  </p>
                  <div className="pt-2">
                    <h2 className="font-display jaikla-display-section font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#F8F8FA] via-[#EBDDFF] to-[#7C3AED]">
                      {t.idea.revealTitle.split('\n').map((line, i) => (
                        <span key={i} className="block">
                          {line}
                        </span>
                      ))}
                    </h2>
                  </div>
                </div>

                <SmartEnglishText
                  text={t.idea.body1}
                  className="text-base sm:text-lg text-[#A1A1AA] pt-2"
                />

                <SmartThaiText
                  text={t.idea.body2}
                  className="text-sm sm:text-base text-[#A1A1AA]"
                />
              </div>

              {/* Right 5 Columns: Realistic Movement Philosophy Visuals (idea_grounding & idea_mobility) */}
              <div className="lg:col-span-5 grid grid-cols-12 gap-4 items-stretch">
                <div className="col-span-6 group rounded-2xl overflow-hidden border border-[#F8F8FA]/10 bg-[#141418] flex flex-col justify-between">
                  <div className="relative aspect-[4/5] w-full overflow-hidden">
                    <SmartCampaignImage
                      src="/assets/images/realistic/idea_grounding.jpg"
                      fallbackSrc={STUDIO_WIDE_IMAGES.prepare}
                      alt={locale === 'th' ? 'การฝึกความมั่นคงและการรับรู้ร่างกาย' : 'Body Awareness & Alignment'}
                      className="w-full h-full"
                      imgClassName="jaikla-photo-grade-hover"
                      overlayIntensity="subtle"
                    />
                  </div>
                  <div className="p-3.5 sm:p-4 bg-[#131318] border-t border-[#F8F8FA]/10">
                    <p className="text-[10px] font-mono-tabular text-[#EBDDFF]">
                      {locale === 'th' ? 'การรับรู้ร่างกาย · สมดุล' : 'BODY AWARENESS · CALM'}
                    </p>
                    <SmartThaiText
                      text={
                        locale === 'th'
                          ? 'การจัดระเบียบโครงสร้างและการรับรู้ร่างกาย'
                          : 'Postural Alignment & Body Awareness'
                      }
                      className="text-xs sm:text-sm font-medium text-[#F8F8FA] mt-0.5"
                    />
                  </div>
                </div>

                <div className="col-span-6 group rounded-2xl overflow-hidden border border-[#F8F8FA]/10 bg-[#141418] flex flex-col justify-between">
                  <div className="relative aspect-[4/5] w-full overflow-hidden">
                    <SmartCampaignImage
                      src="/assets/images/realistic/idea_mobility.jpg"
                      fallbackSrc={STUDIO_WIDE_IMAGES.perform}
                      alt={locale === 'th' ? 'การเคลื่อนไหวเชิงหน้าที่และพลังงาน' : 'Functional Conditioning & Power'}
                      className="w-full h-full"
                      imgClassName="jaikla-photo-grade-hover"
                      overlayIntensity="subtle"
                    />
                  </div>
                  <div className="p-3.5 sm:p-4 bg-[#131318] border-t border-[#F8F8FA]/10">
                    <p className="text-[10px] font-mono-tabular text-[#EBDDFF]">
                      {locale === 'th' ? 'สมรรถภาพ · การเคลื่อนไหว' : 'MOVEMENT · CONDITIONING'}
                    </p>
                    <SmartThaiText
                      text={
                        locale === 'th'
                          ? 'การฝึกความแข็งแรงเชิงหน้าที่และการส่งแรง'
                          : 'Functional Strength & Kinetic Flow'
                      }
                      className="text-xs sm:text-sm font-medium text-[#F8F8FA] mt-0.5"
                    />
                  </div>
                </div>

                <div className="col-span-12 p-4 sm:p-5 rounded-2xl bg-[#16161B] border border-[#F8F8FA]/10 space-y-1.5">
                  <p className="text-[10px] font-mono-tabular text-[#EBDDFF] tracking-widest">
                    {t.idea.kicker}
                  </p>
                  <p className="text-sm font-semibold text-[#F8F8FA]">
                    {t.hero.positioningTitle}
                  </p>
                  <p className="text-xs text-[#A1A1AA] leading-relaxed">
                    {t.hero.coreConceptFormula}
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Row: Full-Width 12-Column Positioning Comparison Studio (Eliminates Empty Side Space) */}
            <div className="pt-10 border-t border-[#F8F8FA]/10 space-y-6">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-[11px] font-mono-tabular tracking-widest text-[#EBDDFF]">
                    STRATEGIC POSITIONING MATRIX
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#F8F8FA]">
                    {t.idea.compareLabel}
                  </h3>
                </div>

                <div
                  role="tablist"
                  aria-label="Brand positioning comparison"
                  className="inline-flex flex-wrap gap-1.5 p-1.5 rounded-xl bg-[#17171C] border border-[#F8F8FA]/12"
                >
                  {(
                    [
                      { key: 'jaikla', label: t.idea.tabs.jaikla },
                      { key: 'clinical', label: t.idea.tabs.clinical },
                      { key: 'gym', label: t.idea.tabs.gym },
                      { key: 'event', label: t.idea.tabs.event },
                    ] as const
                  ).map((tab) => (
                    <button
                      key={tab.key}
                      type="button"
                      role="tab"
                      aria-selected={positioningLens === tab.key}
                      onClick={() => setPositioningLens(tab.key)}
                      className={`px-4 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                        positioningLens === tab.key
                          ? 'bg-[#4B1FD6] text-[#F8F8FA] shadow-sm'
                          : 'text-[#A1A1AA] hover:text-[#F8F8FA]'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Full-Width 12-Column Split: 8 Columns Active Detail + 4 Columns Quick-Switch & JAIKLA Benchmark */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                {/* Left 8 Columns: Spacious 3-Column Deep-Dive Card */}
                <div
                  className={`lg:col-span-8 p-6 sm:p-8 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                    positioningLens === 'jaikla'
                      ? 'bg-gradient-to-br from-[#19162B] via-[#15151E] to-[#131318] border-[#7C3AED]/60 shadow-[0_20px_50px_rgba(75,31,214,0.15)]'
                      : 'bg-[#151519] border-[#F8F8FA]/12'
                  }`}
                >
                  <div className="space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-5 border-b border-[#F8F8FA]/10">
                      <div className="flex items-center gap-3">
                        {positioningLens === 'jaikla' ? (
                          <div className="inline-flex items-center gap-3">
                            <JaiklaSymbolMark className="w-8 h-6 shrink-0" variant="color" />
                            <div className="flex flex-wrap items-baseline gap-2.5 text-[#F8F8FA]">
                              <JaiklaWordmarkSvg className="h-4 sm:h-5 w-auto" />
                              <span className="font-display text-sm sm:text-base font-bold tracking-[0.22em] text-[#EBDDFF]">
                                ACTIVE WELLNESS
                              </span>
                            </div>
                          </div>
                        ) : (
                          <>
                            <span className="w-2.5 h-2.5 rounded-full shrink-0 bg-[#A1A1AA]/60" />
                            <h4 className="font-display text-xl sm:text-2xl font-bold text-[#F8F8FA]">
                              {activePositioningCard.title}
                            </h4>
                          </>
                        )}
                      </div>
                      <SmartThaiText
                        as="span"
                        text={activePositioningCard.subtitle}
                        className="text-xs sm:text-sm text-[#EBDDFF] font-medium px-3 py-1 rounded-lg bg-[#111115]/80 border border-[#F8F8FA]/10"
                        constrainMeasure={false}
                      />
                    </div>

                    <div className="space-y-3.5">
                      <div className="p-4 sm:p-5 rounded-xl bg-[#111115]/90 border border-[#F8F8FA]/8 grid grid-cols-1 md:grid-cols-12 gap-2 sm:gap-4 items-start">
                        <div className="md:col-span-3 flex md:flex-col items-baseline justify-between md:justify-start gap-1">
                          <span className="text-[10px] font-mono-tabular tracking-widest text-[#7C3AED] font-semibold">
                            01 · FOCUS
                          </span>
                          <span className="text-xs sm:text-sm font-semibold text-[#EBDDFF]">
                            {t.idea.headers.focus}
                          </span>
                        </div>
                        <div className="md:col-span-9">
                          <SmartThaiText
                            text={activePositioningCard.focus}
                            className="text-sm sm:text-[15px] text-[#F8F8FA]/95"
                            constrainMeasure={false}
                          />
                        </div>
                      </div>

                      <div className="p-4 sm:p-5 rounded-xl bg-[#111115]/90 border border-[#F8F8FA]/8 grid grid-cols-1 md:grid-cols-12 gap-2 sm:gap-4 items-start">
                        <div className="md:col-span-3 flex md:flex-col items-baseline justify-between md:justify-start gap-1">
                          <span className="text-[10px] font-mono-tabular tracking-widest text-[#7C3AED] font-semibold">
                            02 · MOOD
                          </span>
                          <span className="text-xs sm:text-sm font-semibold text-[#EBDDFF]">
                            {t.idea.headers.atmosphere}
                          </span>
                        </div>
                        <div className="md:col-span-9">
                          <SmartThaiText
                            text={activePositioningCard.atmosphere}
                            className="text-sm sm:text-[15px] text-[#F8F8FA]/95"
                            constrainMeasure={false}
                          />
                        </div>
                      </div>

                      <div className="p-4 sm:p-5 rounded-xl bg-[#141222]/90 border border-[#7C3AED]/35 grid grid-cols-1 md:grid-cols-12 gap-2 sm:gap-4 items-start">
                        <div className="md:col-span-3 flex md:flex-col items-baseline justify-between md:justify-start gap-1">
                          <span className="text-[10px] font-mono-tabular tracking-widest text-[#EBDDFF] font-semibold">
                            03 · OUTCOME
                          </span>
                          <span className="text-xs sm:text-sm font-semibold text-[#EBDDFF]">
                            {t.idea.headers.outcome}
                          </span>
                        </div>
                        <div className="md:col-span-9">
                          <SmartThaiText
                            text={activePositioningCard.outcome}
                            className="text-sm sm:text-[15px] text-[#EBDDFF] font-medium"
                            constrainMeasure={false}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Contextual Compare Bar inside the 8-Column Card */}
                  <div className="mt-6 pt-4 border-t border-[#F8F8FA]/10 flex flex-wrap items-center justify-between gap-3 text-xs text-[#A1A1AA]">
                    <span>
                      {positioningLens === 'jaikla'
                        ? locale === 'th'
                          ? 'เชื่อมโยงทั้งความรู้ การเตรียมตัว กิจกรรม การฟื้นฟู และคอมมูนิตี้ไว้ในประสบการณ์เดียว'
                          : 'Uniting health knowledge, movement prep, sport, recovery, and community in one cohesive experience'
                        : locale === 'th'
                          ? `กำลังเปรียบเทียบ "${activePositioningCard.title}" คู่กับมาตรฐานของ JAIKLA`
                          : `Comparing "${activePositioningCard.title}" with the JAIKLA Active Wellness standard`}
                    </span>
                    {positioningLens !== 'jaikla' && (
                      <button
                        type="button"
                        onClick={() => setPositioningLens('jaikla')}
                        className="text-xs font-mono-tabular text-[#EBDDFF] hover:text-[#7C3AED] underline cursor-pointer"
                      >
                        {locale === 'th'
                          ? 'สลับกลับมาดู JAIKLA →'
                          : 'Return to JAIKLA Active Wellness →'}
                      </button>
                    )}
                  </div>
                </div>

                {/* Right 4 Columns: Interactive 4-Model Scope & Integration Spectrum */}
                <div className="lg:col-span-4 p-6 rounded-2xl bg-[#15151B] border border-[#F8F8FA]/12 flex flex-col justify-between space-y-4">
                  <div className="space-y-1">
                    <p className="text-[10px] font-mono-tabular tracking-widest text-[#EBDDFF]">
                      {locale === 'th'
                        ? 'ขอบเขตการบูรณาการประสบการณ์'
                        : 'EXPERIENCE INTEGRATION SCOPE'}
                    </p>
                    <p className="text-xs text-[#A1A1AA]">
                      {locale === 'th'
                        ? 'คลิกเลือกเพื่อเปรียบเทียบขอบเขตการดูแลผู้เข้าร่วมในแต่ละรูปแบบ'
                        : 'Select any model below to compare participant experience coverage'}
                    </p>
                  </div>

                  <div className="space-y-2.5">
                    {(
                      [
                        {
                          key: 'jaikla',
                          name: t.idea.tabs.jaikla,
                          tag:
                            locale === 'th'
                              ? 'ครบวงจร 5 มิติ (เตรียมพร้อม · เคลื่อนไหว · พัฒนา · ฟื้นฟู · ต่อยอด)'
                              : 'Full 5-Stage Spectrum (Prepare · Move · Perform · Recover · Community)',
                          coverage: 100,
                        },
                        {
                          key: 'clinical',
                          name: t.idea.tabs.clinical,
                          tag:
                            locale === 'th'
                              ? 'เน้นการประเมิน วินิจฉัย รักษา และฟื้นฟูโดยบุคลากรทางการแพทย์'
                              : 'Focused on acute clinical treatment and post-injury care',
                          coverage: 40,
                        },
                        {
                          key: 'gym',
                          name: t.idea.tabs.gym,
                          tag:
                            locale === 'th'
                              ? 'เน้นพื้นที่ อุปกรณ์ คลาส และโปรแกรมสำหรับการออกกำลังกาย'
                              : 'Focused on workout equipment access and high-intensity classes',
                          coverage: 45,
                        },
                        {
                          key: 'event',
                          name: t.idea.tabs.event,
                          tag:
                            locale === 'th'
                              ? 'เน้นประสบการณ์ของกิจกรรมและการแข่งขันในช่วงเวลาของงาน'
                              : 'Focused on single-day race logistics and finish-line staging',
                          coverage: 42,
                        },
                      ] as const
                    ).map((row) => {
                      const isCurrent = positioningLens === row.key;
                      return (
                        <button
                          key={row.key}
                          type="button"
                          onClick={() => setPositioningLens(row.key)}
                          className={`w-full p-3.5 rounded-xl border text-left transition-all cursor-pointer space-y-2 ${
                            isCurrent
                              ? 'bg-[#1D1930] border-[#7C3AED] shadow-sm'
                              : 'bg-[#111115] border-[#F8F8FA]/8 hover:border-[#F8F8FA]/25'
                          }`}
                        >
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-xs font-semibold text-[#F8F8FA]">{row.name}</span>
                            <span className="text-[10px] font-mono-tabular text-[#EBDDFF]">
                              {row.coverage}% SCOPE
                            </span>
                          </div>
                          <p className="text-[11px] text-[#A1A1AA] leading-relaxed">{row.tag}</p>
                          <div className="w-full h-1.5 rounded-full bg-[#1C1C24] overflow-hidden">
                            <div
                              className={`h-full rounded-full transition-all duration-500 ${
                                row.key === 'jaikla'
                                  ? 'bg-gradient-to-r from-[#4B1FD6] via-[#7C3AED] to-[#EBDDFF]'
                                  : isCurrent
                                    ? 'bg-[#7C3AED]'
                                    : 'bg-[#A1A1AA]/45'
                              }`}
                              style={{ width: `${row.coverage}%` }}
                            />
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            04 — SIGNATURE INTERACTIVE EXPERIENCE:
            PREPARE → MOVE → PERFORM → RECOVER → DEVELOP
        ===================================================================== */}
        <section
          id="journey"
          className="relative py-24 lg:py-32 bg-[#111111] border-b border-[#F8F8FA]/8 overflow-hidden"
        >
          <div className="pointer-events-none absolute inset-0 opacity-22 transition-opacity duration-700">
            <SmartCampaignImage
              src={currentStage.wideBackdrop}
              fallbackSrc={STUDIO_WIDE_IMAGES.hero}
              alt={currentStage.key}
              className="w-full h-full"
              overlayIntensity="deep"
            />
          </div>

          <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <div>
                <p className="text-xs font-mono-tabular tracking-widest text-[#EBDDFF] mb-2">
                  {t.journey.kicker}
                </p>
                <h2 className="font-display jaikla-display-section font-bold text-[#F8F8FA] flex flex-wrap items-center gap-x-2.5 gap-y-1">
                  {t.journey.stages.map((st, idx) => (
                    <React.Fragment key={st.name}>
                      <span>{st.name}</span>
                      {idx < t.journey.stages.length - 1 && (
                        <span className="text-[#7C3AED]">→</span>
                      )}
                    </React.Fragment>
                  ))}
                </h2>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setAutoCycleStages(!autoCycleStages)}
                  className="px-4 py-2.5 rounded-lg bg-[#17171C] hover:bg-[#22222A] border border-[#F8F8FA]/12 text-xs font-mono-tabular text-[#EBDDFF] inline-flex items-center gap-2 whitespace-nowrap cursor-pointer min-h-[40px]"
                >
                  {autoCycleStages ? (
                    <>
                      <Pause className="w-3.5 h-3.5 text-[#7C3AED]" />
                      <span>{t.journey.pauseCycle}</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 text-[#7C3AED]" />
                      <span>{t.journey.autoCycle}</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="mb-6 bg-[#141418]/85 border border-[#F8F8FA]/10 rounded-2xl px-4 sm:px-8 pt-4 pb-2 backdrop-blur-md">
              <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono-tabular text-[#A1A1AA]">
                <span>{t.journey.trajectoryLabel}</span>
                <span className="text-[#EBDDFF]">
                  STAGE {currentStage.index} · {currentStage.key} ({currentStage.scienceFocus})
                </span>
              </div>
              <StageTrajectorySvg
                pathData={currentStage.svgPathData}
                accentCoord={currentStage.accentCoordinate}
                activeIndex={activeStageIdx}
              />
            </div>

            <div
              className="flex flex-col lg:flex-row gap-3.5 min-h-[480px]"
              role="region"
              aria-label="Five stages of Active Wellness"
            >
              {JOURNEY_STAGES.map((stage, idx) => {
                const isActive = idx === activeStageIdx;
                const stLoc = t.journey.stages[idx] || t.journey.stages[0];
                return (
                  <div
                    key={stage.key}
                    onClick={() => {
                      setAutoCycleStages(false);
                      setActiveStageIdx(idx);
                    }}
                    role="button"
                    tabIndex={0}
                    aria-expanded={isActive}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setAutoCycleStages(false);
                        setActiveStageIdx(idx);
                      } else if (e.key === 'ArrowRight') {
                        setActiveStageIdx((idx + 1) % JOURNEY_STAGES.length);
                      } else if (e.key === 'ArrowLeft') {
                        setActiveStageIdx(
                          (idx - 1 + JOURNEY_STAGES.length) % JOURNEY_STAGES.length
                        );
                      }
                    }}
                    style={{
                      transition:
                        'flex 600ms cubic-bezier(0.22, 1, 0.36, 1), border-color 350ms ease',
                    }}
                    className={`relative rounded-2xl overflow-hidden border cursor-pointer flex flex-col justify-between p-5 sm:p-6 ${
                      isActive
                        ? 'lg:flex-[2.8] bg-[#16161C] border-[#7C3AED] shadow-2xl'
                        : 'lg:flex-[1] bg-[#141417]/90 border-[#F8F8FA]/10 hover:border-[#7C3AED]/50'
                    }`}
                  >
                    <div
                      className={`absolute inset-0 transition-opacity duration-500 ${
                        isActive ? 'opacity-35' : 'opacity-18 hover:opacity-28'
                      }`}
                    >
                      <SmartCampaignImage
                        src={stage.portraitImage}
                        fallbackSrc={stage.wideBackdrop}
                        alt={`${stage.key} — ${stLoc.headline}`}
                        className="w-full h-full"
                        overlayIntensity={isActive ? 'medium' : 'deep'}
                      />
                    </div>

                    <div className="relative z-10 flex items-center justify-between gap-2">
                      <span
                        className={`font-mono-tabular text-xs font-semibold ${
                          isActive ? 'text-[#EBDDFF]' : 'text-[#A1A1AA]'
                        }`}
                      >
                        {stage.index} / 05
                      </span>
                      {isActive && (
                        <span className="font-mono-tabular text-[11px] tracking-wider text-[#EBDDFF]">
                          {stage.categoryTag}
                        </span>
                      )}
                    </div>

                    <div className="relative z-10 mt-8 lg:mt-0 space-y-4">
                      <div>
                        <h3
                          className={`font-display font-bold tracking-tight transition-all duration-300 ${
                            isActive
                              ? 'text-2xl sm:text-3xl text-[#F8F8FA]'
                              : 'text-base sm:text-lg text-[#F8F8FA]/90'
                          }`}
                        >
                          {stLoc.name}
                        </h3>
                        <SmartThaiText
                          text={stLoc.subtitle}
                          className="text-xs text-[#EBDDFF] mt-1"
                          constrainMeasure={false}
                        />
                      </div>

                      {isActive && (
                        <div className="space-y-4 pt-2 border-t border-[#F8F8FA]/12 max-w-xl">
                          <SmartEnglishText
                            text={stLoc.headline}
                            className="text-base sm:text-lg font-semibold text-[#F8F8FA]"
                          />
                          <SmartEnglishText
                            text={stLoc.description}
                            className="text-sm text-[#F8F8FA]/85"
                          />
                          <div className="pt-2">
                            <p className="text-[11px] font-mono-tabular text-[#EBDDFF] mb-2">
                              {t.journey.deliverablesLabel}
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                              {stLoc.deliverables.map((item) => (
                                <div
                                  key={item}
                                  className="p-2.5 rounded-lg bg-[#111111]/85 border border-[#F8F8FA]/10 text-xs text-[#F8F8FA]/90"
                                >
                                  {item}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================================
            05 — WHY JAIKLA (WHERE KNOWLEDGE MEETS EXPERIENCE)
            FIXED RED BOX 2: All 5 cards now use 5 completely distinct campaign photos!
        ===================================================================== */}
        <section className="py-24 lg:py-32 bg-[#121212] border-b border-[#F8F8FA]/8">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10">
            <div className="max-w-3xl mb-14 space-y-3">
              <p className="text-xs font-mono-tabular tracking-widest text-[#EBDDFF]">
                {t.whyJaikla.kicker}
              </p>
              <h2 className="font-display jaikla-display-section font-bold text-[#F8F8FA]">
                {t.whyJaikla.headline1}
                <span className="block text-[#EBDDFF]">{t.whyJaikla.headline2}</span>
              </h2>
              <SmartEnglishText
                text={t.whyJaikla.lead}
                className="text-base sm:text-lg text-[#A1A1AA] pt-1"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {WHY_JAIKLA_CAPABILITIES.map((cap, idx) => {
                const isSelected = activeCapabilityIdx === idx;
                const capLoc = t.whyJaikla.items[idx] || cap;
                return (
                  <article
                    key={cap.index}
                    onMouseEnter={() => setActiveCapabilityIdx(idx)}
                    onClick={() => setActiveCapabilityIdx(idx)}
                    className={`group rounded-2xl overflow-hidden border transition-all duration-300 ease-out cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'border-[#7C3AED] bg-[#17171F] shadow-xl'
                        : 'border-[#F8F8FA]/10 bg-[#141418] hover:border-[#7C3AED]'
                    }`}
                  >
                    {/* Dedicated Top Photography Frame (Matches Capability Topic) */}
                    <div className="relative h-40 overflow-hidden border-b border-[#F8F8FA]/8 bg-[#111116]">
                      <SmartCampaignImage
                        src={cap.image}
                        fallbackSrc={STUDIO_WIDE_IMAGES.hero}
                        alt={capLoc.title}
                        className="w-full h-full"
                        imgClassName="transition-transform duration-500 ease-out group-hover:scale-105"
                        overlayIntensity="subtle"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#141418] via-transparent to-black/40 pointer-events-none" />
                      <div className="absolute top-3 left-4 right-4 flex items-center justify-between text-xs font-mono-tabular z-10">
                        <span className="px-2 py-0.5 rounded bg-black/70 backdrop-blur-md text-[#EBDDFF] font-semibold border border-[#F8F8FA]/10">
                          {cap.index}
                        </span>
                        <span className="px-2 py-0.5 rounded bg-black/70 backdrop-blur-md text-[10px] text-[#F8F8FA]/90 border border-[#F8F8FA]/10">
                          {cap.categoryLabel}
                        </span>
                      </div>
                    </div>

                    {/* Dedicated Bottom Text Container */}
                    <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                      <div className="space-y-2">
                        <h3 className="font-display text-lg font-bold text-[#F8F8FA] leading-snug">
                          {capLoc.title}
                        </h3>
                        <SmartThaiText
                          text={capLoc.subtitle}
                          className="text-xs text-[#EBDDFF]"
                          constrainMeasure={false}
                        />
                        <SmartEnglishText
                          text={capLoc.description}
                          className="text-xs sm:text-sm text-[#F8F8FA]/88"
                          constrainMeasure={false}
                        />
                      </div>
                      <div className="pt-3 border-t border-[#F8F8FA]/10 text-[11px] font-mono-tabular text-[#EBDDFF]/85">
                        {cap.metricsLabel}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================================
            06 — SOLUTIONS (ACTIVE WELLNESS FOR PEOPLE & ORGANIZATIONS)
        ===================================================================== */}
        <section
          id="solutions"
          className="py-24 lg:py-32 bg-[#111111] border-b border-[#F8F8FA]/8"
        >
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
              <div className="max-w-3xl space-y-3">
                <p className="text-xs font-mono-tabular tracking-widest text-[#EBDDFF]">
                  {t.solutions.kicker}
                </p>
                <h2 className="font-display jaikla-display-section font-bold text-[#F8F8FA]">
                  {t.solutions.headline1}
                  <span className="block text-[#EBDDFF]">{t.solutions.headline2}</span>
                </h2>
              </div>
              <SmartThaiText
                text={t.solutions.lead}
                className="text-sm sm:text-base text-[#A1A1AA] max-w-md"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              <div className="lg:col-span-5 flex flex-col gap-3">
                {SOLUTIONS_DATA.map((sol, idx) => {
                  const isOpen = idx === activeSolutionIdx;
                  const solLoc = t.solutions.items[idx] || sol;
                  return (
                    <button
                      key={sol.id}
                      type="button"
                      onClick={() => setActiveSolutionIdx(idx)}
                      className={`w-full text-left p-5 sm:p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                        isOpen
                          ? 'bg-[#17171F] border-[#7C3AED] shadow-lg'
                          : 'bg-[#141418] border-[#F8F8FA]/10 hover:border-[#7C3AED]/50'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-baseline gap-3.5">
                          <span className="font-mono-tabular text-xs font-semibold text-[#7C3AED]">
                            {sol.index}.
                          </span>
                          <div>
                            <h3 className="font-display text-base sm:text-lg font-bold text-[#F8F8FA]">
                              {solLoc.title}
                            </h3>
                            <SmartThaiText
                              text={solLoc.subtitle}
                              className="text-xs text-[#A1A1AA] mt-0.5"
                              constrainMeasure={false}
                            />
                          </div>
                        </div>
                        <ChevronDown
                          className={`w-4 h-4 text-[#EBDDFF] transition-transform duration-300 shrink-0 ${
                            isOpen ? 'rotate-180 text-[#7C3AED]' : ''
                          }`}
                        />
                      </div>

                      {isOpen && (
                        <div className="mt-4 pt-4 border-t border-[#F8F8FA]/10 text-xs sm:text-sm text-[#A1A1AA] leading-relaxed lg:hidden">
                            <SmartEnglishText
                              text={solLoc.summary}
                              className="text-[#F8F8FA]/90 mb-2"
                            />
                            <div className="flex flex-wrap gap-2">
                              {(locale === 'th' ? sol.programsTh : sol.programs).map((prog) => (
                                <span
                                  key={prog}
                                  className="text-xs text-[#EBDDFF] font-mono-tabular"
                                >
                                  · {prog}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>

                <div className="lg:col-span-7 rounded-2xl border border-[#F8F8FA]/12 bg-[#141418] overflow-hidden flex flex-col justify-between">
                  <div className="grid grid-cols-1 md:grid-cols-12 h-full">
                    <div className="md:col-span-5 relative min-h-[280px] md:min-h-full">
                      <SmartCampaignImage
                        src={currentSolution.image}
                        fallbackSrc={STUDIO_WIDE_IMAGES.community}
                        alt={currentSolutionLocale.title}
                        className="w-full h-full"
                        overlayIntensity="subtle"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="text-[11px] font-mono-tabular tracking-widest text-[#EBDDFF] bg-[#111111]/80 px-2.5 py-1 rounded">
                          {currentSolution.categoryTag}
                        </span>
                      </div>
                    </div>

                    <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between text-xs font-mono-tabular text-[#EBDDFF]">
                          <span>SOLUTION {currentSolution.index} / 05</span>
                          <span className="inline-flex items-center gap-2 text-[#F8F8FA]">
                            <JaiklaWordmarkSvg className="h-2.5 w-auto" />
                            <span className="font-display text-[10px] tracking-[0.22em] text-[#EBDDFF]">
                              ACTIVE WELLNESS
                            </span>
                          </span>
                        </div>

                        <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#F8F8FA]">
                          {currentSolutionLocale.title}
                        </h3>

                        <SmartEnglishText
                          text={currentSolutionLocale.summary}
                          className="text-sm sm:text-base text-[#F8F8FA]/90"
                        />

                        <div className="pt-2">
                          <p className="text-[11px] font-mono-tabular text-[#EBDDFF] mb-3">
                            {t.solutions.modulesLabel}
                          </p>
                          <ul className="space-y-2">
                            {(locale === 'th'
                              ? currentSolution.programsTh
                              : currentSolution.programs
                            ).map((program) => (
                              <li
                                key={program}
                                className="flex items-center gap-2.5 text-xs sm:text-sm text-[#F8F8FA]"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] shrink-0" />
                                <SmartThaiText as="span" text={program} />
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="pt-5 border-t border-[#F8F8FA]/10 space-y-4">
                        <div>
                          <p className="text-[11px] font-mono-tabular text-[#A1A1AA]">
                            {t.solutions.idealForLabel}
                          </p>
                          <SmartThaiText
                            text={
                              locale === 'th' ? currentSolution.idealForTh : currentSolution.idealFor
                            }
                            className="text-xs text-[#EBDDFF] mt-0.5"
                          />
                        </div>

                      <button
                        type="button"
                        onClick={() =>
                          handleLaunchProjectModal(
                            currentSolution.projectTypeModalValue,
                            `Interested in ${currentSolution.title} (${currentSolution.programs
                              .slice(0, 2)
                              .join(', ')})`
                          )
                        }
                        className="w-full jaikla-btn-primary py-3.5 px-5 rounded-xl text-xs font-semibold tracking-wider text-[#F8F8FA] inline-flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <span>
                          {t.solutions.inquireBtn} · {currentSolutionLocale.title}
                        </span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2027 Interactive Innovation: Active Wellness Experience Blueprint Configurator */}
            <div className="mt-14 p-6 sm:p-8 lg:p-10 rounded-2xl bg-[#16161C] border border-[#7C3AED]/35">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-[#F8F8FA]/10">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-mono-tabular text-[#EBDDFF]">
                    <Sliders className="w-3.5 h-3.5 text-[#7C3AED]" />
                    <span>{t.solutions.blueprintKicker}</span>
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#F8F8FA]">
                    {t.solutions.blueprintTitle}
                  </h3>
                </div>
                <SmartThaiText
                  text={t.solutions.blueprintSub}
                  className="text-xs sm:text-sm text-[#A1A1AA]"
                  constrainMeasure={false}
                />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6 items-center">
                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono-tabular text-[#EBDDFF] mb-2">
                      {t.solutions.audienceLabel}
                    </label>
                    <select
                      aria-label="Target Audience"
                      value={blueprint.audience}
                      onChange={(e) =>
                        setBlueprint({
                          ...blueprint,
                          audience: e.target.value as BlueprintConfig['audience'],
                        })
                      }
                      className="jaikla-input-field text-xs"
                    >
                      <option value="Corporate Workforce">
                        {locale === 'th' ? 'พนักงานและองค์กร (Corporate Workforce)' : 'Corporate Workforce'}
                      </option>
                      <option value="Consumer Brand">
                        {locale === 'th' ? 'แบรนด์สินค้าและไลฟ์สไตล์ (Consumer Brand)' : 'Consumer Brand'}
                      </option>
                      <option value="Retail & Shopping Center">
                        {locale === 'th'
                          ? 'ศูนย์การค้าและพื้นที่รีเทล (Retail & Shopping Center)'
                          : 'Retail & Shopping Center'}
                      </option>
                      <option value="Sport Community">
                        {locale === 'th' ? 'คอมมูนิตี้กีฬาและคนรักสุขภาพ (Sport Community)' : 'Sport Community'}
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono-tabular text-[#EBDDFF] mb-2">
                      {t.solutions.objectiveLabel}
                    </label>
                    <select
                      aria-label="Primary Objective"
                      value={blueprint.objective}
                      onChange={(e) =>
                        setBlueprint({
                          ...blueprint,
                          objective: e.target.value as BlueprintConfig['objective'],
                        })
                      }
                      className="jaikla-input-field text-xs"
                    >
                      <option value="Movement Readiness & Office Reset">
                        {locale === 'th'
                          ? 'เตรียมความพร้อมร่างกายและคลายออฟฟิศซินโดรม'
                          : 'Movement Readiness & Office Reset'}
                      </option>
                      <option value="Endurance & Run Culture">
                        {locale === 'th' ? 'สร้างวัฒนธรรมการวิ่งและความทนทาน' : 'Endurance & Run Culture'}
                      </option>
                      <option value="Recovery & Longevity">
                        {locale === 'th' ? 'การฟื้นฟูร่างกายและดูแลสุขภาพระยะยาว' : 'Recovery & Longevity'}
                      </option>
                      <option value="Flagship Wellness Festival">
                        {locale === 'th' ? 'เทศกาลสุขภาพและอีเวนต์กีฬาครบวงจร' : 'Flagship Wellness Festival'}
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono-tabular text-[#EBDDFF] mb-2">
                      {t.solutions.scaleLabel}
                    </label>
                    <select
                      aria-label="Program Scale"
                      value={blueprint.scale}
                      onChange={(e) =>
                        setBlueprint({
                          ...blueprint,
                          scale: e.target.value as BlueprintConfig['scale'],
                        })
                      }
                      className="jaikla-input-field text-xs"
                    >
                      <option value="Boutique Lab (30–80 pax)">
                        {locale === 'th' ? 'เวิร์กชอปกลุ่มย่อย (30–80 คน)' : 'Boutique Lab (30–80 pax)'}
                      </option>
                      <option value="Organization Program (100–500 pax)">
                        {locale === 'th'
                          ? 'โปรแกรมระดับองค์กร (100–500 คน)'
                          : 'Organization Program (100–500 pax)'}
                      </option>
                      <option value="Campaign / Festival (500+ pax)">
                        {locale === 'th'
                          ? 'แคมเปญและเทศกาลสุขภาพ (500+ คน)'
                          : 'Campaign / Festival (500+ pax)'}
                      </option>
                    </select>
                  </div>
                </div>

                <div className="lg:col-span-5 p-5 rounded-xl bg-[#111111] border border-[#F8F8FA]/10 space-y-3">
                  <div className="flex items-center justify-between text-[11px] font-mono-tabular text-[#EBDDFF]">
                    <span>J&#923;IKL&#923; ARCHITECTURE</span>
                    <span>3 MODULES</span>
                  </div>
                  <ul className="space-y-1.5">
                    {blueprintResult.modules.map((m) => (
                      <li key={m} className="text-xs text-[#F8F8FA] flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#7C3AED] shrink-0" />
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() =>
                        handleLaunchProjectModal(
                          blueprintResult.mappedProjectType,
                          `Blueprint: ${blueprintResult.summary} | Modules: ${blueprintResult.modules.join(
                            ', '
                          )}`
                        )
                      }
                      className="w-full py-2.5 px-4 rounded-lg bg-[#4B1FD6] hover:bg-[#7C3AED] text-xs font-semibold tracking-wider text-[#F8F8FA] transition-colors cursor-pointer"
                    >
                      {t.solutions.launchBlueprintBtn}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            07 — HUMAN PERFORMANCE (UNDERSTAND. RECOVER. DEVELOP.)
        ===================================================================== */}
        <section
          id="science"
          className="relative py-24 lg:py-32 bg-[#121212] border-b border-[#F8F8FA]/8 overflow-hidden"
        >
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-12">
              <div className="lg:col-span-6 space-y-6">
                <p className="text-xs font-mono-tabular tracking-widest text-[#EBDDFF]">
                  {t.performance.kicker}
                </p>

                <h2 className="font-display jaikla-display-section font-extrabold text-[#F8F8FA]">
                  {t.performance.h1}
                  <span className="block text-[#EBDDFF]">{t.performance.h2}</span>
                  <span className="block text-[#7C3AED]">{t.performance.h3}</span>
                </h2>

                <div className="space-y-4">
                  <SmartEnglishText
                    text={t.performance.lead}
                    className="text-lg sm:text-xl text-[#F8F8FA] font-medium"
                  />
                  <SmartThaiText
                    text={t.performance.subLead}
                    className="text-sm sm:text-base text-[#A1A1AA]"
                  />
                </div>

                <div className="pt-2 space-y-2">
                  <p className="text-[11px] font-mono-tabular text-[#A1A1AA]">
                    {t.performance.overlayLabel}
                  </p>
                  <div className="inline-flex flex-wrap gap-1.5 p-1.5 rounded-xl bg-[#17171C] border border-[#F8F8FA]/10">
                    {(
                      [
                        { id: 'prepare', label: t.performance.states.prepare },
                        { id: 'perform', label: t.performance.states.perform },
                        { id: 'recover', label: t.performance.states.recover },
                      ] as const
                    ).map((st) => (
                      <button
                        key={st.id}
                        type="button"
                        onClick={() => setTelemetryMode(st.id)}
                        className={`px-3.5 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                          telemetryMode === st.id
                            ? 'bg-[#7C3AED] text-[#F8F8FA]'
                            : 'text-[#A1A1AA] hover:text-[#F8F8FA]'
                        }`}
                      >
                        {st.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="relative rounded-2xl overflow-hidden border border-[#F8F8FA]/12 aspect-[16/10] shadow-2xl">
                  <SmartCampaignImage
                    src="/assets/images/realistic/performance_science.jpg"
                    fallbackSrc={STUDIO_WIDE_IMAGES.perform}
                    alt={locale === 'th' ? 'ห้องปฏิบัติการวิทยาศาสตร์การกีฬาและสมรรถภาพ' : 'Sports Science & Conditioning Lab'}
                    className="w-full h-full"
                    overlayIntensity="subtle"
                  />
                  <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 flex items-end justify-between gap-4 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
                    <div>
                      <p className="text-[11px] font-mono-tabular text-[#EBDDFF]">
                        {locale === 'th'
                          ? 'วิทยาศาสตร์การกีฬา · สมรรถภาพเชิงหน้าที่'
                          : 'SPORTS SCIENCE · FUNCTIONAL PERFORMANCE'}
                      </p>
                      <p className="text-base sm:text-lg font-semibold text-[#F8F8FA]">
                        {locale === 'th'
                          ? 'การประเมินและการฝึกซ้อมตามหลักชีวกลศาสตร์'
                          : 'Biomechanical Conditioning & Movement Lab'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <HumanPerformanceTelemetrySvg mode={telemetryMode} locale={locale} />
          </div>
        </section>

        {/* =====================================================================
            08 — EXPERT GUIDANCE (KNOWLEDGE BEHIND EVERY MOVEMENT)
        ===================================================================== */}
        <section className="py-24 lg:py-32 bg-[#111111] border-b border-[#F8F8FA]/8">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
              <div className="space-y-3 max-w-2xl">
                <p className="text-xs font-mono-tabular tracking-widest text-[#EBDDFF]">
                  {t.expert.kicker}
                </p>
                <h2 className="font-display jaikla-display-section font-bold text-[#F8F8FA]">
                  {t.expert.h1}
                  <span className="block text-[#EBDDFF]">{t.expert.h2}</span>
                </h2>
              </div>

              <div className="flex flex-wrap items-center gap-2.5">
                <div className="inline-flex flex-wrap gap-1 p-1 rounded-xl bg-[#17171C] border border-[#F8F8FA]/10">
                  {[
                    'ALL',
                    'BODY AWARENESS',
                    'EXPERT GUIDANCE',
                    'RECOVERY',
                    'MOBILITY',
                    'STRENGTH',
                  ].map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setSelectedExpertCategory(cat)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                        selectedExpertCategory === cat
                          ? 'bg-[#4B1FD6] text-[#F8F8FA]'
                          : 'text-[#A1A1AA] hover:text-[#F8F8FA]'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Exclusive Allied Health Coaching Lead Frame + 6 Biomechanical Science Pillars */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              <div className="lg:col-span-4 rounded-2xl overflow-hidden border border-[#F8F8FA]/12 bg-[#141418] flex flex-col justify-between">
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <SmartCampaignImage
                    src="/assets/images/realistic/expert_guidance.jpg"
                    fallbackSrc={STUDIO_WIDE_IMAGES.prepare}
                    alt={locale === 'th' ? 'การโค้ชโดยผู้เชี่ยวชาญการเคลื่อนไหว' : 'Allied Health Movement Coaching'}
                    className="w-full h-full"
                    imgClassName="jaikla-photo-grade-hover"
                    overlayIntensity="subtle"
                  />
                </div>
                <div className="p-6 space-y-2 bg-[#131318] border-t border-[#F8F8FA]/10 flex-1 flex flex-col justify-center">
                  <p className="text-[11px] font-mono-tabular text-[#EBDDFF]">
                    {locale === 'th'
                      ? 'การโค้ชโดยผู้เชี่ยวชาญ · ชีวกลศาสตร์การเคลื่อนไหว'
                      : 'ALLIED HEALTH COACHING · BIOMECHANICS'}
                  </p>
                  <SmartThaiText
                    as="h3"
                    text={
                      locale === 'th'
                        ? 'การโค้ชและแนะนำท่าทางอย่างใกล้ชิด'
                        : 'Personalized Posture & Movement Literacy'
                    }
                    className="font-display text-xl font-bold text-[#F8F8FA]"
                  />
                  <SmartThaiText
                    text={
                      locale === 'th'
                        ? 'ดูแลและแนะนำท่าทางการเคลื่อนไหวอย่างใกล้ชิด เพื่อให้ผู้เข้าร่วมเข้าใจร่างกายและขยับได้อย่างมั่นใจ'
                        : 'Hands-on movement guidance ensuring participants move with biomechanical precision and confidence.'
                    }
                    className="text-xs text-[#A1A1AA] leading-relaxed"
                  />
                </div>
              </div>

              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredExpertPillars.map((pillar) => (
                  <article
                    key={pillar.index}
                    className="group rounded-2xl overflow-hidden bg-[#141418] border border-[#F8F8FA]/10 hover:border-[#7C3AED] transition-all duration-300 flex flex-col justify-between"
                  >
                    {/* Realistic Photography Frame for Each Pillar Topic */}
                    <div className="relative h-40 overflow-hidden border-b border-[#F8F8FA]/8 bg-[#111116]">
                      <SmartCampaignImage
                        src={pillar.image}
                        fallbackSrc={STUDIO_WIDE_IMAGES.prepare}
                        alt={pillar.loc.title}
                        className="w-full h-full"
                        imgClassName="transition-transform duration-500 ease-out group-hover:scale-105"
                        overlayIntensity="subtle"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#141418] via-transparent to-black/40 pointer-events-none" />
                      <div className="absolute top-3 left-4 right-4 flex items-center justify-between text-[11px] font-mono-tabular text-[#EBDDFF] z-10">
                        <span className="px-2 py-0.5 rounded bg-black/70 backdrop-blur-md font-semibold border border-[#F8F8FA]/10">
                          {pillar.index}
                        </span>
                        <span className="px-2 py-0.5 rounded bg-black/70 backdrop-blur-md text-[10px] text-[#F8F8FA]/90 border border-[#F8F8FA]/10">
                          {pillar.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-5 space-y-2.5 flex-1 flex flex-col justify-between">
                      <div className="space-y-1.5">
                        <h3 className="font-display text-lg font-bold text-[#F8F8FA]">
                          {pillar.loc.title}
                        </h3>
                        <SmartThaiText
                          text={pillar.loc.subtitle}
                          className="text-xs text-[#EBDDFF]"
                          constrainMeasure={false}
                        />
                        <SmartEnglishText
                          text={pillar.loc.description}
                          className="text-xs sm:text-sm text-[#A1A1AA]"
                        />
                      </div>
                      <div className="pt-2.5 border-t border-[#F8F8FA]/10 text-[10px] font-mono-tabular text-[#EBDDFF]/80">
                        {pillar.focus}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-8 p-4 sm:px-6 rounded-xl bg-[#16161B] border border-[#F8F8FA]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#A1A1AA]">
              <p>
                <strong className="text-[#F8F8FA] font-medium">{t.expert.disclaimerTitle}</strong>{' '}
                {t.expert.disclaimerBody}
              </p>
              <span className="font-mono-tabular text-[#EBDDFF] whitespace-nowrap">
                EDUCATION · GUIDANCE · MOVEMENT
              </span>
            </div>
          </div>
        </section>

        {/* =====================================================================
            09 — COMMUNITY (MOVE TOGETHER. GROW TOGETHER.)
        ===================================================================== */}
        <section
          id="community"
          className="py-24 lg:py-32 bg-[#121212] border-b border-[#F8F8FA]/8"
        >
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <p className="text-xs font-mono-tabular tracking-widest text-[#EBDDFF]">
                  {t.community.kicker}
                </p>

                <h2 className="font-display jaikla-display-section font-extrabold text-[#F8F8FA]">
                  {t.community.h1}
                  <span className="block text-[#EBDDFF]">{t.community.h2}</span>
                </h2>

                <SmartEnglishText
                  text={t.community.lead}
                  className="text-base sm:text-lg text-[#A1A1AA]"
                />

                <SmartThaiText
                  text={t.community.subLead}
                  className="text-sm sm:text-base text-[#A1A1AA]"
                />

                <div className="pt-4 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <button
                      type="button"
                      onClick={() => setShowCommunityStats((prev) => !prev)}
                      aria-expanded={showCommunityStats}
                      className="group inline-flex items-center gap-2.5 text-left py-1.5 px-3 -ml-3 rounded-lg hover:bg-[#1A1A24] transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-[#7C3AED]"
                    >
                      <span className="text-xs sm:text-sm font-mono-tabular font-semibold text-[#EBDDFF] underline decoration-[#7C3AED] decoration-2 underline-offset-4 group-hover:text-[#F8F8FA] transition-colors">
                        {t.community.ledgerLabel}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#EBDDFF] transition-transform duration-300 ${
                          showCommunityStats ? 'rotate-180 text-[#7C3AED]' : ''
                        }`}
                      />
                      <span className="text-[11px] text-[#A1A1AA] group-hover:text-[#EBDDFF] transition-colors">
                        {locale === 'th'
                          ? showCommunityStats
                            ? '(กดเพื่อซ่อนสถิติของคอมมูนิตี้)'
                            : '(กดที่หัวข้อเพื่อแสดงสถิติของคอมมูนิตี้)'
                          : showCommunityStats
                            ? '(Click to hide community stats)'
                            : '(Click heading to view community stats)'}
                      </span>
                    </button>
                  </div>

                  {showCommunityStats && (
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1 animate-fadeIn">
                      {['24', '1,500+', '08', '12'].map((previewValue, idx) => {
                        const st = t.community.stats[idx] || t.community.stats[0];
                        return (
                          <div
                            key={st.label}
                            className="p-4 rounded-xl bg-[#16161C] border border-[#7C3AED]/40 shadow-lg"
                          >
                            <p className="text-[11px] font-mono-tabular text-[#EBDDFF]">
                              {st.label}
                            </p>
                            <p className="font-mono-tabular text-2xl sm:text-3xl font-bold text-[#F8F8FA] my-1.5">
                              {previewValue}
                            </p>
                            <SmartThaiText
                              text={st.subLabel}
                              className="text-[11px] text-[#A1A1AA]"
                              constrainMeasure={false}
                            />
                            <p className="text-[10px] font-mono-tabular text-[#A1A1AA]/70 mt-0.5">
                              {st.unit}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

                <div className="pt-3 space-y-5">
                  <button
                    type="button"
                    onClick={() => handleLaunchProjectModal('Community')}
                    className="jaikla-btn-primary px-7 py-4 rounded-xl text-xs sm:text-sm font-semibold tracking-wider text-[#F8F8FA] inline-flex items-center gap-2.5 cursor-pointer"
                  >
                    <span>{t.community.joinCta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  {/* Official Social Media Follow Channels */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-[#15151C] border border-[#F8F8FA]/12 space-y-3.5">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="text-[11px] font-mono-tabular text-[#EBDDFF] tracking-wider uppercase">
                        {locale === 'th'
                          ? 'ช่องทางโซเชียลมีเดียและ LINE OA'
                          : 'FOLLOW NEWS & ACTIVITIES ON SOCIAL MEDIA & LINE OA'}
                      </p>
                      <span className="text-[10px] font-mono-tabular text-[#A1A1AA]">
                        @JaiklaActiveWellness
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {JAIKLA_SOCIAL_CHANNELS.map((social) => (
                        <a
                          key={social.id}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`group flex items-center justify-between gap-3 p-3 rounded-xl bg-[#1A1A23] hover:bg-[#4B1FD6]/25 border border-[#F8F8FA]/10 hover:border-[#7C3AED] transition-all duration-200 ${
                            social.id === 'line' ? 'sm:col-span-2' : ''
                          }`}
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <div className="w-9 h-9 rounded-lg bg-[#4B1FD6]/25 group-hover:bg-[#4B1FD6] border border-[#7C3AED]/40 flex items-center justify-center text-[#EBDDFF] group-hover:text-[#F8F8FA] transition-colors shrink-0">
                              <SocialPlatformIcon id={social.id} className="w-4 h-4" />
                            </div>
                            <div className="min-w-0">
                              <p className="text-xs font-semibold text-[#F8F8FA] flex items-center gap-1.5">
                                <span>{social.name}</span>
                                {social.accentBadge && (
                                  <span className="text-[9px] font-mono-tabular px-1.5 py-0.5 rounded bg-[#4B1FD6]/40 text-[#EBDDFF] border border-[#7C3AED]/30">
                                    {social.accentBadge}
                                  </span>
                                )}
                              </p>
                              <p className="text-[11px] text-[#A1A1AA] group-hover:text-[#EBDDFF] truncate transition-colors">
                                {locale === 'th' ? social.actionTh : social.actionEn}
                              </p>
                            </div>
                          </div>
                          <ArrowUpRight className="w-4 h-4 text-[#A1A1AA] group-hover:text-[#EBDDFF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 grid grid-cols-12 gap-4 items-stretch">
                <div className="col-span-7 rounded-2xl overflow-hidden border border-[#F8F8FA]/12 bg-[#141418] flex flex-col justify-between group">
                  <div className="relative aspect-[4/5] w-full overflow-hidden flex-1">
                    <SmartCampaignImage
                      src="/assets/images/realistic/community_gathering.jpg"
                      fallbackSrc={STUDIO_WIDE_IMAGES.community}
                      alt={locale === 'th' ? 'คอมมูนิตี้วิ่งและออกกำลังกายกลางแจ้ง' : 'Outdoor Running & Movement Community'}
                      className="w-full h-full"
                      imgClassName="jaikla-photo-grade-hover"
                      overlayIntensity="subtle"
                    />
                  </div>
                  <div className="p-4 bg-[#131318] border-t border-[#F8F8FA]/10">
                    <p className="text-[10px] font-mono-tabular text-[#EBDDFF]">
                      {locale === 'th' ? 'คอมมูนิตี้วิ่งและการเคลื่อนไหว' : 'RUN & MOVEMENT COMMUNITY'}
                    </p>
                    <SmartThaiText
                      text={
                        locale === 'th'
                          ? 'การรวมกลุ่มซ้อมวิ่งและการสร้างมิตรภาพผ่านการเคลื่อนไหว'
                          : 'Inclusive Running Community & Social Belonging'
                      }
                      className="text-xs sm:text-sm font-medium text-[#F8F8FA] mt-0.5"
                    />
                  </div>
                </div>

                <div className="col-span-5 flex flex-col justify-between gap-4">
                  <div className="rounded-2xl overflow-hidden border border-[#F8F8FA]/12 bg-[#141418] flex flex-col justify-between group flex-1">
                    <div className="relative aspect-[16/11] w-full overflow-hidden flex-1">
                      <SmartCampaignImage
                        src="/assets/images/realistic/community_longevity.jpg"
                        fallbackSrc={STUDIO_WIDE_IMAGES.community}
                        alt={locale === 'th' ? 'คลับสุขภาพและการเคลื่อนไหว Active 40+' : 'Active 40+ Longevity & Mobility'}
                        className="w-full h-full"
                        imgClassName="jaikla-photo-grade-hover"
                        overlayIntensity="subtle"
                      />
                    </div>
                    <div className="p-3.5 bg-[#131318] border-t border-[#F8F8FA]/10">
                      <p className="text-[10px] font-mono-tabular text-[#EBDDFF]">
                        {locale === 'th' ? 'คลับสุขภาพวัย 40+' : 'ACTIVE 40+ CLUB'}
                      </p>
                      <SmartThaiText
                        text={
                          locale === 'th'
                            ? 'การเสริมสร้างกล้ามเนื้อแกนกลางและความยืนยาว'
                            : 'Core Stability & Lifelong Movement Habit'
                        }
                        className="text-xs font-medium text-[#F8F8FA] mt-0.5"
                      />
                    </div>
                  </div>

                  <div className="rounded-2xl overflow-hidden border border-[#F8F8FA]/12 bg-[#141418] flex flex-col justify-between group flex-1">
                    <div className="relative aspect-[16/11] w-full overflow-hidden flex-1">
                      <SmartCampaignImage
                        src="/assets/images/realistic/community_recovery.jpg"
                        fallbackSrc={STUDIO_WIDE_IMAGES.recover}
                        alt={locale === 'th' ? 'การยืดเหยียดและการฟื้นฟูร่างกาย' : 'Evening Mobility & Stretch Recovery'}
                        className="w-full h-full"
                        imgClassName="jaikla-photo-grade-hover"
                        overlayIntensity="subtle"
                      />
                    </div>
                    <div className="p-3.5 bg-[#131318] border-t border-[#F8F8FA]/10">
                      <p className="text-[10px] font-mono-tabular text-[#EBDDFF]">
                        {locale === 'th' ? 'การฟื้นฟูและการยืดเหยียด' : 'RECOVERY & MOBILITY'}
                      </p>
                      <SmartThaiText
                        text={
                          locale === 'th'
                            ? 'ช่วงเวลาผ่อนคลายและดูแลร่างกายอย่างถูกวิธี'
                            : 'Mindful Cooldown & Posture Realignment'
                        }
                        className="text-xs font-medium text-[#F8F8FA] mt-0.5"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            10 — BUSINESS / PARTNERSHIP & 11 — BUSINESS FLYWHEEL
        ===================================================================== */}
        <section
          id="partner"
          className="py-24 lg:py-32 bg-[#111111] border-b border-[#F8F8FA]/8"
        >
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10 space-y-24">
            <div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
                <div className="lg:col-span-7 space-y-3">
                  <p className="text-xs font-mono-tabular tracking-widest text-[#EBDDFF]">
                    {t.partner.kicker}
                  </p>
                  <h2 className="font-display jaikla-display-section font-extrabold text-[#F8F8FA]">
                    {t.partner.h1}
                    <span className="block text-[#7C3AED]">{t.partner.h2}</span>
                  </h2>
                </div>
                <div className="lg:col-span-5 space-y-2">
                  <p className="text-xs font-mono-tabular text-[#EBDDFF]">
                    {t.partner.builtForLabel}
                  </p>
                  <p className="text-sm sm:text-base font-medium text-[#F8F8FA]">
                    {t.partner.builtForList}
                  </p>
                  <SmartThaiText
                    text={t.partner.builtForSub}
                    className="text-xs sm:text-sm text-[#A1A1AA]"
                  />
                </div>
              </div>

              <div className="p-6 sm:p-10 rounded-2xl bg-[#15151B] border border-[#F8F8FA]/12 space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                  {t.partner.formulaSteps.map((item, idx) => {
                    const isHighlighted = idx <= activeFormulaStep;
                    return (
                      <div
                        key={item.name}
                        onMouseEnter={() => setActiveFormulaStep(idx)}
                        onClick={() => setActiveFormulaStep(idx)}
                        className={`p-5 rounded-xl border transition-all duration-300 cursor-pointer relative ${
                          isHighlighted
                            ? 'bg-[#1B1829] border-[#7C3AED] text-[#F8F8FA]'
                            : 'bg-[#121216] border-[#F8F8FA]/10 text-[#A1A1AA]'
                        }`}
                      >
                        <div className="flex items-center justify-between text-xs font-mono-tabular mb-2">
                          <span className="text-[#EBDDFF]">0{idx + 1}</span>
                          {idx < 4 && <span className="text-[#7C3AED] font-bold">+</span>}
                        </div>
                        <h3 className="font-display text-xl font-bold text-[#F8F8FA]">
                          {item.name}
                        </h3>
                        <SmartThaiText
                          text={item.subtitle}
                          className="text-xs text-[#EBDDFF] mt-0.5"
                          constrainMeasure={false}
                        />
                        <SmartEnglishText
                          text={item.detail}
                          className="text-xs text-[#A1A1AA] mt-2"
                          constrainMeasure={false}
                        />
                      </div>
                    );
                  })}
                </div>

                <div className="p-6 rounded-xl bg-gradient-to-r from-[#4B1FD6]/25 via-[#5B1FA6]/30 to-[#141418] border border-[#7C3AED]/50 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <span className="font-display text-3xl font-bold text-[#EBDDFF]">=</span>
                    <div>
                      <p className="text-[11px] font-mono-tabular text-[#EBDDFF]">
                        {t.partner.deliverableKicker}
                      </p>
                      <h4 className="font-display text-xl sm:text-2xl font-extrabold text-[#F8F8FA]">
                        {t.partner.deliverableTitle}
                      </h4>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleLaunchProjectModal('Brand Activation')}
                    className="jaikla-btn-primary px-6 py-3.5 rounded-xl text-xs font-semibold tracking-wider text-[#F8F8FA] whitespace-nowrap cursor-pointer"
                  >
                    {t.partner.coCreateCta}
                  </button>
                </div>
              </div>
            </div>

            {/* 11 — BUSINESS FLYWHEEL (09 · วงจรการเติบโตทางธุรกิจ) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center pt-6">
              <div className="lg:col-span-5">
                <FlywheelDiagram
                  activeNodeIndex={activeFlywheelIdx}
                  onSelectNode={setActiveFlywheelIdx}
                  scrollRotationDeg={flywheelRotation}
                  locale={locale}
                  localizedNodes={t.partner.flywheelNodes}
                />
              </div>

              <div className="lg:col-span-7 space-y-6">
                <p className="text-xs font-mono-tabular tracking-widest text-[#EBDDFF]">
                  {t.partner.flywheelKicker}
                </p>
                <h3 className="font-display jaikla-display-section font-bold text-[#F8F8FA]">
                  {t.partner.flywheelHeadline.split('\n').map((line, i) => (
                    <SmartThaiText key={i} as="span" text={line} className="block" />
                  ))}
                </h3>
                <SmartThaiText
                  text={t.partner.flywheelLead}
                  className="text-sm sm:text-base text-[#F8F8FA]/90 leading-relaxed"
                />

                {/* 3-Pillar Business Foundation & Co-Creation Clarity Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-4 rounded-xl bg-[#15151C] border border-[#F8F8FA]/10 space-y-1.5">
                    <p className="text-[10px] font-mono-tabular text-[#EBDDFF]">
                      {locale === 'th' ? '01 · รากฐานความเชี่ยวชาญ' : '01 · CORE FOUNDATION'}
                    </p>
                    <SmartThaiText
                      text={
                        locale === 'th'
                          ? 'ต่อยอดจากความรู้เรื่องการเคลื่อนไหว ประสบการณ์หน้างาน และบริการที่เชื่อมกันได้ตั้งแต่ต้นจนจบ'
                          : 'Specialized movement expertise, genuine care for outcomes, and diverse end-to-end services.'
                      }
                      className="text-xs text-[#F8F8FA]/90 leading-relaxed"
                    />
                  </div>

                  <div className="p-4 rounded-xl bg-[#15151C] border border-[#F8F8FA]/10 space-y-1.5">
                    <p className="text-[10px] font-mono-tabular text-[#EBDDFF]">
                      {locale === 'th' ? '02 · การทำงานร่วมกันในระยะยาว' : '02 · SOLID POSITION'}
                    </p>
                    <SmartThaiText
                      text={
                        locale === 'th'
                          ? 'วางโครงสร้างการทำงานที่ชัดเจน เพื่อให้พาร์ทเนอร์ต่อยอดโปรเจกต์และพัฒนาความร่วมมือได้ต่อเนื่อง'
                          : 'A stable, trusted business position ready to grow alongside partner organizations and brands.'
                      }
                      className="text-xs text-[#F8F8FA]/90 leading-relaxed"
                    />
                  </div>

                  <div className="p-4 rounded-xl bg-[#181528] border border-[#7C3AED]/45 space-y-1.5">
                    <p className="text-[10px] font-mono-tabular text-[#EBDDFF]">
                      {locale === 'th' ? '03 · ออกแบบให้เหมาะกับแต่ละองค์กร' : '03 · TAILORED CO-CREATION'}
                    </p>
                    <SmartThaiText
                      text={
                        locale === 'th'
                          ? 'ออกแบบกิจกรรมสุขภาพ การเคลื่อนไหว และการฟื้นตัวให้เหมาะกับทั้งคนในองค์กรและลูกค้าของแบรนด์'
                          : 'Co-creating tailored activities that promote, develop, and restore body and mind for clients or employees.'
                      }
                      className="text-xs text-[#EBDDFF] leading-relaxed"
                    />
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-[#16161D] border border-[#7C3AED] space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono-tabular text-[#EBDDFF]">
                    <span>
                      STAGE {currentFlywheelNode.index} / 07 · {currentFlywheelLocale.label}
                    </span>
                    <span>{t.partner.inspectNodeHint}</span>
                  </div>
                  <SmartThaiText
                    as="h4"
                    text={currentFlywheelLocale.headline}
                    className="font-display text-xl sm:text-2xl font-bold text-[#F8F8FA]"
                  />
                  <SmartThaiText
                    text={currentFlywheelLocale.description}
                    className="text-sm text-[#F8F8FA]/90 leading-relaxed"
                  />
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {FLYWHEEL_NODES.map((node, i) => {
                    const nodeLoc = t.partner.flywheelNodes[i] || node;
                    return (
                      <button
                        key={node.id}
                        type="button"
                        onClick={() => setActiveFlywheelIdx(i)}
                        className={`px-3 py-1.5 rounded-lg text-[11px] font-mono-tabular transition-colors cursor-pointer ${
                          activeFlywheelIdx === i
                            ? 'bg-[#4B1FD6] text-[#F8F8FA]'
                            : 'bg-[#16161A] text-[#A1A1AA] hover:text-[#F8F8FA]'
                        }`}
                      >
                        {node.index}. {nodeLoc.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            12 — FINAL CTA (Official Primary Vertical Logo + LET'S MOVE BETTER TOGETHER.)
        ===================================================================== */}
        <section id="contact" className="relative py-28 lg:py-36 bg-[#111111] overflow-hidden">
          <div
            className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[780px] h-[420px] rounded-full bg-gradient-to-tr from-[#4B1FD6]/25 via-[#5B1FA6]/20 to-[#7C3AED]/15 blur-[140px]"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-10 text-center space-y-8">
            {/* Official PDF 01 Primary Logo (Vertical Lockup) */}
            <div className="flex justify-center">
              <JaiklaPrimaryLogo variant="color" />
            </div>

            <h2 className="font-display jaikla-display-hero font-extrabold text-[#F8F8FA]">
              {t.finalCta.h1}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#F8F8FA] via-[#EBDDFF] to-[#7C3AED]">
                {t.finalCta.h2}
              </span>
            </h2>

            <div className="max-w-2xl mx-auto space-y-2.5 flex flex-col items-center">
              <SmartEnglishText
                text={t.finalCta.lead}
                className="text-lg sm:text-xl text-[#F8F8FA]/90 text-center"
              />
              <SmartThaiText
                text={t.finalCta.subLead}
                className="text-sm sm:text-base text-[#A1A1AA] text-center"
              />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <button
                type="button"
                onClick={() => handleLaunchProjectModal('Corporate Wellness')}
                className="jaikla-btn-primary px-8 py-4 rounded-xl text-xs sm:text-sm font-semibold tracking-wider text-[#F8F8FA] inline-flex items-center gap-2.5 min-h-[48px] cursor-pointer"
              >
                <span>{t.finalCta.btnStart}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() =>
                  handleLaunchProjectModal(
                    'Brand Activation',
                    'Strategic Partnership / Co-branded Active Wellness Experience'
                  )
                }
                className="px-7 py-4 rounded-xl text-xs sm:text-sm font-semibold tracking-wider text-[#F8F8FA] bg-[#17171D] hover:bg-[#22222B] border border-[#F8F8FA]/15 hover:border-[#7C3AED] transition-all min-h-[48px] cursor-pointer"
              >
                {t.finalCta.btnPartner}
              </button>

              <button
                type="button"
                onClick={() =>
                  handleLaunchProjectModal('Other', 'General inquiry for JAIKLA ACTIVE WELLNESS')
                }
                className="px-7 py-4 rounded-xl text-xs sm:text-sm font-semibold tracking-wider text-[#EBDDFF] bg-transparent hover:bg-[#F8F8FA]/5 border border-[#EBDDFF]/25 hover:border-[#EBDDFF] transition-all min-h-[48px] cursor-pointer"
              >
                {t.finalCta.btnContact}
              </button>
            </div>

            {/* Social Media Follow Bar in Final CTA */}
            <div className="pt-6 max-w-3xl mx-auto space-y-3">
              <p className="text-xs font-mono-tabular text-[#EBDDFF] tracking-wider uppercase">
                {locale === 'th'
                  ? 'ช่องทางโซเชียลมีเดียและ LINE OA ติดตามข่าวสาร ความรู้การเคลื่อนไหว และกิจกรรมใหม่ๆ'
                  : 'FOLLOW OUR SOCIAL MEDIA & LINE OA FOR LATEST UPDATES & EVENTS'}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {JAIKLA_SOCIAL_CHANNELS.map((social) => (
                  <a
                    key={social.id}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center justify-center gap-2.5 px-4 py-3.5 rounded-xl bg-[#16161E]/90 hover:bg-[#4B1FD6] border border-[#F8F8FA]/12 hover:border-[#EBDDFF]/60 text-xs sm:text-sm font-semibold text-[#F8F8FA] transition-all duration-200 shadow-lg ${
                      social.id === 'line' ? 'col-span-2 sm:col-span-1 lg:col-span-1' : ''
                    }`}
                  >
                    <SocialPlatformIcon
                      id={social.id}
                      className="w-4 h-4 text-[#EBDDFF] group-hover:text-[#F8F8FA] transition-colors shrink-0"
                    />
                    <span>{social.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#A1A1AA] group-hover:text-[#F8F8FA] transition-colors shrink-0" />
                  </a>
                ))}
              </div>
            </div>

            {submissions.length > 0 && (
              <div className="max-w-xl mx-auto mt-8 p-5 rounded-2xl bg-[#16161E] border border-[#7C3AED]/50 text-left space-y-2">
                <p className="text-xs font-mono-tabular text-[#EBDDFF]">
                  RECENT PROJECT INQUIRY REGISTERED IN THIS SESSION
                </p>
                {submissions.map((sub) => (
                  <div
                    key={sub.id}
                    className="text-xs text-[#F8F8FA]/90 flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-[#F8F8FA]/10"
                  >
                    <span>
                      <strong>{sub.organization}</strong> ({sub.name}) — {sub.projectType}
                    </span>
                    <span className="font-mono-tabular text-[#EBDDFF]">{sub.id}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      {/* =====================================================================
          QUIET EDITORIAL FOOTER
      ===================================================================== */}
      <footer className="bg-[#0D0D0F] border-t border-[#F8F8FA]/10 py-14 text-xs text-[#A1A1AA]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-[#F8F8FA]/8">
            <div className="md:col-span-6 space-y-4">
              <JaiklaHorizontalLogo showTagline={true} />
              <p className="text-xs text-[#A1A1AA] max-w-sm leading-relaxed">
                {locale === 'th' ? (
                  <>
                    หน่วยธุรกิจด้านสุขภาพและการเคลื่อนไหวของ{' '}
                    <strong className="text-[#F8F8FA] font-medium">
                      บริษัท ใจกล้า ดิจิตอล จำกัด
                    </strong>{' '}
                    ออกแบบประสบการณ์ที่เชื่อมความรู้ การเคลื่อนไหว การฟื้นตัว และคอมมูนิตี้เข้าด้วยกัน
                  </>
                ) : (
                  <>
                    A New Business Unit of{' '}
                    <strong className="text-[#F8F8FA] font-medium">JAIKLA DIGITAL CO., LTD.</strong>{' '}
                    Designing active wellness experiences across movement, performance, recovery,
                    and community.
                  </>
                )}
              </p>
              <div className="pt-1">
                <LanguageSwitcherBar locale={locale} onSelectLocale={setLocale} compact={true} />
              </div>
              <div className="pt-3 space-y-2">
                <p className="font-mono-tabular text-[10px] text-[#EBDDFF] uppercase tracking-wider">
                  {locale === 'th' ? 'ช่องทางโซเชียลมีเดียและ LINE OA' : 'Social Channels & LINE OA'}
                </p>
                {/* Single Row of Platform Buttons */}
                <div className="flex flex-nowrap items-center gap-2 overflow-x-auto no-scrollbar py-0.5">
                  {JAIKLA_SOCIAL_CHANNELS.map((social) => (
                    <a
                      key={social.id}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Follow JAIKLA ACTIVE WELLNESS on ${social.name}`}
                      className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-[#16161D] hover:bg-[#4B1FD6] border border-[#F8F8FA]/12 hover:border-[#7C3AED] text-xs font-medium text-[#F8F8FA] transition-all whitespace-nowrap shrink-0 shadow-sm"
                    >
                      <SocialPlatformIcon id={social.id} className="w-4 h-4 text-[#EBDDFF] shrink-0" />
                      <span>{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="md:col-span-3 space-y-2">
              <p className="font-mono-tabular text-[11px] text-[#F8F8FA] uppercase tracking-wider">
                Core Solutions
              </p>
              <ul className="space-y-1.5">
                {t.solutions.items.map((item, i) => (
                  <li key={item.title}>
                    <a href="#solutions" className="hover:text-[#F8F8FA] transition-colors">
                      0{i + 1}. {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-3 space-y-2">
              <p className="font-mono-tabular text-[11px] text-[#F8F8FA] uppercase tracking-wider">
                Business Inquiries
              </p>
              <p className="text-[#F8F8FA]/90">JAIKLA DIGITAL CO., LTD.</p>
              <p>Bangkok, Thailand</p>
              <p className="text-[#EBDDFF]">jaikladigital@gmail.com</p>
              <div className="pt-2 flex flex-col items-start gap-2">
                <button
                  type="button"
                  onClick={() => handleLaunchProjectModal('Corporate Wellness')}
                  className="text-[#EBDDFF] underline hover:text-[#7C3AED] font-medium cursor-pointer"
                >
                  {t.nav.startProject} →
                </button>
              </div>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#A1A1AA]/75">
            <p>© {new Date().getFullYear()} JAIKLA DIGITAL CO., LTD. All rights reserved.</p>
            <p>KNOWLEDGE × MOVEMENT × EXPERIENCE</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <ViewportTypographyProvider>
      <JaiklaActiveWellnessContent />
    </ViewportTypographyProvider>
  );
}
