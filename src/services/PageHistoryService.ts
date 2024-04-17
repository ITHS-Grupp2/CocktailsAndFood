import { useContext, useEffect } from "react";
import { useLocation } from "react-router";
import { NewVisit, PageHistoryDispatchContext } from "../components/PageHistoryProvider";

export const PageTracker = () => {
    const dispatch = useContext(PageHistoryDispatchContext);
    const location = useLocation();
    useEffect(() => {
        NewVisit(dispatch, location.pathname);
    }, [dispatch, location.pathname]);
}