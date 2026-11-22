import { localizedRoutes } from "@/constants/site";
import { zombieCarePrivacy } from "@/features/legal/constants/zombie-care-privacy";

export const zombieCarePrivacyLocalePaths =
  localizedRoutes.zombieCarePrivacy.paths;

export const zombieCarePrivacyLanguageAlternates = {
  ...zombieCarePrivacyLocalePaths,
  "x-default": zombieCarePrivacyLocalePaths.en,
} as const;

export const zombieCarePrivacyPolicies = {
  en: zombieCarePrivacy,
  ko: zombieCarePrivacy,
  ja: zombieCarePrivacy,
} as const;

export const zombieCarePrivacyCopy = {
  ko: {
    intro: "이 방침은 게임과 게임 관련 이메일 문의에 적용됩니다.",
    local:
      "회원가입 없이 플레이할 수 있습니다. 게임은 진행 상황, 보유 재화, 영입·강화 내역, 오프닝 시청 여부를 플레이를 이어가기 위해 기기의 앱 저장 공간에 보관합니다. 앱은 이 기록을 운영자 또는 Google에 전송하지 않습니다. Android 설정에서 앱 저장공간의 데이터를 삭제하면 기기에 저장된 진행 기록이 지워집니다.",
    ads: "Android 버전은 선택형 보상 광고를 제공하기 위해 Google AdMob과 광고 개인정보 선택을 관리하는 Google UMP를 사용합니다. Google의 광고 SDK는 설정과 이용 환경에 따라 IP 주소(IP 기반 대략적 위치 포함), 앱 실행·탭·영상 시청 등 상호작용, 성능·진단 정보, 광고 ID·앱 세트 ID 등 기기 또는 계정 관련 식별자를 자동으로 수집·공유할 수 있습니다. Google은 이 정보를 광고 제공·측정, 분석, 부정행위 방지에 사용합니다.",
    transfer:
      "SDK 초기화, 개인정보 선택 확인, 광고 요청 및 이용 과정에서 해당 정보가 암호화된 네트워크 연결로 Google에 전송될 수 있습니다. Google은 미국을 포함한 여러 국가의 서버에서 정보를 처리할 수 있으며, 보유기간은 정보의 종류와 처리 목적에 따라 달라집니다. 세부 처리 기준과 문의 방법은 아래 Google 자료에서 확인할 수 있습니다.",
    choices:
      "광고 시청은 선택이며 광고 보상 없이도 게임을 이용할 수 있습니다. 앱에 광고 개인정보 옵션이 표시되는 경우 그 화면에서 선택을 변경하거나 철회할 수 있습니다. Android 설정에서는 기기가 제공하는 광고 ID 재설정·삭제 기능을 이용할 수 있습니다. 광고 ID 삭제나 맞춤 광고 거부 후에도 광고 제공, 측정, 부정행위 방지에 필요한 정보가 처리될 수 있습니다. 법령상 별도 동의가 필요한 처리에는 해당 동의를 받습니다.",
    googlePrivacy: "Google 개인정보처리방침과 문의",
    googleAdsData: "Google 광고 SDK의 데이터 공개",
    rights:
      "이용자와 법정대리인은 아래 이메일로 운영자가 보유한 개인정보의 열람, 정정, 삭제, 처리정지 또는 동의 철회를 요청할 수 있습니다. 필요한 범위에서 본인 또는 대리 권한을 확인하며, 법령이 허용하는 범위에서 요청을 처리합니다. 개인정보 침해 상담은 개인정보침해 신고센터(국번 없이 118)에 요청할 수 있습니다.",
    changes:
      "처리 내용이 달라지면 이 페이지에 변경 내용과 적용일을 공개합니다. 별도 고지나 동의가 필요한 경우에는 관계 법령에 따릅니다.",
  },
  en: {
    intro: "This policy applies to the game and support emails about it.",
    local:
      "You can play without an account. The game keeps your progress, in-game currency, recruitment and upgrade records, and whether you watched the opening in the app’s storage on your device so you can resume play. The app does not send these records to the operator or Google. On Android, clearing the app’s storage in Settings deletes the progress stored on that device.",
    ads: "The Android version uses Google AdMob for optional rewarded ads and Google UMP to manage ad privacy choices. Depending on settings and usage, Google's ad SDK can automatically collect and share IP addresses (including approximate location inferred from an IP address), interactions such as app launches, taps and video views, performance and diagnostic data, and device or account identifiers such as advertising IDs and app set IDs. Google uses this information for ad delivery and measurement, analytics, and fraud prevention.",
    transfer:
      "Information may be sent to Google over an encrypted network connection during SDK initialization, privacy-choice checks, ad requests and ad interactions. Google may process it on servers in several countries, including the United States. Retention varies with the type of information and the purpose of processing. Google's documents below explain its practices and how to contact Google.",
    choices:
      "Watching ads is optional and you can play without ad rewards. When ad privacy options are displayed in the app, you can use them to change or withdraw your choices. You can reset or delete your advertising ID using the controls available in Android Settings. Information needed to deliver and measure ads and prevent fraud may still be processed after you delete your advertising ID or opt out of personalized ads. We obtain separate consent where required by applicable law.",
    googlePrivacy: "Google Privacy Policy and contact",
    googleAdsData: "Google ad SDK data disclosure",
    rights:
      "You or your legal representative can use the email address below to request access to, correction or deletion of, or restriction of processing of your personal information held by the operator, or to withdraw consent. We verify identity or authority as needed and handle requests as allowed by law. In South Korea, you can contact the Personal Information Infringement Report Center at 118 for help with a privacy complaint.",
    changes:
      "If our data practices change, we publish the changes and the effective date here. We follow applicable law when separate notice or consent is required.",
  },
  ja: {
    intro:
      "本方針は、ゲームとゲームに関するメールでのお問い合わせに適用されます。",
    local:
      "アカウント登録なしでプレイできます。ゲームの続きから遊べるよう、進行状況、ゲーム内通貨、加入・強化の記録、オープニングの視聴状況を端末のアプリ用ストレージに保存します。アプリはこれらの記録を運営者やGoogleに送信しません。Androidの設定でアプリのストレージを消去すると、その端末に保存した進行状況が削除されます。",
    ads: "Android版では、任意のリワード広告の配信にGoogle AdMobを、広告のプライバシー設定の管理にGoogle UMPを使用します。Googleの広告SDKは、設定や利用環境に応じて、IPアドレス（IPアドレスから推定されるおおよその位置を含む）、アプリの起動・タップ・動画視聴などの操作、パフォーマンス・診断情報、広告ID・アプリセットIDなどの端末またはアカウント関連の識別子を自動で収集・共有する場合があります。Googleは、広告の配信・測定、分析、不正防止にこれらの情報を使用します。",
    transfer:
      "SDKの初期化、プライバシー設定の確認、広告のリクエストや利用時に、暗号化されたネットワーク接続を通じて情報がGoogleに送信される場合があります。Googleは米国を含む複数の国にあるサーバーで情報を処理する場合があり、保存期間は情報の種類や処理目的によって異なります。詳しい取り扱いや問い合わせ方法は、以下のGoogleの資料に記載されています。",
    choices:
      "広告の視聴は任意で、広告報酬を受け取らずにプレイできます。アプリに広告のプライバシー設定が表示される場合は、その画面で選択を変更または撤回できます。Androidの設定では、端末で利用できる広告IDのリセット・削除機能を使用できます。広告IDを削除したり、パーソナライズ広告を無効にしたりした場合でも、広告の配信・測定や不正防止に必要な情報が処理されることがあります。法令で個別の同意が必要な場合は、その同意を取得します。",
    googlePrivacy: "Google プライバシー ポリシーと問い合わせ先",
    googleAdsData: "Google 広告SDKのデータ開示",
    rights:
      "利用者または法定代理人は、以下のメールアドレスから、運営者が保有する個人情報の開示、訂正、削除、処理の停止、同意の撤回を請求できます。必要に応じて本人確認または代理権の確認を行い、法令で認められる範囲で対応します。韓国では、個人情報の侵害について個人情報侵害申告センター（局番なし118）に相談できます。",
    changes:
      "個人情報の取り扱いを変更する場合は、変更内容と適用日を本ページで公表します。個別の通知や同意が必要な場合は、関係法令に従います。",
  },
} as const;

export const zombieCarePolicySections = {
  ko: {
    overview: "주요 개인정보 처리 사항",
    purpose: "개인정보의 처리 목적",
    data: "처리하는 개인정보 항목과 보유·이용 기간",
    thirdParties: "개인정보의 제3자 제공에 관한 사항",
    transfer: "개인정보의 국외 이전에 관한 사항",
    deletion: "개인정보의 파기 절차 및 방법",
    rights: "정보주체와 법정대리인의 권리 및 행사 방법",
    security: "개인정보의 안전성 확보조치",
    automatic: "자동 수집 및 광고 행태정보 처리와 거부 방법",
    contact: "개인정보 보호 및 열람청구 담당 창구",
    remedies: "정보주체의 권익침해에 대한 구제방법",
    changes: "개인정보 처리방침의 변경",
    summary: [
      "회원가입 없이 플레이합니다. 게임 진행 기록은 기기에 저장됩니다.",
      "이메일로 문의할 때 답변에 필요한 정보를 처리합니다.",
      "Android의 선택형 보상 광고에는 Google AdMob과 UMP가 사용됩니다.",
    ],
    emailData: {
      category: "이메일 문의",
      data: "발신 이메일 주소, 문의 내용, 이용자가 보낸 첨부 자료",
      purpose: "문의 확인과 답변, 개인정보 관련 요청 처리",
      retention:
        "문의 처리 목적 달성 시까지. 법령상 보존 의무가 있는 경우 해당 법정 기간.",
    },
    thirdPartyText:
      "문의 정보는 법령에 근거하거나 이용자가 별도로 동의한 경우 필요한 범위에서 제3자에게 제공할 수 있습니다. Google의 광고 정보 처리는 아래 국외 이전 및 자동 수집 항목에서 안내합니다.",
    deletionText:
      "문의 처리 목적을 달성하면 메일과 첨부 자료를 메일함에서 삭제합니다. 법령상 보존해야 하는 자료는 접근을 제한해 법정 기간 동안 보관하고, 기간이 끝나면 삭제합니다.",
    securityText:
      "문의 자료에는 업무에 필요한 범위에서만 접근합니다. Google 광고 SDK의 데이터 전송에는 전송 구간 암호화가 적용됩니다.",
    complaint: "개인정보침해 신고센터(국번 없이 118)",
    dispute: "개인정보분쟁조정위원회",
  },
  en: {
    overview: "Privacy at a glance",
    purpose: "Purposes of processing",
    data: "Personal information processed and retention periods",
    thirdParties: "Disclosure of personal information to third parties",
    transfer: "International transfers of personal information",
    deletion: "Procedures and methods for deletion",
    rights: "Rights of individuals and legal representatives",
    security: "Safeguards for personal information",
    automatic:
      "Automatic collection, advertising activity data, and your choices",
    contact: "Privacy and access request contact",
    remedies: "Remedies for privacy complaints",
    changes: "Changes to this privacy policy",
    summary: [
      "You can play without an account. Progress is stored on your device.",
      "If you email us, we process information needed to respond.",
      "Android uses Google AdMob and UMP for optional rewarded ads.",
    ],
    emailData: {
      category: "Email support",
      data: "Sender email address, inquiry contents, and attachments you send",
      purpose: "Review and answer inquiries and handle privacy requests",
      retention:
        "Until the inquiry has been handled, or for the statutory period if retention is required by law.",
    },
    thirdPartyText:
      "We may disclose inquiry data to third parties to the extent necessary if authorized by law or with your separate consent. Google's advertising data practices are described under international transfers and automatic collection below.",
    deletionText:
      "We delete support emails and attachments from the mailbox once they are no longer needed to handle the inquiry. We restrict access to records that must be retained by law and delete them when the statutory period ends.",
    securityText:
      "Access to inquiry records is limited to what is necessary for support. Google encrypts data sent by its ad SDK in transit.",
    complaint:
      "Personal Information Infringement Report Center (118 in South Korea)",
    dispute: "Personal Information Dispute Mediation Committee",
  },
  ja: {
    overview: "個人情報の取り扱いの概要",
    purpose: "個人情報の利用目的",
    data: "取り扱う個人情報の項目と保存期間",
    thirdParties: "個人情報の第三者提供",
    transfer: "個人情報の国外移転",
    deletion: "個人情報の削除手順と方法",
    rights: "本人および法定代理人の権利と行使方法",
    security: "個人情報の安全管理措置",
    automatic: "自動収集、広告の行動データの取り扱いと拒否方法",
    contact: "個人情報保護・開示請求窓口",
    remedies: "個人情報に関する苦情と救済窓口",
    changes: "本方針の変更",
    summary: [
      "アカウント登録なしで遊べます。進行状況は端末に保存されます。",
      "メールでのお問い合わせには、回答に必要な情報を取り扱います。",
      "Android版では任意のリワード広告にGoogle AdMobとUMPを使用します。",
    ],
    emailData: {
      category: "メールでのお問い合わせ",
      data: "送信元メールアドレス、お問い合わせ内容、利用者が送信した添付資料",
      purpose: "お問い合わせの確認・回答および個人情報に関する請求への対応",
      retention: "対応目的の達成まで。法令で保存が必要な場合はその法定期間。",
    },
    thirdPartyText:
      "法令に基づく場合、または利用者の個別の同意を得た場合に、必要な範囲で問い合わせ情報を第三者に提供することがあります。Googleによる広告データの取り扱いは、以下の国外移転と自動収集の項目をご覧ください。",
    deletionText:
      "対応に不要となったメールと添付資料はメールボックスから削除します。法令で保存が必要な資料は、法定期間中のアクセスを制限し、期間終了後に削除します。",
    securityText:
      "問い合わせ資料へのアクセスは業務に必要な範囲に限ります。Googleの広告SDKが送信するデータは通信経路で暗号化されます。",
    complaint: "個人情報侵害申告センター（韓国内から118）",
    dispute: "個人情報紛争調停委員会",
  },
} as const;
