type FillColor = "white" | "blue" | "none";
type Icon = "Cart" | "Arrow" | "Next";
type Size = "Small" | "Medium" | "Large";

// Icons and sizes for special icons (Cart etc)

const getPathFill = (fill: string) => {
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
  switch (size) {
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
export const GetIcon = (icon: Icon, color: FillColor, size: Size) => {
  let text;
  switch (icon) {
    case "Cart":
      text = cartIcon(color, size);
      break;
    case "Arrow":
      text = arrowLeftIcon(color, size);
      break;
    case "Next":
      text = next(color, size);
      break;
    default:
      text = "";
      break;
  }
  return <>{text}</>;
};

const cartIcon = (color: FillColor, size: Size) => {
  const sizePx = getSize(size);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
      width={sizePx}
      height={sizePx}
    >
      <path
        fill={getPathFill(color)}
        d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
      />
    </svg>
  );
};

const arrowLeftIcon = (color: FillColor, size: Size) => {
  const sizePx = getSize(size);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      height={sizePx}
      width={sizePx}
      fill={getPathFill(color)}
    >
      <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
    </svg>
  );
};

const next = (color: FillColor, size: Size) => {
  const sizePx = getSize(size);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 2 30 31"
      height={sizePx}
      width={sizePx}
      fill={getPathFill(color)}
    >
      <path d="M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z" />
    </svg>
  );
};
