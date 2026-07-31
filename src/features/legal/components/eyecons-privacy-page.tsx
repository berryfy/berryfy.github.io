import Link from "next/link";

import { siteConfig } from "@/constants/site";
import { eyeconsPrivacy } from "@/features/legal/constants/eyecons-privacy";
import { privacyLinks } from "@/features/legal/constants/privacy-links";
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
    <section id={id} className="scroll-mt-20 border-t border-neutral-200 pt-8">
      <h2 className="text-xl font-bold text-neutral-900">
        {number}. {title}
      </h2>
      <div className="legal-copy mt-4">{children}</div>
    </section>
  );
}

function DataTable({ items }: { items: readonly PrivacyDataItem[] }) {
  return (
    <>
      <div className="grid gap-3 sm:grid-cols-2 lg:hidden">
        {items.map((item) => (
          <section
            key={item.category}
            className="border border-neutral-300 p-4"
          >
            <h4 className="font-bold text-neutral-900">{item.category}</h4>
            <dl className="mt-3 space-y-3 text-sm">
              <div>
                <dt className="font-semibold text-neutral-900">처리 항목</dt>
                <dd className="mt-1 leading-6 break-words text-neutral-700">
                  {item.data}
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-neutral-900">처리 목적</dt>
                <dd className="mt-1 leading-6 break-words text-neutral-700">
                  {item.purpose}
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-neutral-900">보유 기간</dt>
                <dd className="mt-1 leading-6 break-words text-neutral-700">
                  {item.retention}
                </dd>
              </div>
            </dl>
          </section>
        ))}
      </div>

      <div className="hidden overflow-x-auto border border-neutral-300 lg:block">
        <table className="w-full border-collapse text-left text-sm">
          <thead className="bg-neutral-100 text-neutral-900">
            <tr>
              <th className="w-[17%] border-b border-neutral-300 px-3 py-3 font-semibold">
                구분
              </th>
              <th className="w-[28%] border-b border-neutral-300 px-3 py-3 font-semibold">
                처리 항목
              </th>
              <th className="w-[27%] border-b border-neutral-300 px-3 py-3 font-semibold">
                처리 목적
              </th>
              <th className="w-[28%] border-b border-neutral-300 px-3 py-3 font-semibold">
                보유 기간
              </th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.category} className="border-t border-neutral-200">
                <th className="px-3 py-3 align-top font-semibold text-neutral-900">
                  {item.category}
                </th>
                <td className="px-3 py-3 align-top leading-6 text-neutral-700">
                  {item.data}
                </td>
                <td className="px-3 py-3 align-top leading-6 text-neutral-700">
                  {item.purpose}
                </td>
                <td className="px-3 py-3 align-top leading-6 text-neutral-700">
                  {item.retention}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

function ExternalService({ service }: { service: ExternalPrivacyService }) {
  return (
    <section className="border border-neutral-300 p-4">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="text-base font-bold text-neutral-900">
          {service.provider} — {service.service}
        </h3>
        <a
          href={service.policyUrl}
          target="_blank"
          rel="noreferrer"
          className="text-sm text-neutral-700 underline underline-offset-2"
        >
          제공자 정책
        </a>
      </div>
      <dl className="mt-4 grid gap-x-6 gap-y-3 text-sm sm:grid-cols-2">
        <div>
          <dt className="font-semibold text-neutral-900">처리 관계</dt>
          <dd className="mt-1 leading-6 break-words text-neutral-700">
            {service.relationship}
          </dd>
        </div>
        <div>
          <dt className="font-semibold text-neutral-900">국외 처리 근거</dt>
          <dd className="mt-1 leading-6 break-words text-neutral-700">
            {service.transferBasis}
          </dd>
        </div>
        <div>
          <dt className="font-semibold text-neutral-900">처리 항목</dt>
          <dd className="mt-1 leading-6 break-words text-neutral-700">
            {service.data}
          </dd>
        </div>
        <div>
          <dt className="font-semibold text-neutral-900">목적</dt>
          <dd className="mt-1 leading-6 break-words text-neutral-700">
            {service.purpose}
          </dd>
        </div>
        <div>
          <dt className="font-semibold text-neutral-900">처리 국가·지역</dt>
          <dd className="mt-1 leading-6 break-words text-neutral-700">
            {service.location}
          </dd>
        </div>
        <div>
          <dt className="font-semibold text-neutral-900">시점·방법</dt>
          <dd className="mt-1 leading-6 break-words text-neutral-700">
            {service.timingAndMethod}
          </dd>
        </div>
        <div>
          <dt className="font-semibold text-neutral-900">보유 및 이용기간</dt>
          <dd className="mt-1 leading-6 break-words text-neutral-700">
            {service.retention}
          </dd>
        </div>
        <div>
          <dt className="font-semibold text-neutral-900">거부 방법 및 영향</dt>
          <dd className="mt-1 leading-6 break-words text-neutral-700">
            {service.refusalAndEffect}
          </dd>
        </div>
      </dl>
    </section>
  );
}

export default function EyeconsPrivacyPage() {
  const policy = eyeconsPrivacy;
  const privacyRequestMailto = `mailto:${policy.contactEmail}?subject=${encodeURIComponent(`${policy.appName} 개인정보 요청`)}`;

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <header className="border-b border-neutral-200">
        <div className="mx-auto flex max-w-[900px] items-center justify-between px-4 py-4 sm:px-8">
          <Link
            href={siteConfig.routes.home}
            className="font-semibold text-neutral-900"
          >
            berryfy
          </Link>
          <Link
            href={siteConfig.routes.home}
            className="text-sm text-neutral-600 underline underline-offset-2"
          >
            홈으로
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-[900px] px-4 py-8 sm:px-8 sm:py-12 lg:py-14">
        <header>
          <p className="text-sm text-neutral-600">{policy.appName}</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
            개인정보 처리방침
          </h1>
          <p className="mt-4 max-w-[720px] leading-7 text-neutral-700">
            {policy.businessName}는 이용자의 개인정보를 필요한 범위에서만
            처리하고, 처리 항목과 목적을 아래와 같이 안내합니다.
          </p>
          <dl className="mt-6 grid gap-2 border-y border-neutral-200 py-4 text-sm sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <dt className="inline font-semibold">앱: </dt>
              <dd className="inline">{policy.appName}</dd>
            </div>
            <div>
              <dt className="inline font-semibold">사업자: </dt>
              <dd className="inline">{policy.businessName}</dd>
            </div>
            <div>
              <dt className="inline font-semibold">시행일: </dt>
              <dd className="inline">{policy.effectiveDate}</dd>
            </div>
          </dl>
        </header>

        <nav className="mt-8" aria-label="개인정보 처리방침 목차">
          <h2 className="text-sm font-bold">목차</h2>
          <ol className="mt-3 grid gap-x-6 gap-y-2 text-sm sm:grid-cols-2 lg:grid-cols-3">
            {policy.navigation.map((item, index) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="text-neutral-700 underline underline-offset-2"
                >
                  {index + 1}. {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <article className="mt-10 space-y-10">
          <section id="overview" className="scroll-mt-20 bg-neutral-100 p-5">
            <h2 className="text-lg font-bold">1. 핵심 안내</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-neutral-700">
              <li>
                회원가입이나 Google 로그인을 요구하지 않으며,
                이름·전화번호·주소·연락처·정확한 위치를 앱에서 입력하도록
                요구하지 않습니다.
              </li>
              <li>
                커뮤니티 또는 광고 보상 기능을 사용할 때 앱이 무작위로 만든
                식별자가 이용자 구분에 사용됩니다. Android 기기 고유번호는
                사용하지 않습니다.
              </li>
              <li>
                즐겨찾기와 대부분의 설정은 기기에만 저장되며 서버로 동기화하지
                않습니다.
              </li>
              <li>
                Firebase, Supabase, Google 광고 및 YouTube 기능을 이용하는
                과정에서 기기·네트워크·이용 정보가 국외에서 처리될 수 있습니다.
              </li>
            </ul>
          </section>

          <SectionHeading number="2" title="개인정보의 처리 목적" id="purpose">
            <p>
              {policy.businessName}는 다음 목적에 필요한 범위에서만 개인정보를
              처리합니다. 처리한 정보는 아래 목적 이외로 사용하지 않으며, 목적이
              변경되는 경우 관련 법령에 따라 별도 안내 또는 동의를 진행합니다.
            </p>
            <ul>
              <li>익명 프로필과 커뮤니티 게시글·답글·좋아요 기능 제공</li>
              <li>사진·영상·플레이리스트 등 앱 콘텐츠 제공</li>
              <li>보상형 광고 보상 지급과 중복 지급·부정 이용 방지</li>
              <li>앱 이용 현황 분석, 알림 제공, 오류 대응과 기능 개선</li>
              <li>앱 설정 유지, 보안 및 서비스 안정성 확보</li>
              <li>개인정보 문의, 데이터 열람·정정·삭제 요청 처리</li>
            </ul>
          </SectionHeading>

          <SectionHeading
            number="3"
            title="처리하는 개인정보 항목과 보유기간"
            id="data"
          >
            <p>
              회원가입 계정은 만들지 않습니다. 커뮤니티 또는 광고 보상 기능을
              이용하면 앱이 무작위로 만든 식별자와 필요한 정보가 서버로
              전송됩니다. Firebase Analytics 등 외부 SDK는 앱 실행과 기능 이용
              정보를 자동으로 처리할 수 있습니다.
            </p>
            <h3>서버 또는 문의 채널에서 처리하는 정보</h3>
            <DataTable items={policy.serverData} />
            <p>
              아래 정보는 원칙적으로 이용자의 기기에만 저장됩니다. 앱 데이터
              삭제나 앱 제거를 통해 직접 삭제할 수 있습니다.
            </p>
            <h3>기기에만 저장하는 정보</h3>
            <DataTable items={policy.localData} />
          </SectionHeading>

          <SectionHeading
            number="4"
            title="개인정보의 수집 방법"
            id="collection"
          >
            <ul>
              <li>앱에서 프로필·게시글·답글·좋아요·신고 기능을 이용할 때</li>
              <li>앱이 이용자 구분용 임의 식별자를 무작위로 생성할 때</li>
              <li>
                Firebase, Supabase, YouTube 플레이어 및 광고 SDK가 동작할 때
              </li>
              <li>이용자가 개인정보 문의 이메일을 보낼 때</li>
            </ul>
            <p>
              앱은 연락처, 문자, 통화 기록, 정확한 위치 권한을 요청하지
              않습니다. Android 버전에 따라 앱이 제공하는 이미지를 기기 갤러리에
              저장하기 위한 저장소 권한과 알림 권한을 요청할 수 있습니다.
            </p>
            <p>
              커뮤니티 게시글과 댓글은 다른 이용자에게 공개됩니다. 이용자는
              게시물에 자신의 개인정보나 민감한 정보를 작성하지 않아야 합니다.
              게시물이 숨김 처리되기 전에 다른 이용자가 복사·저장한 정보까지
              {policy.businessName}가 회수하거나 삭제할 수는 없습니다.
            </p>
          </SectionHeading>

          <SectionHeading
            number="5"
            title="개인정보의 제3자 제공"
            id="third-parties"
          >
            <p>
              {policy.businessName}는 이용자의 개인정보를 판매하지 않으며,
              원칙적으로 이용자의 동의 없이 별도의 제3자에게 제공하지 않습니다.
              다만 법령에 특별한 규정이 있거나 수사기관 등이 적법한 절차에 따라
              요청하는 경우에는 필요한 범위에서 제공할 수 있습니다.
            </p>
            <p>
              서비스 운영을 위해 위탁하거나 외부 제공자가 직접 처리하는 정보는
              다음 항목에 구체적으로 안내합니다.
            </p>
          </SectionHeading>

          <SectionHeading
            number="6"
            title="개인정보 처리위탁 및 국외 처리"
            id="external-services"
          >
            <p>
              앱은 콘텐츠·커뮤니티·분석·알림·광고·영상 재생·이메일 문의를
              제공하기 위해 아래 서비스를 사용합니다. 필요한 정보는 국외로
              전송되어 처리될 수 있으며, 각 제공자는 계약과 자체 개인정보
              보호정책에 따라 정보를 처리합니다.
            </p>
            <p>
              외부 제공자가 자체 시스템에서 독립적으로 처리하는 정보의 세부
              범위와 보유기간에는 해당 제공자의 정책과 이용자 설정이 적용됩니다.
              {policy.businessName}는 직접 관리하거나 통제할 수 있는 범위에서만
              이용자 요청을 처리할 수 있습니다.
            </p>
            <div className="space-y-3">
              {policy.externalServices.map((service) => (
                <ExternalService
                  key={`${service.provider}-${service.service}`}
                  service={service}
                />
              ))}
            </div>
            <p>
              YouTube 기능은 공개 영상 정보를 조회하고 내장 플레이어로 재생하는
              데 사용됩니다. 앱은 이용자의 YouTube 계정 로그인을 요구하거나
              YouTube 로그인 정보·비밀번호·개인 재생 기록을
              {policy.businessName} 서버에 저장하지 않습니다.
            </p>
            <p>
              <a href={privacyLinks.youtubeTerms}>YouTube 이용약관</a>
              {" · "}
              <a href={privacyLinks.googlePrivacy}>Google 개인정보처리방침</a>
            </p>
          </SectionHeading>

          <SectionHeading number="7" title="개인정보의 파기" id="deletion">
            <p>
              목적이 끝난 전자 파일은 복구하기 어려운 방식으로 삭제하거나
              이용자와의 연결을 제거합니다. 외부 제공자의 백업에 남은 정보는 각
              제공자의 백업 보존 주기에 따라 삭제됩니다.
            </p>
            <p>
              커뮤니티 게시글·댓글의 삭제 기능은 다른 이용자에게 보이지 않게
              숨김 처리합니다. 부정 이용 방지, 서비스 운영, 법적 의무 또는 분쟁
              대응에 필요한 정보는 해당 목적이 끝날 때까지 제한적으로 보관한 뒤
              삭제하거나 이용자와의 연결을 제거할 수 있습니다. 기기에 저장된
              정보는 Android 설정에서 앱 데이터를 삭제하거나 앱을 제거해 삭제할
              수 있습니다. 기기 갤러리에 저장한 이미지는 이용자가 직접 삭제해야
              합니다.
            </p>
          </SectionHeading>

          <SectionHeading
            number="8"
            title="이용자와 법정대리인의 권리 및 행사 방법"
            id="rights"
          >
            <p>
              이용자는 자신의 개인정보에 대해 열람, 정정, 삭제, 처리정지를
              요청할 수 있습니다. 요청은 아래 이메일로 접수합니다.
            </p>
            <p>
              <a href={privacyRequestMailto}>{policy.contactEmail}</a>
            </p>
            <p>
              앱은 회원가입 정보가 없는 익명 구조입니다. 요청 대상 확인을 위해
              닉네임, 작성한 게시물 내용·시각, 이용 앱 등 필요한 최소 정보를
              요청할 수 있습니다. 제공된 정보만으로 요청자와 서버 데이터를
              신뢰할 수 있게 연결할 수 없거나 다른 이용자의 권리를 침해할 우려가
              있으면 요청 처리가 제한될 수 있습니다. 법령에서 정한 사유가 있는
              경우에도 권리 행사가 제한될 수 있습니다.
            </p>
            <p>
              앱 데이터 삭제 또는 앱 제거는 기기 내 정보만 삭제하며 서버에 남은
              커뮤니티·보상 정보까지 자동으로 삭제하지 않습니다. 앱 데이터 삭제,
              기기 교체 또는 재설치로 임의 식별자가 사라지면 서버 데이터와
              요청자의 관계를 신뢰할 수 있게 확인하기 어려워져 요청 처리가
              제한될 수 있습니다. 권리 행사는 법정대리인 또는 적법한 위임을 받은
              사람을 통해서도 할 수 있습니다.
            </p>
          </SectionHeading>

          <SectionHeading
            number="9"
            title="자동 수집 정보와 선택 거부 방법"
            id="automatic"
          >
            <p>
              {policy.appName} 자체는 웹 쿠키를 설치하지 않습니다. 다만 내장
              YouTube 플레이어, Firebase와 Google 광고 서비스는 쿠키 또는 유사
              기술, 광고 ID, 앱 인스턴스·기기·이용 정보를 처리할 수 있습니다.
            </p>
            <ul>
              <li>
                광고 동의가 필요한 지역에서는 Google UMP 동의 화면을 통해 선택할
                수 있습니다.
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
                실명 로그인 대신 앱이 무작위로 생성한 식별자를 사용해 직접
                식별정보 최소화
              </li>
              <li>업무상 필요한 범위로 데이터 접근 권한 제한</li>
              <li>신고·숨김 처리와 보상 거래 검증을 통한 부정 이용 대응</li>
            </ul>
            <p>
              이용자는 기기 잠금과 최신 운영체제를 사용하고, 개인정보를 공개
              게시물에 올리지 않는 등 개인정보 보호에 협조해 주세요.
            </p>
            <p>
              합리적인 보호조치를 적용하더라도 인터넷 통신, 이용자 기기 또는
              외부 서비스 환경의 모든 위험을 완전히 제거할 수는 없습니다. 사고가
              확인되면 관련 법령에 따라 필요한 조치를 진행합니다.
            </p>
          </SectionHeading>

          <SectionHeading
            number="11"
            title="개인정보 보호 담당 및 권익침해 구제"
            id="contact"
          >
            <dl className="grid gap-2 border border-neutral-300 p-4 text-sm sm:grid-cols-2">
              <div>
                <dt className="inline font-semibold">사업자 및 담당부서: </dt>
                <dd className="inline">{policy.businessName}</dd>
              </div>
              <div>
                <dt className="inline font-semibold">이메일: </dt>
                <dd className="inline">
                  <a href={`mailto:${policy.contactEmail}`}>
                    {policy.contactEmail}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="inline font-semibold">대상 앱: </dt>
                <dd className="inline">{policy.appName}</dd>
              </div>
            </dl>
            <p>
              개인정보 침해에 대한 추가 상담이나 분쟁조정이 필요한 경우 아래
              기관을 이용할 수 있습니다.
            </p>
            <ul>
              <li>
                개인정보침해 신고센터:{" "}
                <a href={privacyLinks.kisaPrivacy}>privacy.kisa.or.kr</a> · 국번
                없이 118
              </li>
              <li>
                개인정보분쟁조정위원회:{" "}
                <a href={privacyLinks.privacyDispute}>www.kopico.go.kr</a> ·
                1833-6972
              </li>
              <li>
                대검찰청:{" "}
                <a href={privacyLinks.prosecutionService}>www.spo.go.kr</a> ·
                국번 없이 1301
              </li>
              <li>
                경찰청 사이버범죄 신고시스템:{" "}
                <a href={privacyLinks.policeCybercrime}>ecrm.police.go.kr</a> ·
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
          </SectionHeading>
        </article>
      </main>

      <footer className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-[900px] px-4 py-6 text-sm text-neutral-600 sm:px-8">
          <p>
            {policy.businessName} · {policy.contactEmail}
          </p>
        </div>
      </footer>
    </div>
  );
}
