import { Style } from "@rhjs/builtin";
import { rh, ref, onMounted, onUnmounted } from "@rhjs/core";

function randomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const hex =
    "#" + ((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1);
  return hex;
}
const crateRandomColorRef = () => {
  const color = ref(randomColor());
  let timer: any;
  onMounted(() => {
    timer = setInterval(() => {
      color.value = randomColor();
    }, 1000);
  });
  onUnmounted(() => {
    clearInterval(timer);
  });
  return color;
};

export const RandomLight = (props: any) => {
  const color = crateRandomColorRef();
  return () => (
    <div {...props}>
      <Style
        styleFn={() => ({
          display: "inline-block",
          transition: "all 1s ease-in-out",
          backgroundColor: color.value,
          width: "1rem",
          height: "1rem",
          borderRadius: "1rem",
        })}
      ></Style>
    </div>
  );
};
