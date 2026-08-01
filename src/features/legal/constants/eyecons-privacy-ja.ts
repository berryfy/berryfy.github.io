import { businessInfo } from "@/constants/business";
import { privacyLinks } from "@/features/legal/constants/privacy-links";
import type { EyeconsPrivacyPolicy } from "@/features/legal/types/privacy-policy";

export const eyeconsPrivacyJa = {
  appName: "EYECONS Stan",
  businessName: businessInfo.name,
  contactEmail: businessInfo.contactEmail,
  effectiveDate: "2026年8月1日",
  navigation: [
    { id: "overview", label: "重要事項" },
    { id: "purpose", label: "利用目的" },
    { id: "data", label: "処理項目と保存期間" },
    { id: "collection", label: "収集方法" },
    { id: "third-parties", label: "第三者提供" },
    { id: "external-services", label: "委託および国外処理" },
    { id: "deletion", label: "削除" },
    { id: "rights", label: "利用者の権利" },
    { id: "automatic", label: "自動収集と拒否方法" },
    { id: "security", label: "安全管理措置" },
    { id: "contact", label: "お問い合わせ・救済" },
    { id: "changes", label: "本方針の変更" },
  ],
  serverData: [
    {
      category: "匿名コミュニティプロフィール",
      data: "アプリが無作為に生成した識別子、アプリ識別値、ニックネーム、ジェム残高、作成・更新日時",
      purpose:
        "会員登録を伴わないコミュニティプロフィールの提供、利用者の区別、報酬管理、不正利用の防止",
      retention:
        "削除依頼の処理完了またはサービス終了まで。不正利用の防止や紛争対応に必要な情報は、その目的が終了するまで保存する場合があります。",
    },
    {
      category: "コミュニティ活動",
      data: "言語、投稿・コメントの内容、投票・通報情報、作成・更新日時",
      purpose:
        "コミュニティ機能の提供、コンテンツ表示、通報対応、サービス秩序の維持、紛争対応",
      retention:
        "削除依頼の処理完了またはサービス終了まで。利用者が削除した投稿・コメントは画面上で非表示となり、運営、不正利用の防止、紛争対応に必要な範囲で限定的に残る場合があります。",
    },
    {
      category: "広告報酬",
      data: "アプリが生成した識別子、アプリ識別値、広告報酬取引識別子、報酬量、処理日時",
      purpose: "報酬の付与、重複付与の確認、不正利用の防止",
      retention:
        "サービス終了まで、または重複付与・不正利用防止の目的が終了するまで",
    },
    {
      category: "アプリ利用・診断情報",
      data: "アプリインスタンス、端末、OS、言語、ネットワーク、IPアドレス、画面・機能の利用記録、コンテンツ識別子・タイトル、広告・通知関連イベント、エラー情報",
      purpose:
        "コンテンツ提供、利用状況の分析、機能改善、エラー・セキュリティ対応、不正利用の防止",
      retention:
        "Googleなどのサービス提供者の設定およびプライバシーポリシーに定める期間",
    },
    {
      category: "プッシュ通知",
      data: "Firebase Cloud Messaging登録トークン、購読トピック、通知権限の状態、端末・アプリ情報",
      purpose: "アプリ関連通知の送信および受信状態の管理",
      retention:
        "通知購読の解除、アプリの削除、またはサービス提供者の方針に定める期間まで",
    },
    {
      category: "メールでのお問い合わせ",
      data: "送信者のメールアドレス、お問い合わせ内容、利用者が任意で提供した情報",
      purpose: "お問い合わせの確認・回答および対応履歴の管理",
      retention:
        "対応完了後1年間。法令上の保存義務または紛争対応の必要がある場合は、その期間まで保存する場合があります。",
    },
  ],
  localData: [
    {
      category: "お気に入り",
      data: "お気に入りに登録した写真・動画の情報および保存日時",
      purpose: "お気に入り一覧の提供",
      retention:
        "お気に入りの削除、アプリデータの消去、またはアプリのアンインストールまで",
    },
    {
      category: "設定および識別情報",
      data: "言語・通知などのアプリ設定、広告同意の状態、アプリが生成した任意識別子、コミュニティプロフィールのキャッシュ",
      purpose: "設定の維持、コミュニティ機能および広告報酬機能の提供",
      retention:
        "設定の初期化、アプリデータの消去、またはアプリのアンインストールまで",
    },
    {
      category: "コンテンツおよびキャッシュ",
      data: "写真・動画・プレイリスト・ギャラリー・コミュニティ一覧および画像キャッシュ",
      purpose: "画面表示、読み込み速度の改善、データ通信量の削減",
      retention:
        "アプリによる更新・整理、アプリデータの消去、またはアプリのアンインストールまで。端末のギャラリーに保存した画像は、利用者が削除するまで残ります。",
    },
  ],
  externalServices: [
    {
      provider: "Supabase, Inc.",
      service: "Supabase DatabaseおよびEdge Functions",
      relationship: "個人情報処理の委託先",
      transferBasis:
        "サービス提供に必要な国外での処理・保管（韓国個人情報保護法第28条の8第1項第3号）",
      data: "アプリ生成識別子、アプリ識別値、ニックネーム、ジェム残高、コミュニティ活動、通報・報酬取引情報、IPアドレスなどのネットワーク情報",
      purpose:
        "匿名コミュニティデータの保存・処理、広告報酬の付与、重複付与・不正利用の防止",
      location: "米国東部（北バージニア）",
      timingAndMethod:
        "コミュニティまたは広告報酬機能の利用時に、暗号化されたネットワークを通じて送信",
      retention:
        "本方針に記載された項目別保存期間およびSupabaseのバックアップ・サービス方針に従う期間",
      refusalAndEffect:
        "該当機能を利用しなければ送信されません。送信を拒否した場合、コミュニティおよび広告報酬機能を利用できません。",
      policyUrl: privacyLinks.supabasePrivacy,
    },
    {
      provider: "Google LLC",
      service:
        "Firebase、Google Mobile Ads、埋め込みYouTubeプレーヤーおよびGmail",
      relationship: "個人情報処理の委託先および独立したサービス提供者",
      transferBasis:
        "サービス提供に必要な国外処理・保管、法令上必要な同意、または利用者による機能・お問い合わせの要求",
      data: "コンテンツ要求、アプリ・端末・OS・言語・ネットワーク・IP情報、利用・エラー・通知記録、通知トークン、広告識別子・同意・操作情報、YouTube再生情報、メールお問い合わせ内容",
      purpose:
        "コンテンツ同期、利用分析・機能改善、通知、広告・報酬、YouTube再生、メールお問い合わせへの回答",
      location: "米国を含む、Googleおよびその処理業者がサービスを提供する国",
      timingAndMethod:
        "関連する機能、広告、動画、メールの利用時に、暗号化通信または利用者の端末から直接送信",
      retention:
        "Googleのサービス設定およびプライバシーポリシーに従う期間。メールお問い合わせは対応完了後1年間",
      refusalAndEffect:
        "通知・広告設定を変更するか、動画・メール機能を利用しないことができます。必要な通信を遮断すると、該当機能が制限されます。",
      policyUrl: privacyLinks.googlePrivacy,
    },
  ],
} satisfies EyeconsPrivacyPolicy;
