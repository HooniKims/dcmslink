const departmentIdMap = {
  교무기획부: 'gyomugihwaegbu',
  교육연구부: 'gyoyugyeongubu',
  생활안전부: 'saenghwalanjeonbu',
  창체활동부: 'changchehwaldongbu',
  과학정보부: 'gwahagjeongbobu',
  인성상담부: 'inseongsangdambu',
  통합지원부: 'tonghabjiwonbu',
  진로진학부: 'jinrojinhagbu',
};

const departments = [
  {
    name: '교무기획부',
    description: '기본 운영, 시간표, 결재, 문서 흐름',
    links: [
      {
        title: '전자 결재 바로가기',
        description: '업무 결재 시스템 샘플 링크',
        tag: 'Sample',
        url: 'https://example.com/approval',
      },
      {
        title: '시간표 편성 관리',
        description: '수업 배치와 시간표 확인용 샘플 링크',
        tag: 'Schedule',
        url: 'https://example.com/schedule',
      },
      {
        title: '출장 / 연가 신청',
        description: '복무 관련 샘플 링크',
        tag: 'Office',
        url: 'https://example.com/leave',
      },
      {
        title: '공문 열람함',
        description: '학교 문서 확인용 샘플 링크',
        tag: 'Docs',
        url: 'https://example.com/docs',
      },
    ],
  },
  {
    name: '교육연구부',
    description: '연수, 연구 자료, 평가 링크',
    links: [
      {
        title: '연수 신청 페이지',
        description: '교원 연수 신청용 샘플 링크',
        tag: 'Study',
        url: 'https://example.com/training',
      },
      {
        title: '평가 계획 문서함',
        description: '평가 계획 공유용 샘플 링크',
        tag: 'Share',
        url: 'https://example.com/evaluation',
      },
      {
        title: '연구자료 아카이브',
        description: '자료 저장소 샘플 링크',
        tag: 'Archive',
        url: 'https://example.com/archive',
      },
      {
        title: '수업 개선 자료',
        description: '수업 개선 참고용 샘플 링크',
        tag: 'Guide',
        url: 'https://example.com/guide',
      },
    ],
  },
  {
    name: '생활안전부',
    description: '출결, 생활지도, 보고 링크',
    links: [
      {
        title: '학생 생활기록',
        description: '생활지도 기록용 샘플 링크',
        tag: 'Safety',
        url: 'https://example.com/life',
      },
      {
        title: '출결 관리',
        description: '출결 확인용 샘플 링크',
        tag: 'Attend',
        url: 'https://example.com/attendance',
      },
      {
        title: '상황 보고',
        description: '사안 보고용 샘플 링크',
        tag: 'Report',
        url: 'https://example.com/report',
      },
      {
        title: '상담 연계',
        description: '학생 지원 연계용 샘플 링크',
        tag: 'Support',
        url: 'https://example.com/support',
      },
    ],
  },
  {
    name: '창체활동부',
    description: '창체 운영, 행사, 기록 링크',
    links: [
      {
        title: '행사 운영표',
        description: '행사 준비 샘플 링크',
        tag: 'Event',
        url: 'https://example.com/event',
      },
      {
        title: '봉사활동 기록',
        description: '활동 기록 샘플 링크',
        tag: 'Record',
        url: 'https://example.com/volunteer',
      },
      {
        title: '동아리 관리',
        description: '창체 동아리 샘플 링크',
        tag: 'Club',
        url: 'https://example.com/club',
      },
      {
        title: '체험학습 자료',
        description: '체험활동 자료 샘플 링크',
        tag: 'Activity',
        url: 'https://example.com/activity',
      },
    ],
  },
  {
    name: '과학정보부',
    description: '과학실, 정보기기, 계정 링크',
    links: [
      {
        title: '기자재 예약',
        description: '실험 장비 예약 샘플 링크',
        tag: 'Lab',
        url: 'https://example.com/lab',
      },
      {
        title: 'SW 수업실',
        description: '정보 수업실 샘플 링크',
        tag: 'Class',
        url: 'https://example.com/classroom',
      },
      {
        title: '계정 관리',
        description: '서비스 계정 샘플 링크',
        tag: 'Account',
        url: 'https://example.com/account',
      },
      {
        title: '기기 점검표',
        description: '기기 점검 샘플 링크',
        tag: 'Check',
        url: 'https://example.com/device',
      },
    ],
  },
  {
    name: '인성상담부',
    description: '상담, 회복, 학생 지원 링크',
    links: [
      {
        title: '상담 일정표',
        description: '상담 스케줄 샘플 링크',
        tag: 'Care',
        url: 'https://example.com/counseling',
      },
      {
        title: '회복 지원 기록',
        description: '회복 프로그램 샘플 링크',
        tag: 'Healing',
        url: 'https://example.com/healing',
      },
      {
        title: '학부모 상담 자료',
        description: '상담 자료 샘플 링크',
        tag: 'Parent',
        url: 'https://example.com/parent',
      },
      {
        title: '학생 지원 문서',
        description: '학생 지원 샘플 링크',
        tag: 'Student',
        url: 'https://example.com/student',
      },
    ],
  },
  {
    name: '통합지원부',
    description: '행정 지원, 예산, 공문 링크',
    links: [
      {
        title: '예산 집행 현황',
        description: '예산 확인용 샘플 링크',
        tag: 'Budget',
        url: 'https://example.com/budget',
      },
      {
        title: '품의 양식 모음',
        description: '행정 양식 샘플 링크',
        tag: 'Form',
        url: 'https://example.com/forms',
      },
      {
        title: '공유 공문함',
        description: '행정 문서 샘플 링크',
        tag: 'Office',
        url: 'https://example.com/office',
      },
      {
        title: '운영 일정표',
        description: '지원 일정 샘플 링크',
        tag: 'Plan',
        url: 'https://example.com/plan',
      },
    ],
  },
  {
    name: '진로진학부',
    description: '진로 검사, 체험, 진학 자료 링크',
    links: [
      {
        title: '진로 검사',
        description: '진로 탐색 샘플 링크',
        tag: 'Career',
        url: 'https://example.com/career',
      },
      {
        title: '입시 자료실',
        description: '진학 자료 샘플 링크',
        tag: 'Guide',
        url: 'https://example.com/admission',
      },
      {
        title: '체험처 목록',
        description: '진로 체험 샘플 링크',
        tag: 'Field',
        url: 'https://example.com/field',
      },
      {
        title: '상담 기록',
        description: '진로 상담 샘플 링크',
        tag: 'Mentor',
        url: 'https://example.com/mentor',
      },
    ],
  },
];

function slugifyDepartment(name) {
  return departmentIdMap[name] || String(name).trim().toLowerCase().replace(/\s+/g, '-');
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function renderLinkCard(link) {
  const hasUrl = Boolean(link.url);
  const href = hasUrl ? escapeHtml(link.url) : '#';
  const disabledAttributes = hasUrl
    ? 'target="_blank" rel="noreferrer"'
    : 'aria-disabled="true" tabindex="-1"';
  return `
    <a class="link-card${hasUrl ? '' : ' is-disabled'}" href="${href}" ${disabledAttributes}>
      <span class="link-card__tag">${escapeHtml(link.tag)}</span>
      <strong class="link-card__title">${escapeHtml(link.title)}</strong>
      <p class="link-card__description">${escapeHtml(link.description)}</p>
      <span class="link-card__cta">Open link <span aria-hidden="true">↗</span></span>
    </a>
  `;
}

function renderDepartmentSection(department) {
  const cards = department.links.map(renderLinkCard).join('');
  return `
    <section class="department-lane" id="${slugifyDepartment(department.name)}" data-section="${slugifyDepartment(department.name)}">
      <div class="department-lane__header">
        <div>
          <p class="department-lane__eyebrow">Department board</p>
          <h2 class="department-lane__title">${escapeHtml(department.name)}</h2>
        </div>
        <p class="department-lane__summary">${escapeHtml(department.description)}</p>
      </div>
      <div class="department-grid">
        ${cards}
      </div>
    </section>
  `;
}

function renderNavigation(items) {
  return items
    .map((item, index) => {
      const id = slugifyDepartment(item.name);
      const activeClass = index === 0 ? ' is-active' : '';
      return `<a class="nav-chip${activeClass}" href="#${id}" data-nav-chip="${id}">${escapeHtml(item.name)}</a>`;
    })
    .join('');
}

function shouldTintNavigation(scrollY) {
  return scrollY > 20;
}

function getActiveSectionId(sectionMetrics, options = {}) {
  if (!Array.isArray(sectionMetrics) || sectionMetrics.length === 0) {
    return null;
  }

  const {
    scrollY = 0,
    viewportHeight = 0,
    documentHeight = 0,
  } = options;

  const maxScrollY = Math.max(0, documentHeight - viewportHeight);
  if (scrollY >= maxScrollY - 2) {
    return sectionMetrics[sectionMetrics.length - 1].id;
  }

  const anchorY = scrollY + Math.max(180, viewportHeight * 0.5);
  let activeSectionId = sectionMetrics[0].id;

  for (const section of sectionMetrics) {
    if (section.top <= anchorY) {
      activeSectionId = section.id;
      continue;
    }

    break;
  }

  return activeSectionId;
}

function setActiveNavigationChip(sectionId) {
  if (typeof document === 'undefined') {
    return;
  }
  const chips = document.querySelectorAll('[data-nav-chip]');
  for (const chip of chips) {
    const isActive = chip.dataset.navChip === sectionId;
    const wasActive = typeof chip.classList.contains === 'function'
      ? chip.classList.contains('is-active')
      : false;

    chip.classList.toggle('is-active', isActive);

    if (isActive && !wasActive && typeof chip.scrollIntoView === 'function') {
      chip.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  }
}

function syncTopbarTint(topbar) {
  if (!topbar || typeof window === 'undefined') {
    return;
  }
  topbar.classList.toggle('is-tinted', shouldTintNavigation(window.scrollY));
}

function syncActiveSectionByScroll() {
  if (typeof document === 'undefined' || typeof window === 'undefined') {
    return;
  }

  const sectionMetrics = Array.from(document.querySelectorAll('.department-lane')).map((section) => ({
    id: section.dataset.section,
    top: section.getBoundingClientRect().top + window.scrollY,
  }));

  const activeSectionId = getActiveSectionId(sectionMetrics, {
    scrollY: window.scrollY,
    viewportHeight: window.innerHeight,
    documentHeight: document.documentElement.scrollHeight,
  });

  if (activeSectionId) {
    setActiveNavigationChip(activeSectionId);
  }
}

function attachCardPressFeedback() {
  if (typeof document === 'undefined') {
    return;
  }
  const cards = document.querySelectorAll('.link-card');
  for (const card of cards) {
    const press = () => card.classList.add('is-pressed');
    const release = () => card.classList.remove('is-pressed');
    card.addEventListener('pointerdown', press);
    card.addEventListener('pointerup', release);
    card.addEventListener('pointerleave', release);
    card.addEventListener('pointercancel', release);
  }
}

function initializePage() {
  if (typeof document === 'undefined') {
    return;
  }

  const nav = document.querySelector('[data-department-nav]');
  const board = document.querySelector('[data-department-board]');
  const topbar = document.querySelector('[data-topbar]');

  if (!nav || !board || !topbar) {
    return;
  }

  nav.innerHTML = renderNavigation(departments);
  board.innerHTML = departments.map(renderDepartmentSection).join('');
  syncTopbarTint(topbar);
  syncActiveSectionByScroll();
  attachCardPressFeedback();

  if (typeof window !== 'undefined') {
    window.addEventListener(
      'scroll',
      () => {
        syncTopbarTint(topbar);
        syncActiveSectionByScroll();
      },
      { passive: true },
    );

    window.addEventListener('resize', syncActiveSectionByScroll, { passive: true });
  }
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializePage, { once: true });
  } else {
    initializePage();
  }
}

if (typeof module !== 'undefined') {
  module.exports = {
    departments,
    slugifyDepartment,
    renderDepartmentSection,
    shouldTintNavigation,
    getActiveSectionId,
    setActiveNavigationChip,
    renderNavigation,
    initializePage,
  };
}
