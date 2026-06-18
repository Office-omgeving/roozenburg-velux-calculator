const products = [
  {
    id: "replace-window",
    name: "Vervanging van uw oud VELUX dakvenster",
    description: "Een bestaand VELUX dakvenster vervangen door een nieuwer model.",
    base: 1210,
    image: "assets/velux-vervanging-oud-dakvenster.jpg",
    primaryRoute: true,
    routeNote: "Meest relevant voor wie een bestaande VELUX wil vervangen"
  },
  {
    id: "new-window",
    name: "Plaatsing van nieuw VELUX dakvenster",
    description: "Een nieuw VELUX dakvenster laten plaatsen in een nieuwbouw of bestaande woning.",
    base: 1385,
    image: "assets/new-velux-window.webp"
  },
  {
    id: "shutter",
    name: "Plaatsing van rolluik op uw VELUX dakvenster",
    description: "Enkel een nieuw rolluik laten plaatsen op een bestaand VELUX dakvenster.",
    base: 640,
    image: "assets/velux-rolluik.webp"
  },
  {
    id: "replace-glass",
    name: "Vervanging glas van uw VELUX dakvenster",
    description: "Alleen het glas van een huidig VELUX dakvenster laten vervangen.",
    base: 520,
    image: "assets/velux-glas-vervangen.jpg"
  },
  {
    id: "profiles",
    name: "Vervanging aluminium VELUX profielen",
    description: "Kostprijs voor vervanging van aluminium profielen, bijvoorbeeld bij hagelschade.",
    base: 390,
    image: "assets/velux-aluminium-profielen.webp"
  },
  {
    id: "special",
    name: "Plaatsing van nieuw speciale VELUX dakvensters",
    description: "Uitzonderlijke combinaties en speciale dakvensters voor complexere projecten.",
    base: 1790,
    image: "assets/velux-speciale-dakvensters.jpg"
  }
];

const placeholderImage =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 520'%3E%3Crect width='800' height='520' fill='%23dedbd5'/%3E%3Cpath d='M110 360 285 205l118 103 72-62 215 114' fill='none' stroke='%23aaa49a' stroke-width='18' stroke-linecap='round' stroke-linejoin='round'/%3E%3Ccircle cx='560' cy='170' r='46' fill='%23c7c2ba'/%3E%3Crect x='92' y='92' width='616' height='336' rx='18' fill='none' stroke='%23b9b3aa' stroke-width='12'/%3E%3C/svg%3E";

const sizeOptions = [
  ["CK01", "55", "70", -180],
  ["CK02", "55", "78", -140],
  ["CK04", "55", "98", -80],
  ["CK06", "55", "118", -30],
  ["FK04", "66", "98", 0],
  ["FK06", "66", "118", 80],
  ["FK08", "66", "140", 150],
  ["MK04", "78", "98", 120],
  ["MK06", "78", "118", 210],
  ["MK08", "78", "140", 310],
  ["MK10", "78", "160", 390],
  ["MK12", "78", "180", 470],
  ["PK04", "94", "98", 300],
  ["PK06", "94", "118", 410],
  ["PK08", "94", "140", 520],
  ["PK10", "94", "160", 620],
  ["SK01", "114", "70", 380],
  ["SK06", "114", "118", 640],
  ["SK08", "114", "140", 760],
  ["SK10", "114", "160", 880],
  ["UK04", "134", "98", 740],
  ["UK08", "134", "140", 980],
  ["UK10", "134", "160", 1120]
];

const configSteps = [
  {
    id: "size",
    title: "Kies het formaat",
    shortTitle: "Formaat",
    choices: sizeOptions.map(([code, width, height, price]) => [
      code,
      code,
      `${width} x ${height} cm`,
      price
    ])
  },
  {
    id: "operation",
    title: "Kies hoe je raam opent",
    shortTitle: "Opening",
    choices: [
      ["manual-pivot", "Klassiek wentelend", "Greep bovenaan. Handig wanneer er meubels onder het raam staan en het raam draait volledig rond voor onderhoud.", 0],
      ["manual-top", "Uitzetvenster", "Greep onderaan. Meer vrij zicht naar buiten en makkelijk bereikbaar wanneer het raam hoger geplaatst is.", 190],
      ["electric", "Elektrisch op netstroom", "Openen met afstandsbediening. Motor en regensensor zijn inbegrepen.", 520],
      ["solar", "Elektrisch op zonne-energie", "Geen bekabeling nodig. Een logische keuze voor afgewerkte ruimtes.", 670]
    ]
  },
  {
    id: "finish",
    title: "Kies de afwerking aan de binnenzijde",
    shortTitle: "Afwerking",
    choices: [
      ["ggl", "Kleurloos gevernist hout", "VELUX GGL", 0, "finish-wood", "assets/velux-ggl-gevernist-hout.jpg"],
      ["ggu", "Wit polyurethaan", "VELUX GGU · onderhoudsvriendelijk en vochtbestendig", 210, "finish-poly", "assets/velux-ggu-wit-polyurethaan.jpg"],
      ["ggl-white", "Wit gelakt hout", "VELUX GGL · UV-bestendige acrylverf op waterbasis", 160, "finish-painted", "assets/velux-ggl-wit-gelakt-hout.jpg"]
    ]
  },
  {
    id: "glass",
    title: "Kies je glassoort",
    shortTitle: "Glassoort",
    note: "Voorlopige prijzen en teksten. Nog te vervangen door de definitieve input van Roozenburg.",
    choices: [
      ["3070", "GGL 3070 - Energy & Comfort", "Dubbel glas, Ug 1,0 W/m²K, standaard gelaagde beglazing.", 0],
      ["3069", "GGL 3069 - Energy & Heat Protection", "3-voudig glas, Ug 0,7 W/m²K, contactgeluid 49 dB.", 260],
      ["3066", "GGL 3066 - Energy Star", "Drievoudig glas, Ug 0,5 W/m²K, anti-dauw coating.", 360],
      ["3062", "GGL 3062 - Energy & Acoustic", "Drievoudig glas, Ug 0,7 W/m²K, omgevingsgeluid 42 dB.", 420]
    ]
  },
  {
    id: "roof",
    title: "Kies je dakbedekking",
    shortTitle: "Dakbedekking",
    note: "Voorlopige prijzen en teksten. Nog te vervangen door de definitieve input van Roozenburg.",
    choices: [
      ["edw", "Dakpannen (EDW 0000 standaard)", "Gootstukken voor integratie in een pannendak.", 0],
      ["edl", "Leien (EDL 0000 standaard)", "Gootstukken voor integratie in een leiendak.", 90]
    ]
  },
  {
    id: "addons",
    title: "Kies je opties",
    shortTitle: "Opties",
    multi: true,
    note: "Voorlopige opties, prijzen en teksten. Nog te vervangen door de definitieve input van Roozenburg.",
    choices: [
      ["jaloezie", "Jaloezieen", "Lichtregeling voor keuken, badkamer of bureau.", 145],
      ["rolluik", "Rolluik", "Buitenzijde zonwering, verduistering en extra isolatie.", 520],
      ["plooigordijn", "Plooigordijnen", "Decoratieve binnenzonwering.", 185],
      ["muggengaas", "Muggengaas", "Ventileren zonder insecten binnen te laten.", 130],
      ["vouwgordijn", "Multifunctionele vouwgordijnen", "Zachte lichtfiltering en decoratieve afwerking.", 210],
      ["zonnescherm", "Buitenste zonnescherm", "Warmtewering aan de buitenzijde.", 260],
      ["verduistering", "Verduisteringsgordijnen", "Volledige verduistering voor slaapkamers.", 190],
      ["rolgordijn", "Rolgordijnen", "Eenvoudige lichtregeling binnen.", 120],
      ["binnenafwerking", "Binnenafwerking", "Afwerkingskader rond het dakvenster.", 340],
      ["onderdakkraag", "Onderdakkraag", "Aansluiting met het onderdak.", 115],
      ["dampscherm", "Dampschermkraag", "Luchtdichte afwerking aan de binnenzijde.", 105],
      ["bdx", "Isolerend kader", "Extra isolatie rond het dakvenster.", 135]
    ]
  }
];

const state = {
  step: 1,
  configIndex: 0,
  selectedProduct: null,
  selectedWidth: "",
  sizeCodeInput: "",
  sizeCodeError: "",
  selections: {},
  quote: []
};

const euro = new Intl.NumberFormat("nl-BE", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0
});

const els = {
  steps: [...document.querySelectorAll("[data-step]")],
  progress: [...document.querySelectorAll("[data-go-step]")],
  products: document.querySelector("[data-products]"),
  configTitle: document.querySelector("[data-config-title]"),
  configTabs: document.querySelector("[data-config-tabs]"),
  choiceGrid: document.querySelector("[data-choice-grid]"),
  liveConfig: document.querySelector("[data-live-config]"),
  currentPrice: document.querySelector("[data-current-price]"),
  prevConfig: document.querySelector("[data-prev-config]"),
  nextConfig: document.querySelector("[data-next-config]"),
  addConfig: document.querySelector("[data-add-config]"),
  quoteList: document.querySelector("[data-quote-list]"),
  emptyQuote: document.querySelector("[data-empty-quote]"),
  addAnother: document.querySelector("[data-add-another]"),
  continueDetails: document.querySelector("[data-continue-details]"),
  detailsForm: document.querySelector("[data-details-form]"),
  submitButton: document.querySelector("[data-submit-button]"),
  confirmation: document.querySelector("[data-confirmation]"),
  summaryCount: document.querySelector("[data-summary-count]"),
  summaryCurrent: document.querySelector("[data-summary-current]"),
  summaryTotal: document.querySelector("[data-summary-total]")
};

function goToStep(step) {
  state.step = Math.max(1, Math.min(4, step));
  els.steps.forEach((el) => el.classList.toggle("is-active", Number(el.dataset.step) === state.step));
  els.progress.forEach((el) => el.classList.toggle("is-active", Number(el.dataset.goStep) === state.step));
  window.scrollTo({ top: 0, behavior: "auto" });
}

function scrollConfigToTop() {
  const target = document.querySelector("[data-config-top]");
  if (!target) return;
  requestAnimationFrame(() => target.scrollIntoView({ block: "start", behavior: "auto" }));
}

function getChoice(stepId, value) {
  const step = configSteps.find((item) => item.id === stepId);
  return step?.choices.find(([id]) => id === value);
}

function getSizeOption(code) {
  return sizeOptions.find(([id]) => id === code);
}

function getWidths() {
  return [...new Set(sizeOptions.map(([, width]) => width))];
}

function getSizesForWidth(width) {
  return sizeOptions.filter(([, optionWidth]) => optionWidth === width);
}

function normalizeVeluxCode(rawValue) {
  const compact = rawValue.toUpperCase().replace(/[^A-Z0-9]/g, "");
  const spaced = rawValue.toUpperCase().replace(/[^A-Z0-9]/g, " ");
  const candidates = [compact, ...spaced.split(/\s+/)]
    .flatMap((item) => item.match(/[CFMPSU]K?\d{2}/g) || [])
    .filter(Boolean);

  for (const candidate of candidates) {
    const direct = candidate.length === 4 ? candidate : `${candidate[0]}K${candidate.slice(1)}`;
    if (getSizeOption(direct)) return direct;
  }

  return "";
}

function selectSize(code) {
  const option = getSizeOption(code);
  if (!option) return;
  state.selectedWidth = option[1];
  state.selections.size = code;
  state.sizeCodeError = "";
}

function currentLinePrice() {
  if (!state.selectedProduct) return 0;

  return configSteps.reduce((total, step) => {
    const selected = state.selections[step.id];
    if (!selected) return total;
    if (step.multi) {
      return total + selected.reduce((sum, id) => sum + (getChoice(step.id, id)?.[3] || 0), 0);
    }
    return total + (getChoice(step.id, selected)?.[3] || 0);
  }, state.selectedProduct.base);
}

function quoteTotal() {
  return state.quote.reduce((total, item) => total + item.total, 0);
}

function renderProducts() {
  els.products.innerHTML = products
    .map((product) => `
      <article class="product-card ${product.primaryRoute ? "is-primary-route" : ""}">
        <img src="${product.image || placeholderImage}" alt="${product.image ? product.name : ""}">
        <div class="product-card-content">
          ${product.routeNote ? `<div class="product-route-note">${product.routeNote}</div>` : ""}
          <h2>${product.name}</h2>
          <p>${product.description}</p>
          <div class="price-line">Vanaf ${euro.format(product.base)}</div>
          <button class="primary-action" type="button" data-product="${product.id}">Configureer</button>
        </div>
      </article>
    `)
    .join("");
}

function canVisitConfigIndex(index) {
  return configSteps.slice(0, index).every((step) => step.multi || state.selections[step.id]);
}

function renderTabs() {
  els.configTabs.innerHTML = configSteps
    .map((step, index) => {
      const isLocked = !canVisitConfigIndex(index);
      return `
      <button class="${index === state.configIndex ? "is-active" : ""} ${index < state.configIndex ? "is-complete" : ""}" type="button" data-config-step="${index}" ${isLocked ? "disabled" : ""}>
        <span>${index + 1}</span>
        <strong>${step.shortTitle}</strong>
      </button>
    `;
    })
    .join("");
}

function renderSizeChoices(step, selected) {
  const selectedOption = selected ? getSizeOption(selected) : null;
  const widthButtons = getWidths()
    .map((width) => {
      const isSelected = state.selectedWidth === width;
      return `
        <button class="size-width-button ${isSelected ? "is-selected" : ""}" type="button" data-size-width="${width}">
          ${width} cm
        </button>
      `;
    })
    .join("");

  const heightChoices = state.selectedWidth
    ? getSizesForWidth(state.selectedWidth)
        .map(([code, width, height, price]) => {
          const isSelected = selected === code;
          const priceLabel = price === 0 ? "Inbegrepen" : `+ ${euro.format(price)}`;
          return `
            <button class="choice-card size-height-card ${isSelected ? "is-selected" : ""}" type="button" data-choice="${code}">
              <span class="choice-price">${priceLabel}</span>
              <strong>${height} cm hoog</strong>
              <span class="choice-description">${code} · ${width} x ${height} cm</span>
            </button>
          `;
        })
        .join("")
    : `<p class="size-empty">Kies eerst een breedte om de passende hoogtes te zien.</p>`;

  return `
    <div class="size-config">
      <form class="size-code-form" data-size-code-form>
        <label for="velux-code">Ik ken mijn VELUX-code</label>
        <div class="size-code-row">
          <input id="velux-code" data-velux-code type="text" inputmode="text" autocomplete="off" value="${state.sizeCodeInput}" placeholder="Bijvoorbeeld MK06 of M06">
          <button class="secondary-action" type="submit">Herken code</button>
        </div>
        <p class="size-code-help">Je vindt de code meestal op het typeplaatje wanneer je het raam opent.</p>
        <details class="size-code-location">
          <summary>Waar vind ik mijn code?</summary>
          <p>Open het dakraam en kijk op het typeplaatje aan de bovenkant van de raamvleugel. Vaak staat er iets zoals GGL MK06 of alleen M06.</p>
        </details>
        ${state.sizeCodeError ? `<p class="field-error">${state.sizeCodeError}</p>` : ""}
        ${selectedOption ? `<p class="size-code-match">Gekozen formaat: ${selectedOption[0]} · ${selectedOption[1]} x ${selectedOption[2]} cm</p>` : ""}
      </form>

      <div class="size-picker">
        <div class="size-picker-group">
          <h2>Of kies eerst de breedte</h2>
          <div class="size-width-grid">${widthButtons}</div>
        </div>
        <div class="size-picker-group">
          <h2>Kies daarna de hoogte</h2>
          <div class="size-height-grid">${heightChoices}</div>
        </div>
      </div>
    </div>
  `;
}

function renderChoices() {
  const step = configSteps[state.configIndex];
  const selected = state.selections[step.id] || (step.multi ? [] : "");

  if (step.id === "size") {
    els.choiceGrid.classList.add("is-size-step");
    els.choiceGrid.innerHTML = renderSizeChoices(step, selected);
  } else {
    els.choiceGrid.classList.remove("is-size-step");
    const stepNote = step.note ? `<p class="config-step-note">${step.note}</p>` : "";
    els.choiceGrid.innerHTML = stepNote + step.choices
    .map(([id, title, description, price, visualClass, visualImage]) => {
      const isSelected = step.multi ? selected.includes(id) : selected === id;
      const priceLabel = price === 0 ? "Inbegrepen" : `+ ${euro.format(price)}`;
      const visual = visualClass
        ? `<span class="choice-visual ${visualClass} ${visualImage ? "has-image" : ""}" aria-hidden="true">${visualImage ? `<img src="${visualImage}" alt="">` : ""}</span>`
        : "";
      return `
        <button class="choice-card ${visualImage ? "has-image-card" : ""} ${isSelected ? "is-selected" : ""}" type="button" data-choice="${id}">
          <span class="choice-price">${priceLabel}</span>
          ${visual}
          <strong>${title}</strong>
          <span class="choice-description">${description}</span>
        </button>
      `;
    })
    .join("");
  }

  els.prevConfig.disabled = state.configIndex === 0;
  els.nextConfig.disabled = !step.multi && !state.selections[step.id];
  els.nextConfig.hidden = state.configIndex === configSteps.length - 1;
  els.addConfig.hidden = state.configIndex !== configSteps.length - 1;
}

function renderLiveConfig() {
  els.liveConfig.innerHTML = configSteps
    .map((step) => {
      const value = state.selections[step.id];
      let label = "Nog niet gekozen";

      if (Array.isArray(value) && value.length) {
        label = value.map((id) => getChoice(step.id, id)?.[1]).join(", ");
      } else if (value) {
        label = getChoice(step.id, value)?.[1] || label;
      }

      return `
        <div>
          <dt>${step.shortTitle}</dt>
          <dd>${label}</dd>
        </div>
      `;
    })
    .join("");

  els.currentPrice.textContent = euro.format(currentLinePrice());
  els.summaryCurrent.textContent = state.selectedProduct?.name || "Nog geen product";
}

function renderConfig() {
  els.configTitle.textContent = `${state.selectedProduct.name} configureren`;
  renderTabs();
  renderChoices();
  renderLiveConfig();
  updateSummary();
}

function selectChoice(choiceId) {
  const step = configSteps[state.configIndex];
  if (step.id === "size") {
    selectSize(choiceId);
    renderConfig();
    return;
  }

  if (step.multi) {
    const selected = new Set(state.selections[step.id] || []);
    if (selected.has(choiceId)) selected.delete(choiceId);
    else selected.add(choiceId);
    state.selections[step.id] = [...selected];
  } else {
    state.selections[step.id] = choiceId;
  }

  renderConfig();
}

function requiredConfigComplete() {
  return configSteps.every((step) => step.multi || state.selections[step.id]);
}

function addCurrentConfig() {
  if (!requiredConfigComplete()) {
    const firstMissing = configSteps.findIndex((step) => !step.multi && !state.selections[step.id]);
    state.configIndex = firstMissing;
    renderConfig();
    scrollConfigToTop();
    return;
  }

  state.quote.push({
    id: crypto.randomUUID(),
    product: state.selectedProduct,
    selections: structuredClone(state.selections),
    total: currentLinePrice()
  });

  renderQuote();
  goToStep(3);
}

function renderQuote() {
  els.emptyQuote.hidden = state.quote.length > 0;
  els.quoteList.innerHTML = state.quote
    .map((item) => {
      const details = configSteps
        .map((step) => {
          const value = item.selections[step.id];
          if (Array.isArray(value) && value.length) return `${step.shortTitle}: ${value.map((id) => getChoice(step.id, id)?.[1]).join(", ")}`;
          if (Array.isArray(value)) return `${step.shortTitle}: geen opties`;
          return `${step.shortTitle}: ${getChoice(step.id, value)?.[1]}`;
        })
        .join(" · ");

      return `
        <article class="quote-item">
          <div>
            <h2>${item.product.name}</h2>
            <p>${details}</p>
          </div>
          <div class="quote-price">
            <div>${euro.format(item.total)}</div>
            <button class="danger-action" type="button" data-remove="${item.id}">Verwijder</button>
          </div>
        </article>
      `;
    })
    .join("");

  updateSummary();
}

function updateSummary() {
  els.summaryCount.textContent = String(state.quote.length);
  els.summaryTotal.textContent = euro.format(quoteTotal());
  els.summaryCurrent.textContent = state.selectedProduct?.name || "Nog geen product";
}

els.products.addEventListener("click", (event) => {
  const button = event.target.closest("[data-product]");
  if (!button) return;

  state.selectedProduct = products.find((product) => product.id === button.dataset.product);
  state.selections = {};
  state.selectedWidth = "";
  state.sizeCodeInput = "";
  state.sizeCodeError = "";
  state.configIndex = 0;
  renderConfig();
  goToStep(2);
});

els.configTabs.addEventListener("click", (event) => {
  const button = event.target.closest("[data-config-step]");
  if (!button) return;

  const targetIndex = Number(button.dataset.configStep);
  if (!canVisitConfigIndex(targetIndex)) return;

  state.configIndex = targetIndex;
  renderConfig();
  scrollConfigToTop();
});

els.choiceGrid.addEventListener("click", (event) => {
  const widthButton = event.target.closest("[data-size-width]");
  if (widthButton) {
    state.selectedWidth = widthButton.dataset.sizeWidth;
    if (state.selections.size && getSizeOption(state.selections.size)?.[1] !== state.selectedWidth) {
      delete state.selections.size;
    }
    state.sizeCodeError = "";
    renderConfig();
    return;
  }

  const button = event.target.closest("[data-choice]");
  if (!button) return;
  selectChoice(button.dataset.choice);
});

els.choiceGrid.addEventListener("input", (event) => {
  const input = event.target.closest("[data-velux-code]");
  if (!input) return;
  state.sizeCodeInput = input.value;
});

els.choiceGrid.addEventListener("submit", (event) => {
  const form = event.target.closest("[data-size-code-form]");
  if (!form) return;
  event.preventDefault();

  const code = normalizeVeluxCode(state.sizeCodeInput);
  if (!code) {
    state.sizeCodeError = "We herkennen deze code nog niet. Kies hieronder je breedte en hoogte.";
    renderConfig();
    return;
  }

  state.sizeCodeInput = code;
  selectSize(code);
  renderConfig();
});

els.prevConfig.addEventListener("click", () => {
  state.configIndex = Math.max(0, state.configIndex - 1);
  renderConfig();
  scrollConfigToTop();
});

els.nextConfig.addEventListener("click", () => {
  const step = configSteps[state.configIndex];
  if (!step.multi && !state.selections[step.id]) return;

  state.configIndex = Math.min(configSteps.length - 1, state.configIndex + 1);
  renderConfig();
  scrollConfigToTop();
});

els.addConfig.addEventListener("click", addCurrentConfig);

els.quoteList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-remove]");
  if (!button) return;

  state.quote = state.quote.filter((item) => item.id !== button.dataset.remove);
  renderQuote();
});

els.addAnother.addEventListener("click", () => goToStep(1));

els.continueDetails.addEventListener("click", () => {
  if (state.quote.length === 0) {
    goToStep(1);
    return;
  }
  els.submitButton.disabled = false;
  els.submitButton.textContent = "Verstuur aanvraag";
  els.confirmation.hidden = true;
  goToStep(4);
});

els.detailsForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!els.detailsForm.checkValidity()) return;

  els.confirmation.hidden = false;
  els.detailsForm.reset();
  els.submitButton.disabled = true;
  els.submitButton.textContent = "Aanvraag verzonden";
  els.confirmation.scrollIntoView({ block: "nearest", behavior: "smooth" });
});

els.progress.forEach((button) => {
  button.addEventListener("click", () => {
    const target = Number(button.dataset.goStep);
    if (target > 1 && !state.selectedProduct) return goToStep(1);
    if (target > 3 && state.quote.length === 0) return goToStep(1);
    goToStep(target);
  });
});

renderProducts();
renderQuote();
updateSummary();
