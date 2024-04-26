import { SoftDrinkComponent } from "../components/SoftDrinkComponent";
import { PageTracker } from "../services/PageHistoryService";

export const SoftDrink = () => {
  return (
    <>
      {PageTracker()}
      <div className="siteSize">
        <SoftDrinkComponent />
      </div>
    </>
  );
};
