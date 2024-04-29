export const Salad = () => {
  const salads = [];

  for (let i = 0; i < 5; i++) {
    salads.push(
      <div
        className="salad"
      ></div>
    );
  }

  return <div className="salad-group">{salads}</div>;
};
