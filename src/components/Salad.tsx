export const Salad = () => {
  const salads = [];

  const colors = ["#8EBF44", "#82AD42", "#9AC856", "#8EBF44", "#82AD42"];

  let zInd = 4;

  for (let i = 0; i < 5; i++) {
    salads.push(
      <div
        className="salad"
        style={{
          display:"flex",
          backgroundColor: colors[i],
          zIndex: i === 1 ? 5 : zInd,
          right: i === 0 ? "0" : `${i * 8}px`,
        }}
      ></div>
    );
    zInd--;
  }

  return <div className="salad-group" style={{width:"100%"}}>{salads}</div>;
};
