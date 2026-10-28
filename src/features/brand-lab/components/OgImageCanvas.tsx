import Wordmark from "@/components/atoms/Wordmark";
import { siteSlogan } from "@/constants/site";

// 공유 미리보기 이미지(1200×630) 원본. 이 화면을 그대로 캡처해 public/og.png로 저장한다.
const OgImageCanvas = () => (
  <main className="dark flex h-[630px] w-[1200px] flex-col justify-between bg-background p-20 text-foreground">
    <Wordmark className="text-[2.5rem]" />
    <p
      lang="en"
      className="font-display text-[7.5rem] leading-[0.92] font-extrabold tracking-[-0.05em]"
    >
      {siteSlogan.split(/(?<=\.)\s+/).map((line) => (
        <span key={line} className="block">
          {line}
        </span>
      ))}
    </p>
  </main>
);

export default OgImageCanvas;
