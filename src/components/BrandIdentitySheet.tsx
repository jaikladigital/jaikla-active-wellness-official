import React, { useEffect, useRef, useState } from 'react';
import { Check, ChevronDown, Globe, Languages, Type } from 'lucide-react';
import { LOCALE_OPTIONS, LocaleOption, SupportedLocale } from '../data/i18nData';
import {
  THAI_FONT_PRESETS,
  ThaiFontPreset,
  useViewportTypography,
} from '../utils/typographyEngine';
import {
  JaiklaHorizontalLogo,
  JaiklaPrimaryLogo,
  JaiklaSymbolMark,
} from './KineticGraphics';

const SWITCHER_TOOLTIP_MAP: Record<SupportedLocale, string> = {
  en: 'Select Language & Script Settings',
  th: 'เปลี่ยนภาษาและปรับแต่งฟอนต์ภาษาไทย',
  zh: '选择网站语言与字体排版',
  ko: '웹사이트 언어 및 서체 설정',
  ja: '言語とフォント表示設定',
  ar: 'اختيار اللغة وإعدادات الخط',
};

/**
 * Refined, Professional Header Language & Thai Font Switcher Button + Popover Menu
 * Designed to be immediately recognizable (Globe + Language Code/Name + Chevron)
 * and includes real-time Thai Font Pairing customization.
 */
export const HeaderLanguageSelector: React.FC<{
  locale: SupportedLocale;
  onSelectLocale: (locale: SupportedLocale) => void;
  onOpenTypoLab?: () => void;
}> = ({ locale, onSelectLocale, onOpenTypoLab }) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { thaiFontPreset, setThaiFontPreset } = useViewportTypography();

  const activeOption: LocaleOption =
    LOCALE_OPTIONS.find((opt) => opt.code === locale) || LOCALE_OPTIONS[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative" dir="ltr">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={SWITCHER_TOOLTIP_MAP[locale]}
        title={SWITCHER_TOOLTIP_MAP[locale]}
        className={`group inline-flex items-center gap-2 px-3 py-2 rounded-lg border text-xs font-medium transition-all duration-200 cursor-pointer min-h-[38px] ${
          open
            ? 'bg-[#1B1926] border-[#7C3AED]/70 text-[#F8F8FA]'
            : 'bg-[#16161B]/85 hover:bg-[#1C1C24] border-[#F8F8FA]/14 hover:border-[#EBDDFF]/35 text-[#F8F8FA]/90 hover:text-[#F8F8FA]'
        }`}
      >
        <Globe
          className={`w-3.5 h-3.5 transition-colors shrink-0 ${
            open ? 'text-[#7C3AED]' : 'text-[#EBDDFF]/85 group-hover:text-[#EBDDFF]'
          }`}
          aria-hidden="true"
        />

        <span className="font-mono-tabular text-[11px] font-semibold tracking-wider text-[#EBDDFF]">
          {activeOption.shortLabel}
        </span>

        <span className="hidden sm:inline text-[#F8F8FA]/25" aria-hidden="true">
          |
        </span>

        <span className="hidden sm:inline text-xs text-[#F8F8FA]/90">
          {activeOption.nativeName}
        </span>

        <ChevronDown
          className={`w-3.5 h-3.5 text-[#A1A1AA] transition-transform duration-200 shrink-0 ${
            open ? 'rotate-180 text-[#EBDDFF]' : 'group-hover:text-[#F8F8FA]'
          }`}
          aria-hidden="true"
        />
      </button>

      {/* Subtle, Architectural Dropdown Popover for Language Selection */}
      {open && (
        <div
          role="listbox"
          aria-label="Select Website Language"
          className="absolute right-0 mt-2 w-[236px] rounded-xl bg-[#141419]/98 backdrop-blur-2xl border border-[#F8F8FA]/14 shadow-[0_20px_48px_rgba(0,0,0,0.85)] p-2 z-50"
        >
          <div className="px-2.5 py-1.5 mb-1 border-b border-[#F8F8FA]/8 flex items-center justify-between text-[10px] font-mono-tabular text-[#A1A1AA]">
            <span className="inline-flex items-center gap-1.5">
              <Languages className="w-3 h-3 text-[#EBDDFF]/80" aria-hidden="true" />
              <span>
                {locale === 'th'
                  ? 'เลือกภาษาของเว็บไซต์'
                  : locale === 'zh'
                    ? '选择网站语言'
                    : locale === 'ko'
                      ? '언어 선택'
                      : locale === 'ja'
                        ? '言語を選択'
                        : locale === 'ar'
                          ? 'اختر اللغة'
                          : 'SELECT LANGUAGE'}
              </span>
            </span>
            <span className="text-[#EBDDFF]/70">{activeOption.shortLabel}</span>
          </div>

          <div className="space-y-0.5">
            {LOCALE_OPTIONS.map((opt) => {
              const isSelected = opt.code === locale;
              return (
                <button
                  key={opt.code}
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => {
                    onSelectLocale(opt.code);
                    setOpen(false);
                  }}
                  className={`w-full px-2.5 py-1.5 rounded-lg flex items-center justify-between gap-2 text-left transition-colors duration-150 cursor-pointer ${
                    isSelected
                      ? 'bg-[#7C3AED]/20 text-[#F8F8FA] border border-[#7C3AED]/45'
                      : 'hover:bg-[#F8F8FA]/6 text-[#F8F8FA]/85 border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span
                      className={`w-6 h-5 rounded text-[10px] font-mono-tabular font-semibold flex items-center justify-center shrink-0 ${
                        isSelected
                          ? 'bg-[#7C3AED] text-[#F8F8FA]'
                          : 'bg-[#1D1D25] text-[#A1A1AA]'
                      }`}
                    >
                      {opt.shortLabel}
                    </span>
                    <div className="truncate">
                      <span className="text-xs font-medium text-[#F8F8FA]">
                        {opt.nativeName}
                      </span>
                    </div>
                  </div>

                  {isSelected && (
                    <Check className="w-3.5 h-3.5 text-[#EBDDFF] shrink-0" aria-hidden="true" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

/**
 * Inline Language Switcher Bar (used in mobile navigation drawer & footer)
 */
export const LanguageSwitcherBar: React.FC<{
  locale: SupportedLocale;
  onSelectLocale: (locale: SupportedLocale) => void;
  compact?: boolean;
}> = ({ locale, onSelectLocale, compact = false }) => {
  return (
    <div
      role="group"
      aria-label="Select Website Language"
      dir="ltr"
      className={`inline-flex flex-wrap items-center gap-1 rounded-lg bg-[#16161B] border border-[#F8F8FA]/12 ${
        compact ? 'p-1' : 'p-1.5'
      }`}
    >
      <span className="inline-flex items-center gap-1 px-1.5 py-0.5 text-[10px] font-mono-tabular text-[#A1A1AA]">
        <Globe className="w-3.5 h-3.5 text-[#EBDDFF]/80 shrink-0" aria-hidden="true" />
      </span>
      {LOCALE_OPTIONS.map((opt) => {
        const isActive = opt.code === locale;
        return (
          <button
            key={opt.code}
            type="button"
            onClick={() => onSelectLocale(opt.code)}
            title={opt.nativeName}
            className={`px-2 py-1 rounded text-[11px] font-mono-tabular font-medium transition-all duration-150 whitespace-nowrap cursor-pointer ${
              isActive
                ? 'bg-[#7C3AED]/25 text-[#F8F8FA] border border-[#7C3AED]/50'
                : 'text-[#A1A1AA] hover:text-[#F8F8FA] hover:bg-[#F8F8FA]/5 border border-transparent'
            }`}
          >
            {compact ? opt.shortLabel : `${opt.shortLabel} · ${opt.nativeName}`}
          </button>
        );
      })}
    </div>
  );
};

export const OfficialBrandLogoShowcase: React.FC = () => {
  const { locale } = useViewportTypography();
  return (
    <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-[#14141A] border border-[#7C3AED]/45 space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#F8F8FA]/10 pb-5">
        <div>
          <p className="text-xs font-mono-tabular tracking-widest text-[#EBDDFF]">
            OFFICIAL BRAND IDENTITY SYSTEM (ADAPTED FROM PDF GUIDELINES)
          </p>
          <h3 className="font-display text-xl sm:text-2xl font-bold text-[#F8F8FA] mt-1">
            J&#923;IKL&#923; ACTIVE WELLNESS · Logo Lockups & Color System
          </h3>
        </div>
        <span className="text-xs font-mono-tabular text-[#A1A1AA]">
          FLOW · ARC · FORWARD MOVEMENT · FREEDOM
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-6 rounded-xl bg-[#F5F5F7] text-[#111111] flex flex-col justify-between min-h-[220px]">
          <div className="text-[10px] font-mono-tabular text-[#111111]/70">
            {locale === 'th' ? '01 โลโก้หลัก (แนวตั้ง)' : '01 PRIMARY LOGO (VERTICAL)'}
          </div>
          <div className="py-4 flex items-center justify-center">
            <JaiklaPrimaryLogo variant="color" darkText={true} />
          </div>
          <div className="text-[10px] font-mono-tabular text-[#111111]/60 text-right">
            COLOR ON LIGHT (#F5F5F7)
          </div>
        </div>

        <div className="p-6 rounded-xl bg-[#111111] border border-[#F8F8FA]/12 flex flex-col justify-between min-h-[220px]">
          <div className="text-[10px] font-mono-tabular text-[#EBDDFF]">
            {locale === 'th' ? '02 โลโก้แนวนอน' : '02 HORIZONTAL LOGO'}
          </div>
          <div className="py-6 flex items-center justify-center">
            <JaiklaHorizontalLogo showTagline={true} variant="color" />
          </div>
          <div className="text-[10px] font-mono-tabular text-[#A1A1AA] text-right">
            NAVIGATION & HEADER LOCKUP
          </div>
        </div>

        <div className="p-6 rounded-xl bg-[#F5F5F7] text-[#111111] flex flex-col justify-between min-h-[220px]">
          <div className="text-[10px] font-mono-tabular text-[#111111]/70">
            {locale === 'th' ? '03 สัญลักษณ์อย่างเดียว' : '03 SYMBOL MARK ONLY'}
          </div>
          <div className="py-4 flex items-center justify-center">
            <JaiklaSymbolMark className="w-28 h-24" variant="color" />
          </div>
          <div className="text-[10px] font-mono-tabular text-[#111111]/60 text-right">
            TWIN-ARC KINETIC PEAK
          </div>
        </div>

        <div className="p-6 rounded-xl bg-[#111111] border border-[#F8F8FA]/12 flex flex-col justify-between min-h-[220px]">
          <div className="text-[10px] font-mono-tabular text-[#EBDDFF]">
            {locale === 'th' ? '07 เวอร์ชันสีขาวบนพื้นเข้ม' : '07 MONOCHROME (WHITE)'}
          </div>
          <div className="py-4 flex items-center justify-center">
            <JaiklaPrimaryLogo variant="white" darkText={false} />
          </div>
          <div className="text-[10px] font-mono-tabular text-[#A1A1AA] text-right">
            MONOCHROME REVERSE (#111111)
          </div>
        </div>
      </div>
    </div>
  );
};
