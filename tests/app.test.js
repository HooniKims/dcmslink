const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const {
  departments,
  slugifyDepartment,
  renderDepartmentSection,
  shouldTintNavigation,
  getSectionMetrics,
  getActiveSectionId,
  setActiveNavigationChip,
} = require('../assets/app.js');

test('defines the eight departments in the approved order', () => {
  assert.deepEqual(
    departments.map((item) => item.name),
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
  assert.match(html, /업무용 링크를 부서별로 모아두고<br \/>/);
  assert.match(html, /등촌중학교 부서별 링크 허브/);
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
