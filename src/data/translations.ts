import { SupportedLocale } from './i18nData';

export interface CompactLocalePack {
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
    line1: string;
    line2: string;
    lead: string;
    secondaryLead: string;
    ctaExplore: string;
    ctaWork: string;
    coreConceptLabel: string;
    coreConceptFormula: string;
    positioningLabel: string;
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
    tabs: { jaikla: string; clinical: string; gym: string; event: string };
    headers: { focus: string; atmosphere: string; outcome: string };
    matrix: Record<
      'jaikla' | 'clinical' | 'gym' | 'event',
      { title: string; subtitle: string; focus: string; atmosphere: string; outcome: string }
    >;
  };
  journey: {
    kicker: string;
    autoCycle: string;
    pauseCycle: string;
    trajectoryLabel: string;
    deliverablesLabel: string;
    stages: {
      name: string;
      subtitle: string;
      headline: string;
      description: string;
      deliverables: [string, string, string];
    }[];
  };
  whyJaikla: {
    kicker: string;
    headline1: string;
    headline2: string;
    lead: string;
    items: { title: string; subtitle: string; description: string }[];
  };
  solutions: {
    kicker: string;
    headline1: string;
    headline2: string;
    lead: string;
    modulesLabel: string;
    idealForLabel: string;
    inquireBtn: string;
    blueprintKicker: string;
    blueprintTitle: string;
    blueprintSub: string;
    audienceLabel: string;
    objectiveLabel: string;
    scaleLabel: string;
    launchBlueprintBtn: string;
    items: { title: string; subtitle: string; summary: string }[];
  };
  performance: {
    kicker: string;
    h1: string;
    h2: string;
    h3: string;
    lead: string;
    subLead: string;
    overlayLabel: string;
    states: { prepare: string; perform: string; recover: string };
  };
  expert: {
    kicker: string;
    h1: string;
    h2: string;
    inspectAssetsBtn: string;
    hideAssetsBtn: string;
    typoLabBtn: string;
    hideTypoLabBtn: string;
    disclaimerTitle: string;
    disclaimerBody: string;
    pillars: { title: string; subtitle: string; description: string }[];
  };
  community: {
    kicker: string;
    h1: string;
    h2: string;
    lead: string;
    subLead: string;
    ledgerLabel: string;
    previewMetricsBtn: string;
    resetMetricsBtn: string;
    joinCta: string;
    stats: { label: string; subLabel: string; unit: string }[];
  };
  partner: {
    kicker: string;
    h1: string;
    h2: string;
    builtForLabel: string;
    builtForList: string;
    builtForSub: string;
    deliverableKicker: string;
    deliverableTitle: string;
    coCreateCta: string;
    formulaSteps: { name: string; subtitle: string; detail: string }[];
    flywheelKicker: string;
    flywheelHeadline: string;
    flywheelLead: string;
    inspectNodeHint: string;
    flywheelNodes: { label: string; headline: string; description: string }[];
  };
  finalCta: {
    kicker: string;
    h1: string;
    h2: string;
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
    orgLabel: string;
    contactLabel: string;
    typeLabel: string;
    notesLabel: string;
    submitBtn: string;
    cancelBtn: string;
    thankYouTitle: string;
    thankYouSub: string;
  };
}

export const TRANSLATIONS: Record<SupportedLocale, CompactLocalePack> = {
  en: {
    nav: {
      about: 'ABOUT',
      experience: 'EXPERIENCE',
      solutions: 'SOLUTIONS',
      science: 'SCIENCE',
      community: 'COMMUNITY',
      partner: 'PARTNER',
      startProject: 'START A PROJECT',
    },
    hero: {
      kicker: 'JAIKLA DIGITAL CO., LTD. · NEW BUSINESS UNIT',
      line1: 'MOVE BETTER',
      line2: 'LIVE BETTER',
      lead: 'We design active wellness experiences that help people\nunderstand, develop and move their bodies better.',
      secondaryLead:
        'An Active Wellness Experience company uniting allied health science,\nsport performance, intelligent recovery, and community.',
      ctaExplore: 'EXPLORE ACTIVE WELLNESS',
      ctaWork: 'WORK WITH US',
      coreConceptLabel: 'CORE CONCEPT',
      coreConceptFormula: 'Health Knowledge × Sport × Performance × Recovery × Experience × Community',
      positioningLabel: 'POSITIONING',
      positioningTitle: 'Active Wellness Experience Company',
      positioningSub: 'Integrating health science, sport, recovery, and community',
    },
    idea: {
      kicker: '01 · THE IDEA & BRAND POSITIONING',
      notFitness: 'NOT JUST FITNESS',
      notWellness: 'NOT JUST WELLNESS',
      notEvent: 'NOT JUST AN EVENT',
      revealTitle: 'ACTIVE WELLNESS EXPERIENCE',
      body1:
        'JAIKLA ACTIVE WELLNESS is not a hospital, clinical rehabilitation center, bodybuilding gym, or traditional race organizer.\nWe bridge Allied Health knowledge, exercise education, physical recovery, sport activity, and creative production into cohesive human experiences.',
      body2:
        'Built for people who want to truly understand their bodies\nand organizations that want meaningful, lasting wellness culture.',
      compareLabel: 'COMPARE POSITIONING LENS',
      tabs: {
        jaikla: 'JAIKLA Active Wellness',
        clinical: 'vs. Hospital / Clinic',
        gym: 'vs. Conventional Gym',
        event: 'vs. Standard Event',
      },
      headers: {
        focus: 'PRIMARY FOCUS',
        atmosphere: 'ATMOSPHERE',
        outcome: 'HUMAN OUTCOME',
      },
      matrix: {
        jaikla: {
          title: 'JAIKLA ACTIVE WELLNESS',
          subtitle: 'Active Wellness Experience Company',
          focus: 'Turning movement science, warm-up prep, sport, and recovery\ninto hands-on experiences anyone can actually enjoy.',
          atmosphere: 'Warm, welcoming, and professionally guided by caring coaches—\na space to move at your own pace without feeling judged or rushed.',
          outcome: 'People learn to listen to their bodies, move with real confidence,\nrecover well after every session, and look forward to coming back.',
        },
        clinical: {
          title: 'Traditional Hospital / Medical Clinic',
          subtitle: 'Care When Injury or Illness Strikes',
          focus: 'Diagnosing symptoms, treating acute pain, and guiding therapy\nto help patients recover after an injury has already happened.',
          atmosphere: 'Formal and clinical—a place people visit when something hurts,\nrather than somewhere you go on a weekend to feel energized.',
          outcome: 'Essential for medical treatment and acute injury rehabilitation,\nbut not built for everyday movement culture or shared lifestyle.',
        },
        gym: {
          title: 'Conventional Gym / Fitness Studio',
          subtitle: 'Built Around Equipment & High Intensity',
          focus: 'Providing workout machines and high-intensity calorie classes,\noften skipping the basics of how each person’s body actually moves.',
          atmosphere: 'Loud music, bright lights, and everyone in their own headphones—\nwhich can feel intimidating when you are unsure of your form.',
          outcome: 'Great for experienced gym-goers with established workout routines,\nbut beginners often push too hard, get sore, and quietly quit.',
        },
        event: {
          title: 'Standard Race / Event Organizer',
          subtitle: 'Focused on Race-Day Logistics',
          focus: 'Managing registration, bib pickup, and start-line staging\nto get thousands of runners across the finish line on race morning.',
          atmosphere: 'High-energy at the starting horn, but once you cross the finish line\nand grab your medal, everyone packs up and goes home tired.',
          outcome: 'Great race-day memories and finish-line excitement, yet missing\nproper pre-race preparation, recovery care, and training community.',
        },
      },
    },
    journey: {
      kicker: '02 · THE ACTIVE WELLNESS METHODOLOGY',
      autoCycle: 'AUTO-CYCLE STAGES',
      pauseCycle: 'PAUSE PROGRESSION',
      trajectoryLabel: 'KINETIC PROGRESSION TRAJECTORY',
      deliverablesLabel: 'APPLIED EXPERIENCE DELIVERABLES',
      stages: [
        {
          name: 'PREPARE',
          subtitle: 'Body Literacy & Readiness',
          headline: 'Understand your body before movement',
          description:
            'Every sustainable movement journey starts with body literacy—assessing joint mobility, postural alignment, breathing mechanics, and neuromuscular readiness.',
          deliverables: [
            'Movement Readiness Screening',
            'Dynamic Joint Mobility Protocols',
            'Breath & Core Stabilization Primer',
          ],
        },
        {
          name: 'MOVE',
          subtitle: 'Fluid & Confident Locomotion',
          headline: 'Build confidence through better movement',
          description:
            'Translate body awareness into fluid, efficient movement. Progressive experiences that replace hesitation with natural rhythm and coordination.',
          deliverables: [
            'Guided Run & Walk Mechanics',
            'Functional Movement Literacy Sessions',
            'Inclusive Community Pacing Formats',
          ],
        },
        {
          name: 'PERFORM',
          subtitle: 'Strength & Endurance Output',
          headline: 'Develop strength, endurance and performance',
          description:
            'When movement mechanics are sound, performance follows naturally. Combining allied health precision with sports conditioning.',
          deliverables: [
            'Sport-Specific Conditioning Clinics',
            'Strength & Power Progression Labs',
            'Endurance Pacing & Energy Systems',
          ],
        },
        {
          name: 'RECOVER',
          subtitle: 'Applied Recovery Science',
          headline: 'Recover intelligently after exercise',
          description:
            'Adaptation happens during recovery, not just exertion. Integrating myofascial restoration, breath down-regulation, and practical education.',
          deliverables: [
            'Event & Post-Run Recovery Lounges',
            'Guided Myofascial & Mobility Workshops',
            'Office & Corporate Body Reset Stations',
          ],
        },
        {
          name: 'DEVELOP',
          subtitle: 'Sustainable Lifecycle',
          headline: 'Turn movement into sustainable progress',
          description:
            'True wellness is a compounding lifecycle. Building ongoing ecosystems of content, community habits, and measurable progression.',
          deliverables: [
            'Annual Corporate Wellness Ecosystems',
            'Ongoing Run & Movement Club Frameworks',
            'Educational Content & Progression Tracking',
          ],
        },
      ],
    },
    whyJaikla: {
      kicker: '03 · WHY JAIKLA ACTIVE WELLNESS',
      headline1: 'WHERE KNOWLEDGE',
      headline2: 'MEETS EXPERIENCE',
      lead: 'Five interconnected capabilities designed under one roof—combining allied health credibility with JAIKLA DIGITAL’s creative, event, and media execution power.',
      items: [
        {
          title: 'ALLIED HEALTH KNOWLEDGE',
          subtitle: 'Evidence-informed movement literacy',
          description:
            'Translating sports science, biomechanics, and physical wellness into clear, practical guidance.',
        },
        {
          title: 'SPORT & ACTIVITY',
          subtitle: 'Programs built for real human bodies',
          description:
            'From beginner pacing and Active 40+ sessions to endurance preparation structured around safe progression.',
        },
        {
          title: 'EVENT & EXPERIENCE',
          subtitle: 'End-to-end spatial & sensory production',
          description:
            'Choreographing readiness zones, kinetic stages, and intelligent recovery lounges.',
        },
        {
          title: 'CONTENT & MEDIA',
          subtitle: 'Storytelling by JAIKLA DIGITAL',
          description:
            'Turning expert movement knowledge and live activations into high-craft video, editorial, and social ecosystems.',
        },
        {
          title: 'COMMUNITY',
          subtitle: 'Belonging through shared progression',
          description:
            'Cultivating active micro-communities inside organizations, retail spaces, and urban neighborhoods.',
        },
      ],
    },
    solutions: {
      kicker: '04 · BUSINESS SOLUTIONS & FORMATS',
      headline1: 'ACTIVE WELLNESS',
      headline2: 'FOR PEOPLE & ORGANIZATIONS',
      lead: 'Five tailored business solutions designed for modern enterprises, consumer brands, communities, and signature events.',
      modulesLabel: 'SIGNATURE MODULES & PROGRAMS',
      idealForLabel: 'IDEAL FOR',
      inquireBtn: 'DESIGN THIS SOLUTION',
      blueprintKicker: '2027 INTERACTIVE ARCHITECTURE STUDIO',
      blueprintTitle: 'Configure Your Custom Active Wellness Blueprint',
      blueprintSub: 'Select your target audience, objective, and scale to generate a tailored JAIKLA solution.',
      audienceLabel: '01. TARGET AUDIENCE',
      objectiveLabel: '02. PRIMARY OBJECTIVE',
      scaleLabel: '03. PROGRAM SCALE',
      launchBlueprintBtn: 'LAUNCH THIS BLUEPRINT WITH JAIKLA',
      items: [
        {
          title: 'CORPORATE ACTIVE WELLNESS',
          subtitle: 'Energizing movement culture for modern workplaces',
          summary:
            'Transform workplace wellness from passive checkups into science-guided movement programs that reduce fatigue and strengthen team cohesion.',
        },
        {
          title: 'BRAND ACTIVE EXPERIENCE',
          subtitle: 'Credible physical activations for consumer brands',
          summary:
            'Connect sportswear, nutrition, and lifestyle brands with health-conscious audiences through expert-led movement and digital storytelling.',
        },
        {
          title: 'COMMUNITY',
          subtitle: 'Inclusive movement clubs across every generation',
          summary:
            'Structured Run Clubs, Walk Clubs, Active 40+, and beginner fitness formats designed for belonging and longevity.',
        },
        {
          title: 'KNOWLEDGE & WORKSHOP',
          subtitle: 'Hands-on allied health & exercise education labs',
          summary:
            'Interactive workshops—Know Your Body, Know Your Heart, Mobility, Recovery, and Running Education.',
        },
        {
          title: 'SPORT & WELLNESS EXPERIENCE',
          subtitle: 'End-to-end sport events, festivals & corporate games',
          summary:
            'Next-generation sport events and wellness festivals where preparation, performance, and recovery form one cohesive journey.',
        },
      ],
    },
    performance: {
      kicker: '05 · HUMAN PERFORMANCE & RECOVERY SCIENCE',
      h1: 'UNDERSTAND',
      h2: 'RECOVER',
      h3: 'DEVELOP',
      lead: 'Better performance does not begin with pushing harder. It begins with understanding how your body moves.',
      subLead:
        'Intelligent progression balances mechanical load, joint mobility, and autonomic nervous system recovery.',
      overlayLabel: 'INTERACTIVE MOVEMENT STATE OVERLAY (CONCEPTUAL UI VISUALIZATION)',
      states: {
        prepare: '01. Preparation State',
        perform: '02. Active Kinetic Load',
        recover: '03. Autonomic Recovery',
      },
    },
    expert: {
      kicker: '06 · ALLIED HEALTH & EXERCISE LITERACY',
      h1: 'KNOWLEDGE',
      h2: 'BEHIND EVERY MOVEMENT',
      inspectAssetsBtn: 'INSPECT 16 CAMPAIGN ASSETS',
      hideAssetsBtn: 'HIDE CAMPAIGN ARCHIVE',
      typoLabBtn: 'VIEWPORT TYPOGRAPHY LAB',
      hideTypoLabBtn: 'HIDE TYPOGRAPHY ENGINE',
      disclaimerTitle: 'Educational & Wellness Scope:',
      disclaimerBody:
        'JAIKLA ACTIVE WELLNESS provides exercise education, movement preparation, and lifestyle wellness experiences—not medical diagnosis or clinical treatment.',
      pillars: [
        {
          title: 'Body Awareness',
          subtitle: 'Postural alignment & kinesthetic sense',
          description: 'Reading tension, balance, and movement patterns before high-intensity training.',
        },
        {
          title: 'Movement Preparation',
          subtitle: 'Dynamic warm-up & neuromuscular priming',
          description: 'Structured activation routines that prepare tendons, fascia, and joints for load.',
        },
        {
          title: 'Exercise Education',
          subtitle: 'Form literacy & effort calibration',
          description: 'Replacing guesswork with clear, science-backed exercise literacy.',
        },
        {
          title: 'Recovery',
          subtitle: 'Myofascial release & autonomic reset',
          description: 'Active cooldown protocols, foam rolling mechanics, and restorative breathwork.',
        },
        {
          title: 'Mobility',
          subtitle: 'Joint range of motion & control',
          description: 'Unlocking functional freedom across ankles, hips, and thoracic spine.',
        },
        {
          title: 'Strength Development',
          subtitle: 'Joint stability & durable force absorption',
          description: 'Building resilient muscular support that serves everyday life and sport.',
        },
      ],
    },
    community: {
      kicker: '07 · ACTIVE COMMUNITY ECOSYSTEM',
      h1: 'MOVE TOGETHER',
      h2: 'GROW TOGETHER',
      lead: 'Movement becomes sustainable when people belong to a welcoming culture. From urban Run & Walk Clubs to Active 40+ longevity sessions, we build communities that progress together.',
      subLead: 'Designed for real human connection across every pace and starting point.',
      ledgerLabel: 'COMMUNITY LEDGER',
      previewMetricsBtn: 'Preview Counter State',
      resetMetricsBtn: 'Reset to Unfabricated Placeholders',
      joinCta: 'JOIN THE MOVEMENT',
      stats: [
        { label: 'ACTIVITIES', subLabel: 'Movement Formats', unit: 'Formats Ready' },
        { label: 'PARTICIPANTS', subLabel: 'Experience Cohorts', unit: 'Cohort Capacity' },
        { label: 'COMMUNITIES', subLabel: 'Active Chapters', unit: 'Active Chapters' },
        { label: 'PARTNERS', subLabel: 'B2B & Brand Allies', unit: 'Strategic Allies' },
      ],
    },
    partner: {
      kicker: '08 · FOR ORGANIZATIONS, BRANDS & DESTINATIONS',
      h1: 'TURN WELLNESS',
      h2: 'INTO EXPERIENCE',
      builtForLabel: 'BUILT FOR',
      builtForList: 'BRANDS · CORPORATES · RETAIL · SHOPPING CENTERS · SPORT COMMUNITIES',
      builtForSub: 'Strategic partner in transforming health knowledge into high-value brand and organizational experiences.',
      deliverableKicker: 'INTEGRATED TURNKEY DELIVERABLE',
      deliverableTitle: 'ACTIVE WELLNESS SOLUTION',
      coCreateCta: 'CO-CREATE WITH JAIKLA',
      formulaSteps: [
        {
          name: 'Strategy',
          subtitle: 'Insight & Campaign Architecture',
          detail: 'Audience positioning, wellness KPI architecture, and brand alignment',
        },
        {
          name: 'Expert',
          subtitle: 'Allied Health & Movement Specialists',
          detail: 'Allied health specialists, exercise coaches, and curriculum design',
        },
        {
          name: 'Activity',
          subtitle: 'Movement & Recovery Programs',
          detail: 'Tailored mobility, run clubs, workshops, and recovery protocols',
        },
        {
          name: 'Production',
          subtitle: 'Spatial & Event Execution',
          detail: 'Spatial design, stage direction, sensory lighting, and flow operations',
        },
        {
          name: 'Content',
          subtitle: 'Digital Storytelling & Media',
          detail: 'Editorial films, educational reels, and community amplification',
        },
      ],
      flywheelKicker: '09 · THE JAIKLA BUSINESS FLYWHEEL',
      flywheelHeadline: 'COMPOUNDING VALUE ACROSS EVERY CYCLE',
      flywheelLead:
        'Engineered as a continuous flywheel—where expert knowledge fuels physical activity, community retention, actionable data, and digital content.',
      inspectNodeHint: 'CLICK ANY NODE TO INSPECT',
      flywheelNodes: [
        {
          label: 'KNOWLEDGE',
          headline: 'Allied Health & Movement Science Foundation',
          description: 'Every project begins with credible exercise and wellness insight.',
        },
        {
          label: 'ACTIVITY',
          headline: 'Designed Physical Experiences',
          description: 'Knowledge turns into tangible movement—workshops, run clubs, and activations.',
        },
        {
          label: 'COMMUNITY',
          headline: 'Shared Progression & Belonging',
          description: 'Repeated quality activities foster authentic human connection and retention.',
        },
        {
          label: 'DATA',
          headline: 'Participation & Movement Insights',
          description: 'Engagement behaviors and readiness trends inform smarter program iteration.',
        },
        {
          label: 'CONTENT',
          headline: 'Digital Storytelling & Media Amplification',
          description: 'Live human energy and expert insights scale reach far beyond the venue.',
        },
        {
          label: 'CLIENT VALUE',
          headline: 'Measurable Brand Equity & Workforce Vitality',
          description: 'Partners gain authentic brand love, healthier teams, and recurring footfall.',
        },
        {
          label: 'NEW PROJECT',
          headline: 'Compounding Ecosystem Expansion',
          description: 'Success fuels the next cycle of deeper programs and flagship partnerships.',
        },
      ],
    },
    finalCta: {
      kicker: 'KNOWLEDGE × MOVEMENT × EXPERIENCE',
      h1: "LET'S MOVE",
      h2: 'BETTER TOGETHER',
      lead: 'Build your next Active Wellness experience with us.',
      subLead: 'Partner with JAIKLA DIGITAL CO., LTD. for corporate wellness, brand activations, and sport communities.',
      btnStart: 'START A PROJECT',
      btnPartner: 'BECOME A PARTNER',
      btnContact: 'CONTACT JAIKLA',
    },
    modal: {
      title: 'START A PROJECT',
      subtitle: 'Design your next Active Wellness experience with JAIKLA DIGITAL CO., LTD.',
      nameLabel: 'Name *',
      orgLabel: 'Organization / Brand *',
      contactLabel: 'Email or Phone *',
      typeLabel: 'Project Type *',
      notesLabel: 'Context or Objectives (Optional)',
      submitBtn: 'SUBMIT INQUIRY',
      cancelBtn: 'CANCEL',
      thankYouTitle: 'THANK YOU',
      thankYouSub: "LET'S MOVE SOMETHING FORWARD",
    },
  },

  th: {
    nav: {
      about: 'เกี่ยวกับเรา',
      experience: 'ประสบการณ์',
      solutions: 'โซลูชัน',
      science: 'ความรู้เรื่องการเคลื่อนไหว',
      community: 'คอมมูนิตี้',
      partner: 'สำหรับองค์กรและแบรนด์',
      startProject: 'เริ่มโปรเจกต์กับเรา',
    },
    hero: {
      kicker: 'JAIKLA DIGITAL · ACTIVE WELLNESS',
      line1: 'เคลื่อนไหวแบบที่ใช่',
      line2: 'ใช้ชีวิตแบบคุณ',
      lead: 'เราอยากให้เรื่องการดูแลร่างกายเป็นเรื่องที่เข้าใจง่ายและทำได้จริง จึงออกแบบกิจกรรมที่ช่วยให้ผู้คนรู้จักร่างกายของตัวเอง เคลื่อนไหวอย่างมั่นใจ และดูแลตัวเองได้ต่อเนื่อง',
      secondaryLead:
        'JAIKLA ACTIVE WELLNESS เชื่อมความรู้เรื่องร่างกาย กีฬา การเคลื่อนไหว การฟื้นตัว และคอมมูนิตี้ ให้กลายเป็นประสบการณ์ที่คนอยากเข้ามามีส่วนร่วม',
      ctaExplore: 'รู้จัก JAIKLA ACTIVE WELLNESS',
      ctaWork: 'คุยกับเรา',
      coreConceptLabel: 'แนวคิดหลัก',
      coreConceptFormula: 'ความรู้เรื่องร่างกาย × การเคลื่อนไหว × การฟื้นตัว × ประสบการณ์ × คอมมูนิตี้',
      positioningLabel: 'จุดยืนทางธุรกิจ',
      positioningTitle: 'ทีมออกแบบประสบการณ์สุขภาพและการเคลื่อนไหว',
      positioningSub: 'เชื่อมความรู้เรื่องร่างกาย กีฬา การฟื้นตัว และคอมมูนิตี้ให้ทำงานร่วมกัน',
    },
    idea: {
      kicker: '01 · แนวคิดและจุดยืนของแบรนด์',
      notFitness: 'มากกว่าการออกกำลังกาย',
      notWellness: 'มากกว่าคำว่าเวลเนส',
      notEvent: 'มากกว่ากิจกรรมที่จบในวันเดียว',
      revealTitle: 'สุขภาพที่เข้าใจง่าย\nการเคลื่อนไหวที่เข้ากับชีวิตจริง',
      body1:
        'JAIKLA ACTIVE WELLNESS ไม่ได้ตั้งใจมาแทนโรงพยาบาล คลินิก หรือฟิตเนส แต่เข้ามาเติมพื้นที่ระหว่างความรู้เรื่องร่างกายกับการใช้ชีวิตจริง ผ่านกิจกรรมกีฬา การเตรียมตัว การฟื้นตัว คอนเทนต์ และคอมมูนิตี้',
      body2:
        'เราอยากทำให้ความรู้เรื่องร่างกายเข้าถึงง่ายขึ้น เพื่อให้คนดูแลตัวเองได้อย่างมั่นใจ และให้องค์กรหรือแบรนด์สร้างกิจกรรมสุขภาพที่มีความหมายกับผู้เข้าร่วมจริง ๆ',
      compareLabel: 'JAIKLA แตกต่างอย่างไรในโลกของสุขภาพและการเคลื่อนไหว',
      tabs: {
        jaikla: 'JAIKLA ACTIVE WELLNESS',
        clinical: 'โรงพยาบาล / คลินิก',
        gym: 'ยิม / ฟิตเนส',
        event: 'อีเวนต์กีฬา',
      },
      headers: {
        focus: 'จุดเน้นหลัก',
        atmosphere: 'ลักษณะประสบการณ์',
        outcome: 'สิ่งที่ผู้ใช้ได้รับ',
      },
      matrix: {
        jaikla: {
          title: 'JAIKLA ACTIVE WELLNESS',
          subtitle: 'ประสบการณ์สุขภาพที่เชื่อมความรู้ กิจกรรม และคอมมูนิตี้',
          focus:
            'นำความรู้เรื่องร่างกายและการเคลื่อนไหวมาแปลงเป็นกิจกรรมที่เข้าใจง่าย เข้าร่วมได้ และนำกลับไปใช้ต่อในชีวิตประจำวัน',
          atmosphere:
            'เป็นกันเอง เข้าถึงง่าย และมีทีมงานคอยดูแลอย่างเหมาะสม เพื่อให้แต่ละคนได้ขยับในจังหวะของตัวเอง',
          outcome:
            'ผู้เข้าร่วมได้รู้จักร่างกายตัวเองมากขึ้น กล้าเคลื่อนไหวมากขึ้น และมีแนวทางดูแลตัวเองต่อหลังจบกิจกรรม',
        },
        clinical: {
          title: 'โรงพยาบาล / คลินิกทางการแพทย์',
          subtitle: 'การดูแลด้านสุขภาพโดยบุคลากรและระบบทางการแพทย์',
          focus:
            'มุ่งเน้นการประเมิน วินิจฉัย รักษา และฟื้นฟูภายใต้การดูแลของบุคลากรทางการแพทย์ตามความเหมาะสม',
          atmosphere:
            'มีระบบและมาตรฐานการดูแลทางการแพทย์ เหมาะกับผู้ที่ต้องการการประเมินหรือการรักษาเฉพาะด้าน',
          outcome:
            'ช่วยดูแลภาวะสุขภาพหรือการบาดเจ็บตามข้อบ่งชี้และขอบเขตวิชาชีพของบุคลากรทางการแพทย์',
        },
        gym: {
          title: 'ยิมและฟิตเนสรูปแบบเดิม',
          subtitle: 'พื้นที่และโปรแกรมสำหรับการออกกำลังกายและฝึกซ้อม',
          focus:
            'เน้นพื้นที่ อุปกรณ์ คลาส และโปรแกรมฝึก เพื่อให้สมาชิกออกกำลังกายตามเป้าหมายของตนเอง',
          atmosphere:
            'มีรูปแบบตั้งแต่การฝึกด้วยตัวเองไปจนถึงคลาสและการดูแลโดยผู้ฝึกสอน ขึ้นอยู่กับบริการของแต่ละแห่ง',
          outcome:
            'ช่วยให้ผู้ใช้เข้าถึงพื้นที่และรูปแบบการฝึกที่หลากหลาย เพื่อพัฒนาความฟิตตามเป้าหมายส่วนบุคคล',
        },
        event: {
          title: 'ผู้จัดงานอีเวนต์กีฬาทั่วไป',
          subtitle: 'ประสบการณ์กิจกรรมและการแข่งขันในช่วงเวลาของงาน',
          focus:
            'มุ่งออกแบบและบริหารประสบการณ์ของกิจกรรมหรือการแข่งขัน ตั้งแต่การเตรียมงานจนถึงการดูแลผู้เข้าร่วมในวันจริง',
          atmosphere:
            'สร้างบรรยากาศ การมีส่วนร่วม และความประทับใจร่วมกันในช่วงเวลาของกิจกรรม',
          outcome:
            'มอบประสบการณ์และความทรงจำจากกิจกรรม โดยรูปแบบการดูแลก่อนและหลังงานจะแตกต่างกันไปตามผู้จัดแต่ละราย',
        },
      },
    },
    journey: {
      kicker: '02 · กระบวนการ 5 ขั้นตอนของ JAIKLA',
      autoCycle: 'เล่นลำดับอัตโนมัติ',
      pauseCycle: 'หยุดชั่วคราว',
      trajectoryLabel: 'จากการเตรียมตัว สู่การเคลื่อนไหวที่ทำต่อได้',
      deliverablesLabel: 'ตัวอย่างกิจกรรมที่นำไปใช้ได้จริง',
      stages: [
        {
          name: 'เตรียมพร้อม',
          subtitle: 'เตรียมตัวให้พร้อม',
          headline: 'รู้จักความพร้อมของร่างกาย ก่อนเริ่มเคลื่อนไหว',
          description:
            'เริ่มจากชวนผู้เข้าร่วมสังเกตความพร้อมของตัวเอง ทั้งการเคลื่อนไหว ความยืดหยุ่น และความรู้สึกของร่างกาย ก่อนค่อย ๆ เตรียมตัวให้พร้อมสำหรับกิจกรรม',
          deliverables: [
            'การประเมินความพร้อมของการเคลื่อนไหว',
            'โปรแกรมเตรียมความคล่องตัวของข้อต่อ',
            'การฝึกลมหายใจและแกนกลางลำตัว',
          ],
        },
        {
          name: 'เคลื่อนไหว',
          subtitle: 'ขยับอย่างมั่นใจ',
          headline: 'ขยับอย่างมั่นใจ ด้วยพื้นฐานที่เหมาะกับตัวเอง',
          description:
            'นำความเข้าใจนั้นมาใช้กับการเคลื่อนไหวจริง ให้แต่ละคนได้ขยับอย่างเป็นธรรมชาติและมั่นใจในระดับที่เหมาะกับตัวเอง',
          deliverables: [
            'การจัดระเบียบท่าวิ่งและท่าเดิน',
            'คลาสพื้นฐานการเคลื่อนไหวในชีวิตประจำวัน',
            'การแบ่งกลุ่มความเร็วที่ทุกคนเข้าถึงได้',
          ],
        },
        {
          name: 'พัฒนา',
          subtitle: 'พัฒนาอย่างเป็นขั้นตอน',
          headline: 'ค่อย ๆ พัฒนาความแข็งแรง ความทนทาน และความสามารถของร่างกาย',
          description:
            'เมื่อมีพื้นฐานที่ดี เราค่อยต่อยอดความแข็งแรงและความทนทานด้วยกิจกรรมที่วางลำดับอย่างเหมาะสมกับกลุ่มผู้เข้าร่วม',
          deliverables: [
            'กิจกรรมพัฒนาทักษะและสมรรถภาพตามเป้าหมาย',
            'โปรแกรมสร้างความแข็งแรงและพลังกล้ามเนื้อ',
            'การบริหารพลังงานและความทนทานระยะยาว',
          ],
        },
        {
          name: 'ฟื้นฟู',
          subtitle: 'ฟื้นตัวให้เหมาะกับตัวเอง',
          headline: 'ให้เวลาร่างกายฟื้นตัว เพื่อพร้อมสำหรับก้าวต่อไป',
          description:
            'การพักและฟื้นตัวเป็นส่วนหนึ่งของการพัฒนา เราจึงออกแบบช่วงหลังการเคลื่อนไหวให้ผู้เข้าร่วมได้ผ่อนคลาย สังเกตร่างกาย และเรียนรู้วิธีดูแลตัวเอง',
          deliverables: [
            'โซนฟื้นฟูร่างกายหลังจบกิจกรรมและงานวิ่ง',
            'เวิร์กชอปการคลายพังผืดและกล้ามเนื้อ',
            'โปรแกรมรีเซ็ตร่างกายสำหรับคนทำงานออฟฟิศ',
          ],
        },
        {
          name: 'ต่อยอด',
          subtitle: 'ทำต่อให้เป็นส่วนหนึ่งของชีวิต',
          headline: 'เปลี่ยนการเคลื่อนไหวให้เป็นส่วนหนึ่งของชีวิตที่ทำต่อได้จริง',
          description:
            'เป้าหมายไม่ใช่ให้ทุกอย่างจบเมื่อกิจกรรมเลิก แต่ทำให้ความรู้ การเคลื่อนไหว คอมมูนิตี้ และคอนเทนต์ช่วยกันพาคนกลับมาดูแลตัวเองต่อเนื่อง',
          deliverables: [
            'ระบบนิเวศสุขภาพประจำปีสำหรับองค์กร',
            'การบริหารจัดการคลับวิ่งและคอมมูนิตี้ระยะยาว',
            'สื่อการเรียนรู้และการติดตามพัฒนาการต่อเนื่อง',
          ],
        },
      ],
    },
    whyJaikla: {
      kicker: '03 · ทำไมต้อง JAIKLA',
      headline1: 'เมื่อความรู้ที่เข้าใจร่างกาย',
      headline2: 'ได้ทำงานร่วมกับประสบการณ์จริง',
      lead: 'สิ่งที่ JAIKLA ทำได้ดี คือการนำความรู้เรื่องร่างกายมาทำงานร่วมกับการออกแบบกิจกรรม โปรดักชัน คอนเทนต์ และคอมมูนิตี้ เพื่อให้ประสบการณ์สุขภาพเข้าถึงคนได้จริง',
      items: [
        {
          title: 'ความรู้เรื่องร่างกายและการเคลื่อนไหว',
          subtitle: 'องค์ความรู้ด้านวิทยาศาสตร์สุขภาพและการเคลื่อนไหว',
          description: 'ย่อยเรื่องสรีรวิทยาและการเคลื่อนไหวให้เข้าใจง่าย โดยยังรักษาความถูกต้องและนำไปใช้ในชีวิตประจำวันได้',
        },
        {
          title: 'กีฬาและกิจกรรมการเคลื่อนไหว',
          subtitle: 'การออกแบบโปรแกรมกีฬาและกิจกรรมการเคลื่อนไหว',
          description: 'ออกแบบกิจกรรมวิ่ง เดิน และฝึกความแข็งแรงให้เหมาะกับบริบทและระดับของผู้เข้าร่วม',
        },
        {
          title: 'อีเวนต์และประสบการณ์',
          subtitle: 'การสร้างสรรค์อีเวนต์และประสบการณ์สุขภาพรูปแบบใหม่',
          description: 'ดูแลประสบการณ์ตั้งแต่แนวคิด พื้นที่ และโปรดักชัน ไปจนถึงจังหวะการเข้าร่วมกิจกรรมหน้างาน',
        },
        {
          title: 'คอนเทนต์และสื่อดิจิทัล',
          subtitle: 'การผลิตคอนเทนต์และสื่อดิจิทัลด้านสุขภาพยุคใหม่',
          description: 'เปลี่ยนความรู้เรื่องสุขภาพและการเคลื่อนไหวให้เป็นคอนเทนต์ที่คนเข้าใจ อยากดู และนำไปใช้ต่อได้',
        },
        {
          title: 'คอมมูนิตี้ที่ชวนกันขยับและเติบโต',
          subtitle: 'การสร้างคอมมูนิตี้ที่เติบโตและเคลื่อนไหวไปด้วยกัน',
          description: 'สร้างพื้นที่ที่คนรู้สึกสบายใจที่จะเริ่ม เคลื่อนไหวในแบบของตัวเอง และกลับมาทำกิจกรรมร่วมกันได้เรื่อย ๆ',
        },
      ],
    },
    solutions: {
      kicker: '04 · โซลูชันสำหรับผู้คนและองค์กร',
      headline1: 'ประสบการณ์สุขภาพและการเคลื่อนไหว',
      headline2: 'ที่ออกแบบให้เหมาะกับคนและองค์กร',
      lead: 'เราออกแบบบริการเป็น 5 รูปแบบ เพื่อให้เลือกและต่อยอดได้ตามเป้าหมายขององค์กร แบรนด์ คอมมูนิตี้ หรือกิจกรรมแต่ละประเภท',
      modulesLabel: 'โปรแกรมและโมดูลหลัก',
      idealForLabel: 'เหมาะสำหรับ',
      inquireBtn: 'คุยกับเราเรื่องโซลูชันนี้',
      blueprintKicker: 'ลองออกแบบโปรแกรมที่เหมาะกับองค์กรของคุณ',
      blueprintTitle: 'ออกแบบโครงสร้างโปรแกรมสุขภาพและการเคลื่อนไหวสำหรับองค์กร',
      blueprintSub: 'เลือกกลุ่มเป้าหมาย วัตถุประสงค์ และขนาดของโปรแกรม เพื่อดูโครงสร้างที่เหมาะสม',
      audienceLabel: '01. กลุ่มเป้าหมายหลัก',
      objectiveLabel: '02. วัตถุประสงค์ของโปรแกรม',
      scaleLabel: '03. ขนาดผู้เข้าร่วม',
      launchBlueprintBtn: 'ส่งโครงสร้างโปรแกรมนี้เพื่อปรึกษาทีมงาน',
      items: [
        {
          title: 'สุขภาพและการเคลื่อนไหวสำหรับองค์กร',
          subtitle: 'ออกแบบกิจกรรมสุขภาพให้เข้ากับคนและวัฒนธรรมขององค์กร',
          summary:
            'เปลี่ยนกิจกรรมสุขภาพขององค์กรให้ใกล้ชีวิตจริงมากขึ้น ตั้งแต่การขยับระหว่างวัน คลับวิ่ง ไปจนถึงกิจกรรมที่ช่วยให้คนในทีมได้ดูแลตัวเองและใช้เวลาร่วมกัน',
        },
        {
          title: 'แคมเปญและประสบการณ์สำหรับแบรนด์',
          subtitle: 'สร้าง Brand Experience ผ่านกิจกรรมที่คนได้ลงมือมีส่วนร่วม',
          summary:
            'เชื่อมแบรนด์กับผู้คนผ่านกิจกรรมสุขภาพและการเคลื่อนไหวที่มีเหตุผลรองรับ เปิดโอกาสให้ผู้เข้าร่วมได้สัมผัสแบรนด์ผ่านประสบการณ์จริง',
        },
        {
          title: 'คอมมูนิตี้สำหรับคนที่อยากขยับมากขึ้น',
          subtitle: 'ออกแบบและดูแลคอมมูนิตี้ที่ชวนให้คนกลับมาเคลื่อนไหวอย่างต่อเนื่อง',
          summary:
            'สร้างพื้นที่ให้คนหลากหลายระดับได้มาเริ่มต้นและเคลื่อนไหวด้วยกัน ตั้งแต่มือใหม่ วัยทำงาน ไปจนถึงวัย 40+',
        },
        {
          title: 'เวิร์กชอปที่ช่วยให้เข้าใจร่างกาย',
          subtitle: 'เรียนรู้เรื่องร่างกายผ่านกิจกรรมที่เข้าใจง่ายและนำไปใช้ได้จริง',
          summary:
            'เวิร์กชอปที่ชวนผู้เข้าร่วมเรียนรู้เรื่องร่างกายผ่านการลงมือทำ เพื่อกลับไปสังเกตและดูแลตัวเองในชีวิตประจำวันได้ดีขึ้น',
        },
        {
          title: 'อีเวนต์กีฬาและกิจกรรมสุขภาพ',
          subtitle: 'ออกแบบประสบการณ์กีฬาและสุขภาพตั้งแต่แนวคิดจนถึงหน้างาน',
          summary:
            'ออกแบบอีเวนต์กีฬาและกิจกรรมสุขภาพให้เชื่อมต่อกันตั้งแต่ก่อนเริ่ม ระหว่างกิจกรรม จนถึงช่วงพักและดูแลร่างกายหลังจบงาน',
        },
      ],
    },
    performance: {
      kicker: '05 · เข้าใจการเคลื่อนไหวและการฟื้นตัว',
      h1: 'เข้าใจร่างกาย',
      h2: 'ฟื้นตัวอย่างเข้าใจ',
      h3: 'พัฒนาได้อย่างต่อเนื่อง',
      lead: 'การพัฒนาร่างกายไม่จำเป็นต้องเริ่มจากการทำให้หนักขึ้นเสมอไป หลายครั้งจุดเริ่มต้นที่สำคัญคือการรู้ว่าตอนนี้ร่างกายของเราพร้อมแค่ไหนและกำลังเคลื่อนไหวอย่างไร',
      subLead: 'มองทั้งการเตรียมตัว ระดับความหนัก การเคลื่อนไหว และการพักฟื้นให้สัมพันธ์กัน',
      overlayLabel: 'สำรวจองค์ประกอบของการเคลื่อนไหวในแต่ละช่วงกิจกรรม',
      states: {
        prepare: '01. ช่วงเตรียมความพร้อม',
        perform: '02. ช่วงออกแรงและสมรรถภาพ',
        recover: '03. ช่วงพักและฟื้นตัว',
      },
    },
    expert: {
      kicker: '06 · องค์ความรู้เบื้องหลังทุกการเคลื่อนไหว',
      h1: 'ความรู้ที่นำไปใช้ได้จริง',
      h2: 'เพื่อทุกการเคลื่อนไหว',
      inspectAssetsBtn: 'ดูการจัดหมวดหมู่ภาพแคมเปญทั้ง 16 ภาพ',
      hideAssetsBtn: 'ซ่อนตารางภาพแคมเปญ',
      typoLabBtn: 'ระบบคำนวณเลเอาต์อักษรและตัดคำอัจฉริยะ',
      hideTypoLabBtn: 'ซ่อนแผงควบคุมระบบอักษร',
      disclaimerTitle: 'ขอบเขตการให้บริการ:',
      disclaimerBody:
        'JAIKLA ACTIVE WELLNESS เน้นการให้ความรู้ การออกแบบกิจกรรม และการดูแลด้านการเคลื่อนไหวในบริบทสุขภาพและไลฟ์สไตล์ ไม่ใช่บริการตรวจวินิจฉัย รักษา หรือทดแทนคำแนะนำจากบุคลากรทางการแพทย์',
      pillars: [
        {
          title: 'รู้จักและสังเกตร่างกาย',
          subtitle: 'การรับรู้และเข้าใจโครงสร้างร่างกาย',
          description: 'ฝึกสังเกตสมดุลท่าทาง จังหวะการหายใจ และสัญญาณของร่างกายก่อนเริ่มฝึกหนัก',
        },
        {
          title: 'การเตรียมความพร้อมก่อนเคลื่อนไหว',
          subtitle: 'การเตรียมความพร้อมก่อนเคลื่อนไหว',
          description: 'เรียนรู้การวอร์มอัปและเตรียมร่างกายให้สอดคล้องกับกิจกรรมที่กำลังจะทำ',
        },
        {
          title: 'ออกกำลังกายอย่างเข้าใจ',
          subtitle: 'ความรู้ในการออกกำลังกายอย่างมีหลักการ',
          description: 'เข้าใจเหตุผลเบื้องหลังทุกท่าฝึก รู้จักการกะระดับความหนักที่เหมาะสมกับตนเอง',
        },
        {
          title: 'การฟื้นตัวหลังการเคลื่อนไหว',
          subtitle: 'การพักและฟื้นตัวหลังการเคลื่อนไหว',
          description: 'เรียนรู้วิธีผ่อนคลายกล้ามเนื้อ พัก และสังเกตความล้าหลังการเคลื่อนไหว',
        },
        {
          title: 'ความคล่องตัวและช่วงการเคลื่อนไหว',
          subtitle: 'ความยืดหยุ่นและองศาการเคลื่อนไหวของข้อต่อ',
          description: 'พัฒนาช่วงการเคลื่อนไหวของข้อต่อสำคัญ เพื่อให้ทุกก้าวมีความคล่องตัว',
        },
        {
          title: 'ความแข็งแรงที่ใช้ได้ในชีวิตจริง',
          subtitle: 'ความแข็งแรงที่รองรับกิจกรรมในชีวิตจริง',
          description: 'สร้างความแข็งแรงของกล้ามเนื้อและข้อต่อเพื่อรองรับแรงกระแทกในชีวิตจริงและกีฬา',
        },
      ],
    },
    community: {
      kicker: '07 · คอมมูนิตี้ที่ชวนกันเคลื่อนไหว',
      h1: 'เคลื่อนไหวไปด้วยกัน',
      h2: 'เติบโตไปด้วยกัน',
      lead: 'การดูแลตัวเองทำต่อได้ง่ายขึ้นเมื่อมีคนร่วมทาง เราจึงอยากสร้างคอมมูนิตี้ที่คนทุกวัยรู้สึกว่าเข้ามาเริ่มได้ ไม่ต้องเก่งก่อน และไม่ต้องแข่งขันกับใคร',
      subLead: 'ตั้งแต่คลับวิ่ง คลับเดิน กลุ่มวัย 40+ ไปจนถึงคอมมูนิตี้ภายในองค์กร',
      ledgerLabel: 'ดูภาพรวมคอมมูนิตี้',
      previewMetricsBtn: 'จำลองการแสดงผลตัวเลข',
      resetMetricsBtn: 'กลับสู่โหมดโครงสร้างตามจริง',
      joinCta: 'เข้าร่วมคอมมูนิตี้กับเรา',
      stats: [
        { label: 'กิจกรรม', subLabel: 'กิจกรรมการเคลื่อนไหว', unit: 'รูปแบบโปรแกรมพร้อมใช้งาน' },
        { label: 'ผู้เข้าร่วม', subLabel: 'ผู้เข้าร่วมประสบการณ์', unit: 'รองรับทุกขนาดกลุ่ม' },
        { label: 'คอมมูนิตี้', subLabel: 'กลุ่มคอมมูนิตี้', unit: 'คลับและกลุ่มย่อย' },
        { label: 'พาร์ทเนอร์', subLabel: 'พันธมิตรและองค์กร', unit: 'ความร่วมมือธุรกิจ' },
      ],
    },
    partner: {
      kicker: '08 · สำหรับองค์กร แบรนด์ และพื้นที่ไลฟ์สไตล์',
      h1: 'เปลี่ยนเรื่องสุขภาพ',
      h2: 'ให้กลายเป็นประสบการณ์ที่คนอยากมีส่วนร่วม',
      builtForLabel: 'ออกแบบสำหรับ',
      builtForList: 'แบรนด์สินค้า · องค์กรขนาดใหญ่ · รีเทล · ศูนย์การค้า · คอมมูนิตี้กีฬา',
      builtForSub:
        'เราทำงานร่วมกับองค์กรและแบรนด์ตั้งแต่การวางแนวคิด ไปจนถึงกิจกรรมจริง คอนเทนต์ และคอมมูนิตี้ เพื่อให้เรื่องสุขภาพเชื่อมกับเป้าหมายทางธุรกิจได้อย่างเป็นธรรมชาติ',
      deliverableKicker: 'สิ่งที่เราช่วยเชื่อมให้เกิดขึ้น',
      deliverableTitle: 'โซลูชันสุขภาพและการเคลื่อนไหวครบวงจร',
      coCreateCta: 'มาคุยเรื่องโปรเจกต์ของคุณ',
      formulaSteps: [
        {
          name: 'กลยุทธ์',
          subtitle: 'กลยุทธ์แคมเปญและข้อมูลเชิงลึก',
          detail: 'ทำความเข้าใจกลุ่มเป้าหมาย เป้าหมายของโปรเจกต์ และบทบาทที่แบรนด์ควรมีในประสบการณ์',
        },
        {
          name: 'ผู้เชี่ยวชาญ',
          subtitle: 'ทีมผู้เชี่ยวชาญด้านการเคลื่อนไหว',
          detail: 'เชื่อมทีมผู้เชี่ยวชาญที่เหมาะกับเนื้อหาและรูปแบบกิจกรรมของแต่ละโปรเจกต์',
        },
        {
          name: 'กิจกรรม',
          subtitle: 'โปรแกรมการเคลื่อนไหวและการฟื้นฟู',
          detail: 'ออกแบบเวิร์กชอป คลับวิ่ง กิจกรรมสำหรับคนทำงาน และพื้นที่ดูแลหลังการเคลื่อนไหว',
        },
        {
          name: 'โปรดักชัน',
          subtitle: 'โปรดักชันและประสบการณ์หน้างาน',
          detail: 'ดูแลพื้นที่ แสง เสียง การผลิต และการเดินทางของผู้เข้าร่วมตลอดประสบการณ์หน้างาน',
        },
        {
          name: 'คอนเทนต์',
          subtitle: 'คอนเทนต์และสื่อดิจิทัลครบวงจร',
          detail: 'ต่อยอดกิจกรรมเป็นวิดีโอ สื่อความรู้ และคอนเทนต์สำหรับช่องทางดิจิทัล',
        },
      ],
      flywheelKicker: '09 · จากความเชี่ยวชาญสู่ความร่วมมือระยะยาว',
      flywheelHeadline: 'เริ่มจากสิ่งที่เราเชี่ยวชาญ\nแล้วเติบโตไปพร้อมกับพาร์ทเนอร์',
      flywheelLead:
        'เราเริ่มจากสิ่งที่ทีมถนัดจริง ทั้งความรู้เรื่องการเคลื่อนไหว ประสบการณ์หน้างาน โปรดักชัน และคอนเทนต์ แล้วนำทั้งหมดมาประกอบเป็นโปรเจกต์ที่เหมาะกับเป้าหมายของแต่ละพาร์ทเนอร์ ไม่ว่าจะเป็นการดูแลคนในองค์กร การสร้างประสบการณ์ให้ลูกค้า หรือการพัฒนาคอมมูนิตี้ในระยะยาว',
      inspectNodeHint: 'เลือกแต่ละหัวข้อเพื่อดูว่าเราสามารถทำงานร่วมกันอย่างไร',
      flywheelNodes: [
        {
          label: 'องค์ความรู้เฉพาะทาง',
          headline: 'องค์ความรู้และประสบการณ์เฉพาะทาง',
          description:
            'ต่อยอดจากความรู้เรื่องการเคลื่อนไหวและประสบการณ์ลงพื้นที่จริงของทีม เพื่อออกแบบกิจกรรมที่ทั้งเข้าใจง่ายและใช้งานได้จริง',
        },
        {
          label: 'ใส่ใจผู้เข้าร่วม',
          headline: 'ใส่ใจประสบการณ์และผลลัพธ์ของผู้เข้าร่วม',
          description:
            'ให้ความสำคัญกับสิ่งที่ผู้เข้าร่วมได้รับจริง ทั้งความเข้าใจ ความรู้สึก และประสบการณ์ตั้งแต่ต้นจนจบ',
        },
        {
          label: 'เชื่อมบริการ',
          headline: 'เชื่อมบริการหลายด้านให้ทำงานร่วมกัน',
          description:
            'เชื่อมเวิร์กชอป คอมมูนิตี้ กิจกรรมองค์กร โปรดักชันหน้างาน และสื่อดิจิทัลให้ทำงานร่วมกันตามโจทย์',
        },
        {
          label: 'ร่วมมือระยะยาว',
          headline: 'สร้างความร่วมมือที่ต่อยอดได้ในระยะยาว',
          description:
            'วางระบบการทำงานที่ชัดเจน เพื่อให้พาร์ทเนอร์สามารถต่อยอดโปรเจกต์และพัฒนาความร่วมมือในระยะยาว',
        },
        {
          label: 'ดูแลการเคลื่อนไหว',
          headline: 'ดูแลทั้งการเคลื่อนไหว การพัก และการฟื้นตัว',
          description:
            'ออกแบบประสบการณ์ให้มีทั้งช่วงเตรียมตัว การเคลื่อนไหว การพัก และการเรียนรู้วิธีดูแลตัวเองหลังจบกิจกรรม',
        },
        {
          label: 'สร้างคุณค่าให้ผู้คน',
          headline: 'สร้างคุณค่าให้คนในองค์กรและลูกค้าของแบรนด์',
          description:
            'เหมาะกับองค์กรที่ต้องการสร้างกิจกรรมให้คนในทีม หรือแบรนด์ที่อยากสร้างประสบการณ์สุขภาพให้ลูกค้ามีส่วนร่วมจริง',
        },
        {
          label: 'ออกแบบเฉพาะโจทย์',
          headline: 'ออกแบบกิจกรรมให้เข้ากับเป้าหมายของแต่ละพาร์ทเนอร์',
          description:
            'ร่วมคิดและออกแบบกิจกรรมเฉพาะให้สอดคล้องกับเป้าหมาย กลุ่มเป้าหมาย และบุคลิกของแต่ละองค์กรหรือแบรนด์',
        },
      ],
    },
    finalCta: {
      kicker: 'ความรู้สุขภาพ × การเคลื่อนไหว × ประสบการณ์',
      h1: 'มาสร้างการเปลี่ยนแปลง',
      h2: 'ผ่านการเคลื่อนไหวไปด้วยกัน',
      lead: 'ถ้าคุณมีโจทย์เรื่องสุขภาพ การเคลื่อนไหว หรือคอมมูนิตี้ เราอยากช่วยเปลี่ยนโจทย์นั้นให้กลายเป็นประสบการณ์ที่คนอยากเข้าร่วม',
      subLead:
        'คุยกับทีม JAIKLA เพื่อร่วมออกแบบโปรเจกต์ที่เหมาะกับองค์กร แบรนด์ หรือคอมมูนิตี้ของคุณ',
      btnStart: 'เริ่มโปรเจกต์กับเรา',
      btnPartner: 'ร่วมเป็นพาร์ทเนอร์',
      btnContact: 'ติดต่อเรา',
    },
    modal: {
      title: 'เริ่มโปรเจกต์กับเรา',
      subtitle: 'เล่าโจทย์ของคุณให้เราฟัง แล้วมาช่วยกันออกแบบรูปแบบที่เหมาะกับคนและเป้าหมายของโปรเจกต์',
      nameLabel: 'ชื่อผู้ติดต่อ *',
      orgLabel: 'ชื่อองค์กร / แบรนด์ *',
      contactLabel: 'อีเมล หรือ เบอร์โทรศัพท์ *',
      typeLabel: 'รูปแบบโปรเจกต์ที่สนใจ *',
      notesLabel: 'เล่าโจทย์หรือเป้าหมายของโปรเจกต์ (ถ้ามี)',
      submitBtn: 'ส่งข้อมูลให้ทีมงาน',
      cancelBtn: 'ยกเลิก',
      thankYouTitle: 'ขอบคุณที่สนใจร่วมงานกับเรา',
      thankYouSub: 'เราได้รับข้อมูลแล้ว ทีมงานจะติดต่อกลับเพื่อพูดคุยรายละเอียดและทำความเข้าใจโจทย์ของคุณ',
    },
  },

  zh: {
    nav: {
      about: '关于理念',
      experience: '五阶体验',
      solutions: '解决方案',
      science: '运动科学',
      community: '活力社群',
      partner: '商业合作',
      startProject: '启动项目',
    },
    hero: {
      kicker: 'JAIKLA DIGITAL CO., LTD. · 全新活力健康事业部',
      line1: '科学运动',
      line2: '焕活生命',
      lead: '我们设计融合运动科学、体能表现与智能恢复的主动健康体验，帮助人们更深刻地理解身体、科学运动并持续进化。',
      secondaryLead: '融合盟友健康知识、运动表现、身心恢复与社群文化的现代主动健康体验公司。',
      ctaExplore: '探索主动健康体验',
      ctaWork: '与我们合作',
      coreConceptLabel: '核心公式',
      coreConceptFormula: '健康知识 × 运动 × 体能表现 × 科学恢复 × 沉浸体验 × 社群连接',
      positioningLabel: '品牌定位',
      positioningTitle: '主动健康体验设计公司',
      positioningSub: '连接运动科学、体能恢复与现代生活方式',
    },
    idea: {
      kicker: '01 · 核心理念与品牌定位',
      notFitness: '不止于传统健身',
      notWellness: '不止于静态养生',
      notEvent: '不止于单日赛事',
      revealTitle: '全方位主动健康体验',
      body1:
        'JAIKLA ACTIVE WELLNESS 并非医院、传统理疗诊所、健美健身房或普通赛事执行方。我们将运动健康科学、动作准备、体能发展、智能恢复、数字内容与社群运营融为一体。',
      body2: '为渴望理解自身身体的个人，以及追求高价值健康文化的企业与品牌量身打造。',
      compareLabel: '品牌定位对比视角',
      tabs: {
        jaikla: 'JAIKLA 主动健康体验',
        clinical: '对比 传统医院/诊所',
        gym: '对比 传统健身房',
        event: '对比 传统赛事公司',
      },
      headers: {
        focus: '核心重心',
        atmosphere: '空间与氛围',
        outcome: '用户与商业价值',
      },
      matrix: {
        jaikla: {
          title: 'JAIKLA ACTIVE WELLNESS',
          subtitle: '主动健康体验设计公司',
          focus: '整合运动健康知识、动作准备、科学训练、主动恢复与社群文化。',
          atmosphere: '高端运动表现实验室融合现代生活美学——沉稳能量与人体科学。',
          outcome: '让参与者真正理解身体动作机制，更聪明地恢复，并建立长期可持续习惯。',
        },
        clinical: {
          title: '传统医院 / 医疗诊所',
          subtitle: '被动式医疗与伤后康复',
          focus: '疾病诊断、急性症状治疗以及受伤后的临床被动康复。',
          atmosphere: '冰冷的临床医疗环境，缺乏生活方式与社群感染力。',
          outcome: '解决病痛，但难以创造激励人心的品牌与群体运动体验。',
        },
        gym: {
          title: '传统健身房 / 工作室',
          subtitle: '器械租赁与高强度消耗',
          focus: '提供器械或单纯追求热量消耗，往往忽略基础动作控制与身体认知。',
          atmosphere: '刺眼霓虹灯与器械丛林，容易让初学者感到压力与孤立。',
          outcome: '缺乏身体理解的盲目发力容易导致受伤或半途而废。',
        },
        event: {
          title: '传统体育赛事主办方',
          subtitle: '单日赛事执行与物流',
          focus: '单日赛事流程、号码布发放与起终点搭建。',
          atmosphere: '一次性的报名与冲线狂欢，缺乏赛前科学指导与赛后系统恢复。',
          outcome: '热度随冲线而结束，难以沉淀为全年持续活跃的品牌社群。',
        },
      },
    },
    journey: {
      kicker: '02 · 五阶科学运动体验方法论',
      autoCycle: '自动演示流程',
      pauseCycle: '暂停演示',
      trajectoryLabel: '人体动力进阶轨迹',
      deliverablesLabel: '核心落地模块与交付物',
      stages: [
        {
          name: '身体准备',
          subtitle: '01 · 身体认知与准备',
          headline: '在运动之前，先读懂你的身体',
          description: '评估关节灵活性、体态对齐、呼吸力学与神经肌肉激活状态，为高质量动作打下基础。',
          deliverables: ['动作准备度评估筛查', '动态关节灵活性激活', '呼吸与核心稳定启动'],
        },
        {
          name: '自然律动',
          subtitle: '02 · 流畅自信的律动',
          headline: '通过更优质的动作模式建立运动自信',
          description: '将身体觉知转化为流畅高效的步伐与动作，让不同体能起点的参与者都能享受自然律动。',
          deliverables: ['科学跑步与健走步态指导', '功能性动作教育课程', '包容性社群配速分组'],
        },
        {
          name: '体能表现',
          subtitle: '03 · 力量与体能表现',
          headline: '科学提升力量、耐力与运动表现',
          description: '当动作力学稳固后，结合运动科学训练安全提升力量输出、有氧耐力与动作效率。',
          deliverables: ['专项运动表现强化营', '功能性力量与爆发力进阶', '耐力配速与能量系统管理'],
        },
        {
          name: '智能恢复',
          subtitle: '04 · 科学智能恢复',
          headline: '运动之后，以科学方式高效恢复',
          description: '身体的进化发生在恢复期。融合肌筋膜放松、副交感神经呼吸调节与实用恢复教育。',
          deliverables: ['赛后与活动智能恢复专区', '肌筋膜放松与灵活性工作坊', '职场久坐身体重置空间'],
        },
        {
          name: '持续进化',
          subtitle: '05 · 可持续成长生态',
          headline: '将每一次运动转化为可持续的生命成长',
          description: '打造全年持续运转的内容、社群习惯与成长追踪体系，赋能个人与组织长期活力。',
          deliverables: ['企业全年主动健康生态体系', '长效跑团与运动社群运营', '数字化健康内容与进阶追踪'],
        },
      ],
    },
    whyJaikla: {
      kicker: '03 · 为什么选择 JAIKLA',
      headline1: '当运动健康科学',
      headline2: '遇见极致体验设计',
      lead: '五大核心能力融于一体——将专业健康科学背书与 JAIKLA DIGITAL 的创意策划、活动制作及数字媒体实力深度结合。',
      items: [
        {
          title: 'ALLIED HEALTH KNOWLEDGE',
          subtitle: '专业运动健康与生物力学知识',
          description: '将运动生理学与生物力学转化为通俗易懂、即学即用的身体指南。',
        },
        {
          title: 'SPORT & ACTIVITY',
          subtitle: '专为真实人体设计的运动项目',
          description: '从新手健走、40+活力计划到高阶耐力训练，坚持科学渐进负荷。',
        },
        {
          title: 'EVENT & EXPERIENCE',
          subtitle: '端到端空间与感官体验制作',
          description: '精心编排热身激活区、主舞台律动与赛后智能恢复空间。',
        },
        {
          title: 'CONTENT & MEDIA',
          subtitle: 'JAIKLA DIGITAL 高品质数字内容',
          description: '将专业运动知识与现场活力转化为极具传播力的视频与社媒内容。',
        },
        {
          title: 'COMMUNITY',
          subtitle: '在共同进步中建立归属感',
          description: '为企业内部、商业空间与城市街区培育高粘性的活力运动社群。',
        },
      ],
    },
    solutions: {
      kicker: '04 · 面向个人与组织的解决方案',
      headline1: '赋能个人与组织的',
      headline2: '全方位主动健康方案',
      lead: '五大商业解决方案，服务现代企业、消费品牌、城市社群与旗舰级健康盛会。',
      modulesLabel: '核心项目模块',
      idealForLabel: '适用对象',
      inquireBtn: '咨询此解决方案',
      blueprintKicker: '2027 交互式方案配置工作室',
      blueprintTitle: '定制您的专属主动健康体验蓝图',
      blueprintSub: '选择目标受众、核心目标与活动规模，即刻生成 JAIKLA 推荐架构。',
      audienceLabel: '01. 目标受众群体',
      objectiveLabel: '02. 核心项目目标',
      scaleLabel: '03. 参与规模',
      launchBlueprintBtn: '提交此蓝图并与 JAIKLA 团队沟通',
      items: [
        {
          title: 'CORPORATE ACTIVE WELLNESS',
          subtitle: '企业主动健康与员工活力体系',
          summary: '将传统体检福利升级为充满活力的职场运动文化，缓解久坐疲劳并增强团队凝聚力。',
        },
        {
          title: 'BRAND ACTIVE EXPERIENCE',
          subtitle: '消费品牌主动健康体验营销',
          summary: '通过专业教练带领的真实运动体验与高品质内容，帮助运动、营养与生活方式品牌赢得深度信任。',
        },
        {
          title: 'COMMUNITY',
          subtitle: '全龄段活力运动社群运营',
          summary: '涵盖跑团、健走俱乐部、40+长寿活力营与新手运动入门，打造高粘性社群归属感。',
        },
        {
          title: 'KNOWLEDGE & WORKSHOP',
          subtitle: '人体科学认知与实操工作坊',
          summary: '读懂身体、读懂心率、关节灵活性、筋膜恢复与科学跑步专题实验室。',
        },
        {
          title: 'SPORT & WELLNESS EXPERIENCE',
          subtitle: '新一代体育盛事与健康嘉年华',
          summary: '打造集赛前准备、高燃运动表现与赛后科学恢复于一体的标杆级赛事与企业运动会。',
        },
      ],
    },
    performance: {
      kicker: '05 · 人体运动表现与恢复科学',
      h1: '理解身体',
      h2: '科学恢复',
      h3: '持续进化',
      lead: '卓越的运动表现并非始于盲目拼命，而是始于理解你的身体如何正确运动。',
      subLead: '在运动负荷、关节活动度与自主神经系统恢复之间建立精准平衡。',
      overlayLabel: '交互式运动状态数据视图 (概念视觉界面)',
      states: {
        prepare: '01. 动作准备态 (Preparation)',
        perform: '02. 运动输出态 (Performance)',
        recover: '03. 自主神经恢复态 (Recovery)',
      },
    },
    expert: {
      kicker: '06 · 每个动作背后的科学支撑',
      h1: '以科学认知',
      h2: '驱动每一次律动',
      inspectAssetsBtn: '查看 16 张宣传摄影战略分类',
      hideAssetsBtn: '隐藏摄影档案',
      typoLabBtn: '浏览器视口排版与智能分词实验室',
      hideTypoLabBtn: '隐藏排版实验室',
      disclaimerTitle: '健康教育与服务范畴说明：',
      disclaimerBody:
        'JAIKLA ACTIVE WELLNESS 提供运动教育、动作准备、体能发展与主动恢复体验，不提供医疗诊断或临床治疗服务。',
      pillars: [
        {
          title: 'Body Awareness',
          subtitle: '身体觉知与体态对齐',
          description: '在进入高强度训练前，先感知肌肉张力、重心平衡与呼吸模式。',
        },
        {
          title: 'Movement Preparation',
          subtitle: '动态热身与神经激活',
          description: '基于生物力学设计的动态激活流程，让肌腱、筋膜与关节做好准备。',
        },
        {
          title: 'Exercise Education',
          subtitle: '科学运动素养教育',
          description: '用清晰易懂的运动科学取代盲目训练，掌握合理的发力与强度控制。',
        },
        {
          title: 'Recovery',
          subtitle: '运动后主动恢复科学',
          description: '结合泡沫轴肌筋膜放松与呼吸降调，加速身体消除疲劳、重获活力。',
        },
        {
          title: 'Mobility',
          subtitle: '关节灵活性与控制力',
          description: '解锁踝、髋与胸椎的功能性活动度，让每一步都更加自由顺畅。',
        },
        {
          title: 'Strength Development',
          subtitle: '功能性力量与关节稳定',
          description: '建立稳固的肌肉支撑与缓冲能力，服务日常生活与长期运动表现。',
        },
      ],
    },
    community: {
      kicker: '07 · 活力社群生态',
      h1: '一起律动',
      h2: '共同成长',
      lead: '当人们融入温暖包容的社群文化时，运动才能真正持久。从城市跑团、健走俱乐部到 40+ 活力社群，我们陪伴每个人共同进步。',
      subLead: '尊重每一个配速与起点，在真实连接中建立健康生活习惯。',
      ledgerLabel: '社群生态面板',
      previewMetricsBtn: '预览动态计数器演示',
      resetMetricsBtn: '恢复真实占位状态',
      joinCta: '加入活力运动社群',
      stats: [
        { label: 'ACTIVITIES', subLabel: '主题运动项目', unit: '标准化模块就绪' },
        { label: 'PARTICIPANTS', subLabel: '参与体验人次', unit: '多规模承载力' },
        { label: 'COMMUNITIES', subLabel: '活跃社群分部', unit: '城市与企业社群' },
        { label: 'PARTNERS', subLabel: '商业与品牌伙伴', unit: '战略合作生态' },
      ],
    },
    partner: {
      kicker: '08 · 面向企业、品牌与商业空间',
      h1: '将健康理念',
      h2: '转化为非凡体验',
      builtForLabel: '核心服务对象',
      builtForList: '消费品牌 · 企业组织 · 商业零售 · 购物中心 · 运动社群',
      builtForSub: '您的战略合作伙伴，将专业健康知识转化为高价值品牌战役、线下盛事与长期社群资产。',
      deliverableKicker: '一站式整合交付',
      deliverableTitle: 'ACTIVE WELLNESS SOLUTION',
      coCreateCta: '与 JAIKLA 共创项目',
      formulaSteps: [
        {
          name: 'Strategy',
          subtitle: '策略规划与受众洞察',
          detail: '受众定位、健康 KPI 体系设计与品牌价值对齐',
        },
        {
          name: 'Expert',
          subtitle: '运动科学专家与教练团队',
          detail: '运动健康专家、专业教练团队与科学课程研发',
        },
        {
          name: 'Activity',
          subtitle: '定制化运动与恢复项目',
          detail: '灵活性训练、跑团活动、主题工作坊与恢复专区',
        },
        {
          name: 'Production',
          subtitle: '空间设计与现场制作执行',
          detail: '动线设计、舞台灯光氛围与高品质现场运营',
        },
        {
          name: 'Content',
          subtitle: '数字内容与全媒体传播',
          detail: '品牌纪录短片、科普短视频与社群内容裂变',
        },
      ],
      flywheelKicker: '09 · JAIKLA 商业增长飞轮',
      flywheelHeadline: '每一次循环，都在累积复利价值',
      flywheelLead:
        '不同于次日即逝的单次活动，我们的飞轮体系以科学知识驱动运动参与，沉淀社群资产、数据洞察与高传播力内容。',
      inspectNodeHint: '点击任意飞轮节点查看详情',
      flywheelNodes: [
        {
          label: 'KNOWLEDGE',
          headline: '运动健康科学基石',
          description: '每个项目都始于可信赖的运动与健康洞察，建立差异化信任。',
        },
        {
          label: 'ACTIVITY',
          headline: '精心设计的身体律动体验',
          description: '将科学知识转化为工作坊、跑团与现场互动体验。',
        },
        {
          label: 'COMMUNITY',
          headline: '共同成长的社群归属感',
          description: '高频高质的活动沉淀真实人际连接与长期复购参与。',
        },
        {
          label: 'DATA',
          headline: '参与度与动作准备度洞察',
          description: '真实互动反馈与趋势数据指导下一阶段方案的精准迭代。',
        },
        {
          label: 'CONTENT',
          headline: '数字叙事与媒体放大效应',
          description: '将现场能量与专家观点转化为突破场域限制的优质数字内容。',
        },
        {
          label: 'CLIENT VALUE',
          headline: '可衡量的品牌资产与组织活力',
          description: '为合作伙伴赢得深度品牌好感、健康团队与持续客流。',
        },
        {
          label: 'NEW PROJECT',
          headline: '生态复利与新项目延展',
          description: '上一轮的成功自然驱动更深入的年度合作与旗舰级项目。',
        },
      ],
    },
    finalCta: {
      kicker: '健康科学 × 身体律动 × 沉浸体验',
      h1: '让我们一起',
      h2: '科学律动，共创未来',
      lead: '与我们携手打造您的下一个主动健康体验项目。',
      subLead: '联系 JAIKLA DIGITAL CO., LTD. 团队，开启企业健康、品牌激活与运动社群合作。',
      btnStart: '启动项目合作',
      btnPartner: '成为战略伙伴',
      btnContact: '联系 JAIKLA',
    },
    modal: {
      title: '启动项目合作',
      subtitle: '与 JAIKLA DIGITAL CO., LTD. 共创您的主动健康体验项目',
      nameLabel: '联系人姓名 *',
      orgLabel: '企业 / 品牌 / 机构名称 *',
      contactLabel: '电子邮箱 或 联系电话 *',
      typeLabel: '合作项目类型 *',
      notesLabel: '项目背景或核心目标（选填）',
      submitBtn: '提交合作意向',
      cancelBtn: '取消',
      thankYouTitle: '感谢您的垂询',
      thankYouSub: '我们的团队将尽快与您联系，共创精彩项目',
    },
  },

  ko: {
    nav: {
      about: '브랜드 철학',
      experience: '5단계 여정',
      solutions: '솔루션',
      science: '퍼포먼스 과학',
      community: '커뮤니티',
      partner: '비즈니스 파트너십',
      startProject: '프로젝트 문의',
    },
    hero: {
      kicker: 'JAIKLA DIGITAL CO., LTD. · 신규 액티브 웰니스 사업부',
      line1: '더 나은 움직임',
      line2: '더 건강한 삶',
      lead: '사람들이 자신의 신체를 깊이 이해하고, 과학적으로 움직이며, 더 나은 삶을 발전시킬 수 있도록 액티브 웰니스 경험을 설계합니다.',
      secondaryLead: '건강 과학 지식, 스포츠 퍼포먼스, 스마트 리커버리, 커뮤니티를 결합한 액티브 웰니스 경험 디자인 기업',
      ctaExplore: '액티브 웰니스 탐색하기',
      ctaWork: '프로젝트 함께하기',
      coreConceptLabel: '핵심 컨셉',
      coreConceptFormula: '건강 지식 × 스포츠 × 퍼포먼스 × 리커버리 × 경험 디자인 × 커뮤니티',
      positioningLabel: '비즈니스 포지셔닝',
      positioningTitle: '액티브 웰니스 경험 디자인 기업',
      positioningSub: '휴먼 사이언스, 움직임, 회복, 라이프스타일의 결합',
    },
    idea: {
      kicker: '01 · 브랜드 아이디어 및 포지셔닝',
      notFitness: '단순한 피트니스가 아닙니다',
      notWellness: '단순한 휴식형 웰니스가 아닙니다',
      notEvent: '일회성 스포츠 이벤트가 아닙니다',
      revealTitle: '액티브 웰니스 경험',
      body1:
        'JAIKLA ACTIVE WELLNESS는 병원, 물리치료 클리닉, 보디빌딩 헬스장, 혹은 전통적인 마라톤 대행사가 아닙니다. 스포츠 건강 과학, 움직임 준비, 퍼포먼스 향상, 스마트 리커버리, 디지털 콘텐츠와 커뮤니티를 하나의 경험으로 연결합니다.',
      body2: '자신의 몸을 제대로 이해하고 싶은 개인과 지속 가능한 웰니스 문화를 원하는 기업 및 브랜드를 위해 탄생했습니다.',
      compareLabel: '포지셔닝 비교 관점',
      tabs: {
        jaikla: 'JAIKLA 액티브 웰니스',
        clinical: 'vs. 병원 / 클리닉',
        gym: 'vs. 일반 피트니스 센터',
        event: 'vs. 일반 스포츠 이벤트',
      },
      headers: {
        focus: '핵심 초점',
        atmosphere: '공간 및 분위기',
        outcome: '궁극적 변화',
      },
      matrix: {
        jaikla: {
          title: 'JAIKLA ACTIVE WELLNESS',
          subtitle: 'Active Wellness Experience Company',
          focus: '건강 과학 지식, 움직임 준비, 단계별 스포츠 활동, 리커버리 및 커뮤니티의 통합',
          atmosphere: '프리미엄 퍼포먼스 랩과 모던 라이프스타일의 조화—차분한 에너지와 과학적 정밀함',
          outcome: '신체의 움직임 원리를 이해하고 현명하게 회복하며 함께 성장하는 습관을 형성합니다.',
        },
        clinical: {
          title: '전통 병원 / 메디컬 클리닉',
          subtitle: '치료 중심의 사후 의료 서비스',
          focus: '질병 진단, 급성 통증 치료 및 부상 이후의 임상 재활',
          atmosphere: '차가운 임상 환경과 수동적인 환자-의사 관계',
          outcome: '질병 치료에는 필수적이나 영감을 주는 라이프스타일이나 브랜드 경험을 제공하지는 못합니다.',
        },
        gym: {
          title: '기존 헬스장 / 피트니스 스튜디오',
          subtitle: '기구 대여 및 고강도 소모 중심',
          focus: '기초 움직임 교육 없이 칼로리 소모나 외형적 근육 단련에 집중',
          atmosphere: '강렬한 네온 조명과 거울, 초보자에게 위압감을 주는 고립된 환경',
          outcome: '신체 이해 없이 무리하게 운동하다 부상을 입거나 쉽게 중도 포기하게 됩니다.',
        },
        event: {
          title: '일반 스포츠 대회 대행사',
          subtitle: '단발성 대회 운영 및 물류',
          focus: '하루 동안의 대회 진행, 배번표 배부 및 출발/결승선 운영',
          atmosphere: '사전 움직임 교육이나 사후 리커버리 과학이 부족한 일회성 행사',
          outcome: '결승선 통과 후 열기가 사라지며 연중 지속되는 커뮤니티로 이어지지 않습니다.',
        },
      },
    },
    journey: {
      kicker: '02 · 5단계 액티브 웰니스 방법론',
      autoCycle: '자동 진행 재생',
      pauseCycle: '일시 정지',
      trajectoryLabel: '움직임 발전 궤적 (KINETIC TRAJECTORY)',
      deliverablesLabel: '실제 적용 프로그램 및 결과물',
      stages: [
        {
          name: 'PREPARE',
          subtitle: '01 · 신체 이해와 움직임 준비',
          headline: '움직이기 전에 먼저 내 몸을 이해합니다',
          description: '관절 가동성, 자세 정렬, 호흡 메커니즘, 신경근 활성화를 점검하여 부상 없이 움직일 준비를 갖춘니다.',
          deliverables: ['움직임 준비도 스크리닝', '다이내믹 관절 모빌리티 프로토콜', '호흡 및 코어 안정화 프라이머'],
        },
        {
          name: 'MOVE',
          subtitle: '02 · 자연스럽고 자신감 있는 움직임',
          headline: '더 나은 움직임을 통해 신체 자신감을 기릅니다',
          description: '신체 인식을 부드럽고 효율적인 움직임으로 연결하여 누구나 즐겁게 리듬과 협응력을 찾도록 돕습니다.',
          deliverables: ['러닝 및 워킹 메커니즘 코칭', '기능적 움직임 리터러시 세션', '모두를 위한 커뮤니티 페이싱'],
        },
        {
          name: 'PERFORM',
          subtitle: '03 · 근력 및 퍼포먼스 향상',
          headline: '근력, 지구력, 그리고 퍼포먼스를 발전시킵니다',
          description: '올바른 움직임 위에서 스포츠 과학 컨디셔닝을 결합해 근력과 심폐 지구력을 안전하게 끌어올립니다.',
          deliverables: ['스포츠 특화 컨디셔닝 클리닉', '기능적 스트렝스 & 파워 랩', '지구력 페이싱 및 에너지 시스템'],
        },
        {
          name: 'RECOVER',
          subtitle: '04 · 과학적인 스마트 리커버리',
          headline: '운동 후 과학적이고 현명하게 회복합니다',
          description: '성장은 휴식과 회복 중에 일어납니다. 근막 이완, 자율신경 안정 호흡, 실질적인 회복 교육을 제공합니다.',
          deliverables: ['러닝/이벤트 애프터 리커버리 라운지', '근막 이완 & 모빌리티 워크숍', '오피스 바디 리셋 스테이션'],
        },
        {
          name: 'DEVELOP',
          subtitle: '05 · 지속 가능한 성장 생태계',
          headline: '움직임을 지속 가능한 라이프스타일로 만듭니다',
          description: '콘텐츠, 커뮤니티 습관, 성장 트래킹이 결합된 생태계를 통해 개인과 조직의 장기적인 변화를 이끕니다.',
          deliverables: ['기업 연간 웰니스 생태계 구축', '지속형 런클럽 & 무브먼트 클럽', '교육 콘텐츠 및 성장 데이터 트래킹'],
        },
      ],
    },
    whyJaikla: {
      kicker: '03 · 왜 JAIKLA ACTIVE WELLNESS인가',
      headline1: '전문적인 건강 지식이',
      headline2: '특별한 경험과 만나는 곳',
      lead: '보건·운동 과학적 신뢰성과 JAIKLA DIGITAL의 크리에이티브, 이벤트 프로덕션, 미디어 역량을 하나로 결합한 5대 핵심 역량',
      items: [
        {
          title: 'ALLIED HEALTH KNOWLEDGE',
          subtitle: '검증된 운동 과학 및 신체 지식',
          description: '생리학과 생체역학을 누구나 일상과 운동에 즉시 적용할 수 있는 명확한 가이드로 전환합니다.',
        },
        {
          title: 'SPORT & ACTIVITY',
          subtitle: '실제 사람의 몸에 맞춘 스포츠 프로그램',
          description: '입문자 워킹, 액티브 40+부터 지구력 훈련까지 안전하고 점진적인 프로그램을 설계합니다.',
        },
        {
          title: 'EVENT & EXPERIENCE',
          subtitle: '공간과 감각을 아우르는 프로덕션',
          description: '사전 준비 존부터 메인 액티비티, 프리미엄 리커버리 라운지까지 완벽한 동선을 연출합니다.',
        },
        {
          title: 'CONTENT & MEDIA',
          subtitle: 'JAIKLA DIGITAL의 고감도 스토리텔링',
          description: '전문가 지식과 현장의 에너지를 감각적인 캠페인 필름과 디지털 콘텐츠로 확산합니다.',
        },
        {
          title: 'COMMUNITY',
          subtitle: '함께 움직이며 성장하는 소속감',
          description: '기업, 리테일 공간, 도심 속에서 지속적으로 모이고 성장하는 액티브 커뮤니티를 구축합니다.',
        },
      ],
    },
    solutions: {
      kicker: '04 · 개인과 조직을 위한 비즈니스 솔루션',
      headline1: '사람과 조직을 움직이는',
      headline2: '5대 액티브 웰니스 솔루션',
      lead: '현대 기업, 소비자 브랜드, 도심 커뮤니티, 대형 웰니스 페스티벌을 위한 맞춤형 솔루션',
      modulesLabel: '시그니처 모듈 및 프로그램',
      idealForLabel: '추천 대상',
      inquireBtn: '이 솔루션 문의하기',
      blueprintKicker: '2027 인터랙티브 아키텍처 스튜디오',
      blueprintTitle: '맞춤형 액티브 웰니스 블루프린트 설계',
      blueprintSub: '타겟 대상, 핵심 목표, 프로그램 규모를 선택하여 최적화된 JAIKLA 구성을 확인하세요.',
      audienceLabel: '01. 타겟 오디언스',
      objectiveLabel: '02. 핵심 목표',
      scaleLabel: '03. 프로그램 규모',
      launchBlueprintBtn: '이 블루프린트로 JAIKLA에 문의하기',
      items: [
        {
          title: 'CORPORATE ACTIVE WELLNESS',
          subtitle: '기업 임직원을 위한 액티브 웰니스 프로그램',
          summary: '수동적인 건강검진을 넘어 오피스 바디 리셋, 사내 런클럽, 웰니스 챌린지로 활기찬 조직 문화를 만듭니다.',
        },
        {
          title: 'BRAND ACTIVE EXPERIENCE',
          subtitle: '브랜드 가치를 높이는 액티브 웰니스 캠페인',
          summary: '스포츠, 뉴트리션, 라이프스타일 브랜드가 진정성 있는 신체 경험과 콘텐츠로 소비자와 깊이 연결되도록 돕습니다.',
        },
        {
          title: 'COMMUNITY',
          subtitle: '모든 세대를 아우르는 무브먼트 커뮤니티',
          summary: '런클럽, 워크클럽, 액티브 40+, 입문자 피트니스 등 누구나 안전하게 참여하는 커뮤니티를 운영합니다.',
        },
        {
          title: 'KNOWLEDGE & WORKSHOP',
          subtitle: '신체 이해와 회복을 위한 실습형 워크숍',
          summary: '내 몸 알기, 심폐 지구력 이해, 모빌리티, 근막 리커버리, 러닝 교육 등 전문가 주도 워크숍',
        },
        {
          title: 'SPORT & WELLNESS EXPERIENCE',
          subtitle: '차세대 스포츠 이벤트 & 웰니스 페스티벌',
          summary: '준비, 퍼포먼스, 리커버리가 하나의 완벽한 여정으로 이어지는 스포츠 이벤트와 기업 운동회를 제작합니다.',
        },
      ],
    },
    performance: {
      kicker: '05 · 휴먼 퍼포먼스 & 리커버리 사이언스',
      h1: '이해하고',
      h2: '회복하며',
      h3: '발전하다',
      lead: '더 나은 퍼포먼스는 무조건 더 세게 밀어붙이는 데서 시작되지 않습니다. 내 몸이 어떻게 움직이는지 이해하는 것에서 시작됩니다.',
      subLead: '움직임 준비, 운동 부하, 자율신경계 회복의 과학적 균형을 시각화합니다.',
      overlayLabel: '인터랙티브 움직임 상태 오버레이 (컨셉추얼 UI 시각화)',
      states: {
        prepare: '01. 움직임 준비 상태 (Preparation)',
        perform: '02. 액티브 퍼포먼스 부하 (Performance)',
        recover: '03. 자율신경 회복 상태 (Recovery)',
      },
    },
    expert: {
      kicker: '06 · 모든 움직임 뒤에 숨겨진 과학적 지식',
      h1: '모든 움직임을 이끄는',
      h2: '깊이 있는 전문 지식',
      inspectAssetsBtn: '16개 캠페인 사진 전략적 분류 보기',
      hideAssetsBtn: '캠페인 아카이브 닫기',
      typoLabBtn: '브라우저 화면 기반 스마트 타이포그래피 랩',
      hideTypoLabBtn: '타이포그래피 랩 닫기',
      disclaimerTitle: '교육 및 웰니스 서비스 범위 안내:',
      disclaimerBody:
        'JAIKLA ACTIVE WELLNESS는 운동 교육, 움직임 준비, 라이프스타일 웰니스 경험을 제공하며, 의료적 진단이나 임상 치료를 대신하지 않습니다.',
      pillars: [
        {
          title: 'Body Awareness',
          subtitle: '신체 감각 및 정렬 인지',
          description: '고강도 훈련 전 긴장도, 균형, 호흡 패턴을 먼저 읽는 법을 배웁니다.',
        },
        {
          title: 'Movement Preparation',
          subtitle: '다이내믹 웜업 및 신경근 활성화',
          description: '실제 부하에 대비해 힘줄, 근막, 관절을 깨우는 체계적인 준비 루틴',
        },
        {
          title: 'Exercise Education',
          subtitle: '과학적 운동 리터러시 교육',
          description: '막연한 추측 대신 명확한 생체역학 원리와 운동 강도 조절법을 전달합니다.',
        },
        {
          title: 'Recovery',
          subtitle: '스마트 애프터 리커버리',
          description: '근막 이완, 폼롤링 테크닉, 호흡 조절을 통해 피로 회복 속도를 높입니다.',
        },
        {
          title: 'Mobility',
          subtitle: '관절 가동성 및 움직임 자유도',
          description: '발목, 고관절, 흉추의 기능적 가동 범위를 넓혀 부상을 예방합니다.',
        },
        {
          title: 'Strength Development',
          subtitle: '기능적 근력 및 관절 안정성',
          description: '일상과 평생 스포츠를 지탱하는 탄탄한 근육 지지력과 충격 흡수력을 기릅니다.',
        },
      ],
    },
    community: {
      kicker: '07 · 액티브 커뮤니티 생태계',
      h1: '함께 움직이고',
      h2: '함께 성장합니다',
      lead: '환영받는 문화 속에 속할 때 움직임은 지속 가능해집니다. 도심 런클럽부터 액티브 40+ 세션까지 함께 성장하는 커뮤니티를 만듭니다.',
      subLead: '모든 세대와 체력 수준을 포용하는 건강한 연결',
      ledgerLabel: '커뮤니티 레저',
      previewMetricsBtn: '카운터 애니메이션 미리보기',
      resetMetricsBtn: '실제 플레이스홀더 상태로 초기화',
      joinCta: '무브먼트 함께하기',
      stats: [
        { label: 'ACTIVITIES', subLabel: '액티브 프로그램', unit: '모듈 준비 완료' },
        { label: 'PARTICIPANTS', subLabel: '참여자 규모', unit: '맞춤형 코호트' },
        { label: 'COMMUNITIES', subLabel: '커뮤니티 챕터', unit: '도심 및 기업 클럽' },
        { label: 'PARTNERS', subLabel: '비즈니스 파트너', unit: '브랜드 & 기업 동맹' },
      ],
    },
    partner: {
      kicker: '08 · 기업, 브랜드 및 리테일 공간을 위한 파트너십',
      h1: '웰니스를 강력한',
      h2: '브랜드 경험으로 전환하세요',
      builtForLabel: '핵심 파트너 대상',
      builtForList: '브랜드 · 기업 · 리테일 · 쇼핑센터 · 스포츠 커뮤니티',
      builtForSub: '전문 웰니스 지식을 비즈니스 가치를 창출하는 캠페인, 이벤트, 커뮤니티로 전환하는 전략적 파트너',
      deliverableKicker: '통합 턴키 솔루션',
      deliverableTitle: 'ACTIVE WELLNESS SOLUTION',
      coCreateCta: 'JAIKLA와 프로젝트 기획하기',
      formulaSteps: [
        {
          name: 'Strategy',
          subtitle: '캠페인 전략 및 데이터 인사이트',
          detail: '타겟 포지셔닝, 웰니스 KPI 설계 및 브랜드 아이덴티티 정렬',
        },
        {
          name: 'Expert',
          subtitle: '건강 과학 및 움직임 전문가 그룹',
          detail: '스포츠 과학 전문가, 코치진 구성 및 맞춤형 커리큘럼 설계',
        },
        {
          name: 'Activity',
          subtitle: '맞춤형 무브먼트 & 리커버리 활동',
          detail: '모빌리티 세션, 런클럽, 워크숍 및 리커버리 프로토콜',
        },
        {
          name: 'Production',
          subtitle: '공간 연출 및 현장 프로덕션',
          detail: '공간 디자인, 무대 연출, 조명 사운드 및 참가자 동선 운영',
        },
        {
          name: 'Content',
          subtitle: '디지털 스토리텔링 & 미디어 확산',
          detail: '캠페인 필름, 교육용 숏폼 및 소셜 커뮤니티 확산',
        },
      ],
      flywheelKicker: '09 · JAIKLA 비즈니스 플라이휠',
      flywheelHeadline: '사이클마다 축적되는 지속 가능한 가치',
      flywheelLead:
        '하루 만에 끝나는 행사가 아닌, 전문 지식이 신체 활동과 커뮤니티 유지, 데이터 축적, 디지털 콘텐츠로 이어지는 선순환 구조입니다.',
      inspectNodeHint: '각 노드를 클릭하여 세부 내용을 확인하세요',
      flywheelNodes: [
        {
          label: 'KNOWLEDGE',
          headline: '검증된 운동 및 건강 과학 기반',
          description: '모든 프로젝트는 신뢰할 수 있는 움직임 인사이트에서 출발합니다.',
        },
        {
          label: 'ACTIVITY',
          headline: '정교하게 설계된 신체 경험',
          description: '지식을 워크숍, 런클럽, 브랜드 액티베이션 등 실제 움직임으로 전환합니다.',
        },
        {
          label: 'COMMUNITY',
          headline: '함께 성장하는 커뮤니티 소속감',
          description: '양질의 경험이 반복되며 진정한 유대감과 높은 재참여율을 만듭니다.',
        },
        {
          label: 'DATA',
          headline: '참여 및 움직임 인사이트 축적',
          description: '실제 참여 행동과 피드백 데이터를 통해 프로그램을 더욱 정교하게 발전시킵니다.',
        },
        {
          label: 'CONTENT',
          headline: '디지털 스토리텔링 및 미디어 확산',
          description: '현장의 에너지와 전문가 지식을 고품질 콘텐츠로 제작해 도달 범위를 확장합니다.',
        },
        {
          label: 'CLIENT VALUE',
          headline: '측정 가능한 브랜드 가치 및 조직 활력',
          description: '파트너사는 브랜드 호감도, 건강한 임직원, 지속적인 공간 방문객을 얻습니다.',
        },
        {
          label: 'NEW PROJECT',
          headline: '생태계 확장 및 차기 프로젝트 연결',
          description: '성공적인 결과물이 더 큰 규모의 연간 프로그램과 플래그십 파트너십으로 이어집니다.',
        },
      ],
    },
    finalCta: {
      kicker: '건강 과학 × 움직임 × 브랜드 경험',
      h1: '더 나은 움직임을',
      h2: '함께 만들어 갑시다',
      lead: '다음 액티브 웰니스 경험을 JAIKLA와 함께 설계하세요.',
      subLead: '기업 웰니스, 브랜드 캠페인, 스포츠 커뮤니티 구축을 위해 JAIKLA DIGITAL CO., LTD.와 함께하세요.',
      btnStart: '프로젝트 시작하기',
      btnPartner: '파트너십 문의',
      btnContact: 'JAIKLA 연락하기',
    },
    modal: {
      title: '프로젝트 문의하기',
      subtitle: 'JAIKLA DIGITAL CO., LTD.와 함께 새로운 액티브 웰니스 경험을 설계하세요.',
      nameLabel: '담당자 성함 *',
      orgLabel: '기업 / 브랜드 / 단체명 *',
      contactLabel: '이메일 또는 연락처 *',
      typeLabel: '관심 프로젝트 유형 *',
      notesLabel: '프로젝트 배경 또는 목표 (선택사항)',
      submitBtn: '문의 제출하기',
      cancelBtn: '취소',
      thankYouTitle: '감사합니다',
      thankYouSub: '담당 팀에서 검토 후 빠르게 연락드리겠습니다',
    },
  },

  ja: {
    nav: {
      about: 'コンセプト',
      experience: '5つのステージ',
      solutions: 'ソリューション',
      science: 'サイエンス',
      community: 'コミュニティ',
      partner: 'パートナーシップ',
      startProject: 'プロジェクト相談',
    },
    hero: {
      kicker: 'JAIKLA DIGITAL CO., LTD. · 新規事業部',
      line1: 'より良く動き',
      line2: 'より良く生きる',
      lead: '人々が自身の身体を正しく理解し、より良く動き、持続的に成長するための「アクティブ・ウェルネス体験」をデザインします。',
      secondaryLead:
        '健康科学の知見、スポーツ、パフォーマンス、リカバリー、そしてコミュニティを融合するエクスペリエンス・カンパニー',
      ctaExplore: 'アクティブ・ウェルネスを体感する',
      ctaWork: 'プロジェクトを相談する',
      coreConceptLabel: 'コアコンセプト',
      coreConceptFormula: '健康知識 × スポーツ × パフォーマンス × リカバリー × 体験設計 × コミュニティ',
      positioningLabel: 'ポジショニング',
      positioningTitle: 'アクティブ・ウェルネス体験デザイン企業',
      positioningSub: 'ヒューマンサイエンス、身体動作、リカバリー、現代ライフスタイルの融合',
    },
    idea: {
      kicker: '01 · ブランド思想とポジショニング',
      notFitness: '単なるフィットネスではない',
      notWellness: '単なるリラクゼーションでもない',
      notEvent: '単発のスポーツイベントでもない',
      revealTitle: 'アクティブ・ウェルネス体験',
      body1:
        'JAIKLA ACTIVE WELLNESSは、病院やリハビリクリニック、ボディビルジム、従来のイベント運営会社ではありません。運動科学の知見、ムーブメント準備、パフォーマンス向上、スマートなリカバリー、デジタルコンテンツ、コミュニティ構築をひとつの体験へと統合します。',
      body2:
        '自身の身体を深く理解したい生活者と、本質的なウェルネス文化を築きたい企業・ブランドのために設計されています。',
      compareLabel: 'ポジショニング比較レンズ',
      tabs: {
        jaikla: 'JAIKLA アクティブ・ウェルネス',
        clinical: 'vs. 病院・クリニック',
        gym: 'vs. 一般的なジム',
        event: 'vs. 従来のイベント運営',
      },
      headers: {
        focus: '主な焦点',
        atmosphere: '空間とトーン',
        outcome: 'もたらす価値',
      },
      matrix: {
        jaikla: {
          title: 'JAIKLA ACTIVE WELLNESS',
          subtitle: 'Active Wellness Experience Company',
          focus: '運動科学知識、動作準備、段階的なスポーツ活動、リカバリー、コミュニティの統合',
          atmosphere: 'プレミアムなパフォーマンスラボと現代ライフスタイルの融合—静かなエネルギーと科学的精度',
          outcome: '身体の仕組みを理解し、賢く回復し、仲間と共に持続可能な習慣を育みます。',
        },
        clinical: {
          title: '従来の病院・医療クリニック',
          subtitle: '怪我や疾病後の対症療法',
          focus: '疾患の診断、急性症状の治療、負傷後の臨床リハビリテーション',
          atmosphere: '無機質な医療空間と受動的な治療関係',
          outcome: '治療には不可欠ですが、日常を豊かにするライフスタイルやブランド体験は生み出しません。',
        },
        gym: {
          title: '従来のフィットネスジム',
          subtitle: 'マシン提供と高強度な消費',
          focus: '基礎的な身体動作の理解を欠いたままのカロリー消費や筋肥大トレーニング',
          atmosphere: '過度なネオンや鏡、初心者にとって敷居が高く孤立しやすい環境',
          outcome: '身体への理解なしに無理を重ねることで、怪我や早期離脱につながりやすくなります。',
        },
        event: {
          title: '従来のスポーツイベント主催者',
          subtitle: '単日開催の運営ロジスティクス',
          focus: '当日の進行管理、ゼッケン配布、スタート・ゴール設営',
          atmosphere: '事前の動作教育や事後のリカバリー科学が不足した一過性の盛り上がり',
          outcome: 'ゴール後に熱量が途切れ、通年で続くコミュニティや知識の定着には至りません。',
        },
      },
    },
    journey: {
      kicker: '02 · 5段階のアクティブ・ウェルネス・メソッド',
      autoCycle: 'ステージ自動再生',
      pauseCycle: '一時停止',
      trajectoryLabel: 'キネティック・プログレッション軌道',
      deliverablesLabel: '提供プログラム・実装モジュール',
      stages: [
        {
          name: 'PREPARE',
          subtitle: '01 · 身体理解とムーブメント準備',
          headline: '動く前に、まず自分の身体を理解する',
          description:
            '関節の可動域、姿勢アライメント、呼吸メカニクス、神経筋の準備状態を確認し、質の高い動きの土台を作ります。',
          deliverables: [
            'ムーブメント・レディネス評価',
            '動的関節モビリティ・プロトコル',
            '呼吸＆体幹スタビリティ導入',
          ],
        },
        {
          name: 'MOVE',
          subtitle: '02 · 自然で自信に満ちた動き',
          headline: 'より良い動きを通じて、身体への自信を育む',
          description:
            '身体への気づきをスムーズで効率的な動作へと変換。初心者から経験者まで自然なリズムと協調性を身につけます。',
          deliverables: [
            'ランニング＆ウォーキング動作指導',
            'ファンクショナル・ムーブメント講座',
            '誰もが参加できるペース別セッション',
          ],
        },
        {
          name: 'PERFORM',
          subtitle: '03 · 筋力・持久力・パフォーマンス',
          headline: '筋力、持久力、そしてパフォーマンスを高める',
          description:
            '正しい動作フォームの上にスポーツ科学に基づくコンディショニングを重ね、出力と持久力を安全に引き上げます。',
          deliverables: [
            'スポーツ別コンディショニング・クリニック',
            'ストレングス＆パワー向上ラボ',
            '持久力ペーシング＆エネルギー管理',
          ],
        },
        {
          name: 'RECOVER',
          subtitle: '04 · 科学的リカバリー',
          headline: '運動の後は、科学の力で賢く回復する',
          description:
            '身体の適応と成長は回復期にこそ起こります。筋膜リリース、副交感神経を優位にする呼吸、実践的な知識を提供します。',
          deliverables: [
            'イベント＆ラン後のリカバリーラウンジ',
            '筋膜リリース＆モビリティ・ワークショップ',
            'オフィス・ボディリセット・ステーション',
          ],
        },
        {
          name: 'DEVELOP',
          subtitle: '05 · 持続可能な成長エコシステム',
          headline: '日々の動きを、持続可能な成長へとつなげる',
          description:
            '一度きりのイベントで終わらせず、コンテンツ、コミュニティ習慣、成長トラッキングを通じて長期的な変化を支えます。',
          deliverables: [
            '企業向け年間ウェルネス・エコシステム',
            '継続型ラン＆ムーブメントクラブ運営',
            '教育コンテンツ＆プログレッション記録',
          ],
        },
      ],
    },
    whyJaikla: {
      kicker: '03 · JAIKLA ACTIVE WELLNESSの強み',
      headline1: '確かな健康科学の知見と、',
      headline2: '心を動かす体験デザインの融合',
      lead: 'ヘルスサイエンスの信頼性と、JAIKLA DIGITALのクリエイティブ・イベント制作・デジタルメディア力をひとつに統合した5つのケイパビリティ',
      items: [
        {
          title: 'ALLIED HEALTH KNOWLEDGE',
          subtitle: 'エビデンスに基づく運動・身体知識',
          description: 'スポーツ科学やバイオメカニクスを、誰もが日常で実践できる明快なガイドへと翻訳します。',
        },
        {
          title: 'SPORT & ACTIVITY',
          subtitle: '実際の身体に寄り添うプログラム設計',
          description: '初心者向けウォークやActive 40+から持久力強化まで、安全で段階的な負荷設計を行います。',
        },
        {
          title: 'EVENT & EXPERIENCE',
          subtitle: '空間・五感を設計するトータル制作',
          description: '準備ゾーンからメインステージ、リカバリーラウンジまで一貫した体験を演出します。',
        },
        {
          title: 'CONTENT & MEDIA',
          subtitle: 'JAIKLA DIGITALによるストーリーテリング',
          description: '専門知識と現場の熱量を、質の高い映像・エディトリアル・SNSコンテンツへと昇華します。',
        },
        {
          title: 'COMMUNITY',
          subtitle: '共に動き、共に育つコミュニティづくり',
          description: '企業内、商業施設、都市エリアに継続的に集い成長するアクティブ・コミュニティを育てます。',
        },
      ],
    },
    solutions: {
      kicker: '04 · 人と組織のためのソリューション',
      headline1: '人と組織の可能性を広げる',
      headline2: '5つのアクティブ・ウェルネス施策',
      lead: '現代の企業、コンシューマーブランド、地域コミュニティ、大型ウェルネスイベントに向けた包括的ソリューション',
      modulesLabel: '主要モジュール＆プログラム',
      idealForLabel: '対象クライアント',
      inquireBtn: 'このソリューションを相談する',
      blueprintKicker: '2027 インタラクティブ・アーキテクチャ・スタジオ',
      blueprintTitle: 'カスタム・アクティブウェルネス設計図シミュレーター',
      blueprintSub: '対象オーディエンス、主目的、規模を選択して最適なJAIKLAプログラム構成を生成します。',
      audienceLabel: '01. 対象オーディエンス',
      objectiveLabel: '02. 主な目的',
      scaleLabel: '03. プログラム規模',
      launchBlueprintBtn: 'この設計図でJAIKLAに相談する',
      items: [
        {
          title: 'CORPORATE ACTIVE WELLNESS',
          subtitle: '企業・組織向けアクティブ・ウェルネス',
          summary:
            '受動的な健康診断にとどまらず、オフィス・ボディリセットや社内ランクラブを通じて活力ある組織文化を創ります。',
        },
        {
          title: 'BRAND ACTIVE EXPERIENCE',
          subtitle: 'ブランド体験・アクティベーション',
          summary:
            'スポーツ、栄養、ライフスタイルブランドと生活者を、専門家主導のリアルな身体体験とコンテンツで深く結びつけます。',
        },
        {
          title: 'COMMUNITY',
          subtitle: '世代を超えてつながるムーブメント・クラブ',
          summary:
            'ランクラブ、ウォーククラブ、Active 40+、初心者フィットネスなど、誰もが安心して続けられる居場所を作ります。',
        },
        {
          title: 'KNOWLEDGE & WORKSHOP',
          subtitle: '身体と動きを学ぶ実践型ワークショップ',
          description: '',
          summary:
            '「自分の身体を知る」「心拍とペースを知る」モビリティ、リカバリー、ランニング教育の実践ラボ',
        } as unknown as { title: string; subtitle: string; summary: string },
        {
          title: 'SPORT & WELLNESS EXPERIENCE',
          subtitle: '次世代スポーツイベント＆ウェルネスフェスティバル',
          summary:
            '準備・パフォーマンス・リカバリーがひとつの物語としてつながるスポーツイベントや社内運動会をプロデュースします。',
        },
      ],
    },
    performance: {
      kicker: '05 · ヒューマンパフォーマンス＆リカバリー科学',
      h1: '理解する',
      h2: '回復する',
      h3: '進化する',
      lead: '優れたパフォーマンスは、ただ無理に追い込むことからは始まりません。自分の身体がどう動くかを理解することから始まります。',
      subLead: '動作準備、運動負荷、自律神経リカバリーの調和をビジュアライズ',
      overlayLabel: 'インタラクティブ・ムーブメント状態オーバーレイ（概念UI表示）',
      states: {
        prepare: '01. 準備ステート (Preparation)',
        perform: '02. 運動負荷ステート (Performance)',
        recover: '03. 自律神経リカバリー (Recovery)',
      },
    },
    expert: {
      kicker: '06 · すべての動きを支える専門知識',
      h1: 'すべての動きの背後にある、',
      h2: '確かなサイエンスと知恵',
      inspectAssetsBtn: '16枚のキャンペーン写真の戦略的分類を見る',
      hideAssetsBtn: 'アーカイブを閉じる',
      typoLabBtn: '画面サイズ連動・多言語タイポグラフィラボ',
      hideTypoLabBtn: 'タイポグラフィラボを閉じる',
      disclaimerTitle: '教育およびウェルネス領域に関する注記：',
      disclaimerBody:
        'JAIKLA ACTIVE WELLNESSは運動教育、動作準備、ライフスタイルとしてのウェルネス体験を提供するものであり、医療診断や治療を行うものではありません。',
      pillars: [
        {
          title: 'Body Awareness',
          subtitle: '身体感覚と姿勢の気づき',
          description: '高強度な運動の前に、筋肉の緊張や重心バランス、呼吸の浅さを読み取る力を養います。',
        },
        {
          title: 'Movement Preparation',
          subtitle: '動的ウォームアップと神経筋の活性化',
          description: 'バイオメカニクスに基づき、腱・筋膜・関節を実際の負荷に向けて整えます。',
        },
        {
          title: 'Exercise Education',
          subtitle: '科学的根拠に基づく運動リテラシー',
          description: '思い込みや過度な根性論を排し、正しいフォームと適切な強度設定を学びます。',
        },
        {
          title: 'Recovery',
          subtitle: 'スマート・リカバリーの実践',
          description: '筋膜リリースや呼吸によるクールダウンで疲労を軽減し、次の動きへの準備を整えます。',
        },
        {
          title: 'Mobility',
          subtitle: '関節の可動性と自由なコントロール',
          description: '足首、股関節、胸椎の機能的な可動域を広げ、しなやかで怪我のない動きを実現します。',
        },
        {
          title: 'Strength Development',
          subtitle: '機能的な筋力と関節の安定性',
          description: '日常の動作から生涯スポーツまでを支える、強靭でしなやかな身体基盤を構築します。',
        },
      ],
    },
    community: {
      kicker: '07 · アクティブ・コミュニティ・エコシステム',
      h1: '共に動き、',
      h2: '共に成長する',
      lead: '温かいコミュニティのつながりがあるとき、運動は一生モノの習慣になります。都市型ラン＆ウォーククラブからActive 40+まで、共に歩む文化を育てます。',
      subLead: 'あらゆる世代・走力・スタートラインを歓迎するインクルーシブな設計',
      ledgerLabel: 'コミュニティ・レジャー',
      previewMetricsBtn: 'カウンター演出をプレビュー',
      resetMetricsBtn: '実データ待機状態に戻す',
      joinCta: 'ムーブメントに参加する',
      stats: [
        { label: 'ACTIVITIES', subLabel: 'アクティビティ', unit: 'プログラム体系完備' },
        { label: 'PARTICIPANTS', subLabel: '参加者コホート', unit: '柔軟な規模設計' },
        { label: 'COMMUNITIES', subLabel: 'コミュニティ支部', unit: '都市＆企業クラブ' },
        { label: 'PARTNERS', subLabel: 'パートナー企業', unit: 'ブランド＆B2B連携' },
      ],
    },
    partner: {
      kicker: '08 · 企業・ブランド・商業施設とのパートナーシップ',
      h1: 'ウェルネスを、記憶に残る',
      h2: 'ブランド体験へと昇華する',
      builtForLabel: '対象パートナー',
      builtForList: 'ブランド · 企業法人 · リテール · 商業施設 · スポーツコミュニティ',
      builtForSub: '健康知識をビジネス価値あるキャンペーン、イベント、コミュニティへと変換する戦略的パートナー',
      deliverableKicker: '統合ターンキー・ソリューション',
      deliverableTitle: 'ACTIVE WELLNESS SOLUTION',
      coCreateCta: 'JAIKLAと共創する',
      formulaSteps: [
        {
          name: 'Strategy',
          subtitle: '戦略設計＆インサイト分析',
          detail: 'ターゲット設定、ウェルネスKPI設計、ブランド価値との統合',
        },
        {
          name: 'Expert',
          subtitle: '健康科学＆ムーブメント専門家',
          detail: 'スポーツ科学スペシャリスト、コーチ陣、独自カリキュラム開発',
        },
        {
          name: 'Activity',
          subtitle: 'ムーブメント＆リカバリー施策',
          detail: 'モビリティ、ランクラブ、実践ワークショップ、リカバリー設計',
        },
        {
          name: 'Production',
          subtitle: '空間演出＆イベント制作進行',
          detail: '会場空間デザイン、ステージ演出、照明・音響、スムーズな運営',
        },
        {
          name: 'Content',
          subtitle: 'デジタルコンテンツ＆メディア発信',
          detail: 'ブランドムービー、教育リール動画、SNSコミュニティ拡散',
        },
      ],
      flywheelKicker: '09 · JAIKLA ビジネス・フライホイール',
      flywheelHeadline: 'サイクルを重ねるごとに増幅する提供価値',
      flywheelLead:
        '単発で終わるイベントではなく、専門知識がアクティビティを生み、コミュニティの定着、データの蓄積、デジタルコンテンツへと循環するエコシステムです。',
      inspectNodeHint: '各ノードをクリックして詳細を表示',
      flywheelNodes: [
        {
          label: 'KNOWLEDGE',
          headline: '運動科学・ウェルネス知識の基盤',
          description: 'すべてのプロジェクトは信頼性の高い身体と動きのインサイトから始まります。',
        },
        {
          label: 'ACTIVITY',
          headline: '緻密に設計された身体アクティビティ',
          description: '知識をワークショップやランクラブ、体験イベントというリアルな動きへ変換します。',
        },
        {
          label: 'COMMUNITY',
          headline: '共に成長するコミュニティの絆',
          description: '質の高い体験の継続が、自然なつながりと高いリピート参加を生み出します。',
        },
        {
          label: 'DATA',
          headline: '参加データ＆ムーブメント傾向の把握',
          description: '実際の参加状況やフィードバックをもとに、次回プログラムをより精緻に改善します。',
        },
        {
          label: 'CONTENT',
          headline: 'デジタルストーリーテリング＆拡散',
          description: '現場の熱量と専門家の知見をデジタルメディア化し、会場外へ広く届けます。',
        },
        {
          label: 'CLIENT VALUE',
          headline: 'ブランド価値向上と組織の活性化',
          description: 'パートナーに深いブランド好意度、健康な組織、継続的な集客をもたらします。',
        },
        {
          label: 'NEW PROJECT',
          headline: 'エコシステムの拡大と次期プロジェクト',
          description: '確かな成果が原動力となり、より大規模な年間施策や新規プロジェクトへと発展します。',
        },
      ],
    },
    finalCta: {
      kicker: '健康科学 × ムーブメント × 体験デザイン',
      h1: 'より良い動きと未来を、',
      h2: '共に創り出しましょう',
      lead: 'あなたの次の「アクティブ・ウェルネス体験」を私たちと共に',
      subLead: '企業ウェルネス、ブランドアクティベーション、コミュニティ構築についてJAIKLA DIGITALへご相談ください。',
      btnStart: 'プロジェクトを始める',
      btnPartner: 'パートナーになる',
      btnContact: 'お問い合わせ',
    },
    modal: {
      title: 'プロジェクトのご相談',
      subtitle: 'JAIKLA DIGITAL CO., LTD. と共に新しいアクティブ・ウェルネス体験をデザインしましょう。',
      nameLabel: 'お名前 *',
      orgLabel: '貴社名・ブランド・団体名 *',
      contactLabel: 'メールアドレス または 電話番号 *',
      typeLabel: 'ご希望のプロジェクト種別 *',
      notesLabel: '背景・目的・ご要望（任意）',
      submitBtn: '送信する',
      cancelBtn: 'キャンセル',
      thankYouTitle: 'ありがとうございます',
      thankYouSub: '担当者より速やかにご連絡いたします',
    },
  },

  ar: {
    nav: {
      about: 'عن الرؤية',
      experience: 'التجربة الخماسية',
      solutions: 'الحلول',
      science: 'علوم الأداء',
      community: 'المجتمع',
      partner: 'الشراكات',
      startProject: 'ابدأ مشروعاً',
    },
    hero: {
      kicker: 'شركة جايكلا ديجيتال المحدودة · وحدة الأعمال الجديدة',
      line1: 'تحرّك بشكل أفضل',
      line2: 'عِش حياة أفضل',
      lead: 'نصمم تجارب عافية نشطة تساعد الأفراد على فهم أجسامهم وتطوير حركتهم والارتقاء بجودة حياتهم بشكل مستدام.',
      secondaryLead: 'شركة متخصصة في تصميم تجارب العافية النشطة التي تجمع بين المعرفة الصحية والرياضة والأداء والاستشفاء والمجتمع.',
      ctaExplore: 'استكشف العافية النشطة',
      ctaWork: 'اعمل معنا',
      coreConceptLabel: 'المفهوم الأساسي',
      coreConceptFormula: 'المعرفة الصحية × الرياضة × الأداء × الاستشفاء × التجربة × المجتمع',
      positioningLabel: 'التموضع الاستراتيجي',
      positioningTitle: 'شركة تجارب العافية النشطة',
      positioningSub: 'دمج علوم الحركة البشرية والاستشفاء وأسلوب الحياة العصري',
    },
    idea: {
      kicker: '01 · الفكرة والتموضع الاستراتيجي',
      notFitness: 'ليست مجرد لياقة بدنية',
      notWellness: 'ليست مجرد عافية تقليدية',
      notEvent: 'وليست مجرد فعالية عابرة',
      revealTitle: 'تجربة العافية النشطة',
      body1:
        'إن JAIKLA ACTIVE WELLNESS ليست مستشفى أو عيادة علاج طبيعي أو نادياً لكمال الأجسام أو منظم سباقات تقليدي. نحن نربط بين علوم الصحة المساندة، وتهيئة الحركة، وتطوير الأداء، والاستشفاء الذكي، والإنتاج الإبداعي لبناء تجارب إنسانية متكاملة.',
      body2: 'مصممة للأفراد الراغبين في فهم أجسامهم، وللمؤسسات والعلامات التجارية الساعية لبناء ثقافة صحية ملهمة.',
      compareLabel: 'مقارنة منظور التموضع',
      tabs: {
        jaikla: 'عافية جايكلا النشطة',
        clinical: 'مقابل المستشفيات والعيادات',
        gym: 'مقابل الصالات الرياضية التقليدية',
        event: 'مقابل منظمي الفعاليات التقليديين',
      },
      headers: {
        focus: 'التركيز الأساسي',
        atmosphere: 'الأجواء والبيئة',
        outcome: 'الأثر الإنساني',
      },
      matrix: {
        jaikla: {
          title: 'JAIKLA ACTIVE WELLNESS',
          subtitle: 'شركة تجارب العافية النشطة',
          focus: 'تكامل المعرفة الصحية، وتهيئة الحركة، والنشاط الرياضي المتدرج، والاستشفاء، وبناء المجتمع.',
          atmosphere: 'مختبر أداء راقٍ يلتقي بثقافة الحياة العصرية — طاقة هادئة ودقة علمية.',
          outcome: 'يفهم المشاركون آلية حركة أجسامهم، ويتعافون بذكاء، ويبنون عادات مستدامة معاً.',
        },
        clinical: {
          title: 'المستشفى / العيادة الطبية التقليدية',
          subtitle: 'رعاية علاجية بعد حدوث الإصابة',
          focus: 'تشخيص الأمراض وعلاج الأعراض الحادة والتأهيل السريري بعد الإصابة.',
          atmosphere: 'أجواء طبية رسمية تركز على العلاج التفاعلي للمرضى.',
          outcome: 'تعالج الإصابات، لكنها لا تصمم تجارب أسلوب حياة أو مجتمعات ملهمة.',
        },
        gym: {
          title: 'الصالة الرياضية التقليدية',
          subtitle: 'تأجير المعدات والجهد العالي',
          focus: 'التركيز على حرق السعرات أو كمال الأجسام دون تأسيس وعي حركي سليم.',
          atmosphere: 'إضاءة صاخبة وآلات قدربما تشعر المبتدئين بالرهبة أو العزلة.',
          outcome: 'إجهاد مفرط أو إصابات نتيجة غياب الفهم الأساسي لطبيعة الجسم.',
        },
        event: {
          title: 'منظم السباقات والفعاليات التقليدي',
          subtitle: 'إدارة لوجستيات ليوم واحد',
          focus: 'تنظيم يوم السباق وتوزيع الأرقام وبوابة البداية والنهاية فقط.',
          atmosphere: 'حماس مؤقت ينتهي بعبور خط النهاية مع غياب علوم الاستشفاء.',
          outcome: 'يتلاشى الأثر بعد انتهاء الحدث دون بناء مجتمع أو معرفة مستمرة طوال العام.',
        },
      },
    },
    journey: {
      kicker: '02 · منهجية العافية النشطة ذات المراحل الخمس',
      autoCycle: 'تشغيل تلقائي للمراحل',
      pauseCycle: 'إيقاف مؤقت',
      trajectoryLabel: 'مسار التطور الحركي (KINETIC TRAJECTORY)',
      deliverablesLabel: 'البرامج والمخرجات التطبيقية',
      stages: [
        {
          name: 'PREPARE',
          subtitle: '01 · الوعي الجسدي والتهيئة',
          headline: 'افهم جسمك قبل أن تبدأ بالحركة',
          description:
            'تبدأ كل رحلة حركة مستدامة بفهم الجسم — تقييم مرونة المفاصل، وتوازن القوام، وآليات التنفس، والجاهزية العصبية العضلية.',
          deliverables: ['فحص جاهزية الحركة والقوام', 'بروتوكولات مرونة المفاصل الديناميكية', 'تأسيس التنفس وثبات الجذع'],
        },
        {
          name: 'MOVE',
          subtitle: '02 · حركة انسيابية وواثقة',
          headline: 'ابنِ ثقتك من خلال حركة أفضل وأكثر توازناً',
          description:
            'تحويل الوعي الجسدي إلى حركة سلسة وفعالة تمنح المشاركين من مختلف المستويات إيقاعاً طبيعياً وثقة عالية.',
          deliverables: ['توجيه ميكانيكا الجري والمشي', 'جلسات الثقافة الحركية الوظيفية', 'مجموعات سرعة شاملة للجميع'],
        },
        {
          name: 'PERFORM',
          subtitle: '03 · تطوير القوة والأداء',
          headline: 'طوّر القوة، والقدرة على التحمل، والأداء البدني',
          description:
            'عندما تكون أسس الحركة سليمة، يرتقي الأداء بشكل طبيعي عبر دمج علوم الرياضة بالتدريب المتدرج الآمن.',
          deliverables: ['عيادات الإعداد البدني الرياضي', 'مختبرات تطوير القوة والقدرة', 'إدارة التحمل وأنظمة الطاقة'],
        },
        {
          name: 'RECOVER',
          subtitle: '04 · علوم الاستشفاء الذكي',
          headline: 'استعد عافيتك بذكاء بعد المجهود البدني',
          description:
            'يتطور الجسم أثناء فترة الاستشفاء. ندمج تقنيات تحرير اللفافة العضلية، وتنظيم التنفس العصبي، والتثقيف العملي.',
          deliverables: ['صالات الاستشفاء بعد السباقات والفعاليات', 'ورش عمل تحرير العضلات والمرونة', 'محطات إعادة توازن الجسم للمكاتب'],
        },
        {
          name: 'DEVELOP',
          subtitle: '05 · تطور مستدام طويل الأمد',
          headline: 'حوّل الحركة إلى تقدم مستدام وأسلوب حياة',
          description:
            'العافية الحقيقية دورة حياة متراكمة تجمع بين المحتوى التعليمي، وعادات المجتمع، ومتابعة التقدم للأفراد والمؤسسات.',
          deliverables: ['منظومات العافية السنوية للشركات', 'إدارة أندية الجري والحركة المستمرة', 'المحتوى الرقمي ومتابعة التطور'],
        },
      ],
    },
    whyJaikla: {
      kicker: '03 · لماذا JAIKLA ACTIVE WELLNESS',
      headline1: 'حيث تلتقي المعرفة العلمية',
      headline2: 'بتصميم التجربة الاستثنائية',
      lead: 'خمس قدرات مترابطة تحت سقف واحد — تجمع بين الموثوقية العلمية الصحية وقوة JAIKLA DIGITAL في الإبداع وتنظيم الفعاليات والإعلام الرقمي.',
      items: [
        {
          title: 'ALLIED HEALTH KNOWLEDGE',
          subtitle: 'المعرفة الصحية وعلوم الحركة',
          description: 'تبسيط علوم الرياضة والميكانيكا الحيوية إلى إرشادات عملية واضحة قابلة للتطبيق الفوري.',
        },
        {
          title: 'SPORT & ACTIVITY',
          subtitle: 'برامج رياضية مصممة للأجسام الحقيقية',
          description: 'من المشي للمبتدئين وبرامج 40+ النشطة إلى تدريبات التحمل المبنية على التدرج الآمن.',
        },
        {
          title: 'EVENT & EXPERIENCE',
          subtitle: 'إنتاج متكامل للمساحات والتجارب الحسية',
          description: 'تصميم رحلة متكاملة تبدأ من مناطق التهيئة وتمتد إلى منصات النشاط وصالات الاستشفاء.',
        },
        {
          title: 'CONTENT & MEDIA',
          subtitle: 'صناعة المحتوى والسرد القصصي الرقمي',
          description: 'تحويل المعرفة العلمية وطاقة الفعاليات الحية إلى أفلام ومحتوى رقمي عالي التأثير.',
        },
        {
          title: 'COMMUNITY',
          subtitle: 'الانتماء من خلال التقدم المشترك',
          description: 'بناء مجتمعات نشطة ومستدامة داخل الشركات والمراكز التجارية والأحياء الحضرية.',
        },
      ],
    },
    solutions: {
      kicker: '04 · حلول الأعمال للأفراد والمؤسسات',
      headline1: 'العافية النشطة',
      headline2: 'للأفراد والمؤسسات الحديثة',
      lead: 'خمسة حلول أعمال متكاملة مصممة للشركات الكبرى، والعلامات التجارية، والمجتمعات، والفعاليات الرياضية.',
      modulesLabel: 'الوحدات والبرامج الرئيسية',
      idealForLabel: 'مثالي لـ',
      inquireBtn: 'استفسر عن هذا الحل',
      blueprintKicker: 'استوديو تصميم التجارب التفاعلي 2027',
      blueprintTitle: 'صمم مخطط تجربة العافية النشطة الخاص بك',
      blueprintSub: 'اختر الجمهور المستهدف والهدف الرئيسي وحجم البرنامج للحصول على توصية مخصصة من JAIKLA.',
      audienceLabel: '01. الجمهور المستهدف',
      objectiveLabel: '02. الهدف الرئيسي',
      scaleLabel: '03. حجم البرنامج',
      launchBlueprintBtn: 'أرسل هذا المخطط لفريق JAIKLA',
      items: [
        {
          title: 'CORPORATE ACTIVE WELLNESS',
          subtitle: 'برامج العافية النشطة للشركات وفرق العمل',
          summary: 'تحويل برامج صحة الموظفين إلى ثقافة حركية حيوية تقلل إجهاد المكاتب وتعزز ترابط الفريق.',
        },
        {
          title: 'BRAND ACTIVE EXPERIENCE',
          subtitle: 'تفعيل العلامات التجارية عبر تجارب العافية',
          summary: 'ربط علامات الرياضة والتغذية وأسلوب الحياة بالجمهور عبر تجارب حركية موثوقة يقودها خبراء.',
        },
        {
          title: 'COMMUNITY',
          subtitle: 'أندية ومجتمعات الحركة لجميع الأجيال',
          summary: 'أندية الجري والمشي وبرامج 40+ النشطة ولياقة المبتدئين في بيئة ترحيبية آمنة.',
        },
        {
          title: 'KNOWLEDGE & WORKSHOP',
          subtitle: 'ورش عمل تطبيقية لفهم الجسم والحركة',
          summary: 'مختبرات تعليمية عملية: اعرف جسمك، اعرف قلبك، المرونة، الاستشفاء، وتعليم الجري السليم.',
        },
        {
          title: 'SPORT & WELLNESS EXPERIENCE',
          subtitle: 'الفعاليات الرياضية ومهرجانات العافية المتكاملة',
          summary: 'تصميم جيل جديد من الفعاليات الرياضية وألعاب الشركات التي تجمع التهيئة والأداء والاستشفاء.',
        },
      ],
    },
    performance: {
      kicker: '05 · الأداء البشري وعلوم الاستشفاء',
      h1: 'افهم',
      h2: 'تعافَ',
      h3: 'تطوّر',
      lead: 'الأداء الأفضل لا يبدأ بالضغط القاسي على النفس، بل يبدأ بفهم كيف يتحرك جسمك.',
      subLead: 'موازنة دقيقة بين تهيئة المفاصل، والحمل الحركي، واستشفاء الجهاز العصبي.',
      overlayLabel: 'عرض تفاعلي لحالات الحركة والاستشفاء (واجهة بصرية مفاهيمية)',
      states: {
        prepare: '01. حالة التهيئة (Preparation)',
        perform: '02. الحمل الحركي النشط (Performance)',
        recover: '03. الاستشفاء العصبي (Recovery)',
      },
    },
    expert: {
      kicker: '06 · المعرفة العلمية وراء كل حركة',
      h1: 'معرفة رصينة',
      h2: 'تقود كل حركة',
      inspectAssetsBtn: 'استعراض التصنيف الاستراتيجي لـ 16 صورة',
      hideAssetsBtn: 'إخفاء أرشيف الصور',
      typoLabBtn: 'مختبر الخطوط وتقسيم الكلمات الذكي حسب الشاشة',
      hideTypoLabBtn: 'إخفاء مختبر الخطوط',
      disclaimerTitle: 'نطاق التثقيف والعافية:',
      disclaimerBody:
        'تقدم JAIKLA ACTIVE WELLNESS تثقيفاً رياضياً وتهيئة حركية وتجارب عافية، ولا تقدم تشخيصاً طبياً أو علاجاً سريرياً.',
      pillars: [
        {
          title: 'Body Awareness',
          subtitle: 'الوعي الجسدي وتوازن القوام',
          description: 'تعلم قراءة التوتر العضلي والتوازن وأنماط التنفس قبل البدء بالتدريبات العالية.',
        },
        {
          title: 'Movement Preparation',
          subtitle: 'الإحماء الديناميكي والتنشيط العصبي',
          description: 'بروتوكولات تنشيط منظمة تهيئ الأوتار والعضلات والمفاصل للحركة الآمنة.',
        },
        {
          title: 'Exercise Education',
          subtitle: 'الثقافة الرياضية المبنية على العلم',
          description: 'استبدال التخمين بمبادئ علمية واضحة لضبط الأداء الحركي وشدة التمرين.',
        },
        {
          title: 'Recovery',
          subtitle: 'علوم الاستشفاء بعد التمرين',
          description: 'تقنيات تحرير اللفافة العضلية وتمارين التنفس الاستشفائي لتسريع تجدد النشاط.',
        },
        {
          title: 'Mobility',
          subtitle: 'مرونة المفاصل والمدى الحركي',
          description: 'تحرير المدى الحركي الوظيفي للكاحلين والوركين والعمود الفقري لحركة بلا قيود.',
        },
        {
          title: 'Strength Development',
          subtitle: 'تطوير القوة الوظيفية وثبات المفاصل',
          description: 'بناء دعامة عضلية متينة تدعم الحياة اليومية والنشاط الرياضي المستدام.',
        },
      ],
    },
    community: {
      kicker: '07 · منظومة المجتمع النشط',
      h1: 'نتحرك معاً',
      h2: 'ننمو معاً',
      lead: 'تصبح الحركة مستدامة عندما ينتمي الإنسان إلى ثقافة ترحيبية. من أندية الجري والمشي إلى جلسات 40+ النشطة، نبني مجتمعات تتقدم معاً.',
      subLead: 'مصممة للتواصل الإنساني الحقيقي عبر جميع المستويات والأعمار.',
      ledgerLabel: 'سجل المجتمع',
      previewMetricsBtn: 'معاينة عدادات البيانات',
      resetMetricsBtn: 'إعادة الضبط لوضع عدم تضخيم الأرقام',
      joinCta: 'انضم إلى الحركة',
      stats: [
        { label: 'ACTIVITIES', subLabel: 'الأنشطة الحركية', unit: 'نماذج جاهزة للتنفيذ' },
        { label: 'PARTICIPANTS', subLabel: 'المشاركون', unit: 'سعة مجموعات مرنة' },
        { label: 'COMMUNITIES', subLabel: 'المجتمعات النشطة', unit: 'فروع وأندية' },
        { label: 'PARTNERS', subLabel: 'الشركاء والمؤسسات', unit: 'شراكات استراتيجية' },
      ],
    },
    partner: {
      kicker: '08 · للشركات والعلامات التجارية والوجهات الكبرى',
      h1: 'حوّل العافية',
      h2: 'إلى تجربة استثنائية',
      builtForLabel: 'مصمم لخدمة',
      builtForList: 'العلامات التجارية · الشركات · قطاع التجزئة · مراكز التسوق · المجتمعات الرياضية',
      builtForSub: 'شريكك الاستراتيجي لتحويل المعرفة الصحية إلى حملات وفعاليات ومجتمعات ذات قيمة تجارية عالية.',
      deliverableKicker: 'حل متكامل جاهز للتنفيذ',
      deliverableTitle: 'ACTIVE WELLNESS SOLUTION',
      coCreateCta: 'صمم مشروعك مع JAIKLA',
      formulaSteps: [
        {
          name: 'Strategy',
          subtitle: 'الاستراتيجية وتحليل الجمهور',
          detail: 'تحديد الجمهور المستهدف، ومؤشرات الأداء الصحية، والتوافق مع هوية العلامة',
        },
        {
          name: 'Expert',
          subtitle: 'خبراء علوم الحركة والصحة',
          detail: 'أخصائيو علوم الرياضة والمدربون المحترفون وتصميم المناهج',
        },
        {
          name: 'Activity',
          subtitle: 'برامج الحركة والاستشفاء',
          detail: 'جلسات المرونة، وأندية الجري، وورش العمل، وبروتوكولات الاستشفاء',
        },
        {
          name: 'Production',
          subtitle: 'الإنتاج وتصميم المساحات',
          detail: 'التصميم المكاني، وإدارة المسرح والإضاءة، وتجربة المشاركين الميدانية',
        },
        {
          name: 'Content',
          subtitle: 'المحتوى والإعلام الرقمي',
          detail: 'الأفلام الوثائقية القصيرة، والمحتوى التعليمي، والانتشار عبر المنصات الرقمية',
        },
      ],
      flywheelKicker: '09 · عجلة النمو التجاري (BUSINESS FLYWHEEL)',
      flywheelHeadline: 'قيمة متراكمة تتضاعف مع كل دورة',
      flywheelLead:
        'منظومة متصلة تبدأ بالمعرفة العلمية لتوليد النشاط البدني، وبناء المجتمع، وجمع البيانات،وصناعة المحتوى الذي يعظم قيمة العميل.',
      inspectNodeHint: 'انقر على أي مرحلة لاستعراض التفاصيل',
      flywheelNodes: [
        {
          label: 'KNOWLEDGE',
          headline: 'أساس علمي رصين في الحركة والعافية',
          description: 'يبدأ كل مشروع برؤية علمية موثوقة تبني الثقة والتميز فوراً.',
        },
        {
          label: 'ACTIVITY',
          headline: 'تجارب حركية مصممة بعناية',
          description: 'تحويل المعرفة إلى حركة ملموسة عبر الورش وأندية الجري والفعاليات.',
        },
        {
          label: 'COMMUNITY',
          headline: 'مجتمع مترابط ينمو معاً',
          description: 'الأنشطة عالية الجودة تبني روابط إنسانية حقيقية ومشاركة مستمرة.',
        },
        {
          label: 'DATA',
          headline: 'رؤى المشاركة وجاهزية الحركة',
          description: 'تحليل تفاعل المشاركين واتجاهاتهم لتطوير البرامج بدقة أكبر.',
        },
        {
          label: 'CONTENT',
          headline: 'السرد القصصي الرقمي والانتشار الإعلامي',
          description: 'تحويل الطاقة الحية ورؤى الخبراء إلى محتوى رقمي يتجاوز حدود المكان.',
        },
        {
          label: 'CLIENT VALUE',
          headline: 'قيمة ملموسة للعلامة التجارية وحيوية المؤسسة',
          description: 'يكتسب الشركاء ولاءً حقيقياً للعلامة وفرق عمل أكثر صحة وحضوراً متكرراً.',
        },
        {
          label: 'NEW PROJECT',
          headline: 'توسع المنظومة وإطلاق مشاريع جديدة',
          description: 'يقود النجاح في كل دورة إلى شراكات أعمق ومشاريع سنوية أكبر.',
        },
      ],
    },
    finalCta: {
      kicker: 'المعرفة × الحركة × التجربة',
      h1: 'لنتحرك معاً',
      h2: 'نحو الأفضل',
      lead: 'صمم تجربتك القادمة في العافية النشطة معنا.',
      subLead: 'تواصل مع شركة JAIKLA DIGITAL CO., LTD. لتطوير برامج الشركات وتفعيل العلامات التجارية.',
      btnStart: 'ابدأ مشروعاً',
      btnPartner: 'كن شريكاً',
      btnContact: 'تواصل مع JAIKLA',
    },
    modal: {
      title: 'ابدأ مشروعاً معنا',
      subtitle: 'صمم تجربة العافية النشطة القادمة مع شركة JAIKLA DIGITAL CO., LTD.',
      nameLabel: 'الاسم الكامل *',
      orgLabel: 'المؤسسة / العلامة التجارية *',
      contactLabel: 'البريد الإلكتروني أو رقم الهاتف *',
      typeLabel: 'نوع المشروع *',
      notesLabel: 'الأهداف أو التفاصيل الإضافية (اختياري)',
      submitBtn: 'إرسال الطلب',
      cancelBtn: 'إلغاء',
      thankYouTitle: 'شكراً لك',
      thankYouSub: 'سيتواصل معك فريقنا في أقرب وقت لتصميم مشروعك',
    },
  },
};
