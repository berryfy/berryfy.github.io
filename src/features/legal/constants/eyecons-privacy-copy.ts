import { businessInfo } from "@/constants/business";
import { siteConfig } from "@/constants/site";
import { eyeconsPrivacyEn } from "@/features/legal/constants/eyecons-privacy-en";
import { eyeconsPrivacyJa } from "@/features/legal/constants/eyecons-privacy-ja";
import { eyeconsPrivacy } from "@/features/legal/constants/eyecons-privacy";
import { privacyLinks } from "@/features/legal/constants/privacy-links";
import type {
  EyeconsPrivacyPolicy,
  PrivacyLocale,
  PrivacyPageCopy,
} from "@/features/legal/types/privacy-policy";

export const privacyLocales = ["ko", "en", "ja"] as const;

export const privacyLocaleDetails: Record<
  PrivacyLocale,
  { label: string; path: string }
> = {
  ko: { label: "한국어", path: siteConfig.routes.eyeconsPrivacy },
  en: { label: "English", path: siteConfig.routes.eyeconsPrivacyEn },
  ja: { label: "日本語", path: siteConfig.routes.eyeconsPrivacyJa },
};

export const eyeconsPrivacyPolicies: Record<
  PrivacyLocale,
  EyeconsPrivacyPolicy
> = {
  ko: eyeconsPrivacy,
  en: eyeconsPrivacyEn,
  ja: eyeconsPrivacyJa,
};

export const eyeconsPrivacyCopy: Record<PrivacyLocale, PrivacyPageCopy> = {
  ko: {
    languageNavigationLabel: "언어 선택",
    pageTitle: "개인정보 처리방침",
    intro: `${businessInfo.name}는 이용자의 개인정보를 필요한 범위에서만 처리하고, 처리 항목과 목적을 아래와 같이 안내합니다.`,
    labels: {
      app: "앱",
      business: "사업자",
      effectiveDate: "시행일",
      contents: "목차",
      category: "구분",
      dataItem: "처리 항목",
      purpose: "처리 목적",
      retention: "보유 기간",
      providerPolicy: "제공자 정책",
      relationship: "처리 관계",
      transferBasis: "국외 처리 근거",
      location: "처리 국가·지역",
      timingAndMethod: "시점·방법",
      refusalAndEffect: "거부 방법 및 영향",
    },
    overview: {
      title: "핵심 안내",
      items: [
        "회원가입이나 Google 로그인을 요구하지 않으며, 이름·전화번호·주소·연락처·정확한 위치를 앱에서 입력하도록 요구하지 않습니다.",
        "커뮤니티 또는 광고 보상 기능을 사용할 때 앱이 무작위로 만든 식별자가 이용자 구분에 사용됩니다. Android 기기 고유번호는 사용하지 않습니다.",
        "즐겨찾기와 대부분의 설정은 기기에만 저장되며 서버로 동기화하지 않습니다.",
        "Firebase, Supabase, Google 광고 및 YouTube 기능을 이용하는 과정에서 기기·네트워크·이용 정보가 국외에서 처리될 수 있습니다.",
      ],
    },
    purposes: {
      title: "개인정보의 처리 목적",
      intro: `${businessInfo.name}는 다음 목적에 필요한 범위에서만 개인정보를 처리합니다. 처리한 정보는 아래 목적 이외로 사용하지 않으며, 목적이 변경되는 경우 관련 법령에 따라 별도 안내 또는 동의를 진행합니다.`,
      items: [
        "익명 프로필과 커뮤니티 게시글·답글·좋아요 기능 제공",
        "사진·영상·플레이리스트 등 앱 콘텐츠 제공",
        "보상형 광고 보상 지급과 중복 지급·부정 이용 방지",
        "앱 이용 현황 분석, 알림 제공, 오류 대응과 기능 개선",
        "앱 설정 유지, 보안 및 서비스 안정성 확보",
        "개인정보 문의, 데이터 열람·정정·삭제 요청 처리",
      ],
    },
    data: {
      title: "처리하는 개인정보 항목과 보유기간",
      intro:
        "회원가입 계정은 만들지 않습니다. 커뮤니티 또는 광고 보상 기능을 이용하면 앱이 무작위로 만든 식별자와 필요한 정보가 서버로 전송됩니다. Firebase Analytics 등 외부 SDK는 앱 실행과 기능 이용 정보를 자동으로 처리할 수 있습니다.",
      serverTitle: "서버 또는 문의 채널에서 처리하는 정보",
      localIntro:
        "아래 정보는 원칙적으로 이용자의 기기에만 저장됩니다. 앱 데이터 삭제나 앱 제거를 통해 직접 삭제할 수 있습니다.",
      localTitle: "기기에만 저장하는 정보",
    },
    collection: {
      title: "개인정보의 수집 방법",
      items: [
        "앱에서 프로필·게시글·답글·좋아요·신고 기능을 이용할 때",
        "앱이 이용자 구분용 임의 식별자를 무작위로 생성할 때",
        "Firebase, Supabase, YouTube 플레이어 및 광고 SDK가 동작할 때",
        "이용자가 개인정보 문의 이메일을 보낼 때",
      ],
      permissions:
        "앱은 연락처, 문자, 통화 기록, 정확한 위치 권한을 요청하지 않습니다. Android 버전에 따라 앱이 제공하는 이미지를 기기 갤러리에 저장하기 위한 저장소 권한과 알림 권한을 요청할 수 있습니다.",
      publicContent: `커뮤니티 게시글과 댓글은 다른 이용자에게 공개됩니다. 이용자는 게시물에 자신의 개인정보나 민감한 정보를 작성하지 않아야 합니다. 게시물이 숨김 처리되기 전에 다른 이용자가 복사·저장한 정보까지 ${businessInfo.name}가 회수하거나 삭제할 수는 없습니다.`,
    },
    thirdParties: {
      title: "개인정보의 제3자 제공",
      paragraphs: [
        `${businessInfo.name}는 이용자의 개인정보를 판매하지 않으며, 원칙적으로 이용자의 동의 없이 별도의 제3자에게 제공하지 않습니다. 다만 법령에 특별한 규정이 있거나 수사기관 등이 적법한 절차에 따라 요청하는 경우에는 필요한 범위에서 제공할 수 있습니다.`,
        "서비스 운영을 위해 위탁하거나 외부 제공자가 직접 처리하는 정보는 다음 항목에 구체적으로 안내합니다.",
      ],
    },
    external: {
      title: "개인정보 처리위탁 및 국외 처리",
      intro:
        "앱은 콘텐츠·커뮤니티·분석·알림·광고·영상 재생·이메일 문의를 제공하기 위해 아래 서비스를 사용합니다. 필요한 정보는 국외로 전송되어 처리될 수 있으며, 각 제공자는 계약과 자체 개인정보 보호정책에 따라 정보를 처리합니다.",
      providerControl: `외부 제공자가 자체 시스템에서 독립적으로 처리하는 정보의 세부 범위와 보유기간에는 해당 제공자의 정책과 이용자 설정이 적용됩니다. ${businessInfo.name}는 직접 관리하거나 통제할 수 있는 범위에서만 이용자 요청을 처리할 수 있습니다.`,
      youtube: `YouTube 기능은 공개 영상 정보를 조회하고 내장 플레이어로 재생하는 데 사용됩니다. 앱은 이용자의 YouTube 계정 로그인을 요구하거나 YouTube 로그인 정보·비밀번호·개인 재생 기록을 ${businessInfo.name} 서버에 저장하지 않습니다.`,
      youtubeTerms: "YouTube 이용약관",
      googlePrivacy: "Google 개인정보처리방침",
    },
    deletion: {
      title: "개인정보의 파기",
      paragraphs: [
        "목적이 끝난 전자 파일은 복구하기 어려운 방식으로 삭제하거나 이용자와의 연결을 제거합니다. 외부 제공자의 백업에 남은 정보는 각 제공자의 백업 보존 주기에 따라 삭제됩니다.",
        "커뮤니티 게시글·댓글의 삭제 기능은 다른 이용자에게 보이지 않게 숨김 처리합니다. 부정 이용 방지, 서비스 운영, 법적 의무 또는 분쟁 대응에 필요한 정보는 해당 목적이 끝날 때까지 제한적으로 보관한 뒤 삭제하거나 이용자와의 연결을 제거할 수 있습니다. 기기에 저장된 정보는 Android 설정에서 앱 데이터를 삭제하거나 앱을 제거해 삭제할 수 있습니다. 기기 갤러리에 저장한 이미지는 이용자가 직접 삭제해야 합니다.",
      ],
    },
    rights: {
      title: "이용자와 법정대리인의 권리 및 행사 방법",
      beforeEmail:
        "이용자는 자신의 개인정보에 대해 열람, 정정, 삭제, 처리정지를 요청할 수 있습니다. 요청은 아래 이메일로 접수합니다.",
      paragraphs: [
        "앱은 회원가입 정보가 없는 익명 구조입니다. 요청 대상 확인을 위해 닉네임, 작성한 게시물 내용·시각, 이용 앱 등 필요한 최소 정보를 요청할 수 있습니다. 제공된 정보만으로 요청자와 서버 데이터를 신뢰할 수 있게 연결할 수 없거나 다른 이용자의 권리를 침해할 우려가 있으면 요청 처리가 제한될 수 있습니다. 법령에서 정한 사유가 있는 경우에도 권리 행사가 제한될 수 있습니다.",
        "앱 데이터 삭제 또는 앱 제거는 기기 내 정보만 삭제하며 서버에 남은 커뮤니티·보상 정보까지 자동으로 삭제하지 않습니다. 앱 데이터 삭제, 기기 교체 또는 재설치로 임의 식별자가 사라지면 서버 데이터와 요청자의 관계를 신뢰할 수 있게 확인하기 어려워져 요청 처리가 제한될 수 있습니다. 권리 행사는 법정대리인 또는 적법한 위임을 받은 사람을 통해서도 할 수 있습니다.",
      ],
    },
    automatic: {
      title: "자동 수집 정보와 선택 거부 방법",
      intro:
        "EYEKONS Stan 자체는 웹 쿠키를 설치하지 않습니다. 다만 내장 YouTube 플레이어, Firebase와 Google 광고 서비스는 쿠키 또는 유사 기술, 광고 ID, 앱 인스턴스·기기·이용 정보를 처리할 수 있습니다.",
      items: [
        "광고 동의가 필요한 지역에서는 Google UMP 동의 화면을 통해 선택할 수 있습니다.",
        "Android 설정의 광고 개인정보 보호 메뉴에서 광고 ID를 재설정하거나 삭제할 수 있습니다.",
        "광고 요청에 동의하지 않거나 광고가 비활성화되어도 사진·영상 등 기본 콘텐츠는 이용할 수 있으나 광고 보상 기능은 제한될 수 있습니다.",
      ],
    },
    security: {
      title: "개인정보의 안전성 확보조치",
      items: [
        "앱과 서버 간 통신에 HTTPS/TLS 암호화 적용",
        "실명 로그인 대신 앱이 무작위로 생성한 식별자를 사용해 직접 식별정보 최소화",
        "업무상 필요한 범위로 데이터 접근 권한 제한",
        "신고·숨김 처리와 보상 거래 검증을 통한 부정 이용 대응",
      ],
      paragraphs: [
        "이용자는 기기 잠금과 최신 운영체제를 사용하고, 개인정보를 공개 게시물에 올리지 않는 등 개인정보 보호에 협조해 주세요.",
        "합리적인 보호조치를 적용하더라도 인터넷 통신, 이용자 기기 또는 외부 서비스 환경의 모든 위험을 완전히 제거할 수는 없습니다. 사고가 확인되면 관련 법령에 따라 필요한 조치를 진행합니다.",
      ],
    },
    contact: {
      title: "개인정보 보호 담당 및 권익침해 구제",
      department: "사업자 및 담당부서",
      email: "이메일",
      app: "대상 앱",
      intro:
        "개인정보 침해에 대한 추가 상담이나 분쟁조정이 필요한 경우 아래 기관을 이용할 수 있습니다.",
      agencies: [
        {
          label: "개인정보침해 신고센터",
          url: privacyLinks.kisaPrivacy,
          displayUrl: "privacy.kisa.or.kr",
          phone: "국번 없이 118",
        },
        {
          label: "개인정보분쟁조정위원회",
          url: privacyLinks.privacyDispute,
          displayUrl: "www.kopico.go.kr",
          phone: "1833-6972",
        },
        {
          label: "대검찰청",
          url: privacyLinks.prosecutionService,
          displayUrl: "www.spo.go.kr",
          phone: "국번 없이 1301",
        },
        {
          label: "경찰청 사이버범죄 신고시스템",
          url: privacyLinks.policeCybercrime,
          displayUrl: "ecrm.police.go.kr",
          phone: "국번 없이 182",
        },
      ],
    },
    changes: {
      title: "개인정보 처리방침의 변경",
      text: "이 방침은 {date}부터 적용됩니다. 앱 기능이나 개인정보 처리 방식이 바뀌는 경우 시행 전에 이 페이지 또는 앱 내 알림을 통해 변경 내용을 안내합니다. 중요한 변경으로 별도 동의가 필요한 경우에는 관련 법령에 따라 동의를 받습니다.",
    },
  },
  en: {
    languageNavigationLabel: "Select language",
    pageTitle: "Privacy Policy",
    intro: `${businessInfo.name} processes personal information only to the extent necessary and explains the categories and purposes below.`,
    labels: {
      app: "App",
      business: "Operator",
      effectiveDate: "Effective date",
      contents: "Contents",
      category: "Category",
      dataItem: "Data processed",
      purpose: "Purpose",
      retention: "Retention period",
      providerPolicy: "Provider policy",
      relationship: "Processing relationship",
      transferBasis: "Basis for overseas processing",
      location: "Country or region",
      timingAndMethod: "Timing and method",
      refusalAndEffect: "How to refuse and the effect",
    },
    overview: {
      title: "Key information",
      items: [
        "The app does not require registration or Google sign-in and does not ask you to enter your name, phone number, address, contacts, or precise location.",
        "When community or ad reward features are used, a random identifier generated by the app distinguishes users. The app does not use a permanent Android hardware identifier.",
        "Favorites and most settings are stored only on the device and are not synchronized to the server.",
        "Device, network, and usage information may be processed overseas when Firebase, Supabase, Google advertising, or YouTube features are used.",
      ],
    },
    purposes: {
      title: "Purposes of processing",
      intro: `${businessInfo.name} processes personal information only as necessary for the purposes below. Information will not be used for unrelated purposes. If a purpose materially changes, notice or consent will be provided as required by applicable law.`,
      items: [
        "Provide anonymous profiles and community posts, comments, and votes",
        "Provide app content such as photos, videos, and playlists",
        "Issue rewarded-ad benefits and prevent duplicate rewards and misuse",
        "Analyze app usage, provide notifications, resolve errors, and improve features",
        "Retain app settings and maintain security and service stability",
        "Handle privacy inquiries and requests for access, correction, or deletion",
      ],
    },
    data: {
      title: "Information processed and retention periods",
      intro:
        "The app does not create a registered user account. When community or ad reward features are used, a random identifier generated by the app and the information required for those features are sent to a server. External SDKs, including Firebase Analytics, may automatically process app launch and feature usage information.",
      serverTitle: "Information processed by servers or inquiry channels",
      localIntro:
        "The information below is generally stored only on the user's device. It can be removed by clearing app data or uninstalling the app.",
      localTitle: "Information stored only on the device",
    },
    collection: {
      title: "How information is collected",
      items: [
        "When profile, post, comment, vote, or report features are used",
        "When the app randomly generates an identifier to distinguish users",
        "When Firebase, Supabase, the YouTube player, or advertising SDKs operate",
        "When a user sends a privacy inquiry by email",
      ],
      permissions:
        "The app does not request access to contacts, text messages, call logs, or precise location. Depending on the Android version, it may request storage permission to save app-provided images to the device gallery and permission to send notifications.",
      publicContent: `Community posts and comments are visible to other users. Users should not include personal or sensitive information in public content. ${businessInfo.name} cannot retrieve or delete copies saved by other users before a post is hidden.`,
    },
    thirdParties: {
      title: "Disclosure to third parties",
      paragraphs: [
        `${businessInfo.name} does not sell personal information and, as a rule, does not disclose it to separate third parties without user consent. Information may be disclosed to the extent necessary where specifically required by law or lawfully requested by an authorized investigative authority.`,
        "Information entrusted to service providers or processed directly by external providers for service operation is described below.",
      ],
    },
    external: {
      title: "Processors and overseas processing",
      intro:
        "The app uses the services below to provide content, community features, analytics, notifications, advertising, video playback, and email support. Necessary information may be transferred and processed outside the user's country. Each provider processes information under its contract and privacy policy.",
      providerControl: `The provider's own policy and user settings govern the detailed scope and retention period of information independently processed in that provider's systems. ${businessInfo.name} can handle user requests only to the extent it directly manages or controls the relevant information.`,
      youtube: `YouTube is used to retrieve and play public videos in an embedded player. The app does not require a YouTube account sign-in and does not store YouTube credentials, passwords, or personal viewing history on ${businessInfo.name} servers.`,
      youtubeTerms: "YouTube Terms of Service",
      googlePrivacy: "Google Privacy Policy",
    },
    deletion: {
      title: "Deletion of information",
      paragraphs: [
        "Electronic information is deleted in a manner designed to make recovery difficult or is disassociated from the user when its purpose is fulfilled. Information remaining in a service provider's backups is removed according to that provider's backup cycle.",
        "The delete function for community posts and comments hides them from other users. Information needed for misuse prevention, service operation, legal obligations, or dispute response may be retained on a limited basis until the relevant purpose is fulfilled and then deleted or disassociated. Device data can be removed by clearing app data in Android settings or uninstalling the app. Images saved to the device gallery must be deleted by the user.",
      ],
    },
    rights: {
      title: "User and legal representative rights",
      beforeEmail:
        "Users may request access to, correction of, deletion of, or suspension of processing of their personal information. Requests are accepted by email:",
      paragraphs: [
        "The app is anonymous and has no registration information. To identify the requested data, we may ask for the minimum information needed, such as a nickname, post content and time, or the app used. A request may be limited if the information supplied cannot reliably link the requester to server data, if it could affect another person's rights, or where applicable law permits a limitation.",
        "Clearing app data or uninstalling the app removes only device data and does not automatically delete community or reward information stored on the server. If the random identifier is lost after app data is cleared, the device is replaced, or the app is reinstalled, it may no longer be possible to reliably verify the relationship between the requester and server data, and the request may be limited. Rights may also be exercised through a legal representative or a properly authorized agent.",
      ],
    },
    automatic: {
      title: "Automatic collection and available choices",
      intro:
        "EYEKONS Stan does not itself install web cookies. The embedded YouTube player, Firebase, and Google advertising services may process cookies or similar technologies, advertising IDs, and app instance, device, and usage information.",
      items: [
        "Where advertising consent is required, choices can be made through the Google UMP consent screen.",
        "The advertising ID can be reset or deleted in Android advertising privacy settings.",
        "Core photo and video content remains available if an advertising request is not accepted or advertising is disabled, but ad reward features may be limited.",
      ],
    },
    security: {
      title: "Security measures",
      items: [
        "HTTPS/TLS encryption for communications between the app and servers",
        "Minimization of direct identifiers by using a random app-generated identifier instead of a real-name login",
        "Limiting access to information to the scope necessary for operations",
        "Reports, content hiding, and reward transaction validation to address misuse",
      ],
      paragraphs: [
        "Users should help protect their information by using a device lock and current operating system and by not posting personal information publicly.",
        "Reasonable safeguards cannot eliminate every risk arising from internet communications, user devices, or external service environments. If an incident is confirmed, the measures required by applicable law will be taken.",
      ],
    },
    contact: {
      title: "Privacy contact and remedies",
      department: "Operator and responsible team",
      email: "Email",
      app: "Covered app",
      intro:
        "For additional consultation or dispute resolution regarding a privacy violation in Korea, the following organizations are available:",
      agencies: [
        {
          label: "Privacy Infringement Report Center",
          url: privacyLinks.kisaPrivacy,
          displayUrl: "privacy.kisa.or.kr",
          phone: "118 within Korea",
        },
        {
          label: "Personal Information Dispute Mediation Committee",
          url: privacyLinks.privacyDispute,
          displayUrl: "www.kopico.go.kr",
          phone: "+82-1833-6972",
        },
        {
          label: "Supreme Prosecutors' Office",
          url: privacyLinks.prosecutionService,
          displayUrl: "www.spo.go.kr",
          phone: "1301 within Korea",
        },
        {
          label: "Korean National Police Cybercrime Reporting System",
          url: privacyLinks.policeCybercrime,
          displayUrl: "ecrm.police.go.kr",
          phone: "182 within Korea",
        },
      ],
    },
    changes: {
      title: "Changes to this policy",
      text: "This policy applies from {date}. If app features or information-processing practices change, notice will be provided on this page or in the app before the change takes effect. Separate consent will be obtained where required by applicable law.",
    },
  },
  ja: {
    languageNavigationLabel: "言語を選択",
    pageTitle: "プライバシーポリシー",
    intro: `${businessInfo.name}は、必要な範囲でのみ個人情報を取り扱い、処理項目と目的を以下のとおりお知らせします。`,
    labels: {
      app: "アプリ",
      business: "事業者",
      effectiveDate: "施行日",
      contents: "目次",
      category: "区分",
      dataItem: "処理項目",
      purpose: "利用目的",
      retention: "保存期間",
      providerPolicy: "提供者の方針",
      relationship: "処理関係",
      transferBasis: "国外処理の根拠",
      location: "処理国・地域",
      timingAndMethod: "時期・方法",
      refusalAndEffect: "拒否方法と影響",
    },
    overview: {
      title: "重要事項",
      items: [
        "会員登録やGoogleログインは必要ありません。また、氏名、電話番号、住所、連絡先、正確な位置情報の入力を求めません。",
        "コミュニティまたは広告報酬機能を利用する際、アプリが無作為に生成した識別子を利用者の区別に使用します。Android端末固有の恒久的な識別子は使用しません。",
        "お気に入りと大部分の設定は端末内にのみ保存され、サーバーには同期されません。",
        "Firebase、Supabase、Google広告、YouTube機能の利用時に、端末・ネットワーク・利用情報が国外で処理される場合があります。",
      ],
    },
    purposes: {
      title: "個人情報の利用目的",
      intro: `${businessInfo.name}は、以下の目的に必要な範囲でのみ個人情報を取り扱います。以下と無関係な目的には使用しません。目的が重要な点で変更される場合は、適用法令に従って通知または同意取得を行います。`,
      items: [
        "匿名プロフィール、コミュニティ投稿・コメント・投票機能の提供",
        "写真・動画・プレイリストなどのアプリコンテンツの提供",
        "リワード広告の報酬付与、重複付与・不正利用の防止",
        "アプリ利用状況の分析、通知、エラー対応、機能改善",
        "アプリ設定の維持、セキュリティおよびサービス安定性の確保",
        "プライバシーに関するお問い合わせ、閲覧・訂正・削除請求への対応",
      ],
    },
    data: {
      title: "処理する個人情報と保存期間",
      intro:
        "登録制の利用者アカウントは作成しません。コミュニティまたは広告報酬機能を利用すると、アプリが無作為に生成した識別子と、機能提供に必要な情報がサーバーへ送信されます。Firebase Analyticsなどの外部SDKは、アプリ起動や機能利用情報を自動的に処理する場合があります。",
      serverTitle: "サーバーまたはお問い合わせ窓口で処理する情報",
      localIntro:
        "以下の情報は原則として利用者の端末内にのみ保存されます。アプリデータの消去またはアプリのアンインストールにより削除できます。",
      localTitle: "端末内にのみ保存する情報",
    },
    collection: {
      title: "個人情報の収集方法",
      items: [
        "プロフィール、投稿、コメント、投票、通報機能を利用するとき",
        "アプリが利用者区別用の任意識別子を無作為に生成するとき",
        "Firebase、Supabase、YouTubeプレーヤー、広告SDKが動作するとき",
        "利用者がプライバシーに関するメールを送信するとき",
      ],
      permissions:
        "アプリは、連絡先、SMS、通話履歴、正確な位置情報へのアクセス権限を要求しません。Androidのバージョンにより、アプリ内画像を端末ギャラリーに保存するためのストレージ権限と、通知権限を要求する場合があります。",
      publicContent: `コミュニティの投稿とコメントは他の利用者に公開されます。利用者は、公開コンテンツに自分の個人情報や機微情報を記載しないでください。投稿が非表示になる前に他の利用者が複製・保存した情報まで、${businessInfo.name}が回収または削除することはできません。`,
    },
    thirdParties: {
      title: "個人情報の第三者提供",
      paragraphs: [
        `${businessInfo.name}は個人情報を販売せず、原則として利用者の同意なく別の第三者へ提供しません。ただし、法令に特別な定めがある場合、または権限を有する捜査機関などから適法な手続により要請された場合は、必要な範囲で提供することがあります。`,
        "サービス運営のために委託する情報、または外部提供者が直接処理する情報については、以下に記載します。",
      ],
    },
    external: {
      title: "個人情報処理の委託および国外処理",
      intro:
        "アプリは、コンテンツ、コミュニティ、分析、通知、広告、動画再生、メール対応のために以下のサービスを利用します。必要な情報は国外に送信され、処理される場合があります。各提供者は契約および自らのプライバシーポリシーに従って情報を処理します。",
      providerControl: `外部提供者が自社システムで独立して処理する情報の詳細な範囲と保存期間には、当該提供者の方針と利用者設定が適用されます。${businessInfo.name}は、直接管理または統制できる範囲でのみ利用者の請求に対応できます。`,
      youtube: `YouTube機能は、公開動画情報の取得と埋め込みプレーヤーでの再生に使用します。アプリはYouTubeアカウントへのログインを要求せず、YouTubeのログイン情報、パスワード、個人の再生履歴を${businessInfo.name}のサーバーに保存しません。`,
      youtubeTerms: "YouTube利用規約",
      googlePrivacy: "Googleプライバシーポリシー",
    },
    deletion: {
      title: "個人情報の削除",
      paragraphs: [
        "目的を終えた電子情報は、復元が困難な方法で削除するか、利用者との関連付けを解除します。外部提供者のバックアップに残る情報は、各提供者のバックアップ周期に従って削除されます。",
        "コミュニティの投稿・コメントの削除機能は、他の利用者から見えない状態にします。不正利用の防止、サービス運営、法的義務または紛争対応に必要な情報は、目的が終了するまで限定的に保存し、その後削除または利用者との関連付けを解除する場合があります。端末内の情報は、Android設定からアプリデータを消去するか、アプリをアンインストールして削除できます。端末ギャラリーに保存した画像は利用者自身で削除する必要があります。",
      ],
    },
    rights: {
      title: "利用者および法定代理人の権利",
      beforeEmail:
        "利用者は、自分の個人情報について閲覧、訂正、削除、処理停止を請求できます。請求は以下のメールで受け付けます。",
      paragraphs: [
        "アプリは会員登録情報を持たない匿名構造です。対象データを特定するため、ニックネーム、投稿内容・日時、利用アプリなど、必要最小限の情報を求める場合があります。提供された情報だけでは請求者とサーバーデータを信頼できる方法で結び付けられない場合、他の利用者の権利を侵害するおそれがある場合、または適用法令で認められる場合は、請求への対応が制限されることがあります。",
        "アプリデータの消去またはアプリのアンインストールで削除されるのは端末内の情報のみであり、サーバーに残るコミュニティ・報酬情報は自動的には削除されません。アプリデータの消去、端末変更、再インストールにより任意識別子が失われると、請求者とサーバーデータの関係を信頼できる方法で確認できず、請求への対応が制限される場合があります。法定代理人または適法に委任された代理人を通じて権利を行使することもできます。",
      ],
    },
    automatic: {
      title: "自動収集される情報と選択方法",
      intro:
        "EYEKONS Stan自体はウェブCookieを設置しません。ただし、埋め込みYouTubeプレーヤー、Firebase、Google広告サービスは、Cookieまたは類似技術、広告ID、アプリインスタンス・端末・利用情報を処理する場合があります。",
      items: [
        "広告同意が必要な地域では、Google UMPの同意画面から選択できます。",
        "Androidの広告プライバシー設定から広告IDをリセットまたは削除できます。",
        "広告リクエストに同意しない場合や広告が無効な場合でも、写真・動画などの基本コンテンツは利用できますが、広告報酬機能が制限される場合があります。",
      ],
    },
    security: {
      title: "安全管理措置",
      items: [
        "アプリとサーバー間の通信へのHTTPS/TLS暗号化の適用",
        "実名ログインの代わりにアプリが無作為に生成した識別子を使用し、直接識別情報を最小化",
        "業務上必要な範囲へのデータアクセス権限の制限",
        "通報、非表示処理、報酬取引の検証による不正利用への対応",
      ],
      paragraphs: [
        "利用者は、端末ロックと最新のOSを使用し、公開投稿に個人情報を記載しないなど、個人情報の保護にご協力ください。",
        "合理的な保護措置を講じても、インターネット通信、利用者端末、外部サービス環境に伴うすべての危険を完全に排除することはできません。事故が確認された場合は、適用法令に従って必要な措置を講じます。",
      ],
    },
    contact: {
      title: "個人情報保護窓口および救済手段",
      department: "事業者・担当部署",
      email: "メール",
      app: "対象アプリ",
      intro:
        "韓国における個人情報侵害について追加の相談または紛争調整が必要な場合は、以下の機関を利用できます。",
      agencies: [
        {
          label: "個人情報侵害申告センター",
          url: privacyLinks.kisaPrivacy,
          displayUrl: "privacy.kisa.or.kr",
          phone: "韓国内 118",
        },
        {
          label: "個人情報紛争調整委員会",
          url: privacyLinks.privacyDispute,
          displayUrl: "www.kopico.go.kr",
          phone: "+82-1833-6972",
        },
        {
          label: "韓国大検察庁",
          url: privacyLinks.prosecutionService,
          displayUrl: "www.spo.go.kr",
          phone: "韓国内 1301",
        },
        {
          label: "韓国警察庁サイバー犯罪申告システム",
          url: privacyLinks.policeCybercrime,
          displayUrl: "ecrm.police.go.kr",
          phone: "韓国内 182",
        },
      ],
    },
    changes: {
      title: "プライバシーポリシーの変更",
      text: "本方針は{date}から適用されます。アプリ機能または個人情報の処理方法を変更する場合は、変更前に本ページまたはアプリ内のお知らせで通知します。適用法令により別途同意が必要な場合は、同意を取得します。",
    },
  },
};

export const privacyLanguageAlternates = {
  ko: siteConfig.routes.eyeconsPrivacy,
  en: siteConfig.routes.eyeconsPrivacyEn,
  ja: siteConfig.routes.eyeconsPrivacyJa,
  "x-default": siteConfig.routes.eyeconsPrivacy,
} as const;
