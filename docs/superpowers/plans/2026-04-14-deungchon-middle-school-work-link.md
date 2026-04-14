# Deungchon Middle School Work Link Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a desktop-first departmental work-link page with Apple-inspired styling, sticky tinted navigation, responsive Kanban lanes, sample links, and the uploaded school emblem as favicon.

**Architecture:** Use a static single-page site composed of `index.html`, `assets/styles.css`, and `assets/app.js`. Keep page content data-driven in JavaScript so department links can be replaced later without rewriting markup, and verify behavior with Node's built-in test runner.

**Tech Stack:** Static HTML, CSS, vanilla JavaScript, Node `--test`

---

## File Structure

- Create: `package.json`
- Create: `index.html`
- Create: `assets/styles.css`
- Create: `assets/app.js`
- Create: `tests/app.test.js`
- Reuse: `DCMS_Logo.png`

### Task 1: Add the test harness and failing feature tests

**Files:**
- Create: `package.json`
- Create: `tests/app.test.js`
- Test: `tests/app.test.js`

- [ ] **Step 1: Write the failing tests**

```js
const test = require('node:test');
const assert = require('node:assert/strict');

const {
  departments,
  slugifyDepartment,
  renderDepartmentSection,
  shouldTintNavigation,
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
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `node --test tests/app.test.js`
Expected: FAIL because `assets/app.js` does not exist yet.

- [ ] **Step 3: Add the minimal package manifest**

```json
{
  "name": "dcms-link",
  "private": true,
  "scripts": {
    "test": "node --test tests/app.test.js"
  }
}
```

- [ ] **Step 4: Re-run tests and confirm the failure now points to missing exports**

Run: `npm test`
Expected: FAIL with module/export errors from `assets/app.js`.

### Task 2: Implement the data model and rendering helpers

**Files:**
- Create: `assets/app.js`
- Test: `tests/app.test.js`

- [ ] **Step 1: Write the minimal implementation to satisfy the tests**

```js
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
    ],
  },
  { name: '교육연구부', description: '연수, 연구 자료, 평가 링크', links: [] },
  { name: '생활안전부', description: '출결, 생활지도, 보고 링크', links: [] },
  { name: '창체활동부', description: '창체 운영, 행사, 기록 링크', links: [] },
  { name: '과학정보부', description: '과학실, 정보기기, 계정 링크', links: [] },
  { name: '인성상담부', description: '상담, 회복, 학생 지원 링크', links: [] },
  { name: '통합지원부', description: '행정 지원, 예산, 공문 링크', links: [] },
  { name: '진로진학부', description: '진로 검사, 체험, 진학 자료 링크', links: [] },
];

function slugifyDepartment(name) {
  return {
    교무기획부: 'gyomugihwaegbu',
    교육연구부: 'gyoyugyeongubu',
    생활안전부: 'saenghwalanjeonbu',
    창체활동부: 'changchehwaldongbu',
    과학정보부: 'gwahagjeongbobu',
    인성상담부: 'inseongsangdambu',
    통합지원부: 'tonghabjiwonbu',
    진로진학부: 'jinrojinhagbu',
  }[name];
}

function renderDepartmentSection(department) {
  return `
    <section id="${slugifyDepartment(department.name)}">
      <h2>${department.name}</h2>
      <p>${department.description}</p>
      ${department.links.map((link) => `<a href="${link.url}">${link.title}<span>Open link</span></a>`).join('')}
    </section>
  `;
}

function shouldTintNavigation(scrollY) {
  return scrollY > 20;
}

if (typeof module !== 'undefined') {
  module.exports = { departments, slugifyDepartment, renderDepartmentSection, shouldTintNavigation };
}
```

- [ ] **Step 2: Run the targeted tests**

Run: `npm test`
Expected: PASS with 4 passing tests.

- [ ] **Step 3: Refactor the dataset to realistic sample links while keeping tests green**

```js
departments[0].links.push(
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
);
```

- [ ] **Step 4: Re-run tests after expanding sample data**

Run: `npm test`
Expected: PASS with no regression.

### Task 3: Build the actual page shell and responsive visual system

**Files:**
- Create: `index.html`
- Create: `assets/styles.css`
- Modify: `assets/app.js`
- Test: `tests/app.test.js`

- [ ] **Step 1: Add the HTML application shell**

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Deungchon Middle School Work Link</title>
    <link rel="icon" type="image/png" href="./DCMS_Logo.png" />
    <link rel="stylesheet" href="./assets/styles.css" />
  </head>
  <body>
    <div class="site-shell">
      <header class="topbar" data-topbar>
        <div class="brand">...</div>
        <nav class="department-nav" aria-label="부서 바로가기" data-department-nav></nav>
      </header>
      <main>
        <section class="hero">...</section>
        <div class="board" data-department-board></div>
      </main>
    </div>
    <script src="./assets/app.js"></script>
  </body>
</html>
```

- [ ] **Step 2: Add the responsive CSS system**

```css
@font-face {
  font-family: 'Paperlogy';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/2408-3@1.0/Paperlogy-4Regular.woff2') format('woff2');
  font-weight: 400;
  font-display: swap;
}

body {
  margin: 0;
  font-family: 'Paperlogy', 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif;
}

.department-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
}

@media (max-width: 1023px) {
  .department-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 767px) {
  .department-grid {
    grid-template-columns: 1fr;
  }
}
```

- [ ] **Step 3: Expand `assets/app.js` to render nav, lanes, and interactions**

```js
function renderNavigation(items) {
  return items
    .map((item, index) => `<a class="nav-chip${index === 0 ? ' is-active' : ''}" href="#${slugifyDepartment(item.name)}">${item.name}</a>`)
    .join('');
}

function initializePage() {
  const nav = document.querySelector('[data-department-nav]');
  const board = document.querySelector('[data-department-board]');
  const topbar = document.querySelector('[data-topbar]');
  if (!nav || !board || !topbar) return;

  nav.innerHTML = renderNavigation(departments);
  board.innerHTML = departments.map(renderDepartmentSection).join('');

  const syncTopbar = () => {
    topbar.classList.toggle('is-tinted', shouldTintNavigation(window.scrollY));
  };

  syncTopbar();
  window.addEventListener('scroll', syncTopbar, { passive: true });
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializePage, { once: true });
  } else {
    initializePage();
  }
}
```

- [ ] **Step 4: Run the existing tests after wiring the page**

Run: `npm test`
Expected: PASS with the rendering helpers still verified.

### Task 4: Add tactile card behavior and final browser verification

**Files:**
- Modify: `assets/app.js`
- Modify: `assets/styles.css`
- Test: `tests/app.test.js`

- [ ] **Step 1: Add press-state helpers for pointer and touch**

```js
function attachCardPressFeedback() {
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
```

- [ ] **Step 2: Style the pressed state and mobile nav scrolling**

```css
.link-card.is-pressed {
  transform: translateY(2px) scale(0.985);
}

.department-nav {
  overflow-x: auto;
  scrollbar-width: none;
}

.department-nav::-webkit-scrollbar {
  display: none;
}
```

- [ ] **Step 3: Run automated verification**

Run: `npm test`
Expected: PASS with all test cases green.

- [ ] **Step 4: Run manual smoke verification in a browser**

Run: `start index.html`
Expected:
- Page loads with the school emblem favicon
- Sticky top bar is transparent initially and tinted after scroll
- Eight department sections appear in the approved order
- Link cards show sample destinations and press visually when clicked
- Layout collapses cleanly at tablet and mobile widths

### Task 5: Repository status note

**Files:**
- No file changes

- [ ] **Step 1: Verify git availability before any commit attempt**

Run: `git rev-parse --is-inside-work-tree`
Expected: FAIL because this workspace is not a git repository.

- [ ] **Step 2: Record the no-commit outcome in the delivery summary**

```text
Skip commit creation because the workspace is not initialized as a git repository.
```
