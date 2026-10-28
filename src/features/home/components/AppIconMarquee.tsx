import Image from "next/image";

import { publishedApps } from "@/constants/apps";

const edgeFadeClassName =
  "[mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]";

// 출시한 앱 아이콘이 오른쪽에서 왼쪽으로 천천히 끝없이 흐르는 띠. 양 끝은 바탕으로 서서히 사라진다.
// 앱 이름은 바로 위 목록에 있으므로 장식으로 두어 스크린리더가 건너뛰게 한다.
// 아이콘은 은은하게(불투명도 35%) 둔다. 마우스를 올리면 멈추고, 동작 줄이기를 켜면 움직이지 않는다.
const AppIconMarquee = () => (
  <div aria-hidden="true" className={`overflow-hidden ${edgeFadeClassName}`}>
    <ul className="flex w-max animate-marquee gap-6 hover:[animation-play-state:paused] motion-reduce:animate-none sm:gap-8">
      {[...publishedApps, ...publishedApps].map((app, index) => (
        <li key={`${app.packageName}-${index}`} className="shrink-0">
          <Image
            src={app.iconPath}
            alt=""
            width={256}
            height={256}
            className="size-24 rounded-lg object-cover opacity-35 sm:size-32"
          />
        </li>
      ))}
    </ul>
  </div>
);

export default AppIconMarquee;
