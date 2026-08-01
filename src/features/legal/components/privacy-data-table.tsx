import type {
  PrivacyDataItem,
  PrivacyPageCopy,
} from "@/features/legal/types/privacy-policy";

interface PrivacyDataTableProps {
  items: readonly PrivacyDataItem[];
  labels: PrivacyPageCopy["labels"];
}

export default function PrivacyDataTable({
  items,
  labels,
}: PrivacyDataTableProps) {
  return (
    <>
      <div className="grid gap-3 sm:grid-cols-2 lg:hidden">
        {items.map((item) => (
          <section
            key={item.category}
            className="rounded-xl border border-border bg-card/40 p-4"
          >
            <h4 className="font-bold text-foreground">{item.category}</h4>
            <dl className="mt-3 space-y-3 text-sm">
              <div>
                <dt className="font-semibold text-foreground">
                  {labels.dataItem}
                </dt>
                <dd className="mt-1 leading-6 break-words text-muted-foreground">
                  {item.data}
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">
                  {labels.purpose}
                </dt>
                <dd className="mt-1 leading-6 break-words text-muted-foreground">
                  {item.purpose}
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">
                  {labels.retention}
                </dt>
                <dd className="mt-1 leading-6 break-words text-muted-foreground">
                  {item.retention}
                </dd>
              </div>
            </dl>
          </section>
        ))}
      </div>

      <div className="hidden overflow-x-auto rounded-xl border border-border lg:block">
        <table className="w-full border-collapse text-left text-sm">
          <thead className="bg-muted/70 text-foreground">
            <tr>
              <th className="w-[17%] border-b border-border px-3 py-3 font-semibold">
                {labels.category}
              </th>
              <th className="w-[28%] border-b border-border px-3 py-3 font-semibold">
                {labels.dataItem}
              </th>
              <th className="w-[27%] border-b border-border px-3 py-3 font-semibold">
                {labels.purpose}
              </th>
              <th className="w-[28%] border-b border-border px-3 py-3 font-semibold">
                {labels.retention}
              </th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.category} className="border-t border-border">
                <th className="px-3 py-3 align-top font-semibold text-foreground">
                  {item.category}
                </th>
                <td className="px-3 py-3 align-top leading-6 text-muted-foreground">
                  {item.data}
                </td>
                <td className="px-3 py-3 align-top leading-6 text-muted-foreground">
                  {item.purpose}
                </td>
                <td className="px-3 py-3 align-top leading-6 text-muted-foreground">
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
