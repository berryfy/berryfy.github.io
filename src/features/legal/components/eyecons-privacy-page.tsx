import Link from "next/link";

import { siteFontVariables } from "@/app/fonts";
import LanguageSwitcher from "@/components/language-switcher";
import { siteConfig } from "@/constants/site";
import {
  eyeconsPrivacyCopy,
  eyeconsPrivacyPolicies,
  privacyLocalePaths,
} from "@/features/legal/constants/eyecons-privacy-copy";
import { privacyLinks } from "@/features/legal/constants/privacy-links";
import type {
  ExternalPrivacyService,
  PrivacyDataItem,
  PrivacyLocale,
  PrivacyPageCopy,
} from "@/features/legal/types/privacy-policy";

interface SectionHeadingProps {
  number: string;
  title: string;
  id: string;
  children: React.ReactNode;
}

function SectionHeading({ number, title, id, children }: SectionHeadingProps) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-neutral-200 pt-8">
      <h2 className="text-xl font-bold text-neutral-900">
        {number}. {title}
      </h2>
      <div className="legal-copy mt-4">{children}</div>
    </section>
  );
}

function DataTable({
  items,
  labels,
}: {
  items: readonly PrivacyDataItem[];
  labels: PrivacyPageCopy["labels"];
}) {
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
                <dt className="font-semibold text-neutral-900">
                  {labels.dataItem}
                </dt>
                <dd className="mt-1 leading-6 break-words text-neutral-700">
                  {item.data}
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-neutral-900">
                  {labels.purpose}
                </dt>
                <dd className="mt-1 leading-6 break-words text-neutral-700">
                  {item.purpose}
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-neutral-900">
                  {labels.retention}
                </dt>
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
                {labels.category}
              </th>
              <th className="w-[28%] border-b border-neutral-300 px-3 py-3 font-semibold">
                {labels.dataItem}
              </th>
              <th className="w-[27%] border-b border-neutral-300 px-3 py-3 font-semibold">
                {labels.purpose}
              </th>
              <th className="w-[28%] border-b border-neutral-300 px-3 py-3 font-semibold">
                {labels.retention}
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

function ExternalService({
  service,
  labels,
}: {
  service: ExternalPrivacyService;
  labels: PrivacyPageCopy["labels"];
}) {
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
          {labels.providerPolicy}
        </a>
      </div>
      <dl className="mt-4 grid gap-x-6 gap-y-3 text-sm sm:grid-cols-2">
        <div>
          <dt className="font-semibold text-neutral-900">
            {labels.relationship}
          </dt>
          <dd className="mt-1 leading-6 break-words text-neutral-700">
            {service.relationship}
          </dd>
        </div>
        <div>
          <dt className="font-semibold text-neutral-900">
            {labels.transferBasis}
          </dt>
          <dd className="mt-1 leading-6 break-words text-neutral-700">
            {service.transferBasis}
          </dd>
        </div>
        <div>
          <dt className="font-semibold text-neutral-900">{labels.dataItem}</dt>
          <dd className="mt-1 leading-6 break-words text-neutral-700">
            {service.data}
          </dd>
        </div>
        <div>
          <dt className="font-semibold text-neutral-900">{labels.purpose}</dt>
          <dd className="mt-1 leading-6 break-words text-neutral-700">
            {service.purpose}
          </dd>
        </div>
        <div>
          <dt className="font-semibold text-neutral-900">{labels.location}</dt>
          <dd className="mt-1 leading-6 break-words text-neutral-700">
            {service.location}
          </dd>
        </div>
        <div>
          <dt className="font-semibold text-neutral-900">
            {labels.timingAndMethod}
          </dt>
          <dd className="mt-1 leading-6 break-words text-neutral-700">
            {service.timingAndMethod}
          </dd>
        </div>
        <div>
          <dt className="font-semibold text-neutral-900">{labels.retention}</dt>
          <dd className="mt-1 leading-6 break-words text-neutral-700">
            {service.retention}
          </dd>
        </div>
        <div>
          <dt className="font-semibold text-neutral-900">
            {labels.refusalAndEffect}
          </dt>
          <dd className="mt-1 leading-6 break-words text-neutral-700">
            {service.refusalAndEffect}
          </dd>
        </div>
      </dl>
    </section>
  );
}

export default function EyeconsPrivacyPage({
  locale,
}: {
  locale: PrivacyLocale;
}) {
  const policy = eyeconsPrivacyPolicies[locale];
  const copy = eyeconsPrivacyCopy[locale];
  const privacyRequestMailto = `mailto:${policy.contactEmail}?subject=${encodeURIComponent(`${policy.appName} privacy request`)}`;

  return (
    <div
      lang={locale}
      className={`${siteFontVariables[locale]} min-h-screen bg-white font-sans text-neutral-900`}
    >
      <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white">
        <div className="mx-auto flex min-h-14 max-w-[900px] items-center justify-between gap-3 px-4 py-2 sm:px-8">
          <Link
            href={siteConfig.routes.home}
            className="shrink-0 font-semibold text-neutral-900"
          >
            berryfy
          </Link>
          <LanguageSwitcher
            locale={locale}
            label={copy.languageNavigationLabel}
            paths={privacyLocalePaths}
          />
        </div>
      </header>

      <main className="mx-auto max-w-[900px] px-4 py-8 sm:px-8 sm:py-12 lg:py-14">
        <header>
          <p className="text-sm text-neutral-600">{policy.appName}</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
            {copy.pageTitle}
          </h1>
          <p className="mt-4 max-w-[720px] leading-7 text-neutral-700">
            {copy.intro}
          </p>
          <dl className="mt-6 grid gap-2 border-y border-neutral-200 py-4 text-sm sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <dt className="inline font-semibold">{copy.labels.app}: </dt>
              <dd className="inline">{policy.appName}</dd>
            </div>
            <div>
              <dt className="inline font-semibold">{copy.labels.business}: </dt>
              <dd className="inline">{policy.businessName}</dd>
            </div>
            <div>
              <dt className="inline font-semibold">
                {copy.labels.effectiveDate}:{" "}
              </dt>
              <dd className="inline">{policy.effectiveDate}</dd>
            </div>
          </dl>
        </header>

        <nav className="mt-8" aria-label={copy.labels.contents}>
          <h2 className="text-sm font-bold">{copy.labels.contents}</h2>
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
          <section id="overview" className="scroll-mt-24 bg-neutral-100 p-5">
            <h2 className="text-lg font-bold">1. {copy.overview.title}</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-neutral-700">
              {copy.overview.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <SectionHeading number="2" title={copy.purposes.title} id="purpose">
            <p>{copy.purposes.intro}</p>
            <ul>
              {copy.purposes.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </SectionHeading>

          <SectionHeading number="3" title={copy.data.title} id="data">
            <p>{copy.data.intro}</p>
            <h3>{copy.data.serverTitle}</h3>
            <DataTable items={policy.serverData} labels={copy.labels} />
            <p>{copy.data.localIntro}</p>
            <h3>{copy.data.localTitle}</h3>
            <DataTable items={policy.localData} labels={copy.labels} />
          </SectionHeading>

          <SectionHeading
            number="4"
            title={copy.collection.title}
            id="collection"
          >
            <ul>
              {copy.collection.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>{copy.collection.permissions}</p>
            <p>{copy.collection.publicContent}</p>
          </SectionHeading>

          <SectionHeading
            number="5"
            title={copy.thirdParties.title}
            id="third-parties"
          >
            {copy.thirdParties.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </SectionHeading>

          <SectionHeading
            number="6"
            title={copy.external.title}
            id="external-services"
          >
            <p>{copy.external.intro}</p>
            <p>{copy.external.providerControl}</p>
            <div className="space-y-3">
              {policy.externalServices.map((service) => (
                <ExternalService
                  key={`${service.provider}-${service.service}`}
                  service={service}
                  labels={copy.labels}
                />
              ))}
            </div>
            <p>{copy.external.youtube}</p>
            <p>
              <a href={privacyLinks.youtubeTerms}>
                {copy.external.youtubeTerms}
              </a>
              {" · "}
              <a href={privacyLinks.googlePrivacy}>
                {copy.external.googlePrivacy}
              </a>
            </p>
          </SectionHeading>

          <SectionHeading number="7" title={copy.deletion.title} id="deletion">
            {copy.deletion.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </SectionHeading>

          <SectionHeading number="8" title={copy.rights.title} id="rights">
            <p>{copy.rights.beforeEmail}</p>
            <p>
              <a href={privacyRequestMailto}>{policy.contactEmail}</a>
            </p>
            {copy.rights.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </SectionHeading>

          <SectionHeading
            number="9"
            title={copy.automatic.title}
            id="automatic"
          >
            <p>{copy.automatic.intro}</p>
            <ul>
              {copy.automatic.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </SectionHeading>

          <SectionHeading number="10" title={copy.security.title} id="security">
            <ul>
              {copy.security.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            {copy.security.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </SectionHeading>

          <SectionHeading number="11" title={copy.contact.title} id="contact">
            <dl className="grid gap-2 border border-neutral-300 p-4 text-sm sm:grid-cols-2">
              <div>
                <dt className="inline font-semibold">
                  {copy.contact.department}:{" "}
                </dt>
                <dd className="inline">{policy.businessName}</dd>
              </div>
              <div>
                <dt className="inline font-semibold">{copy.contact.email}: </dt>
                <dd className="inline">
                  <a href={`mailto:${policy.contactEmail}`}>
                    {policy.contactEmail}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="inline font-semibold">{copy.contact.app}: </dt>
                <dd className="inline">{policy.appName}</dd>
              </div>
            </dl>
            <p>{copy.contact.intro}</p>
            <ul>
              {copy.contact.agencies.map((agency) => (
                <li key={agency.label}>
                  {agency.label}: <a href={agency.url}>{agency.displayUrl}</a> ·{" "}
                  {agency.phone}
                </li>
              ))}
            </ul>
          </SectionHeading>

          <SectionHeading number="12" title={copy.changes.title} id="changes">
            <p>{copy.changes.text.replace("{date}", policy.effectiveDate)}</p>
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
