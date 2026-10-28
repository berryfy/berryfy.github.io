interface AccentPeriodsProps {
  text: string;
}

// 영어 제목의 마침표만 코발트로 칠한다. 글자 로고의 코발트 점과 같은 표현이다.
const AccentPeriods = ({ text }: AccentPeriodsProps) =>
  text.split(/(\.)/).map((part, index) =>
    part === "." ? (
      <span key={index} className="text-primary">
        .
      </span>
    ) : (
      part
    ),
  );

export default AccentPeriods;
