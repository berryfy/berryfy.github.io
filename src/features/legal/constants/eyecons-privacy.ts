import type {
  ExternalPrivacyService,
  PrivacyDataItem,
  PrivacyNavigationItem,
} from "@/features/legal/types/privacy-policy";

export const eyeconsPrivacy = {
  appName: "EYEKONS Stan",
  packageName: "me.bluemiv.katseye_stan",
  businessName: "berryfy",
  contactEmail: "public.berryfy@gmail.com",
  effectiveDate: "2026년 7월 31일",
  navigation: [
    { id: "overview", label: "개요" },
    { id: "purpose", label: "처리 목적" },
    { id: "data", label: "처리 항목 및 기간" },
    { id: "collection", label: "수집 방법" },
    { id: "third-parties", label: "제3자 제공" },
    { id: "external-services", label: "외부 서비스 및 국외 처리" },
    { id: "deletion", label: "파기" },
    { id: "rights", label: "이용자 권리" },
    { id: "automatic", label: "자동 수집 및 거부" },
    { id: "security", label: "안전성 확보조치" },
    { id: "contact", label: "문의 및 권익구제" },
    { id: "changes", label: "방침 변경" },
  ] satisfies PrivacyNavigationItem[],
  serverData: [
    {
      category: "익명 계정",
      data: "앱이 생성한 기기 UUID, 앱 그룹, 시스템 언어, 계정 생성·수정 시각",
      purpose:
        "로그인 없는 익명 프로필 제공, 커뮤니티 이용자 구분, 서비스 상태 및 부정 이용 관리",
      retention:
        "계정 삭제 시까지. 계정 삭제가 완료되면 사용자와 연결된 서버 데이터를 영구 삭제합니다.",
    },
    {
      category: "선택 프로필",
      data: "닉네임, 선택형 계정 ID, 선택한 기본 아바타",
      purpose: "앱 내 프로필 표시와 커뮤니티 작성자 구분",
      retention: "계정 삭제 시까지 또는 이용자가 수정할 때까지",
    },
    {
      category: "커뮤니티 활동",
      data: "게시글·답글 내용, 좋아요, 신고 정보, 갤러리 사진·YouTube 영상 첨부 참조, 작성 시각, 커뮤니티 약관 동의 버전·시각",
      purpose:
        "커뮤니티 기능 제공, 게시물 표시, 신고 처리, 서비스 질서 유지 및 분쟁 대응",
      retention:
        "계정 삭제 또는 서비스 종료 시까지. 법령상 보존 의무나 분쟁 처리가 필요한 경우 해당 기간 동안 별도 보관할 수 있습니다.",
    },
    {
      category: "광고 보상",
      data: "기기 UUID, 광고 보상 거래 ID, 보상량, 처리 시각",
      purpose: "보상 지급, 일일 한도 확인 및 중복 지급·부정 이용 방지",
      retention:
        "계정 삭제 시 사용자 식별자 연결을 제거합니다. 식별자와 분리된 거래 ID는 중복 지급 방지에 필요한 기간 동안 보관될 수 있습니다.",
    },
    {
      category: "접속 및 오류 정보",
      data: "IP 주소, 요청 시각·주소, 네트워크 요청 정보, 오류 및 보안 이벤트가 서비스 제공 과정에서 일시적으로 처리될 수 있음",
      purpose: "콘텐츠 전송, 장애 대응, 보안 및 부정 이용 방지",
      retention:
        "서비스 제공과 보안 대응에 필요한 최소 기간 또는 각 인프라 제공자의 정책에 따른 기간",
    },
    {
      category: "이메일 문의",
      data: "보낸 사람의 이메일 주소, 문의 내용 및 이용자가 자발적으로 제공한 정보",
      purpose: "문의 확인, 답변 및 처리 이력 관리",
      retention:
        "문의 처리 완료 후 1년. 이용자가 삭제를 요청하거나 보관 필요성이 사라지면 더 일찍 삭제합니다.",
    },
  ] satisfies PrivacyDataItem[],
  localData: [
    {
      category: "즐겨찾기",
      data: "즐겨찾은 사진·영상의 ID와 표시용 정보, 저장 시각",
      purpose: "즐겨찾기와 오프라인 목록 제공",
      retention: "즐겨찾기 삭제, 앱 데이터 삭제 또는 앱 제거 시까지",
    },
    {
      category: "설정 및 동의",
      data: "언어 설정, 개인정보처리방침·커뮤니티 약관 동의 버전, 광고 동의 상태",
      purpose: "선택한 설정 유지와 동의 상태 확인",
      retention: "설정 초기화, 앱 데이터 삭제 또는 앱 제거 시까지",
    },
    {
      category: "캐시",
      data: "사진·영상·플레이리스트·커뮤니티 목록과 이미지 캐시",
      purpose: "빠른 화면 표시, 데이터 사용량 절감 및 오프라인 대응",
      retention:
        "항목별 캐시 기간이 지나거나 앱이 갱신·정리할 때까지. 앱 데이터 삭제 또는 앱 제거로 직접 삭제할 수 있습니다.",
    },
  ] satisfies PrivacyDataItem[],
  externalServices: [
    {
      provider: "Google LLC",
      service: "Google Mobile Ads SDK 및 User Messaging Platform",
      data: "광고 기능이 활성화된 경우 IP 주소, 앱 실행·탭·광고 조회 등 상호작용, 진단 정보, 광고 ID·앱 세트 ID 등 기기 식별자, 광고 동의 정보",
      purpose: "광고 제공, 동의 관리, 광고 성과 측정, 분석 및 부정행위 방지",
      location: "미국을 포함한 Google 및 처리업체의 서비스 제공 국가",
      timingAndMethod: "앱 실행·광고 요청·상호작용 시 암호화된 네트워크로 전송",
      retention: "Google의 개인정보처리방침 및 서비스 설정에 따름",
      policyUrl: "https://policies.google.com/privacy",
    },
    {
      provider: "Google LLC",
      service: "YouTube API Services 및 내장 YouTube 플레이어",
      data: "공개 영상·채널·플레이리스트 정보, IP 주소, 기기·네트워크·쿠키 정보, 재생 및 이용 상호작용이 Google에 의해 처리될 수 있음",
      purpose: "YouTube 공개 콘텐츠 조회와 영상 재생",
      location: "미국을 포함한 Google 및 처리업체의 서비스 제공 국가",
      timingAndMethod:
        "영상 목록 조회·플레이어 로드·재생 시 암호화된 네트워크로 전송",
      retention: "Google의 개인정보처리방침 및 YouTube 서비스 정책에 따름",
      policyUrl: "https://policies.google.com/privacy",
    },
    {
      provider: "Cloudflare, Inc.",
      service: "Cloudflare Workers, D1 및 R2",
      data: "기기 UUID, 선택 프로필, 커뮤니티 활동, 광고 보상 기록, 콘텐츠 요청 정보 및 IP 주소 등 네트워크 정보",
      purpose:
        "앱 API 제공, 익명 계정·커뮤니티 데이터 저장, 콘텐츠 전송, 보안 및 장애 대응",
      location:
        "미국 및 Cloudflare 글로벌 인프라. D1 데이터 위치는 서비스 설정과 자동 배치에 따라 달라질 수 있음",
      timingAndMethod: "앱에서 서버 기능을 이용할 때 암호화된 네트워크로 전송",
      retention:
        "본 방침의 항목별 보유기간 및 Cloudflare의 서비스·개인정보 보호정책에 따름",
      policyUrl: "https://www.cloudflare.com/privacypolicy/",
    },
    {
      provider: "Google LLC",
      service: "Gmail",
      data: "문의자의 이메일 주소, 문의 내용 및 첨부 정보",
      purpose: "개인정보 문의와 이용자 요청 접수·답변",
      location: "미국을 포함한 Google 및 처리업체의 서비스 제공 국가",
      timingAndMethod: "이용자가 이메일을 보낼 때 암호화된 네트워크로 전송",
      retention: "문의 처리 완료 후 1년 및 Google의 개인정보처리방침에 따름",
      policyUrl: "https://policies.google.com/privacy",
    },
  ] satisfies ExternalPrivacyService[],
} as const;
