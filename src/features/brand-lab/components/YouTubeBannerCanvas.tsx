import Wordmark from "@/components/atoms/Wordmark";

// 유튜브 채널 배너(2560×1440) 원본. 모든 기기에서 보이는 중앙 1546×423 안에 글자 로고만 둔다.
const YouTubeBannerCanvas = () => (
  <main className="dark grid h-[1440px] w-[2560px] place-items-center bg-background">
    <Wordmark className="text-[18rem]" />
  </main>
);

export default YouTubeBannerCanvas;
