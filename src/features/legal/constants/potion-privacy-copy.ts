import { potionPrivacyPaths, siteConfig } from "@/constants/site";
import { privacyPolicyCopy } from "@/features/legal/constants/privacy-policy-copy";
import type {
  PrivacyLocale,
  PrivacyPageCopy,
} from "@/features/legal/types/privacy-policy";

export const potionPrivacyLocalePaths = potionPrivacyPaths;
export const potionPrivacyLanguageAlternates = {
  ...potionPrivacyLocalePaths,
  "x-default": siteConfig.routes.potionPrivacy,
};

// 공통 제목과 레이아웃만 재사용하고, 처리 내용은 실제 게임 기준으로 별도 정의한다.
export const potionPrivacyPageCopy: Record<PrivacyLocale, PrivacyPageCopy> = {
  en: {
    ...privacyPolicyCopy.en,
    intro:
      "This policy explains how berryfy handles information in Lulu’s Potion Shop, formerly Potion Sort Quest.",
    overview: {
      ...privacyPolicyCopy.en.overview,
      items: [
        "No registration or account is required. Game progress is saved on your device; berryfy does not run a game account server or upload your save file to one.",
        "Google AdMob and its consent tools may process device identifiers, IP addresses, ad interactions and diagnostics. Local-only game saves do not mean that advertising services collect no data.",
        "Rewarded ads are optional. Banners appear in the workshop and album. The current game does not use interstitial ads.",
      ],
    },
    purposes: {
      ...privacyPolicyCopy.en.purposes,
      items: [
        "Save puzzle and story progress, rewards, collections, settings and ad reward limits.",
        "Provide ads and optional rewards, manage consent, measure ad performance and prevent fraud.",
        "Respond to privacy and support enquiries.",
      ],
    },
    data: {
      ...privacyPolicyCopy.en.data,
      intro:
        "The game has no sign-in, social posting or cloud save service operated by berryfy. Advertising data goes directly to the advertising provider. If you email us, we receive the information you choose to send.",
      localIntro:
        "Game saves and preferences stay in the app’s local storage. You can clear them using the reset option in the app, Android’s app-data controls or by uninstalling the app.",
    },
    collection: {
      ...privacyPolicyCopy.en.collection,
      items: [
        "When you play, change settings or use a reward, the app updates its local save.",
        "When ad or consent services run, their SDKs process the information needed for those services.",
        "When you send a support email, we receive your email address and message.",
      ],
      permissions:
        "The game does not request access to contacts, camera, microphone or precise location, and has no feature for uploading your photos or payment details. Network access is used for advertising and consent services.",
      publicContent:
        "The game has no public posting, chat or user profile feature. Please do not send passwords, payment details or other unnecessary sensitive information in a support email.",
    },
    thirdParties: {
      ...privacyPolicyCopy.en.thirdParties,
      paragraphs: [
        "berryfy does not sell personal information. Google processes advertising information under its own terms and privacy policy. We may disclose information when required by applicable law or with a valid legal basis; we do not share local game saves with an independently operated game server.",
      ],
    },
    external: {
      ...privacyPolicyCopy.en.external,
      intro:
        "The app uses Google AdMob and User Messaging Platform (UMP). Support emails are handled through Google’s email service. Information may be processed in the United States and other countries where Google and its service providers operate.",
      providerControl:
        "Google’s independently processed data is governed by Google’s policies and controls. We handle information and requests within our control as required by applicable law; this does not limit any legal duty we have.",
      youtube: "",
      youtubeTerms: "",
    },
    deletion: {
      ...privacyPolicyCopy.en.deletion,
      paragraphs: [
        "Resetting the game clears progress and preferences managed by the app. Android’s clear-app-data option or uninstalling the app removes the local save. This does not delete information already processed by Google.",
        "Support messages are deleted when no longer needed to resolve your enquiry, unless retention is required for a legal obligation or an ongoing dispute. Provider-held advertising information is retained and deleted under the provider’s policies.",
      ],
    },
    rights: {
      ...privacyPolicyCopy.en.rights,
      paragraphs: [
        "We handle requests within the scope and procedures required by applicable law. We may ask for the minimum information needed to verify your identity, your representative’s authority and the records concerned. Where the law permits a request to be limited or refused, we will explain the reason as required.",
        "We cannot remotely access or erase a save that exists only on your device. Use the app or Android controls for local data. For information independently held by Google, use Google’s privacy controls or contact Google.",
      ],
    },
    automatic: {
      ...privacyPolicyCopy.en.automatic,
      intro:
        "{appName} does not itself set web cookies. Google’s advertising services may use advertising IDs, app set IDs, device and network details, ad interactions and diagnostics, depending on SDK settings and your choices.",
      items: [
        "Where offered, change ad consent through the app’s Ad privacy settings option or Google’s consent screen.",
        "Android settings let you reset or delete the advertising ID and manage available ad privacy controls; names vary by Android version.",
        "You can skip rewarded ads and keep playing the basic puzzles. The associated optional reward is not provided when an ad is not completed. Restricting advertising identifiers does not necessarily stop all ads or all SDK processing.",
      ],
    },
    security: {
      ...privacyPolicyCopy.en.security,
      items: [
        "Game saves use the app’s local storage rather than an account database.",
        "Google states that Mobile Ads SDK data is encrypted in transit using TLS.",
        "Access to support messages is limited to what is needed to handle enquiries.",
      ],
      paragraphs: [
        "Keep your device secured. No storage or transmission method removes every risk. We will investigate reported issues and take appropriate steps under applicable law.",
      ],
    },
    changes: {
      ...privacyPolicyCopy.en.changes,
      text: "This policy applies from {date}. Changes to app features or data handling will be explained on this page before they take effect. We will request consent where applicable law requires it.",
    },
  },
  ko: {
    ...privacyPolicyCopy.ko,
    intro:
      "berryfy가 운영하는 Lulu’s Potion Shop(루루의 포션 가게, 이전 이름 Potion Sort Quest)에서 어떤 정보를 처리하고 어떻게 관리하는지 안내합니다.",
    overview: {
      ...privacyPolicyCopy.ko.overview,
      items: [
        "회원가입이나 로그인이 필요하지 않습니다. 게임 진행은 기기에 저장하며, berryfy는 게임 계정 서버를 운영하거나 저장 파일을 별도 서버로 전송하지 않습니다.",
        "Google AdMob과 동의 관리 도구는 기기 식별자, IP 주소, 광고 이용 기록, 진단 정보 등을 처리할 수 있습니다. 게임 저장이 기기 안에서 이루어진다고 해서 광고 서비스까지 정보를 수집하지 않는 것은 아닙니다.",
        "보상형 광고는 선택해서 이용합니다. 배너는 공방과 앨범에 표시하며, 현재 게임에서는 전면 광고를 사용하지 않습니다.",
      ],
    },
    purposes: {
      ...privacyPolicyCopy.ko.purposes,
      items: [
        "퍼즐·이야기 진행, 보상, 수집품, 설정과 광고 보상 이용 한도를 저장합니다.",
        "광고와 선택형 보상을 제공하고 동의 관리, 광고 성과 측정, 부정 이용 방지에 필요한 정보를 처리합니다.",
        "개인정보 문의와 앱 이용 문의에 답변합니다.",
      ],
    },
    data: {
      ...privacyPolicyCopy.ko.data,
      intro:
        "게임에는 로그인, 이용자 게시물, berryfy가 운영하는 클라우드 저장 기능이 없습니다. 광고 정보는 광고 서비스 제공자가 직접 처리합니다. 이메일로 문의하면 이용자가 보낸 정보를 받습니다.",
      localIntro:
        "게임 저장 파일과 설정은 앱의 기기 내 저장 공간에 보관합니다. 앱의 처음부터 시작 기능, Android의 앱 데이터 삭제 또는 앱 삭제로 지울 수 있습니다.",
    },
    collection: {
      ...privacyPolicyCopy.ko.collection,
      items: [
        "게임을 플레이하거나 설정을 바꾸고 보상을 받으면 기기 내 저장 파일을 갱신합니다.",
        "광고·동의 관리 기능이 실행되면 해당 SDK가 서비스에 필요한 정보를 처리합니다.",
        "문의 이메일을 보내면 이메일 주소와 문의 내용을 받습니다.",
      ],
      permissions:
        "게임은 연락처·카메라·마이크·정확한 위치에 대한 접근 권한을 요청하지 않으며, 사진이나 결제 정보를 업로드하는 기능도 없습니다. 광고와 동의 관리에는 네트워크 통신을 사용합니다.",
      publicContent:
        "게임에는 공개 게시물, 채팅, 이용자 프로필 기능이 없습니다. 문의 이메일에는 비밀번호·결제 정보 등 불필요한 민감 정보를 보내지 마세요.",
    },
    thirdParties: {
      ...privacyPolicyCopy.ko.thirdParties,
      paragraphs: [
        "berryfy는 개인정보를 판매하지 않습니다. Google은 자체 약관과 개인정보처리방침에 따라 광고 정보를 처리합니다. 법령에 따른 요청 등 적법한 근거가 있는 경우 필요한 범위에서 정보를 제공할 수 있습니다. 기기에 저장한 게임 진행을 별도 게임 서버에 공유하지 않습니다.",
      ],
    },
    external: {
      ...privacyPolicyCopy.ko.external,
      intro:
        "앱은 Google AdMob과 User Messaging Platform(UMP)을 사용합니다. 문의 이메일은 Google의 이메일 서비스로 처리합니다. 정보는 미국을 비롯해 Google과 처리업체가 서비스를 제공하는 국가에서 처리될 수 있습니다.",
      providerControl:
        "Google이 독립적으로 처리하는 정보에는 Google의 정책과 설정이 적용됩니다. 사업자는 직접 관리하는 정보와 처리 가능한 요청에 대해 관련 법령에 따라 대응하며, 이 안내가 법령상 의무를 제한하지는 않습니다.",
      youtube: "",
      youtubeTerms: "",
    },
    deletion: {
      ...privacyPolicyCopy.ko.deletion,
      paragraphs: [
        "게임을 처음부터 시작하면 앱이 관리하는 진행과 설정을 초기화합니다. Android에서 앱 데이터를 삭제하거나 앱을 삭제하면 기기 내 저장 파일을 지울 수 있습니다. 이 작업으로 Google이 이미 처리한 정보까지 삭제되지는 않습니다.",
        "문의 내용은 답변과 후속 처리에 더 이상 필요하지 않으면 삭제합니다. 법령상 의무나 진행 중인 분쟁 때문에 보관이 필요한 경우에는 해당 목적에 필요한 기간 보관합니다. 광고 제공자가 가진 정보는 해당 제공자의 보관·삭제 정책을 따릅니다.",
      ],
    },
    rights: {
      ...privacyPolicyCopy.ko.rights,
      paragraphs: [
        "관련 법령이 정한 범위와 절차에 따라 요청을 처리합니다. 본인·대리권과 대상 정보를 확인하는 데 필요한 최소 정보를 요청할 수 있습니다. 법령이 허용하는 사유로 요청을 제한하거나 거절하는 경우에는 관련 법령에 따라 그 사유를 안내합니다.",
        "기기에만 있는 저장 파일은 사업자가 원격으로 열람하거나 삭제할 수 없습니다. 앱 또는 Android 설정에서 직접 삭제해 주세요. Google이 독립적으로 처리하는 정보는 Google의 개인정보 설정이나 문의 절차를 이용해 주세요.",
      ],
    },
    automatic: {
      ...privacyPolicyCopy.ko.automatic,
      intro:
        "{appName} 자체는 웹 쿠키를 설치하지 않습니다. Google 광고 서비스는 SDK 설정과 이용자의 선택에 따라 광고 ID, 앱 세트 ID, 기기·네트워크 정보, 광고 이용 기록과 진단 정보 등을 처리할 수 있습니다.",
      items: [
        "해당 옵션이 제공되는 경우 앱 설정의 광고 개인정보 설정이나 Google 동의 화면에서 광고 관련 선택을 바꿀 수 있습니다.",
        "Android 설정에서 광고 ID를 재설정·삭제하거나 제공되는 광고 개인정보 옵션을 변경할 수 있습니다. 메뉴 이름은 Android 버전에 따라 다릅니다.",
        "보상형 광고를 보지 않아도 기본 퍼즐은 플레이할 수 있습니다. 광고를 끝까지 보지 않으면 해당 선택형 보상은 지급되지 않습니다. 광고 식별자를 제한해도 모든 광고나 SDK 처리가 중단되는 것은 아닙니다.",
      ],
    },
    security: {
      ...privacyPolicyCopy.ko.security,
      items: [
        "게임 저장은 계정 데이터베이스 대신 앱의 기기 내 저장 공간을 사용합니다.",
        "Google 안내에 따르면 Mobile Ads SDK가 전송하는 데이터에는 TLS 암호화가 적용됩니다.",
        "문의 이메일은 답변에 필요한 범위에서만 접근합니다.",
      ],
      paragraphs: [
        "기기 잠금 등 이용자 기기의 보안 기능을 함께 사용해 주세요. 모든 저장·전송 위험을 완전히 없앨 수는 없습니다. 문제가 확인되면 조사하고 관련 법령에 따라 필요한 조치를 취합니다.",
      ],
    },
    changes: {
      ...privacyPolicyCopy.ko.changes,
      text: "이 방침은 {date}부터 적용합니다. 앱 기능이나 정보 처리 방식이 바뀌면 시행 전에 이 페이지에서 안내합니다. 법령상 별도 동의가 필요한 변경은 해당 절차에 따라 동의를 받습니다.",
    },
  },
  ja: {
    ...privacyPolicyCopy.ja,
    intro:
      "berryfyが運営するLulu’s Potion Shop（ルルのポーション屋さん、旧名：Potion Sort Quest）で扱う情報と、その管理方法をご案内します。",
    overview: {
      ...privacyPolicyCopy.ja.overview,
      items: [
        "会員登録やログインは不要です。ゲームの進行は端末に保存します。berryfyはゲーム用のアカウントサーバーを運営せず、セーブデータを別のサーバーへ送信しません。",
        "Google AdMobと同意管理ツールは、端末の識別子、IPアドレス、広告の利用記録、診断情報などを処理する場合があります。セーブデータが端末内にあることは、広告サービスも情報を収集しないという意味ではありません。",
        "リワード広告の視聴は任意です。バナー広告は工房とアルバムに表示します。現在のゲームではインタースティシャル広告を使用していません。",
      ],
    },
    purposes: {
      ...privacyPolicyCopy.ja.purposes,
      items: [
        "パズルと物語の進行、報酬、コレクション、設定、広告報酬の利用上限を保存します。",
        "広告と任意の報酬を提供し、同意管理、広告効果の測定、不正利用の防止に必要な情報を処理します。",
        "個人情報やアプリの利用に関するお問い合わせに対応します。",
      ],
    },
    data: {
      ...privacyPolicyCopy.ja.data,
      intro:
        "ログイン、利用者による投稿、berryfyが運営するクラウド保存機能はありません。広告情報は広告サービスの提供者が直接処理します。メールでお問い合わせいただいた場合は、お送りいただいた情報を受け取ります。",
      localIntro:
        "ゲームのセーブデータと設定は、アプリの端末内ストレージに保存します。アプリで最初からやり直す、Androidでアプリのデータを消去する、またはアプリを削除することで消去できます。",
    },
    collection: {
      ...privacyPolicyCopy.ja.collection,
      items: [
        "プレイ、設定の変更、報酬の受け取りに応じて、端末内のセーブデータを更新します。",
        "広告や同意管理の機能が動作する際、各SDKがサービスに必要な情報を処理します。",
        "メールでお問い合わせいただくと、メールアドレスとお問い合わせ内容を受け取ります。",
      ],
      permissions:
        "連絡先、カメラ、マイク、正確な位置情報へのアクセス権限を要求しません。写真や決済情報をアップロードする機能もありません。広告と同意管理にはネットワーク通信を使用します。",
      publicContent:
        "公開投稿、チャット、利用者プロフィールの機能はありません。お問い合わせには、パスワードや決済情報など不要な機密情報を記載しないでください。",
    },
    thirdParties: {
      ...privacyPolicyCopy.ja.thirdParties,
      paragraphs: [
        "berryfyは個人情報を販売しません。Googleは自社の規約とプライバシーポリシーに基づいて広告情報を処理します。法令に基づく要請など適法な根拠がある場合は、必要な範囲で情報を提供することがあります。端末のゲーム進行を別のゲームサーバーに共有することはありません。",
      ],
    },
    external: {
      ...privacyPolicyCopy.ja.external,
      intro:
        "Google AdMobとUser Messaging Platform（UMP）を使用しています。お問い合わせメールはGoogleのメールサービスで処理します。情報は米国をはじめ、Googleとその処理業者がサービスを提供する国で処理される場合があります。",
      providerControl:
        "Googleが独立して処理する情報には、Googleの方針と設定が適用されます。当社は自ら管理する情報と対応可能なご要望について適用法令に従って対応します。この説明は当社の法的義務を制限するものではありません。",
      youtube: "",
      youtubeTerms: "",
    },
    deletion: {
      ...privacyPolicyCopy.ja.deletion,
      paragraphs: [
        "ゲームを最初からやり直すと、アプリが管理する進行と設定を初期化します。Androidでアプリのデータを消去するか、アプリを削除すると、端末内のセーブデータを消去できます。この操作でGoogleがすでに処理した情報まで削除されるわけではありません。",
        "お問い合わせ内容は、回答とその後の対応に不要となった時点で削除します。法的義務や継続中の紛争への対応に必要な場合は、その目的に必要な期間保管します。広告提供者が保有する情報は、提供者の保管・削除方針に従います。",
      ],
    },
    rights: {
      ...privacyPolicyCopy.ja.rights,
      paragraphs: [
        "適用法令で定められた範囲と手続きに従って対応します。ご本人、代理権、対象となる情報を確認するため、必要最小限の情報をお願いする場合があります。法令により認められる理由で対応を制限または拒否する場合は、法令に従ってその理由をお知らせします。",
        "端末内だけにあるセーブデータを、当社が遠隔で閲覧・削除することはできません。アプリまたはAndroidの設定から削除してください。Googleが独立して処理する情報については、Googleのプライバシー設定やお問い合わせ窓口をご利用ください。",
      ],
    },
    automatic: {
      ...privacyPolicyCopy.ja.automatic,
      intro:
        "{appName}自体はウェブCookieを設置しません。Googleの広告サービスは、SDKの設定や利用者の選択に応じて、広告ID、アプリセットID、端末・ネットワーク情報、広告の利用記録、診断情報などを処理する場合があります。",
      items: [
        "提供される場合は、アプリの広告プライバシー設定やGoogleの同意画面で広告に関する選択を変更できます。",
        "Androidの設定から広告IDのリセット・削除や、利用可能な広告プライバシー設定を変更できます。メニュー名はAndroidのバージョンによって異なります。",
        "リワード広告を見なくても基本のパズルは遊べます。広告の視聴を完了しなかった場合、その任意の報酬は受け取れません。広告識別子を制限しても、すべての広告やSDKの処理が停止するわけではありません。",
      ],
    },
    security: {
      ...privacyPolicyCopy.ja.security,
      items: [
        "セーブデータはアカウントデータベースではなく、アプリの端末内ストレージに保存します。",
        "Googleの説明によると、Mobile Ads SDKが送信するデータはTLSで暗号化されます。",
        "お問い合わせメールへのアクセスは、対応に必要な範囲に限定します。",
      ],
      paragraphs: [
        "端末のロックなどのセキュリティ機能をご利用ください。保存・通信に伴うすべてのリスクをなくすことはできません。問題を確認した場合は調査し、適用法令に従って必要な対応を行います。",
      ],
    },
    changes: {
      ...privacyPolicyCopy.ja.changes,
      text: "この方針は{date}から適用します。アプリの機能や情報の取り扱いを変更する際は、適用前にこのページでお知らせします。法令上、別途同意が必要な変更については、所定の手続きで同意を取得します。",
    },
  },
};
