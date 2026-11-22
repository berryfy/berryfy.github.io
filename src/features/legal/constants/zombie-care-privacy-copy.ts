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
      "회원가입 없이 플레이할 수 있습니다. 게임은 진행 상황, 보유 재화, 영입·강화 내역, 오프닝 시청 여부를 플레이를 이어가기 위해 기기의 앱 저장 공간에 보관합니다. 앱은 이 기록을 운영자에게 전송하지 않으며, 광고·분석 SDK를 사용하지 않습니다. Android 설정에서 앱 저장공간의 데이터를 삭제하면 기기에 저장된 진행 기록이 지워집니다.",
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
      "You can play without an account. The game keeps your progress, in-game currency, recruitment and upgrade records, and whether you watched the opening in the app’s storage on your device so you can resume play. The app does not send these records to the operator and uses no advertising or analytics SDKs. On Android, clearing the app’s storage in Settings deletes the progress stored on that device.",
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
      "アカウント登録なしでプレイできます。ゲームの続きから遊べるよう、進行状況、ゲーム内通貨、加入・強化の記録、オープニングの視聴状況を端末のアプリ用ストレージに保存します。アプリはこれらの記録を運営者へ送信せず、広告・分析用SDKも使用しません。Androidの設定でアプリのストレージを消去すると、その端末に保存した進行状況が削除されます。",
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
