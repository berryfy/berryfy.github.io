import { businessInfo } from "@/constants/business";
import { privacyLinks } from "@/features/legal/constants/privacy-links";
import type {
  ExternalPrivacyService,
  PrivacyDataItem,
  PrivacyNavigationItem,
} from "@/features/legal/types/privacy-policy";

export const eyeconsPrivacy = {
  appName: "EYEKONS Stan",
  businessName: businessInfo.name,
  contactEmail: businessInfo.contactEmail,
  effectiveDate: "2026년 8월 1일",
  navigation: [
    { id: "overview", label: "핵심 안내" },
    { id: "purpose", label: "처리 목적" },
    { id: "data", label: "처리 항목 및 기간" },
    { id: "collection", label: "수집 방법" },
    { id: "third-parties", label: "제3자 제공" },
    { id: "external-services", label: "처리위탁 및 국외 처리" },
    { id: "deletion", label: "파기" },
    { id: "rights", label: "이용자 권리" },
    { id: "automatic", label: "자동 수집 및 거부" },
    { id: "security", label: "안전성 확보조치" },
    { id: "contact", label: "문의 및 권익구제" },
    { id: "changes", label: "방침 변경" },
  ] satisfies PrivacyNavigationItem[],
  serverData: [
    {
      category: "익명 커뮤니티 프로필",
      data: "앱이 무작위로 생성한 식별자, 앱 구분값, 닉네임, 보석 잔액, 생성·수정 시각",
      purpose:
        "회원가입 없는 커뮤니티 프로필 제공, 이용자 구분, 보상 관리 및 부정 이용 방지",
      retention:
        "삭제 요청 처리 또는 서비스 종료 시까지. 부정 이용·분쟁 대응에 필요한 정보는 해당 목적이 끝날 때까지 보관할 수 있습니다.",
    },
    {
      category: "커뮤니티 활동",
      data: "언어, 게시글·댓글 내용, 투표·신고 정보, 작성·수정 시각",
      purpose:
        "커뮤니티 기능 제공, 콘텐츠 표시, 신고 처리, 서비스 질서 유지 및 분쟁 대응",
      retention:
        "삭제 요청 처리 또는 서비스 종료 시까지. 이용자가 삭제한 게시글·댓글은 화면에서 숨김 처리되며, 운영·부정 이용 방지·분쟁 대응에 필요한 범위에서 제한적으로 남을 수 있습니다.",
    },
    {
      category: "광고 보상",
      data: "앱이 생성한 식별자, 앱 구분값, 광고 보상 거래 식별자, 보상량, 처리 시각",
      purpose: "보상 지급, 중복 지급 확인 및 부정 이용 방지",
      retention:
        "서비스 종료 시까지 또는 중복 지급·부정 이용 방지 목적이 끝날 때까지",
    },
    {
      category: "앱 이용·진단 정보",
      data: "앱 인스턴스·기기·운영체제·언어·네트워크 정보, IP 주소, 화면 및 기능 이용 기록, 콘텐츠 식별자·제목, 광고·알림 관련 이벤트, 오류 정보",
      purpose:
        "콘텐츠 제공, 이용 현황 분석, 기능 개선, 오류·보안 대응 및 부정 이용 방지",
      retention:
        "Google 등 서비스 제공자의 설정과 개인정보 보호정책에 따른 기간",
    },
    {
      category: "푸시 알림",
      data: "Firebase Cloud Messaging 등록 토큰, 구독 주제, 알림 권한 상태, 기기·앱 정보",
      purpose: "앱 관련 알림 발송과 수신 상태 관리",
      retention:
        "알림 구독 해제, 앱 제거 또는 서비스 제공자의 정책에 따른 기간",
    },
    {
      category: "이메일 문의",
      data: "보낸 사람의 이메일 주소, 문의 내용 및 이용자가 자발적으로 제공한 정보",
      purpose: "문의 확인, 답변 및 처리 이력 관리",
      retention:
        "문의 처리 완료 후 1년. 법령상 보존 의무나 분쟁 대응 필요가 있으면 해당 기간까지 보관할 수 있습니다.",
    },
  ] satisfies PrivacyDataItem[],
  localData: [
    {
      category: "즐겨찾기",
      data: "즐겨찾은 사진·영상 정보와 저장 시각",
      purpose: "즐겨찾기 목록 제공",
      retention: "즐겨찾기 삭제, 앱 데이터 삭제 또는 앱 제거 시까지",
    },
    {
      category: "설정 및 식별 정보",
      data: "언어·알림 등 앱 설정, 광고 동의 상태, 앱이 생성한 임의 식별자, 커뮤니티 프로필 캐시",
      purpose: "설정 유지, 커뮤니티 및 광고 보상 기능 제공",
      retention: "설정 초기화, 앱 데이터 삭제 또는 앱 제거 시까지",
    },
    {
      category: "콘텐츠 및 캐시",
      data: "사진·영상·플레이리스트·갤러리·커뮤니티 목록과 이미지 캐시",
      purpose: "화면 표시, 로딩 속도 개선 및 데이터 사용량 절감",
      retention:
        "앱이 갱신·정리하거나 앱 데이터 삭제 또는 앱 제거 시까지. 기기 갤러리에 저장한 이미지는 이용자가 직접 삭제할 때까지 남습니다.",
    },
  ] satisfies PrivacyDataItem[],
  externalServices: [
    {
      provider: "Supabase, Inc.",
      service: "Supabase Database 및 Edge Functions",
      relationship: "개인정보 처리위탁",
      transferBasis:
        "서비스 제공에 필요한 처리위탁·보관(개인정보 보호법 제28조의8 제1항 제3호)",
      data: "앱이 생성한 식별자, 앱 구분값, 닉네임, 보석 잔액, 커뮤니티 활동, 신고·보상 거래 정보, IP 주소 등 네트워크 정보",
      purpose:
        "익명 커뮤니티 데이터 저장·처리, 광고 보상 지급, 중복 지급·부정 이용 방지",
      location: "미국 동부(버지니아 북부)",
      timingAndMethod:
        "커뮤니티 또는 광고 보상 기능을 이용할 때 암호화된 네트워크로 전송",
      retention:
        "본 방침의 항목별 보유기간 및 Supabase의 백업·서비스 정책에 따름",
      refusalAndEffect:
        "해당 기능을 사용하지 않으면 전송되지 않습니다. 전송을 거부하면 커뮤니티와 광고 보상 기능을 이용할 수 없습니다.",
      policyUrl: privacyLinks.supabasePrivacy,
    },
    {
      provider: "Google LLC",
      service: "Firebase, Google Mobile Ads, YouTube 내장 플레이어 및 Gmail",
      relationship: "개인정보 처리위탁 및 독립 서비스 제공자 처리",
      transferBasis:
        "서비스 제공에 필요한 국외 처리·보관, 관련 법령에 따른 동의 또는 이용자의 기능·문의 요청",
      data: "콘텐츠 요청, 앱·기기·운영체제·언어·네트워크·IP 정보, 이용·오류·알림 기록, 알림 토큰, 광고 식별자·동의·상호작용 정보, YouTube 재생 정보, 이메일 문의 내용",
      purpose:
        "콘텐츠 동기화, 이용 분석·기능 개선, 알림, 광고·보상, YouTube 재생 및 이메일 문의 답변",
      location: "미국을 포함한 Google 및 처리업체의 서비스 제공 국가",
      timingAndMethod:
        "관련 기능·광고·영상·이메일을 이용할 때 암호화된 네트워크 또는 이용자 기기에서 직접 전송",
      retention:
        "Google의 서비스 설정과 개인정보 보호정책에 따른 기간. 이메일 문의는 처리 완료 후 1년",
      refusalAndEffect:
        "알림·광고 설정을 변경하거나 영상·이메일 기능을 사용하지 않을 수 있습니다. 필요한 통신을 차단하면 해당 기능이 제한됩니다.",
      policyUrl: privacyLinks.googlePrivacy,
    },
  ] satisfies ExternalPrivacyService[],
} as const;
