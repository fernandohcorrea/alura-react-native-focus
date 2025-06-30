import Svg, { Circle, Path } from "react-native-svg";

export default function IconDelete({ bgColor = "#021123" }) {
  const bgFill = bgColor ?? "#021123";
  return (
    <Svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      version="1.1"
      id="svg1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Circle cx="16" cy="16" r="15.5" stroke={bgFill} id="circle1" />
      <Path
        id="rect1"
        fill={bgFill}
        d="m 6.4804688,6.4804688 v 3.3671874 l 6.1582032,6.1562498 -6.1582032,6.158203 v 3.31836 h 3.4121093 l 6.1113279,-6.111328 6.111328,6.111328 h 3.365235 V 22.115234 L 19.369141,16.003906 25.480469,9.8945312 V 6.4804688 h -3.31836 L 16.003906,12.638672 9.8457031,6.4804688 Z"
      />
    </Svg>
  );
}
