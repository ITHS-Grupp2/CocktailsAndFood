import { useContext } from "react";
import { Link } from "react-router-dom";
import {
  PageHistoryContext,
  PageHistoryDispatchContext,
  goBack,
} from "./PageHistoryProvider";

export const BackButton = () => {
  const pageHistoryState = useContext(PageHistoryContext);
  const dispatch = useContext(PageHistoryDispatchContext);
  const hide = pageHistoryState.pages.length === 1;

  return (
    <>
      <Link
        to={
          hide ? "/" : pageHistoryState.pages[pageHistoryState.pages.length - 2]
        }
        onClick={() => !hide && goBack(dispatch, "")}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          height="40px"
          width="40px"
          fill={hide ? "none" : "white"}>
          <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
        </svg>
      </Link>
    </>
  );
};
