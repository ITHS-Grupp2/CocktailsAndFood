type FillColor = "white" | "blue" | "none";
type Icon = "Cart" | "ArrowLeft" | "ArrowRight" | "Cross";
type Size = "Small" | "Medium" | "Large" | "XLarge" | number;

// Icons and sizes for special icons (Cart etc)

const getPathFill = (fill?: string) => {
  switch (fill) {
    case "white":
      return "white";
    case "blue":
      return "#3d7db8";
    case "none":
      return "none";
    default:
      return "white";
  }
};

const getSize = (size: Size) => {
  if (typeof size === "number") return size;
  switch (size) {
    case "XLarge":
      return "50px";
    case "Large":
      return "40px";
    case "Medium":
      return "25px";
    case "Small":
      return "15px";
    default:
      return "25px";
  }
};

export const GetIcon = (icon: Icon, size: Size, fillColor?: FillColor) => {
  let text;
  switch (icon) {
    case "Cart":
      text = cartIcon(size, fillColor);
      break;
    case "ArrowLeft":
      text = arrowLeftIcon(size, fillColor);
      break;
    case "Cross":
      text = xmark(size, fillColor);
      break;
    case "ArrowRight":
      text = arrowRightIcon(size, fillColor);
      break;
    default:
      text = "";
      break;
  }
  return <>{text}</>;
};

const cartIcon = (size: Size, fillColor?: FillColor) => {
  const sizePx = getSize(size);
  const color = getPathFill(fillColor);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
      width={sizePx}
      height={sizePx}
      fill={color}>
      <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
    </svg>
  );
};

const arrowLeftIcon = (size: Size, fillColor?: FillColor) => {
  const sizePx = getSize(size);
  const color = getPathFill(fillColor);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      height={sizePx}
      width={sizePx}
      fill={color}>
      <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
    </svg>
  );
};

const arrowRightIcon = (size: Size, fillColor?: FillColor) => {
  const sizePx = getSize(size);
  const color = getPathFill(fillColor);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      height={sizePx}
      width={sizePx}
      fill={color}
      transform="scale(-1,1)">
      <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
    </svg>
  );
};

const xmark = (size: Size, fillColor?: FillColor) => {
  const sizePx = getSize(size);
  const color = getPathFill(fillColor);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 384 512"
      height={sizePx}
      width={sizePx}
      fill={color}>
      <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
    </svg>
  );
};
