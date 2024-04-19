import { useContext, useEffect } from "react";
import { useLocation } from "react-router";
import { NewVisit, PageHistoryDispatchContext } from "../components/PageHistoryProvider";

//Adds the current page pathname to the history-list.
export const PageTracker = () => {
    const dispatch = useContext(PageHistoryDispatchContext);
    const location = useLocation();
    useEffect(() => {
        NewVisit(dispatch, location.pathname); //Adds pathname to page-history
    }, [dispatch, location.pathname]);
}