import { PageTracker } from "../services/PageHistoryService";
import { SidesComponent } from "../components/SidesComponent";

export const SideSelect = () => {
  return (
    <>
      {PageTracker()}
      <div className="siteSize">
        <SidesComponent />
      </div>
    </>
  );
};
