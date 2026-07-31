import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Mail,
  Server,
  ShieldCheck,
  Smartphone,
  Trash2,
} from "lucide-react";

import BrandMark from "@/features/home/components/brand-mark";
import { eyeconsPrivacy } from "@/features/legal/constants/eyecons-privacy";
import type {
  ExternalPrivacyService,
  PrivacyDataItem,
} from "@/features/legal/types/privacy-policy";

interface SectionHeadingProps {
  number: string;
  title: string;
  id: string;
  children: React.ReactNode;
}

function SectionHeading({ number, title, id, children }: SectionHeadingProps) {
  return (
    <section id={id} className="scroll-mt-28 border-t border-border pt-10">
      <div className="mb-6 flex items-start gap-3">
        <span className="mt-1 font-mono text-xs font-semibold text-primary">
          {number}
        </span>
        <h2 className="text-2xl font-semibold tracking-[-0.04em] text-foreground sm:text-3xl">
          {title}
        </h2>
      </div>
      <div className="legal-copy pl-0 sm:pl-8">{children}</div>
    </section>
  );
}

function DataTable({
  items,
  firstColumnLabel = "구분",
}: {
  items: readonly PrivacyDataItem[];
  firstColumnLabel?: string;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-white/70">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] border-collapse text-left text-sm">
          <thead className="bg-secondary/55 text-foreground">
            <tr>
              <th className="w-[16%] px-4 py-3.5 font-semibold">
                {firstColumnLabel}
              </th>
              <th className="w-[28%] px-4 py-3.5 font-semibold">처리 항목</th>
              <th className="w-[28%] px-4 py-3.5 font-semibold">처리 목적</th>
              <th className="w-[28%] px-4 py-3.5 font-semibold">보유 기간</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.category} className="border-t border-border/70">
                <th className="px-4 py-4 align-top font-semibold text-foreground">
                  {item.category}
                </th>
                <td className="px-4 py-4 align-top leading-6 text-muted-foreground">
                  {item.data}
                </td>
                <td className="px-4 py-4 align-top leading-6 text-muted-foreground">
                  {item.purpose}
                </td>
                <td className="px-4 py-4 align-top leading-6 text-muted-foreground">
                  {item.retention}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ExternalServiceCard({ service }: { service: ExternalPrivacyService }) {
  return (
    <article className="rounded-2xl border border-border bg-white/70 p-5 sm:p-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs font-semibold tracking-[0.14em] text-primary uppercase">
            {service.provider}
          </p>
          <h3 className="mt-1 text-lg font-semibold tracking-[-0.025em] text-foreground">
            {service.service}
          </h3>
        </div>
        <a
          href={service.policyUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary underline-offset-4 hover:underline"
        >
          제공자 정책
          <ExternalLink className="size-3.5" aria-hidden="true" />
        </a>
      </div>
      <dl className="mt-5 grid gap-4 text-sm sm:grid-cols-2">
        <div>
          <dt className="font-semibold text-foreground">처리 항목</dt>
          <dd className="mt-1.5 leading-6 text-muted-foreground">
            {service.data}
          </dd>
        </div>
        <div>
          <dt className="font-semibold text-foreground">목적</dt>
          <dd className="mt-1.5 leading-6 text-muted-foreground">
            {service.purpose}
          </dd>
        </div>
        <div>
          <dt className="font-semibold text-foreground">처리 국가·지역</dt>
          <dd className="mt-1.5 leading-6 text-muted-foreground">
            {service.location}
          </dd>
        </div>
        <div>
          <dt className="font-semibold text-foreground">시점·방법</dt>
          <dd className="mt-1.5 leading-6 text-muted-foreground">
            {service.timingAndMethod}
          </dd>
        </div>
        <div className="sm:col-span-2">
          <dt className="font-semibold text-foreground">보유 및 이용기간</dt>
          <dd className="mt-1.5 leading-6 text-muted-foreground">
            {service.retention}
          </dd>
        </div>
      </dl>
    </article>
  );
}

export default function EyeconsPrivacyPage() {
  const policy = eyeconsPrivacy;

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-[1320px] items-center justify-between px-5 sm:px-8 lg:px-10">
          <BrandMark href="/" />
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:bg-white hover:text-foreground focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            홈으로
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-[1320px] px-5 py-14 sm:px-8 sm:py-20 lg:px-10">
        <div className="max-w-[900px]">
          <p className="text-sm font-semibold tracking-[0.16em] text-primary uppercase">
            {policy.appName}
          </p>
          <h1 className="mt-4 text-[clamp(2.8rem,7vw,5.8rem)] leading-[0.98] font-semibold tracking-[-0.065em] text-foreground">
            개인정보 처리방침
          </h1>
          <p className="mt-7 max-w-[760px] text-lg leading-8 text-muted-foreground">
            berryfy는 이용자의 개인정보를 필요한 범위에서만 처리하고, 어떤
            정보가 왜 사용되는지 쉽게 이해할 수 있도록 안내합니다.
          </p>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-3">
          <div className="rounded-2xl border border-border bg-white/70 p-5">
            <p className="text-xs font-semibold text-muted-foreground">
              앱 이름
            </p>
            <p className="mt-2 font-semibold text-foreground">
              {policy.appName}
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-white/70 p-5">
            <p className="text-xs font-semibold text-muted-foreground">
              사업자명
            </p>
            <p className="mt-2 font-semibold text-foreground">
              {policy.businessName}
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-white/70 p-5">
            <p className="text-xs font-semibold text-muted-foreground">
              시행일
            </p>
            <p className="mt-2 font-semibold text-foreground">
              {policy.effectiveDate}
            </p>
          </div>
        </div>

        <div className="mt-14 grid items-start gap-12 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-16">
          <aside className="lg:sticky lg:top-28">
            <nav aria-label="개인정보 처리방침 목차">
              <p className="mb-3 text-xs font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                목차
              </p>
              <ol className="grid grid-cols-2 gap-x-4 gap-y-1 sm:grid-cols-3 lg:grid-cols-1">
                {policy.navigation.map((item, index) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="flex rounded-lg py-1.5 text-sm leading-5 text-muted-foreground transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
                    >
                      <span className="mr-2 font-mono text-[0.68rem] text-primary/70">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
            <a
              href={`mailto:${policy.contactEmail}`}
              className="mt-7 hidden items-center gap-2 rounded-xl border border-border bg-white/70 px-3.5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/30 hover:text-primary lg:flex"
            >
              <Mail className="size-4" aria-hidden="true" />
              개인정보 문의
            </a>
          </aside>

          <article className="space-y-12">
            <section
              id="overview"
              className="scroll-mt-28 rounded-[2rem] bg-[#2d1c32] p-6 text-white sm:p-8"
            >
              <div className="flex size-11 items-center justify-center rounded-2xl bg-[#ff668f]">
                <ShieldCheck aria-hidden="true" />
              </div>
              <h2 className="mt-6 text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">
                먼저 알려드리는 핵심 내용
              </h2>
              <ul className="mt-5 space-y-3 text-[0.95rem] leading-7 text-white/72">
                <li>
                  • 회원가입이나 Google 로그인을 요구하지 않으며,
                  이름·전화번호·주소를 직접 수집하지 않습니다.
                </li>
                <li>
                  • 커뮤니티 또는 광고 보상 기능을 사용할 때 앱이 만든 익명 기기
                  UUID가 계정 구분에 사용됩니다.
                </li>
                <li>
                  • 즐겨찾기와 대부분의 설정은 기기에만 저장되며 서버로
                  동기화하지 않습니다.
                </li>
                <li>
                  • YouTube와 광고 기능에서는 Google이 기기·네트워크·이용 정보를
                  자체 정책에 따라 처리할 수 있습니다.
                </li>
              </ul>
              <p className="mt-6 border-t border-white/10 pt-5 text-sm leading-6 text-white/55">
                {policy.appName}은 KATSEYE 및 관련 회사와 제휴하거나 공식 승인을
                받은 서비스가 아닌 독립적인 팬 앱입니다.
              </p>
            </section>

            <SectionHeading
              number="02"
              title="개인정보의 처리 목적"
              id="purpose"
            >
              <p>
                berryfy는 다음 목적에 필요한 범위에서만 개인정보를 처리합니다.
                처리한 정보는 아래 목적 이외로 사용하지 않으며, 목적이 변경되는
                경우 관련 법령에 따라 별도 안내 또는 동의를 진행합니다.
              </p>
              <ul>
                <li>익명 프로필과 커뮤니티 게시글·답글·좋아요 기능 제공</li>
                <li>사진·영상·플레이리스트 등 앱 콘텐츠 제공</li>
                <li>보상형 광고 보상 지급과 중복 지급·부정 이용 방지</li>
                <li>앱 설정 유지, 오류 대응, 보안 및 서비스 안정성 확보</li>
                <li>개인정보 문의, 데이터 열람·정정·삭제 요청 처리</li>
              </ul>
            </SectionHeading>

            <SectionHeading
              number="03"
              title="처리하는 개인정보 항목과 보유기간"
              id="data"
            >
              <div className="mb-7 flex items-start gap-3 rounded-2xl bg-secondary/55 p-4">
                <Server
                  className="mt-0.5 size-5 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <p className="m-0 text-sm leading-6">
                  앱을 실행하는 것만으로 익명 계정을 서버에 만들지 않습니다.
                  프로필 동기화, 커뮤니티 작성·좋아요 또는 광고 보상처럼 서버
                  기능이 필요한 시점에만 기기 UUID가 생성·전송될 수 있습니다.
                </p>
              </div>
              <h3>서버 또는 문의 채널에서 처리하는 정보</h3>
              <DataTable items={policy.serverData} />

              <div className="mt-9 flex items-start gap-3 rounded-2xl bg-[#e5f8f0] p-4">
                <Smartphone
                  className="mt-0.5 size-5 shrink-0 text-[#277a59]"
                  aria-hidden="true"
                />
                <p className="m-0 text-sm leading-6 text-[#285c49]">
                  아래 정보는 원칙적으로 이용자의 기기에만 저장됩니다. 앱 데이터
                  삭제나 앱 제거를 통해 직접 삭제할 수 있습니다.
                </p>
              </div>
              <h3>기기에만 저장하는 정보</h3>
              <DataTable items={policy.localData} />
            </SectionHeading>

            <SectionHeading
              number="04"
              title="개인정보의 수집 방법"
              id="collection"
            >
              <ul>
                <li>앱에서 프로필·게시글·답글·좋아요·신고 기능을 이용할 때</li>
                <li>
                  앱이 최초 익명 식별용 UUID를 기기에서 무작위로 생성할 때
                </li>
                <li>YouTube 플레이어, 광고 SDK 및 서버 API가 동작할 때</li>
                <li>이용자가 개인정보 문의 이메일을 보낼 때</li>
              </ul>
              <p>
                앱은 연락처, 문자, 통화 기록, 정확한 위치, 사진 보관함 전체에
                대한 권한을 요청하지 않습니다. 커뮤니티에 첨부하는 항목은 앱이
                제공하는 갤러리 사진 또는 YouTube 영상의 참조 정보입니다.
              </p>
            </SectionHeading>

            <SectionHeading
              number="05"
              title="개인정보의 제3자 제공"
              id="third-parties"
            >
              <p>
                berryfy는 이용자의 개인정보를 판매하지 않으며, 원칙적으로
                이용자의 동의 없이 별도의 제3자에게 제공하지 않습니다. 다만
                법령에 특별한 규정이 있거나 수사기관 등이 적법한 절차에 따라
                요청하는 경우에는 필요한 범위에서 제공할 수 있습니다.
              </p>
              <p>
                Google과 Cloudflare가 서비스 제공 과정에서 직접 처리하는 정보는
                다음 항목에 구체적으로 안내합니다.
              </p>
            </SectionHeading>

            <SectionHeading
              number="06"
              title="외부 서비스 이용 및 국외 처리"
              id="external-services"
            >
              <p>
                앱은 영상 재생, 광고, 서버 및 이메일 문의 제공을 위해 아래 외부
                서비스를 사용합니다. 이 과정에서 정보가 국외에서 처리될 수
                있습니다. 외부 제공자는 각자의 개인정보 보호정책에 따라 정보를
                처리합니다.
              </p>
              <div className="mt-6 space-y-4">
                {policy.externalServices.map((service) => (
                  <ExternalServiceCard
                    key={`${service.provider}-${service.service}`}
                    service={service}
                  />
                ))}
              </div>
              <div className="mt-6 rounded-2xl border border-primary/15 bg-primary/[0.045] p-5 text-sm leading-7 text-muted-foreground">
                <p className="m-0">
                  YouTube 기능은 공개 영상 정보를 조회하고 내장 플레이어로
                  재생하는 데 사용됩니다. 앱은 이용자의 YouTube 계정 로그인을
                  요구하거나 YouTube 로그인 정보·비밀번호·개인 재생 기록을
                  berryfy 서버에 저장하지 않습니다.
                </p>
                <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
                  <a
                    href="https://www.youtube.com/t/terms"
                    target="_blank"
                    rel="noreferrer"
                  >
                    YouTube 이용약관
                  </a>
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Google 개인정보처리방침
                  </a>
                  <a
                    href="https://security.google.com/settings/security/permissions"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Google 연결 권한 관리
                  </a>
                </div>
              </div>
            </SectionHeading>

            <SectionHeading number="07" title="개인정보의 파기" id="deletion">
              <div className="flex items-start gap-3 rounded-2xl bg-secondary/55 p-5">
                <Trash2
                  className="mt-0.5 size-5 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <div>
                  <p className="m-0 font-semibold text-foreground">
                    목적이 끝난 정보는 지체 없이 삭제합니다.
                  </p>
                  <p className="mt-2 mb-0 text-sm leading-6">
                    전자 파일은 복구하기 어려운 방식으로 삭제하고, 데이터베이스
                    정보는 해당 레코드를 삭제합니다. 외부 제공자의 백업에 남은
                    정보는 각 제공자의 백업 보존 주기에 따라 삭제됩니다.
                  </p>
                </div>
              </div>
              <p>
                계정 삭제가 완료되면 익명 프로필과 연결된
                게시글·답글·좋아요·첨부 및 보상 정보가 영구 삭제되거나 사용자
                식별자와 분리됩니다. 기기에 저장된 즐겨찾기·설정·캐시는 Android
                설정에서 앱 데이터를 삭제하거나 앱을 제거하여 삭제할 수
                있습니다.
              </p>
            </SectionHeading>

            <SectionHeading
              number="08"
              title="이용자와 법정대리인의 권리 및 행사 방법"
              id="rights"
            >
              <p>
                이용자는 자신의 개인정보에 대해 열람, 정정, 삭제, 처리정지를
                요청할 수 있습니다. 앱의 프로필 편집 화면에서 닉네임·계정
                ID·아바타를 변경하거나 계정을 직접 삭제할 수 있습니다.
              </p>
              <ol>
                <li>
                  앱에서 처리: <strong>프로필 → 프로필 편집 → 계정 삭제</strong>
                </li>
                <li>
                  이메일로 요청: 앱의 <strong>앱 정보 → 삭제 요청 ID</strong>를
                  복사해 아래 이메일로 보내주세요.
                </li>
              </ol>
              <a
                href={`mailto:${policy.contactEmail}?subject=EYEKONS%20Stan%20개인정보%20요청`}
                className="not-prose mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(217,45,99,0.2)] transition-colors hover:bg-[#c92559]"
              >
                <Mail className="size-4" aria-hidden="true" />
                {policy.contactEmail}
              </a>
              <p className="text-sm">
                본인 확인이 필요한 경우 앱에 표시되는 삭제 요청 ID 등 최소한의
                정보만 요청합니다. 권리 행사는 법정대리인 또는 적법한 위임을
                받은 사람을 통해서도 할 수 있습니다.
              </p>
            </SectionHeading>

            <SectionHeading
              number="09"
              title="자동 수집 정보와 선택 거부 방법"
              id="automatic"
            >
              <p>
                EYEKONS Stan 자체는 웹 쿠키를 설치하지 않습니다. 다만 내장
                YouTube 플레이어와 Google 광고 서비스는 쿠키 또는 유사 기술,
                광고 ID, 기기·이용 정보를 처리할 수 있습니다.
              </p>
              <ul>
                <li>
                  광고 동의가 필요한 지역에서는 Google UMP 동의 화면을 제공하고,
                  필요한 경우 앱 정보의 광고 개인정보 설정에서 선택을 변경할 수
                  있습니다.
                </li>
                <li>
                  Android 설정의 광고 개인정보 보호 메뉴에서 광고 ID를
                  재설정하거나 삭제할 수 있습니다.
                </li>
                <li>
                  광고 요청에 동의하지 않거나 광고가 비활성화되어도 사진·영상 등
                  기본 콘텐츠는 이용할 수 있으나 광고 보상 기능은 제한될 수
                  있습니다.
                </li>
              </ul>
            </SectionHeading>

            <SectionHeading
              number="10"
              title="개인정보의 안전성 확보조치"
              id="security"
            >
              <ul>
                <li>앱과 서버 간 통신에 HTTPS/TLS 암호화 적용</li>
                <li>
                  실명 로그인 대신 무작위 익명 UUID를 사용해 직접 식별정보
                  최소화
                </li>
                <li>
                  서버 응답에서 내부 기기 UUID를 다른 이용자에게 공개하지 않음
                </li>
                <li>
                  데이터 접근 권한 제한과 공개 쓰기 요청에 대한 검증·속도 제한
                </li>
                <li>Android 백업에서 앱 데이터가 복사되지 않도록 제한</li>
              </ul>
              <p>
                이용자는 기기 잠금과 최신 운영체제를 사용하고, 삭제 요청 ID를
                공개된 게시물에 올리지 않는 등 개인정보 보호에 협조해 주세요.
              </p>
            </SectionHeading>

            <SectionHeading
              number="11"
              title="개인정보 보호 담당 및 권익침해 구제"
              id="contact"
            >
              <div className="rounded-2xl border border-border bg-white/70 p-5 sm:p-6">
                <dl className="grid gap-4 text-sm sm:grid-cols-2">
                  <div>
                    <dt className="font-semibold text-muted-foreground">
                      사업자 및 담당부서
                    </dt>
                    <dd className="mt-1.5 font-semibold text-foreground">
                      {policy.businessName}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-muted-foreground">
                      이메일
                    </dt>
                    <dd className="mt-1.5">
                      <a href={`mailto:${policy.contactEmail}`}>
                        {policy.contactEmail}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-muted-foreground">
                      대상 앱
                    </dt>
                    <dd className="mt-1.5 text-foreground">{policy.appName}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-muted-foreground">
                      패키지명
                    </dt>
                    <dd className="mt-1.5 font-mono text-xs text-foreground">
                      {policy.packageName}
                    </dd>
                  </div>
                </dl>
              </div>
              <p>
                개인정보 침해에 대한 추가 상담이나 분쟁조정이 필요한 경우 아래
                기관을 이용할 수 있습니다.
              </p>
              <ul>
                <li>
                  개인정보침해 신고센터:{" "}
                  <a href="https://privacy.kisa.or.kr/">privacy.kisa.or.kr</a> ·
                  국번 없이 118
                </li>
                <li>
                  개인정보분쟁조정위원회:{" "}
                  <a href="https://www.kopico.go.kr/">www.kopico.go.kr</a> ·
                  1833-6972
                </li>
                <li>
                  대검찰청: <a href="https://www.spo.go.kr/">www.spo.go.kr</a> ·
                  국번 없이 1301
                </li>
                <li>
                  경찰청 사이버범죄 신고시스템:{" "}
                  <a href="https://ecrm.police.go.kr/">ecrm.police.go.kr</a> ·
                  국번 없이 182
                </li>
              </ul>
            </SectionHeading>

            <SectionHeading
              number="12"
              title="개인정보 처리방침의 변경"
              id="changes"
            >
              <p>
                이 방침은 {policy.effectiveDate}부터 적용됩니다. 앱 기능이나
                개인정보 처리 방식이 바뀌는 경우 시행 전에 이 페이지 또는 앱 내
                알림을 통해 변경 내용을 안내합니다. 중요한 변경으로 별도 동의가
                필요한 경우에는 관련 법령에 따라 동의를 받습니다.
              </p>
              <div className="not-prose mt-6 rounded-2xl border border-border bg-white/60 p-5 text-sm leading-6 text-muted-foreground">
                <p className="font-semibold text-foreground">작성 기준</p>
                <div className="mt-3 flex flex-col gap-2">
                  <a
                    href="https://www.pipc.go.kr/np/cop/bbs/selectBoardArticle.do?bbsId=BS217&mCode=G010030000&nttId=11134"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 hover:text-primary"
                  >
                    개인정보보호위원회 개인정보 처리방침 작성지침
                    <ExternalLink className="size-3.5" aria-hidden="true" />
                  </a>
                  <a
                    href="https://support.google.com/googleplay/android-developer/answer/9859455?hl=ko"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 hover:text-primary"
                  >
                    Google Play 개인정보처리방침 안내
                    <ExternalLink className="size-3.5" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </SectionHeading>
          </article>
        </div>
      </main>

      <footer className="border-t border-border/70 bg-white/45">
        <div className="mx-auto flex max-w-[1320px] flex-col gap-2 px-5 py-8 text-xs text-muted-foreground sm:px-8 lg:px-10">
          <p>© 2026 berryfy. All rights reserved.</p>
          <a href={`mailto:${policy.contactEmail}`}>{policy.contactEmail}</a>
        </div>
      </footer>
    </div>
  );
}
