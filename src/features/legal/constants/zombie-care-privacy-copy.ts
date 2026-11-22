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
    localTitle: "게임 데이터",
    local:
      "회원가입 없이 플레이할 수 있습니다. 게임은 진행 상황, 보유 재화, 영입·강화 내역, 오프닝 시청 여부를 플레이를 이어가기 위해 기기의 앱 저장 공간에 보관합니다. 앱은 이 기록을 운영자 또는 Google에 전송하지 않습니다. Android 설정에서 앱 저장공간의 데이터를 삭제하면 기기에 저장된 진행 기록이 지워집니다.",
    adsTitle: "선택형 보상 광고",
    ads: "Android 버전은 선택형 보상 광고를 제공하기 위해 Google AdMob과 광고 개인정보 선택을 관리하는 Google UMP를 사용합니다. Google의 광고 SDK는 설정과 이용 환경에 따라 IP 주소(IP 기반 대략적 위치 포함), 앱 실행·탭·영상 시청 등 상호작용, 성능·진단 정보, 광고 ID·앱 세트 ID 등 기기 또는 계정 관련 식별자를 자동으로 수집·공유할 수 있습니다. Google은 이 정보를 광고 제공·측정, 분석, 부정행위 방지에 사용합니다.",
    transfer:
      "SDK 초기화, 개인정보 선택 확인, 광고 요청 및 이용 과정에서 해당 정보가 암호화된 네트워크 연결로 Google에 전송될 수 있습니다. Google은 미국을 포함한 여러 국가의 서버에서 정보를 처리할 수 있으며, 보유기간은 정보의 종류와 처리 목적에 따라 달라집니다. 세부 처리 기준과 문의 방법은 아래 Google 자료에서 확인할 수 있습니다.",
    choices:
      "광고 시청은 선택이며 광고 보상 없이도 게임을 이용할 수 있습니다. 앱에 광고 개인정보 옵션이 표시되는 경우 그 화면에서 선택을 변경하거나 철회할 수 있습니다. Android 설정에서는 기기가 제공하는 광고 ID 재설정·삭제 기능을 이용할 수 있습니다. 광고 ID 삭제나 맞춤 광고 거부 후에도 광고 제공, 측정, 부정행위 방지에 필요한 정보가 처리될 수 있습니다. 법령상 별도 동의가 필요한 처리에는 해당 동의를 받습니다.",
    googlePrivacy: "Google 개인정보처리방침과 문의",
    googleAdsData: "Google 광고 SDK의 데이터 공개",
    supportTitle: "이메일 문의와 보관",
    support:
      "이메일로 문의하면 발신 이메일 주소, 문의 내용, 직접 첨부한 자료를 문의 확인과 답변에 사용합니다. 문의 해결에 필요한 정보만 보내 주세요. 문의 처리 목적을 달성하면 메일과 첨부 자료를 삭제합니다. 법령에 따라 보관해야 하는 자료는 해당 법정 기간 동안 접근을 제한해 보관한 뒤 삭제합니다. 문의 정보에는 업무에 필요한 범위에서만 접근하며, 법령에 근거한 경우에 한해 필요한 범위에서 제3자에게 제공할 수 있습니다.",
    rightsTitle: "개인정보 보호 문의와 권리 행사",
    rights:
      "이용자와 법정대리인은 아래 이메일로 운영자가 보유한 개인정보의 열람, 정정, 삭제, 처리정지 또는 동의 철회를 요청할 수 있습니다. 필요한 범위에서 본인 또는 대리 권한을 확인하며, 법령이 허용하는 범위에서 요청을 처리합니다. 개인정보 침해 상담은 개인정보침해 신고센터(국번 없이 118)에 요청할 수 있습니다.",
    changesTitle: "방침 변경",
    changes:
      "처리 내용이 달라지면 이 페이지에 변경 내용과 적용일을 공개합니다. 별도 고지나 동의가 필요한 경우에는 관계 법령에 따릅니다.",
  },
  en: {
    intro: "This policy applies to the game and support emails about it.",
    localTitle: "Game data",
    local:
      "You can play without an account. The game keeps your progress, in-game currency, recruitment and upgrade records, and whether you watched the opening in the app’s storage on your device so you can resume play. The app does not send these records to the operator or Google. On Android, clearing the app’s storage in Settings deletes the progress stored on that device.",
    adsTitle: "Optional rewarded ads",
    ads: "The Android version uses Google AdMob for optional rewarded ads and Google UMP to manage ad privacy choices. Depending on settings and usage, Google's ad SDK can automatically collect and share IP addresses (including approximate location inferred from an IP address), interactions such as app launches, taps and video views, performance and diagnostic data, and device or account identifiers such as advertising IDs and app set IDs. Google uses this information for ad delivery and measurement, analytics, and fraud prevention.",
    transfer:
      "Information may be sent to Google over an encrypted network connection during SDK initialization, privacy-choice checks, ad requests and ad interactions. Google may process it on servers in several countries, including the United States. Retention varies with the type of information and the purpose of processing. Google's documents below explain its practices and how to contact Google.",
    choices:
      "Watching ads is optional and you can play without ad rewards. When ad privacy options are displayed in the app, you can use them to change or withdraw your choices. You can reset or delete your advertising ID using the controls available in Android Settings. Information needed to deliver and measure ads and prevent fraud may still be processed after you delete your advertising ID or opt out of personalized ads. We obtain separate consent where required by applicable law.",
    googlePrivacy: "Google Privacy Policy and contact",
    googleAdsData: "Google ad SDK data disclosure",
    supportTitle: "Email support and retention",
    support:
      "When you email us, we use your email address, message, and any attachments you send to review and answer your inquiry. Please send only what we need to resolve it. We delete emails and attachments once they are no longer needed for that purpose. If the law requires retention, we restrict access and delete the information at the end of the statutory period. Access to inquiry data is limited to what is necessary for support. We may disclose that data to a third party only where authorized by law and to the extent necessary.",
    rightsTitle: "Privacy contact and your rights",
    rights:
      "You or your legal representative can use the email address below to request access to, correction or deletion of, or restriction of processing of your personal information held by the operator, or to withdraw consent. We verify identity or authority as needed and handle requests as allowed by law. In South Korea, you can contact the Personal Information Infringement Report Center at 118 for help with a privacy complaint.",
    changesTitle: "Policy changes",
    changes:
      "If our data practices change, we publish the changes and the effective date here. We follow applicable law when separate notice or consent is required.",
  },
  ja: {
    intro:
      "本方針は、ゲームとゲームに関するメールでのお問い合わせに適用されます。",
    localTitle: "ゲームデータ",
    local:
      "アカウント登録なしでプレイできます。ゲームの続きから遊べるよう、進行状況、ゲーム内通貨、加入・強化の記録、オープニングの視聴状況を端末のアプリ用ストレージに保存します。アプリはこれらの記録を運営者やGoogleに送信しません。Androidの設定でアプリのストレージを消去すると、その端末に保存した進行状況が削除されます。",
    adsTitle: "任意のリワード広告",
    ads: "Android版では、任意のリワード広告の配信にGoogle AdMobを、広告のプライバシー設定の管理にGoogle UMPを使用します。Googleの広告SDKは、設定や利用環境に応じて、IPアドレス（IPアドレスから推定されるおおよその位置を含む）、アプリの起動・タップ・動画視聴などの操作、パフォーマンス・診断情報、広告ID・アプリセットIDなどの端末またはアカウント関連の識別子を自動で収集・共有する場合があります。Googleは、広告の配信・測定、分析、不正防止にこれらの情報を使用します。",
    transfer:
      "SDKの初期化、プライバシー設定の確認、広告のリクエストや利用時に、暗号化されたネットワーク接続を通じて情報がGoogleに送信される場合があります。Googleは米国を含む複数の国にあるサーバーで情報を処理する場合があり、保存期間は情報の種類や処理目的によって異なります。詳しい取り扱いや問い合わせ方法は、以下のGoogleの資料に記載されています。",
    choices:
      "広告の視聴は任意で、広告報酬を受け取らずにプレイできます。アプリに広告のプライバシー設定が表示される場合は、その画面で選択を変更または撤回できます。Androidの設定では、端末で利用できる広告IDのリセット・削除機能を使用できます。広告IDを削除したり、パーソナライズ広告を無効にしたりした場合でも、広告の配信・測定や不正防止に必要な情報が処理されることがあります。法令で個別の同意が必要な場合は、その同意を取得します。",
    googlePrivacy: "Google プライバシー ポリシーと問い合わせ先",
    googleAdsData: "Google 広告SDKのデータ開示",
    supportTitle: "メールでのお問い合わせと保存期間",
    support:
      "メールでお問い合わせいただくと、送信元のメールアドレス、内容、添付資料を確認と回答のために使用します。解決に必要な情報のみお送りください。対応に不要となったメールと添付資料は削除します。法令で保存が必要な情報は、アクセスを制限して法定期間保存した後に削除します。問い合わせ情報へのアクセスは業務上必要な範囲に限り、法令に基づく場合に限って必要な範囲で第三者に提供することがあります。",
    rightsTitle: "個人情報に関する窓口と権利",
    rights:
      "利用者または法定代理人は、以下のメールアドレスから、運営者が保有する個人情報の開示、訂正、削除、処理の停止、同意の撤回を請求できます。必要に応じて本人確認または代理権の確認を行い、法令で認められる範囲で対応します。韓国では、個人情報の侵害について個人情報侵害申告センター（局番なし118）に相談できます。",
    changesTitle: "方針の変更",
    changes:
      "個人情報の取り扱いを変更する場合は、変更内容と適用日を本ページで公表します。個別の通知や同意が必要な場合は、関係法令に従います。",
  },
} as const;
