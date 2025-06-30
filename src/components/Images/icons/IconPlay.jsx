import Svg, { Path } from "react-native-svg";

export default function IconPlay({ bgColor = "#021123" }) {
  const bgFill = bgColor ?? "#021123";
  return (
    <Svg width="11" height="15" viewBox="0 0 11 15" fill="none">
      <Path
        d="M0.015625 0.473022L10.9844 7.4574L0.015625 14.4418V0.473022Z"
        fill={bgFill}
      />
    </Svg>
  );
}
