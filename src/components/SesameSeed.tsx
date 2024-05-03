export const SesameSeed = () => {
  const sesameSeeds = [];
  let isUp = true;
  for (let i = 0; i < 5; i++) {
    sesameSeeds.push(
      <div
        className="sesame-seed"
        style={{ marginTop: isUp ? 0+`px` : 40+`px` }}
      ></div>
    );
    isUp = !isUp;
  }

  return <div className="sesame-group">{sesameSeeds}</div>;
};
