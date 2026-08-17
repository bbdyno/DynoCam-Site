import { useEffect, useMemo, useState } from "react";
import { copy, localeLabels, locales, resolveLocale, type Locale } from "./i18n";

const appStoreUrl = "https://apps.apple.com/app/id6800616313";
const screenshotSources = [
  "./images/release/01-choose-subject.png",
  "./images/release/02-motion-analysis.png",
  "./images/release/03-follow-style.png",
  "./images/release/04-live-frame.png",
  "./images/release/05-best-moment.png",
] as const;

function initialLocale(): Locale {
  const query = resolveLocale(new URLSearchParams(window.location.search).get("lang"));
  if (query) return query;

  const saved = resolveLocale(window.localStorage.getItem("dynocam-locale"));
  if (saved) return saved;

  for (const language of navigator.languages) {
    const detected = resolveLocale(language);
    if (detected) return detected;
  }
  return "en";
}

function updateDescription(description: string) {
  const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
  if (meta) meta.content = description;
}

export default function Home() {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const [activeStep, setActiveStep] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const t = copy[locale];
  const currentStep = t.tour.steps[activeStep];
  const localizedPath = useMemo(() => `?lang=${encodeURIComponent(locale)}`, [locale]);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = t.meta.title;
    updateDescription(t.meta.description);
    window.localStorage.setItem("dynocam-locale", locale);

    const url = new URL(window.location.href);
    url.searchParams.set("lang", locale);
    window.history.replaceState({}, "", `${url.pathname}${url.search}${url.hash}`);
  }, [locale, t.meta.description, t.meta.title]);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? window.scrollY / max : 0;
      document.documentElement.style.setProperty("--page-progress", String(progress));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const selectLocale = (value: string) => {
    const next = resolveLocale(value);
    if (next) {
      setLocale(next);
      setMenuOpen(false);
    }
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <div className="progress-rail" aria-hidden="true"><span /></div>

      <header className="site-header">
        <nav className="site-nav" aria-label="DynoCam">
          <a className="brand" href="#top" aria-label="DynoCam">
            <img src="./images/dynocam-icon.png" alt="" />
            <span>DynoCam</span>
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="site-links"
            aria-label={t.nav.menu}
            onClick={() => setMenuOpen((value) => !value)}
          >
            <span /><span />
          </button>

          <div className={`site-links ${menuOpen ? "is-open" : ""}`} id="site-links">
            <a href="#workflow" onClick={closeMenu}>{t.nav.workflow}</a>
            <a href="#engine" onClick={closeMenu}>{t.nav.engine}</a>
            <a href="#plans" onClick={closeMenu}>{t.nav.plans}</a>
            <a href={`./support/${localizedPath}`} onClick={closeMenu}>{t.nav.support}</a>
            <label className="language-picker">
              <span className="sr-only">{t.nav.language}</span>
              <select value={locale} onChange={(event) => selectLocale(event.target.value)} aria-label={t.nav.language}>
                {locales.map((value) => <option key={value} value={value}>{localeLabels[value]}</option>)}
              </select>
            </label>
            <a className="nav-cta" href={appStoreUrl}>{t.nav.appStore}<span aria-hidden="true">↗</span></a>
          </div>
        </nav>
      </header>

      <section className="hero" id="top">
        <img className="hero-art" src="./images/climbing-motion-hero.png" alt="" />
        <div className="hero-vignette" aria-hidden="true" />
        <div className="hero-copy">
          <p className="kicker"><span aria-hidden="true" />{t.hero.eyebrow}</p>
          <h1><span>{t.hero.title}</span><strong>{t.hero.accent}</strong></h1>
          <p className="hero-description">{t.hero.body}</p>
          <div className="hero-actions">
            <a className="primary-action" href="#workflow">{t.hero.primary}<span aria-hidden="true">↓</span></a>
            <a className="secondary-action" href={appStoreUrl}>{t.hero.secondary}<span aria-hidden="true">↗</span></a>
          </div>
          <p className="review-status"><span aria-hidden="true" />{t.hero.status}</p>
        </div>
        <div className="hero-product">
          <div className="hero-product-glow" aria-hidden="true" />
          <img src={screenshotSources[2]} alt={t.hero.imageAlt} />
        </div>
      </section>

      <section className="proof-strip" aria-label={t.proofLabel}>
        {t.proofs.map((proof) => (
          <article key={proof.value}>
            <strong>{proof.value}</strong>
            <span>{proof.label}</span>
          </article>
        ))}
      </section>

      <section className="statement section-shell" aria-labelledby="statement-title">
        <p className="section-index">{t.statement.index}</p>
        <h2 id="statement-title"><span>{t.statement.title}</span><strong>{t.statement.accent}</strong></h2>
        <p>{t.statement.body}</p>
      </section>

      <section className="tour section-shell" id="workflow" aria-labelledby="tour-title">
        <div className="section-heading">
          <p className="section-index">{t.tour.index}</p>
          <h2 id="tour-title">{t.tour.title}</h2>
          <p>{t.tour.body}</p>
        </div>

        <div className="tour-layout">
          <div className="tour-visual" aria-live="polite">
            <img key={screenshotSources[activeStep]} src={screenshotSources[activeStep]} alt={currentStep.alt} />
          </div>
          <div className="tour-copy">
            <p className="tour-count">{String(activeStep + 1).padStart(2, "0")} / 05</p>
            <h3>{currentStep.title}</h3>
            <p>{currentStep.body}</p>
            <div className="tour-tabs" role="tablist" aria-label={t.tour.tabLabel}>
              {t.tour.steps.map((step, index) => (
                <button
                  key={step.id}
                  type="button"
                  role="tab"
                  aria-selected={activeStep === index}
                  onClick={() => setActiveStep(index)}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>{step.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="engine section-shell" id="engine" aria-labelledby="engine-title">
        <div className="engine-heading">
          <p className="section-index">{t.engine.index}</p>
          <h2 id="engine-title"><span>{t.engine.title}</span><strong>{t.engine.accent}</strong></h2>
          <p>{t.engine.body}</p>
        </div>
        <div className="path-visual" aria-hidden="true">
          <span className="path-grid" />
          <span className="subject-path" />
          <span className="camera-path" />
          <i className="path-point point-one" /><i className="path-point point-two" /><i className="path-point point-three" />
          <b>SUBJECT PATH</b><b>CAMERA PATH</b>
        </div>
        <div className="engine-features">
          {t.engine.features.map((feature, index) => (
            <article key={feature.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{feature.title}</h3>
              <p>{feature.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="styles section-shell" aria-labelledby="styles-title">
        <div className="section-heading compact-heading">
          <p className="section-index">{t.styles.index}</p>
          <h2 id="styles-title">{t.styles.title}</h2>
          <p>{t.styles.body}</p>
        </div>
        <div className="style-grid">
          {t.styles.items.map((style) => (
            <article key={style.name}>
              <div><span className="style-dot" aria-hidden="true" /><strong>{style.name}</strong>{style.pro && <em>{t.styles.pro}</em>}</div>
              <h3>{style.title}</h3>
              <p>{style.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="action-section section-shell" aria-labelledby="action-title">
        <div className="action-heading">
          <p className="section-index">{t.action.index}</p>
          <h2 id="action-title"><span>{t.action.title}</span><strong>{t.action.accent}</strong></h2>
          <p>{t.action.body}</p>
        </div>
        <div className="action-grid">
          <article className="action-framing">
            <p>01</p><h3>{t.action.framingTitle}</h3><span>{t.action.framingBody}</span>
            <div className="framing-demo" aria-hidden="true"><i /><i /></div>
          </article>
          <article className="best-moment">
            <p>02</p><h3>{t.action.momentTitle}</h3><span>{t.action.momentBody}</span>
            <div className="moment-time" aria-hidden="true"><strong>7</strong><small>SEC</small><em>{t.action.seconds}</em></div>
          </article>
        </div>
      </section>

      <section className="devices section-shell" aria-labelledby="devices-title">
        <div className="devices-copy">
          <p className="section-index">{t.devices.index}</p>
          <h2 id="devices-title"><span>{t.devices.title}</span><strong>{t.devices.accent}</strong></h2>
          <p>{t.devices.body}</p>
        </div>
        <div className="devices-visual">
          <img src="./images/release/ipad-live-frame.png" alt={t.devices.imageAlt} />
        </div>
      </section>

      <section className="plans section-shell" id="plans" aria-labelledby="plans-title">
        <div className="section-heading">
          <p className="section-index">{t.plans.index}</p>
          <h2 id="plans-title"><span>{t.plans.title}</span><strong>{t.plans.accent}</strong></h2>
          <p>{t.plans.body}</p>
        </div>
        <div className="plan-grid">
          {t.plans.items.map((plan) => (
            <article key={plan.name} className={plan.featured ? "featured" : ""}>
              <p>{plan.name}</p>
              <h3>{plan.headline}</h3>
              <ul>{plan.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          ))}
        </div>
        <p className="plan-note">{t.plans.note}</p>
      </section>

      <section className="privacy section-shell" aria-labelledby="privacy-title">
        <div>
          <p className="section-index">{t.privacy.index}</p>
          <h2 id="privacy-title"><span>{t.privacy.title}</span><strong>{t.privacy.accent}</strong></h2>
        </div>
        <div>
          <p>{t.privacy.body}</p>
          <a href={`./privacy/${localizedPath}`}>{t.privacy.link}<span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <section className="closing" aria-labelledby="closing-title">
        <img className="closing-art" src="./images/climbing-motion-hero.png" alt="" />
        <div className="closing-shade" aria-hidden="true" />
        <img className="closing-icon" src="./images/dynocam-icon.png" alt="DynoCam" />
        <p>{t.closing.status}</p>
        <h2 id="closing-title"><span>{t.closing.title}</span><strong>{t.closing.accent}</strong></h2>
        <span className="closing-body">{t.closing.body}</span>
        <a href={appStoreUrl}>{t.closing.action}<span aria-hidden="true">↗</span></a>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top"><img src="./images/dynocam-icon.png" alt="" /><span>DynoCam</span></a>
        <div className="footer-copy"><p>{t.footer.tagline}</p><span>{t.footer.review}</span></div>
        <div className="footer-links">
          <a href={`./support/${localizedPath}`}>{t.footer.support}</a>
          <a href={`./privacy/${localizedPath}`}>{t.footer.privacy}</a>
          <span>© 2026 DynoCam</span>
        </div>
      </footer>
    </main>
  );
}
