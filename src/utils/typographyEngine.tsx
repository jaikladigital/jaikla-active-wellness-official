import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { LOCALE_OPTIONS, SupportedLocale } from '../data/i18nData';
import { CompactLocalePack, TRANSLATIONS } from '../data/translations';

export type DeviceViewportTier =
  | 'compact-mobile' // < 390px
  | 'mobile'         // 390px - 639px
  | 'tablet'         // 640px - 1023px
  | 'laptop'         // 1024px - 1359px
  | 'desktop-xl';    // >= 1360px

export type TypographyScalePreset = 'editorial' | 'comfort' | 'compact';

export type ThaiFontPreset =
  | 'anuphan-modern'
  | 'noto-standard'
  | 'prompt-sarabun'
  | 'ibm-plex-tech';

export interface ThaiFontPresetMeta {
  id: ThaiFontPreset;
  nameTh: string;
  nameEn: string;
  badge: string;
  descriptionTh: string;
  descriptionEn: string;
  displayStack: string;
  bodyStack: string;
}

export const THAI_FONT_PRESETS: Record<ThaiFontPreset, ThaiFontPresetMeta> = {
  'anuphan-modern': {
    id: 'anuphan-modern',
    nameTh: 'Anuphan Modern (แนะนำ)',
    nameEn: 'Anuphan + IBM Plex Sans Thai',
    badge: 'DEFAULT · LOOPLESS',
    descriptionTh:
      'ฟอนต์ไทยไร้หัวร่วมสมัย ออกแบบตาราง OpenType Mark-to-Mark สำหรับสระบน-ล่างและวรรณยุกต์ซ้อน 3 ชั้นให้คมชัดสมดุล',
    descriptionEn:
      'Contemporary neo-grotesque Thai sans with precision OpenType mark/mkmk tables for 3-tier vowel & tone mark clarity.',
    displayStack: '"Anuphan", "Noto Sans Thai", "IBM Plex Sans Thai"',
    bodyStack: '"Anuphan", "IBM Plex Sans Thai", "Noto Sans Thai"',
  },
  'noto-standard': {
    id: 'noto-standard',
    nameTh: 'Noto Sans Thai (มาตรฐานสากล)',
    nameEn: 'Noto Sans Thai UI',
    badge: 'UNICODE REFERENCE',
    descriptionTh:
      'ฟอนต์มาตรฐานอักขรวิธีไทยจาก Google รองรับการวางพยัญชนะ สระบน-ล่าง และวรรณยุกต์ซ้อนครบทุกคำตามหลักภาษา',
    descriptionEn:
      'Google reference Thai typeface engineered for 100% WTT 2.0 consonant, vowel, and tone-mark positioning.',
    displayStack: '"Noto Sans Thai", "Anuphan", "IBM Plex Sans Thai"',
    bodyStack: '"Noto Sans Thai", "Anuphan", "IBM Plex Sans Thai"',
  },
  'prompt-sarabun': {
    id: 'prompt-sarabun',
    nameTh: 'Prompt + Sarabun (หัวข้อทันสมัย + เนื้อหามีหัว)',
    nameEn: 'Prompt Display + Sarabun Body',
    badge: 'EDITORIAL LOOPED',
    descriptionTh:
      'จับคู่ฟอนต์หัวข้อ Prompt ที่โดดเด่นเข้ากับฟอนต์เนื้อหาตระกูลสารบรรณ (Sarabun) ที่มีหัวอ่านง่าย สบายตาในบทความยาว',
    descriptionEn:
      'Pairs geometric Prompt display headlines with traditional looped Sarabun body copy for effortless long-form reading.',
    displayStack: '"Prompt", "Anuphan", "Noto Sans Thai"',
    bodyStack: '"Sarabun", "Noto Sans Thai", "IBM Plex Sans Thai"',
  },
  'ibm-plex-tech': {
    id: 'ibm-plex-tech',
    nameTh: 'IBM Plex Sans Thai (เทค-เวลเนส)',
    nameEn: 'IBM Plex Sans Thai',
    badge: 'TECH WELLNESS',
    descriptionTh:
      'ฟอนต์ไทยบุคลิกวิทยาศาสตร์การกีฬาและเทคโนโลยี สุขุม คมชัด และอ่านค่าตัวเลข/ข้อมูลเทเลเมทรีได้แม่นยำ',
    descriptionEn:
      'Engineered technical grotesque pairing sporty geometry with crisp scientific telemetry legibility.',
    displayStack: '"IBM Plex Sans Thai", "Anuphan", "Noto Sans Thai"',
    bodyStack: '"IBM Plex Sans Thai", "Anuphan", "Noto Sans Thai"',
  },
};

export interface ScriptTypographyProfile {
  locale: SupportedLocale;
  scriptName: string;
  orthographyStandard: string;
  heroFontScale: number;
  sectionFontScale: number;
  cardTitleScale: number;
  bodyFontScale: number;
  displayLineHeight: number;
  sectionLineHeight: number;
  bodyLineHeight: number;
  displayLetterSpacing: string;
  bodyLetterSpacing: string;
  diacriticPadBlockEm: number;
  stackingNotes: string;
  sampleVerificationText: string;
}

/**
 * Per-language optical font-size and vertical ascender/descender/diacritic clearance profiles.
 * Prevents upper/lower vowels, tone marks (Thai สระบน/สระล่าง/วรรณยุกต์), Arabic tashkeel/descenders,
 * and CJK/Hangul stacked syllable blocks from ever overlapping across lines or getting clipped.
 */
export const SCRIPT_TYPOGRAPHY_PROFILES: Record<SupportedLocale, ScriptTypographyProfile> = {
  en: {
    locale: 'en',
    scriptName: 'Latin (Geometric Sans · OpenType Kern/Liga)',
    orthographyStandard: 'Unicode NFC · Kerning & Ligature Shaping',
    heroFontScale: 1.0,
    sectionFontScale: 1.0,
    cardTitleScale: 1.0,
    bodyFontScale: 1.0,
    displayLineHeight: 1.06,
    sectionLineHeight: 1.1,
    bodyLineHeight: 1.65,
    displayLetterSpacing: '-0.02em',
    bodyLetterSpacing: '0.005em',
    diacriticPadBlockEm: 0.06,
    stackingNotes: 'Standard Latin cap-height, ascender & descender clearance with zero Thai/mixed-script leakage',
    sampleVerificationText:
      'We design science-led movement, athletic performance, and guided myofascial recovery experiences that help people move better and live better.',
  },
  th: {
    locale: 'th',
    scriptName: 'Thai (WTT 2.0 Canonical Vowel & Tone-Mark Shaper)',
    orthographyStandard: 'พยัญชนะ → สระบน/ล่าง → วรรณยุกต์ (OpenType ccmp · mark · mkmk)',
    heroFontScale: 0.70,
    sectionFontScale: 0.72,
    cardTitleScale: 0.84,
    bodyFontScale: 0.95,
    displayLineHeight: 1.46,
    sectionLineHeight: 1.42,
    bodyLineHeight: 1.84,
    displayLetterSpacing: '0em',
    bodyLetterSpacing: '0em',
    diacriticPadBlockEm: 0.16,
    stackingNotes:
      'จัดเรียงพยัญชนะ + สระบน (ั ิ ี ึ ื) + วรรณยุกต์ซ้อน (่ ้ ๊ ๋ ์) + สระอำ (ำ) และสระล่าง (ุ ู) ถูกต้องตามหลักภาษาไทย ไม่แยกสระหรือวรรณยุกต์ออกจากพยัญชนะ',
    sampleVerificationText:
      'เราออกแบบประสบการณ์ด้านการเคลื่อนไหว การออกกำลังกาย และการฟื้นฟูกล้ามเนื้อโดยผู้เชี่ยวชาญ เพื่อให้ทุกคนเข้าใจร่างกายและก้าวหน้าได้อย่างยั่งยืน',
  },
  zh: {
    locale: 'zh',
    scriptName: 'Simplified Chinese (Full Em-Box Hanzi & Kinsoku Shori)',
    orthographyStandard: 'Unicode NFC · GB/T 15834 Punctuation Binding',
    heroFontScale: 0.8,
    sectionFontScale: 0.84,
    cardTitleScale: 0.92,
    bodyFontScale: 0.98,
    displayLineHeight: 1.34,
    sectionLineHeight: 1.32,
    bodyLineHeight: 1.8,
    displayLetterSpacing: '0.02em',
    bodyLetterSpacing: '0.015em',
    diacriticPadBlockEm: 0.1,
    stackingNotes: 'Full-height Hanzi radical top/bottom stroke clearance & strict Kinsoku punctuation lock',
    sampleVerificationText:
      '我们将运动科学、肌肉恢复指导与活力社群体验深度融合，帮助每一位参与者在安全的节奏中提升身体表现。',
  },
  ko: {
    locale: 'ko',
    scriptName: 'Korean Hangul (Precomposed NFC Choseong·Jungseong·Jongseong)',
    orthographyStandard: 'KS X 1026-1 NFC Hangul Syllable Block + Eojeol Keep-All',
    heroFontScale: 0.76,
    sectionFontScale: 0.82,
    cardTitleScale: 0.9,
    bodyFontScale: 0.97,
    displayLineHeight: 1.36,
    sectionLineHeight: 1.34,
    bodyLineHeight: 1.78,
    displayLetterSpacing: '-0.01em',
    bodyLetterSpacing: '0.005em',
    diacriticPadBlockEm: 0.11,
    stackingNotes: '초성·중성·종성 (Consonant + Vowel + Final Batchim) NFC syllable composition & word-unit wrapping',
    sampleVerificationText:
      '운동 과학 기반의 움직임 준비, 퍼포먼스 트레이닝, 근막 리커버리 세션을 통해 몸을 깊이 이해하고 지속 가능한 성장을 돕습니다.',
  },
  ja: {
    locale: 'ja',
    scriptName: 'Japanese (Kanji + NFC Kana Dakuten/Handakuten Shaper)',
    orthographyStandard: 'JIS X 4051 Kinsoku Shori + Precomposed Dakuten (゛゜)',
    heroFontScale: 0.7,
    sectionFontScale: 0.76,
    cardTitleScale: 0.88,
    bodyFontScale: 0.96,
    displayLineHeight: 1.4,
    sectionLineHeight: 1.38,
    bodyLineHeight: 1.84,
    displayLetterSpacing: '0.015em',
    bodyLetterSpacing: '0.01em',
    diacriticPadBlockEm: 0.12,
    stackingNotes: 'Kanji + Hiragana/Katakana voiced marks (がぎぐげご・パピプペポ) NFC lock & strict line-break rules',
    sampleVerificationText:
      'スポーツ科学に基づくムーブメント準備、筋コンディショニング、リカバリー指導を融合し、身体の可能性を最大限に引き出します。',
  },
  ar: {
    locale: 'ar',
    scriptName: 'Arabic RTL (Contextual Cursive Shaping & Harakat Clearance)',
    orthographyStandard: 'Unicode BiDi RTL · Contextual Joining (isol/init/medi/fina) · Zero Tracking',
    heroFontScale: 0.78,
    sectionFontScale: 0.82,
    cardTitleScale: 0.9,
    bodyFontScale: 1.0,
    displayLineHeight: 1.5,
    sectionLineHeight: 1.46,
    bodyLineHeight: 1.88,
    displayLetterSpacing: '0em',
    bodyLetterSpacing: '0em',
    diacriticPadBlockEm: 0.18,
    stackingNotes: 'Tall Alif/Lam-Alif ligatures (لا لأ لإ لآ) + deep descenders + Harakat/Hamza clearance with 0em tracking',
    sampleVerificationText:
      'نصمم تجارب متكاملة تجمع بين علوم الحركة، وتطوير الأداء العضلي، والاستشفاء الميداني بإشراف متخصصين معتمدين.',
  },
};

export interface VerticalStackAnalysis {
  hasUpperMarks: boolean;
  hasLowerMarks: boolean;
  hasDoubleUpperStack: boolean; // e.g., Thai ี้, ื้, ั้, ิ้
  recommendedMinLineHeight: number;
  extraBlockPaddingEm: number;
}

export interface OrthographyAuditReport {
  locale: SupportedLocale;
  totalChars: number;
  baseConsonantsCount: number;
  upperVowelsAndMarksCount: number;
  lowerVowelsAndMarksCount: number;
  toneAndDiacriticMarksCount: number;
  doubleStackedClusters: string[];
  normalizedChanged: boolean;
  isCanonicallyValid: boolean;
  normalizedSample: string;
}

/**
 * Normalizes Thai and multilingual character sequences so that consonants, vowels,
 * and tone marks/diacritics always follow strict linguistic & Unicode WTT 2.0 canonical order:
 * 1. Strips any stray zero-width spaces (\u200B, \u2060) that could separate a combining vowel/tone mark
 *    from its base consonant or separate a Thai leading vowel (เ แ โ ใ ไ) from the following consonant.
 * 2. Applies Unicode NFC normalization (composes Hangul Jamo, Japanese Kana + Dakuten, Arabic Hamza, Latin accents).
 * 3. Converts double Thai Sara E (เ + เ) to canonical Sara Ae (แ).
 * 4. Reorders misordered Thai Tone Mark + Upper/Lower Vowel -> Canonical Upper/Lower Vowel + Tone Mark.
 * 5. Reorders misordered Thai Sara Am (ำ) + Tone Mark -> Canonical Tone Mark + Sara Am (e.g., ก้ำ, น้ำ).
 * 6. Deduplicates accidental repeated identical Thai combining marks.
 */
export function normalizeMultilingualOrthography(
  text: string,
  _locale: SupportedLocale = 'en'
): string {
  if (!text || typeof text !== 'string') return text;

  // Step 1: Remove any zero-width characters accidentally placed BEFORE a combining mark or dependent vowel
  // (Thai combining/dependent marks U+0E30..U+0E3A, U+0E45..U+0E4E, Latin U+0300..U+036F, Arabic U+064B..U+065F/U+0670, CJK Dakuten U+3099..U+309A)
  let cleaned = text.replace(
    /[\u200B\u2060\uFEFF]+([\u0E30-\u0E3A\u0E45-\u0E4E\u0300-\u036F\u064B-\u065F\u0670\u3099\u309A])/g,
    '$1'
  );

  // Step 2: Remove any zero-width characters accidentally placed AFTER a Thai leading vowel (เ แ โ ใ ไ)
  cleaned = cleaned.replace(/([\u0E40-\u0E44])[\u200B\u2060\uFEFF]+/g, '$1');

  // Step 3: Apply standard Unicode NFC composition (essential for Hangul, Japanese Dakuten, Arabic & Latin)
  if (typeof cleaned.normalize === 'function') {
    cleaned = cleaned.normalize('NFC');
  }

  // Step 4: Thai WTT 2.0 Canonical Sequence Normalization (if Thai characters are present)
  if (/[\u0E00-\u0E7F]/.test(cleaned)) {
    // 4a. Convert double Sara E (เ + เ) -> Sara Ae (แ)
    cleaned = cleaned.replace(/\u0E40\u0E40/g, '\u0E41');

    // 4b. Reorder Tone Mark / Thanthakhat (่ ้ ๊ ๋ ์) placed BEFORE Upper/Lower Vowel (ั ิ ี ึ ื ุ ู ็ ํ)
    // Canonical order: Consonant -> Upper/Lower Vowel -> Tone Mark
    cleaned = cleaned.replace(
      /([\u0E48-\u0E4C])([\u0E31\u0E34-\u0E3A\u0E47\u0E4D])/g,
      '$2$1'
    );

    // 4c. Reorder Sara Am (ำ U+0E33) placed BEFORE Tone Mark (่ ้ ๊ ๋)
    // Canonical order: Consonant -> Tone Mark -> Sara Am (so tone mark sits cleanly over consonant + nikhahit)
    cleaned = cleaned.replace(/\u0E33([\u0E48-\u0E4B])/g, '$1\u0E33');
    cleaned = cleaned.replace(/\u0E4D([\u0E48-\u0E4B])\u0E32/g, '$1\u0E33');

    // 4d. Deduplicate accidental repeated identical combining vowels or tone marks
    cleaned = cleaned.replace(/([\u0E31\u0E34-\u0E3A\u0E47-\u0E4E])\1+/g, '$1');
  }

  return cleaned;
}

/**
 * Audits a text string for consonant, vowel, and tone-mark/diacritic composition across all 6 languages.
 */
export function auditMultilingualOrthography(
  text: string,
  locale: SupportedLocale = 'th'
): OrthographyAuditReport {
  const safeText = text || '';
  const normalized = normalizeMultilingualOrthography(safeText, locale);
  const plainVisible = normalized.replace(/[\u200B\u2060\uFEFF]/g, '');

  // Thai consonants (ก-ฮ), Arabic base letters, Hangul syllables, or Latin/CJK base chars
  const thaiConsonants = plainVisible.match(/[\u0E01-\u0E2E]/g) || [];
  const arabicLetters = plainVisible.match(/[\u0621-\u064A]/g) || [];
  const hangulSyllables = plainVisible.match(/[\uAC00-\uD7A3]/g) || [];
  const cjkChars = plainVisible.match(/[\u4E00-\u9FFF\u3040-\u30FF]/g) || [];
  const latinChars = plainVisible.match(/[A-Za-z]/g) || [];

  const baseConsonantsCount =
    thaiConsonants.length +
    arabicLetters.length +
    hangulSyllables.length +
    cjkChars.length +
    latinChars.length;

  // Upper vowels & marks (Thai ั ิ ี ึ ื ็ ำ เ แ โ ใ ไ, Arabic upper marks/hamza, Japanese dakuten)
  const upperMatches =
    plainVisible.match(
      /[\u0E31\u0E33\u0E34-\u0E37\u0E40-\u0E44\u0E47\u0E4D\u0622\u0623\u0624\u064B\u064C\u064E\u064F\u0651-\u0654\u0670\u3099\u309A]/g
    ) || [];

  // Lower vowels & deep descenders (Thai ุ ู ฺ ฎ ฏ ญ ฐ ฤ, Arabic kasra/hamza below/descenders)
  const lowerMatches =
    plainVisible.match(/[\u0E38-\u0E3A\u0E0E\u0E0F\u0E0D\u0E10\u0E24\u0625\u064D\u0650\u0655]/g) ||
    [];

  // Tone marks & diacritics (Thai ่ ้ ๊ ๋ ์, Arabic tashkeel, voiced kana, Hangul batchim syllables)
  const toneMatches =
    plainVisible.match(/[\u0E48-\u0E4C\u064B-\u065F\u0670\u3099\u309A]/g) || [];

  // Extract 3-tier Thai clusters (Consonant + Upper/Lower Vowel + Tone Mark or Tone Mark + Sara Am)
  const clusterRegex =
    /[\u0E40-\u0E44]?[\u0E01-\u0E2E]{1,2}(?:[\u0E31\u0E34-\u0E3A\u0E47][\u0E48-\u0E4C]|[\u0E48-\u0E4C]\u0E33)[\u0E01-\u0E2E]?/g;
  const rawClusters = plainVisible.match(clusterRegex) || [];
  const uniqueClusters = Array.from(new Set(rawClusters)).slice(0, 12);

  return {
    locale,
    totalChars: plainVisible.length,
    baseConsonantsCount,
    upperVowelsAndMarksCount: upperMatches.length,
    lowerVowelsAndMarksCount: lowerMatches.length,
    toneAndDiacriticMarksCount: toneMatches.length,
    doubleStackedClusters: uniqueClusters,
    normalizedChanged: safeText.replace(/[\u200B\u2060]/g, '') !== plainVisible,
    isCanonicallyValid: true,
    normalizedSample: plainVisible,
  };
}

/**
 * Inspects a string for upper vowels, lower vowels, tone marks, Arabic tashkeel/hamza,
 * or CJK/Hangul vertical stacking, and returns safe line-height & padding metrics.
 */
export function analyzeTextVerticalStacking(
  text: string,
  locale: SupportedLocale = 'en'
): VerticalStackAnalysis {
  const baseProfile = SCRIPT_TYPOGRAPHY_PROFILES[locale] || SCRIPT_TYPOGRAPHY_PROFILES.en;
  if (!text) {
    return {
      hasUpperMarks: false,
      hasLowerMarks: false,
      hasDoubleUpperStack: false,
      recommendedMinLineHeight: baseProfile.bodyLineHeight,
      extraBlockPaddingEm: baseProfile.diacriticPadBlockEm,
    };
  }

  // Thai upper vowels (ั ิ ี ึ ื ็ ำ) and tone marks (่ ้ ๊ ๋ ์)
  const thaiUpperVowelRegex = /[\u0E31\u0E33\u0E34-\u0E37\u0E47\u0E4D]/;
  const thaiToneMarkRegex = /[\u0E48-\u0E4C\u0E4E]/;
  // Double-stacked Thai upper vowel + tone mark on the same consonant, or tone mark + Sara Am
  const thaiDoubleStackRegex = /(?:[\u0E31\u0E34-\u0E37][\u0E48-\u0E4C]|[\u0E48-\u0E4C]\u0E33)/;
  // Tall Thai leading vowels (เ แ โ ใ ไ)
  const thaiTallVowelRegex = /[\u0E40-\u0E44]/;
  // Thai lower vowels (ุ ู ฺ) & deep descender consonants (ฎ ฏ ญ ฐ ฤ ฦ)
  const thaiLowerMarkRegex = /[\u0E38-\u0E3A\u0E0E\u0E0F\u0E0D\u0E10\u0E24\u0E26]/;

  // Arabic upper/lower diacritics & hamza/descenders
  const arabicUpperRegex = /[\u0622\u0623\u0624\u064B\u064C\u064E\u064F\u0651\u0652\u0653\u0654\u0670]/;
  const arabicLowerRegex = /[\u0625\u0626\u064D\u0650\u0655\u064A\u0649\u0646\u0642\u0631\u0632\u0648]/;

  // Japanese dakuten/handakuten or Korean stacked Hangul
  const cjkHangulStackRegex = /[\u3099-\u309C\uFF9E\uFF9F\uAC00-\uD7A3]/;

  const isThaiText = /[\u0E00-\u0E7F]/.test(text);
  const isArabicText = /[\u0600-\u06FF]/.test(text);

  const hasUpperMarks =
    thaiUpperVowelRegex.test(text) ||
    thaiToneMarkRegex.test(text) ||
    thaiTallVowelRegex.test(text) ||
    arabicUpperRegex.test(text) ||
    cjkHangulStackRegex.test(text);

  const hasLowerMarks = thaiLowerMarkRegex.test(text) || arabicLowerRegex.test(text);
  const hasDoubleUpperStack = thaiDoubleStackRegex.test(text);

  let recommendedMinLineHeight = baseProfile.bodyLineHeight;
  let extraBlockPaddingEm = baseProfile.diacriticPadBlockEm;

  if (isThaiText) {
    recommendedMinLineHeight = hasDoubleUpperStack && hasLowerMarks ? 1.94 : 1.88;
    extraBlockPaddingEm = hasDoubleUpperStack ? 0.22 : 0.16;
  } else if (isArabicText) {
    recommendedMinLineHeight = 1.88;
    extraBlockPaddingEm = 0.18;
  }

  return {
    hasUpperMarks,
    hasLowerMarks,
    hasDoubleUpperStack,
    recommendedMinLineHeight,
    extraBlockPaddingEm,
  };
}

export interface BrowserViewportMetrics {
  width: number;
  height: number;
  dpr: number;
  tier: DeviceViewportTier;
  fluidScale: number;
  thaiOptimalCh: number;
  enOptimalCh: number;
  orphanLockWords: number;
  preset: TypographyScalePreset;
  setPreset: (preset: TypographyScalePreset) => void;
  thaiFontPreset: ThaiFontPreset;
  setThaiFontPreset: (preset: ThaiFontPreset) => void;
  thaiFontMeta: ThaiFontPresetMeta;
  locale: SupportedLocale;
  setLocale: (locale: SupportedLocale) => void;
  t: CompactLocalePack;
  isRtl: boolean;
  segmenterSupported: boolean;
  scriptProfile: ScriptTypographyProfile;
}

const PROTECTED_THAI_COMPOUND_MAP: [string, string][] = [
  ['การออกกำลังกาย', 'การ\u2060ออก\u2060กำลัง\u2060กาย'],
  ['ออกกำลังกาย', 'ออก\u2060กำลัง\u2060กาย'],
  ['เคลื่อนไหวอย่างไร', 'เคลื่อน\u2060ไหว\u2060อย่าง\u2060ไร'],
  ['การเคลื่อนไหว', 'การ\u2060เคลื่อน\u2060ไหว'],
  ['เคลื่อนไหว', 'เคลื่อน\u2060ไหว'],
  ['ความคิดสร้างสรรค์', 'ความ\u2060คิด\u2060สร้าง\u2060สรรค์'],
  ['สร้างสรรค์', 'สร้าง\u2060สรรค์'],
  ['ความน่าเชื่อถือ', 'ความ\u2060น่า\u2060เชื่อ\u2060ถือ'],
  ['น่าเชื่อถือ', 'น่า\u2060เชื่อ\u2060ถือ'],
  ['ความเชื่อมั่น', 'ความ\u2060เชื่อ\u2060มั่น'],
  ['เชื่อมั่น', 'เชื่อ\u2060มั่น'],
  ['ความไว้วางใจ', 'ความ\u2060ไว้\u2060วาง\u2060ใจ'],
  ['ไว้วางใจ', 'ไว้\u2060วาง\u2060ใจ'],
  ['ความประทับใจ', 'ความ\u2060ประ\u2060ทับ\u2060ใจ'],
  ['ประทับใจ', 'ประ\u2060ทับ\u2060ใจ'],
  ['ความเรียบร้อย', 'ความ\u2060เรียบ\u2060ร้อย'],
  ['ความยืดหยุ่น', 'ความ\u2060ยืด\u2060หยุ่น'],
  ['ยืดหยุ่น', 'ยืด\u2060หยุ่น'],
  ['ยืดเหยียด', 'ยืด\u2060เหยียด'],
  ['ความแข็งแรง', 'ความ\u2060แข็ง\u2060แรง'],
  ['แข็งแรง', 'แข็ง\u2060แรง'],
  ['ความคล่องตัว', 'ความ\u2060คล่อง\u2060ตัว'],
  ['คล่องตัว', 'คล่อง\u2060ตัว'],
  ['ความสัมพันธ์', 'ความ\u2060สัม\u2060พันธ์'],
  ['ความทนทาน', 'ความ\u2060ทน\u2060ทาน'],
  ['ความมั่นคง', 'ความ\u2060มั่น\u2060คง'],
  ['ที่มั่นคง', 'ที่\u2060มั่น\u2060คง'],
  ['มั่นคง', 'มั่น\u2060คง'],
  ['ความมั่นใจ', 'ความ\u2060มั่น\u2060ใจ'],
  ['อย่างมั่นใจ', 'อย่าง\u2060มั่น\u2060ใจ'],
  ['ไม่มั่นใจ', 'ไม่\u2060มั่น\u2060ใจ'],
  ['มั่นใจ', 'มั่น\u2060ใจ'],
  ['ความเข้าใจ', 'ความ\u2060เข้า\u2060ใจ'],
  ['อย่างเข้าใจ', 'อย่าง\u2060เข้า\u2060ใจ'],
  ['เข้าใจง่าย', 'เข้า\u2060ใจ\u2060ง่าย'],
  ['เข้าใจ', 'เข้า\u2060ใจ'],
  ['ความใส่ใจ', 'ความ\u2060ใส่\u2060ใจ'],
  ['อย่างใส่ใจ', 'อย่าง\u2060ใส่\u2060ใจ'],
  ['ใส่ใจ', 'ใส่\u2060ใจ'],
  ['ความสนใจ', 'ความ\u2060สน\u2060ใจ'],
  ['สนใจ', 'สน\u2060ใจ'],
  ['ความจริงใจ', 'ความ\u2060จริง\u2060ใจ'],
  ['อย่างจริงใจ', 'อย่าง\u2060จริง\u2060ใจ'],
  ['จริงใจ', 'จริง\u2060ใจ'],
  ['ความตั้งใจ', 'ความ\u2060ตั้ง\u2060ใจ'],
  ['อย่างตั้งใจ', 'อย่าง\u2060ตั้ง\u2060ใจ'],
  ['ตั้งใจ', 'ตั้ง\u2060ใจ'],
  ['ความรู้สึก', 'ความ\u2060รู้\u2060สึก'],
  ['รู้สึก', 'รู้\u2060สึก'],
  ['ความต้องการ', 'ความ\u2060ต้อง\u2060การ'],
  ['ต้องการ', 'ต้อง\u2060การ'],
  ['ความหลากหลาย', 'ความ\u2060หลาก\u2060หลาย'],
  ['หลากหลาย', 'หลาก\u2060หลาย'],
  ['ความเมื่อยล้า', 'ความ\u2060เมื่อย\u2060ล้า'],
  ['เมื่อยล้า', 'เมื่อย\u2060ล้า'],
  ['ความเหนื่อยล้า', 'ความ\u2060เหนื่อย\u2060ล้า'],
  ['ความหมาย', 'ความ\u2060หมาย'],
  ['การหายใจ', 'การ\u2060หาย\u2060ใจ'],
  ['ลมหายใจ', 'ลม\u2060หาย\u2060ใจ'],
  ['หายใจ', 'หาย\u2060ใจ'],
  ['จิตใจ', 'จิต\u2060ใจ'],
  ['หัวใจ', 'หัว\u2060ใจ'],
  ['ถอดใจ', 'ถอด\u2060ใจ'],
  ['สบายใจ', 'สบาย\u2060ใจ'],
  ['อุ่นใจ', 'อุ่น\u2060ใจ'],
  ['เปิดใจ', 'เปิด\u2060ใจ'],
  ['ภูมิใจ', 'ภูมิ\u2060ใจ'],
  ['แรงบันดาลใจ', 'แรง\u2060บัน\u2060ดาล\u2060ใจ'],
  ['อย่างยั่งยืน', 'อย่าง\u2060ยั่ง\u2060ยืน'],
  ['ที่ยั่งยืน', 'ที่\u2060ยั่ง\u2060ยืน'],
  ['ยั่งยืน', 'ยั่ง\u2060ยืน'],
  ['อย่างแท้จริง', 'อย่าง\u2060แท้\u2060จริง'],
  ['แท้จริง', 'แท้\u2060จริง'],
  ['อย่างต่อเนื่อง', 'อย่าง\u2060ต่อ\u2060เนื่อง'],
  ['ต่อเนื่อง', 'ต่อ\u2060เนื่อง'],
  ['อย่างใกล้ชิด', 'อย่าง\u2060ใกล้\u2060ชิด'],
  ['ใกล้ชิด', 'ใกล้\u2060ชิด'],
  ['อย่างมีหลักการ', 'อย่าง\u2060มี\u2060หลัก\u2060การ'],
  ['มีหลักการ', 'มี\u2060หลัก\u2060การ'],
  ['อย่างเป็นระบบ', 'อย่าง\u2060เป็น\u2060ระบบ'],
  ['ที่เป็นระบบ', 'ที่\u2060เป็น\u2060ระบบ'],
  ['เป็นระบบ', 'เป็น\u2060ระบบ'],
  ['อย่างชาญฉลาด', 'อย่าง\u2060ชาญ\u2060ฉลาด'],
  ['ชาญฉลาด', 'ชาญ\u2060ฉลาด'],
  ['อย่างฉลาด', 'อย่าง\u2060ฉลาด'],
  ['ผู้เชี่ยวชาญ', 'ผู้\u2060เชี่ยว\u2060ชาญ'],
  ['เชี่ยวชาญ', 'เชี่ยว\u2060ชาญ'],
  ['ผู้เข้าร่วมงาน', 'ผู้\u2060เข้า\u2060ร่วม\u2060งาน'],
  ['ผู้เข้าร่วม', 'ผู้\u2060เข้า\u2060ร่วม'],
  ['ผู้ร่วมงาน', 'ผู้\u2060ร่วม\u2060งาน'],
  ['ผู้รับบริการ', 'ผู้\u2060รับ\u2060บริการ'],
  ['การให้บริการ', 'การ\u2060ให้\u2060บริการ'],
  ['ให้บริการ', 'ให้\u2060บริการ'],
  ['การบริการ', 'การ\u2060บริการ'],
  ['รับบริการ', 'รับ\u2060บริการ'],
  ['บริการ', 'บริ\u2060การ'],
  ['ผู้ออกกำลังกาย', 'ผู้\u2060ออก\u2060กำลัง\u2060กาย'],
  ['ผู้ออกแบบ', 'ผู้\u2060ออก\u2060แบบ'],
  ['การออกแบบ', 'การ\u2060ออก\u2060แบบ'],
  ['ออกแบบ', 'ออก\u2060แบบ'],
  ['ผู้จัดงาน', 'ผู้\u2060จัด\u2060งาน'],
  ['ผู้เริ่มต้น', 'ผู้\u2060เริ่ม\u2060ต้น'],
  ['เริ่มต้น', 'เริ่ม\u2060ต้น'],
  ['สหเวชศาสตร์', 'สห\u2060เวช\u2060ศาสตร์'],
  ['วิทยาศาสตร์', 'วิทยา\u2060ศาสตร์'],
  ['ชีวกลศาสตร์', 'ชีว\u2060กล\u2060ศาสตร์'],
  ['สรีรวิทยา', 'สรีร\u2060วิทยา'],
  ['กายภาพบำบัด', 'กาย\u2060ภาพ\u2060บำ\u2060บัด'],
  ['ทางการแพทย์', 'ทาง\u2060การ\u2060แพทย์'],
  ['สถานพยาบาล', 'สถาน\u2060พยาบาล'],
  ['โรงพยาบาล', 'โรง\u2060พยาบาล'],
  ['ตรวจวินิจฉัย', 'ตรวจ\u2060วินิจ\u2060ฉัย'],
  ['ออฟฟิศซินโดรม', 'ออฟ\u2060ฟิศ\u2060ซิน\u2060โดรม'],
  ['ออฟฟิศรีเซ็ต', 'ออฟ\u2060ฟิศ\u2060รี\u2060เซ็ต'],
  ['ชีวิตประจำวัน', 'ชีวิต\u2060ประจำ\u2060วัน'],
  ['ในสนามจริง', 'ใน\u2060สนาม\u2060จริง'],
  ['ในการทำงาน', 'ใน\u2060การ\u2060ทำ\u2060งาน'],
  ['การทำงาน', 'การ\u2060ทำ\u2060งาน'],
  ['คนทำงาน', 'คน\u2060ทำ\u2060งาน'],
  ['ระบบประสาท', 'ระบบ\u2060ประสาท'],
  ['ระบบนิเวศ', 'ระบบ\u2060นิเวศ'],
  ['กล้ามเนื้อ', 'กล้าม\u2060เนื้อ'],
  ['พังผืด', 'พัง\u2060ผืด'],
  ['แกนกลางลำตัว', 'แกน\u2060กลาง\u2060ลำ\u2060ตัว'],
  ['ลำตัว', 'ลำ\u2060ตัว'],
  ['โครงสร้าง', 'โครง\u2060สร้าง'],
  ['ร่างกาย', 'ร่าง\u2060กาย'],
  ['ข้อต่อ', 'ข้อ\u2060ต่อ'],
  ['ข้อเท้า', 'ข้อ\u2060เท้า'],
  ['คุกเข่า', 'คุก\u2060เข่า'],
  ['นอนคว่ำ', 'นอน\u2060คว่ำ'],
  ['สุภาพสตรี', 'สุภาพ\u2060สตรี'],
  ['ตัวต่อตัว', 'ตัว\u2060ต่อ\u2060ตัว'],
  ['คู่ขนาน', 'คู่\u2060ขนาน'],
  ['พร้อมเพรียง', 'พร้อม\u2060เพรียง'],
  ['ชีวิตชีวา', 'ชีวิต\u2060ชีวา'],
  ['โฟมโรลเลอร์', 'โฟม\u2060โรล\u2060เลอร์'],
  ['เก้าอี้สนาม', 'เก้า\u2060อี้\u2060สนาม'],
  ['เตียงสนาม', 'เตียง\u2060สนาม'],
  ['เตียงพักฟื้น', 'เตียง\u2060พัก\u2060ฟื้น'],
  ['พักฟื้น', 'พัก\u2060ฟื้น'],
  ['ผ่อนคลาย', 'ผ่อน\u2060คลาย'],
  ['มาตรฐาน', 'มาตร\u2060ฐาน'],
  ['มืออาชีพ', 'มือ\u2060อาชีพ'],
  ['เป็นกันเอง', 'เป็น\u2060กัน\u2060เอง'],
  ['องค์ความรู้', 'องค์\u2060ความ\u2060รู้'],
  ['ความรู้', 'ความ\u2060รู้'],
  ['องค์กร', 'องค์\u2060กร'],
  ['หน่วยงาน', 'หน่วย\u2060งาน'],
  ['พนักงาน', 'พนัก\u2060งาน'],
  ['ทีมงาน', 'ทีม\u2060งาน'],
  ['หน้างาน', 'หน้า\u2060งาน'],
  ['วันงาน', 'วัน\u2060งาน'],
  ['บุคลากร', 'บุค\u2060ลากร'],
  ['ลูกค้า', 'ลูก\u2060ค้า'],
  ['ประสบการณ์', 'ประ\u2060สบ\u2060การณ์'],
  ['สุขภาพ', 'สุข\u2060ภาพ'],
  ['สมรรถภาพ', 'สมรรถ\u2060ภาพ'],
  ['ศักยภาพ', 'ศักย\u2060ภาพ'],
  ['ประสิทธิภาพ', 'ประ\u2060สิทธิ\u2060ภาพ'],
  ['คุณภาพ', 'คุณ\u2060ภาพ'],
  ['ภาพลักษณ์', 'ภาพ\u2060ลักษณ์'],
  ['การฟื้นฟู', 'การ\u2060ฟื้น\u2060ฟู'],
  ['ฟื้นฟู', 'ฟื้น\u2060ฟู'],
  ['ฟื้นตัว', 'ฟื้น\u2060ตัว'],
  ['เตรียมตัว', 'เตรียม\u2060ตัว'],
  ['ขยับตัว', 'ขยับ\u2060ตัว'],
  ['ปล่อยตัว', 'ปล่อย\u2060ตัว'],
  ['ทรงตัว', 'ทรง\u2060ตัว'],
  ['เตรียมพร้อม', 'เตรียม\u2060พร้อม'],
  ['ความพร้อม', 'ความ\u2060พร้อม'],
  ['ปลอดภัย', 'ปลอด\u2060ภัย'],
  ['ครบวงจร', 'ครบ\u2060วงจร'],
  ['ของวงจร', 'ของ\u2060วงจร'],
  ['วงจรธุรกิจ', 'วง\u2060จร\u2060ธุร\u2060กิจ'],
  ['ทางธุรกิจ', 'ทาง\u2060ธุร\u2060กิจ'],
  ['ธุรกิจ', 'ธุร\u2060กิจ'],
  ['จุดยืน', 'จุด\u2060ยืน'],
  ['จุดเน้น', 'จุด\u2060เน้น'],
  ['จุดเด่น', 'จุด\u2060เด่น'],
  ['แนวทาง', 'แนว\u2060ทาง'],
  ['แนวคิด', 'แนว\u2060คิด'],
  ['เป้าหมาย', 'เป้า\u2060หมาย'],
  ['ผลลัพธ์', 'ผล\u2060ลัพธ์'],
  ['การส่งเสริม', 'การ\u2060ส่ง\u2060เสริม'],
  ['ส่งเสริม', 'ส่ง\u2060เสริม'],
  ['การพัฒนา', 'การ\u2060พัฒนา'],
  ['พัฒนา', 'พัฒ\u2060นา'],
  ['การเติบโต', 'การ\u2060เติบ\u2060โต'],
  ['เติบโต', 'เติบ\u2060โต'],
  ['เดินร่วมทาง', 'เดิน\u2060ร่วม\u2060ทาง'],
  ['ร่วมทาง', 'ร่วม\u2060ทาง'],
  ['ต่อยอด', 'ต่อ\u2060ยอด'],
  ['รูปแบบเฉพาะ', 'รูป\u2060แบบ\u2060เฉพาะ'],
  ['เฉพาะทาง', 'เฉพาะ\u2060ทาง'],
  ['เฉพาะจุด', 'เฉพาะ\u2060จุด'],
  ['เฉพาะหน้า', 'เฉพาะ\u2060หน้า'],
  ['การดูแล', 'การ\u2060ดู\u2060แล'],
  ['ดูแล', 'ดู\u2060แล'],
  ['การแข่งขัน', 'การ\u2060แข่ง\u2060ขัน'],
  ['แข่งขัน', 'แข่ง\u2060ขัน'],
  ['การฝึกซ้อม', 'การ\u2060ฝึก\u2060ซ้อม'],
  ['ฝึกซ้อม', 'ฝึก\u2060ซ้อม'],
  ['การสื่อสาร', 'การ\u2060สื่อ\u2060สาร'],
  ['สื่อสาร', 'สื่อ\u2060สาร'],
  ['คำแนะนำ', 'คำ\u2060แนะ\u2060นำ'],
  ['แนะนำ', 'แนะ\u2060นำ'],
  ['คำปรึกษา', 'คำ\u2060ปรึก\u2060ษา'],
  ['ปรึกษา', 'ปรึก\u2060ษา'],
  ['พูดคุย', 'พูด\u2060คุย'],
  ['บอกต่อ', 'บอก\u2060ต่อ'],
  ['แชร์ต่อ', 'แชร์\u2060ต่อ'],
  ['ก้าวต่อไป', 'ก้าว\u2060ต่อ\u2060ไป'],
  ['ต่อไป', 'ต่อ\u2060ไป'],
  ['บาดเจ็บ', 'บาด\u2060เจ็บ'],
  ['เจ็บป่วย', 'เจ็บ\u2060ป่วย'],
  ['ปวดล้า', 'ปวด\u2060ล้า'],
  ['ล้าสะสม', 'ล้า\u2060สะ\u2060สม'],
  ['คนไข้', 'คน\u2060ไข้'],
  ['นักวิ่ง', 'นัก\u2060วิ่ง'],
  ['นักกีฬา', 'นัก\u2060กีฬา'],
  ['มือใหม่', 'มือ\u2060ใหม่'],
  ['หน้าใหม่', 'หน้า\u2060ใหม่'],
  ['เส้นชัย', 'เส้น\u2060ชัย'],
  ['ใส่หูฟัง', 'ใส่\u2060หู\u2060ฟัง'],
  ['ฟังเสียง', 'ฟัง\u2060เสียง'],
  ['ถ่ายรูป', 'ถ่าย\u2060รูป'],
  ['ถ่ายเซลฟี่', 'ถ่าย\u2060เซล\u2060ฟี่'],
  ['เซลฟี่', 'เซล\u2060ฟี่'],
  ['เข้าถึงง่าย', 'เข้า\u2060ถึง\u2060ง่าย'],
  ['เข้าถึงได้', 'เข้า\u2060ถึง\u2060ได้'],
  ['ทำตามได้จริง', 'ทำ\u2060ตาม\u2060ได้\u2060จริง'],
  ['ปฏิบัติได้จริง', 'ปฏิบัติ\u2060ได้\u2060จริง'],
  ['นำไปใช้ได้จริง', 'นำ\u2060ไป\u2060ใช้\u2060ได้\u2060จริง'],
  ['นำไปใช้จริง', 'นำ\u2060ไป\u2060ใช้\u2060จริง'],
  ['ลงมือทำจริง', 'ลง\u2060มือ\u2060ทำ\u2060จริง'],
  ['วัดผลได้', 'วัด\u2060ผล\u2060ได้'],
  ['ตอบโจทย์', 'ตอบ\u2060โจทย์'],
  ['บริหารจัดการ', 'บริหาร\u2060จัด\u2060การ'],
  ['มีส่วนร่วม', 'มี\u2060ส่วน\u2060ร่วม'],
  ['ส่วนร่วม', 'ส่วน\u2060ร่วม'],
  ['ทุกรอบ', 'ทุก\u2060รอบ'],
  ['ของคุณ', 'ของ\u2060คุณ'],
  ['ของเรา', 'ของ\u2060เรา'],
  ['ตัวเอง', 'ตัว\u2060เอง'],
  ['ตนเอง', 'ตน\u2060เอง'],
  ['ไปด้วยกัน', 'ไป\u2060ด้วย\u2060กัน'],
  ['เข้าด้วยกัน', 'เข้า\u2060ด้วย\u2060กัน'],
  ['ไว้ด้วยกัน', 'ไว้\u2060ด้วย\u2060กัน'],
  ['ด้วยกัน', 'ด้วย\u2060กัน'],
  ['ร่วมกัน', 'ร่วม\u2060กัน'],
  ['แต่ละกลุ่ม', 'แต่\u2060ละ\u2060กลุ่ม'],
  ['ทุกช่วงวัย', 'ทุก\u2060ช่วง\u2060วัย'],
  ['ทุกเจเนอเรชัน', 'ทุก\u2060เจ\u2060เนอ\u2060เร\u2060ชัน'],
  ['เจเนอเรชัน', 'เจ\u2060เนอ\u2060เร\u2060ชัน'],
  ['คอมมูนิตี้', 'คอม\u2060มูนิ\u2060ตี้'],
  ['พาร์ทเนอร์', 'พาร์ท\u2060เนอร์'],
  ['พาร์ตเนอร์', 'พาร์ต\u2060เนอร์'],
  ['พันธมิตร', 'พันธ\u2060มิตร'],
  ['โปรเจกต์', 'โปร\u2060เจกต์'],
  ['โปรแกรม', 'โปร\u2060แกรม'],
  ['โปรดักชัน', 'โปรดัก\u2060ชัน'],
  ['คอนเทนต์', 'คอน\u2060เทนต์'],
  ['แคมเปญ', 'แคม\u2060เปญ'],
  ['สปอร์ตอีเวนต์', 'สปอร์ต\u2060อี\u2060เวนต์'],
  ['อีเวนต์', 'อี\u2060เวนต์'],
  ['เวิร์กชอป', 'เวิร์ก\u2060ชอป'],
  ['โซลูชัน', 'โซ\u2060ลู\u2060ชัน'],
  ['โซเชียลมีเดีย', 'โซ\u2060เชียล\u2060มี\u2060เดีย'],
  ['ดิจิทัล', 'ดิจิ\u2060ทัล'],
  ['ดิจิตอล', 'ดิจิ\u2060ตอล'],
  ['อัตลักษณ์', 'อัต\u2060ลักษณ์'],
  ['สวัสดิการ', 'สวัสดิ\u2060การ'],
  ['วัฒนธรรม', 'วัฒน\u2060ธรรม'],
  ['พฤติกรรม', 'พฤติ\u2060กรรม'],
  ['กิจกรรม', 'กิจ\u2060กรรม'],
  ['ธรรมชาติ', 'ธรรม\u2060ชาติ'],
  ['บรรยากาศ', 'บรรยา\u2060กาศ'],
  ['ไร้รอยต่อ', 'ไร้\u2060รอย\u2060ต่อ'],
  ['ระยะยาว', 'ระยะ\u2060ยาว'],
  ['ยุคใหม่', 'ยุค\u2060ใหม่'],
  ['รูปแบบใหม่', 'รูป\u2060แบบ\u2060ใหม่'],
  ['รูปแบบเดิม', 'รูป\u2060แบบ\u2060เดิม'],
  ['แบบเดิม', 'แบบ\u2060เดิม'],
  ['วันเดียวจบ', 'วัน\u2060เดียว\u2060จบ'],
  ['วันเดียว', 'วัน\u2060เดียว'],
  ['ที่ทรงพลัง', 'ที่\u2060ทรง\u2060พลัง'],
  ['ทรงพลัง', 'ทรง\u2060พลัง'],
  ['เชิงหน้าที่', 'เชิง\u2060หน้า\u2060ที่'],
  ['เชิงกลยุทธ์', 'เชิง\u2060กล\u2060ยุทธ์'],
  ['ข้อมูลเชิงลึก', 'ข้อ\u2060มูล\u2060เชิง\u2060ลึก'],
  ['เชิงลึก', 'เชิง\u2060ลึก'],
  ['ทวีคูณ', 'ทวี\u2060คูณ'],
  ['กับใคร', 'กับ\u2060ใคร'],
];

const COMPILED_THAI_COMPOUND_RULES: { regex: RegExp; glued: string }[] =
  PROTECTED_THAI_COMPOUND_MAP.map(([compound, glued]) => ({
    regex: new RegExp(compound.split('').join('\\u2060?'), 'g'),
    glued,
  }));

/**
 * Short Thai prepositions, conjunctions, negations, and morphological prefixes
 * that must bind forward to the following word so they are never stranded at the end of a line.
 */
const THAI_FORWARD_PREFIXES = new Set([
  'การ',
  'ความ',
  'ผู้',
  'นัก',
  'ไม่',
  'ไม่ใช่',
  'ไม่ได้',
  'ไม่ต้อง',
  'ไร้',
  'ของ',
  'และ',
  'แต่',
  'หรือ',
  'เพื่อ',
  'ให้',
  'ใน',
  'กับ',
  'โดย',
  'ที่',
  'ซึ่ง',
  'จาก',
  'จน',
  'ถึง',
  'ทั้ง',
  'ทุก',
  'ไป',
  'มา',
  'แบบ',
  'อย่าง',
  'กว่า',
  'เมื่อ',
  'เพราะ',
  'ช่วย',
  'เน้น',
  'ตั้งแต่',
  'หาก',
  'เมื่อ',
  'รวมทั้ง',
]);

/**
 * Short Thai particles, classifiers, and bound compounding heads that must bind backward
 * to the preceding word so they are never orphaned at the start of a new line or split from their verb/noun.
 */
const THAI_BACKWARD_SUFFIXES = new Set([
  'ใจ',
  'กาย',
  'ตัว',
  'ภาพ',
  'ศาสตร์',
  'กรรม',
  'การณ์',
  'งาน',
  'ผล',
  'ๆ',
  'ได้',
  'จริง',
  'ขึ้น',
  'ลง',
  'ไว้',
  'อยู่',
  'แล้ว',
  'ด้วย',
  'กัน',
  'ต่อ',
  'ดี',
  'ไว',
  'ก่อน',
  'เอง',
  'เลย',
  'มาก',
  'สุด',
  'เรื่อยๆ',
]);

const WORD_JOINER = '\u2060';

/**
 * Safely joins word tokens with a separator (\u200B or \u2060) ONLY when the boundary is
 * between two distinct base-character words—NEVER before a combining vowel/tone mark
 * and NEVER after a Thai leading vowel (เ แ โ ใ ไ).
 */
function joinTokensClusterSafe(tokens: string[], separator: string): string {
  if (tokens.length === 0) return '';
  let result = tokens[0];
  const startsWithCombiningMark =
    /^[\u0E30-\u0E3A\u0E45-\u0E4E\u0300-\u036F\u064B-\u065F\u0670\u3099\u309A]/;
  const endsWithLeadingVowel = /[\u0E40-\u0E44]$/;

  for (let i = 1; i < tokens.length; i++) {
    const next = tokens[i];
    if (!next) continue;
    if (startsWithCombiningMark.test(next) || endsWithLeadingVowel.test(result)) {
      result += next;
    } else {
      result += separator + next;
    }
  }
  return result;
}

function classifyViewportTier(width: number): DeviceViewportTier {
  if (width < 390) return 'compact-mobile';
  if (width < 640) return 'mobile';
  if (width < 1024) return 'tablet';
  if (width < 1360) return 'laptop';
  return 'desktop-xl';
}

function calculateViewportTypography(
  width: number,
  height: number,
  dpr: number,
  preset: TypographyScalePreset
) {
  const tier = classifyViewportTier(width);
  const presetMultiplier =
    preset === 'comfort' ? 1.06 : preset === 'compact' ? 0.94 : 1.0;

  const clampedW = Math.min(1600, Math.max(320, width));
  const rawScale = 0.88 + ((clampedW - 320) / (1600 - 320)) * 0.2;
  const fluidScale = Number((rawScale * presetMultiplier).toFixed(3));

  let thaiOptimalCh = 56;
  let enOptimalCh = 64;
  let orphanLockWords = 2;

  if (tier === 'compact-mobile') {
    thaiOptimalCh = 30;
    enOptimalCh = 34;
    orphanLockWords = 2;
  } else if (tier === 'mobile') {
    thaiOptimalCh = 36;
    enOptimalCh = 40;
    orphanLockWords = 2;
  } else if (tier === 'tablet') {
    thaiOptimalCh = 50;
    enOptimalCh = 56;
    orphanLockWords = 2;
  } else if (tier === 'laptop') {
    thaiOptimalCh = 56;
    enOptimalCh = 62;
    orphanLockWords = 2;
  } else {
    thaiOptimalCh = 62;
    enOptimalCh = 68;
    orphanLockWords = 2;
  }

  const segmenterSupported =
    typeof Intl !== 'undefined' &&
    typeof (Intl as unknown as { Segmenter?: unknown }).Segmenter === 'function';

  return {
    width,
    height,
    dpr,
    tier,
    fluidScale,
    thaiOptimalCh,
    enOptimalCh,
    orphanLockWords,
    preset,
    segmenterSupported,
  };
}

export function segmentThaiForViewport(
  text: string,
  _viewportWidth: number,
  orphanLockCount = 2
): string {
  if (!text || typeof text !== 'string') return text;

  // Strip any previously inserted invisible joiners/zwsp so re-running is 100% idempotent
  const cleanedInput = text.replace(/[\u200B\u2060]/g, '');

  // Step 1: Canonical WTT 2.0 orthography normalization (fixes any misordered vowel/tone marks)
  let working = normalizeMultilingualOrthography(cleanedInput, 'th');

  // Thai grammar never uses a full stop (.) at the end of a sentence
  working = working.replace(/([\u0E00-\u0E7F])\s*\.+$/gm, '$1');

  const visibleThaiLength = (str: string) =>
    str.replace(/[\u200B\u2060\u0E31\u0E34-\u0E3A\u0E47-\u0E4E]/g, '').length;

  const clauses = working.split(/(\s+)/);

  const processedClauses = clauses.map((clause, clauseIdx) => {
    if (/^\s+$/.test(clause)) return clause;

    let words: string[] = [];

    if (
      typeof Intl !== 'undefined' &&
      typeof (Intl as unknown as { Segmenter?: unknown }).Segmenter === 'function'
    ) {
      type SegmenterInstance = {
        segment: (input: string) => Iterable<{ segment: string }>;
      };
      const SegmenterCtor = (
        Intl as unknown as {
          Segmenter: new (
            locale: string,
            options: { granularity: 'word' }
          ) => SegmenterInstance;
        }
      ).Segmenter;
      const segmenter = new SegmenterCtor('th', { granularity: 'word' });
      words = Array.from(segmenter.segment(clause), (s) => s.segment);
    } else {
      words = [clause];
    }

    // Pass 0 (Cluster Integrity Pass): Ensure no segment ever starts with a dependent vowel /
    // tone mark (ะ ั า ำ ิ ี ึ ื ุ ู ็ ่ ้ ๊ ๋ ์) or leaves a leading vowel (เ แ โ ใ ไ) stranded.
    const clusterSafeWords: string[] = [];
    for (const w of words) {
      if (!w) continue;
      const startsWithMark = /^[\u0E30-\u0E3A\u0E45-\u0E4E]/.test(w);
      const prevEndsWithLeadingVowel =
        clusterSafeWords.length > 0 &&
        /[\u0E40-\u0E44]$/.test(clusterSafeWords[clusterSafeWords.length - 1]);

      if (clusterSafeWords.length > 0 && (startsWithMark || prevEndsWithLeadingVowel)) {
        clusterSafeWords[clusterSafeWords.length - 1] += w;
      } else {
        clusterSafeWords.push(w);
      }
    }

    // Pass 1: Bind short prepositions, conjunctions, negations, and morphological prefixes forward
    const forwardBound: string[] = [];
    for (let i = 0; i < clusterSafeWords.length; i++) {
      const curr = clusterSafeWords[i];
      const plainCurr = curr.replace(/\u2060/g, '');
      if (
        THAI_FORWARD_PREFIXES.has(plainCurr) &&
        i + 1 < clusterSafeWords.length &&
        visibleThaiLength(curr) + visibleThaiLength(clusterSafeWords[i + 1]) <= 16
      ) {
        forwardBound.push(joinTokensClusterSafe([curr, clusterSafeWords[i + 1]], WORD_JOINER));
        i++;
      } else {
        forwardBound.push(curr);
      }
    }

    // Pass 2: Bind short trailing particles/modifiers and bound heads (ใจ, กาย, ตัว, ภาพ) backward
    const boundWords: string[] = [];
    for (let i = 0; i < forwardBound.length; i++) {
      const curr = forwardBound[i];
      const plainCurr = curr.replace(/\u2060/g, '');
      if (
        boundWords.length > 0 &&
        (THAI_BACKWARD_SUFFIXES.has(plainCurr) || plainCurr.startsWith('ๆ')) &&
        visibleThaiLength(boundWords[boundWords.length - 1]) + visibleThaiLength(curr) <= 16
      ) {
        boundWords[boundWords.length - 1] = joinTokensClusterSafe(
          [boundWords[boundWords.length - 1], curr],
          WORD_JOINER
        );
      } else {
        boundWords.push(curr);
      }
    }

    // Pass 3: Lock the final 2 words of a clause if the trailing word is short,
    // so no clause or sentence ever leaves a single-word orphan at the end of a line.
    const isLastClause = clauseIdx === clauses.length - 1;
    const effectiveLock = Math.min(2, Math.max(1, orphanLockCount));

    if (boundWords.length > 1) {
      const lastWord = boundWords[boundWords.length - 1];
      const prevWord = boundWords[boundWords.length - 2];
      const combinedTailLen = visibleThaiLength(prevWord) + visibleThaiLength(lastWord);
      const shouldLockClauseTail =
        (isLastClause && combinedTailLen <= 16) ||
        (visibleThaiLength(lastWord) <= 5 && combinedTailLen <= 14);

      if (shouldLockClauseTail && boundWords.length > effectiveLock) {
        const headWords = boundWords.slice(0, boundWords.length - effectiveLock);
        const tailWords = boundWords.slice(boundWords.length - effectiveLock);
        return headWords.join('') + joinTokensClusterSafe(tailWords, WORD_JOINER);
      } else if (shouldLockClauseTail) {
        return joinTokensClusterSafe(boundWords, WORD_JOINER);
      }
    }

    return boundWords.join('');
  });

  // Step 2: Apply lexical compound gluing with Word Joiner (\u2060) directly so compound words
  // (e.g., คุกเข่า, การหายใจ, ความใส่ใจ, ผู้ออกแบบ, รูปแบบเฉพาะ) never break mid-word.
  let result = processedClauses.join('');
  for (const rule of COMPILED_THAI_COMPOUND_RULES) {
    result = result.replace(rule.regex, rule.glued);
  }

  return normalizeMultilingualOrthography(result, 'th');
}

export function balanceCjkForViewport(text: string, viewportWidth: number): string {
  if (!text) return text;
  const normalized = normalizeMultilingualOrthography(text, 'zh');
  if (normalized.length < 6) return normalized;

  // Segment into true grapheme clusters so Japanese dakuten (゛゜) or surrogate pairs are never split
  let graphemes: string[];
  if (
    typeof Intl !== 'undefined' &&
    typeof (Intl as unknown as { Segmenter?: unknown }).Segmenter === 'function'
  ) {
    type GraphemeSegmenter = {
      segment: (input: string) => Iterable<{ segment: string }>;
    };
    const SegmenterCtor = (
      Intl as unknown as {
        Segmenter: new (
          locale: string,
          options: { granularity: 'grapheme' }
        ) => GraphemeSegmenter;
      }
    ).Segmenter;
    const seg = new SegmenterCtor('ja', { granularity: 'grapheme' });
    graphemes = Array.from(seg.segment(normalized), (s) => s.segment);
  } else {
    graphemes = Array.from(normalized);
  }

  if (graphemes.length < 6) return normalized;
  const lockChars = viewportWidth < 390 ? 2 : 3;
  const head = graphemes.slice(0, -lockChars).join('');
  const tail = joinTokensClusterSafe(graphemes.slice(-lockChars), WORD_JOINER);
  return `${head}${tail}`;
}

export function balanceSpacedTextForViewport(text: string, viewportWidth: number): string {
  if (!text || typeof text !== 'string') return text;
  const normalized = normalizeMultilingualOrthography(text, 'en');
  const trimmed = normalized.trim();
  const words = trimmed.split(/\s+/);
  if (words.length < 4) return normalized;

  const lastTwoLen =
    words[words.length - 1].length + words[words.length - 2].length;
  if (viewportWidth < 380 && lastTwoLen > 15) {
    return normalized;
  }

  const head = words.slice(0, -2).join(' ');
  const tail = `${words[words.length - 2]}\u00A0${words[words.length - 1]}`;
  return `${head} ${tail}`;
}

export function formatTextForLocaleAndViewport(
  text: string,
  locale: SupportedLocale,
  viewportWidth: number,
  orphanLockWords = 3
): string {
  if (!text) return text;
  const normalized = normalizeMultilingualOrthography(text, locale);
  if (/[\u0E00-\u0E7F]/.test(normalized)) {
    return segmentThaiForViewport(normalized, viewportWidth, orphanLockWords);
  }
  if (locale === 'zh' || locale === 'ja' || /[\u3040-\u30FF\u4E00-\u9FFF]/.test(normalized)) {
    return balanceCjkForViewport(normalized, viewportWidth);
  }
  return balanceSpacedTextForViewport(normalized, viewportWidth);
}

function deepFormatTranslations<T>(
  value: T,
  locale: SupportedLocale,
  viewportWidth: number
): T {
  if (typeof value === 'string') {
    if (value.includes('\n')) {
      return value
        .split('\n')
        .map((line) => formatTextForLocaleAndViewport(line, locale, viewportWidth, 2))
        .join('\n') as unknown as T;
    }
    return formatTextForLocaleAndViewport(value, locale, viewportWidth, 2) as unknown as T;
  }
  if (Array.isArray(value)) {
    return value.map((item) => deepFormatTranslations(item, locale, viewportWidth)) as unknown as T;
  }
  if (value && typeof value === 'object') {
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(value as Record<string, unknown>)) {
      if (k === 'id' || k === 'num') {
        out[k] = v;
      } else {
        out[k] = deepFormatTranslations(v, locale, viewportWidth);
      }
    }
    return out as T;
  }
  return value;
}

const ViewportTypographyContext = createContext<BrowserViewportMetrics>({
  width: 1280,
  height: 800,
  dpr: 1,
  tier: 'laptop',
  fluidScale: 1,
  thaiOptimalCh: 56,
  enOptimalCh: 64,
  orphanLockWords: 2,
  preset: 'editorial',
  setPreset: () => {},
  thaiFontPreset: 'anuphan-modern',
  setThaiFontPreset: () => {},
  thaiFontMeta: THAI_FONT_PRESETS['anuphan-modern'],
  locale: 'th',
  setLocale: () => {},
  t: TRANSLATIONS.th,
  isRtl: false,
  segmenterSupported: true,
  scriptProfile: SCRIPT_TYPOGRAPHY_PROFILES.th,
});

export const ViewportTypographyProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [preset, setPreset] = useState<TypographyScalePreset>('editorial');
  const [thaiFontPreset, setThaiFontPreset] = useState<ThaiFontPreset>('anuphan-modern');
  const [locale, setLocale] = useState<SupportedLocale>('th');
  const [dimensions, setDimensions] = useState(() => ({
    width: typeof window !== 'undefined' ? window.visualViewport?.width || window.innerWidth : 1280,
    height: typeof window !== 'undefined' ? window.visualViewport?.height || window.innerHeight : 800,
    dpr: typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1,
  }));

  useEffect(() => {
    let rafId: number | null = null;

    const updateViewport = () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const vw = Math.round(window.visualViewport?.width || window.innerWidth);
        const vh = Math.round(window.visualViewport?.height || window.innerHeight);
        const dpr = Number((window.devicePixelRatio || 1).toFixed(2));
        setDimensions((prev) => {
          if (prev.width === vw && prev.height === vh && prev.dpr === dpr) return prev;
          return { width: vw, height: vh, dpr };
        });
      });
    };

    window.addEventListener('resize', updateViewport, { passive: true });
    window.visualViewport?.addEventListener('resize', updateViewport, { passive: true });
    updateViewport();

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      window.removeEventListener('resize', updateViewport);
      window.visualViewport?.removeEventListener('resize', updateViewport);
    };
  }, []);

  const localeMeta = useMemo(
    () => LOCALE_OPTIONS.find((l) => l.code === locale) || LOCALE_OPTIONS[0],
    [locale]
  );

  const scriptProfile = useMemo(
    () => SCRIPT_TYPOGRAPHY_PROFILES[locale] || SCRIPT_TYPOGRAPHY_PROFILES.en,
    [locale]
  );

  const thaiFontMeta = useMemo(
    () => THAI_FONT_PRESETS[thaiFontPreset] || THAI_FONT_PRESETS['anuphan-modern'],
    [thaiFontPreset]
  );

  const formattedTranslation = useMemo(
    () =>
      deepFormatTranslations(
        TRANSLATIONS[locale] || TRANSLATIONS.en,
        locale,
        dimensions.width
      ),
    [locale, dimensions.width]
  );

  const metrics = useMemo<BrowserViewportMetrics>(() => {
    const calc = calculateViewportTypography(
      dimensions.width,
      dimensions.height,
      dimensions.dpr,
      preset
    );
    return {
      ...calc,
      setPreset,
      thaiFontPreset,
      setThaiFontPreset,
      thaiFontMeta,
      locale,
      setLocale,
      t: formattedTranslation,
      isRtl: localeMeta.dir === 'rtl',
      scriptProfile,
    };
  }, [
    dimensions.width,
    dimensions.height,
    dimensions.dpr,
    preset,
    thaiFontPreset,
    thaiFontMeta,
    locale,
    localeMeta,
    scriptProfile,
    formattedTranslation,
  ]);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--browser-vw', `${metrics.width}px`);
    root.style.setProperty('--browser-vh', `${metrics.height}px`);
    root.style.setProperty('--fluid-type-scale', String(metrics.fluidScale));
    root.style.setProperty('--thai-optimal-ch', `${metrics.thaiOptimalCh}ch`);
    root.style.setProperty('--en-optimal-ch', `${metrics.enOptimalCh}ch`);

    // Dynamic Thai Font Pairing CSS Custom Properties
    root.style.setProperty('--thai-display-font', thaiFontMeta.displayStack);
    root.style.setProperty('--thai-body-font', thaiFontMeta.bodyStack);

    // Script-specific optical font-size & vertical vowel/diacritic clearance variables
    root.style.setProperty('--script-hero-scale', String(scriptProfile.heroFontScale));
    root.style.setProperty('--script-section-scale', String(scriptProfile.sectionFontScale));
    root.style.setProperty('--script-card-scale', String(scriptProfile.cardTitleScale));
    root.style.setProperty('--script-body-scale', String(scriptProfile.bodyFontScale));
    root.style.setProperty('--script-display-lh', String(scriptProfile.displayLineHeight));
    root.style.setProperty('--script-section-lh', String(scriptProfile.sectionLineHeight));
    root.style.setProperty('--script-body-lh', String(scriptProfile.bodyLineHeight));
    root.style.setProperty('--script-display-tracking', scriptProfile.displayLetterSpacing);
    root.style.setProperty('--script-body-tracking', scriptProfile.bodyLetterSpacing);
    root.style.setProperty('--script-diacritic-pad', `${scriptProfile.diacriticPadBlockEm}em`);

    root.setAttribute('data-viewport-tier', metrics.tier);
    root.setAttribute('data-locale', locale);
    root.setAttribute('data-thai-font', thaiFontPreset);
    root.setAttribute('lang', localeMeta.htmlLang);
    root.setAttribute('dir', localeMeta.dir);
  }, [metrics, locale, localeMeta, scriptProfile, thaiFontMeta, thaiFontPreset]);

  return (
    <ViewportTypographyContext.Provider value={metrics}>
      {children}
    </ViewportTypographyContext.Provider>
  );
};

export function useViewportTypography() {
  return useContext(ViewportTypographyContext);
}

interface SmartThaiTextProps {
  text: string;
  as?: 'p' | 'span' | 'div' | 'h2' | 'h3' | 'h4';
  className?: string;
  constrainMeasure?: boolean;
  orphanLock?: number;
}

export const SmartThaiText: React.FC<SmartThaiTextProps> = ({
  text,
  as: Tag = 'p',
  className = '',
  orphanLock,
}) => {
  const { width, orphanLockWords, locale } = useViewportTypography();

  const segmentedLines = useMemo(() => {
    if (!text) return [''];
    const rawLines = text.split('\n').map((l) => l.trim()).filter(Boolean);
    return rawLines.map((line) =>
      formatTextForLocaleAndViewport(
        line,
        locale,
        width,
        orphanLock ?? orphanLockWords
      )
    );
  }, [text, locale, width, orphanLock, orphanLockWords]);

  const stackMetrics = useMemo(
    () => analyzeTextVerticalStacking(text, locale),
    [text, locale]
  );

  return (
    <Tag
      className={`font-thai jaikla-smart-thai jaikla-smart-text ${className}`}
      style={{
        lineHeight: stackMetrics.recommendedMinLineHeight,
        paddingBlock: `${stackMetrics.extraBlockPaddingEm * 0.45}em`,
      }}
    >
      {segmentedLines.map((line, idx) => (
        <React.Fragment key={idx}>
          <span>{line}</span>
          {idx < segmentedLines.length - 1 && (
            <>
              <br className="hidden md:inline" />
              <span className="md:hidden"> </span>
            </>
          )}
        </React.Fragment>
      ))}
    </Tag>
  );
};

interface SmartEnglishTextProps {
  text: string;
  as?: 'p' | 'span' | 'div' | 'h2' | 'h3';
  className?: string;
  constrainMeasure?: boolean;
}

export const SmartEnglishText: React.FC<SmartEnglishTextProps> = ({
  text,
  as: Tag = 'p',
  className = '',
  constrainMeasure = true,
}) => {
  const { width, enOptimalCh, orphanLockWords, locale } = useViewportTypography();
  const isThaiContent = typeof text === 'string' && /[\u0E00-\u0E7F]/.test(text);
  const hasExplicitBreaks = typeof text === 'string' && text.includes('\n');

  const balancedLines = useMemo(() => {
    if (!text) return [''];
    const rawLines = text.split('\n').map((l) => l.trim()).filter(Boolean);
    return rawLines.map((line) =>
      formatTextForLocaleAndViewport(line, locale, width, orphanLockWords)
    );
  }, [text, locale, width, orphanLockWords]);

  const stackMetrics = useMemo(
    () => analyzeTextVerticalStacking(text, locale),
    [text, locale]
  );

  const scriptClass = isThaiContent
    ? 'font-thai jaikla-smart-thai jaikla-smart-text'
    : 'jaikla-smart-en jaikla-smart-text';

  return (
    <Tag
      className={`${scriptClass} ${className}`}
      style={{
        ...(constrainMeasure && !hasExplicitBreaks && !isThaiContent
          ? { maxWidth: `${enOptimalCh}ch` }
          : {}),
        lineHeight: stackMetrics.recommendedMinLineHeight,
        paddingBlock: `${stackMetrics.extraBlockPaddingEm * 0.45}em`,
      }}
    >
      {balancedLines.map((line, idx) => (
        <React.Fragment key={idx}>
          <span>{line}</span>
          {idx < balancedLines.length - 1 && (
            <>
              <br className="hidden md:inline" />
              <span className="md:hidden"> </span>
            </>
          )}
        </React.Fragment>
      ))}
    </Tag>
  );
};
