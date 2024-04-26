export const SesameSeed = () => {
  const sesameSeeds = [];
  let isUp = true;
  for (let i = 0; i < 15; i++) {
    let m = Math.floor(Math.random() * 20);
    sesameSeeds.push(
      <div
        className="sesame-seed"
        style={{ marginTop: isUp ? `${m + 0}px` : `${m + 30}px` }}
      ></div>
    );
    isUp = !isUp;
  }

  return <div className="sesame-group">{sesameSeeds}</div>;
};
