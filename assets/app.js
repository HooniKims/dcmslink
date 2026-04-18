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

const archivedDepartments = [
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
        title: '방송 신청',
        description: '방송 진행 협조 신청 링크',
        icon: 'broadcast',
        tag: 'Broadcast',
        url: 'https://docs.google.com/spreadsheets/d/1YRYsjDE9h8yxIw0o57Gqh06e035-BuZYrkq6Phez74g/edit?gid=0#gid=0',
      },
    ],
  },
  {
    name: '과학정보부',
    description: '과학실, 정보기기, 계정 링크',
    links: [
      {
        title: '수리 요청하기',
        description: '디지털 기기 수리 요청 링크',
        icon: 'repair',
        tag: 'Lab',
        url: 'https://script.google.com/a/macros/dc.ms.kr/s/AKfycbwbaFujZN74-j7iBJ8LfgDZcC9SZSkriFsdtroyx0SW4Z2BJQyC4qIzTS6ZubLhByyzzA/exec',
      },
      {
        title: '프린터 설치',
        description: '교무실 프린터 설치 방법',
        icon: 'printer',
        tag: 'Class',
        url: 'https://www.notion.so/345bc937bea18029ba62da7009fbfe97?source=copy_link',
      },
      {
        title: 'PC 이름 변경',
        description: '사용중인 PC의 이름 변경 방법',
        icon: 'pc',
        tag: 'PC',
        url: 'https://www.notion.so/PC-346bc937bea180e99434f7089e955aed?source=copy_link',
      },
      {
        title: 'IP 주소 설정',
        description: '사용중인 PC의 IP 설정 방법',
        icon: 'network',
        tag: 'IP',
        url: 'https://www.notion.so/IP-346bc937bea180aca452c6e13ce62901?source=copy_link',
      },
      {
        title: '한글, 오피스',
        description: '한글, 오피스 설치 파일 및 방법',
        icon: 'office',
        tag: 'Office',
        url: 'https://www.notion.so/346bc937bea1808c83cfd54a0d037762?source=copy_link',
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

// Keep the full department dataset archived so hidden departments can be restored
// later without changing the current layout or card structure.
const visibleDepartmentNames = [
  '과학정보부',
  '창체활동부',
];

const departments = visibleDepartmentNames
  .map((name) => archivedDepartments.find((department) => department.name === name))
  .filter(Boolean);

// Card authoring rules:
// 1. Action-oriented cards should include an `icon` so restored and newly added cards
//    keep the same title treatment as the current highlighted cards.
// 2. Icons must stay minimal and use a single filled SVG path for stable rendering.
// 3. Keep titles short enough to fit inside the title pill without wrapping on mobile.
// 4. Use the same card shape for archived departments so restored cards inherit the layout.
const LINK_TITLE_ICONS = {
  repair: `
    <span class="link-card__title-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" focusable="false">
        <path d="M21.67 18.17 13.91 10.4a5.02 5.02 0 0 0-6.6-6.03l3.02 3.02-2.95 2.95-3.04-3.03a5.02 5.02 0 0 0 6.08 6.56l7.76 7.76a1.24 1.24 0 0 0 1.75 0l1.74-1.74a1.24 1.24 0 0 0 0-1.75Z" />
      </svg>
    </span>
  `,
  printer: `
    <span class="link-card__title-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" focusable="false">
        <path d="M7 3.5h10a1 1 0 0 1 1 1v3H6v-3a1 1 0 0 1 1-1Zm-2 5h14a2.5 2.5 0 0 1 2.5 2.5v4A2.5 2.5 0 0 1 19 17.5h-1v3H6v-3H5A2.5 2.5 0 0 1 2.5 15v-4A2.5 2.5 0 0 1 5 8.5Zm3 7v2h8v-2H8Zm0-9v1h8v-1H8Z" />
      </svg>
    </span>
  `,
  pc: `
    <span class="link-card__title-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" focusable="false">
        <path d="M5 4.5h14A2.5 2.5 0 0 1 21.5 7v8a2.5 2.5 0 0 1-2.5 2.5h-4v1.5h2a1 1 0 1 1 0 2H7a1 1 0 1 1 0-2h2v-1.5H5A2.5 2.5 0 0 1 2.5 15V7A2.5 2.5 0 0 1 5 4.5Zm0 2a.5.5 0 0 0-.5.5v8c0 .28.22.5.5.5h14a.5.5 0 0 0 .5-.5V7a.5.5 0 0 0-.5-.5H5Z" />
      </svg>
    </span>
  `,
  network: `
    <span class="link-card__title-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" focusable="false">
        <path d="M6 4.75A2.25 2.25 0 0 0 3.75 7v10A2.25 2.25 0 0 0 6 19.25h12A2.25 2.25 0 0 0 20.25 17V7A2.25 2.25 0 0 0 18 4.75H6Zm0 2h12a.25.25 0 0 1 .25.25V17a.25.25 0 0 1-.25.25h-1.35v-2.4a.7.7 0 0 0-.7-.7H14.8v3.1h-1.25v-3.1H12.4v3.1h-.8v-3.1h-1.2v3.1H9.15v-3.1H8.05a.7.7 0 0 0-.7.7v2.4H6A.25.25 0 0 1 5.75 17V7A.25.25 0 0 1 6 6.75Zm1.2 2.1a.75.75 0 0 0-.75.75v1.95a.75.75 0 0 0 .75.75h1.05A.75.75 0 0 0 9 11.55V9.6a.75.75 0 0 0-.75-.75H7.2Zm3.2 0a.75.75 0 0 0-.75.75v1.95a.75.75 0 0 0 .75.75h1.05a.75.75 0 0 0 .75-.75V9.6a.75.75 0 0 0-.75-.75H10.4Zm3.2 0a.75.75 0 0 0-.75.75v1.95a.75.75 0 0 0 .75.75h1.05a.75.75 0 0 0 .75-.75V9.6a.75.75 0 0 0-.75-.75H13.6Z" />
      </svg>
    </span>
  `,
  broadcast: `
    <span class="link-card__title-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" focusable="false">
        <path d="M12 4.25A2.75 2.75 0 0 0 9.25 7v3a2.75 2.75 0 1 0 5.5 0V7A2.75 2.75 0 0 0 12 4.25Zm-4 5.5a1 1 0 0 1 1 1 3 3 0 1 0 6 0 1 1 0 1 1 2 0 4.99 4.99 0 0 1-4 4.9v1.35h2.1a1 1 0 1 1 0 2H8.9a1 1 0 1 1 0-2H11V15.65a4.99 4.99 0 0 1-4-4.9 1 1 0 0 1 1-1Z" />
      </svg>
    </span>
  `,
  office: `
    <span class="link-card__title-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" focusable="false">
        <path d="M7.75 5.25A2.25 2.25 0 0 0 5.5 7.5v1.85a2.4 2.4 0 0 0-1.75 2.3V16A2.25 2.25 0 0 0 6 18.25h12A2.25 2.25 0 0 0 20.25 16v-4.35a2.4 2.4 0 0 0-1.75-2.3V7.5a2.25 2.25 0 0 0-2.25-2.25H7.75Zm0 2h8.5a.25.25 0 0 1 .25.25v1.85h-1.65a.75.75 0 0 0-.75.75v1.25h-4.2V10.1a.75.75 0 0 0-.75-.75H7.5V7.5a.25.25 0 0 1 .25-.25ZM6 11.35h12a.4.4 0 0 1 .25.4V16a.25.25 0 0 1-.25.25H6A.25.25 0 0 1 5.75 16v-4.25a.4.4 0 0 1 .25-.4Zm2.1 1.65a.9.9 0 1 0 0 1.8h.15a.9.9 0 0 0 0-1.8H8.1Zm3.2 0a.9.9 0 1 0 0 1.8h.15a.9.9 0 0 0 0-1.8h-.15Zm3.2 0a.9.9 0 1 0 0 1.8h.15a.9.9 0 0 0 0-1.8h-.15Z" />
      </svg>
    </span>
  `,
};

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

function renderLinkTitle(link) {
  const icon = link.icon && LINK_TITLE_ICONS[link.icon] ? LINK_TITLE_ICONS[link.icon] : '';
  return `${icon}<span>${escapeHtml(link.title)}</span>`;
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
      <strong class="link-card__title">${renderLinkTitle(link)}</strong>
      <p class="link-card__description">${escapeHtml(link.description)}</p>
      <span class="link-card__cta">Open link <span aria-hidden="true">↗</span></span>
    </a>
  `;
}

function renderDepartmentSection(department) {
  const cards = department.links.map(renderLinkCard).join('');
  return `
    <section class="department-lane department-lane--expanded" id="${slugifyDepartment(department.name)}" data-section="${slugifyDepartment(department.name)}">
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

function getSectionMetrics(sections) {
  if (!Array.isArray(sections) || typeof window === 'undefined') {
    return [];
  }

  return sections.map((section) => ({
    id: section.dataset.section,
    top: section.getBoundingClientRect().top + window.scrollY,
  }));
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

function setActiveNavigationChip(sectionId, options = {}) {
  if (typeof document === 'undefined') {
    return;
  }

  const {
    shouldScrollIntoView = true,
    scrollBehavior = 'smooth',
  } = options;

  const chips = document.querySelectorAll('[data-nav-chip]');
  for (const chip of chips) {
    const isActive = chip.dataset.navChip === sectionId;
    const wasActive = typeof chip.classList.contains === 'function'
      ? chip.classList.contains('is-active')
      : false;

    chip.classList.toggle('is-active', isActive);

    if (
      shouldScrollIntoView
      && isActive
      && !wasActive
      && typeof chip.scrollIntoView === 'function'
    ) {
      chip.scrollIntoView({
        behavior: scrollBehavior,
        block: 'nearest',
        inline: 'center',
      });
    }
  }
}

function scrollToDepartmentSection(sectionId, options = {}) {
  if (typeof document === 'undefined' || typeof window === 'undefined' || !sectionId) {
    return;
  }

  const { topbar = document.querySelector('[data-topbar]') } = options;
  const section = document.getElementById(sectionId);

  if (!section) {
    return;
  }

  setActiveNavigationChip(sectionId, { shouldScrollIntoView: false });

  const topbarOffset = topbar && typeof topbar.getBoundingClientRect === 'function'
    ? topbar.getBoundingClientRect().height + 28
    : 0;
  const targetTop = Math.max(0, section.getBoundingClientRect().top + window.scrollY - topbarOffset);

  if (typeof window.scrollTo === 'function') {
    window.scrollTo({
      top: targetTop,
      behavior: 'smooth',
    });
  } else if (typeof section.scrollIntoView === 'function') {
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  if (
    window.history
    && typeof window.history.replaceState === 'function'
    && window.location
  ) {
    window.history.replaceState(null, '', `#${sectionId}`);
  }
}

function syncTopbarTint(topbar) {
  if (!topbar || typeof window === 'undefined') {
    return;
  }
  topbar.classList.toggle('is-tinted', shouldTintNavigation(window.scrollY));
}

function syncActiveSectionByScroll(sectionMetrics, options = {}) {
  if (typeof document === 'undefined' || typeof window === 'undefined') {
    return;
  }

  const resolvedSectionMetrics = Array.isArray(sectionMetrics)
    ? sectionMetrics
    : getSectionMetrics(Array.from(document.querySelectorAll('.department-lane')));

  const activeSectionId = getActiveSectionId(resolvedSectionMetrics, {
    scrollY: window.scrollY,
    viewportHeight: window.innerHeight,
    documentHeight: document.documentElement.scrollHeight,
  });

  if (activeSectionId) {
    setActiveNavigationChip(activeSectionId, options);
  }
}

function createAnimationFrameScheduler(callback) {
  let frameId = null;

  return () => {
    if (typeof window === 'undefined' || typeof window.requestAnimationFrame !== 'function') {
      callback();
      return;
    }

    if (frameId !== null) {
      return;
    }

    frameId = window.requestAnimationFrame(() => {
      frameId = null;
      callback();
    });
  };
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

function attachNavigationChipInteractions(nav, topbar) {
  if (!nav) {
    return;
  }

  nav.addEventListener('click', (event) => {
    const chip = event.target && typeof event.target.closest === 'function'
      ? event.target.closest('[data-nav-chip]')
      : null;

    if (!chip) {
      return;
    }

    event.preventDefault();
    scrollToDepartmentSection(chip.dataset.navChip, { topbar });
  });
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
  attachCardPressFeedback();
  attachNavigationChipInteractions(nav, topbar);

  if (typeof window !== 'undefined') {
    const sections = Array.from(board.querySelectorAll('.department-lane'));
    const shouldAutoScrollActiveChip = typeof window.matchMedia === 'function'
      ? !window.matchMedia('(hover: none), (pointer: coarse)').matches
      : true;
    let sectionMetrics = [];

    const refreshSectionMetrics = () => {
      sectionMetrics = getSectionMetrics(sections);
      syncTopbarTint(topbar);
      syncActiveSectionByScroll(sectionMetrics, {
        shouldScrollIntoView: shouldAutoScrollActiveChip,
        scrollBehavior: 'auto',
      });
    };

    const handleScroll = createAnimationFrameScheduler(() => {
      syncTopbarTint(topbar);
      syncActiveSectionByScroll(sectionMetrics, {
        shouldScrollIntoView: false,
      });
    });

    const handleResize = createAnimationFrameScheduler(refreshSectionMetrics);

    refreshSectionMetrics();

    window.addEventListener(
      'scroll',
      handleScroll,
      { passive: true },
    );

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('orientationchange', handleResize, { passive: true });
    window.addEventListener('load', refreshSectionMetrics, { once: true });

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(refreshSectionMetrics).catch(() => {});
    }
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
    archivedDepartments,
    departments,
    slugifyDepartment,
    renderDepartmentSection,
    shouldTintNavigation,
    getSectionMetrics,
    getActiveSectionId,
    setActiveNavigationChip,
    scrollToDepartmentSection,
    renderNavigation,
    initializePage,
  };
}
