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
    <section className="rounded-lg bg-card p-5">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="text-body font-semibold text-foreground">
          {service.provider} — {service.service}
        </h3>
        <a
          href={service.policyUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-xs text-small text-link underline underline-offset-4 outline-none focus-visible:ring-3 focus-visible:ring-ring/60"
        >
          {labels.providerPolicy}
        </a>
      </div>
      <dl className="mt-4 grid gap-x-6 gap-y-3 text-small sm:grid-cols-2">
        <div>
          <dt className="text-foreground">{labels.relationship}</dt>
          <dd className="mt-1 break-words text-muted-foreground">
            {service.relationship}
          </dd>
        </div>
        <div>
          <dt className="text-foreground">{labels.transferBasis}</dt>
          <dd className="mt-1 break-words text-muted-foreground">
            {service.transferBasis}
          </dd>
        </div>
        <div>
          <dt className="text-foreground">{labels.dataItem}</dt>
          <dd className="mt-1 break-words text-muted-foreground">
            {service.data}
          </dd>
        </div>
        <div>
          <dt className="text-foreground">{labels.purpose}</dt>
          <dd className="mt-1 break-words text-muted-foreground">
            {service.purpose}
          </dd>
        </div>
        <div>
          <dt className="text-foreground">{labels.location}</dt>
          <dd className="mt-1 break-words text-muted-foreground">
            {service.location}
          </dd>
        </div>
        <div>
          <dt className="text-foreground">{labels.timingAndMethod}</dt>
          <dd className="mt-1 break-words text-muted-foreground">
            {service.timingAndMethod}
          </dd>
        </div>
        <div>
          <dt className="text-foreground">{labels.retention}</dt>
          <dd className="mt-1 break-words text-muted-foreground">
            {service.retention}
          </dd>
        </div>
        <div>
          <dt className="text-foreground">{labels.refusalAndEffect}</dt>
          <dd className="mt-1 break-words text-muted-foreground">
            {service.refusalAndEffect}
          </dd>
        </div>
      </dl>
    </section>
  );
}
