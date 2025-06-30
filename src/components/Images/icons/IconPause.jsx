import Svg, { Path } from "react-native-svg";

export default function IconPause({ bgColor = "#021123" }) {
  const bgFill = bgColor ?? "#021123";
  return (
    <Svg width="12" height="15" viewBox="0 0 12 15" fill="none">
      <Path
        d="M8.01562 0.473022H12V14.4418H8.01562V0.473022ZM0 14.4418V0.473022H3.98438V14.4418H0Z"
        fill={bgFill}
      />
    </Svg>
  );
}
