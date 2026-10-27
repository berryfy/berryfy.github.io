import PalettePreview from "@/features/brand-lab/components/palette-preview";
import { paletteCandidates } from "@/features/brand-lab/constants/palette-candidates";

export default function ColorLabPage() {
  return (
    <main className="min-h-screen bg-neutral-100 px-4 py-10 text-neutral-900 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1280px]">
        <header className="max-w-[680px]">
          <p className="font-mono text-xs text-neutral-500">
            Brand Lab · dev only
          </p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-[-0.03em] sm:text-4xl">
            브랜드 색상 후보
          </h1>
          <p className="mt-3 leading-7 text-neutral-600">
            글꼴과 형태는 모두 같게 두고 색만 바꿨습니다. 버튼·제품 카드·영상
            썸네일에서 각 후보가 어떻게 보이는지 밝은 테마와 어두운 테마로
            비교합니다.
          </p>
        </header>

        <div className="mt-10 grid gap-8">
          {paletteCandidates.map((candidate, index) => (
            <section
              key={candidate.id}
              id={candidate.id}
              className="grid gap-6 rounded-3xl bg-white p-5 shadow-sm ring-1 ring-neutral-200 sm:p-7 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,2fr)]"
            >
              <div className="min-w-0">
                <p className="font-mono text-xs text-neutral-500">
                  {String.fromCharCode(65 + index)} · {candidate.berry}
                </p>
                <h2 className="mt-1 text-2xl font-extrabold tracking-[-0.03em]">
                  {candidate.name}
                </h2>
                <p className="mt-1 text-sm font-semibold text-neutral-600">
                  {candidate.mood}
                </p>

                <ul className="mt-5 grid grid-cols-5 gap-2">
                  {candidate.swatches.map((swatch) => (
                    <li key={swatch.role} className="min-w-0">
                      <span
                        className="block aspect-square rounded-xl ring-1 ring-black/10"
                        style={{ backgroundColor: swatch.hex }}
                      />
                      <span className="mt-1.5 block truncate text-[0.7rem] font-semibold">
                        {swatch.role}
                      </span>
                      <span className="block font-mono text-[0.65rem] text-neutral-500">
                        {swatch.hex}
                      </span>
                    </li>
                  ))}
                </ul>

                <dl className="mt-5 grid gap-3 text-sm leading-6">
                  <div>
                    <dt className="font-bold">장점</dt>
                    <dd className="text-neutral-600">{candidate.strengths}</dd>
                  </div>
                  <div>
                    <dt className="font-bold">주의</dt>
                    <dd className="text-neutral-600">{candidate.risks}</dd>
                  </div>
                </dl>
              </div>

              <div className="grid min-w-0 gap-4 md:grid-cols-2">
                <PalettePreview label="Light" theme={candidate.light} />
                <PalettePreview label="Dark" theme={candidate.dark} />
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
