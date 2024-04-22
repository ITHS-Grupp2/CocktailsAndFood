import { ReactNode, createContext, useReducer } from "react";

const initialContext: PageHistoryState = { pages: [{ page: "/" }] }; //If user refreshes on another page it will clear storage. "/" will set Home as start-page
const dispatch: React.Dispatch<Action> = () => null;

type PageHistoryProviderProps = {
  children: ReactNode;
};

export type PageHistoryState = {
  pages: PageHistory[];
};

export type PageHistory = {
  page: string;
  productId?: string;
};

export const PageHistoryContext = createContext(initialContext);
export const PageHistoryDispatchContext = createContext(dispatch);

export type Action =
  | { type: "ADD_TO_HISTORY"; payload: PageHistory }
  | { type: "ADD_ID_TO_HISTORY"; payload: PageHistory }
  | { type: "BACK_TO_HISTORY"; payload: PageHistory };

export const historyReducer = (state: PageHistoryState, action: Action) => {
  switch (action.type) {
    case "ADD_TO_HISTORY": //Adds the current page to the list.
      if (action.payload.page !== state.pages[state.pages.length - 1].page) {
        //Checks if it's already added.
        console.log(
          "Page: " +
            action.payload.page +
            "with productId: " +
            action.payload.productId
        );
        return {
          ...state,
          pages: [...state.pages, action.payload],
        };
      } else if (
        state.pages[state.pages.length - 1].productId !==
        action.payload.productId
      ) {
        //if page already exists check if there's a product id registred
        state.pages[state.pages.length - 1].productId =
          action.payload.productId;
        console.log(
          "Updated page: " +
            action.payload.page +
            "with productId: " +
            action.payload.productId
        );
        return { ...state, ...state.pages };
      } else {
        return { ...state, ...state.pages };
      }
      case "ADD_ID_TO_HISTORY":
        console.log(
          "Updated page: " +
            action.payload.page +
            "with productId: " +
            action.payload.productId
        );
        state.pages[state.pages.length - 1].productId =
        action.payload.productId;
        return {
          ...state
        }
    case "BACK_TO_HISTORY":
      return {
        ...state,
        pages: state.pages.slice(0, -1), //Removes the last page in state.pages
      };
    default:
      return state;
  }
};

export const addToVisit = (dispatch: React.Dispatch<Action>, page: PageHistory) => {
dispatch({type: "ADD_ID_TO_HISTORY", payload: page});
};

export function NewVisit(dispatch: React.Dispatch<Action>, page: PageHistory) {
  dispatch({ type: "ADD_TO_HISTORY", payload: page });
}

export const goBack = (dispatch: React.Dispatch<Action>, page: PageHistory) => {
  dispatch({ type: "BACK_TO_HISTORY", payload: page });
};

export const PageHistoryProvider: React.FC<PageHistoryProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(historyReducer, initialContext);
  return (
    <PageHistoryContext.Provider value={state}>
      <PageHistoryDispatchContext.Provider value={dispatch}>
        {children}
      </PageHistoryDispatchContext.Provider>
    </PageHistoryContext.Provider>
  );
};
