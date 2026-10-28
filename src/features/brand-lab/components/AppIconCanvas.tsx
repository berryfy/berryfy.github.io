// 파비콘·앱 아이콘(512×512) 원본: 어두운 바탕 + 흰 b + 코발트 점 모노그램. 캡처해 src/app/icon.png 등으로 저장한다.
const AppIconCanvas = () => (
  <main className="dark grid size-[512px] place-items-center bg-background">
    <span className="inline-flex items-baseline font-display text-[22rem] leading-none font-extrabold tracking-[-0.04em] text-foreground">
      b
      <span
        aria-hidden="true"
        className="ml-[0.04em] inline-block size-[0.24em] rounded-full bg-primary"
      />
    </span>
  </main>
);

export default AppIconCanvas;
