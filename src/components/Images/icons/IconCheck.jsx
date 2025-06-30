import Svg, { Circle, Path } from "react-native-svg";

export default function IconCheck({ bgColor = "#021123" }) {
  const bgFill = bgColor ?? "#021123";
  return (
    <Svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Circle cx="12" cy="12" r="12" fill={bgFill} />
      <Path
        d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z"
        fill="#021123"
      />
    </Svg>
  );
}
