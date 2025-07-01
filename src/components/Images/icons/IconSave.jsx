import Svg, { Path } from "react-native-svg";

export default function IconSave({ bgColor = "#021123", size = 32 }) {
  const bgFill = bgColor ?? "#021123";
  const iconSize = Number(size) ?? 32;
  return (
    <Svg width={iconSize} height={iconSize} viewBox="0 0 32 32" fill="none">
      <Path
        id="rect1"
        fill={bgFill}
        d="m 2,14.625 c -0.554,0 -1,0.446 -1,1 v 13.0625 c 0,0.554 0.446,1 1,1 h 28 c 0.554,0 1,-0.446 1,-1 V 15.625 c 0,-0.554 -0.446,-1 -1,-1 h -1.5 v 11.675781 c 0,0.554 -0.446,1 -1,1 h -23 c -0.554,0 -1,-0.446 -1,-1 V 14.625 Z"
      />
      <Path
        id="rect2"
        fill={bgFill}
        d="M 12.693359,1.8125 C 12.309127,1.8125 12,2.1216268 12,2.5058594 V 15.099609 l -2.1699219,-0.0059 3.0742189,4.9375 3.072265,4.9375 3.105469,-4.919922 L 22.1875,15.128906 20,15.123047 V 2.5058594 C 20,2.1216268 19.690873,1.8125 19.306641,1.8125 Z"
      />
    </Svg>
  );
}
