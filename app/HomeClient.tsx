import { useEffect, useState } from "react";

const productScreens = [
  {
    id: "trim",
    eyebrow: "01 · TRIM",
    title: "필요한 순간만\n정확하게.",
    body: "타임라인과 파형을 보며 분석할 구간을 빠르게 선택하세요.",
    src: "./images/screens/iphone-trim.png",
  },
  {
    id: "track",
    eyebrow: "02 · TRACK",
    title: "AI가 움직임을\n읽어냅니다.",
    body: "사람을 찾고 포즈를 감지해, 클라이밍부터 댄스와 스포츠까지 움직임의 경로를 만듭니다.",
    src: "./images/screens/iphone-processing.png",
  },
  {
    id: "frame",
    eyebrow: "03 · FRAME",
    title: "주인공은 언제나\n화면의 중심에.",
    body: "3:4, 4:5, 9:16 비율과 크롭 크기, 카메라 움직임을 조절하세요.",
    src: "./images/screens/iphone-editor.png",
  },
] as const;

function PhoneFrame({
  src,
  className = "",
  label,
}: {
  src: string;
  className?: string;
  label: string;
}) {
  return (
    <div className={`phone-frame ${className}`} aria-label={label}>
      <span className="phone-button phone-button-left" aria-hidden="true" />
      <span className="phone-button phone-button-right" aria-hidden="true" />
      <div className="phone-glass">
        <img src={src} alt={label} />
      </div>
    </div>
  );
}

function TabletFrame({
  src,
  className = "",
  label,
}: {
  src: string;
  className?: string;
  label: string;
}) {
  return (
    <div className={`tablet-frame ${className}`} aria-label={label}>
      <span className="tablet-camera" aria-hidden="true" />
      <div className="tablet-glass">
        <img src={src} alt={label} />
      </div>
    </div>
  );
}

export default function Home() {
  const [activeScreen, setActiveScreen] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? window.scrollY / max : 0;
      document.documentElement.style.setProperty(
        "--page-progress",
        String(progress),
      );
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const current = productScreens[activeScreen];

  return (
    <main>
      <div className="progress-rail" aria-hidden="true">
        <span />
      </div>

      <nav className="site-nav" aria-label="주요 메뉴">
        <a className="brand" href="#top" aria-label="DynoCam 홈">
          <img src="./images/dynocam-icon.png" alt="" />
          <span>DynoCam</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-links"
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span />
          <span />
          <span className="sr-only">메뉴 열기</span>
        </button>
        <div className={`site-links ${menuOpen ? "is-open" : ""}`} id="site-links">
          <a href="#experience" onClick={() => setMenuOpen(false)}>기능</a>
          <a href="#devices" onClick={() => setMenuOpen(false)}>디바이스</a>
          <a href="#technology" onClick={() => setMenuOpen(false)}>기술</a>
          <a className="nav-cta" href="#download" onClick={() => setMenuOpen(false)}>App Store</a>
        </div>
      </nav>

      <section className="hero" id="top">
        <img
          className="hero-art"
          src="./images/climbing-motion-hero.png"
          alt="보라색 빛의 추적 경로가 이어진 추상적인 클라이밍 월"
        />
        <div className="hero-vignette" aria-hidden="true" />
        <div className="hero-orbit orbit-one" aria-hidden="true" />
        <div className="hero-orbit orbit-two" aria-hidden="true" />
        <div className="hero-copy">
          <p className="kicker"><span /> AI ACTION CAMERA</p>
          <h1>
            당신의 등반을,
            <strong>한 편의 움직임으로.</strong>
          </h1>
          <p className="hero-description">
            DynoCam은 영상 속 사람을 감지하고 움직임을 따라가며,
            클라이밍·댄스·스포츠 영상을 몰입감 있는 세로 콘텐츠로 완성합니다.
          </p>
          <div className="hero-actions">
            <a className="primary-action" href="#experience">작동 방식 보기 <span>↓</span></a>
            <a className="text-action" href="#download">App Store에서 보기 <span>↗</span></a>
          </div>
        </div>
        <div className="hero-device-wrap" aria-hidden="true">
          <div className="device-aura" />
          <PhoneFrame
            src="./images/screens/iphone-editor.png"
            label="DynoCam 편집 화면이 표시된 iPhone"
          />
        </div>
        <div className="scroll-cue" aria-hidden="true">
          <span>SCROLL TO FOLLOW</span>
          <i />
        </div>
      </section>

      <section className="statement" aria-labelledby="statement-title">
        <p className="section-index">01 / THE IDEA</p>
        <h2 id="statement-title">
          카메라는 멈춰 있어도,
          <span>프레임은 당신을 따라갑니다.</span>
        </h2>
        <div className="statement-grid">
          <p>
            삼각대에 세워둔 영상도 충분합니다. DynoCam이 사람의 위치와
            포즈를 기기 안에서 분석해 매 순간 새로운 카메라 프레임을 계산합니다.
          </p>
          <div className="metric-row" aria-label="제품 주요 수치">
            <div><strong>3</strong><span>출력 화면비</span></div>
            <div><strong>4</strong><span>AI 분석 단계</span></div>
            <div><strong>1</strong><span>탭으로 분석</span></div>
          </div>
        </div>
      </section>

      <section className="experience" id="experience" aria-labelledby="experience-title">
        <div className="experience-heading">
          <p className="section-index">02 / HOW IT WORKS</p>
          <h2 id="experience-title">세 단계면 충분합니다.</h2>
        </div>
        <div className="experience-stage">
          <div className="experience-copy" aria-live="polite">
            <p className="experience-eyebrow">{current.eyebrow}</p>
            <h3>{current.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h3>
            <p>{current.body}</p>
            <div className="screen-tabs" role="tablist" aria-label="DynoCam 사용 단계">
              {productScreens.map((screen, index) => (
                <button
                  key={screen.id}
                  type="button"
                  role="tab"
                  aria-selected={activeScreen === index}
                  onClick={() => setActiveScreen(index)}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {screen.id === "trim" ? "구간 선택" : screen.id === "track" ? "AI 추적" : "프레임 편집"}
                </button>
              ))}
            </div>
          </div>
          <div className="experience-device">
            <div className="tracking-ring ring-a" aria-hidden="true" />
            <div className="tracking-ring ring-b" aria-hidden="true" />
            <PhoneFrame
              key={current.src}
              src={current.src}
              className="screen-swap"
              label={`DynoCam ${current.eyebrow} 실제 앱 화면`}
            />
            <span className="tracking-badge badge-top">POSE · 61%</span>
            <span className="tracking-badge badge-bottom">CENTER LOCKED</span>
          </div>
        </div>
      </section>

      <section className="vision" id="technology" aria-labelledby="vision-title">
        <div className="vision-art" aria-hidden="true">
          <div className="hold hold-a" />
          <div className="hold hold-b" />
          <div className="hold hold-c" />
          <div className="hold hold-d" />
          <div className="path-line path-line-one" />
          <div className="path-line path-line-two" />
          <div className="target-dot dot-one" />
          <div className="target-dot dot-two" />
          <div className="target-dot dot-three" />
        </div>
        <div className="vision-copy">
          <p className="section-index">03 / COMPUTER VISION</p>
          <h2 id="vision-title">사람을 찾고.<br />포즈를 읽고.<br /><span>움직임을 예측합니다.</span></h2>
          <p>
            사람 검출과 포즈 추정을 결합해 주인공의 중심을 계산하고,
            급격한 이동은 부드러운 카메라 경로로 바꿉니다.
          </p>
          <ul>
            <li><span>01</span>Person detection</li>
            <li><span>02</span>Pose estimation</li>
            <li><span>03</span>Trajectory smoothing</li>
          </ul>
        </div>
      </section>

      <section className="devices" id="devices" aria-labelledby="devices-title">
        <div className="devices-copy">
          <p className="section-index">04 / EVERY SCREEN</p>
          <h2 id="devices-title">iPhone에서 시작하고.<br /><span>iPad에서 더 크게.</span></h2>
          <p>같은 영상, 같은 분석, 더 넓은 편집 공간. 어느 기기에서든 DynoCam의 흐름은 그대로 이어집니다.</p>
        </div>
        <div className="device-pair">
          <TabletFrame src="./images/screens/ipad-editor.png" label="DynoCam이 실행 중인 iPad 편집 화면" />
          <PhoneFrame src="./images/screens/iphone-trim.png" label="DynoCam이 실행 중인 iPhone 트림 화면" />
          <div className="pair-shadow" aria-hidden="true" />
        </div>
      </section>

      <section className="feature-grid" aria-label="DynoCam 주요 기능">
        <article className="feature-card feature-wide">
          <p>FRAME RATIOS</p>
          <h3>세로 콘텐츠에 맞춘<br />세 가지 프레임.</h3>
          <div className="ratio-visual" aria-hidden="true">
            <span className="ratio-34">3:4</span>
            <span className="ratio-45">4:5</span>
            <span className="ratio-916">9:16</span>
          </div>
        </article>
        <article className="feature-card feature-dark">
          <p>CAMERA MOTION</p>
          <h3>자연스럽게.<br />혹은 예측적으로.</h3>
          <div className="motion-curve" aria-hidden="true"><i /><i /><i /><i /></div>
        </article>
        <article className="feature-card feature-light">
          <p>TRACKING POSITION</p>
          <h3>상체부터 골반까지.<br />움직임의 기준도 자유롭게.</h3>
          <div className="pose-mark" aria-hidden="true">
            <i className="pose-head" /><i className="pose-body" /><i className="pose-arm-left" />
            <i className="pose-arm-right" /><i className="pose-leg-left" /><i className="pose-leg-right" />
          </div>
        </article>
      </section>

      <section className="use-cases" aria-labelledby="use-cases-title">
        <div className="use-cases-heading">
          <p className="section-index">05 / MADE TO MOVE</p>
          <h2 id="use-cases-title">어떤 움직임이든.<br /><span>한 사람에게 집중합니다.</span></h2>
          <p>볼더링과 리드 클라이밍, 댄스 연습, 홈 트레이닝, 스케이트와 액션 스포츠까지. 사람이 선명하게 보이는 영상이라면 DynoCam의 자동 리프레임을 사용할 수 있습니다.</p>
        </div>
        <div className="use-case-grid">
          <article><span>01</span><h3>Climbing</h3><p>등반자의 수직·수평 이동을 놓치지 않는 세로 프레임.</p></article>
          <article><span>02</span><h3>Dance</h3><p>안무의 동선을 따라가는 부드러운 카메라 움직임.</p></article>
          <article><span>03</span><h3>Training</h3><p>운동 자세와 반복 동작을 보기 쉬운 화면으로 정리.</p></article>
          <article><span>04</span><h3>Action</h3><p>빠른 움직임도 예측형 추적과 스무딩으로 자연스럽게.</p></article>
        </div>
      </section>

      <section className="plans" id="plans" aria-labelledby="plans-title">
        <div className="plans-heading">
          <p className="section-index">06 / CHOOSE YOUR EXPORT</p>
          <h2 id="plans-title">분석과 미리보기는<br /><span>누구에게나 무료.</span></h2>
          <p>횟수를 세지 않습니다. 무료 사용자는 워터마크가 포함된 720p 영상을 최대 30초까지 내보낼 수 있고, 선택형 광고를 보면 해당 1회의 워터마크를 제거할 수 있습니다.</p>
        </div>
        <div className="plan-grid">
          <article className="plan-card">
            <p>FREE</p><h3>$0</h3>
            <ul><li>무제한 분석과 미리보기</li><li>기본 인물 추적과 리프레임</li><li>720p · 최대 30초</li><li>DynoCam 워터마크</li><li>광고 1회로 워터마크 제거</li></ul>
          </article>
          <article className="plan-card plan-pro">
            <p>PRO</p><h3>$1.99 <small>/ month</small></h3>
            <ul><li>1080p · 선택한 전체 구간</li><li>워터마크와 광고 없음</li><li>누락 구간 선형 보정</li><li>초기 위치 보정</li><li>정밀 재분석과 포즈 오버레이</li></ul>
            <span className="yearly-price">Yearly · $14.99</span>
          </article>
        </div>
      </section>

      <section className="closing" id="download" aria-labelledby="closing-title">
        <img className="closing-art" src="./images/climbing-motion-hero.png" alt="" />
        <div className="closing-overlay" />
        <img className="closing-icon" src="./images/dynocam-icon.png" alt="DynoCam 앱 아이콘" />
        <p>COMING SOON ON THE APP STORE</p>
        <h2 id="closing-title">등반을 기록하는<br />새로운 시선.</h2>
        <a href="https://apps.apple.com/app/id6800616313">App Store에서 보기 <span>↗</span></a>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top">
          <img src="./images/dynocam-icon.png" alt="" />
          <span>DynoCam</span>
        </a>
        <p>AI person tracking and automatic reframing for iPhone &amp; iPad.</p>
        <div>
          <span>© 2026 DynoCam</span>
          <a href="./support/">Support</a>
          <a href="./privacy/">Privacy</a>
        </div>
      </footer>
    </main>
  );
}
