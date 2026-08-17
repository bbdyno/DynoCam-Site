export const locales = ["en", "ko", "ja", "zh-Hans", "zh-Hant"] as const;

export type Locale = (typeof locales)[number];

export const localeLabels: Record<Locale, string> = {
  en: "English",
  ko: "한국어",
  ja: "日本語",
  "zh-Hans": "简体中文",
  "zh-Hant": "繁體中文",
};

type TourStep = {
  id: string;
  label: string;
  title: string;
  body: string;
  alt: string;
};

type Feature = { title: string; body: string };
type FollowStyle = Feature & { name: string; pro?: boolean };
type Plan = { name: string; headline: string; items: string[]; featured?: boolean };

export type HomeCopy = {
  meta: { title: string; description: string };
  nav: {
    workflow: string;
    engine: string;
    plans: string;
    support: string;
    appStore: string;
    menu: string;
    language: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    accent: string;
    body: string;
    primary: string;
    secondary: string;
    status: string;
    imageAlt: string;
  };
  proofLabel: string;
  proofs: Array<{ value: string; label: string }>;
  statement: { index: string; title: string; accent: string; body: string };
  tour: { index: string; title: string; body: string; tabLabel: string; steps: TourStep[] };
  engine: {
    index: string;
    title: string;
    accent: string;
    body: string;
    features: Feature[];
  };
  styles: {
    index: string;
    title: string;
    body: string;
    pro: string;
    items: FollowStyle[];
  };
  action: {
    index: string;
    title: string;
    accent: string;
    body: string;
    framingTitle: string;
    framingBody: string;
    momentTitle: string;
    momentBody: string;
    seconds: string;
  };
  devices: {
    index: string;
    title: string;
    accent: string;
    body: string;
    imageAlt: string;
  };
  plans: {
    index: string;
    title: string;
    accent: string;
    body: string;
    items: Plan[];
    note: string;
  };
  privacy: { index: string; title: string; accent: string; body: string; link: string };
  closing: { status: string; title: string; accent: string; body: string; action: string };
  footer: { tagline: string; support: string; privacy: string; review: string };
};

export const copy: Record<Locale, HomeCopy> = {
  en: {
    meta: {
      title: "DynoCam — AI Camera Operator for Climbing Videos",
      description: "Turn a fixed climbing video into a directed follow-cam with Follow Engine V2 and on-device Action Intelligence.",
    },
    nav: {
      workflow: "Workflow",
      engine: "Follow Engine",
      plans: "Free & Pro",
      support: "Support",
      appStore: "App Store",
      menu: "Open menu",
      language: "Language",
    },
    hero: {
      eyebrow: "FOLLOW ENGINE V2 · ON-DEVICE AI",
      title: "The move is already there.",
      accent: "Direct the camera around it.",
      body: "Import a fixed climbing video, choose the climber, and let DynoCam turn motion into a smooth camera path—without uploading your footage to a server.",
      primary: "See the workflow",
      secondary: "View on the App Store",
      status: "Version 1.0 · In App Review",
      imageAlt: "DynoCam Follow Style screen inside a real iPhone frame",
    },
    proofLabel: "DynoCam product highlights",
    proofs: [
      { value: "On device", label: "Source and exported video stay off DynoCam servers" },
      { value: "4 styles", label: "Balanced, Lead, Smooth, and Action" },
      { value: "7 seconds", label: "A smart Best Moment suggestion" },
    ],
    statement: {
      index: "01 / THE IDEA",
      title: "Not another moving crop.",
      accent: "A camera path built around the climb.",
      body: "Follow Engine V2 separates the climber’s path from the camera path. It gives every move space, keeps still moments still, and directs pan and zoom independently.",
    },
    tour: {
      index: "02 / FROM CLIP TO FOLLOW-CAM",
      title: "Five decisions. One directed result.",
      body: "Each control updates the real camera path immediately, so what you see in Creation Studio is what DynoCam exports.",
      tabLabel: "DynoCam workflow",
      steps: [
        { id: "subject", label: "Choose", title: "Choose the climber.", body: "Tap one detected subject. Pro can follow a group when the frame needs more than one person.", alt: "Choose a detected climber in DynoCam" },
        { id: "analysis", label: "Analyze", title: "Understand the motion.", body: "On-device pose and motion analysis finds the path, confidence changes, and dynamic sequences.", alt: "DynoCam analyzing climbing motion on device" },
        { id: "style", label: "Direct", title: "Direct the follow.", body: "Choose Balanced, Lead, Smooth, or Action to decide how the virtual camera responds.", alt: "Choose a Follow Style in DynoCam Creation Studio" },
        { id: "frame", label: "Frame", title: "Tune the live path.", body: "Change ratio and frame size and see the actual frame update at the current playhead—no scrubbing required.", alt: "Adjust frame ratio and size with a live DynoCam preview" },
        { id: "moment", label: "Finish", title: "Find the best move.", body: "Preview the strongest seven-second section. Pro can export it as a separate highlight.", alt: "Preview or export DynoCam Best Moment" },
      ],
    },
    engine: {
      index: "03 / FOLLOW ENGINE V2",
      title: "Stable when it should be.",
      accent: "Ready before the move happens.",
      body: "The subject path is evidence. The camera path is a creative decision. DynoCam treats them separately for motion that feels filmed, not mechanically tracked.",
      features: [
        { title: "Dead Zone", body: "Ignores tiny subject motion so the frame does not hunt or micro-jitter." },
        { title: "Offline Look Ahead", body: "Reads the upcoming path before directing the current frame." },
        { title: "Independent Pan & Zoom", body: "Moves and widens on separate curves for more natural reframing." },
      ],
    },
    styles: {
      index: "04 / FOLLOW STYLES",
      title: "Choose a point of view,",
      body: "Follow Style changes the intent of the camera without making you rebuild the analysis.",
      pro: "PRO",
      items: [
        { name: "Balanced", title: "Natural by default", body: "A composed starting point for most climbs." },
        { name: "Lead", title: "Room for the next move", body: "Keeps space in the direction of travel." },
        { name: "Smooth", title: "Calm and steady", body: "Moves less for a quieter result.", pro: true },
        { name: "Action", title: "Responds to dynamics", body: "Reacts faster when the move gets explosive.", pro: true },
      ],
    },
    action: {
      index: "05 / ACTION INTELLIGENCE",
      title: "Understands the move,",
      accent: "not only the position.",
      body: "Body-motion signals help DynoCam recognize dynamic climbing sequences entirely on device.",
      framingTitle: "Action Framing",
      framingBody: "Widens before a big move, then returns smoothly when the action settles.",
      momentTitle: "Best Moment",
      momentBody: "Suggests the strongest segment for quick preview or a separate Pro export.",
      seconds: "smart highlight",
    },
    devices: {
      index: "06 / IPHONE & IPAD",
      title: "The same camera path.",
      accent: "More room when you want it.",
      body: "Start on iPhone or use the wider iPad workspace. The analysis, Follow Styles, live framing, and export flow stay consistent.",
      imageAlt: "DynoCam live frame controls inside a real iPad frame",
    },
    plans: {
      index: "07 / FREE & PRO",
      title: "Analyze first.",
      accent: "Choose the export that fits.",
      body: "Analysis and preview are open to everyone. Upgrade only when you need a cleaner or more advanced final export.",
      items: [
        { name: "FREE", headline: "Explore every move", items: ["Unlimited analysis and preview", "720p up to 30 seconds", "DynoCam watermark"] },
        { name: "REWARDED EXPORT", headline: "One clean short export", items: ["Optional ad, never forced", "1080p up to 30 seconds", "No watermark for that export"] },
        { name: "PRO", headline: "Direct the full climb", featured: true, items: ["Full selected clip at 1080p", "No watermark or ads", "Advanced styles, Action Framing, Best Moment export, group tracking, corrections, precision analysis, and eligible upscaling"] },
      ],
      note: "Monthly and annual Pro plans are available. Your App Store region shows the current local price.",
    },
    privacy: {
      index: "08 / PRIVATE BY DESIGN",
      title: "Your video does not need to leave",
      accent: "your iPhone or iPad.",
      body: "Detection, motion analysis, camera direction, enhancement, and export run on device. DynoCam does not upload source or exported video to its own server.",
      link: "Read the privacy policy",
    },
    closing: {
      status: "VERSION 1.0 · WAITING FOR APP REVIEW",
      title: "Your climb.",
      accent: "Directed by motion.",
      body: "DynoCam 1.0 has been submitted to App Review for iPhone and iPad.",
      action: "View App Store page",
    },
    footer: {
      tagline: "AI camera direction for climbing videos.",
      support: "Support",
      privacy: "Privacy",
      review: "Version 1.0 is in App Review",
    },
  },
  ko: {
    meta: {
      title: "DynoCam — 클라이밍 영상 AI 카메라 오퍼레이터",
      description: "고정 촬영한 클라이밍 영상을 Follow Engine V2와 온디바이스 Action Intelligence로 자연스러운 Follow Cam으로 만드세요.",
    },
    nav: {
      workflow: "작동 방식",
      engine: "Follow Engine",
      plans: "무료와 Pro",
      support: "지원",
      appStore: "App Store",
      menu: "메뉴 열기",
      language: "언어",
    },
    hero: {
      eyebrow: "FOLLOW ENGINE V2 · ON-DEVICE AI",
      title: "최고의 무브는 이미 담겨 있습니다.",
      accent: "이제 카메라를 연출하세요.",
      body: "고정 촬영한 클라이밍 영상을 불러오고 클라이머를 선택하세요. DynoCam이 서버 업로드 없이 움직임을 자연스러운 카메라 패스로 바꿉니다.",
      primary: "작동 방식 보기",
      secondary: "App Store에서 보기",
      status: "버전 1.0 · App Store 심사 중",
      imageAlt: "실제 iPhone 프레임 안에 표시된 DynoCam Follow Style 화면",
    },
    proofLabel: "DynoCam 주요 특징",
    proofs: [
      { value: "온디바이스", label: "원본과 결과 영상은 DynoCam 서버로 전송되지 않음" },
      { value: "4가지 스타일", label: "Balanced, Lead, Smooth, Action" },
      { value: "7초", label: "스마트 Best Moment 추천" },
    ],
    statement: {
      index: "01 / THE IDEA",
      title: "움직이는 크롭이 아닙니다.",
      accent: "등반을 중심으로 설계한 카메라 패스입니다.",
      body: "Follow Engine V2는 클라이머 경로와 카메라 경로를 분리합니다. 무브에 여백을 주고, 멈춘 순간에는 화면도 안정시키며, 팬과 줌을 따로 연출합니다.",
    },
    tour: {
      index: "02 / 영상에서 FOLLOW CAM까지",
      title: "다섯 번의 선택, 하나의 연출된 결과.",
      body: "모든 조절은 실제 카메라 패스에 즉시 반영됩니다. Creation Studio에서 보는 프레임 그대로 내보냅니다.",
      tabLabel: "DynoCam 작업 흐름",
      steps: [
        { id: "subject", label: "선택", title: "클라이머를 선택하세요.", body: "감지된 한 명을 탭하세요. Pro에서는 여러 명을 함께 추적할 수도 있습니다.", alt: "DynoCam에서 감지된 클라이머 선택" },
        { id: "analysis", label: "분석", title: "움직임을 이해합니다.", body: "온디바이스 포즈·동작 분석으로 경로, 신뢰도 변화, 역동적인 구간을 찾습니다.", alt: "기기에서 클라이밍 움직임을 분석하는 DynoCam" },
        { id: "style", label: "연출", title: "Follow를 직접 연출하세요.", body: "Balanced, Lead, Smooth, Action 중에서 가상 카메라의 반응을 선택합니다.", alt: "DynoCam Creation Studio에서 Follow Style 선택" },
        { id: "frame", label: "프레임", title: "실제 패스를 바로 조절하세요.", body: "비율과 프레임 크기를 바꾸면 재생 바를 움직이지 않아도 현재 프레임이 즉시 갱신됩니다.", alt: "DynoCam 실시간 미리보기에서 비율과 프레임 크기 조절" },
        { id: "moment", label: "완성", title: "가장 강한 무브를 찾습니다.", body: "가장 인상적인 7초를 미리 보세요. Pro에서는 별도 하이라이트로 내보낼 수 있습니다.", alt: "DynoCam Best Moment 미리보기 및 내보내기" },
      ],
    },
    engine: {
      index: "03 / FOLLOW ENGINE V2",
      title: "멈춰야 할 때는 안정적으로.",
      accent: "움직이기 전에는 미리 준비합니다.",
      body: "피사체 경로는 관측값이고, 카메라 경로는 연출입니다. DynoCam은 둘을 분리해 기계적인 추적 대신 실제 촬영에 가까운 움직임을 만듭니다.",
      features: [
        { title: "Dead Zone", body: "작은 움직임을 무시해 프레임이 흔들리거나 미세하게 쫓아가지 않게 합니다." },
        { title: "Offline Look Ahead", body: "다음 이동 경로를 미리 읽고 현재 카메라 프레임을 설계합니다." },
        { title: "팬·줌 독립 제어", body: "이동과 확대를 서로 다른 곡선으로 제어해 더 자연스럽게 리프레임합니다." },
      ],
    },
    styles: {
      index: "04 / FOLLOW STYLES",
      title: "카메라의 관점을 선택하세요.",
      body: "분석을 다시 하지 않아도 Follow Style만 바꿔 카메라 연출 의도를 조절할 수 있습니다.",
      pro: "PRO",
      items: [
        { name: "Balanced", title: "자연스러운 기본값", body: "대부분의 등반에 어울리는 안정적인 시작점입니다." },
        { name: "Lead", title: "다음 무브를 위한 공간", body: "진행 방향에 여유 공간을 남깁니다." },
        { name: "Smooth", title: "차분하고 안정적으로", body: "카메라 이동을 줄여 더 편안한 결과를 만듭니다.", pro: true },
        { name: "Action", title: "다이내믹하게 반응", body: "역동적인 무브에 더 빠르게 반응합니다.", pro: true },
      ],
    },
    action: {
      index: "05 / ACTION INTELLIGENCE",
      title: "위치만 보는 것이 아니라,",
      accent: "무브를 이해합니다.",
      body: "DynoCam은 신체 움직임 신호를 온디바이스로 분석해 역동적인 클라이밍 구간을 인식합니다.",
      framingTitle: "Action Framing",
      framingBody: "큰 무브 전에 화면을 넓히고, 움직임이 잦아들면 부드럽게 원래 프레임으로 돌아옵니다.",
      momentTitle: "Best Moment",
      momentBody: "가장 강한 구간을 추천해 빠르게 미리 보거나 Pro에서 별도 영상으로 내보냅니다.",
      seconds: "스마트 하이라이트",
    },
    devices: {
      index: "06 / IPHONE & IPAD",
      title: "같은 카메라 패스.",
      accent: "필요할 때 더 넓은 작업 공간.",
      body: "iPhone에서 시작하거나 iPad의 넓은 화면을 사용하세요. 분석, Follow Style, 실시간 프레이밍, 내보내기 흐름은 동일합니다.",
      imageAlt: "실제 iPad 프레임 안에 표시된 DynoCam 실시간 프레임 조절 화면",
    },
    plans: {
      index: "07 / 무료와 PRO",
      title: "먼저 분석하고,",
      accent: "필요한 방식으로 내보내세요.",
      body: "분석과 미리보기는 누구에게나 열려 있습니다. 더 깔끔하거나 고급 기능이 필요한 최종 출력에서만 선택하세요.",
      items: [
        { name: "FREE", headline: "모든 무브 살펴보기", items: ["무제한 분석과 미리보기", "720p · 최대 30초", "DynoCam 워터마크"] },
        { name: "리워드 내보내기", headline: "짧은 영상 한 번을 깔끔하게", items: ["강제가 아닌 선택형 광고", "1080p · 최대 30초", "해당 내보내기 워터마크 제거"] },
        { name: "PRO", headline: "등반 전체를 직접 연출", featured: true, items: ["선택한 전체 구간 1080p", "워터마크와 광고 없음", "고급 스타일, Action Framing, Best Moment 내보내기, 그룹 추적, 구간 보정, 정밀 분석, 조건부 업스케일링"] },
      ],
      note: "Pro는 월간·연간 플랜으로 제공됩니다. 현재 지역별 가격은 App Store가 앱 안에 표시합니다.",
    },
    privacy: {
      index: "08 / PRIVATE BY DESIGN",
      title: "영상은 iPhone이나 iPad를",
      accent: "떠날 필요가 없습니다.",
      body: "감지, 움직임 분석, 카메라 연출, 화질 향상, 내보내기는 기기에서 실행됩니다. DynoCam은 원본이나 결과 영상을 자체 서버로 업로드하지 않습니다.",
      link: "개인정보 처리방침 보기",
    },
    closing: {
      status: "버전 1.0 · APP STORE 심사 대기 중",
      title: "당신의 등반.",
      accent: "움직임이 연출하는 카메라.",
      body: "DynoCam 1.0을 iPhone과 iPad용으로 App Store 심사에 제출했습니다.",
      action: "App Store 페이지 보기",
    },
    footer: {
      tagline: "클라이밍 영상을 위한 AI 카메라 연출.",
      support: "지원",
      privacy: "개인정보",
      review: "버전 1.0 App Store 심사 중",
    },
  },
  ja: {
    meta: {
      title: "DynoCam — クライミング動画のAIカメラマン",
      description: "固定カメラのクライミング動画を、Follow Engine V2と端末上のAction Intelligenceで自然なFollow Camへ。",
    },
    nav: { workflow: "使い方", engine: "Follow Engine", plans: "無料とPro", support: "サポート", appStore: "App Store", menu: "メニューを開く", language: "言語" },
    hero: {
      eyebrow: "FOLLOW ENGINE V2 · ON-DEVICE AI",
      title: "最高のムーブは、もう映っています。",
      accent: "あとはカメラを演出するだけ。",
      body: "固定カメラの動画を読み込み、クライマーを選択。DynoCamが映像をサーバーへ送らず、動きを自然なカメラパスへ変換します。",
      primary: "使い方を見る",
      secondary: "App Storeで見る",
      status: "バージョン1.0 · App Review中",
      imageAlt: "実際のiPhoneフレームに表示されたDynoCamのFollow Style画面",
    },
    proofLabel: "DynoCamの主な特長",
    proofs: [
      { value: "デバイス内", label: "元動画と書き出した動画をDynoCamサーバーへ送信しません" },
      { value: "4スタイル", label: "Balanced、Lead、Smooth、Action" },
      { value: "7秒", label: "スマートなBest Moment提案" },
    ],
    statement: { index: "01 / THE IDEA", title: "動くクロップではありません。", accent: "登りを中心に設計するカメラパスです。", body: "Follow Engine V2はクライマーの軌跡とカメラの軌跡を分離。ムーブに余白を残し、静止した瞬間は安定させ、パンとズームを別々に演出します。" },
    tour: {
      index: "02 / 動画からFOLLOW CAMへ", title: "5つの選択で、演出された一本へ。", body: "すべての調整が実際のカメラパスへ即時反映。Creation Studioで見たフレームをそのまま書き出します。", tabLabel: "DynoCamのワークフロー",
      steps: [
        { id: "subject", label: "選択", title: "クライマーを選ぶ。", body: "検出された1人をタップ。Proでは複数人をまとめて追跡できます。", alt: "DynoCamで検出されたクライマーを選択" },
        { id: "analysis", label: "解析", title: "動きを理解する。", body: "端末上の姿勢・動作解析で、軌跡、信頼度の変化、ダイナミックな区間を見つけます。", alt: "DynoCamが端末上でクライミング動作を解析" },
        { id: "style", label: "演出", title: "Followを演出する。", body: "Balanced、Lead、Smooth、Actionから仮想カメラの反応を選びます。", alt: "DynoCam Creation StudioでFollow Styleを選択" },
        { id: "frame", label: "構図", title: "カメラパスをその場で調整。", body: "比率やフレームサイズを変えると、再生位置を動かさなくても現在の画面が即時更新されます。", alt: "DynoCamのライブプレビューで比率とフレームサイズを調整" },
        { id: "moment", label: "完成", title: "最高のムーブを見つける。", body: "最も印象的な7秒をプレビュー。Proでは別のハイライト動画として書き出せます。", alt: "DynoCam Best Momentのプレビューと書き出し" },
      ],
    },
    engine: { index: "03 / FOLLOW ENGINE V2", title: "止まるべき時は安定。", accent: "動き出す前に準備。", body: "被写体の軌跡は観測値、カメラの軌跡は演出です。両者を分けることで、機械的な追跡ではなく撮影したような動きを作ります。", features: [
      { title: "Dead Zone", body: "小さな動きを無視し、細かな揺れや過剰な追従を抑えます。" },
      { title: "Offline Look Ahead", body: "次の移動経路を先読みして、現在のフレームを演出します。" },
      { title: "パン・ズーム独立制御", body: "移動と拡大を別々のカーブで制御し、自然にリフレームします。" },
    ] },
    styles: { index: "04 / FOLLOW STYLES", title: "カメラの視点を選ぶ。", body: "解析をやり直さず、Follow Styleだけでカメラ演出の意図を変えられます。", pro: "PRO", items: [
      { name: "Balanced", title: "自然なデフォルト", body: "多くの登りに合う安定した出発点。" },
      { name: "Lead", title: "次のムーブへ余白", body: "進行方向にスペースを残します。" },
      { name: "Smooth", title: "静かで安定", body: "カメラ移動を抑え、落ち着いた結果へ。", pro: true },
      { name: "Action", title: "動きへ素早く反応", body: "ダイナミックなムーブに速く追従します。", pro: true },
    ] },
    action: { index: "05 / ACTION INTELLIGENCE", title: "位置だけでなく、", accent: "ムーブを理解します。", body: "身体の動きの信号を端末上で解析し、ダイナミックなクライミング区間を認識します。", framingTitle: "Action Framing", framingBody: "大きなムーブの前に画角を広げ、動きが落ち着くと滑らかに戻します。", momentTitle: "Best Moment", momentBody: "最も強い区間を提案し、すぐにプレビュー。Proでは別動画として書き出せます。", seconds: "スマートハイライト" },
    devices: { index: "06 / IPHONE & IPAD", title: "同じカメラパス。", accent: "必要な時は、より広い作業領域。", body: "iPhoneで始めることも、iPadの広い画面を使うこともできます。解析、Follow Style、ライブ構図、書き出しの流れは同じです。", imageAlt: "実際のiPadフレームに表示されたDynoCamのライブ構図調整" },
    plans: { index: "07 / 無料とPRO", title: "まず解析。", accent: "必要な形で書き出す。", body: "解析とプレビューは誰でも利用できます。よりクリーンで高度な完成動画が必要な時だけ選べます。", items: [
      { name: "FREE", headline: "すべてのムーブを確認", items: ["解析とプレビューは無制限", "720p・最大30秒", "DynoCamウォーターマーク"] },
      { name: "リワード書き出し", headline: "短い動画を一度だけクリーンに", items: ["強制されない任意の広告", "1080p・最大30秒", "その書き出しのウォーターマークなし"] },
      { name: "PRO", headline: "登り全体を演出", featured: true, items: ["選択した全区間を1080p", "ウォーターマークと広告なし", "高度なスタイル、Action Framing、Best Moment書き出し、複数人追跡、補正、高精度解析、対象映像のアップスケーリング"] },
    ], note: "Proは月間・年間プランで提供されます。現在の地域別価格はApp Storeがアプリ内に表示します。" },
    privacy: { index: "08 / PRIVATE BY DESIGN", title: "動画をiPhoneやiPadの外へ", accent: "出す必要はありません。", body: "検出、動作解析、カメラ演出、画質向上、書き出しは端末上で実行。DynoCamは元動画や書き出した動画を独自サーバーへアップロードしません。", link: "プライバシーポリシーを見る" },
    closing: { status: "バージョン1.0 · APP REVIEW待機中", title: "あなたの登り。", accent: "動きが演出するカメラ。", body: "DynoCam 1.0をiPhone・iPad向けにApp Reviewへ提出しました。", action: "App Storeページを見る" },
    footer: { tagline: "クライミング動画のためのAIカメラ演出。", support: "サポート", privacy: "プライバシー", review: "バージョン1.0はApp Review中" },
  },
  "zh-Hans": {
    meta: { title: "DynoCam — 攀岩视频AI摄影师", description: "使用Follow Engine V2和设备端Action Intelligence，把固定机位攀岩视频变成自然的Follow Cam。" },
    nav: { workflow: "工作流程", engine: "Follow Engine", plans: "免费与Pro", support: "支持", appStore: "App Store", menu: "打开菜单", language: "语言" },
    hero: { eyebrow: "FOLLOW ENGINE V2 · ON-DEVICE AI", title: "精彩动作已经在视频里。", accent: "现在，让镜头围绕它运动。", body: "导入固定机位攀岩视频，选择攀岩者。DynoCam无需把视频上传到服务器，即可把动作转化为流畅的镜头路径。", primary: "查看工作流程", secondary: "前往App Store", status: "版本1.0 · App Review中", imageAlt: "真实iPhone边框中的DynoCam Follow Style界面" },
    proofLabel: "DynoCam产品亮点",
    proofs: [
      { value: "设备端处理", label: "原视频与导出视频不会上传至DynoCam服务器" },
      { value: "4种风格", label: "Balanced、Lead、Smooth、Action" },
      { value: "7秒", label: "智能Best Moment推荐" },
    ],
    statement: { index: "01 / THE IDEA", title: "不只是移动裁剪。", accent: "而是围绕攀爬设计的镜头路径。", body: "Follow Engine V2将攀岩者路径与镜头路径分开处理，为动作保留空间，让静止时的画面更稳定，并分别控制平移与缩放。" },
    tour: { index: "02 / 从视频到FOLLOW CAM", title: "五个选择，一个完整镜头。", body: "每项调整都会立即作用于真实镜头路径。Creation Studio中看到的画面，就是最终导出的画面。", tabLabel: "DynoCam工作流程", steps: [
      { id: "subject", label: "选择", title: "选择攀岩者。", body: "点选一位检测到的人物。Pro还可在画面需要时追踪多人。", alt: "在DynoCam中选择检测到的攀岩者" },
      { id: "analysis", label: "分析", title: "理解动作。", body: "设备端姿态与运动分析可找到路径、置信度变化和动态片段。", alt: "DynoCam在设备端分析攀岩动作" },
      { id: "style", label: "设计", title: "设计Follow镜头。", body: "从Balanced、Lead、Smooth和Action中选择虚拟摄影机的响应方式。", alt: "在DynoCam Creation Studio中选择Follow Style" },
      { id: "frame", label: "取景", title: "实时调整镜头路径。", body: "修改画幅或画面大小后，无需拖动进度条，当前画面会立即更新。", alt: "在DynoCam实时预览中调整画幅与画面大小" },
      { id: "moment", label: "完成", title: "找出最佳动作。", body: "预览最精彩的7秒。Pro可将它另存为独立高光视频。", alt: "预览或导出DynoCam Best Moment" },
    ] },
    engine: { index: "03 / FOLLOW ENGINE V2", title: "该稳定时保持稳定。", accent: "动作发生前提前准备。", body: "人物路径是观测结果，镜头路径是创作选择。DynoCam将两者分开，让画面更像真实拍摄，而不是机械追踪。", features: [
      { title: "Dead Zone", body: "忽略细小位移，减少画面反复追逐与轻微抖动。" },
      { title: "Offline Look Ahead", body: "提前读取下一段路径，再设计当前镜头。" },
      { title: "平移与缩放独立控制", body: "使用不同曲线控制移动和缩放，让自动取景更自然。" },
    ] },
    styles: { index: "04 / FOLLOW STYLES", title: "选择镜头视角。", body: "无需重新分析，只切换Follow Style即可改变镜头意图。", pro: "PRO", items: [
      { name: "Balanced", title: "自然默认", body: "适合大多数攀爬的稳定起点。" },
      { name: "Lead", title: "为下一步留出空间", body: "在运动方向保留更多画面。" },
      { name: "Smooth", title: "平静而稳定", body: "减少镜头移动，获得更从容的效果。", pro: true },
      { name: "Action", title: "响应动态动作", body: "在爆发性动作中反应更快。", pro: true },
    ] },
    action: { index: "05 / ACTION INTELLIGENCE", title: "理解的不只是位置，", accent: "还有动作本身。", body: "DynoCam完全在设备端分析身体运动信号，识别动态攀爬片段。", framingTitle: "Action Framing", framingBody: "在大动作前自动拉宽画面，动作平稳后再顺滑恢复。", momentTitle: "Best Moment", momentBody: "推荐最精彩的片段，可快速预览；Pro还可另存为独立视频。", seconds: "智能高光" },
    devices: { index: "06 / IPHONE & IPAD", title: "同一条镜头路径。", accent: "需要时，使用更大的工作区。", body: "可从iPhone开始，也可使用iPad的宽阔画面。分析、Follow Style、实时取景与导出流程保持一致。", imageAlt: "真实iPad边框中的DynoCam实时取景控制" },
    plans: { index: "07 / 免费与PRO", title: "先分析，", accent: "再选择合适的导出方式。", body: "所有人都可以分析和预览。只有在需要更干净或更高级的最终视频时才需升级。", items: [
      { name: "FREE", headline: "查看每一个动作", items: ["无限分析与预览", "720p，最长30秒", "带DynoCam水印"] },
      { name: "激励导出", headline: "一次干净的短视频导出", items: ["可选广告，不会强制播放", "1080p，最长30秒", "本次导出无水印"] },
      { name: "PRO", headline: "设计完整攀爬镜头", featured: true, items: ["完整所选片段1080p", "无水印、无广告", "高级风格、Action Framing、Best Moment导出、多人追踪、区间修正、精细分析及符合条件的智能超分辨率"] },
    ], note: "Pro提供月度和年度方案。App Store会在应用内显示您所在地区的当前价格。" },
    privacy: { index: "08 / PRIVATE BY DESIGN", title: "视频无需离开", accent: "你的iPhone或iPad。", body: "检测、动作分析、镜头设计、画质增强和导出均在设备端完成。DynoCam不会把原视频或导出视频上传到自己的服务器。", link: "阅读隐私政策" },
    closing: { status: "版本1.0 · 等待APP REVIEW", title: "你的攀爬。", accent: "由动作设计镜头。", body: "DynoCam 1.0已提交iPhone和iPad版App Review。", action: "查看App Store页面" },
    footer: { tagline: "为攀岩视频设计的AI镜头。", support: "支持", privacy: "隐私", review: "版本1.0正在App Review中" },
  },
  "zh-Hant": {
    meta: { title: "DynoCam — 攀岩影片AI攝影師", description: "使用Follow Engine V2與裝置端Action Intelligence，把固定機位攀岩影片變成自然的Follow Cam。" },
    nav: { workflow: "工作流程", engine: "Follow Engine", plans: "免費與Pro", support: "支援", appStore: "App Store", menu: "開啟選單", language: "語言" },
    hero: { eyebrow: "FOLLOW ENGINE V2 · ON-DEVICE AI", title: "精彩動作已經在影片裡。", accent: "現在，讓鏡頭圍繞它運動。", body: "匯入固定機位攀岩影片，選擇攀岩者。DynoCam無須把影片上傳到伺服器，即可把動作轉化為流暢的鏡頭路徑。", primary: "查看工作流程", secondary: "前往App Store", status: "版本1.0 · App Review中", imageAlt: "真實iPhone邊框中的DynoCam Follow Style畫面" },
    proofLabel: "DynoCam產品亮點",
    proofs: [
      { value: "裝置端處理", label: "原始影片與輸出影片不會上傳到DynoCam伺服器" },
      { value: "4種風格", label: "Balanced、Lead、Smooth、Action" },
      { value: "7秒", label: "智慧Best Moment建議" },
    ],
    statement: { index: "01 / THE IDEA", title: "不只是移動裁切。", accent: "而是圍繞攀爬設計的鏡頭路徑。", body: "Follow Engine V2把攀岩者路徑與鏡頭路徑分開處理，為動作保留空間，讓靜止時的畫面更穩定，並分別控制平移與縮放。" },
    tour: { index: "02 / 從影片到FOLLOW CAM", title: "五個選擇，一個完整鏡頭。", body: "每項調整都會立即套用到真實鏡頭路徑。Creation Studio中看到的畫面，就是最後輸出的畫面。", tabLabel: "DynoCam工作流程", steps: [
      { id: "subject", label: "選擇", title: "選擇攀岩者。", body: "點選一位偵測到的人物。Pro亦可在畫面需要時追蹤多人。", alt: "在DynoCam中選擇偵測到的攀岩者" },
      { id: "analysis", label: "分析", title: "理解動作。", body: "裝置端姿態與動作分析可找出路徑、信賴度變化和動態片段。", alt: "DynoCam在裝置端分析攀岩動作" },
      { id: "style", label: "設計", title: "設計Follow鏡頭。", body: "從Balanced、Lead、Smooth與Action中選擇虛擬攝影機的反應方式。", alt: "在DynoCam Creation Studio中選擇Follow Style" },
      { id: "frame", label: "取景", title: "即時調整鏡頭路徑。", body: "變更畫幅或畫面大小後，無須拖動進度列，目前畫面會立即更新。", alt: "在DynoCam即時預覽中調整畫幅與畫面大小" },
      { id: "moment", label: "完成", title: "找出最佳動作。", body: "預覽最精彩的7秒。Pro可另存為獨立精華影片。", alt: "預覽或輸出DynoCam Best Moment" },
    ] },
    engine: { index: "03 / FOLLOW ENGINE V2", title: "該穩定時保持穩定。", accent: "動作發生前提前準備。", body: "人物路徑是觀測結果，鏡頭路徑是創作選擇。DynoCam將兩者分開，讓畫面更像真實拍攝，而不是機械追蹤。", features: [
      { title: "Dead Zone", body: "忽略細小位移，減少畫面反覆追逐與輕微晃動。" },
      { title: "Offline Look Ahead", body: "提前讀取下一段路徑，再設計目前鏡頭。" },
      { title: "平移與縮放獨立控制", body: "使用不同曲線控制移動與縮放，讓自動取景更自然。" },
    ] },
    styles: { index: "04 / FOLLOW STYLES", title: "選擇鏡頭視角。", body: "無須重新分析，只要切換Follow Style即可改變鏡頭意圖。", pro: "PRO", items: [
      { name: "Balanced", title: "自然預設", body: "適合大多數攀爬的穩定起點。" },
      { name: "Lead", title: "為下一步保留空間", body: "在移動方向保留更多畫面。" },
      { name: "Smooth", title: "平靜而穩定", body: "減少鏡頭移動，獲得更從容的結果。", pro: true },
      { name: "Action", title: "回應動態動作", body: "在爆發性動作中反應更快。", pro: true },
    ] },
    action: { index: "05 / ACTION INTELLIGENCE", title: "理解的不只是位置，", accent: "還有動作本身。", body: "DynoCam完全在裝置端分析身體動作訊號，辨識動態攀爬片段。", framingTitle: "Action Framing", framingBody: "在大動作前自動拉寬畫面，動作平穩後再順暢恢復。", momentTitle: "Best Moment", momentBody: "推薦最精彩的片段，可快速預覽；Pro亦可另存為獨立影片。", seconds: "智慧精華" },
    devices: { index: "06 / IPHONE & IPAD", title: "同一條鏡頭路徑。", accent: "需要時，使用更大的工作區。", body: "可從iPhone開始，也可使用iPad的寬闊畫面。分析、Follow Style、即時取景與輸出流程保持一致。", imageAlt: "真實iPad邊框中的DynoCam即時取景控制" },
    plans: { index: "07 / 免費與PRO", title: "先分析，", accent: "再選擇合適的輸出方式。", body: "所有人都可以分析和預覽。只有在需要更乾淨或更進階的完成影片時才需升級。", items: [
      { name: "FREE", headline: "查看每一個動作", items: ["無限分析與預覽", "720p，最長30秒", "帶DynoCam浮水印"] },
      { name: "獎勵式輸出", headline: "一次乾淨的短片輸出", items: ["可選廣告，不會強制播放", "1080p，最長30秒", "本次輸出無浮水印"] },
      { name: "PRO", headline: "設計完整攀爬鏡頭", featured: true, items: ["完整所選片段1080p", "無浮水印、無廣告", "進階風格、Action Framing、Best Moment輸出、多人追蹤、區間修正、精細分析及符合條件的智慧超解析度"] },
    ], note: "Pro提供月度和年度方案。App Store會在App內顯示您所在地區的目前價格。" },
    privacy: { index: "08 / PRIVATE BY DESIGN", title: "影片無須離開", accent: "你的iPhone或iPad。", body: "偵測、動作分析、鏡頭設計、畫質增強和輸出均在裝置端完成。DynoCam不會把原始影片或輸出影片上傳到自己的伺服器。", link: "閱讀隱私權政策" },
    closing: { status: "版本1.0 · 等待APP REVIEW", title: "你的攀爬。", accent: "由動作設計鏡頭。", body: "DynoCam 1.0已提交iPhone與iPad版App Review。", action: "查看App Store頁面" },
    footer: { tagline: "為攀岩影片設計的AI鏡頭。", support: "支援", privacy: "隱私權", review: "版本1.0正在App Review中" },
  },
};

export function resolveLocale(value: string | null | undefined): Locale | null {
  if (!value) return null;
  const normalized = value.replace("_", "-").toLowerCase();
  if (normalized.startsWith("zh-hant") || normalized === "zh-tw" || normalized === "zh-hk") return "zh-Hant";
  if (normalized.startsWith("zh")) return "zh-Hans";
  if (normalized.startsWith("ko")) return "ko";
  if (normalized.startsWith("ja")) return "ja";
  if (normalized.startsWith("en")) return "en";
  return null;
}
