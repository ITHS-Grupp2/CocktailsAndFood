import { useContext } from "react";
import { Link } from "react-router-dom";
import {
  PageHistoryContext,
  PageHistoryDispatchContext,
  goBack,
} from "./PageHistoryProvider";
import { GetIcon } from "./Icons";
import { CartDispatchContext, decrementOrRemove } from "./CartContext";

export const BackButton = () => {
  const pageHistoryState = useContext(PageHistoryContext);
  const historyDispatch = useContext(PageHistoryDispatchContext);

  const cartDispatch = useContext(CartDispatchContext);

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
          <div style={{ width: "60px", margin: "10px" }}></div>
        ) : (
          <div className="header-button">{GetIcon("Arrow", "Large")}</div>
        )}
      </Link>
    </>
  );
};
