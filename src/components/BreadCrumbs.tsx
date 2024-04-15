import React from "react";

interface BreadCrumbsProps {
  pageNumber: number;
}

export const BreadCrumbs: React.FC<BreadCrumbsProps> = ({ pageNumber }) => {
  const pageNames: { [key: number]: string } = {
    0: "Home",
    1: "Main",
    2: "Sides",
    3: "Drinks",
    4: "Cart",
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {Object.entries(pageNames).map(([page, name]) => (
        <p key={page} className={pageNumber === +page ? "active" : ""}>
          {name}
        </p>
      ))}
    </div>
  );
};
