import Image from "next/image";

import { publishedApps } from "@/constants/apps";

// 출시한 앱 아이콘이 오른쪽에서 왼쪽으로 천천히 끝없이 흐르는 띠. 양 끝은 바탕으로 서서히 사라진다.
// 같은 목록을 두 번 이어 붙이고 절반만큼 움직여 반복한다. 이음새가 맞도록 간격은 gap이 아니라 항목마다 오른쪽 여백으로 준다.
// 띠를 따라 들어오는 아이콘이 빈칸으로 보이지 않도록 이미지를 미리 불러온다.
// 앱 이름은 바로 위 목록에 있으므로 장식으로 두어 스크린리더가 건너뛰게 한다.
// 아이콘은 은은하게(불투명도 35%) 둔다. 마우스를 올리면 멈추고, 동작 줄이기를 켜면 움직이지 않는다.
const AppIconMarquee = () => (
  <div aria-hidden="true" className="fade-x-edges overflow-hidden">
    <ul className="flex w-max animate-marquee hover:[animation-play-state:paused] motion-reduce:animate-none">
      {[...publishedApps, ...publishedApps].map((app, index) => (
        <li
          key={`${app.packageName}-${index}`}
          className="shrink-0 pr-6 sm:pr-8"
        >
          <Image
            src={app.iconPath}
            alt=""
            width={256}
            height={256}
            loading="eager"
            className="size-24 rounded-lg object-cover opacity-35 sm:size-32"
          />
        </li>
      ))}
    </ul>
  </div>
);

export default AppIconMarquee;
