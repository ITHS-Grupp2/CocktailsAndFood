import { ReactNode, createContext, useReducer } from "react";

const initialContext: PageHistoryState = { pages: ["/"] }; //If user refreshes on another page it will clear storage. "/" will set Home as start-page
const dispatch: React.Dispatch<Action> = () => null;

type PageHistoryProviderProps = {
  children: ReactNode;
};

export type PageHistoryState = {
  pages: string[];
};

export const PageHistoryContext = createContext(initialContext);
export const PageHistoryDispatchContext = createContext(dispatch);

export type Action =
  | { type: "ADD_TO_HISTORY"; payload: string }
  | { type: "BACK_TO_HISTORY"; payload: string };

export const historyReducer = (state: PageHistoryState, action: Action) => {
  switch (action.type) {
    case "ADD_TO_HISTORY": //Adds the current page to the list.
      if (action.payload !== state.pages[state.pages.length - 1]) {
        //Checks if it's already added.
        return {
          ...state,
          pages: [...state.pages, action.payload],
        };
      } else {
        return { ...state, ...state.pages };
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

export function NewVisit(dispatch: React.Dispatch<Action>, page: string) {
  dispatch({ type: "ADD_TO_HISTORY", payload: page });
}

export const goBack = (dispatch: React.Dispatch<Action>, page: string) => {
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
