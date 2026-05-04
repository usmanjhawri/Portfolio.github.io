const profile = portfolioData.profile;
const projectGrid = document.querySelector("#projectGrid");
const filterBar = document.querySelector("#filterBar");
const statsGrid = document.querySelector("#statsGrid");
const downloadLinks = document.querySelector("#downloadLinks");
const timeline = document.querySelector("#timeline");
const dialog = document.querySelector("#projectDialog");
const dialogBody = document.querySelector("#dialogBody");
const dialogClose = document.querySelector("#dialogClose");
const profileProof = document.querySelector("#profileProof");
const processGrid = document.querySelector("#processGrid");
const featuredProject = document.querySelector("#featuredProject");
const projectSearch = document.querySelector("#projectSearch");
const projectCount = document.querySelector("#projectCount");
const emptyState = document.querySelector("#emptyState");

let activeFilter = "all";
let searchTerm = "";

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderDownloads() {
  downloadLinks.innerHTML = portfolioData.downloads
    .map((link, index) => {
      const style = index === 0 ? "primary" : "secondary";
      const download = link.download ? ` download="${escapeHtml(link.download)}"` : "";
      const target = link.download ? "" : ` target="_blank" rel="noreferrer"`;
      return `<a class="button ${style}" href="${escapeHtml(link.href)}"${target}${download}>${escapeHtml(link.label)}</a>`;
    })
    .join("");
}

function renderProfileProof() {
  profileProof.innerHTML = profile.proofPoints
    .map((point) => `<span>${escapeHtml(point)}</span>`)
    .join("");
}

function renderStats() {
  statsGrid.innerHTML = portfolioData.stats
    .map(
      (stat) => `
        <article class="stat-item">
          <strong>${escapeHtml(stat.value)}</strong>
          <span>${escapeHtml(stat.label)}</span>
        </article>
      `
    )
    .join("");
}

function renderProcess() {
  processGrid.innerHTML = portfolioData.process
    .map(
      (step) => `
        <article class="process-step">
          <span>${escapeHtml(step.label)}</span>
          <h3>${escapeHtml(step.title)}</h3>
          <p>${escapeHtml(step.text)}</p>
        </article>
      `
    )
    .join("");
}

function renderFilters() {
  filterBar.innerHTML = portfolioData.filters
    .map(
      (filter) => `
        <button class="filter-button ${filter.id === activeFilter ? "is-active" : ""}" type="button" data-filter="${escapeHtml(filter.id)}">
          ${escapeHtml(filter.label)}
        </button>
      `
    )
    .join("");
}

function getSearchIndex(project) {
  return [
    project.title,
    project.eyebrow,
    project.category,
    project.summary,
    project.role,
    project.quickScan.join(" "),
    project.tools.join(" "),
    project.caseStudy.challenge,
    project.caseStudy.contribution,
    project.caseStudy.decisions.join(" "),
    project.caseStudy.deliverables.join(" "),
    project.caseStudy.validation,
    project.caseStudy.outcome
  ]
    .join(" ")
    .toLowerCase();
}

function getVisibleProjects() {
  return portfolioData.projects.filter((project) => {
    const categoryMatch = activeFilter === "all" || project.category === activeFilter;
    const searchMatch = !searchTerm || getSearchIndex(project).includes(searchTerm);
    return categoryMatch && searchMatch;
  });
}

function renderMetricStrip(project) {
  return `
    <div class="metric-strip">
      ${project.metrics
        .map(
          (metric) => `
            <span>
              <strong>${escapeHtml(metric.value)}</strong>
              ${escapeHtml(metric.label)}
            </span>
          `
        )
        .join("")}
    </div>
  `;
}

function renderFeaturedProject() {
  const project = portfolioData.projects.find((item) => item.featured) || portfolioData.projects[0];

  featuredProject.innerHTML = `
    <article class="featured-card">
      <button class="featured-image" type="button" data-project="${escapeHtml(project.id)}" aria-label="Open ${escapeHtml(project.title)} details">
        <img src="${escapeHtml(project.image)}" alt="${escapeHtml(project.imageAlt)}">
      </button>
      <div class="featured-copy">
        <p class="project-eyebrow">${escapeHtml(project.eyebrow)}</p>
        <h3>${escapeHtml(project.title)}</h3>
        <p>${escapeHtml(project.summary)}</p>
        ${renderMetricStrip(project)}
        <button class="text-button" type="button" data-project="${escapeHtml(project.id)}">Open case study</button>
      </div>
    </article>
  `;
}

function renderProjects() {
  const projects = getVisibleProjects();
  projectCount.textContent = `${projects.length} of ${portfolioData.projects.length} projects`;
  emptyState.hidden = projects.length > 0;

  projectGrid.innerHTML = projects
    .map(
      (project) => `
        <article class="project-card">
          <button class="project-image-button" type="button" data-project="${escapeHtml(project.id)}" aria-label="Open ${escapeHtml(project.title)} details">
            <img src="${escapeHtml(project.image)}" alt="${escapeHtml(project.imageAlt)}" loading="lazy">
          </button>
          <div class="project-body">
            <div>
              <p class="project-eyebrow">${escapeHtml(project.eyebrow)}</p>
              <h3>${escapeHtml(project.title)}</h3>
            </div>
            <p>${escapeHtml(project.summary)}</p>
            ${renderMetricStrip(project)}
            <div class="scan-list" aria-label="Project quick scan">
              ${project.quickScan.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}
            </div>
            <button class="text-button" type="button" data-project="${escapeHtml(project.id)}">Open case study</button>
          </div>
        </article>
      `
    )
    .join("");
}

function renderTimeline() {
  timeline.innerHTML = portfolioData.experience
    .map(
      (item) => `
        <article class="timeline-item">
          <div>
            <span>${escapeHtml(item.period)}</span>
            <h3>${escapeHtml(item.role)}</h3>
            <strong>${escapeHtml(item.company)}</strong>
          </div>
          <p>${escapeHtml(item.text)}</p>
        </article>
      `
    )
    .join("");
}

function renderFactList(project) {
  return project.facts
    .map(
      (fact) => `
        <div class="fact-row">
          <span>${escapeHtml(fact.label)}</span>
          <strong>${escapeHtml(fact.value)}</strong>
        </div>
      `
    )
    .join("");
}

function renderCaseList(items) {
  return `<ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
}

function openProject(projectId) {
  const project = portfolioData.projects.find((item) => item.id === projectId);
  if (!project) return;

  dialogBody.innerHTML = `
    <div class="dialog-visual">
      <img class="dialog-image" src="${escapeHtml(project.image)}" alt="${escapeHtml(project.imageAlt)}">
      ${renderMetricStrip(project)}
    </div>
    <article class="dialog-copy">
      <p class="project-eyebrow">${escapeHtml(project.eyebrow)}</p>
      <h2>${escapeHtml(project.title)}</h2>
      <p class="lead">${escapeHtml(project.summary)}</p>

      <div class="case-layout">
        <aside class="case-aside">
          <h3>Snapshot</h3>
          ${renderFactList(project)}
          <h3>Tools</h3>
          <div class="tool-list">
            ${project.tools.map((tool) => `<span>${escapeHtml(tool)}</span>`).join("")}
          </div>
        </aside>

        <div class="case-content">
          <section>
            <h3>Challenge</h3>
            <p>${escapeHtml(project.caseStudy.challenge)}</p>
          </section>
          <section>
            <h3>My contribution</h3>
            <p>${escapeHtml(project.caseStudy.contribution)}</p>
          </section>
          <section>
            <h3>Design decisions</h3>
            ${renderCaseList(project.caseStudy.decisions)}
          </section>
          <section>
            <h3>Deliverables</h3>
            ${renderCaseList(project.caseStudy.deliverables)}
          </section>
          <section>
            <h3>Validation</h3>
            <p>${escapeHtml(project.caseStudy.validation)}</p>
          </section>
          <section>
            <h3>Outcome</h3>
            <p>${escapeHtml(project.caseStudy.outcome)}</p>
          </section>
        </div>
      </div>
    </article>
  `;

  if (typeof dialog.showModal === "function") {
    dialog.showModal();
  } else {
    dialog.setAttribute("open", "");
  }
}

filterBar.addEventListener("click", (event) => {
  const button = event.target.closest("[data-filter]");
  if (!button) return;

  activeFilter = button.dataset.filter;
  renderFilters();
  renderProjects();
});

projectSearch.addEventListener("input", (event) => {
  searchTerm = event.target.value.trim().toLowerCase();
  renderProjects();
});

projectGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-project]");
  if (!button) return;

  openProject(button.dataset.project);
});

featuredProject.addEventListener("click", (event) => {
  const button = event.target.closest("[data-project]");
  if (!button) return;

  openProject(button.dataset.project);
});

dialogClose.addEventListener("click", () => dialog.close());

dialog.addEventListener("click", (event) => {
  const rect = dialog.getBoundingClientRect();
  const clickedOutside =
    event.clientX < rect.left ||
    event.clientX > rect.right ||
    event.clientY < rect.top ||
    event.clientY > rect.bottom;

  if (clickedOutside) dialog.close();
});

renderDownloads();
renderProfileProof();
renderStats();
renderProcess();
renderFeaturedProject();
renderFilters();
renderProjects();
renderTimeline();
