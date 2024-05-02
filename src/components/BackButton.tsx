import { useContext } from "react";
import { Link } from "react-router-dom";
import {
  PageHistoryContext,
  PageHistoryDispatchContext,
  goBack,
} from "./PageHistoryProvider";
import { GetIcon } from "./Icons";

export const BackButton = () => {
  const pageHistoryState = useContext(PageHistoryContext);
  const historyDispatch = useContext(PageHistoryDispatchContext);

  const hide = pageHistoryState.pages.length === 1;

  return (
    <>
      <Link
        to={
          hide
            ? "/"
            : pageHistoryState.pages[pageHistoryState.pages.length - 2].page //Get the second to last page (last-page is current)
        }
        onClick={() => !hide && goBack(historyDispatch)}>
        {hide ? (
          <div className="header-button" style={{ opacity: "0" }}></div>
        ) : (
          <div className="header-button">{GetIcon("ArrowLeft", "XLarge")}</div>
        )}
      </Link>
    </>
  );
};
