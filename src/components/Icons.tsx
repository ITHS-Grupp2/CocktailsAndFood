type FillColor = "white" | "blue";
type Icon = "Cart" | "Arrow";
type Size = "Small" | "Medium" | "Large";

export const GetIcon = (icon: Icon, color: FillColor, size: Size) => {
  const sizePx = getSize(size);
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 576 512"
        width={sizePx}
        height={sizePx}>
        <path fill={getPathFill(color)} d={getPathD(icon)} />
      </svg>
    </>
  );
};
const getPathFill = (fill: string) => {
  switch (fill) {
    case "white":
      return "white";
    case "blue":
      return "#3d7db8";
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
const getPathD = (icon: Icon) => {
  switch (icon) {
    case "Cart":
      return cartIcon();
    case "Arrow":
      return arrowLeftIcon();
  }
};

const cartIcon = () => {
  return "M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z";
};

const arrowLeftIcon = () => {
  return "M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm3 5.753l-6.44 5.247 6.44 5.263-.678.737-7.322-6 7.335-6 .665.753z"; //return "476.213,223.107 57.427,223.107 151.82,128.713 130.607,107.5 0,238.106 130.607,368.714 151.82,347.5 57.427,253.107 476.213,253.107";
};
