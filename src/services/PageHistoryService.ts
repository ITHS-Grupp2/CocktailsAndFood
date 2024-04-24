import { useContext, useEffect } from "react";
import { useLocation } from "react-router";
import {
  NewVisit,
  PageHistoryDispatchContext,
  PageHistory,
} from "../components/PageHistoryProvider";

//Adds the current page pathname to the history-list.
export const PageTracker = (productId?: string) => {
  const dispatch = useContext(PageHistoryDispatchContext);
  const location = useLocation();
  const pageHistory: PageHistory = {
    page: location.pathname,
    productId: productId,
  };
  useEffect(() => {
    NewVisit(dispatch, pageHistory); //Adds pathname to page-history
  }, [dispatch, pageHistory]);
};
