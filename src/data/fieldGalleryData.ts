import { SupportedLocale } from './i18nData';

export type FieldPhotoCategory = 'ALL' | 'RECOVERY' | 'MUSCLE_DEV' | 'TEAM_GUIDANCE';

export interface FieldCaptionContent {
  tag: string;
  title: string;
  description: string;
  locationNote: string;
}

export interface FieldGalleryItem {
  id: string;
  index: string;
  driveId: string;
  localSrc: string;
  fallbackSrc: string;
  width: number;
  height: number;
  orientation: 'landscape' | 'portrait';
  category: Exclude<FieldPhotoCategory, 'ALL'>;
  gridSpan: 'hero' | 'portrait' | 'wide' | 'standard';
  defaultObjectPosition: string;
  captions: Record<SupportedLocale, FieldCaptionContent>;
}

export type FieldFrameLayoutMode = 'cinema-deck' | 'fan-stack' | 'kinetic-filmstrip';

export interface FieldGalleryLocaleUI {
  kicker: string;
  headline1: string;
  headline2: string;
  lead: string;
  subLead: string;
  trustBadges: [string, string, string];
  frameModes: Record<FieldFrameLayoutMode, string>;
  autoPlayLabel: string;
  pauseLabel: string;
  deckHeader: string;
  expandFullBtn: string;
  categories: Record<FieldPhotoCategory, string>;
  featuredLabel: string;
  inspectHint: string;
  lightboxClose: string;
  lightboxPrev: string;
  lightboxNext: string;
  focalControlLabel: string;
  focalReset: string;
  driveSourceLabel: string;
  totalPhotosBadge: string;
  editCaptionBtn: string;
  saveCaptionBtn: string;
  resetCaptionBtn: string;
  captionTagLabel: string;
  captionTitleLabel: string;
  captionDescLabel: string;
}

export const FIELD_GALLERY_UI: Record<SupportedLocale, FieldGalleryLocaleUI> = {
  en: {
    kicker: 'PROVEN ON-GROUND EXECUTION · CORPORATE & BRAND WELLNESS ACTIVATION',
    headline1: 'OUR TEAM IN ACTION',
    headline2: 'REAL FIELD EXPERIENCE ARCHIVE',
    lead: 'Delivering high-impact, on-ground recovery lounges, guided foam-rolling workshops, and attentive participant care for corporate wellness days, running events, and brand campaigns.',
    subLead:
      'Every activation is designed to elevate brand perception, maximize participant satisfaction, and create shareable moments of genuine care.',
    trustBadges: [
      'Turnkey On-Ground Event Execution',
      'Elevated Brand & Participant Experience',
      'Professional Specialist Care Team',
    ],
    frameModes: {
      'cinema-deck': 'Spotlight & Card Matrix',
      'fan-stack': '3D Interactive Card Deck',
      'kinetic-filmstrip': 'Continuous Motion Filmstrip',
    },
    autoPlayLabel: 'Auto-Play Showcase',
    pauseLabel: 'Pause Showcase',
    deckHeader: 'FIELD ACTIVATION PORTFOLIO · SELECT ANY CAPTURE',
    expandFullBtn: 'View Full Resolution',
    categories: {
      ALL: 'All Highlights',
      RECOVERY: 'Recovery Lounge Service',
      MUSCLE_DEV: 'Foam Roll & Mat Zone',
      TEAM_GUIDANCE: 'Consultation & Brand Care',
    },
    featuredLabel: 'LIVE EVENT EXECUTION',
    inspectHint: 'Select any photo card to preview highlights or open in full resolution',
    lightboxClose: 'Close',
    lightboxPrev: 'Previous',
    lightboxNext: 'Next',
    focalControlLabel: 'IMAGE POSITION & FRAMING CALIBRATION',
    focalReset: 'Reset Framing',
    driveSourceLabel: 'Verified JAIKLA On-Ground Event & Brand Activation Portfolio',
    totalPhotosBadge: 'UNIFIED INTERACTIVE SHOWCASE',
    editCaptionBtn: 'Edit Caption Copy',
    saveCaptionBtn: 'Done Editing',
    resetCaptionBtn: 'Reset Default Copy',
    captionTagLabel: 'Marketing Tag / Category',
    captionTitleLabel: 'Headline Title',
    captionDescLabel: 'Corporate & Marketing Description',
  },

  th: {
    kicker: 'ประสบการณ์จากพื้นที่จริง · การดูแลหลังการเคลื่อนไหว',
    headline1: 'จากพื้นที่จริง',
    headline2: 'สู่ประสบการณ์ที่เราใส่ใจ',
    lead: 'ภาพจากการทำงานจริงของทีมที่ลงพื้นที่ดูแลนักวิ่งและผู้เข้าร่วมกิจกรรม ตั้งแต่การพูดคุย สำรวจความตึงล้า ไปจนถึงการยืดเหยียดและการดูแลหลังจบกิจกรรม',
    subLead:
      'ช่วยเติมเต็มคุณภาพให้งานสปอร์ตอีเวนต์ แคมเปญการตลาด และกิจกรรมองค์กร สร้างความเชื่อมั่นและความประทับใจที่ผู้เข้าร่วมอยากบอกต่อ',
    trustBadges: [
      'ทีมงานมืออาชีพพร้อมดูแลหน้างานครบวงจร',
      'สร้างภาพลักษณ์ที่ดีและความประทับใจให้แบรนด์',
      'รองรับทั้งกิจกรรมองค์กรและสปอร์ตอีเวนต์',
    ],
    frameModes: {
      'cinema-deck': 'ภาพไฮไลต์ + แผงการ์ดรวม',
      'fan-stack': 'การ์ดซ้อนมิติ 3D',
      'kinetic-filmstrip': 'แถบภาพเคลื่อนไหวต่อเนื่อง',
    },
    autoPlayLabel: 'เล่นภาพอัตโนมัติ',
    pauseLabel: 'หยุดเลื่อนอัตโนมัติ',
    deckHeader: 'เลือกภาพด้านล่างเพื่อดูเรื่องราวและวิธีทำงานของทีมในแต่ละช่วง',
    expandFullBtn: 'ขยายดูภาพขนาดเต็ม',
    categories: {
      ALL: 'ผลงานทั้งหมด',
      RECOVERY: 'โซนบริการนวดและคลายกล้ามเนื้อ',
      MUSCLE_DEV: 'โซนเสื่อและโฟมโรลเลอร์',
      TEAM_GUIDANCE: 'การดูแลและให้คำปรึกษาหน้างาน',
    },
    featuredLabel: 'ประสบการณ์จากพื้นที่จริง',
    inspectHint: 'เลือกภาพด้านล่างเพื่อดูเรื่องราวและวิธีทำงานของทีมในแต่ละช่วง',
    lightboxClose: 'ปิดหน้าต่าง',
    lightboxPrev: 'ภาพก่อนหน้า',
    lightboxNext: 'ภาพถัดไป',
    focalControlLabel: 'ปรับตำแหน่งจุดโฟกัสและการจัดวางภาพ',
    focalReset: 'รีเซ็ตจุดโฟกัส',
    driveSourceLabel: 'แฟ้มภาพผลงานจริงจากการออกบูธและจัดกิจกรรมภาคสนามของทีมงาน JAIKLA',
    totalPhotosBadge: 'แสดงผลในเฟรมอนิเมชันเดียว',
    editCaptionBtn: 'แก้ไขประโยคอธิบายใต้ภาพ',
    saveCaptionBtn: 'บันทึกข้อความ',
    resetCaptionBtn: 'คืนค่าข้อความต้นฉบับ',
    captionTagLabel: 'หมวดหมู่ / แท็กนำเสนอ',
    captionTitleLabel: 'หัวข้อหลักใต้ภาพ',
    captionDescLabel: 'ประโยคอธิบายใต้ภาพ (แนวทางองค์กรและการตลาด)',
  },

  zh: {
    kicker: '真实外场活动执行 · 赋能企业与品牌健康体验',
    headline1: '团队外场实战纪实',
    headline2: '打造令客户与参与者信赖的现场体验',
    lead: '全方位呈现团队在运动赛事与品牌活动现场的执行力——涵盖户外折叠椅肩颈放松、专业筋膜枪护理、泡沫轴垫上指导与一对一咨询服务。',
    subLead: '通过高品质的现场健康关怀服务，助力合作伙伴提升品牌好感度与社交媒体口碑传播。',
    trustBadges: [
      '一站式外场活动专业执行团队',
      '提升品牌形象与参与者满意度',
      '适配企业健康日与大型运动赛事',
    ],
    frameModes: {
      'cinema-deck': '主视觉 + 卡片矩阵',
      'fan-stack': '3D 立体叠层卡片组',
      'kinetic-filmstrip': '动态连续胶片画廊',
    },
    autoPlayLabel: '自动轮播展示',
    pauseLabel: '暂停轮播',
    deckHeader: '外场实战精选集 · 点击任意卡片即时预览',
    expandFullBtn: '全屏高清查看',
    categories: {
      ALL: '全部精选',
      RECOVERY: '现场肩颈与肌肉放松区',
      MUSCLE_DEV: '泡沫轴与垫上互动区',
      TEAM_GUIDANCE: '现场咨询与品牌关怀',
    },
    featuredLabel: '真实活动现场',
    inspectHint: '点击任意卡片切换主画面，或点击全屏查看高清大图',
    lightboxClose: '关闭',
    lightboxPrev: '上一张',
    lightboxNext: '下一张',
    focalControlLabel: '画面焦点位置校准',
    focalReset: '重置位置',
    driveSourceLabel: 'JAIKLA 团队真实外场活动与品牌赋能纪实档案',
    totalPhotosBadge: '交互式整合动画画框',
    editCaptionBtn: '编辑图片说明文案',
    saveCaptionBtn: '完成编辑',
    resetCaptionBtn: '恢复默认文案',
    captionTagLabel: '营销标签',
    captionTitleLabel: '图片主标题',
    captionDescLabel: '企业与营销导向说明文案',
  },

  ko: {
    kicker: '검증된 현장 운영 역량 · 기업 및 브랜드 웰니스 액티베이션',
    headline1: '전문 팀 현장 수행 포트폴리오',
    headline2: '고객과 참가자의 신뢰를 높이는 현장 케어',
    lead: '야외 리커버리 체어 마사지, 마사지건 집중 케어, 폼롤러 매트 세션, 1:1 현장 상담까지 스포츠 이벤트와 기업 행사의 품격을 높이는 실제 운영 모습입니다.',
    subLead: '체계적인 현장 운영과 세심한 참가자 케어로 파트너 브랜드의 가치와 참가자 만족도를 동시에 극대화합니다.',
    trustBadges: [
      '현장 맞춤형 턴키 운영 솔루션',
      '브랜드 호감도 및 참가자 만족도 제고',
      '숙련된 현장 케어 전문가 팀 상주',
    ],
    frameModes: {
      'cinema-deck': '스포트라이트 + 카드 매트릭스',
      'fan-stack': '3D 인터랙티브 카드 덱',
      'kinetic-filmstrip': '연속 모션 필름스트립',
    },
    autoPlayLabel: '쇼케이스 자동 재생',
    pauseLabel: '일시 정지',
    deckHeader: '현장 운영 포트폴리오 · 카드를 클릭하여 전환',
    expandFullBtn: '고화질 전체 화면 보기',
    categories: {
      ALL: '전체 하이라이트',
      RECOVERY: '리커버리 체어 케어 존',
      MUSCLE_DEV: '폼롤러 & 매트 세션 존',
      TEAM_GUIDANCE: '현장 상담 & 브랜드 호스피탈리티',
    },
    featuredLabel: '라이브 현장 운영',
    inspectHint: '카드를 클릭하여 하이라이트를 전환하거나 전체 화면으로 감상하세요',
    lightboxClose: '닫기',
    lightboxPrev: '이전',
    lightboxNext: '다음',
    focalControlLabel: '사진 초점 및 프레이밍 위치 조정',
    focalReset: '초점 초기화',
    driveSourceLabel: 'JAIKLA 현장 이벤트 및 브랜드 액티베이션 공식 아카이브',
    totalPhotosBadge: '통합 인터랙티브 쇼케이스',
    editCaptionBtn: '사진 설명 문구 편집',
    saveCaptionBtn: '편집 완료',
    resetCaptionBtn: '기본 문구로 복원',
    captionTagLabel: '마케팅 태그',
    captionTitleLabel: '사진 제목',
    captionDescLabel: '비즈니스 및 마케팅 설명 문구',
  },

  ja: {
    kicker: '確かな現場運営実績 · 法人＆ブランド・ウェルネスアクティベーション',
    headline1: '専門チームのフィールド実践実績',
    headline2: 'ブランド価値と参加者の満足度を高める現場体験',
    lead: '屋外リカバリーチェアでの肩・首ケア、マッサージガン施術、フォームローラー体験ゾーン、1対1のコンディショニング相談まで、イベント現場のリアルな運営風景です。',
    subLead:
      '質の高いホスピタリティと実践的なリカバリー体験により、主催企業やブランドへの信頼と自然なSNS拡散を生み出します。',
    trustBadges: [
      'イベント現場のワンストップ運営体制',
      'ブランド好感度と参加者満足度の向上',
      '経験豊富な専門スタッフによる丁寧な対応',
    ],
    frameModes: {
      'cinema-deck': 'スポットライト＋カード一覧',
      'fan-stack': '3Dインタラクティブ・デッキ',
      'kinetic-filmstrip': '連続モーション・フィルム',
    },
    autoPlayLabel: '自動再生',
    pauseLabel: '一時停止',
    deckHeader: 'フィールド実績ギャラリー · カードを選択して表示',
    expandFullBtn: 'フルサイズで拡大表示',
    categories: {
      ALL: 'すべての実績',
      RECOVERY: 'リカバリーチェア＆ケアゾーン',
      MUSCLE_DEV: 'フォームローラー＆マット体験',
      TEAM_GUIDANCE: '現場相談＆ブランドおもてなし',
    },
    featuredLabel: 'フィールド実践セッション',
    inspectHint: 'カードをクリックして表示を切り替え、または拡大表示で詳細をご確認いただけます',
    lightboxClose: '閉じる',
    lightboxPrev: '前へ',
    lightboxNext: '次へ',
    focalControlLabel: 'フォーカル位置＆フレーミング調整',
    focalReset: '位置をリセット',
    driveSourceLabel: 'JAIKLA フィールドイベント＆ブランドアクティベーション実績アーカイブ',
    totalPhotosBadge: '統合インタラクティブ・ショーケース',
    editCaptionBtn: 'キャプション文を編集',
    saveCaptionBtn: '編集を完了',
    resetCaptionBtn: '初期テキストに戻す',
    captionTagLabel: 'カテゴリータグ',
    captionTitleLabel: '見出しタイトル',
    captionDescLabel: '法人・マーケティング向け説明文',
  },

  ar: {
    kicker: 'سجل التنفيذ الميداني الموثق · تفعيل برامج العافية للشركات والعلامات التجارية',
    headline1: 'فريقنا في الميدان',
    headline2: 'تجارب ميدانية حقيقية تعزز ثقة العملاء والمشاركين',
    lead: 'تغطية حية لخدماتنا الميدانية المتكاملة، من مناطق الاستشفاء وتدليك الأكتاف، وأجهزة التدليك الحديثة، إلى جلسات الفوم رولر والاستشارات المباشرة للمشاركين.',
    subLead:
      'نصمم كل منطقة ميدانية لرفع قيمة الفعالية وتعزيز الصورة الذهنية الإيجابية للعلامة التجارية والشركات الشريكة.',
    trustBadges: [
      'تنفيذ ميداني متكامل للفعاليات والشركات',
      'تعزيز رضا المشاركين وقيمة العلامة التجارية',
      'فريق رعاية متخصص بتجربة ضيافة راقية',
    ],
    frameModes: {
      'cinema-deck': 'العرض الرئيسي + مصفوفة البطاقات',
      'fan-stack': 'مجموعة البطاقات ثلاثية الأبعاد',
      'kinetic-filmstrip': 'الشريط السينمائي المتحرك',
    },
    autoPlayLabel: 'تشغيل تلقائي للعرض',
    pauseLabel: 'إيقاف مؤقت',
    deckHeader: 'أرشيف الفعاليات الميدانية · اختر أي بطاقة للعرض',
    expandFullBtn: 'عرض بالحجم الكامل',
    categories: {
      ALL: 'جميع اللقطات',
      RECOVERY: 'منطقة كراسي الاستشفاء والتدليك',
      MUSCLE_DEV: 'منطقة الفوم رولر والتمارين الأرضية',
      TEAM_GUIDANCE: 'الاستشارات المباشرة وتجربة الضيافة',
    },
    featuredLabel: 'تنفيذ ميداني مباشر',
    inspectHint: 'انقر على أي بطاقة لمعاينة اللقطات الميدانية أو عرضها بالحجم الكامل',
    lightboxClose: 'إغلاق',
    lightboxPrev: 'السابق',
    lightboxNext: 'التالي',
    focalControlLabel: 'معايرة موضع الصورة ونقطة التركيز',
    focalReset: 'إعادة ضبط الموضع',
    driveSourceLabel: 'أرشيف فعاليات وأنشطة JAIKLA الميدانية الموثق',
    totalPhotosBadge: 'إطار عرض تفاعلي موحد',
    editCaptionBtn: 'تعديل النص التوضيحي',
    saveCaptionBtn: 'حفظ التعديلات',
    resetCaptionBtn: 'استعادة النص الافتراضي',
    captionTagLabel: 'الوسم التسويقي',
    captionTitleLabel: 'عنوان الصورة',
    captionDescLabel: 'الوصف التسويقي والمؤسسي',
  },
};

export const FIELD_GALLERY_ITEMS: FieldGalleryItem[] = [
  {
    id: 'field_01',
    index: '01',
    driveId: '1G61_azDLTGEQItdjXTf2B9ajtE766GeA',
    localSrc: '/assets/field-gallery/field_01.jpg',
    fallbackSrc: 'https://drive.google.com/thumbnail?id=1G61_azDLTGEQItdjXTf2B9ajtE766GeA&sz=w1600',
    width: 1600,
    height: 1201,
    orientation: 'landscape',
    category: 'RECOVERY',
    gridSpan: 'hero',
    defaultObjectPosition: '50% 38%',
    captions: {
      en: {
        tag: 'RECOVERY HOSPITALITY · OUTDOOR PLAZA',
        title: 'Attentive Seated Recovery Service for Event Participants',
        description:
          'Our field team welcomes finishers into a dedicated outdoor chair-recovery zone, delivering immediate post-activity relief that elevates the overall event experience.',
        locationNote: 'Outdoor Plaza Recovery Zone',
      },
      th: {
        tag: 'การคลายกล้ามเนื้อเชิงลึก',
        title: 'ดูแลกล้ามเนื้อขาหลังจบกิจกรรม',
        description:
          'หลังเข้าเส้นชัย ทีมงานช่วยดูแลความตึงล้าของกล้ามเนื้อขา เพื่อให้ผู้เข้าร่วมได้ผ่อนคลายและสังเกตสภาพร่างกายของตัวเองก่อนกลับไปพัก',
        locationNote: 'โซนบริการพักฟื้นกลางแจ้ง',
      },
      zh: {
        tag: '现场恢复礼遇 · 户外活动广场',
        title: '为现场参与者提供贴心的坐姿放松护理',
        description: '专业团队在户外恢复区为坐在折叠椅上的参与者提供即时放松服务，全面提升赛事与品牌活动的参与体验。',
        locationNote: '户外广场恢复专区',
      },
      ko: {
        tag: '리커버리 호스피탈리티 · 야외 플라자',
        title: '참가자 만족도를 높이는 야외 시티드 리커버리 케어',
        description: '야외 의자에 착석한 참가자들에게 즉각적인 피로 회복 케어를 제공하여 행사의 품격과 브랜드 호감도를 높입니다.',
        locationNote: '야외 리커버리 라운지',
      },
      ja: {
        tag: 'リカバリー・ホスピタリティ · 屋外プラザ',
        title: 'イベント参加者に寄り添う屋外チェア・リカバリーケア',
        description: '運動後の参加者を専用チェアゾーンへ迎え入れ、丁寧なボディケアでイベント全体の満足度を引き上げます。',
        locationNote: '屋外プラザ・リカバリーゾーン',
      },
      ar: {
        tag: 'ضيافة الاستشفاء · الساحة الخارجية',
        title: 'خدمة رعاية واسترخاء مباشرة للمشاركين على كراسي الاستشفاء',
        description: 'فريقنا الميداني يستقبل المشاركين في منطقة الاستراحة الخارجية لتقديم رعاية فورية ترفع من جودة تجربة الفعالية.',
        locationNote: 'منطقة الاستشفاء الخارجية',
      },
    },
  },
  {
    id: 'field_02',
    index: '02',
    driveId: '1ulExGyZ8OKhw-nh-m2rUQfVYE2eLtC8w',
    localSrc: '/assets/field-gallery/field_02.jpg',
    fallbackSrc: 'https://drive.google.com/thumbnail?id=1ulExGyZ8OKhw-nh-m2rUQfVYE2eLtC8w&sz=w1600',
    width: 1600,
    height: 1201,
    orientation: 'landscape',
    category: 'TEAM_GUIDANCE',
    gridSpan: 'standard',
    defaultObjectPosition: '50% 34%',
    captions: {
      en: {
        tag: 'PERSONALIZED ONBOARDING · PARTICIPANT CARE',
        title: 'One-on-One Check-In & Individualized Care Preparation',
        description:
          'Staff members take time with each seated guest to record details and tailor the recovery session—turning a standard booth visit into a personal brand touchpoint.',
        locationNote: 'Participant Check-In Station',
      },
      th: {
        tag: 'การดูแลน่องและเอ็นร้อยหวาย',
        title: 'ดูแลกล้ามเนื้อน่องและบริเวณเอ็นร้อยหวาย',
        description:
          'ดูแลบริเวณน่องและเอ็นร้อยหวาย ซึ่งเป็นส่วนที่ทำงานหนักระหว่างการวิ่ง พร้อมแนะนำการพักและการดูแลตัวเองหลังจบกิจกรรม',
        locationNote: 'จุดลงทะเบียนและต้อนรับผู้เข้าร่วม',
      },
      zh: {
        tag: '专属接待体验 · 一对一关怀',
        title: '一对一现场登记与个性化恢复准备',
        description: '工作人员细致为入座参与者登记并确认需求，将每一次互动转化为有温度的品牌接触点。',
        locationNote: '现场接待工作站',
      },
      ko: {
        tag: '맞춤형 온보딩 · 밀착 참가자 케어',
        title: '참가자 한 분 한 분을 위한 1:1 체크인 및 케어 준비',
        description: '착석한 참가자의 상태를 세심하게 기록하고 맞춤형 케어를 준비하여 브랜드의 진정성 있는 가치를 전달합니다.',
        locationNote: '현장 체크인 스테이션',
      },
      ja: {
        tag: 'パーソナル受付 · 参加者おもてなし',
        title: '一人ひとりに向き合う1対1の受付＆ケア準備',
        description: '着席した参加者の状況を丁寧に確認・記録し、通常のブース体験を特別なブランド体験へと昇華させます。',
        locationNote: 'チェックイン・ステーション',
      },
      ar: {
        tag: 'استقبال شخصي · عناية فردية بالمشاركين',
        title: 'تسجيل فردي وتجهيز مخصص لكل مشارك قبل بدء الجلسة',
        description: 'اهتمام مباشر بكل مشارك جالس لتخصيص تجربة الرعاية وتحويل زيارة الجناح إلى تفاعل إيجابي مع العلامة التجارية.',
        locationNote: 'نقطة استقبال المشاركين',
      },
    },
  },
  {
    id: 'field_03',
    index: '03',
    driveId: '1RyWF6vKwFkA5NSfTmQhIK__q_oOWZQZt',
    localSrc: '/assets/field-gallery/field_03.jpg',
    fallbackSrc: 'https://drive.google.com/thumbnail?id=1RyWF6vKwFkA5NSfTmQhIK__q_oOWZQZt&sz=w1600',
    width: 1600,
    height: 1201,
    orientation: 'landscape',
    category: 'RECOVERY',
    gridSpan: 'standard',
    defaultObjectPosition: '50% 36%',
    captions: {
      en: {
        tag: 'HIGH-CAPACITY RECOVERY LOUNGE · EVENT SERVICE',
        title: 'Hands-On Shoulder & Upper-Body Relief Across Chairs and Cots',
        description:
          'Designed for smooth participant throughput, our team provides seated shoulder massage alongside full-body recovery cots to keep event energy high.',
        locationNote: 'Outdoor Recovery Plaza',
      },
      th: {
        tag: 'การประเมินรายบุคคล',
        title: 'ดูแลนักวิ่งแบบรายบุคคลหลังจบกิจกรรม',
        description:
          'เริ่มจากการพูดคุยถึงความรู้สึกตึงล้าและลักษณะการใช้งานร่างกาย ก่อนเลือกวิธีดูแลที่เหมาะกับแต่ละคน',
        locationNote: 'ลานกิจกรรมพักฟื้นกลางแจ้ง',
      },
      zh: {
        tag: '高承载力恢复专区 · 现场服务',
        title: '结合折叠椅与恢复床的肩颈及上肢放松服务',
        description: '科学规划现场动线，团队同时为座椅与恢复床上的运动者提供肩部放松，高效承载大型活动人流。',
        locationNote: '户外恢复广场',
      },
      ko: {
        tag: '대규모 리커버리 라운지 · 현장 서비스',
        title: '체어 및 리커버리 베드를 활용한 어깨·상체 집중 케어',
        description: '의자와 캠프 베드를 동시에 운영하며 참가자들의 어깨 피로를 신속하고 쾌적하게 풀어주는 현장 운영 모습입니다.',
        locationNote: '야외 리커버리 플라자',
      },
      ja: {
        tag: 'リカバリーラウンジ運営 · イベントサービス',
        title: 'チェアとコットを併用した肩・上半身のリフレッシュ施術',
        description: '多くの参加者をスムーズに案内できるよう、チェアでの肩ケアとリカバリーコットを組み合わせて快適な休息を提供します。',
        locationNote: '屋外リカバリープラザ',
      },
      ar: {
        tag: 'صالة استشفاء عالية الطاقة · خدمة الفعاليات',
        title: 'تدليك الأكتاف والجزء العلوي عبر الكراسي وأسرّة الاستشفاء',
        description: 'تنظيم ميداني سلس يتيح لفريقنا تقديم جلسات تخفيف إجهاد الأكتاف لعدد كبير من المشاركين بكفاءة عالية.',
        locationNote: 'ساحة الاستشفاء الخارجية',
      },
    },
  },
  {
    id: 'field_04',
    index: '04',
    driveId: '1Bh6QNrSHg7rB6-kv4lIjcZDS0DlcYD7j',
    localSrc: '/assets/field-gallery/field_04.jpg',
    fallbackSrc: 'https://drive.google.com/thumbnail?id=1Bh6QNrSHg7rB6-kv4lIjcZDS0DlcYD7j&sz=w1600',
    width: 1600,
    height: 1201,
    orientation: 'landscape',
    category: 'RECOVERY',
    gridSpan: 'standard',
    defaultObjectPosition: '50% 35%',
    captions: {
      en: {
        tag: 'MODERN RECOVERY TECH · PRODUCT & BRAND SHOWCASE',
        title: 'Synchronized Percussion Massage Device Experience',
        description:
          'Three specialists simultaneously operate handheld massage devices on seated athletes—creating a visually striking station that showcases modern wellness equipment in real action.',
        locationNote: 'Percussion Recovery Pod',
      },
      th: {
        tag: 'การคลายจุดตึงตัว',
        title: 'สำรวจความตึงล้าและดูแลกล้ามเนื้อ',
        description:
          'สำรวจบริเวณที่รู้สึกตึงหรือเมื่อยล้า แล้วดูแลกล้ามเนื้ออย่างเหมาะสมกับสภาพของผู้เข้าร่วมแต่ละคน',
        locationNote: 'สเตชันอุปกรณ์นวดฟื้นฟูกล้ามเนื้อ',
      },
      zh: {
        tag: '现代恢复科技 · 产品与品牌联动',
        title: '三位专员同步呈现手持筋膜按摩设备体验',
        description: '团队同步使用专业按摩设备为入座运动者放松肩部，打造极具视觉吸引力的现代运动恢复体验站。',
        locationNote: '科技恢复体验站',
      },
      ko: {
        tag: '모던 리커버리 테크 · 브랜드 체험 존',
        title: '핸드헬드 마사지 디바이스를 활용한 동시 리커버리 케어',
        description: '세 명의 스태프가 나란히 착석한 참가자들에게 마사지 디바이스 케어를 진행하며 세련되고 전문적인 현장 분위기를 연출합니다.',
        locationNote: '디바이스 리커버리 포드',
      },
      ja: {
        tag: '最新リカバリー機器体験 · ブランド訴求',
        title: 'ハンディマッサージ機器を活用したシンクロ・リカバリー体験',
        description: '3名のスタッフが同時にマッサージ機器で肩まわりをケアし、最新ウェルネス機器の魅力をリアルな体験として伝えます。',
        locationNote: 'テック・リカバリーポッド',
      },
      ar: {
        tag: 'تقنيات الاستشفاء الحديثة · عرض حي للمعدات',
        title: 'تجربة متزامنة لأجهزة التدليك المحمولة للمشاركين',
        description: 'ثلاثة مختصين يستخدمون أجهزة التدليك الحديثة في وقت واحد لتوفير تجربة استشفاء عصرية تعكس احترافية الفعالية.',
        locationNote: 'محطة أجهزة التدليك الحديثة',
      },
    },
  },
  {
    id: 'field_05',
    index: '05',
    driveId: '16oS_vUU0xosuzsBPWUKywmO96RkwHkag',
    localSrc: '/assets/field-gallery/field_05.jpg',
    fallbackSrc: 'https://drive.google.com/thumbnail?id=16oS_vUU0xosuzsBPWUKywmO96RkwHkag&sz=w1600',
    width: 1600,
    height: 1201,
    orientation: 'landscape',
    category: 'MUSCLE_DEV',
    gridSpan: 'wide',
    defaultObjectPosition: '50% 35%',
    captions: {
      en: {
        tag: 'TURNKEY EVENT PRODUCTION · MULTI-ZONE ARENA',
        title: 'Vibrant Outdoor Wellness Plaza Combining Recovery & Mat Zones',
        description:
          'Set against a modern glass architectural backdrop, participants flow seamlessly between seated massage, recovery cots, and guided mat stretching.',
        locationNote: 'Main Outdoor Wellness Arena',
      },
      th: {
        tag: 'โซนฟื้นฟูหลังเส้นชัย',
        title: 'พื้นที่ฟื้นตัวหลังจบกิจกรรมที่เป็นกันเอง',
        description:
          'เราอยากให้โซนหลังเส้นชัยเป็นพื้นที่ที่ผู้เข้าร่วมได้พัก พูดคุย และดูแลร่างกายในบรรยากาศที่สบายและเป็นกันเอง',
        locationNote: 'ลานกิจกรรมหลักหน้าอาคาร',
      },
      zh: {
        tag: '一站式活动落地 · 多功能健康广场',
        title: '现代建筑广场前的多维恢复与垫上运动空间',
        description: '在现代玻璃幕墙建筑前打造活力四射的户外健康场域，将坐姿按摩、恢复床与垫上拉伸训练完美融合。',
        locationNote: '户外主活动广场',
      },
      ko: {
        tag: '턴키 이벤트 프로덕션 · 멀티 존 아레나',
        title: '도심 빌딩 앞 야외 광장을 채운 리커버리 & 매트 운동 존',
        description: '현대적인 건축물 야외 공간에서 마사지 케어, 휴식 베드, 매트 스트레칭이 한데 어우러진 활기찬 웰니스 페스티벌 현장입니다.',
        locationNote: '메인 야외 웰니스 아레나',
      },
      ja: {
        tag: '空間プロデュース · マルチゾーン運営',
        title: 'モダンな建築前の広場を彩るリカバリー＆マット運動エリア',
        description: 'チェアでのマッサージ、コットでの休息、そしてマット上でのストレッチや体幹ワークが一体となった活気あふれる会場風景です。',
        locationNote: 'メイン・ウェルネスプラザ',
      },
      ar: {
        tag: 'إنتاج متكامل للفعاليات · ساحة متعددة المناطق',
        title: 'ساحة عافية خارجية تجمع بين مناطق التدليك والتمارين الأرضية',
        description: 'تحويل الساحات الخارجية أمام المباني الحديثة إلى وجهة صحية متكاملة تشمل كراسي الاستشفاء والتمارين الجماعية على البساط.',
        locationNote: 'الساحة الرئيسية للفعالية',
      },
    },
  },
  {
    id: 'field_06',
    index: '06',
    driveId: '1ZaAzDCTQn45lpZLoBk33uKhbiNJtGupi',
    localSrc: '/assets/field-gallery/field_06.jpg',
    fallbackSrc: 'https://drive.google.com/thumbnail?id=1ZaAzDCTQn45lpZLoBk33uKhbiNJtGupi&sz=w1600',
    width: 1600,
    height: 1201,
    orientation: 'landscape',
    category: 'MUSCLE_DEV',
    gridSpan: 'standard',
    defaultObjectPosition: '50% 32%',
    captions: {
      en: {
        tag: 'INTERACTIVE MAT WORKSHOP · SELF-RECOVERY',
        title: 'Hands-On Foam Rolling Session for Lower-Body Relief',
        description:
          'Participants sit on outdoor exercise mats and practice rolling their legs over foam rollers—learning practical recovery habits they can continue long after the event.',
        locationNote: 'Foam Roller Mat Zone',
      },
      th: {
        tag: 'การยืดเหยียดโดยผู้เชี่ยวชาญ',
        title: 'ยืดเหยียดและดูแลการเคลื่อนไหวของร่างกายส่วนล่าง',
        description:
          'ใช้การยืดเหยียดโดยมีทีมงานคอยดูแล เพื่อช่วยให้ผู้เข้าร่วมค่อย ๆ ผ่อนคลายร่างกายส่วนล่างหลังการออกแรง',
        locationNote: 'โซนเสื่อและโฟมโรลเลอร์',
      },
      zh: {
        tag: '互动垫上工坊 · 自主恢复体验',
        title: '户外运动垫上的下肢泡沫轴滚动放松体验',
        description: '参与者坐在运动垫上使用泡沫轴放松腿部肌群，在亲身体验中掌握日常可延续的运动恢复技巧。',
        locationNote: '泡沫轴互动专区',
      },
      ko: {
        tag: '인터랙티브 매트 워크숍 · 셀프 리커버리',
        title: '운동 매트 위에서 직접 체험하는 하체 폼롤러 마사지',
        description: '참가자들이 매트에 앉아 폼롤러로 다리 근육을 직접 풀어보며 일상에서도 실천 가능한 회복 루틴을 배웁니다.',
        locationNote: '폼롤러 매트 체험 존',
      },
      ja: {
        tag: '参加型マットワークショップ · セルフケア体験',
        title: 'フォームローラーを使った脚部のセルフリカバリー実践',
        description: '参加者がマットの上でフォームローラーを使って脚の張りをほぐし、自宅でも続けられるセルフケア習慣を楽しく学びます。',
        locationNote: 'フォームローラー体験ゾーン',
      },
      ar: {
        tag: 'ورشة عمل تفاعلية · الاستشفاء الذاتي',
        title: 'جلسة تطبيقية لاستخدام الفوم رولر لتخفيف إجهاد الساقين',
        description: 'يجلس المشاركون على البساط الرياضي لتطبيق تمارين الفوم رولر لعضلات الساقين واكتساب مهارات عناية ذاتية مستدامة.',
        locationNote: 'منطقة الفوم رولر الأرضية',
      },
    },
  },
  {
    id: 'field_07',
    index: '07',
    driveId: '1vuVLKmRBSziPb9EqY_W5Myp1JyzvphUH',
    localSrc: '/assets/field-gallery/field_07.jpg',
    fallbackSrc: 'https://drive.google.com/thumbnail?id=1vuVLKmRBSziPb9EqY_W5Myp1JyzvphUH&sz=w1600',
    width: 1600,
    height: 1201,
    orientation: 'landscape',
    category: 'TEAM_GUIDANCE',
    gridSpan: 'standard',
    defaultObjectPosition: '50% 36%',
    captions: {
      en: {
        tag: 'TRUST & CONSULTATION · RUNNER HOSPITALITY',
        title: 'Friendly One-on-One Consultation Beside the Recovery Cots',
        description:
          'An athlete discusses arm and upper-body tightness directly with our field team, illustrating the approachable, consultative atmosphere that builds lasting brand trust.',
        locationNote: 'Consultation & Recovery Cot Lane',
      },
      th: {
        tag: 'การปรับสมดุลข้อต่อ',
        title: 'สำรวจช่วงการเคลื่อนไหวและดูแลกล้ามเนื้อ',
        description:
          'สำรวจช่วงการเคลื่อนไหวของเข่าและสะโพก พร้อมดูแลบริเวณที่รู้สึกตึง เพื่อให้ผู้เข้าร่วมเข้าใจสภาพร่างกายหลังจบกิจกรรมมากขึ้น',
        locationNote: 'จุดให้คำปรึกษาข้างโซนเตียงพักฟื้น',
      },
      zh: {
        tag: '专业咨询互动 · 跑者关怀服务',
        title: '恢复床旁亲切的一对一身体状况交流与指导',
        description: '运动者向现场团队咨询手臂与上肢酸痛情况，展现亲切专业的沟通氛围，深化参与者对品牌的信任感。',
        locationNote: '现场咨询与恢复床区',
      },
      ko: {
        tag: '신뢰 구축 및 상담 · 러너 호스피탈리티',
        title: '리커버리 베드 옆에서 진행되는 친근한 1:1 현장 상담',
        description: '러너가 팔과 상체의 피로도를 스태프와 편안하게 상담하는 모습으로, 참가자에게 신뢰와 안정감을 주는 현장 소통을 보여줍니다.',
        locationNote: '현장 상담 & 리커버리 레인',
      },
      ja: {
        tag: '個別コンディショニング相談 · 信頼構築',
        title: 'リカバリーコット脇での親身な1対1コミュニケーション',
        description: 'ランナーが腕や肩まわりの張りをスタッフに相談する様子。気軽に話せる温かい対応がイベントとブランドへの信頼を深めます。',
        locationNote: 'コンディショニング相談レーン',
      },
      ar: {
        tag: 'استشارات ميدانية وبناء الثقة · رعاية العدائين',
        title: 'حوار ودي واستشارة فردية مباشرة بجانب أسرّة الاستشفاء',
        description: 'أحد العدائين يناقش إجهاد الذراع والكتف مع فريقنا الميداني في أجواء ودية تعكس الاحترافية وسهولة التواصل.',
        locationNote: 'مسار الاستشارات وأسرّة الاستشفاء',
      },
    },
  },
  {
    id: 'field_08',
    index: '08',
    driveId: '1Eer538qNnSlZ3lspDE_q0C4wovjTw9e9',
    localSrc: '/assets/field-gallery/field_08.jpg',
    fallbackSrc: 'https://drive.google.com/thumbnail?id=1Eer538qNnSlZ3lspDE_q0C4wovjTw9e9&sz=w1600',
    width: 1600,
    height: 1201,
    orientation: 'landscape',
    category: 'TEAM_GUIDANCE',
    gridSpan: 'standard',
    defaultObjectPosition: '50% 35%',
    captions: {
      en: {
        tag: 'LIVE DEMONSTRATION · AUDIENCE ENGAGEMENT',
        title: 'Interactive Single-Leg Balance & Ankle Reach Demonstration',
        description:
          'Participants gather around the outdoor cots as our specialist demonstrates a single-leg ankle reach—turning technical movement advice into an engaging group moment.',
        locationNote: 'Group Coaching Circle',
      },
      th: {
        tag: 'ประสบการณ์ผู้เข้าร่วม',
        title: 'ความผ่อนคลายและความมั่นใจหลังจบกิจกรรม',
        description:
          'รอยยิ้มและความรู้สึกสบายใจของผู้เข้าร่วม คือส่วนสำคัญของประสบการณ์ที่เราอยากสร้างในทุกกิจกรรม',
        locationNote: 'วงสาธิตท่ายืดเหยียดภาคสนาม',
      },
      zh: {
        tag: '现场动作示范 · 激发人群互动',
        title: '单腿平衡与踝部伸展动作的现场互动示范',
        description: '参与者围聚在户外恢复区旁，专注观看专业人员示范单腿触踝动作，将健康知识转化为生动的现场互动。',
        locationNote: '户外互动示范圈',
      },
      ko: {
        tag: '라이브 동작 시연 · 참가자 인게이지먼트',
        title: '참가자들의 시선을 집중시키는 외발 밸런스 & 발목 스트레칭 시연',
        description: '야외 베드 주변에 모인 참가자들에게 스태프가 직접 발목 터치와 밸런스 동작을 시연하며 현장의 몰입도를 높입니다.',
        locationNote: '그룹 코칭 서클',
      },
      ja: {
        tag: 'ライブ実演 · 参加者の巻き込みと共感',
        title: '参加者の注目を集める片脚バランス＆足首リーチ実演',
        description: 'コット周辺に集まった参加者の前でスタッフが片脚での足首タッチ動作を実演し、会場に一体感と学びを生み出します。',
        locationNote: 'グループ実演サークル',
      },
      ar: {
        tag: 'عرض تطبيقي مباشر · تفاعل الجمهور',
        title: 'عرض حي لتمرين التوازن ولمس الكاحل أمام مجموعة المشاركين',
        description: 'يلتف المشاركون حول فريقنا لمشاهدة عرض عملي لتمارين التوازن ومرونة الكاحل مما يخلق تفاعلاً حيوياً في موقع الفعالية.',
        locationNote: 'حلقة التدريب الجماعي',
      },
    },
  },
  {
    id: 'field_09',
    index: '09',
    driveId: '1HT6Bg2Q0_C3ggXr_c-uO7vpwLEwUW7aK',
    localSrc: '/assets/field-gallery/field_09.jpg',
    fallbackSrc: 'https://drive.google.com/thumbnail?id=1HT6Bg2Q0_C3ggXr_c-uO7vpwLEwUW7aK&sz=w1600',
    width: 1600,
    height: 1201,
    orientation: 'landscape',
    category: 'RECOVERY',
    gridSpan: 'standard',
    defaultObjectPosition: '50% 32%',
    captions: {
      en: {
        tag: 'TEAM RECOVERY SERVICE · ATHLETE CARE',
        title: 'Side-by-Side Seated Shoulder Massage for Active Participants',
        description:
          'Two specialists provide hands-on shoulder tension relief for participants seated side by side, delivering consistent hospitality across the entire activation.',
        locationNote: 'Dual Chair Recovery Pod',
      },
      th: {
        tag: 'การฟื้นฟูกล้ามเนื้อต้นขา',
        title: 'ดูแลกล้ามเนื้อต้นขาด้านหน้าและสะโพก',
        description:
          'ดูแลกล้ามเนื้อต้นขาด้านหน้าและบริเวณสะโพก ซึ่งมักทำงานหนักในการวิ่งระยะไกลหรือเส้นทางที่มีความชัน',
        locationNote: 'โซนเก้าอี้พักฟื้นคู่ขนาน',
      },
      zh: {
        tag: '双人同步护理 · 运动者礼遇',
        title: '双工位并排坐姿肩颈放松服务',
        description: '两位专业人员同时为并排就座的参与者进行肩部按摩放松，展现标准化、高品质的现场服务能力。',
        locationNote: '双人坐姿恢复工位',
      },
      ko: {
        tag: '듀얼 리커버리 서비스 · 애슬리트 케어',
        title: '나란히 착석한 참가자들을 위한 2인 동시 어깨 마사지 케어',
        description: '두 명의 전문 스태프가 나란히 앉은 참가자들의 어깨 근육을 정성껏 풀어주며 일관된 고품격 현장 서비스를 제공합니다.',
        locationNote: '듀얼 체어 리커버리 존',
      },
      ja: {
        tag: 'ペア・リカバリーサービス · アスリートケア',
        title: '並んで座る参加者への丁寧なショルダーマッサージ対応',
        description: '2名のスタッフが並んだチェアの参加者へ同時に肩まわりのケアを行い、安定したホスピタリティ品質を提供します。',
        locationNote: 'デュアルチェア・リカバリーポッド',
      },
      ar: {
        tag: 'خدمة استشفاء مزدوجة · رعاية الرياضيين',
        title: 'جلسة تدليك متوازية للأكتاف للمشاركين الجالسين جنباً إلى جنب',
        description: 'يقدم اثنان من المختصين رعاية متزامنة لتخفيف شد الأكتاف للمشاركين الجالسين، مما يعكس جاهزية الفريق وكفاءة الخدمة.',
        locationNote: 'منطقة كراسي الاستشفاء المزدوجة',
      },
    },
  },
  {
    id: 'field_10',
    index: '10',
    driveId: '1DPzJWpK2aj1aj5oaxud6OFiGojLLyF7i',
    localSrc: '/assets/field-gallery/field_10.jpg',
    fallbackSrc: 'https://drive.google.com/thumbnail?id=1DPzJWpK2aj1aj5oaxud6OFiGojLLyF7i&sz=w1600',
    width: 1600,
    height: 2132,
    orientation: 'portrait',
    category: 'RECOVERY',
    gridSpan: 'portrait',
    defaultObjectPosition: '50% 28%',
    captions: {
      en: {
        tag: 'WELCOMING & INCLUSIVE EXPERIENCE · PORTRAIT HIGHLIGHT',
        title: 'Attentive Neck & Shoulder Care for Female Participants',
        description:
          'Vertical highlight capturing our staff delivering gentle, professional shoulder recovery for two seated female guests in a comfortable outdoor setting.',
        locationNote: 'Portrait Feature Frame (3:4)',
      },
      th: {
        tag: 'การดูแลหลังวิ่งระยะไกล',
        title: 'ดูแลกล้ามเนื้อต้นขาด้านหลังและน่องหลังวิ่งระยะไกล',
        description:
          'ดูแลความตึงล้าของต้นขาด้านหลังและน่อง พร้อมแนะนำแนวทางพักและฟื้นตัวหลังการวิ่งระยะไกล',
        locationNote: 'เฟรมภาพไฮไลต์แนวตั้ง (3:4)',
      },
      zh: {
        tag: '温馨包容的活动体验 · 竖幅特写',
        title: '为女性参与者提供细致温和的肩颈放松护理',
        description: '竖幅画面定格团队为两位入座女性参与者进行专业肩部放松的瞬间，传递温暖、安心的品牌服务形象。',
        locationNote: '竖幅特写画框 (3:4)',
      },
      ko: {
        tag: '포용적이고 세심한 배려 · 버티컬 하이라이트',
        title: '여성 참가자들을 위한 편안하고 세심한 어깨 리커버리 케어',
        description: '두 명의 스태프가 착석한 여성 참가자들에게 정중하고 부드러운 어깨 케어를 제공하는 모습을 담은 세로형 하이라이트 사진입니다.',
        locationNote: '포트레이트 하이라이트 (3:4)',
      },
      ja: {
        tag: '安心と信頼のホスピタリティ · 縦型ハイライト',
        title: '女性参加者にも安心感を与える丁寧なショルダーケア',
        description: '着席した女性参加者2名に対し、スタッフが礼儀正しく丁寧に肩の緊張をほぐす様子を捉えた縦型フレームです。',
        locationNote: 'ポートレートフレーム (3:4)',
      },
      ar: {
        tag: 'تجربة ترحيبية شاملة · لقطة عمودية مميزة',
        title: 'رعاية لطيفة واحترافية لعضلات الرقبة والأكتاف للمشاركات',
        description: 'لقطة عمودية تبرز تقديم فريقنا لجلسة استرخاء مريحة وآمنة للمشاركات الجالسات في أجواء ميدانية راقية.',
        locationNote: 'كادر عمودي مميز (3:4)',
      },
    },
  },
  {
    id: 'field_11',
    index: '11',
    driveId: '1NW5ssM3aSV2MA7LXH_3O9Qk0ykY41XpP',
    localSrc: '/assets/field-gallery/field_11.jpg',
    fallbackSrc: 'https://drive.google.com/thumbnail?id=1NW5ssM3aSV2MA7LXH_3O9Qk0ykY41XpP&sz=w1600',
    width: 1600,
    height: 1201,
    orientation: 'landscape',
    category: 'RECOVERY',
    gridSpan: 'standard',
    defaultObjectPosition: '50% 36%',
    captions: {
      en: {
        tag: 'ORGANIC SOCIAL AMPLIFICATION · BRAND JOY',
        title: 'Shareable Selfie Moments During Seated Shoulder Recovery',
        description:
          'While three staff members massage the necks and shoulders of three seated women, a participant happily snaps a selfie—proving how great recovery care drives organic social sharing.',
        locationNote: 'Social-Ready Recovery Lounge',
      },
      th: {
        tag: 'ทีมผู้เชี่ยวชาญภาคสนาม',
        title: 'ดูแลนักวิ่งทั้งเทรลและถนนอย่างใกล้ชิด',
        description:
          'ไม่ว่าจะเป็นวิ่งถนนหรือเทรล เราออกแบบการดูแลหน้างานให้เหมาะกับลักษณะกิจกรรมและผู้เข้าร่วมแต่ละกลุ่ม',
        locationNote: 'โซนบริการสร้างความประทับใจและไวรัล',
      },
      zh: {
        tag: '社交口碑自发传播 · 品牌愉悦感',
        title: '享受肩颈放松时忍不住自拍分享的愉悦时刻',
        description: '三位工作人员为入座女士进行肩颈按摩时，参与者开心地举起手机自拍记录，直观展现高满意度带来的社交自传播效应。',
        locationNote: '高口碑恢复体验区',
      },
      ko: {
        tag: '자발적 소셜 바이럴 · 브랜드 경험 공유',
        title: '어깨 마사지를 받으며 셀피로 남기는 즐거운 브랜드 모먼트',
        description: '세 명의 스태프에게 목과 어깨 케어를 받던 참가자가 즐거워하며 셀피를 촬영하는 순간으로, 자연스러운 SNS 확산 효과를 증명합니다.',
        locationNote: '소셜 프렌들리 리커버리 존',
      },
      ja: {
        tag: '自然なSNSシェア創出 · 参加者の笑顔',
        title: '思わずセルフィーでシェアしたくなる心地よいリカバリー体験',
        description: '3名のスタッフによる首・肩のケアを受けながら、参加者が笑顔でセルフィーを撮影。高い満足度が自然な口コミ拡散を生む瞬間です。',
        locationNote: 'ソーシャル・リカバリーラウンジ',
      },
      ar: {
        tag: 'انتشار عفوي عبر التواصل الاجتماعي · سعادة المشاركين',
        title: 'لحظات سعادة وتوثيق بالسيلفي أثناء جلسة تدليك الأكتاف',
        description: 'أثناء قيام ثلاثة من أعضاء الفريق بتدليك الرقبة والأكتاف، تلتقط إحدى المشاركات صورة سيلفي بابتهاج مما يعكس نجاح التجربة التسويقية.',
        locationNote: 'منطقة الاستشفاء التفاعلية',
      },
    },
  },
  {
    id: 'field_12',
    index: '12',
    driveId: '1FJBuMyvAU4BcfwhM8kiC1kmi4rI7SHOB',
    localSrc: '/assets/field-gallery/field_12.jpg',
    fallbackSrc: 'https://drive.google.com/thumbnail?id=1FJBuMyvAU4BcfwhM8kiC1kmi4rI7SHOB&sz=w1600',
    width: 1600,
    height: 1201,
    orientation: 'landscape',
    category: 'MUSCLE_DEV',
    gridSpan: 'standard',
    defaultObjectPosition: '50% 35%',
    captions: {
      en: {
        tag: 'HYBRID MAT ZONE · SELF-CARE & SPECIALIST SUPPORT',
        title: 'Combining Calf Foam Rolling with Hands-On Prone Leg Massage',
        description:
          'On the outdoor mats, two participants roll their calves on foam rollers while a kneeling specialist massages the lower leg of a prone athlete—offering both guided self-care and manual relief.',
        locationNote: 'Hybrid Mat & Manual Care Zone',
      },
      th: {
        tag: 'ความคล่องตัวของข้อเท้า',
        title: 'ดูแลการเคลื่อนไหวของข้อเท้าและร่างกายส่วนล่าง',
        description:
          'ดูแลการเคลื่อนไหวของข้อเท้าและฝ่าเท้า พร้อมชวนผู้เข้าร่วมสังเกตการลงน้ำหนักของตัวเองก่อนกลับไปฝึกซ้อม',
        locationNote: 'โซนเสื่อฟื้นฟูแบบผสมผสาน',
      },
      zh: {
        tag: '混合垫上专区 · 自主练习与专人护理结合',
        title: '小腿泡沫轴滚动与俯卧腿部手法放松同场进行',
        description: '两位参与者在垫上使用泡沫轴放松小腿，同时专业人员跪姿为俯卧运动者按揉腿部，兼顾自主体验与深度护理。',
        locationNote: '混合垫上恢复区',
      },
      ko: {
        tag: '하이브리드 매트 존 · 셀프 롤링 & 수기 케어',
        title: '종아리 폼롤러 롤링과 1:1 엎드린 자세 하체 마사지의 결합',
        description: '매트 위에서 두 명은 폼롤러로 종아리를 풀고, 스태프는 엎드린 참가자의 다리를 직접 마사지하며 다채로운 회복 프로그램을 제공합니다.',
        locationNote: '하이브리드 매트 케어 존',
      },
      ja: {
        tag: 'ハイブリッド・マットゾーン · 自律ケア＆施術',
        title: 'ふくらはぎのフォームローラー実践と個別レッグケアの融合',
        description: 'マット上で2名がふくらはぎをローラーでほぐす傍ら、スタッフがうつ伏せの参加者の脚を直接ケアする充実したサポート体制です。',
        locationNote: 'ハイブリッド・マットエリア',
      },
      ar: {
        tag: 'منطقة البساط الهجينة · عناية ذاتية وتدليك مباشر',
        title: 'الجمع بين تمارين الفوم رولر للساق والتدليك اليدوي المباشر',
        description: 'مشاركان يستخدمان الفوم رولر لعضلات الساق بينما يقوم المدرب بتدليك ساق مشارك مستلقٍ على البساط لتوفير خيارات رعاية متكاملة.',
        locationNote: 'منطقة البساط والرعاية المتكاملة',
      },
    },
  },
  {
    id: 'field_13',
    index: '13',
    driveId: '1WtJU0QJrsJLs0Pu4bucQpyauZ_pM-8xn',
    localSrc: '/assets/field-gallery/field_13.jpg',
    fallbackSrc: 'https://drive.google.com/thumbnail?id=1WtJU0QJrsJLs0Pu4bucQpyauZ_pM-8xn&sz=w1600',
    width: 1600,
    height: 1201,
    orientation: 'landscape',
    category: 'MUSCLE_DEV',
    gridSpan: 'wide',
    defaultObjectPosition: '50% 34%',
    captions: {
      en: {
        tag: 'ACTIVE COMMUNITY EXPERIENCE · SHARED WELLNESS',
        title: 'Side-by-Side Leg Foam Rolling on Outdoor Exercise Mats',
        description:
          'A female and male participant sit comfortably on outdoor mats rolling their legs over foam rollers—capturing an approachable, uplifting wellness culture that welcomes everyone.',
        locationNote: 'Community Mat Finale',
      },
      th: {
        tag: 'มาตรฐานทีม JAIKLA',
        title: 'ทีมดูแลหน้างานที่พร้อมอยู่ข้างผู้เข้าร่วม',
        description:
          'นี่คือภาพการทำงานของ JAIKLA ACTIVE WELLNESS ที่นำความรู้เรื่องร่างกายมาผสานกับการดูแลผู้คนอย่างใกล้ชิดในพื้นที่จริง',
        locationNote: 'ลานเสื่อกิจกรรมคอมมูนิตี้',
      },
      zh: {
        tag: '活力社群共鸣 · 轻松共享健康',
        title: '男女参与者并肩在户外运动垫上进行腿部泡沫轴放松',
        description: '两位参与者双手撑垫、轻松滚动腿下泡沫轴，展现出平易近人、人人皆可参与的现代健康社群氛围。',
        locationNote: '社群垫上体验区',
      },
      ko: {
        tag: '액티브 커뮤니티 경험 · 함께하는 웰니스',
        title: '야외 매트에서 나란히 하체 폼롤러를 즐기는 참가자들',
        description: '남녀 참가자가 나란히 매트에 앉아 폼롤러로 다리를 마사지하며 누구나 쉽게 참여하고 즐길 수 있는 웰니스 문화를 보여줍니다.',
        locationNote: '커뮤니티 매트 라운지',
      },
      ja: {
        tag: 'アクティブ・コミュニティ体験 · 誰でも楽しめる健康文化',
        title: '屋外マットで並んで脚のフォームローラーを楽しむ参加者ペア',
        description: '男女の参加者がマットに手をつきながら並んでフォームローラーを実践。誰もが気軽に参加できるポジティブなウェルネス体験を象徴しています。',
        locationNote: 'コミュニティ・マットエリア',
      },
      ar: {
        tag: 'تجربة المجتمع النشط · عافية تشاركية للجميع',
        title: 'مشاركان يطبقان تمارين الفوم رولر للساقين جنباً إلى جنب',
        description: 'مشاركة ومشارك يجلسان على البساط الرياضي الخارجي لاستخدام الفوم رولر بسهولة وانسجام، مما يعكس ثقافة صحية ترحب بالجميع.',
        locationNote: 'ساحة أنشطة المجتمع',
      },
    },
  },
];
