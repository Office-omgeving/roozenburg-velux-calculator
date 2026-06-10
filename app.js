const products = [
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
    id: "replace-window",
    name: "Vervanging van uw oud VELUX dakvenster",
    description: "Een bestaand VELUX dakvenster vervangen door een nieuwer model.",
    base: 1210,
    image: "assets/velux-vervanging-oud-dakvenster.jpg"
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

const configSteps = [
  {
    id: "operation",
    key: "A",
    title: "Kies je kantelsysteem",
    shortTitle: "Kantelsysteem",
    choices: [
      ["manual-pivot", "Manueel wentelend dakvenster", "Handgreep bovenaan, wentelt 180 graden voor onderhoud.", 0],
      ["manual-top", "Manueel uitzetbaar dakvenster", "Panoramisch uitzicht en meer ruimtegevoel wanneer het raam open staat.", 190],
      ["electric", "Elektrisch dakvenster op netstroom", "Afstandsbediening, motor en regensensor inbegrepen.", 520],
      ["solar", "Elektrisch dakvenster op zonne-energie", "Geen bekabeling nodig, ideaal voor afgewerkte ruimtes.", 670]
    ]
  },
  {
    id: "finish",
    key: "B",
    title: "Kies de afwerking aan de binnenzijde",
    shortTitle: "Afwerking",
    choices: [
      ["ggl", "GGL", "Kleurloos gevernist hout.", 0, "finish-wood", "assets/velux-ggl-gevernist-hout.jpg"],
      ["ggu", "GGU", "Wit polyurethaan, onderhoudsvriendelijk en vochtbestendig.", 210, "finish-poly", "assets/velux-ggu-wit-polyurethaan.jpg"],
      ["ggl-white", "GGL (gelakt hout)", "Wit geverfd hout met UV-bestendige acrylverf op waterbasis.", 160, "finish-painted", "assets/velux-ggl-wit-gelakt-hout.jpg"]
    ]
  },
  {
    id: "size",
    key: "C",
    title: "Kies het gewenste formaat",
    shortTitle: "Formaat",
    choices: [
      ["CK01", "Model CK01", "55 x 70 cm", -180],
      ["CK02", "Model CK02", "55 x 78 cm", -140],
      ["CK04", "Model CK04", "55 x 98 cm", -80],
      ["CK06", "Model CK06", "55 x 118 cm", -30],
      ["FK04", "Model FK04", "66 x 98 cm", 0],
      ["FK06", "Model FK06", "66 x 118 cm", 80],
      ["FK08", "Model FK08", "66 x 140 cm", 150],
      ["MK04", "Model MK04", "78 x 98 cm", 120],
      ["MK06", "Model MK06", "78 x 118 cm", 210],
      ["MK08", "Model MK08", "78 x 140 cm", 310],
      ["MK10", "Model MK10", "78 x 160 cm", 390],
      ["MK12", "Model MK12", "78 x 180 cm", 470],
      ["PK04", "Model PK04", "94 x 98 cm", 300],
      ["PK06", "Model PK06", "94 x 118 cm", 410],
      ["PK08", "Model PK08", "94 x 140 cm", 520],
      ["PK10", "Model PK10", "94 x 160 cm", 620],
      ["SK01", "Model SK01", "114 x 70 cm", 380],
      ["SK06", "Model SK06", "114 x 118 cm", 640],
      ["SK08", "Model SK08", "114 x 140 cm", 760],
      ["SK10", "Model SK10", "114 x 160 cm", 880],
      ["UK04", "Model UK04", "134 x 98 cm", 740],
      ["UK08", "Model UK08", "134 x 140 cm", 980],
      ["UK10", "Model UK10", "134 x 160 cm", 1120]
    ]
  },
  {
    id: "glass",
    key: "D",
    title: "Welke glassoort",
    shortTitle: "Glassoort",
    choices: [
      ["3070", "GGL 3070 - Energy & Comfort", "Dubbel glas, Ug 1,0 W/m²K, standaard gelaagde beglazing.", 0],
      ["3069", "GGL 3069 - Energy & Heat Protection", "3-voudig glas, Ug 0,7 W/m²K, contactgeluid 49 dB.", 260],
      ["3066", "GGL 3066 - Energy Star", "Drievoudig glas, Ug 0,5 W/m²K, anti-dauw coating.", 360],
      ["3062", "GGL 3062 - Energy & Acoustic", "Drievoudig glas, Ug 0,7 W/m²K, omgevingsgeluid 42 dB.", 420]
    ]
  },
  {
    id: "roof",
    key: "E",
    title: "Kies je dakbedekking",
    shortTitle: "Dakbedekking",
    choices: [
      ["edw", "Dakpannen (EDW 0000 standaard)", "Gootstukken voor integratie in een pannendak.", 0],
      ["edl", "Leien (EDL 0000 standaard)", "Gootstukken voor integratie in een leiendak.", 90]
    ]
  },
  {
    id: "addons",
    key: "F",
    title: "Kies je opties",
    shortTitle: "Opties",
    multi: true,
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
      <article class="product-card">
        <img src="${product.image || placeholderImage}" alt="${product.image ? product.name : ""}">
        <div class="product-card-content">
          <h2>${product.name}</h2>
          <p>${product.description}</p>
          <div class="price-line">Vanaf ${euro.format(product.base)}</div>
          <button class="primary-action" type="button" data-product="${product.id}">Configureer</button>
        </div>
      </article>
    `)
    .join("");
}

function renderTabs() {
  els.configTabs.innerHTML = configSteps
    .map((step, index) => `
      <button class="${index === state.configIndex ? "is-active" : ""}" type="button" data-config-step="${index}">
        <span>${step.key}</span>
        <strong>${step.shortTitle}</strong>
      </button>
    `)
    .join("");
}

function renderChoices() {
  const step = configSteps[state.configIndex];
  const selected = state.selections[step.id] || (step.multi ? [] : "");

  els.choiceGrid.innerHTML = step.choices
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

  els.prevConfig.disabled = state.configIndex === 0;
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
          <dt>${step.key} ${step.title}</dt>
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
          if (Array.isArray(value) && value.length) return `${step.key}: ${value.map((id) => getChoice(step.id, id)?.[1]).join(", ")}`;
          if (Array.isArray(value)) return `${step.key}: geen opties`;
          return `${step.key}: ${getChoice(step.id, value)?.[1]}`;
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
  state.configIndex = 0;
  renderConfig();
  goToStep(2);
});

els.configTabs.addEventListener("click", (event) => {
  const button = event.target.closest("[data-config-step]");
  if (!button) return;

  state.configIndex = Number(button.dataset.configStep);
  renderConfig();
  scrollConfigToTop();
});

els.choiceGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-choice]");
  if (!button) return;
  selectChoice(button.dataset.choice);
});

els.prevConfig.addEventListener("click", () => {
  state.configIndex = Math.max(0, state.configIndex - 1);
  renderConfig();
  scrollConfigToTop();
});

els.nextConfig.addEventListener("click", () => {
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
