import { siteConfig } from "@/constants/site";
import { sharedVisualCopy } from "@/features/home/constants/sections";
import type { SiteCopy } from "@/features/home/types/home";
import type { SiteLocale } from "@/types/site";

export const siteCopy: Record<SiteLocale, SiteCopy> = {
  en: {
    menuLabel: "Open menu",
    closeMenuLabel: "Close menu",
    navigation: {
      apps: "Apps",
      studio: `About ${siteConfig.name}`,
      principles: "Experience",
    },
    hero: {
      eyebrow: "Apps for everyday life",
      title: "Small apps.\nBright moments.",
      description: `Play for a moment, find your focus, or make something your own. ${siteConfig.name} creates ${siteConfig.platform} apps that are easy to enjoy and easy to keep.`,
      primaryAction: "Explore our apps",
      secondaryAction: `Meet ${siteConfig.name}`,
      benefitLabel: "Designed around you",
      benefitValue:
        "Easy to start, pleasant to use, and never more complicated than it needs to be.",
    },
    visual: {
      caption: "Berryfy apps for play, focus, and creativity",
      ...sharedVisualCopy,
    },
    apps: {
      eyebrow: "Featured apps",
      title: "Apps for the little moments that shape a day.",
      description:
        "Choose a quick puzzle, settle into a productive rhythm, or give your screen a new mood. Find an app that fits the moment.",
      featuredLabel: "Featured",
      imageSlotLabel: "App preview",
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
      eyebrow: `Why ${siteConfig.name}`,
      title: "Apps that feel good from the first tap.",
      description: `Every ${siteConfig.name} app starts with a real everyday moment: a short break, a task worth finishing, or a spark of creativity. The result is clear, responsive, and made to fit naturally into your day.`,
      note: "Easy to learn · Smooth to use · Made for your day",
    },
    principles: {
      eyebrow: "What you can expect",
      title: "Simple to start. Pleasant to return to.",
      items: [
        {
          title: "Easy from the first tap",
          description:
            "Focused screens and familiar interactions help you get where you want without a learning curve.",
        },
        {
          title: "Fast and dependable",
          description:
            "Apps open quickly, respond smoothly, and stay out of the way when you need them most.",
        },
        {
          title: "Made to fit you",
          description:
            "Thoughtful language and screen support make each experience comfortable in more places.",
        },
      ],
    },
    footer: {
      tagline: "Small apps. Bright moments.",
      contact: "Contact",
      rights: siteConfig.copyrightNotice,
    },
  },
  ko: {
    menuLabel: "메뉴 열기",
    closeMenuLabel: "메뉴 닫기",
    navigation: {
      apps: "앱",
      studio: `${siteConfig.name} 소개`,
      principles: "사용 경험",
    },
    hero: {
      eyebrow: "일상을 위한 앱",
      title: "작은 앱으로,\n더 빛나는 순간.",
      description: `잠깐 즐기고 싶을 때, 집중하고 싶을 때, 나만의 무언가를 만들고 싶을 때. ${siteConfig.name}는 쉽고 기분 좋은 ${siteConfig.platform} 앱을 만듭니다.`,
      primaryAction: "앱 둘러보기",
      secondaryAction: `${siteConfig.name} 알아보기`,
      benefitLabel: "사용자를 먼저 생각합니다",
      benefitValue: "처음부터 쉽고, 쓸수록 편안하며, 필요한 만큼만 담았습니다.",
    },
    visual: {
      caption: "퍼즐, 집중 타이머, 배경화면 제작을 보여주는 Berryfy 앱",
      ...sharedVisualCopy,
    },
    apps: {
      eyebrow: "주요 앱",
      title: "하루를 이루는 작은 순간을 위한 앱.",
      description:
        "가볍게 즐길 퍼즐, 집중을 돕는 타이머, 화면 분위기를 바꾸는 창작 도구까지. 지금 필요한 앱을 찾아보세요.",
      featuredLabel: "주요 앱",
      imageSlotLabel: "앱 사용 화면",
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
      eyebrow: `왜 ${siteConfig.name}인가요?`,
      title: "처음 터치하는 순간부터 기분 좋은 앱.",
      description: `잠깐 쉬어가는 시간, 꼭 끝내고 싶은 일, 문득 떠오른 창작의 순간. ${siteConfig.name}는 실제 일상에서 시작해 명확하고 빠르며 자연스럽게 스며드는 앱을 만듭니다.`,
      note: "배우기 쉽게 · 사용은 매끄럽게 · 일상에 자연스럽게",
    },
    principles: {
      eyebrow: "기대할 수 있는 경험",
      title: "시작은 쉽게, 다시 찾을 때도 기분 좋게.",
      items: [
        {
          title: "첫 터치부터 쉽게",
          description:
            "집중된 화면과 익숙한 사용 방식으로 배우는 시간 없이 바로 시작할 수 있습니다.",
        },
        {
          title: "빠르고 안정적으로",
          description:
            "필요한 순간 빠르게 열리고 매끄럽게 반응해 흐름을 방해하지 않습니다.",
        },
        {
          title: "나에게 편안하게",
          description:
            "다양한 언어와 화면을 세심하게 고려해 어디서든 편안하게 사용할 수 있습니다.",
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
    menuLabel: "メニューを開く",
    closeMenuLabel: "メニューを閉じる",
    navigation: {
      apps: "アプリ",
      studio: `${siteConfig.name}について`,
      principles: "使い心地",
    },
    hero: {
      eyebrow: "毎日のためのアプリ",
      title: "小さなアプリで、\n毎日にきらめきを。",
      description: `少し遊びたいとき、集中したいとき、自分らしく何かをつくりたいとき。${siteConfig.name}は、すぐに楽しめて長く使いたくなる${siteConfig.platform}アプリをつくります。`,
      primaryAction: "アプリを見る",
      secondaryAction: `${siteConfig.name}について`,
      benefitLabel: "使う人をいちばんに",
      benefitValue: "始めやすく、使うほど心地よく、必要以上に複雑にしません。",
    },
    visual: {
      caption: "パズル、集中タイマー、壁紙づくりのBerryfyアプリ",
      ...sharedVisualCopy,
    },
    apps: {
      eyebrow: "注目のアプリ",
      title: "一日をつくる、小さな時間のためのアプリ。",
      description:
        "気軽に遊べるパズル、集中を支えるタイマー、画面の雰囲気を変える創作ツール。今の気分に合うアプリを見つけてください。",
      featuredLabel: "注目",
      imageSlotLabel: "アプリ画面",
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
      eyebrow: `${siteConfig.name}を選ぶ理由`,
      title: "最初のタップから、心地よいアプリ。",
      description: `ひと息つく時間、やり遂げたいこと、ふと生まれた創作のひらめき。${siteConfig.name}は日常のリアルな瞬間から、わかりやすく軽快で、自然になじむアプリをつくります。`,
      note: "すぐにわかる · なめらかに使える · 毎日になじむ",
    },
    principles: {
      eyebrow: "期待できる体験",
      title: "始めやすく、また使いたくなる心地よさ。",
      items: [
        {
          title: "最初のタップから簡単",
          description:
            "わかりやすい画面と慣れた操作で、覚える時間をかけずにすぐ始められます。",
        },
        {
          title: "速く、安心して使える",
          description:
            "必要なときにすぐ開き、なめらかに反応して、あなたの流れを邪魔しません。",
        },
        {
          title: "自分にちょうどよく",
          description:
            "さまざまな言語や画面に配慮し、どこでも心地よく使える体験を届けます。",
        },
      ],
    },
    footer: {
      tagline: "小さなアプリで、毎日にきらめきを。",
      contact: "お問い合わせ",
      rights: siteConfig.copyrightNotice,
    },
  },
};
