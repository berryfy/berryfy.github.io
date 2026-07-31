import type { SiteCopy, SiteLocale } from "@/features/home/types/home";

export const siteLocales = [
  "en",
  "ko",
  "ja",
] as const satisfies readonly SiteLocale[];

export const localeDetails: Record<
  SiteLocale,
  { label: string; shortLabel: string; path: string }
> = {
  en: { label: "English", shortLabel: "EN", path: "/" },
  ko: { label: "한국어", shortLabel: "KO", path: "/ko/" },
  ja: { label: "日本語", shortLabel: "JA", path: "/ja/" },
};

export const siteCopy: Record<SiteLocale, SiteCopy> = {
  en: {
    languageName: "English",
    languageMenuLabel: "Choose language",
    menuLabel: "Open menu",
    closeMenuLabel: "Close menu",
    navigation: {
      apps: "Apps",
      studio: "Studio",
      principles: "Principles",
    },
    hero: {
      eyebrow: "Independent app studio",
      title: "Small apps.\nBright moments.",
      description:
        "Berryfy creates thoughtful Android apps that make play, focus, and everyday creativity feel a little better.",
      primaryAction: "Explore our apps",
      secondaryAction: "How we build",
      challengeLabel: "100 app challenge",
      challengeValue: "One useful idea, thoughtfully released at a time.",
    },
    visual: {
      caption: "Made for everyday moments",
      play: "Play",
      focus: "Focus",
      create: "Create",
    },
    apps: {
      eyebrow: "Selected work",
      title: "Apps for the little moments that shape a day.",
      description:
        "A growing collection of playful games, calm utilities, and creative tools. Real app imagery will live in these flexible visual spaces.",
      featuredLabel: "Featured",
      imageSlotLabel: "App artwork area",
      items: [
        {
          name: "Potion Sort Quest",
          category: "Puzzle game",
          description:
            "A calming color-sorting puzzle made for quick, satisfying breaks.",
          visual: "potion",
        },
        {
          name: "Pomodoro Flow",
          category: "Productivity",
          description:
            "A focused rhythm for deep work, gentle breaks, and better days.",
          visual: "focus",
        },
        {
          name: "Prisma AI Wallpaper",
          category: "Creativity",
          description:
            "Distinctive visual ideas shaped into wallpapers for your screen.",
          visual: "prisma",
        },
      ],
    },
    studio: {
      eyebrow: "The studio",
      title: "Built small. Designed to travel far.",
      description:
        "Berryfy is an independent Android app studio exploring one hundred ideas without the weight of unnecessary infrastructure. Each release begins with a clear use, a distinct mood, and respect for the person holding the phone.",
      note: "Android first · Global by design · Lightweight by default",
    },
    principles: {
      eyebrow: "Our principles",
      title: "Useful, expressive, and easy to keep.",
      items: [
        {
          title: "Clear by default",
          description:
            "Every app should explain itself through focused flows and familiar interactions.",
        },
        {
          title: "Light on resources",
          description:
            "We prefer local-first experiences and simple systems that stay fast and dependable.",
        },
        {
          title: "Made for more people",
          description:
            "Language, screen size, and context are considered from the first design decision.",
        },
      ],
    },
    footer: {
      tagline: "Small apps. Bright moments.",
      contact: "Contact",
      rights: "All rights reserved.",
    },
  },
  ko: {
    languageName: "한국어",
    languageMenuLabel: "언어 선택",
    menuLabel: "메뉴 열기",
    closeMenuLabel: "메뉴 닫기",
    navigation: {
      apps: "앱",
      studio: "스튜디오",
      principles: "원칙",
    },
    hero: {
      eyebrow: "인디 앱 스튜디오",
      title: "작은 앱으로,\n더 빛나는 순간.",
      description:
        "Berryfy는 놀이와 집중, 일상의 창작을 조금 더 기분 좋게 만드는 세심한 Android 앱을 만듭니다.",
      primaryAction: "앱 둘러보기",
      secondaryAction: "만드는 방식",
      challengeLabel: "앱 100개 챌린지",
      challengeValue: "쓸모 있는 아이디어를 하나씩 정성스럽게 출시합니다.",
    },
    visual: {
      caption: "매일의 순간을 위해",
      play: "놀이",
      focus: "집중",
      create: "창작",
    },
    apps: {
      eyebrow: "주요 앱",
      title: "하루를 이루는 작은 순간을 위한 앱.",
      description:
        "즐거운 게임과 차분한 유틸리티, 창작 도구가 계속 추가됩니다. 현재의 유연한 비주얼 영역에는 나중에 실제 앱 이미지가 들어갑니다.",
      featuredLabel: "주요 앱",
      imageSlotLabel: "앱 이미지 영역",
      items: [
        {
          name: "Potion Sort Quest",
          category: "퍼즐 게임",
          description:
            "짧은 휴식에도 기분 좋은 몰입을 주는 차분한 색상 정렬 퍼즐입니다.",
          visual: "potion",
        },
        {
          name: "Pomodoro Flow",
          category: "생산성",
          description:
            "깊은 집중과 편안한 휴식을 자연스러운 리듬으로 이어줍니다.",
          visual: "focus",
        },
        {
          name: "Prisma AI Wallpaper",
          category: "창작",
          description:
            "독특한 시각적 아이디어를 내 화면에 어울리는 배경화면으로 만듭니다.",
          visual: "prisma",
        },
      ],
    },
    studio: {
      eyebrow: "스튜디오",
      title: "작게 만들고, 더 멀리 닿도록.",
      description:
        "Berryfy는 불필요한 인프라의 무게 없이 100개의 아이디어를 탐색하는 독립 Android 앱 스튜디오입니다. 모든 앱은 명확한 쓰임, 고유한 분위기, 그리고 사용자를 존중하는 마음에서 시작합니다.",
      note: "Android 우선 · 글로벌 설계 · 가벼운 구조",
    },
    principles: {
      eyebrow: "만드는 원칙",
      title: "유용하고, 개성 있고, 오래 곁에 둘 수 있게.",
      items: [
        {
          title: "처음부터 명확하게",
          description:
            "집중된 흐름과 익숙한 상호작용으로 별도 설명 없이도 사용할 수 있게 만듭니다.",
        },
        {
          title: "자원은 가볍게",
          description:
            "빠르고 안정적으로 유지되는 로컬 중심 경험과 단순한 시스템을 선호합니다.",
        },
        {
          title: "더 많은 사람을 위해",
          description:
            "언어와 화면 크기, 사용 환경을 첫 디자인 결정부터 함께 고려합니다.",
        },
      ],
    },
    footer: {
      tagline: "작은 앱으로, 더 빛나는 순간.",
      contact: "문의",
      rights: "모든 권리를 보유합니다.",
    },
  },
  ja: {
    languageName: "日本語",
    languageMenuLabel: "言語を選択",
    menuLabel: "メニューを開く",
    closeMenuLabel: "メニューを閉じる",
    navigation: {
      apps: "アプリ",
      studio: "スタジオ",
      principles: "ポリシー",
    },
    hero: {
      eyebrow: "インディーアプリスタジオ",
      title: "小さなアプリで、\n毎日にきらめきを。",
      description:
        "Berryfyは、遊ぶ、集中する、つくる時間を少し心地よくするAndroidアプリを丁寧につくります。",
      primaryAction: "アプリを見る",
      secondaryAction: "ものづくりについて",
      challengeLabel: "100アプリ・チャレンジ",
      challengeValue: "役立つアイデアを、一つずつ丁寧に届けます。",
    },
    visual: {
      caption: "毎日の小さな瞬間へ",
      play: "遊ぶ",
      focus: "集中",
      create: "つくる",
    },
    apps: {
      eyebrow: "注目のアプリ",
      title: "一日をつくる、小さな時間のためのアプリ。",
      description:
        "楽しいゲーム、落ち着いたユーティリティ、創作ツールを少しずつ追加しています。このビジュアルエリアには、後から実際のアプリ画像を配置できます。",
      featuredLabel: "注目",
      imageSlotLabel: "アプリ画像エリア",
      items: [
        {
          name: "Potion Sort Quest",
          category: "パズルゲーム",
          description:
            "短い休憩にも心地よい達成感を楽しめる、穏やかな色分けパズルです。",
          visual: "potion",
        },
        {
          name: "Pomodoro Flow",
          category: "生産性",
          description: "深い集中とやさしい休憩を、自然なリズムでつなぎます。",
          visual: "focus",
        },
        {
          name: "Prisma AI Wallpaper",
          category: "クリエイティブ",
          description:
            "個性的なビジュアルアイデアを、画面に似合う壁紙へ仕上げます。",
          visual: "prisma",
        },
      ],
    },
    studio: {
      eyebrow: "スタジオ",
      title: "小さくつくり、遠くまで届ける。",
      description:
        "Berryfyは、不要なインフラを抱えずに100のアイデアを探求する独立系Androidアプリスタジオです。明確な用途、独自の空気感、そして使う人への敬意から、すべてのアプリが始まります。",
      note: "Androidファースト · グローバル設計 · 軽やかな仕組み",
    },
    principles: {
      eyebrow: "ものづくりの原則",
      title: "役立ち、個性があり、長くそばに置けるものを。",
      items: [
        {
          title: "最初から明快に",
          description:
            "迷いのない流れと慣れた操作で、説明がなくても使える体験を目指します。",
        },
        {
          title: "リソースは軽やかに",
          description:
            "速く安定して使える、ローカル中心の体験とシンプルな仕組みを選びます。",
        },
        {
          title: "より多くの人へ",
          description:
            "言語、画面サイズ、使う場面を最初のデザイン判断から考えます。",
        },
      ],
    },
    footer: {
      tagline: "小さなアプリで、毎日にきらめきを。",
      contact: "お問い合わせ",
      rights: "All rights reserved.",
    },
  },
};
