import type {
  ExternalPrivacyService,
  PrivacyPageCopy,
} from "@/features/legal/types/privacy-policy";

interface PrivacyExternalServiceProps {
  service: ExternalPrivacyService;
  labels: PrivacyPageCopy["labels"];
}

export default function PrivacyExternalService({
  service,
  labels,
}: PrivacyExternalServiceProps) {
  return (
    <section className="rounded-xl border border-border bg-card/40 p-4">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="text-base font-bold text-foreground">
          {service.provider} — {service.service}
        </h3>
        <a
          href={service.policyUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-sm text-sm text-primary underline underline-offset-2 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
        >
          {labels.providerPolicy}
        </a>
      </div>
      <dl className="mt-4 grid gap-x-6 gap-y-3 text-sm sm:grid-cols-2">
        <div>
          <dt className="font-semibold text-foreground">
            {labels.relationship}
          </dt>
          <dd className="mt-1 leading-6 break-words text-muted-foreground">
            {service.relationship}
          </dd>
        </div>
        <div>
          <dt className="font-semibold text-foreground">
            {labels.transferBasis}
          </dt>
          <dd className="mt-1 leading-6 break-words text-muted-foreground">
            {service.transferBasis}
          </dd>
        </div>
        <div>
          <dt className="font-semibold text-foreground">{labels.dataItem}</dt>
          <dd className="mt-1 leading-6 break-words text-muted-foreground">
            {service.data}
          </dd>
        </div>
        <div>
          <dt className="font-semibold text-foreground">{labels.purpose}</dt>
          <dd className="mt-1 leading-6 break-words text-muted-foreground">
            {service.purpose}
          </dd>
        </div>
        <div>
          <dt className="font-semibold text-foreground">{labels.location}</dt>
          <dd className="mt-1 leading-6 break-words text-muted-foreground">
            {service.location}
          </dd>
        </div>
        <div>
          <dt className="font-semibold text-foreground">
            {labels.timingAndMethod}
          </dt>
          <dd className="mt-1 leading-6 break-words text-muted-foreground">
            {service.timingAndMethod}
          </dd>
        </div>
        <div>
          <dt className="font-semibold text-foreground">{labels.retention}</dt>
          <dd className="mt-1 leading-6 break-words text-muted-foreground">
            {service.retention}
          </dd>
        </div>
        <div>
          <dt className="font-semibold text-foreground">
            {labels.refusalAndEffect}
          </dt>
          <dd className="mt-1 leading-6 break-words text-muted-foreground">
            {service.refusalAndEffect}
          </dd>
        </div>
      </dl>
    </section>
  );
}
