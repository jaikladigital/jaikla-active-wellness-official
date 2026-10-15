export type SupportedLocale = 'en' | 'th' | 'zh' | 'ko' | 'ja' | 'ar';

export interface LocaleOption {
  code: SupportedLocale;
  shortLabel: string;
  nativeName: string;
  thaiLabel: string;
  htmlLang: string;
  dir: 'ltr' | 'rtl';
}

export const LOCALE_OPTIONS: LocaleOption[] = [
  { code: 'en', shortLabel: 'EN', nativeName: 'English', thaiLabel: 'อังกฤษ', htmlLang: 'en', dir: 'ltr' },
  { code: 'th', shortLabel: 'TH', nativeName: 'ไทย', thaiLabel: 'ไทย', htmlLang: 'th', dir: 'ltr' },
  { code: 'zh', shortLabel: 'ZH', nativeName: '简体中文', thaiLabel: 'จีนสมัยใหม่', htmlLang: 'zh-Hans', dir: 'ltr' },
  { code: 'ko', shortLabel: 'KO', nativeName: '한국어', thaiLabel: 'เกาหลี', htmlLang: 'ko', dir: 'ltr' },
  { code: 'ja', shortLabel: 'JA', nativeName: '日本語', thaiLabel: 'ญี่ปุ่น', htmlLang: 'ja', dir: 'ltr' },
  { code: 'ar', shortLabel: 'AR', nativeName: 'العربية', thaiLabel: 'อาหรับ', htmlLang: 'ar', dir: 'rtl' },
];

export interface LocaleStrings {
  nav: {
    about: string;
    experience: string;
    solutions: string;
    science: string;
    community: string;
    partner: string;
    startProject: string;
  };
  hero: {
    kicker: string;
    headlineLine1: string;
    headlineLine2: string;
    lead: string;
    subLead: string;
    ctaPrimary: string;
    ctaSecondary: string;
    coreConceptLabel: string;
    coreConceptFormula: string;
    positioningTitle: string;
    positioningSub: string;
  };
  idea: {
    kicker: string;
    notFitness: string;
    notWellness: string;
    notEvent: string;
    revealTitle: string;
    body1: string;
    body2: string;
    compareLabel: string;
    tabs: {
      jaikla: string;
      clinical: string;
      gym: string;
      event: string;
    };
    matrixHeaders: {
      focus: string;
      atmosphere: string;
      outcome: string;
    };
    pillarsLabel: string;
    pillarsList: string;
  };
  journey: {
    kicker: string;
    autoCycle: string;
    pauseCycle: string;
    trajectoryLabel: string;
    deliverablesLabel: string;
    stages: {
      key: string;
      name: string;
      subtitle: string;
      headline: string;
      description: string;
      scienceFocus: string;
      deliverables: [string, string, string];
    }[];
  };
  whyJaikla: {
    kicker: string;
    headline1: string;
    headline2: string;
    lead: string;
    capabilities: {
      title: string;
      subtitle: string;
      description: string;
      metrics: string;
    }[];
  };
  solutions: {
    kicker: string;
    headline1: string;
    headline2: string;
    lead: string;
    modulesLabel: string;
    idealForLabel: string;
    inquirePrefix: string;
    blueprintStudioKicker: string;
    blueprintTitle: string;
    blueprintSubtitle: string;
    audienceLabel: string;
    objectiveLabel: string;
    scaleLabel: string;
    recommendedLabel: string;
    launchBlueprintCta: string;
    items: {
      title: string;
      subtitle: string;
      summary: string;
      programs: string[];
      idealFor: string;
    }[];
  };
  performance: {
    kicker: string;
    headline1: string;
    headline2: string;
    headline3: string;
    lead: string;
    subLead: string;
    overlayLabel: string;
    states: {
      prepare: string;
      perform: string;
      recover: string;
    };
  };
  expert: {
    kicker: string;
    headline1: string;
    headline2: string;
    inspectAssetsBtn: string;
    hideAssetsBtn: string;
    typoLabBtn: string;
    hideTypoLabBtn: string;
    disclaimerTitle: string;
    disclaimerBody: string;
    pillars: {
      title: string;
      subtitle: string;
      description: string;
      focus: string;
    }[];
  };
  community: {
    kicker: string;
    headline1: string;
    headline2: string;
    lead: string;
    subLead: string;
    ledgerLabel: string;
    previewMetricsBtn: string;
    resetMetricsBtn: string;
    joinCta: string;
    stats: {
      label: string;
      subLabel: string;
      unit: string;
    }[];
  };
  partner: {
    kicker: string;
    headline1: string;
    headline2: string;
    builtForLabel: string;
    builtForList: string;
    builtForSub: string;
    deliverableKicker: string;
    deliverableTitle: string;
    coCreateCta: string;
    formulaSteps: {
      name: string;
      subtitle: string;
      detail: string;
    }[];
    flywheelKicker: string;
    flywheelHeadline: string;
    flywheelLead: string;
    inspectNodeHint: string;
    flywheelNodes: {
      label: string;
      headline: string;
      description: string;
    }[];
  };
  finalCta: {
    kicker: string;
    headline1: string;
    headline2: string;
    lead: string;
    subLead: string;
    btnStart: string;
    btnPartner: string;
    btnContact: string;
  };
  modal: {
    title: string;
    subtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    orgLabel: string;
    orgPlaceholder: string;
    contactLabel: string;
    contactPlaceholder: string;
    typeLabel: string;
    notesLabel: string;
    notesPlaceholder: string;
    submitBtn: string;
    cancelBtn: string;
    validationRequired: string;
    validationFormat: string;
    thankYouTitle: string;
    thankYouSub: string;
    thankYouBody: string;
    continueBtn: string;
  };
}
