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
          <section key={item.category} className="rounded-lg bg-card p-5">
            <h4 className="font-semibold text-foreground">{item.category}</h4>
            <dl className="mt-3 space-y-3 text-small">
              <div>
                <dt className="text-foreground">{labels.dataItem}</dt>
                <dd className="mt-1 break-words text-muted-foreground">
                  {item.data}
                </dd>
              </div>
              <div>
                <dt className="text-foreground">{labels.purpose}</dt>
                <dd className="mt-1 break-words text-muted-foreground">
                  {item.purpose}
                </dd>
              </div>
              <div>
                <dt className="text-foreground">{labels.retention}</dt>
                <dd className="mt-1 break-words text-muted-foreground">
                  {item.retention}
                </dd>
              </div>
            </dl>
          </section>
        ))}
      </div>

      <div className="hidden overflow-x-auto rounded-lg bg-card lg:block">
        <table className="w-full border-collapse text-left text-small">
          <thead className="text-muted-foreground">
            <tr>
              <th className="w-[17%] border-b border-border px-4 py-3 font-medium">
                {labels.category}
              </th>
              <th className="w-[28%] border-b border-border px-4 py-3 font-medium">
                {labels.dataItem}
              </th>
              <th className="w-[27%] border-b border-border px-4 py-3 font-medium">
                {labels.purpose}
              </th>
              <th className="w-[28%] border-b border-border px-4 py-3 font-medium">
                {labels.retention}
              </th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.category} className="border-t border-border">
                <th className="px-4 py-4 align-top font-semibold text-foreground">
                  {item.category}
                </th>
                <td className="px-4 py-4 align-top text-muted-foreground">
                  {item.data}
                </td>
                <td className="px-4 py-4 align-top text-muted-foreground">
                  {item.purpose}
                </td>
                <td className="px-4 py-4 align-top text-muted-foreground">
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
