const supported = ["en", "ko", "ja", "zh-Hans", "zh-Hant"];

function normalize(value) {
  if (!value) return null;
  const language = value.replace("_", "-").toLowerCase();
  if (language.startsWith("zh-hant") || language === "zh-tw" || language === "zh-hk") return "zh-Hant";
  if (language.startsWith("zh")) return "zh-Hans";
  if (language.startsWith("ko")) return "ko";
  if (language.startsWith("ja")) return "ja";
  if (language.startsWith("en")) return "en";
  return null;
}

function firstLocale() {
  const query = normalize(new URLSearchParams(location.search).get("lang"));
  if (query) return query;
  const saved = normalize(localStorage.getItem("dynocam-locale"));
  if (saved) return saved;
  for (const language of navigator.languages || []) {
    const detected = normalize(language);
    if (detected) return detected;
  }
  return "en";
}

function activate(locale, updateUrl = true) {
  if (!supported.includes(locale)) return;
  localStorage.setItem("dynocam-locale", locale);
  document.documentElement.lang = locale;

  document.querySelectorAll("[data-locale]").forEach((element) => {
    element.hidden = element.dataset.locale !== locale;
  });
  document.querySelectorAll("[data-locale-option]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.localeOption === locale));
  });
  document.querySelectorAll("[data-localized-link]").forEach((link) => {
    const url = new URL(link.getAttribute("href"), location.href);
    url.searchParams.set("lang", locale);
    link.setAttribute("href", `${url.pathname}${url.search}${url.hash}`);
  });

  const content = document.querySelector(`[data-locale="${locale}"]`);
  if (content?.dataset.title) document.title = `${content.dataset.title} — DynoCam`;
  const pageHeading = document.querySelector("[data-page-heading]");
  const pageLead = document.querySelector("[data-page-lead]");
  if (pageHeading && content?.dataset.title) pageHeading.textContent = content.dataset.title;
  if (pageLead && content?.dataset.lead) pageLead.textContent = content.dataset.lead;
  const description = content?.dataset.description;
  const meta = document.querySelector('meta[name="description"]');
  if (description && meta) meta.setAttribute("content", description);

  if (updateUrl) {
    const url = new URL(location.href);
    url.searchParams.set("lang", locale);
    history.replaceState({}, "", `${url.pathname}${url.search}${url.hash}`);
  }
}

document.querySelectorAll("[data-locale-option]").forEach((button) => {
  button.addEventListener("click", () => activate(button.dataset.localeOption));
});

activate(firstLocale(), true);
