const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const {
  archivedDepartments,
  departments,
  slugifyDepartment,
  renderDepartmentSection,
  shouldTintNavigation,
  getSectionMetrics,
  getActiveSectionId,
  setActiveNavigationChip,
  scrollToDepartmentSection,
} = require('../assets/app.js');

test('keeps the full department archive in the approved order', () => {
  assert.deepEqual(
    archivedDepartments.map((item) => item.name),
    [
      '교무기획부',
      '교육연구부',
      '생활안전부',
      '창체활동부',
      '과학정보부',
      '인성상담부',
      '통합지원부',
      '진로진학부',
    ],
  );
});

test('renders only 창체활동부 and 과학정보부 in the current layout', () => {
  assert.deepEqual(
    departments.map((item) => item.name),
    [
      '과학정보부',
      '창체활동부',
    ],
  );
});

test('과학정보부 두 번째 카드는 디벗 관련 문의 링크를 사용한다', () => {
  const scienceDepartment = archivedDepartments.find((item) => item.name === '과학정보부');

  assert.ok(scienceDepartment);
  assert.deepEqual(scienceDepartment.links[1], {
    title: '디벗 관련 문의',
    description: '디벗, 애플펜슬, 전자칠판, 충전함 관련 문의',
    icon: 'dibot',
    tag: 'Dibot',
    url: 'https://script.google.com/macros/s/AKfycbyBsm2hvkZ9wOMOLp6cNdTvzKAKsGx38GbV-fwY-Qrjmv0DCnBvHyUs10t92DHDGoCUig/exec',
  });
});

test('과학정보부 세 번째 카드는 프린터 설치 안내 링크를 사용한다', () => {
  const scienceDepartment = archivedDepartments.find((item) => item.name === '과학정보부');

  assert.ok(scienceDepartment);
  assert.deepEqual(scienceDepartment.links[2], {
    title: '프린터 설치',
    description: '교무실 프린터 설치 방법',
    icon: 'printer',
    tag: 'Class',
    url: 'https://www.notion.so/345bc937bea18029ba62da7009fbfe97?source=copy_link',
  });
});

test('과학정보부 네 번째 카드는 PC 이름 변경 안내 링크를 사용한다', () => {
  const scienceDepartment = archivedDepartments.find((item) => item.name === '과학정보부');

  assert.ok(scienceDepartment);
  assert.deepEqual(scienceDepartment.links[3], {
    title: 'PC 이름 변경',
    description: '사용중인 PC의 이름 변경 방법',
    icon: 'pc',
    tag: 'PC',
    url: 'https://www.notion.so/PC-346bc937bea180e99434f7089e955aed?source=copy_link',
  });
});

test('과학정보부 다섯 번째 카드는 IP 주소 설정 안내 링크를 사용한다', () => {
  const scienceDepartment = archivedDepartments.find((item) => item.name === '과학정보부');

  assert.ok(scienceDepartment);
  assert.deepEqual(scienceDepartment.links[4], {
    title: 'IP 주소 설정',
    description: '사용중인 PC의 IP 설정 방법',
    icon: 'network',
    tag: 'IP',
    url: 'https://www.notion.so/IP-346bc937bea180aca452c6e13ce62901?source=copy_link',
  });
});

test('과학정보부 여섯 번째 카드는 한글, 오피스 안내 링크를 사용한다', () => {
  const scienceDepartment = archivedDepartments.find((item) => item.name === '과학정보부');

  assert.ok(scienceDepartment);
  assert.deepEqual(scienceDepartment.links[5], {
    title: '한글, 오피스',
    description: '한글, 오피스 설치 파일 및 방법',
    icon: 'office',
    tag: 'Office',
    url: 'https://www.notion.so/346bc937bea1808c83cfd54a0d037762?source=copy_link',
  });
});

test('dibot icon renders as a simple tablet shape for 디벗 관련 문의 cards', () => {
  const html = renderDepartmentSection({
    name: '과학정보부',
    description: '과학실, 정보기기, 계정 링크',
    links: [
      {
        title: '디벗 관련 문의',
        description: '디벗, 애플펜슬, 전자칠판, 충전함 관련 문의',
        icon: 'dibot',
        tag: 'Dibot',
        url: 'https://script.google.com/macros/s/AKfycbyBsm2hvkZ9wOMOLp6cNdTvzKAKsGx38GbV-fwY-Qrjmv0DCnBvHyUs10t92DHDGoCUig/exec',
      },
    ],
  });

  assert.match(html, /M7\.5 3\.75h9A2\.25 2\.25/);
});

test('office icon renders as a typewriter shape for 한글, 오피스 cards', () => {
  const html = renderDepartmentSection({
    name: '과학정보부',
    description: '과학실, 정보기기, 계정 링크',
    links: [
      {
        title: '한글, 오피스',
        description: '한글, 오피스 설치 파일 및 방법',
        icon: 'office',
        tag: 'Office',
        url: 'https://www.notion.so/346bc937bea1808c83cfd54a0d037762?source=copy_link',
      },
    ],
  });

  assert.match(html, /M7\.75 5\.25A2\.25 2\.25/);
});

test('창체활동부는 방송 신청 카드 하나만 남긴다', () => {
  const activityDepartment = archivedDepartments.find((item) => item.name === '창체활동부');

  assert.ok(activityDepartment);
  assert.equal(activityDepartment.links.length, 1);
  assert.deepEqual(activityDepartment.links[0], {
    title: '방송 신청',
    description: '방송 진행 협조 신청 링크',
    icon: 'broadcast',
    tag: 'Broadcast',
    url: 'https://docs.google.com/spreadsheets/d/1YRYsjDE9h8yxIw0o57Gqh06e035-BuZYrkq6Phez74g/edit?gid=0#gid=0',
  });
});

test('broadcast icon renders as a microphone shape for 방송 신청 cards', () => {
  const html = renderDepartmentSection({
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
  });

  assert.match(html, /M12 4\.25A2\.75 2\.75/);
});

test('slugifyDepartment creates stable section ids', () => {
  assert.equal(slugifyDepartment('교무기획부'), 'gyomugihwaegbu');
});

test('renderDepartmentSection outputs section anchor and sample link cards', () => {
  const html = renderDepartmentSection({
    name: '교무기획부',
    description: '기본 운영 링크',
    links: [
      {
        title: '전자 결재 바로가기',
        description: '샘플 링크 설명',
        tag: 'Sample',
        url: 'https://example.com',
      },
    ],
  });

  assert.match(html, /id="gyomugihwaegbu"/);
  assert.match(html, /class="department-lane department-lane--expanded"/);
  assert.match(html, /전자 결재 바로가기/);
  assert.match(html, /Open link/);
});

test('shouldTintNavigation only activates after scrolling past threshold', () => {
  assert.equal(shouldTintNavigation(0), false);
  assert.equal(shouldTintNavigation(24), true);
});

test('getSectionMetrics snapshots section offsets for reuse during scroll', () => {
  const previousWindow = global.window;
  global.window = {
    scrollY: 120,
  };

  const sections = [
    {
      dataset: { section: 'gyomugihwaegbu' },
      getBoundingClientRect() {
        return { top: 40 };
      },
    },
    {
      dataset: { section: 'jinrojinhagbu' },
      getBoundingClientRect() {
        return { top: 780 };
      },
    },
  ];

  try {
    assert.deepEqual(getSectionMetrics(sections), [
      { id: 'gyomugihwaegbu', top: 160 },
      { id: 'jinrojinhagbu', top: 900 },
    ]);
  } finally {
    global.window = previousWindow;
  }
});

test('getActiveSectionId promotes the final section when the page is scrolled to the bottom', () => {
  const sectionMetrics = [
    { id: 'gyomugihwaegbu', top: 260 },
    { id: 'gyoyugyeongubu', top: 760 },
    { id: 'saenghwalanjeonbu', top: 1260 },
    { id: 'changchehwaldongbu', top: 1760 },
    { id: 'gwahagjeongbobu', top: 2260 },
    { id: 'inseongsangdambu', top: 2760 },
    { id: 'tonghabjiwonbu', top: 3260 },
    { id: 'jinrojinhagbu', top: 3760 },
  ];

  assert.equal(
    getActiveSectionId(sectionMetrics, {
      scrollY: 3300,
      viewportHeight: 900,
      documentHeight: 4200,
    }),
    'jinrojinhagbu',
  );
});

test('getActiveSectionId uses the section nearest the sticky header during regular scrolling', () => {
  const sectionMetrics = [
    { id: 'gyomugihwaegbu', top: 260 },
    { id: 'gyoyugyeongubu', top: 760 },
    { id: 'saenghwalanjeonbu', top: 1260 },
  ];

  assert.equal(
    getActiveSectionId(sectionMetrics, {
      scrollY: 820,
      viewportHeight: 900,
      documentHeight: 2200,
    }),
    'saenghwalanjeonbu',
  );
});

test('setActiveNavigationChip scrolls the newly active mobile chip into view once', () => {
  const createClassList = (initial = []) => {
    const names = new Set(initial);
    return {
      toggle(name, force) {
        if (force) {
          names.add(name);
          return true;
        }
        names.delete(name);
        return false;
      },
      contains(name) {
        return names.has(name);
      },
    };
  };

  let activeScrollCalls = 0;
  const chips = [
    {
      dataset: { navChip: 'gyomugihwaegbu' },
      classList: createClassList(['is-active']),
      scrollIntoView() {},
    },
    {
      dataset: { navChip: 'jinrojinhagbu' },
      classList: createClassList(),
      scrollIntoView() {
        activeScrollCalls += 1;
      },
    },
  ];

  const previousDocument = global.document;
  global.document = {
    querySelectorAll() {
      return chips;
    },
  };

  try {
    setActiveNavigationChip('jinrojinhagbu');
    setActiveNavigationChip('jinrojinhagbu');
  } finally {
    global.document = previousDocument;
  }

  assert.equal(chips[0].classList.contains('is-active'), false);
  assert.equal(chips[1].classList.contains('is-active'), true);
  assert.equal(activeScrollCalls, 1);
});

test('setActiveNavigationChip can skip auto-scrolling while still updating active state', () => {
  const createClassList = (initial = []) => {
    const names = new Set(initial);
    return {
      toggle(name, force) {
        if (force) {
          names.add(name);
          return true;
        }
        names.delete(name);
        return false;
      },
      contains(name) {
        return names.has(name);
      },
    };
  };

  let activeScrollCalls = 0;
  const chips = [
    {
      dataset: { navChip: 'gyomugihwaegbu' },
      classList: createClassList(['is-active']),
      scrollIntoView() {},
    },
    {
      dataset: { navChip: 'jinrojinhagbu' },
      classList: createClassList(),
      scrollIntoView() {
        activeScrollCalls += 1;
      },
    },
  ];

  const previousDocument = global.document;
  global.document = {
    querySelectorAll() {
      return chips;
    },
  };

  try {
    setActiveNavigationChip('jinrojinhagbu', { shouldScrollIntoView: false });
  } finally {
    global.document = previousDocument;
  }

  assert.equal(chips[0].classList.contains('is-active'), false);
  assert.equal(chips[1].classList.contains('is-active'), true);
  assert.equal(activeScrollCalls, 0);
});

test('scrollToDepartmentSection updates the active chip and scrolls with sticky topbar offset', () => {
  const createClassList = (initial = []) => {
    const names = new Set(initial);
    return {
      toggle(name, force) {
        if (force) {
          names.add(name);
          return true;
        }
        names.delete(name);
        return false;
      },
      contains(name) {
        return names.has(name);
      },
    };
  };

  const chips = [
    {
      dataset: { navChip: 'changchehwaldongbu' },
      classList: createClassList(['is-active']),
    },
    {
      dataset: { navChip: 'gwahagjeongbobu' },
      classList: createClassList(),
    },
  ];

  let scrollToOptions = null;
  let replacedHash = null;

  const previousDocument = global.document;
  const previousWindow = global.window;

  global.document = {
    querySelectorAll() {
      return chips;
    },
    getElementById(id) {
      if (id !== 'gwahagjeongbobu') {
        return null;
      }
      return {
        getBoundingClientRect() {
          return { top: 520 };
        },
      };
    },
  };

  global.window = {
    scrollY: 100,
    scrollTo(options) {
      scrollToOptions = options;
    },
    history: {
      replaceState(_state, _title, hash) {
        replacedHash = hash;
      },
    },
    location: {},
  };

  try {
    scrollToDepartmentSection('gwahagjeongbobu', {
      topbar: {
        getBoundingClientRect() {
          return { height: 72 };
        },
      },
    });
  } finally {
    global.document = previousDocument;
    global.window = previousWindow;
  }

  assert.equal(chips[0].classList.contains('is-active'), false);
  assert.equal(chips[1].classList.contains('is-active'), true);
  assert.deepEqual(scrollToOptions, {
    top: 520,
    behavior: 'smooth',
  });
  assert.equal(replacedHash, '#gwahagjeongbobu');
});

test('renderDepartmentSection falls back safely when a link url is missing', () => {
  const html = renderDepartmentSection({
    name: '교무기획부',
    description: '기본 운영 링크',
    links: [
      {
        title: '링크 준비중',
        description: 'url 없는 샘플',
        tag: 'Pending',
        url: '',
      },
    ],
  });

  assert.match(html, /href="#"/);
  assert.match(html, /aria-disabled="true"/);
});

test('index.html provides the page shell for the rendered board', () => {
  const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');

  assert.match(html, /<title>Deungchon Middel School Work Link<\/title>/);
  assert.match(html, /data-falling-pattern/);
  assert.match(html, /falling-pattern__motion/);
  assert.match(html, /falling-pattern__overlay/);
  assert.match(html, /data-topbar/);
  assert.match(html, /data-department-nav/);
  assert.match(html, /data-department-board/);
  assert.match(html, /DCMS_Logo\.png/);
});

test('index.html uses the simplified hero without board intro or stats panel', () => {
  const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');

  assert.doesNotMatch(html, /class="board-intro"/);
  assert.doesNotMatch(html, /class="hero__panel"/);
  assert.match(html, /DCMS School WorkFlow Hub/);
  assert.doesNotMatch(html, /<h1>[\s\S]*<br ?\/?>[\s\S]*<\/h1>/);
  assert.match(html, /자주 쓰는 업무용 링크 아카이브<br \/>/);
  assert.match(html, /등촌중학교 부서별 링크 모음/);
});

test('falling pattern styles use the Background.md radial-gradient field', () => {
  const css = fs.readFileSync(path.join(__dirname, '..', 'assets', 'styles.css'), 'utf8');

  assert.match(css, /radial-gradient\(4px 100px at 0px 235px/);
  assert.match(css, /--falling-pattern-start:/);
  assert.match(css, /--falling-pattern-end:/);
  assert.match(css, /falling-pattern-shift/);
  assert.match(css, /background-position:\s*var\(--falling-pattern-start\)/);
});

test('mobile disables the falling pattern layers to keep scrolling stable', () => {
  const css = fs.readFileSync(path.join(__dirname, '..', 'assets', 'styles.css'), 'utf8');

  assert.match(css, /@media \(max-width: 640px\)[\s\S]*--falling-pattern-grid-size:\s*14px 14px/);
  assert.match(css, /@media \(max-width: 640px\)[\s\S]*\.falling-pattern,\s*[\s\S]*\.ambient\s*\{[\s\S]*display:\s*none;/);
});

test('mobile topbar removes backdrop blur so sticky scrolling stays responsive', () => {
  const css = fs.readFileSync(path.join(__dirname, '..', 'assets', 'styles.css'), 'utf8');

  assert.match(css, /@media \(max-width: 640px\)[\s\S]*\.topbar\s*\{[\s\S]*backdrop-filter:\s*none;/);
  assert.match(css, /@media \(max-width: 640px\)[\s\S]*\.topbar\s*\{[\s\S]*-webkit-backdrop-filter:\s*none;/);
  assert.match(css, /@media \(max-width: 640px\)[\s\S]*\.topbar\.is-tinted\s*\{[\s\S]*rgba\(246, 249, 252, 0\.97\)/);
});

test('coarse-pointer devices drop the expensive fixed effects regardless of viewport width', () => {
  const css = fs.readFileSync(path.join(__dirname, '..', 'assets', 'styles.css'), 'utf8');

  assert.match(css, /@media \(hover: none\), \(pointer: coarse\)[\s\S]*html\s*\{[\s\S]*scroll-behavior:\s*auto;/);
  assert.match(css, /@media \(hover: none\), \(pointer: coarse\)[\s\S]*\.falling-pattern,\s*[\s\S]*\.ambient\s*\{[\s\S]*display:\s*none;/);
  assert.match(css, /@media \(hover: none\), \(pointer: coarse\)[\s\S]*\.topbar\s*\{[\s\S]*backdrop-filter:\s*none;/);
  assert.match(css, /@media \(hover: none\), \(pointer: coarse\)[\s\S]*\.nav-chip,\s*[\s\S]*\.link-card\s*\{[\s\S]*transition-duration:\s*0\.01ms;/);
});

test('hero, sections, and tinted header keep a lighter translucent wash', () => {
  const css = fs.readFileSync(path.join(__dirname, '..', 'assets', 'styles.css'), 'utf8');

  assert.match(css, /\.hero__copy,\s*\.department-lane[\s\S]*rgba\(255, 255, 255, 0\.56\)/);
  assert.match(css, /\.hero__copy,\s*\.department-lane[\s\S]*rgba\(242, 247, 252, 0\.66\)/);
  assert.match(css, /\.topbar\s*\{[\s\S]*background:\s*rgba\(255, 255, 255, 0\.18\)/);
  assert.match(css, /\.topbar\.is-tinted\s*\{[\s\S]*background:\s*rgba\(246, 249, 252, 0\.68\)/);
});

test('mobile kanban surfaces keep a lighter tint so the falling pattern can show through', () => {
  const css = fs.readFileSync(path.join(__dirname, '..', 'assets', 'styles.css'), 'utf8');

  assert.match(css, /@media \(max-width: 640px\)[\s\S]*\.department-lane\s*\{[\s\S]*rgba\(249, 252, 255, 0\.3\)/);
  assert.match(css, /@media \(max-width: 640px\)[\s\S]*\.department-lane\s*\{[\s\S]*rgba\(236, 243, 250, 0\.42\)/);
  assert.match(css, /@media \(max-width: 640px\)[\s\S]*\.link-card\s*\{[\s\S]*rgba\(255, 255, 255, 0\.38\)/);
  assert.match(css, /@media \(max-width: 640px\)[\s\S]*\.link-card\s*\{[\s\S]*rgba\(240, 245, 250, 0\.52\)/);
  assert.match(css, /@media \(max-width: 640px\)[\s\S]*\.link-card__cta\s*\{[\s\S]*rgba\(255, 255, 255, 0\.34\)/);
});

test('large content panels avoid backdrop blur to keep scrolling stable', () => {
  const css = fs.readFileSync(path.join(__dirname, '..', 'assets', 'styles.css'), 'utf8');

  assert.doesNotMatch(css, /backdrop-filter:\s*blur\(16px\);/);
  assert.doesNotMatch(css, /backdrop-filter:\s*blur\(12px\);/);
});
