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
  ko: { label: "한국어", path: siteConfig.routes.eyeconsPrivacyKo },
  en: { label: "English", path: siteConfig.routes.eyeconsPrivacy },
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
        "회원가입이나 Google 로그인을 요구하지 않습니다. 커뮤니티·광고 보상에는 앱이 만든 임의 식별자를 사용하며 Android 기기 고유번호는 사용하지 않습니다.",
        "즐겨찾기와 대부분의 설정은 기기에만 저장되며 서버로 동기화하지 않습니다.",
        "Supabase와 Google 서비스를 이용하는 과정에서 필요한 기기·네트워크·이용 정보가 국외에서 처리될 수 있습니다.",
      ],
    },
    purposes: {
      title: "개인정보의 처리 목적",
      intro: `${businessInfo.name}는 다음 목적에 필요한 범위에서만 개인정보를 처리합니다. 목적이 변경되면 관련 법령에 따라 안내하거나 동의를 받습니다.`,
      items: [
        "익명 커뮤니티와 사진·영상·플레이리스트 등 앱 콘텐츠 제공",
        "보상형 광고 보상 지급과 중복 지급·부정 이용 방지",
        "이용 분석, 알림, 오류 대응, 기능 개선과 서비스 안정성 확보",
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
        "커뮤니티·광고 보상 기능을 이용하거나 앱이 임의 식별자를 만들 때",
        "Supabase, Firebase, YouTube 플레이어 및 광고 SDK가 동작할 때",
        "이용자가 개인정보 문의 이메일을 보낼 때",
      ],
      permissions:
        "앱은 연락처, 문자, 통화 기록, 정확한 위치 권한을 요청하지 않습니다. Android 버전에 따라 앱이 제공하는 이미지를 기기 갤러리에 저장하기 위한 저장소 권한과 알림 권한을 요청할 수 있습니다.",
      publicContent: `커뮤니티 게시글과 댓글은 다른 이용자에게 공개됩니다. 이용자는 게시물에 자신의 개인정보나 민감한 정보를 작성하지 않아야 합니다. 게시물이 숨김 처리되기 전에 다른 이용자가 복사·저장한 정보까지 ${businessInfo.name}가 회수하거나 삭제할 수는 없습니다.`,
    },
    thirdParties: {
      title: "개인정보의 제3자 제공",
      paragraphs: [
        `${businessInfo.name}는 개인정보를 판매하지 않으며, 동의 없이 별도의 제3자에게 제공하지 않습니다. 다만 법령에 근거한 적법한 요청에는 필요한 범위에서 제공할 수 있습니다. 서비스 제공자의 처리는 아래에 안내합니다.`,
      ],
    },
    external: {
      title: "개인정보 처리위탁 및 국외 처리",
      intro:
        "앱은 아래 서비스를 사용하며, 필요한 정보가 국외에서 처리될 수 있습니다.",
      providerControl: `외부 제공자가 독립적으로 처리하는 정보에는 해당 제공자의 정책과 설정이 적용됩니다. ${businessInfo.name}는 직접 통제할 수 있는 범위에서 요청을 처리합니다.`,
      youtube: `YouTube는 공개 영상 재생에만 사용합니다. YouTube 로그인 정보나 개인 재생 기록은 ${businessInfo.name} 서버에 저장하지 않습니다.`,
      youtubeTerms: "YouTube 이용약관",
      googlePrivacy: "Google 개인정보처리방침",
    },
    deletion: {
      title: "개인정보의 파기",
      paragraphs: [
        "목적이 끝난 정보는 삭제하거나 이용자와의 연결을 제거합니다. 게시글·댓글은 삭제 시 숨김 처리되며, 부정 이용 방지·법적 의무·분쟁 대응에 필요한 정보는 목적이 끝날 때까지 제한적으로 보관할 수 있습니다. 외부 백업은 제공자의 주기에 따라 삭제됩니다.",
        "기기 정보는 앱 데이터 삭제 또는 앱 제거로 삭제할 수 있습니다. 갤러리에 저장한 이미지는 이용자가 직접 삭제해야 합니다.",
      ],
    },
    rights: {
      title: "이용자와 법정대리인의 권리 및 행사 방법",
      beforeEmail:
        "이용자는 자신의 개인정보에 대해 열람, 정정, 삭제, 처리정지를 요청할 수 있습니다. 요청은 아래 이메일로 접수합니다.",
      paragraphs: [
        "익명 구조이므로 대상 확인에 필요한 최소 정보를 요청할 수 있습니다. 요청자와 서버 데이터를 확인할 수 없거나 타인의 권리를 침해할 우려가 있으면 법령에 따라 처리가 제한될 수 있습니다.",
        "앱 데이터 삭제·앱 제거는 서버 정보를 자동 삭제하지 않습니다. 임의 식별자를 잃으면 본인과 서버 데이터의 관계를 확인하기 어려워 요청이 제한될 수 있습니다. 법정대리인이나 적법한 대리인도 권리를 행사할 수 있습니다.",
      ],
    },
    automatic: {
      title: "자동 수집 정보와 선택 거부 방법",
      intro:
        "EYEKONS Stan 자체는 웹 쿠키를 설치하지 않습니다. 다만 내장 YouTube 플레이어, Firebase와 Google 광고 서비스는 쿠키 또는 유사 기술, 광고 ID, 앱 인스턴스·기기·이용 정보를 처리할 수 있습니다.",
      items: [
        "Google UMP 화면과 Android 광고 개인정보 보호 설정에서 광고 선택을 변경할 수 있습니다.",
        "광고를 거부해도 기본 콘텐츠는 이용할 수 있으나 광고 보상 기능은 제한될 수 있습니다.",
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
        "합리적인 보호조치로 모든 위험을 없앨 수는 없습니다. 이용자는 기기 잠금을 사용하고 공개 게시물에 개인정보를 올리지 않아야 합니다. 사고가 확인되면 법령에 따라 조치합니다.",
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
        "The app does not require registration or Google sign-in. Community and ad reward features use an app-generated random identifier, not a permanent Android hardware identifier.",
        "Favorites and most settings are stored only on the device and are not synchronized to the server.",
        "Necessary device, network, and usage information may be processed overseas through Supabase and Google services.",
      ],
    },
    purposes: {
      title: "Purposes of processing",
      intro: `${businessInfo.name} processes personal information only as necessary for the purposes below. Material changes will be notified or submitted for consent as required by law.`,
      items: [
        "Provide the anonymous community and app content such as photos, videos, and playlists",
        "Issue rewarded-ad benefits and prevent duplicate rewards and misuse",
        "Analyze usage, provide notifications, resolve errors, improve features, and maintain service stability",
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
        "When community or ad reward features are used or the app creates a random identifier",
        "When Supabase, Firebase, the YouTube player, or advertising SDKs operate",
        "When a user sends a privacy inquiry by email",
      ],
      permissions:
        "The app does not request access to contacts, text messages, call logs, or precise location. Depending on the Android version, it may request storage permission to save app-provided images to the device gallery and permission to send notifications.",
      publicContent: `Community posts and comments are visible to other users. Users should not include personal or sensitive information in public content. ${businessInfo.name} cannot retrieve or delete copies saved by other users before a post is hidden.`,
    },
    thirdParties: {
      title: "Disclosure to third parties",
      paragraphs: [
        `${businessInfo.name} does not sell personal information or disclose it to separate third parties without consent. It may disclose only what is necessary in response to a lawful request. Service-provider processing is described below.`,
      ],
    },
    external: {
      title: "Processors and overseas processing",
      intro:
        "The app uses the services below, and necessary information may be processed overseas.",
      providerControl: `Information independently processed by a provider is governed by that provider's policy and settings. ${businessInfo.name} handles requests only within its direct control.`,
      youtube: `YouTube is used only to play public videos. YouTube credentials and personal viewing history are not stored on ${businessInfo.name} servers.`,
      youtubeTerms: "YouTube Terms of Service",
      googlePrivacy: "Google Privacy Policy",
    },
    deletion: {
      title: "Deletion of information",
      paragraphs: [
        "Information is deleted or disassociated when its purpose ends. Deleted posts and comments are hidden, while information needed for misuse prevention, legal obligations, or disputes may be retained until that purpose ends. Provider backups follow the provider's deletion cycle.",
        "Device data can be removed by clearing app data or uninstalling the app. Gallery images must be deleted by the user.",
      ],
    },
    rights: {
      title: "User and legal representative rights",
      beforeEmail:
        "Users may request access to, correction of, deletion of, or suspension of processing of their personal information. Requests are accepted by email:",
      paragraphs: [
        "Because the app is anonymous, we may request the minimum information needed to identify the data. A request may be limited where the requester cannot be linked to server data, another person's rights may be affected, or the law allows it.",
        "Clearing app data or uninstalling does not automatically delete server data. Losing the random identifier may make verification impossible and limit a request. A legal representative or authorized agent may also exercise these rights.",
      ],
    },
    automatic: {
      title: "Automatic collection and available choices",
      intro:
        "EYEKONS Stan does not itself install web cookies. The embedded YouTube player, Firebase, and Google advertising services may process cookies or similar technologies, advertising IDs, and app instance, device, and usage information.",
      items: [
        "Advertising choices can be changed through the Google UMP screen and Android advertising privacy settings.",
        "Core content remains available when advertising is refused, but ad reward features may be limited.",
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
        "Reasonable safeguards cannot eliminate every risk. Users should lock their device and avoid posting personal information publicly. Confirmed incidents will be handled as required by law.",
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
        "会員登録やGoogleログインは不要です。コミュニティ・広告報酬にはアプリ生成の任意識別子を使用し、Android端末固有の恒久的な識別子は使用しません。",
        "お気に入りと大部分の設定は端末内にのみ保存され、サーバーには同期されません。",
        "SupabaseおよびGoogleサービスの利用時に、必要な端末・ネットワーク・利用情報が国外で処理される場合があります。",
      ],
    },
    purposes: {
      title: "個人情報の利用目的",
      intro: `${businessInfo.name}は、以下の目的に必要な範囲でのみ個人情報を取り扱います。目的を変更する場合は、法令に従って通知または同意取得を行います。`,
      items: [
        "匿名コミュニティおよび写真・動画・プレイリストなどのコンテンツ提供",
        "リワード広告の報酬付与、重複付与・不正利用の防止",
        "利用分析、通知、エラー対応、機能改善、サービス安定性の確保",
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
        "コミュニティ・広告報酬機能の利用時、またはアプリが任意識別子を生成するとき",
        "Supabase、Firebase、YouTubeプレーヤー、広告SDKが動作するとき",
        "利用者がプライバシーに関するメールを送信するとき",
      ],
      permissions:
        "アプリは、連絡先、SMS、通話履歴、正確な位置情報へのアクセス権限を要求しません。Androidのバージョンにより、アプリ内画像を端末ギャラリーに保存するためのストレージ権限と、通知権限を要求する場合があります。",
      publicContent: `コミュニティの投稿とコメントは他の利用者に公開されます。利用者は、公開コンテンツに自分の個人情報や機微情報を記載しないでください。投稿が非表示になる前に他の利用者が複製・保存した情報まで、${businessInfo.name}が回収または削除することはできません。`,
    },
    thirdParties: {
      title: "個人情報の第三者提供",
      paragraphs: [
        `${businessInfo.name}は個人情報を販売せず、同意なく別の第三者へ提供しません。ただし、法令に基づく適法な要請には必要な範囲で提供する場合があります。サービス提供者による処理は以下に記載します。`,
      ],
    },
    external: {
      title: "個人情報処理の委託および国外処理",
      intro:
        "アプリは以下のサービスを使用し、必要な情報が国外で処理される場合があります。",
      providerControl: `外部提供者が独立して処理する情報には、その提供者の方針と設定が適用されます。${businessInfo.name}は直接管理できる範囲で請求に対応します。`,
      youtube: `YouTubeは公開動画の再生にのみ使用します。ログイン情報や個人の再生履歴は${businessInfo.name}のサーバーに保存しません。`,
      youtubeTerms: "YouTube利用規約",
      googlePrivacy: "Googleプライバシーポリシー",
    },
    deletion: {
      title: "個人情報の削除",
      paragraphs: [
        "目的を終えた情報は削除または関連付けを解除します。削除した投稿・コメントは非表示となり、不正利用防止・法的義務・紛争対応に必要な情報は目的終了まで保存する場合があります。外部バックアップは提供者の周期に従って削除されます。",
        "端末内の情報はアプリデータの消去またはアンインストールで削除できます。ギャラリーの画像は利用者が削除する必要があります。",
      ],
    },
    rights: {
      title: "利用者および法定代理人の権利",
      beforeEmail:
        "利用者は、自分の個人情報について閲覧、訂正、削除、処理停止を請求できます。請求は以下のメールで受け付けます。",
      paragraphs: [
        "匿名構造のため、対象確認に必要な最小限の情報を求める場合があります。請求者とサーバーデータを確認できない場合、他者の権利を侵害するおそれがある場合、または法令で認められる場合は対応が制限されることがあります。",
        "アプリデータの消去・アンインストールではサーバー情報は自動削除されません。任意識別子を失うと本人確認が困難になり、請求が制限される場合があります。法定代理人または適法な代理人も権利を行使できます。",
      ],
    },
    automatic: {
      title: "自動収集される情報と選択方法",
      intro:
        "EYEKONS Stan自体はウェブCookieを設置しません。ただし、埋め込みYouTubeプレーヤー、Firebase、Google広告サービスは、Cookieまたは類似技術、広告ID、アプリインスタンス・端末・利用情報を処理する場合があります。",
      items: [
        "Google UMP画面とAndroidの広告プライバシー設定から選択を変更できます。",
        "広告を拒否しても基本コンテンツは利用できますが、広告報酬機能が制限される場合があります。",
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
        "合理的な保護措置でもすべての危険は排除できません。端末をロックし、公開投稿に個人情報を記載しないでください。事故が確認された場合は法令に従って対応します。",
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
      ],
    },
    changes: {
      title: "プライバシーポリシーの変更",
      text: "本方針は{date}から適用されます。アプリ機能または個人情報の処理方法を変更する場合は、変更前に本ページまたはアプリ内のお知らせで通知します。適用法令により別途同意が必要な場合は、同意を取得します。",
    },
  },
};

export const privacyLanguageAlternates = {
  ko: siteConfig.routes.eyeconsPrivacyKo,
  en: siteConfig.routes.eyeconsPrivacy,
  ja: siteConfig.routes.eyeconsPrivacyJa,
  "x-default": siteConfig.routes.eyeconsPrivacy,
} as const;
