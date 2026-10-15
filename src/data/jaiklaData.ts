export type ImageCategory =
  | 'HERO'
  | 'MOVEMENT'
  | 'PERFORMANCE'
  | 'RECOVERY'
  | 'EXPERT GUIDANCE'
  | 'COMMUNITY'
  | 'BODY AWARENESS'
  | 'SPORT'
  | 'MOBILITY'
  | 'STRENGTH';

export interface CampaignImageAsset {
  id: string;
  src: string;
  rawSrc?: string;
  fallbackSrc: string;
  category: ImageCategory;
  secondaryCategory?: ImageCategory;
  aspect: '9:16' | '16:9' | '4:3' | '3:4';
  objectPosition?: string;
  moodPreset?: 'violet-editorial' | 'recovery-calm' | 'kinetic-contrast' | 'warm-vitality';
  titleEn: string;
  titleTh: string;
  roleDescription: string;
  assignedSection: string;
}

export const STUDIO_WIDE_IMAGES = {
  hero: '/assets/images/realistic/hero_backdrop.jpg',
  prepare: '/assets/images/realistic/stage_prepare_backdrop.jpg',
  move: '/assets/images/realistic/stage_move_backdrop.jpg',
  perform: '/assets/images/realistic/stage_perform_backdrop.jpg',
  recover: '/assets/images/realistic/stage_recover_backdrop.jpg',
  community: '/assets/images/realistic/stage_community_backdrop.jpg',
};

/**
 * Field Activation Photography (Muscle Recovery & Development for Exercisers)
 * From supplied Google Drive folder: https://drive.google.com/drive/folders/1spWidmH7ZMJjVrWtv12ay8KnE-0rFfrZ
 * Color-graded to JAIKLA Editorial Charcoal & Violet Tone + Subject Focal-Point Locked
 */
export const FIELD_ACTIVITY_IMAGES: CampaignImageAsset[] = [
  {
    id: 'field_01',
    src: '/assets/images/field/field_01.jpg',
    rawSrc: '/assets/images/field/raw/field_01.jpg',
    fallbackSrc: STUDIO_WIDE_IMAGES.recover,
    category: 'RECOVERY',
    secondaryCategory: 'EXPERT GUIDANCE',
    aspect: '4:3',
    objectPosition: '54% 46%',
    moodPreset: 'violet-editorial',
    titleEn: 'Field Muscle Recovery & Assessment Station',
    titleTh: 'สถานีประเมินและฟื้นฟูกล้ามเนื้อภาคสนามโดยทีมผู้เชี่ยวชาญ',
    roleDescription: 'On-site physical assessment and targeted muscle recovery setup for active participants.',
    assignedSection: '04 Journey (Prepare) & 07 Field Recovery Showcase',
  },
  {
    id: 'field_02',
    src: '/assets/images/field/field_02.jpg',
    rawSrc: '/assets/images/field/raw/field_02.jpg',
    fallbackSrc: STUDIO_WIDE_IMAGES.prepare,
    category: 'EXPERT GUIDANCE',
    secondaryCategory: 'RECOVERY',
    aspect: '4:3',
    objectPosition: '53% 38%',
    moodPreset: 'violet-editorial',
    titleEn: 'Hands-On Myofascial & Muscle Care',
    titleTh: 'การดูแลและคลายกล้ามเนื้อเชิงลึกสำหรับผู้ออกกำลังกาย',
    roleDescription: 'Team specialists delivering guided muscle release and post-exertion tension care.',
    assignedSection: '06 Solutions (Corporate Active Wellness) & 07 Field Recovery',
  },
  {
    id: 'field_03',
    src: '/assets/images/field/field_03.jpg',
    rawSrc: '/assets/images/field/raw/field_03.jpg',
    fallbackSrc: STUDIO_WIDE_IMAGES.perform,
    category: 'STRENGTH',
    secondaryCategory: 'EXPERT GUIDANCE',
    aspect: '4:3',
    objectPosition: '37% 41%',
    moodPreset: 'kinetic-contrast',
    titleEn: 'Guided Muscle Activation & Form Coaching',
    titleTh: 'การกระตุ้นและพัฒนากล้ามเนื้ออย่างถูกวิธีในภาคสนาม',
    roleDescription: 'Tactile coaching and movement alignment to optimize muscle recruitment.',
    assignedSection: '06 Solutions (Brand Active Experience) & 08 Expert Guidance',
  },
  {
    id: 'field_04',
    src: '/assets/images/field/field_04.jpg',
    rawSrc: '/assets/images/field/raw/field_04.jpg',
    fallbackSrc: STUDIO_WIDE_IMAGES.recover,
    category: 'RECOVERY',
    secondaryCategory: 'MOBILITY',
    aspect: '4:3',
    objectPosition: '52% 46%',
    moodPreset: 'recovery-calm',
    titleEn: 'Assisted Lower-Body & Hip Recovery Protocol',
    titleTh: 'โปรแกรมยืดเหยียดและฟื้นฟูกล้ามเนื้อช่วงล่างหลังออกกำลังกาย',
    roleDescription: 'Assisted stretching and joint decompression for runners and active athletes.',
    assignedSection: '04 Journey (Recover) & 07 Human Performance',
  },
  {
    id: 'field_05',
    src: '/assets/images/field/field_05.jpg',
    rawSrc: '/assets/images/field/raw/field_05.jpg',
    fallbackSrc: STUDIO_WIDE_IMAGES.recover,
    category: 'EXPERT GUIDANCE',
    secondaryCategory: 'RECOVERY',
    aspect: '4:3',
    objectPosition: '46% 52%',
    moodPreset: 'violet-editorial',
    titleEn: 'Applied Field Recovery & Muscle Development Lab',
    titleTh: 'ปฏิบัติการฟื้นฟูและพัฒนากล้ามเนื้อสำหรับผู้ออกกำลังกาย',
    roleDescription: 'Flagship widescreen field session uniting allied health specialists and exercisers.',
    assignedSection: '07 Human Performance & Recovery Science Lead Visual',
  },
  {
    id: 'field_06',
    src: '/assets/images/field/field_06.jpg',
    rawSrc: '/assets/images/field/raw/field_06.jpg',
    fallbackSrc: STUDIO_WIDE_IMAGES.perform,
    category: 'PERFORMANCE',
    secondaryCategory: 'STRENGTH',
    aspect: '4:3',
    objectPosition: '52% 44%',
    moodPreset: 'kinetic-contrast',
    titleEn: 'Neuromuscular Readiness & Strength Progression',
    titleTh: 'การพัฒนาความแข็งแรงและความพร้อมของระบบกล้ามเนื้อ',
    roleDescription: 'Field conditioning and progressive muscle development guided by JAIKLA specialists.',
    assignedSection: '04 Journey (Perform) & 08 Expert Guidance',
  },
  {
    id: 'field_07',
    src: '/assets/images/field/field_07.jpg',
    rawSrc: '/assets/images/field/raw/field_07.jpg',
    fallbackSrc: STUDIO_WIDE_IMAGES.prepare,
    category: 'MOBILITY',
    secondaryCategory: 'EXPERT GUIDANCE',
    aspect: '4:3',
    objectPosition: '51% 39%',
    moodPreset: 'violet-editorial',
    titleEn: 'Interactive Mobility & Muscle Literacy Workshop',
    titleTh: 'เวิร์กชอปเรียนรู้การทำงานของกล้ามเนื้อและข้อต่อภาคสนาม',
    roleDescription: 'Group education and practical mobility drills tailored for everyday athletes.',
    assignedSection: '06 Solutions (Knowledge & Workshop)',
  },
  {
    id: 'field_08',
    src: '/assets/images/field/field_08.jpg',
    rawSrc: '/assets/images/field/raw/field_08.jpg',
    fallbackSrc: STUDIO_WIDE_IMAGES.community,
    category: 'COMMUNITY',
    secondaryCategory: 'RECOVERY',
    aspect: '4:3',
    objectPosition: '50% 42%',
    moodPreset: 'warm-vitality',
    titleEn: 'Active Community Cool-Down & Restoration Zone',
    titleTh: 'พื้นที่ฟื้นฟูร่างกายและแลกเปลี่ยนเรียนรู้ของกลุ่มผู้ออกกำลังกาย',
    roleDescription: 'Shared post-workout recovery zone bringing exercisers and specialists together.',
    assignedSection: '06 Solutions (Sport & Wellness Experience)',
  },
  {
    id: 'field_09',
    src: '/assets/images/field/field_09.jpg',
    rawSrc: '/assets/images/field/raw/field_09.jpg',
    fallbackSrc: STUDIO_WIDE_IMAGES.recover,
    category: 'RECOVERY',
    secondaryCategory: 'BODY AWARENESS',
    aspect: '4:3',
    objectPosition: '54% 42%',
    moodPreset: 'recovery-calm',
    titleEn: 'Precision Soft-Tissue & Fascia Restoration',
    titleTh: 'การคลายพังผืดและลดความตึงตัวของกล้ามเนื้ออย่างตรงจุด',
    roleDescription: 'Focused one-on-one recovery session restoring tissue elasticity and comfort.',
    assignedSection: '09 Community & Field Recovery Gallery',
  },
  {
    id: 'field_10',
    src: '/assets/images/field/field_10.jpg',
    rawSrc: '/assets/images/field/raw/field_10.jpg',
    fallbackSrc: STUDIO_WIDE_IMAGES.prepare,
    category: 'EXPERT GUIDANCE',
    secondaryCategory: 'STRENGTH',
    aspect: '3:4',
    objectPosition: '44% 37%',
    moodPreset: 'violet-editorial',
    titleEn: 'Specialist One-on-One Biomechanical Coaching',
    titleTh: 'การดูแลและปรับสมดุลกล้ามเนื้อรายบุคคลโดยทีมงานผู้เชี่ยวชาญ',
    roleDescription: 'Vertical editorial portrait of hands-on muscle development and posture guidance.',
    assignedSection: '08 Expert Guidance Lead Portrait',
  },
  {
    id: 'field_11',
    src: '/assets/images/field/field_11.jpg',
    rawSrc: '/assets/images/field/raw/field_11.jpg',
    fallbackSrc: STUDIO_WIDE_IMAGES.perform,
    category: 'STRENGTH',
    secondaryCategory: 'PERFORMANCE',
    aspect: '4:3',
    objectPosition: '53% 42%',
    moodPreset: 'kinetic-contrast',
    titleEn: 'Functional Muscle Development & Stability Drill',
    titleTh: 'การฝึกความมั่นคงของข้อต่อและพัฒนากล้ามเนื้อเชิงหน้าที่',
    roleDescription: 'Guided functional strength and core stability progression in the field.',
    assignedSection: '04 Journey (Develop) & 07 Field Showcase',
  },
  {
    id: 'field_12',
    src: '/assets/images/field/field_12.jpg',
    rawSrc: '/assets/images/field/raw/field_12.jpg',
    fallbackSrc: STUDIO_WIDE_IMAGES.community,
    category: 'COMMUNITY',
    secondaryCategory: 'MOVEMENT',
    aspect: '4:3',
    objectPosition: '38% 36%',
    moodPreset: 'warm-vitality',
    titleEn: 'Team & Participant Collective Movement Session',
    titleTh: 'บรรยากาศการทำกิจกรรมเคลื่อนไหวและฟื้นฟูร่างกายร่วมกัน',
    roleDescription: 'High-energy camaraderie between the JAIKLA field team and participating athletes.',
    assignedSection: '09 Community Showcase',
  },
  {
    id: 'field_13',
    src: '/assets/images/field/field_13.jpg',
    rawSrc: '/assets/images/field/raw/field_13.jpg',
    fallbackSrc: STUDIO_WIDE_IMAGES.recover,
    category: 'RECOVERY',
    secondaryCategory: 'COMMUNITY',
    aspect: '4:3',
    objectPosition: '48% 42%',
    moodPreset: 'violet-editorial',
    titleEn: 'Complete Post-Session Recovery & Readiness Debrief',
    titleTh: 'สรุปผลการดูแลร่างกายและวางแผนการพัฒนาอย่างต่อเนื่อง',
    roleDescription: 'Closing recovery check-in and personalized take-home movement advice.',
    assignedSection: '09 Community & Field Recovery Gallery',
  },
];

/**
 * Strategic classification of all 16 campaign photographs from the supplied
 * Google Drive folder (https://drive.google.com/drive/folders/1MqCsQ_REApbcQt4I1l9qmUDUjND6iR7s)
 */
export const CAMPAIGN_IMAGES: Record<string, CampaignImageAsset> = {
  campaign_01: {
    id: 'campaign_01',
    src: '/assets/images/realistic/stage_01_prepare.jpg',
    fallbackSrc: STUDIO_WIDE_IMAGES.prepare,
    category: 'MOBILITY',
    secondaryCategory: 'COMMUNITY',
    aspect: '9:16',
    titleEn: 'Collective Mobility Preparation',
    titleTh: 'การเตรียมความพร้อมของข้อต่อและการเคลื่อนไหวร่วมกัน',
    roleDescription: 'Dynamic functional warm-up and hip mobility session in natural morning light.',
    assignedSection: '04 Journey (Prepare) & 08 Expert Guidance (Mobility)',
  },
  campaign_02: {
    id: 'campaign_02',
    src: '/assets/images/realistic/idea_grounding.jpg',
    fallbackSrc: STUDIO_WIDE_IMAGES.prepare,
    category: 'BODY AWARENESS',
    secondaryCategory: 'RECOVERY',
    aspect: '9:16',
    titleEn: 'Autonomic Grounding & Posture',
    titleTh: 'การรับรู้ร่างกายและสมดุลการหายใจ',
    roleDescription: 'Mindful, grounded posture embracing sunrise light—communicating calm body literacy.',
    assignedSection: '03 The Idea & 08 Expert Guidance (Body Awareness)',
  },
  campaign_03: {
    id: 'campaign_03',
    src: '/assets/images/realistic/community_longevity.jpg',
    fallbackSrc: STUDIO_WIDE_IMAGES.community,
    category: 'COMMUNITY',
    secondaryCategory: 'MOVEMENT',
    aspect: '9:16',
    titleEn: 'Active 40+ & Longevity Community',
    titleTh: 'คอมมูนิตี้การเคลื่อนไหวสำหรับทุกช่วงวัย',
    roleDescription: 'Active adults sharing genuine connection and longevity movement practice.',
    assignedSection: '09 Community (Active 40+ Longevity)',
  },
  campaign_04: {
    id: 'campaign_04',
    src: '/assets/images/realistic/stage_04_recover.jpg',
    fallbackSrc: STUDIO_WIDE_IMAGES.recover,
    category: 'RECOVERY',
    secondaryCategory: 'EXPERT GUIDANCE',
    aspect: '9:16',
    titleEn: 'Applied Recovery Science',
    titleTh: 'ศาสตร์การฟื้นฟูร่างกายอย่างมีหลักการ',
    roleDescription: 'Allied health specialist providing hands-on myofascial and soft-tissue release.',
    assignedSection: '04 Journey (Recover) & 07 Human Performance',
  },
  campaign_05: {
    id: 'campaign_05',
    src: '/assets/images/realistic/community_recovery.jpg',
    fallbackSrc: STUDIO_WIDE_IMAGES.recover,
    category: 'RECOVERY',
    secondaryCategory: 'MOBILITY',
    aspect: '9:16',
    titleEn: 'Myofascial Tissue Reset',
    titleTh: 'การคลายกล้ามเนื้อและพังผืดหลังการฝึกซ้อม',
    roleDescription: 'Guided post-activity myofascial release and relaxation protocols.',
    assignedSection: '09 Community (Myofascial Reset)',
  },
  campaign_06: {
    id: 'campaign_06',
    src: '/assets/images/realistic/stage_05_develop.jpg',
    fallbackSrc: STUDIO_WIDE_IMAGES.community,
    category: 'RECOVERY',
    secondaryCategory: 'BODY AWARENESS',
    aspect: '9:16',
    titleEn: 'Sustainable Progression & Reflection',
    titleTh: 'การพัฒนาที่ยั่งยืนผ่านการพักและฟื้นฟูอย่างเข้าใจ',
    roleDescription: 'Dedicated runner sustaining long-term consistency along scenic mountain routes.',
    assignedSection: '04 Journey (Develop)',
  },
  campaign_07: {
    id: 'campaign_07',
    src: '/assets/images/realistic/expert_guidance.jpg',
    fallbackSrc: STUDIO_WIDE_IMAGES.prepare,
    category: 'EXPERT GUIDANCE',
    secondaryCategory: 'STRENGTH',
    aspect: '9:16',
    titleEn: 'Biomechanical Alignment Coaching',
    titleTh: 'การปรับท่าทางและกลไกการเคลื่อนไหวโดยผู้เชี่ยวชาญ',
    roleDescription: 'Movement specialist providing tactile form correction during functional biomechanics.',
    assignedSection: '08 Expert Guidance (Lead Biomechanics)',
  },
  campaign_08: {
    id: 'campaign_08',
    src: '/assets/images/realistic/idea_mobility.jpg',
    fallbackSrc: STUDIO_WIDE_IMAGES.prepare,
    category: 'EXPERT GUIDANCE',
    secondaryCategory: 'MOBILITY',
    aspect: '9:16',
    titleEn: 'Thoracic & Kinetic Chain Mobility',
    titleTh: 'การเพิ่มองศาการเคลื่อนไหวของแกนกลางลำตัว',
    roleDescription: 'Dynamic thoracic mobility and rotational posture development.',
    assignedSection: '03 The Idea & 08 Expert Guidance (Movement Prep)',
  },
  campaign_09: {
    id: 'campaign_09',
    src: '/assets/images/realistic/why_strength.jpg',
    fallbackSrc: STUDIO_WIDE_IMAGES.perform,
    category: 'STRENGTH',
    secondaryCategory: 'EXPERT GUIDANCE',
    aspect: '9:16',
    titleEn: 'Functional Load & Strength Literacy',
    titleTh: 'การสร้างความแข็งแรงที่นำไปใช้ได้จริง',
    roleDescription: 'Precision coaching with functional resistance in an authentic performance facility.',
    assignedSection: '05 Why JAIKLA (Performance Frame 2)',
  },
  campaign_10: {
    id: 'campaign_10',
    src: '/assets/images/realistic/stage_02_move.jpg',
    fallbackSrc: STUDIO_WIDE_IMAGES.move,
    category: 'MOVEMENT',
    secondaryCategory: 'SPORT',
    aspect: '9:16',
    titleEn: 'Rhythmic Stride & Flow',
    titleTh: 'จังหวะการเคลื่อนไหวที่มั่นคงและเป็นธรรมชาติ',
    roleDescription: 'Outdoor runners maintaining natural cadence and effortless stride flow.',
    assignedSection: '04 Journey (Move)',
  },
  campaign_11: {
    id: 'campaign_11',
    src: '/assets/images/realistic/community_gathering.jpg',
    fallbackSrc: STUDIO_WIDE_IMAGES.community,
    category: 'COMMUNITY',
    secondaryCategory: 'SPORT',
    aspect: '9:16',
    titleEn: 'Core Stability & Community Wellness',
    titleTh: 'พลังของการเคลื่อนไหวและสร้างความมั่นคงของแกนกลาง',
    roleDescription: 'Focused stability and mobility training in a supportive community atmosphere.',
    assignedSection: '09 Community Showcase (Lead Frame)',
  },
  campaign_12: {
    id: 'campaign_12',
    src: '/assets/images/realistic/stage_03_perform.jpg',
    fallbackSrc: STUDIO_WIDE_IMAGES.perform,
    category: 'PERFORMANCE',
    secondaryCategory: 'STRENGTH',
    aspect: '9:16',
    titleEn: 'Elevation & Functional Strength Output',
    titleTh: 'การยกระดับสมรรถภาพและความทนทานของร่างกาย',
    roleDescription: 'Functional power and barbell stability progression with authentic lifting mechanics.',
    assignedSection: '04 Journey (Perform)',
  },
  campaign_13: {
    id: 'campaign_13',
    src: '/assets/images/realistic/solution_04_workshop.jpg',
    fallbackSrc: STUDIO_WIDE_IMAGES.recover,
    category: 'RECOVERY',
    secondaryCategory: 'COMMUNITY',
    aspect: '9:16',
    titleEn: 'Applied Recovery & Coaching Workshop',
    titleTh: 'เวิร์กชอปการฟื้นฟูร่างกายและเทคนิคการเคลื่อนไหวเชิงปฏิบัติ',
    roleDescription: 'Hands-on movement coach delivering tactile posture and biomechanics education.',
    assignedSection: '06 Solutions (Knowledge & Workshop)',
  },
  campaign_14: {
    id: 'campaign_14',
    src: '/assets/images/realistic/performance_science.jpg',
    fallbackSrc: STUDIO_WIDE_IMAGES.prepare,
    category: 'EXPERT GUIDANCE',
    secondaryCategory: 'RECOVERY',
    aspect: '16:9',
    titleEn: 'Hands-On Allied Health Assessment',
    titleTh: 'การถ่ายทอดความรู้และเทคนิคการดูแลร่างกายเชิงปฏิบัติ',
    roleDescription: 'Widescreen authentic capture of allied health evaluation and movement screening.',
    assignedSection: '07 Human Performance Lead Visual',
  },
  campaign_15: {
    id: 'campaign_15',
    src: '/assets/images/realistic/why_momentum.jpg',
    fallbackSrc: STUDIO_WIDE_IMAGES.hero,
    category: 'HERO',
    secondaryCategory: 'MOVEMENT',
    aspect: '9:16',
    titleEn: 'Aspirational Forward Momentum',
    titleTh: 'ก้าวไปข้างหน้าด้วยความเข้าใจในร่างกาย',
    roleDescription: 'Determined urban runner accelerating with pure authentic athletic cadence at dawn.',
    assignedSection: '05 Why JAIKLA (Lead Hero Portrait)',
  },
  campaign_16: {
    id: 'campaign_16',
    src: '/assets/images/realistic/solution_02_brand.jpg',
    fallbackSrc: STUDIO_WIDE_IMAGES.perform,
    category: 'PERFORMANCE',
    secondaryCategory: 'STRENGTH',
    aspect: '16:9',
    titleEn: 'High-Energy Athletic Brand Experience',
    titleTh: 'การสร้างประสบการณ์แบรนด์ผ่านการเคลื่อนไหวและกีฬา',
    roleDescription: 'Athletic track competition and high-energy brand co-creation environment.',
    assignedSection: '06 Solutions (Brand Active Experience)',
  },
};

export interface JourneyStage {
  index: string;
  key: 'PREPARE' | 'MOVE' | 'PERFORM' | 'RECOVER' | 'DEVELOP';
  labelTh: string;
  headline: string;
  headlineTh: string;
  description: string;
  descriptionTh: string;
  scienceFocus: string;
  keyDeliverables: string[];
  portraitImage: string;
  objectPosition?: string;
  wideBackdrop: string;
  categoryTag: string;
  svgPathData: string;
  accentCoordinate: { x: number; y: number };
}

export const JOURNEY_STAGES: JourneyStage[] = [
  {
    index: '01',
    key: 'PREPARE',
    labelTh: 'เตรียมตัวให้พร้อม',
    headline: 'Understand your body before movement',
    headlineTh: 'รู้จักความพร้อมของร่างกาย ก่อนเริ่มเคลื่อนไหว',
    description:
      'Every sustainable movement journey starts with body literacy—assessing joint mobility, postural alignment, breathing mechanics, and neuromuscular readiness before load is applied.',
    descriptionTh:
      'เริ่มจากชวนผู้เข้าร่วมสังเกตความพร้อมของตัวเอง ทั้งการเคลื่อนไหว ความยืดหยุ่น และความรู้สึกของร่างกาย ก่อนค่อย ๆ เตรียมตัวให้พร้อมสำหรับกิจกรรม',
    scienceFocus: 'Joint Mobility · Neuromuscular Activation · Postural Screening',
    keyDeliverables: [
      'Movement Readiness Screening',
      'Dynamic Joint Mobility Protocols',
      'Breath & Core Stabilization Primer',
    ],
    portraitImage: CAMPAIGN_IMAGES.campaign_01.src,
    objectPosition: '50% 38%',
    wideBackdrop: STUDIO_WIDE_IMAGES.prepare,
    categoryTag: 'MOBILITY · BODY AWARENESS',
    svgPathData: 'M 40 160 C 180 160, 240 130, 380 125 C 520 120, 680 145, 960 130',
    accentCoordinate: { x: 140, y: 148 },
  },
  {
    index: '02',
    key: 'MOVE',
    labelTh: 'ขยับอย่างมั่นใจ',
    headline: 'Build confidence through better movement',
    headlineTh: 'ขยับอย่างมั่นใจ ด้วยพื้นฐานที่เหมาะกับตัวเอง',
    description:
      'Translate body awareness into fluid, efficient locomotion. We design progressive movement experiences that replace hesitation with natural rhythm, coordination, and enjoyment.',
    descriptionTh:
      'นำความเข้าใจนั้นมาใช้กับการเคลื่อนไหวจริง ให้แต่ละคนได้ขยับอย่างเป็นธรรมชาติและมั่นใจในระดับที่เหมาะกับตัวเอง',
    scienceFocus: 'Gait Economy · Kinetic Chain Coordination · Motor Control',
    keyDeliverables: [
      'Guided Run & Walk Mechanics',
      'Functional Movement Literacy Sessions',
      'Inclusive Community Pacing Formats',
    ],
    portraitImage: CAMPAIGN_IMAGES.campaign_10.src,
    objectPosition: '50% 38%',
    wideBackdrop: STUDIO_WIDE_IMAGES.move,
    categoryTag: 'MOVEMENT · FLOW',
    svgPathData: 'M 40 155 C 200 105, 360 175, 540 110 C 720 45, 840 130, 960 95',
    accentCoordinate: { x: 340, y: 136 },
  },
  {
    index: '03',
    key: 'PERFORM',
    labelTh: 'พัฒนาอย่างเป็นขั้นตอน',
    headline: 'Develop strength, endurance and performance',
    headlineTh: 'ค่อย ๆ พัฒนาความแข็งแรง ความทนทาน และความสามารถของร่างกาย',
    description:
      'When movement mechanics are sound, performance follows naturally. We combine allied health precision with sports conditioning to elevate structural strength, aerobic capacity, and resilient output.',
    descriptionTh:
      'เมื่อมีพื้นฐานที่ดี เราค่อยต่อยอดความแข็งแรงและความทนทานด้วยกิจกรรมที่วางลำดับอย่างเหมาะสมกับกลุ่มผู้เข้าร่วม',
    scienceFocus: 'Force Production · Metabolic Conditioning · Biomechanical Efficiency',
    keyDeliverables: [
      'Sport-Specific Conditioning Clinics',
      'Strength & Power Progression Labs',
      'Endurance Pacing & Energy Systems',
    ],
    portraitImage: CAMPAIGN_IMAGES.campaign_12.src,
    objectPosition: '50% 35%',
    wideBackdrop: STUDIO_WIDE_IMAGES.perform,
    categoryTag: 'PERFORMANCE · STRENGTH',
    svgPathData: 'M 40 170 C 190 150, 340 40, 520 55 C 700 70, 810 35, 960 30',
    accentCoordinate: { x: 520, y: 55 },
  },
  {
    index: '04',
    key: 'RECOVER',
    labelTh: 'ฟื้นตัวให้เหมาะกับตัวเอง',
    headline: 'Recover intelligently after exercise',
    headlineTh: 'ให้เวลาร่างกายฟื้นตัว เพื่อพร้อมสำหรับก้าวต่อไป',
    description:
      'Adaptation happens during recovery, not just exertion. Our recovery experiences integrate myofascial restoration, parasympathetic down-regulation, and practical allied health education.',
    descriptionTh:
      'การพักและฟื้นตัวเป็นส่วนหนึ่งของการพัฒนา เราจึงออกแบบช่วงหลังการเคลื่อนไหวให้ผู้เข้าร่วมได้ผ่อนคลาย สังเกตร่างกาย และเรียนรู้วิธีดูแลตัวเอง',
    scienceFocus: 'Myofascial Release · Autonomic Down-Regulation · Tissue Restoration',
    keyDeliverables: [
      'Event & Post-Run Recovery Lounges',
      'Guided Myofascial & Mobility Workshops',
      'Office & Corporate Body Reset Stations',
    ],
    portraitImage: CAMPAIGN_IMAGES.campaign_04.src,
    objectPosition: '50% 40%',
    wideBackdrop: STUDIO_WIDE_IMAGES.recover,
    categoryTag: 'RECOVERY · ALLIED HEALTH',
    svgPathData: 'M 40 60 C 220 65, 380 155, 580 145 C 760 135, 850 140, 960 138',
    accentCoordinate: { x: 710, y: 140 },
  },
  {
    index: '05',
    key: 'DEVELOP',
    labelTh: 'ทำต่อให้เป็นส่วนหนึ่งของชีวิต',
    headline: 'Turn movement into sustainable progress',
    headlineTh: 'เปลี่ยนการเคลื่อนไหวให้เป็นส่วนหนึ่งของชีวิตที่ทำต่อได้จริง',
    description:
      'True wellness is not a one-day event—it is a compounding lifecycle. We build ongoing ecosystems of content, community habits, and measurable progression for individuals and organizations.',
    descriptionTh:
      'เป้าหมายไม่ใช่ให้ทุกอย่างจบเมื่อกิจกรรมเลิก แต่ทำให้ความรู้ การเคลื่อนไหว คอมมูนิตี้ และคอนเทนต์ช่วยกันพาคนกลับมาดูแลตัวเองต่อเนื่อง',
    scienceFocus: 'Habit Architecture · Long-Term Athletic Development · Community Retention',
    keyDeliverables: [
      'Annual Corporate Wellness Ecosystems',
      'Ongoing Run & Movement Club Frameworks',
      'Educational Content & Progression Tracking',
    ],
    portraitImage: CAMPAIGN_IMAGES.campaign_06.src,
    objectPosition: '50% 40%',
    wideBackdrop: STUDIO_WIDE_IMAGES.community,
    categoryTag: 'PROGRESSION · LONGEVITY',
    svgPathData: 'M 40 150 C 240 140, 440 110, 660 75 C 800 52, 890 35, 960 22',
    accentCoordinate: { x: 890, y: 35 },
  },
];

export interface CapabilityItem {
  index: string;
  title: string;
  titleTh: string;
  subtitle: string;
  description: string;
  descriptionTh: string;
  image: string;
  categoryLabel: string;
  metricsLabel: string;
}

export const WHY_JAIKLA_CAPABILITIES: CapabilityItem[] = [
  {
    index: '01',
    title: 'ALLIED HEALTH KNOWLEDGE',
    titleTh: 'องค์ความรู้ด้านวิทยาศาสตร์สุขภาพและการเคลื่อนไหว',
    subtitle: 'Evidence-informed movement & exercise literacy',
    description:
      'Translating sports science, biomechanics, and physical wellness principles into clear, practical guidance that everyday movers and athletes can immediately apply.',
    descriptionTh:
      'แปลงความรู้ด้านสรีรวิทยา ชีวกลศาสตร์ และการดูแลร่างกาย ให้เข้าใจง่าย ปฏิบัติได้จริง โดยไม่ใช้ศัพท์ทางการแพทย์ที่ซับซ้อนหรือน่ากลัว',
    image: CAMPAIGN_IMAGES.campaign_07.src,
    categoryLabel: 'EXPERT GUIDANCE · SCIENCE',
    metricsLabel: 'Biomechanics · Mobility · Exercise Literacy',
  },
  {
    index: '02',
    title: 'SPORT & ACTIVITY',
    titleTh: 'การออกแบบโปรแกรมกีฬาและกิจกรรมการเคลื่อนไหว',
    subtitle: 'Structured programs built for real human bodies',
    description:
      'From beginner pacing and Active 40+ movement sessions to high-output endurance preparation, every activity is structured around progressive load and safe execution.',
    descriptionTh:
      'ออกแบบกิจกรรมการวิ่ง การเดิน และการฝึกความแข็งแรงที่เหมาะกับระดับร่างกายของผู้เข้าร่วมแต่ละกลุ่มอย่างแท้จริง',
    image: CAMPAIGN_IMAGES.campaign_10.src,
    categoryLabel: 'SPORT · MOVEMENT',
    metricsLabel: 'Run Clubs · Conditioning · Inclusive Pacing',
  },
  {
    index: '03',
    title: 'EVENT & EXPERIENCE',
    titleTh: 'การสร้างสรรค์อีเวนต์และประสบการณ์สุขภาพรูปแบบใหม่',
    subtitle: 'End-to-end spatial, sensory & technical production',
    description:
      'We choreograph every touchpoint—from pre-activity readiness zones and kinetic stage production to intelligent recovery lounges that leave a lasting brand impression.',
    descriptionTh:
      'ยกระดับการจัดงานด้วยมาตรฐานโปรดักชันที่พิถีพิถัน ผสานโซนเตรียมร่างกาย กิจกรรมหลัก และโซนฟื้นฟูเข้าด้วยกันอย่างไร้รอยต่อ',
    image: CAMPAIGN_IMAGES.campaign_13.src,
    categoryLabel: 'EXPERIENCE · PRODUCTION',
    metricsLabel: 'Wellness Festivals · Recovery Zones · Activations',
  },
  {
    index: '04',
    title: 'CONTENT & MEDIA',
    titleTh: 'การผลิตคอนเทนต์และสื่อดิจิทัลด้านสุขภาพยุคใหม่',
    subtitle: 'High-craft storytelling powered by JAIKLA DIGITAL',
    description:
      'Backed by JAIKLA DIGITAL’s creative and digital DNA, we turn expert movement knowledge and live activations into compelling video, editorial, and social ecosystems.',
    descriptionTh:
      'ต่อยอดความเชี่ยวชาญจาก JAIKLA DIGITAL สร้างสรรค์คอนเทนต์คุณภาพสูงที่เปลี่ยนความรู้ด้านการเคลื่อนไหวให้เป็นเรื่องราวที่น่าติดตามและแชร์ต่อ',
    image: CAMPAIGN_IMAGES.campaign_06.src,
    categoryLabel: 'DIGITAL · STORYTELLING',
    metricsLabel: 'Campaign Films · Educational Series · Social Reach',
  },
  {
    index: '05',
    title: 'COMMUNITY',
    titleTh: 'การสร้างคอมมูนิตี้ที่เติบโตและเคลื่อนไหวไปด้วยกัน',
    subtitle: 'Belonging through shared physical progression',
    description:
      'Sustained behavior change thrives in community. We cultivate active micro-communities inside organizations, retail spaces, and urban neighborhoods.',
    descriptionTh:
      'สร้างพื้นที่ปลอดภัยและเป็นกันเองให้ผู้คนมาเคลื่อนไหว พูดคุย และพัฒนาสุขภาพร่วมกันอย่างต่อเนื่อง ทั้งในระดับองค์กรและระดับเมือง',
    image: CAMPAIGN_IMAGES.campaign_11.src,
    categoryLabel: 'COMMUNITY · CULTURE',
    metricsLabel: 'Run/Walk Clubs · Active 40+ · Corporate Tribes',
  },
];

export interface SolutionItem {
  index: string;
  id: string;
  title: string;
  titleTh: string;
  projectTypeModalValue: string;
  summary: string;
  summaryTh: string;
  programs: string[];
  programsTh: string[];
  idealFor: string;
  idealForTh: string;
  outcomeStatement: string;
  image: string;
  objectPosition?: string;
  categoryTag: string;
}

export const SOLUTIONS_DATA: SolutionItem[] = [
  {
    index: '01',
    id: 'corporate-wellness',
    title: 'CORPORATE ACTIVE WELLNESS',
    titleTh: 'โซลูชันสุขภาพและการเคลื่อนไหวสำหรับองค์กรยุคใหม่',
    projectTypeModalValue: 'Corporate Wellness',
    summary:
      'Transform workplace wellness from passive health checkups into energizing, science-guided movement culture that improves daily vitality and team cohesion.',
    summaryTh:
      'เปลี่ยนสวัสดิการสุขภาพแบบเดิม ให้เป็นวัฒนธรรมการเคลื่อนไหวที่ช่วยลดอาการออฟฟิศซินโดรม เพิ่มพลังงานในการทำงาน และเชื่อมความสัมพันธ์ในองค์กร',
    programs: [
      'Employee Wellness Architecture',
      'Corporate Run Club & Coaching',
      'Workplace Movement Program',
      'Office Body Reset & Ergonomic Mobility',
      'Healthy Workforce Challenge',
    ],
    programsTh: [
      'การออกแบบโครงสร้างสุขภาพพนักงานแบบองค์รวม',
      'คลับวิ่งและการโค้ชการเคลื่อนไหวสำหรับองค์กร',
      'โปรแกรมส่งเสริมการเคลื่อนไหวในที่ทำงาน',
      'คลินิกปรับสมดุลร่างกายและคลายออฟฟิศซินโดรม',
      'แคมเปญภารกิจสะสมสุขภาพดีภายในองค์กร',
    ],
    idealFor: 'Leading Enterprises · HR & People Teams · Tech & Modern Workplaces',
    idealForTh: 'องค์กรชั้นนำ · ฝ่ายบริหารทรัพยากรบุคคล (HR) · ออฟฟิศและองค์กรยุคใหม่',
    outcomeStatement: 'Sustained employee engagement, reduced desk-bound fatigue, and measurable participation.',
    image: '/assets/images/realistic/solution_01_corporate.jpg',
    objectPosition: '50% 35%',
    categoryTag: 'ORGANIZATIONS · WORKFORCE',
  },
  {
    index: '02',
    id: 'brand-experience',
    title: 'BRAND ACTIVE EXPERIENCE',
    titleTh: 'การสร้างแบรนด์แอกทิเวชันผ่านประสบการณ์ Active Wellness',
    projectTypeModalValue: 'Brand Activation',
    summary:
      'Connect consumer, sportswear, lifestyle, and nutrition brands with health-conscious audiences through credible, expert-led physical experiences and content.',
    summaryTh:
      'เชื่อมแบรนด์ของคุณเข้ากับกลุ่มคนรักสุขภาพด้วยประสบการณ์ที่จริงใจ มีความรู้รองรับ และสร้างความจดจำผ่านการลงมือเคลื่อนไหวจริง',
    programs: [
      'Sport Brand Activation & Product Trials',
      'Integrated Wellness Campaigns',
      'Curated Community Brand Experiences',
      'Expert-Led Educational Content Series',
    ],
    programsTh: [
      'กิจกรรมเปิดตัวและทดลองสินค้าผ่านการเคลื่อนไหวจริง',
      'แคมเปญส่งเสริมสุขภาพและไลฟ์สไตล์แบบครบวงจร',
      'กิจกรรมสร้างประสบการณ์ร่วมระหว่างแบรนด์และคอมมูนิตี้',
      'การผลิตคอนเทนต์ความรู้สุขภาพร่วมกับทีมผู้เชี่ยวชาญ',
    ],
    idealFor: 'Sportswear · Nutrition & Beverage · Lifestyle & Automotive · Financial Brands',
    idealForTh: 'แบรนด์ชุดกีฬา · อาหารและเครื่องดื่มสุขภาพ · แบรนด์ไลฟ์สไตล์และยานยนต์ · สถาบันการเงิน',
    outcomeStatement: 'High-trust brand affinity grounded in authentic physical experience and digital storytelling.',
    image: '/assets/images/realistic/solution_02_brand.jpg',
    objectPosition: '50% 30%',
    categoryTag: 'BRANDS · CAMPAIGNS',
  },
  {
    index: '03',
    id: 'community-programs',
    title: 'COMMUNITY',
    titleTh: 'การออกแบบและบริหารจัดการคอมมูนิตี้คนรักการเคลื่อนไหว',
    projectTypeModalValue: 'Community',
    summary:
      'Inclusive, structured movement clubs designed for longevity, social belonging, and progressive confidence across every age and fitness starting point.',
    summaryTh:
      'พื้นที่คอมมูนิตี้ที่เปิดกว้างสำหรับทุกคน ไม่ว่าจะเป็นนักวิ่งหน้าใหม่ วัยทำงาน หรือกลุ่ม Active 40+ ที่ต้องการดูแลร่างกายอย่างถูกวิธี',
    programs: [
      'JAIKLA Run Club',
      'Urban Mindful Walk Club',
      'Active 40+ Longevity & Mobility Program',
      'Beginner Fitness & Movement Confidence',
      'Specialized Sport Community Gatherings',
    ],
    programsTh: [
      'คลับวิ่ง JAIKLA Run Club สำหรับทุกระดับความฟิต',
      'คลับเดินเพื่อสุขภาพและฝึกสมดุลการเคลื่อนไหวในเมือง',
      'โปรแกรมดูแลความคล่องตัวและข้อต่อสำหรับวัย 40+',
      'คลาสปูพื้นฐานการออกกำลังกายอย่างมั่นใจสำหรับผู้เริ่มต้น',
      'กิจกรรมรวมกลุ่มคอมมูนิตี้คนรักกีฬาเฉพาะทาง',
    ],
    idealFor: 'Urban Communities · Retail & Mixed-Use Spaces · Property Developers',
    idealForTh: 'คอมมูนิตี้เมือง · ศูนย์การค้าและพื้นที่รีเทล · โครงการอสังหาริมทรัพย์และมิกซ์ยูส',
    outcomeStatement: 'Recurring footfall, deep community loyalty, and welcoming entry points to active living.',
    image: '/assets/images/realistic/solution_03_community.jpg',
    objectPosition: '50% 35%',
    categoryTag: 'COMMUNITY · LONGEVITY',
  },
  {
    index: '04',
    id: 'knowledge-workshop',
    title: 'KNOWLEDGE & WORKSHOP',
    titleTh: 'เวิร์กชอปและการเรียนรู้เพื่อความเข้าใจในร่างกายอย่างแท้จริง',
    projectTypeModalValue: 'Workshop',
    summary:
      'Hands-on educational labs led by allied health and movement specialists—turning complex human physiology into actionable skills for training and daily life.',
    summaryTh:
      'เวิร์กชอปเชิงปฏิบัติการที่ช่วยให้ผู้เข้าร่วมเข้าใจกลไกการทำงานของร่างกาย หัวใจ ข้อต่อ และการฟื้นฟู เพื่อนำไปดูแลตัวเองได้อย่างถูกต้อง',
    programs: [
      'Know Your Body: Biomechanics & Posture Lab',
      'Know Your Heart: Effort, Zones & Pacing Literacy',
      'Applied Joint Mobility & Movement Prep',
      'Intelligent Recovery & Myofascial Techniques',
      'Functional Strength Foundations',
      'Running Education & Injury Prevention Mechanics',
    ],
    programsTh: [
      'เวิร์กชอปวิเคราะห์โครงสร้างท่าทางและชีวกลศาสตร์ร่างกาย',
      'การเรียนรู้โซนอัตราการเต้นหัวใจและการกะระดับความหนัก',
      'การเตรียมความพร้อมข้อต่อและความยืดหยุ่นก่อนเคลื่อนไหว',
      'เทคนิคการฟื้นฟูร่างกายและการคลายพังผืดกล้ามเนื้ออย่างถูกวิธี',
      'การสร้างความแข็งแรงเชิงหน้าที่เพื่อรองรับชีวิตประจำวัน',
      'ศาสตร์การวิ่งอย่างปลอดภัยและการป้องกันการบาดเจ็บ',
    ],
    idealFor: 'Corporates · Running Clubs · Fitness Studios · Educational Summits',
    idealForTh: 'องค์กรและบริษัท · ชมรมวิ่งและกีฬา · สตูดิโอสุขภาพ · งานสัมมนาเชิงปฏิบัติการ',
    outcomeStatement: 'Empowered participants who move with higher confidence and lower injury risk.',
    image: '/assets/images/realistic/solution_04_workshop.jpg',
    objectPosition: '50% 35%',
    categoryTag: 'EDUCATION · ALLIED HEALTH',
  },
  {
    index: '05',
    id: 'sport-wellness-experience',
    title: 'SPORT & WELLNESS EXPERIENCE',
    titleTh: 'การออกแบบอีเวนต์กีฬาและเทศกาลสุขภาพครบวงจร',
    projectTypeModalValue: 'Sport Event',
    summary:
      'Next-generation sport events, wellness festivals, and corporate games where preparation, performance, and post-event recovery are designed as one cohesive journey.',
    summaryTh:
      'พลิกโฉมงานอีเวนต์กีฬาและเทศกาลสุขภาพ ด้วยการออกแบบประสบการณ์ตั้งแต่ก่อนเริ่มแข่งขัน ระหว่างเคลื่อนไหว ไปจนถึงโซนฟื้นฟูร่างกายระดับพรีเมียม',
    programs: [
      'Signature Sport Events & Boutique Races',
      'Multi-Sensory Wellness Festivals',
      'Modern Corporate Games & Team Relays',
      'Specialized Sport Performance Clinics',
      'Large-Scale Community Activations',
    ],
    programsTh: [
      'การออกแบบงานวิ่งและอีเวนต์กีฬาที่มีเอกลักษณ์เฉพาะตัว',
      'เทศกาลสุขภาพและการฟื้นฟูร่างกายแบบครบวงจร',
      'กีฬาสีและการแข่งขันสร้างทีมเวิร์กยุคใหม่สำหรับองค์กร',
      'คลินิกพัฒนาทักษะและสมรรถภาพทางการกีฬาเฉพาะทาง',
      'โซนดูแลและฟื้นฟูนักกีฬามาตรฐานมืออาชีพในงานแข่งขันขนาดใหญ่',
    ],
    idealFor: 'Event Sponsors · Shopping Centers · Tourism & City Destinations · Enterprises',
    idealForTh: 'ผู้จัดงานและสปอนเซอร์ · ศูนย์การค้า · การท่องเที่ยวและเมือง · องค์กรขนาดใหญ่',
    outcomeStatement: 'Memorable, safety-first signature events that set a new benchmark for participant care.',
    image: '/assets/images/realistic/solution_05_sports.jpg',
    objectPosition: '50% 35%',
    categoryTag: 'EVENTS · FESTIVALS',
  },
];

export interface ExpertPillar {
  index: string;
  title: string;
  titleTh: string;
  focus: string;
  description: string;
  descriptionTh: string;
  image: string;
  category: ImageCategory;
}

export const EXPERT_GUIDANCE_PILLARS: ExpertPillar[] = [
  {
    index: '01',
    title: 'Body Awareness',
    titleTh: 'การรับรู้และเข้าใจโครงสร้างร่างกาย',
    focus: 'Postural alignment · Breathing mechanics · Kinesthetic sense',
    description:
      'Learning to read tension, balance, and movement patterns before stepping into high-intensity training.',
    descriptionTh: 'ฝึกสังเกตสมดุลท่าทาง จังหวะการหายใจ และสัญญาณของร่างกายในชีวิตประจำวัน',
    image: CAMPAIGN_IMAGES.campaign_02.src,
    category: 'BODY AWARENESS',
  },
  {
    index: '02',
    title: 'Movement Preparation',
    titleTh: 'การเตรียมความพร้อมก่อนเคลื่อนไหว',
    focus: 'Dynamic warm-up · Neuromuscular priming · Joint centration',
    description:
      'Structured activation routines that prepare tendons, fascia, and nervous system pathways for real-world load.',
    descriptionTh: 'ลำดับการวอร์มอัปและกระตุ้นกล้ามเนื้อที่ออกแบบตามหลักชีวกลศาสตร์ก่อนเริ่มกิจกรรม',
    image: CAMPAIGN_IMAGES.campaign_08.src,
    category: 'EXPERT GUIDANCE',
  },
  {
    index: '03',
    title: 'Exercise Education',
    titleTh: 'ความรู้ในการออกกำลังกายอย่างมีหลักการ',
    focus: 'Form literacy · Effort calibration · Progressive overload',
    description:
      'Replacing guesswork and aggressive fitness myths with clear, science-backed exercise literacy.',
    descriptionTh: 'เข้าใจเหตุผลเบื้องหลังทุกท่าฝึก รู้จักการกะระดับความหนักที่เหมาะสมกับร่างกายตนเอง',
    image: CAMPAIGN_IMAGES.campaign_14.src,
    category: 'EXPERT GUIDANCE',
  },
  {
    index: '04',
    title: 'Recovery',
    titleTh: 'ศาสตร์แห่งการฟื้นฟูร่างกาย',
    focus: 'Myofascial release · Parasympathetic reset · Tissue care',
    description:
      'Active cooldown protocols, foam rolling mechanics, and restorative breathwork that accelerate readiness.',
    descriptionTh: 'เทคนิคการคลายกล้ามเนื้อและลดความล้าสะสม เพื่อให้ร่างกายฟื้นตัวได้อย่างมีประสิทธิภาพ',
    image: CAMPAIGN_IMAGES.campaign_05.src,
    category: 'RECOVERY',
  },
  {
    index: '05',
    title: 'Mobility',
    titleTh: 'ความยืดหยุ่นและองศาการเคลื่อนไหวของข้อต่อ',
    focus: 'End-range control · Thoracic & hip freedom · Fluid transition',
    description:
      'Unlocking functional range of motion across ankles, hips, and spine so every stride and lift feels unrestricted.',
    descriptionTh: 'พัฒนาช่วงการเคลื่อนไหวของข้อต่อสำคัญ เพื่อให้ทุกก้าวมีความคล่องตัวและลดการบาดเจ็บ',
    image: CAMPAIGN_IMAGES.campaign_01.src,
    category: 'MOBILITY',
  },
  {
    index: '06',
    title: 'Strength Development',
    titleTh: 'การเสริมสร้างความแข็งแรงเชิงหน้าที่',
    focus: 'Joint stability · Force absorption · Durable movement',
    description:
      'Building resilient muscular support and tendon durability that serve everyday life and lifelong sport.',
    descriptionTh: 'สร้างความแข็งแรงของกล้ามเนื้อและข้อต่อเพื่อรองรับแรงกระแทกและเพิ่มประสิทธิภาพการเคลื่อนไหว',
    image: CAMPAIGN_IMAGES.campaign_09.src,
    category: 'STRENGTH',
  },
];

export interface FlywheelNode {
  index: string;
  id: string;
  label: string;
  labelTh: string;
  angleDeg: number;
  headline: string;
  description: string;
  descriptionTh: string;
}

export const FLYWHEEL_NODES: FlywheelNode[] = [
  {
    index: '01',
    id: 'knowledge',
    label: 'KNOWLEDGE',
    labelTh: 'องค์ความรู้เฉพาะทาง',
    angleDeg: -90,
    headline: 'Allied Health & Movement Science Foundation',
    description:
      'Every project begins with credible exercise and wellness insight—creating immediate trust and differentiation.',
    descriptionTh: 'ต่อยอดจากความรู้เรื่องการเคลื่อนไหวและประสบการณ์ลงพื้นที่จริงของทีม เพื่อออกแบบกิจกรรมที่ทั้งเข้าใจง่ายและใช้งานได้จริง',
  },
  {
    index: '02',
    id: 'activity',
    label: 'ACTIVITY',
    labelTh: 'ใส่ใจผู้เข้าร่วม',
    angleDeg: -38.5,
    headline: 'Designed Physical Experiences',
    description:
      'Knowledge turns into tangible movement—workshops, run clubs, corporate resets, and sport activations.',
    descriptionTh: 'ให้ความสำคัญกับสิ่งที่ผู้เข้าร่วมได้รับจริง ทั้งความเข้าใจ ความรู้สึก และประสบการณ์ตั้งแต่ต้นจนจบ',
  },
  {
    index: '03',
    id: 'community',
    label: 'COMMUNITY',
    labelTh: 'เชื่อมบริการ',
    angleDeg: 13,
    headline: 'Shared Progression & Belonging',
    description:
      'Repeated quality activities foster authentic human connection, retention, and organic advocacy.',
    descriptionTh: 'เชื่อมเวิร์กชอป คอมมูนิตี้ กิจกรรมองค์กร โปรดักชันหน้างาน และสื่อดิจิทัลให้ทำงานร่วมกันตามโจทย์',
  },
  {
    index: '04',
    id: 'data',
    label: 'DATA',
    labelTh: 'ร่วมมือระยะยาว',
    angleDeg: 64.5,
    headline: 'Participation & Movement Insights',
    description:
      'Real engagement behaviors, readiness trends, and community feedback inform smarter program iteration.',
    descriptionTh: 'วางระบบการทำงานที่ชัดเจน เพื่อให้พาร์ทเนอร์สามารถต่อยอดโปรเจกต์และพัฒนาความร่วมมือในระยะยาว',
  },
  {
    index: '05',
    id: 'content',
    label: 'CONTENT',
    labelTh: 'ดูแลการเคลื่อนไหว',
    angleDeg: 116,
    headline: 'Digital Storytelling & Media Amplification',
    description:
      'Live human energy and expert insights are captured into high-impact digital media that scales reach far beyond the venue.',
    descriptionTh: 'ออกแบบประสบการณ์ให้มีทั้งช่วงเตรียมตัว การเคลื่อนไหว การพัก และการเรียนรู้วิธีดูแลตัวเองหลังจบกิจกรรม',
  },
  {
    index: '06',
    id: 'client-value',
    label: 'CLIENT VALUE',
    labelTh: 'สร้างคุณค่าให้ผู้คน',
    angleDeg: 167.5,
    headline: 'Measurable Brand Equity & Workforce Vitality',
    description:
      'Partners gain authentic brand love, healthier teams, recurring footfall, and high-trust positioning.',
    descriptionTh: 'เหมาะกับองค์กรที่ต้องการสร้างกิจกรรมให้คนในทีม หรือแบรนด์ที่อยากสร้างประสบการณ์สุขภาพให้ลูกค้ามีส่วนร่วมจริง',
  },
  {
    index: '07',
    id: 'new-project',
    label: 'NEW PROJECT',
    labelTh: 'ออกแบบเฉพาะโจทย์',
    angleDeg: 219,
    headline: 'Compounding Ecosystem Expansion',
    description:
      'Success fuels the next cycle of deeper programs, flagship festivals, and long-term strategic partnerships.',
    descriptionTh: 'ร่วมคิดและออกแบบกิจกรรมเฉพาะให้สอดคล้องกับเป้าหมาย กลุ่มเป้าหมาย และบุคลิกของแต่ละองค์กรหรือแบรนด์',
  },
];
