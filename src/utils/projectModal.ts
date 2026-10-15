import Swal from 'sweetalert2';
import { SupportedLocale } from '../data/i18nData';
import { TRANSLATIONS } from '../data/translations';

export interface ProjectInquirySubmission {
  id: string;
  name: string;
  organization: string;
  contact: string;
  projectType: string;
  notes: string;
  submittedAt: string;
}

const PROJECT_TYPES = [
  'Corporate Wellness',
  'Brand Activation',
  'Community',
  'Sport Event',
  'Workshop',
  'Other',
];

const PROJECT_TYPE_LABELS: Record<SupportedLocale, Record<string, string>> = {
  en: {
    'Corporate Wellness': 'Corporate Wellness',
    'Brand Activation': 'Brand Activation',
    Community: 'Community',
    'Sport Event': 'Sport Event',
    Workshop: 'Workshop',
    Other: 'Other',
  },
  th: {
    'Corporate Wellness': 'สุขภาพองค์กร (Corporate Wellness)',
    'Brand Activation': 'กิจกรรมแบรนด์ (Brand Activation)',
    Community: 'คอมมูนิตี้ (Community)',
    'Sport Event': 'อีเวนต์กีฬา (Sport Event)',
    Workshop: 'เวิร์กชอปความรู้และปฏิบัติ (Workshop)',
    Other: 'อื่นๆ (Other)',
  },
  zh: {
    'Corporate Wellness': '企业主动健康 (Corporate Wellness)',
    'Brand Activation': '品牌体验激活 (Brand Activation)',
    Community: '运动社群运营 (Community)',
    'Sport Event': '体育赛事与嘉年华 (Sport Event)',
    Workshop: '科学工作坊 (Workshop)',
    Other: '其他合作 (Other)',
  },
  ko: {
    'Corporate Wellness': '기업 웰니스 프로그램',
    'Brand Activation': '브랜드 액티베이션',
    Community: '스포츠 커뮤니티',
    'Sport Event': '스포츠 이벤트',
    Workshop: '전문 워크숍',
    Other: '기타 문의',
  },
  ja: {
    'Corporate Wellness': '企業向けウェルネス',
    'Brand Activation': 'ブランド・アクティベーション',
    Community: 'コミュニティ運営',
    'Sport Event': 'スポーツイベント',
    Workshop: '実践ワークショップ',
    Other: 'その他',
  },
  ar: {
    'Corporate Wellness': 'برامج عافية الشركات',
    'Brand Activation': 'تفعيل العلامات التجارية',
    Community: 'المجتمعات الرياضية',
    'Sport Event': 'الفعاليات الرياضية',
    Workshop: 'ورش العمل التطبيقية',
    Other: 'أخرى',
  },
};

export async function openProjectInquiryModal(
  defaultProjectType = 'Corporate Wellness',
  prefillNotes = '',
  onSuccess?: (submission: ProjectInquirySubmission) => void,
  locale: SupportedLocale = 'en'
): Promise<void> {
  const m = TRANSLATIONS[locale].modal;
  const isRtl = locale === 'ar';
  const typeMap = PROJECT_TYPE_LABELS[locale] || PROJECT_TYPE_LABELS.en;

  const optionsHtml = PROJECT_TYPES.map(
    (type) =>
      `<option value="${type}" ${
        type === defaultProjectType ? 'selected' : ''
      } style="background:#141417;color:#F8F8FA;">${typeMap[type] || type}</option>`
  ).join('');

  const { value: formValues } = await Swal.fire({
    title: m.title,
    customClass: {
      container: 'jaikla-swal-backdrop',
      popup: 'jaikla-swal-popup',
      title: 'jaikla-swal-title',
      htmlContainer: 'jaikla-swal-html',
    },
    width: 560,
    showCloseButton: true,
    showCancelButton: true,
    confirmButtonText: m.submitBtn,
    cancelButtonText: m.cancelBtn,
    confirmButtonColor: '#4B1FD6',
    cancelButtonColor: '#222228',
    focusConfirm: false,
    html: `
      <div dir="${isRtl ? 'rtl' : 'ltr'}" style="margin-top: 0.25rem; margin-bottom: 1.25rem; text-align: ${isRtl ? 'right' : 'left'};">
        <p style="font-size: 0.875rem; color: #A1A1AA; line-height: 1.5; margin: 0;">
          ${m.subtitle}
        </p>
      </div>
      <div dir="${isRtl ? 'rtl' : 'ltr'}" style="display: flex; flex-direction: column; gap: 0.9rem; text-align: ${isRtl ? 'right' : 'left'};">
        <div>
          <label for="swal-jaikla-name" style="display:block; font-size:0.75rem; color:#EBDDFF; margin-bottom:0.35rem; font-weight:500;">
            ${m.nameLabel}
          </label>
          <input id="swal-jaikla-name" class="jaikla-input-field" placeholder="Full Name" autocomplete="name" />
        </div>
        <div>
          <label for="swal-jaikla-org" style="display:block; font-size:0.75rem; color:#EBDDFF; margin-bottom:0.35rem; font-weight:500;">
            ${m.orgLabel}
          </label>
          <input id="swal-jaikla-org" class="jaikla-input-field" placeholder="Company / Brand / Community" autocomplete="organization" />
        </div>
        <div>
          <label for="swal-jaikla-contact" style="display:block; font-size:0.75rem; color:#EBDDFF; margin-bottom:0.35rem; font-weight:500;">
            ${m.contactLabel}
          </label>
          <input id="swal-jaikla-contact" class="jaikla-input-field" placeholder="name@company.com or +66 8X XXX XXXX" autocomplete="email" />
        </div>
        <div>
          <label for="swal-jaikla-type" style="display:block; font-size:0.75rem; color:#EBDDFF; margin-bottom:0.35rem; font-weight:500;">
            ${m.typeLabel}
          </label>
          <select id="swal-jaikla-type" class="jaikla-input-field">
            ${optionsHtml}
          </select>
        </div>
        <div>
          <label for="swal-jaikla-notes" style="display:block; font-size:0.75rem; color:#A1A1AA; margin-bottom:0.35rem; font-weight:500;">
            ${m.notesLabel}
          </label>
          <textarea id="swal-jaikla-notes" class="jaikla-input-field" rows="2" placeholder="Objectives, target audience, or tentative timeline...">${prefillNotes}</textarea>
        </div>
        <div style="margin-top:0.35rem; padding-top:0.85rem; border-top:1px solid rgba(248,248,250,0.1);">
          <p style="font-size:0.7rem; color:#EBDDFF; margin:0 0 0.5rem 0; font-family:'JetBrains Mono', monospace; letter-spacing:0.04em;">
            ${locale === 'th' ? 'หรือติดต่อและติดตามข่าวสารผ่านโซเชียลมีเดียและ LINE OA' : 'OR CONNECT VIA SOCIAL MEDIA & LINE OA'}
          </p>
          <div style="display:grid; grid-template-columns:repeat(2, minmax(0, 1fr)); gap:0.45rem;">
            <a href="https://www.facebook.com/JaiklaActiveWellness" target="_blank" rel="noopener noreferrer" style="display:flex; align-items:center; justify-content:center; gap:0.4rem; padding:0.5rem 0.65rem; border-radius:0.5rem; background:#1A1A24; border:1px solid rgba(248,248,250,0.12); color:#F8F8FA; font-size:0.75rem; font-weight:600; text-decoration:none;">
              <span>Facebook</span>
            </a>
            <a href="https://www.tiktok.com/@JaiklaActiveWellness" target="_blank" rel="noopener noreferrer" style="display:flex; align-items:center; justify-content:center; gap:0.4rem; padding:0.5rem 0.65rem; border-radius:0.5rem; background:#1A1A24; border:1px solid rgba(248,248,250,0.12); color:#F8F8FA; font-size:0.75rem; font-weight:600; text-decoration:none;">
              <span>TikTok</span>
            </a>
            <a href="https://www.instagram.com/jaiklaactivewellness" target="_blank" rel="noopener noreferrer" style="display:flex; align-items:center; justify-content:center; gap:0.4rem; padding:0.5rem 0.65rem; border-radius:0.5rem; background:#1A1A24; border:1px solid rgba(248,248,250,0.12); color:#F8F8FA; font-size:0.75rem; font-weight:600; text-decoration:none;">
              <span>Instagram</span>
            </a>
            <a href="https://www.youtube.com/@JaiklaActiveWellness" target="_blank" rel="noopener noreferrer" style="display:flex; align-items:center; justify-content:center; gap:0.4rem; padding:0.5rem 0.65rem; border-radius:0.5rem; background:#1A1A24; border:1px solid rgba(248,248,250,0.12); color:#F8F8FA; font-size:0.75rem; font-weight:600; text-decoration:none;">
              <span>YouTube</span>
            </a>
            <a href="https://lin.ee/YEfyYwy" target="_blank" rel="noopener noreferrer" style="grid-column: span 2; display:flex; align-items:center; justify-content:center; gap:0.4rem; padding:0.5rem 0.65rem; border-radius:0.5rem; background:#1A1A24; border:1px solid rgba(124,58,237,0.45); color:#F8F8FA; font-size:0.75rem; font-weight:600; text-decoration:none;">
              <span>LINE Official</span>
            </a>
          </div>
        </div>
      </div>
    `,
    preConfirm: async () => {
      const nameEl = document.getElementById('swal-jaikla-name') as HTMLInputElement | null;
      const orgEl = document.getElementById('swal-jaikla-org') as HTMLInputElement | null;
      const contactEl = document.getElementById('swal-jaikla-contact') as HTMLInputElement | null;
      const typeEl = document.getElementById('swal-jaikla-type') as HTMLSelectElement | null;
      const notesEl = document.getElementById('swal-jaikla-notes') as HTMLTextAreaElement | null;

      const name = nameEl?.value.trim() || '';
      const organization = orgEl?.value.trim() || '';
      const contact = contactEl?.value.trim() || '';
      const projectType = typeEl?.value || defaultProjectType;
      const notes = notesEl?.value.trim() || '';

      if (!name || !organization || !contact) {
        Swal.showValidationMessage(
          locale === 'th'
            ? 'กรุณากรอกชื่อผู้ติดต่อ ชื่อองค์กร และอีเมลหรือเบอร์โทรศัพท์ให้ครบถ้วน'
            : 'Please complete Name, Organization, and Email / Phone.'
        );
        return false;
      }

      const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact);
      const isPhone = /^[0-9+\-\s()]{7,20}$/.test(contact);
      if (!isEmail && !isPhone) {
        Swal.showValidationMessage(
          locale === 'th'
            ? 'กรุณาระบุอีเมลหรือเบอร์โทรศัพท์ที่ถูกต้อง'
            : 'Please enter a valid email address or phone number.'
        );
        return false;
      }

      const submissionId = `JK-${Date.now().toString().slice(-6)}`;
      const submittedAt = new Date().toLocaleString(locale === 'th' ? 'th-TH' : 'en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });

      // Deliver real email directly to jaikladigital@gmail.com via FormSubmit AJAX API
      try {
        Swal.showLoading();
        await fetch('https://formsubmit.co/ajax/jaikladigital@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            _subject: `[JAIKLA ACTIVE WELLNESS] ข้อความติดต่อเริ่มโปรเจกต์ใหม่ (#${submissionId}): ${name} (${organization})`,
            'ชื่อผู้ติดต่อ': name,
            'ชื่อองค์กร / แบรนด์': organization,
            'อีเมล หรือ เบอร์โทรศัพท์': contact,
            'รูปแบบโปรเจกต์': projectType,
            'รายละเอียด / โจทย์': notes || '(ไม่ได้ระบุรายละเอียดเพิ่มเติม)',
            'รหัสอ้างอิง (Ref ID)': submissionId,
            'เวลาที่ส่ง (Timestamp)': submittedAt,
            _template: 'table',
            _captcha: 'false',
          }),
        });
      } catch (err) {
        console.warn('Form email dispatch logged:', err);
      }

      return {
        id: submissionId,
        name,
        organization,
        contact,
        projectType,
        notes,
        submittedAt,
      } as ProjectInquirySubmission;
    },
  });

  if (formValues) {
    if (onSuccess) {
      onSuccess(formValues);
    }

    await Swal.fire({
      title: m.thankYouTitle,
      customClass: {
        container: 'jaikla-swal-backdrop',
        popup: 'jaikla-swal-popup',
        title: 'jaikla-swal-title',
        htmlContainer: 'jaikla-swal-html',
      },
      width: 500,
      confirmButtonText: 'OK',
      confirmButtonColor: '#7C3AED',
      html: `
        <div dir="${isRtl ? 'rtl' : 'ltr'}" style="padding-top: 0.25rem; text-align: ${isRtl ? 'right' : 'left'};">
          <p style="font-family: 'Syne', sans-serif; font-size: 1.15rem; font-weight: 700; color: #EBDDFF; margin: 0 0 0.75rem 0; letter-spacing: -0.01em;">
            ${m.thankYouSub}
          </p>
          <p style="font-size: 0.9rem; color: #A1A1AA; line-height: 1.6; margin: 0 0 0.75rem 0;">
            ${
              locale === 'th'
                ? `ข้อมูลโปรเจกต์ <strong style="color: #F8F8FA;">${formValues.projectType}</strong> ในนาม <strong style="color: #F8F8FA;">${formValues.organization}</strong> (${formValues.contact}) ถูกส่งตรงไปยังอีเมลทีมงาน <strong style="color: #EBDDFF;">jaikladigital@gmail.com</strong> เรียบร้อยแล้วครับ`
                : `Your inquiry for <strong style="color: #F8F8FA;">${formValues.projectType}</strong> on behalf of <strong style="color: #F8F8FA;">${formValues.organization}</strong> (${formValues.contact}) has been dispatched to <strong style="color: #EBDDFF;">jaikladigital@gmail.com</strong>.`
            }
          </p>
          <div style="padding: 0.75rem 1rem; background: #111111; border: 1px solid rgba(235, 221, 255, 0.12); border-radius: 10px; font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; color: #A1A1AA;">
            REF: ${formValues.id} · ${formValues.projectType} · ${formValues.submittedAt}
          </div>
        </div>
      `,
    });
  }
}
