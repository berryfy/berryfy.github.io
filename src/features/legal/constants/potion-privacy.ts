import { businessInfo } from "@/constants/business";
import { privacyLinks } from "@/features/legal/constants/privacy-links";
import { potionPrivacyPageCopy } from "@/features/legal/constants/potion-privacy-copy";
import type {
  AppPrivacyPolicy,
  PrivacyLocale,
} from "@/features/legal/types/privacy-policy";

const facts = {
  en: {
    date: "November 2, 2026",
    local: [
      [
        "Game progress",
        "Game day, orders, puzzle layout, moves and reward status; gold, skills and equipment",
        "Resume play and manage progress",
      ],
      [
        "Collections and preferences",
        "Affection, memories, recipes, costumes, language, sound and music preferences",
        "Collections, story progress and preferences",
      ],
      [
        "Ad reward bookkeeping",
        "Placement-specific daily limits, reward transaction state and a random local reward-run identifier",
        "Apply rewards once and enforce usage limits",
      ],
    ],
    localRetention:
      "Until you reset the game, clear app data or uninstall the app. These saves are not uploaded to a berryfy game server.",
    support: [
      "Email enquiries",
      "Sender email address, message, optional attachments and reply history",
      "Respond to your enquiry",
      "Until no longer needed for the enquiry, unless a legal obligation or an ongoing dispute requires retention.",
    ],
    ads: {
      service: "Google AdMob and User Messaging Platform (UMP)",
      relationship: "Third-party advertising and consent services",
      transferBasis:
        "Processing necessary for the requested advertising services, with consent where required by applicable law. Consent requirements and available choices depend on your region.",
      data: "IP address (which may indicate approximate location), advertising ID, app set ID and other applicable identifiers; device/app details, ad interactions, diagnostics and consent choices",
      purpose:
        "Advertising, ad performance measurement, fraud prevention and consent management",
      location:
        "United States and other countries where Google and its service providers operate",
      timingAndMethod:
        "When consent or advertising services run, data is sent directly by their SDKs over the network",
      retention:
        "According to Google’s service settings and privacy policies; berryfy does not set a separate retention period for Google-held data",
      refusalAndEffect:
        "Use available in-app consent controls and Android ad privacy settings. You can skip rewarded ads; the corresponding optional reward is then unavailable. Changing identifiers does not disable all processing.",
    },
    mail: {
      service: "Gmail (only if you email support)",
      relationship: "Email service used to receive and reply to enquiries",
      transferBasis:
        "Processing needed to respond to an enquiry you choose to send, with consent where required by applicable law",
      data: "Email address, message, any attachments you choose to send and reply history",
      purpose: "Receive, investigate and answer support and privacy enquiries",
      location:
        "United States and other countries where Google and its service providers operate",
      timingAndMethod:
        "When you send an email, through email networks and Google’s email service",
      retention:
        "Deleted when no longer needed for the enquiry, except where a legal obligation or an ongoing dispute requires retention; provider backups follow Google’s policies",
      refusalAndEffect:
        "You do not have to send an email. Without information needed to identify the enquiry, we may be unable to answer or process the request.",
    },
  },
  ko: {
    date: "2026년 11월 2일",
    local: [
      [
        "게임 진행",
        "게임 일차, 주문, 퍼즐 배치·이동·보상 상태, 골드, 능력치와 설비",
        "이어 하기와 게임 진행 관리",
      ],
      [
        "수집품과 설정",
        "호감도, 추억, 포션 도감, 의상, 언어, 효과음·음악 설정",
        "수집·이야기 진행과 이용 환경 설정",
      ],
      [
        "광고 보상 처리 기록",
        "위치별 일일 이용 한도, 보상 지급 상태, 무작위로 만든 기기 내 보상 실행 식별자",
        "보상 중복 지급 방지와 이용 한도 관리",
      ],
    ],
    localRetention:
      "게임 초기화, 앱 데이터 삭제 또는 앱 삭제 시까지. 이 저장 파일은 berryfy의 게임 서버로 전송하지 않습니다.",
    support: [
      "이메일 문의",
      "발신 이메일 주소, 문의 내용, 이용자가 보낸 첨부파일, 답변 기록",
      "문의 확인과 답변",
      "문의 처리에 더 이상 필요하지 않으면 삭제합니다. 법령상 의무나 진행 중인 분쟁에 필요한 정보는 해당 목적에 필요한 기간 보관합니다.",
    ],
    ads: {
      service: "Google AdMob · User Messaging Platform(UMP)",
      relationship: "외부 광고·동의 관리 서비스",
      transferBasis:
        "요청한 광고 서비스 제공에 필요한 처리와 관련 법령에 따라 필요한 동의. 지역에 따라 동의 요건과 선택지가 다를 수 있습니다.",
      data: "IP 주소와 그로부터 추정되는 대략적 위치, 광고 ID, 앱 세트 ID 등 적용 가능한 식별자, 기기·앱 정보, 광고 이용 기록, 진단 정보, 동의 선택",
      purpose: "광고 제공, 광고 성과 측정, 부정 이용 방지, 동의 관리",
      location: "미국 및 Google과 처리업체가 서비스를 제공하는 국가",
      timingAndMethod:
        "동의 관리 또는 광고 기능이 실행될 때 해당 SDK가 네트워크로 직접 전송",
      retention:
        "Google의 서비스 설정과 개인정보처리방침에 따른 기간. Google이 가진 정보에 대해 berryfy가 별도 보관 기간을 정하지는 않습니다.",
      refusalAndEffect:
        "제공되는 앱 내 동의 옵션과 Android 광고 개인정보 설정을 이용할 수 있습니다. 보상형 광고를 보지 않으면 해당 선택형 보상은 제공되지 않습니다. 식별자 변경으로 모든 처리가 중단되지는 않습니다.",
    },
    mail: {
      service: "Gmail(문의 이메일을 보낸 경우)",
      relationship: "문의 수신·답변을 위한 이메일 서비스",
      transferBasis:
        "이용자가 보낸 문의에 답변하기 위해 필요한 처리와 관련 법령에 따라 필요한 동의",
      data: "이메일 주소, 문의 내용, 이용자가 보낸 첨부파일, 답변 기록",
      purpose: "이용 문의와 개인정보 요청 접수·확인·답변",
      location: "미국 및 Google과 처리업체가 서비스를 제공하는 국가",
      timingAndMethod:
        "문의 이메일을 보낼 때 이메일 통신망과 Google 이메일 서비스를 통해 처리",
      retention:
        "문의 처리에 더 이상 필요하지 않으면 삭제하되 법령상 의무나 진행 중인 분쟁에 필요한 경우 해당 기간 보관. 제공자 백업은 Google 정책을 따릅니다.",
      refusalAndEffect:
        "이메일 문의는 선택 사항입니다. 문의 확인에 필요한 정보가 없으면 답변이나 요청 처리가 어려울 수 있습니다.",
    },
  },
  ja: {
    date: "2026年11月2日",
    local: [
      [
        "ゲームの進行",
        "ゲームの日数、注文、パズル配置・手数・報酬の状態、ゴールド、能力、設備",
        "続きからのプレイと進行の管理",
      ],
      [
        "コレクションと設定",
        "好感度、思い出、ポーション図鑑、衣装、言語、効果音・音楽の設定",
        "コレクション、物語の進行、利用環境の設定",
      ],
      [
        "広告報酬の処理記録",
        "表示箇所ごとの一日の利用上限、報酬の付与状態、端末内で無作為に作成する報酬実行識別子",
        "報酬の重複付与の防止と利用上限の管理",
      ],
    ],
    localRetention:
      "ゲームの初期化、アプリデータの消去、またはアプリの削除まで。これらのセーブデータをberryfyのゲームサーバーに送信することはありません。",
    support: [
      "メールのお問い合わせ",
      "送信元メールアドレス、お問い合わせ内容、利用者が送った添付ファイル、返信記録",
      "お問い合わせの確認と回答",
      "対応に不要となった時点で削除します。法的義務や継続中の紛争への対応に必要な場合は、その目的に必要な期間保管します。",
    ],
    ads: {
      service: "Google AdMob・User Messaging Platform（UMP）",
      relationship: "外部の広告・同意管理サービス",
      transferBasis:
        "利用する広告サービスの提供に必要な処理、および適用法令に基づき必要となる同意。地域により同意の要件や選択肢は異なります。",
      data: "IPアドレスとそれに基づくおおよその位置、広告ID、アプリセットIDなど該当する識別子、端末・アプリ情報、広告の利用記録、診断情報、同意の選択内容",
      purpose: "広告配信、広告効果の測定、不正利用の防止、同意管理",
      location: "米国、およびGoogleとその処理業者がサービスを提供する国",
      timingAndMethod:
        "同意管理や広告機能が動作する際、各SDKがネットワークを通じて直接送信",
      retention:
        "Googleのサービス設定とプライバシーポリシーに従います。Googleが保有する情報についてberryfyが別途保管期間を定めるものではありません。",
      refusalAndEffect:
        "提供されるアプリ内の同意設定やAndroidの広告プライバシー設定を利用できます。リワード広告を見ない場合、その任意の報酬は受け取れません。識別子の変更により、すべての処理が停止するわけではありません。",
    },
    mail: {
      service: "Gmail（お問い合わせメールを送った場合）",
      relationship: "お問い合わせの受信と返信のためのメールサービス",
      transferBasis:
        "利用者が送ったお問い合わせに回答するために必要な処理、および適用法令に基づき必要となる同意",
      data: "メールアドレス、お問い合わせ内容、利用者が送った添付ファイル、返信記録",
      purpose: "サポートと個人情報に関するお問い合わせの受付、確認、回答",
      location: "米国、およびGoogleとその処理業者がサービスを提供する国",
      timingAndMethod:
        "メールを送信した際、メール通信網とGoogleのメールサービスを通じて処理",
      retention:
        "対応に不要となった時点で削除します。ただし、法的義務や継続中の紛争への対応に必要な場合は必要な期間保管します。提供者のバックアップはGoogleの方針に従います。",
      refusalAndEffect:
        "メールの送信は任意です。お問い合わせの確認に必要な情報がない場合、回答やご要望への対応が難しいことがあります。",
    },
  },
} as const;
const sections = [
  "overview",
  "purpose",
  "data",
  "collection",
  "third-parties",
  "external-services",
  "deletion",
  "rights",
  "automatic",
  "security",
  "contact",
  "changes",
] as const;

const makePolicy = (locale: PrivacyLocale): AppPrivacyPolicy => {
  const fact = facts[locale];
  const copy = potionPrivacyPageCopy[locale];
  const titles = [
    copy.overview.title,
    copy.purposes.title,
    copy.data.title,
    copy.collection.title,
    copy.thirdParties.title,
    copy.external.title,
    copy.deletion.title,
    copy.rights.title,
    copy.automatic.title,
    copy.security.title,
    copy.contact.title,
    copy.changes.title,
  ];
  return {
    appName: "Lulu’s Potion Shop",
    businessName: businessInfo.name,
    contactEmail: businessInfo.contactEmail,
    effectiveDate: fact.date,
    navigation: sections.map((id, index) => ({ id, label: titles[index] })),
    serverData: [
      {
        category: fact.support[0],
        data: fact.support[1],
        purpose: fact.support[2],
        retention: fact.support[3],
      },
    ],
    localData: fact.local.map(([category, data, purpose]) => ({
      category,
      data,
      purpose,
      retention: fact.localRetention,
    })),
    externalServices: [
      {
        provider: "Google LLC",
        ...fact.ads,
        policyUrl: privacyLinks.googleAdsPrivacy,
      },
      {
        provider: "Google LLC",
        ...fact.mail,
        policyUrl: privacyLinks.googlePrivacy,
      },
    ],
  };
};
export const potionPrivacyPolicies: Record<PrivacyLocale, AppPrivacyPolicy> = {
  en: makePolicy("en"),
  ko: makePolicy("ko"),
  ja: makePolicy("ja"),
};
