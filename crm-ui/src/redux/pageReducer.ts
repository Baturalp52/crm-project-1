const initialState = {
  title: "CRM",
};

export const pageReducer = (state: any = initialState, action?: any) => {
  switch (action.type) {
    case "CHANGE_TITLE":
      return {
        ...state,
        headerTitle: action.payload.headerTitle,
        pageTitle: action.payload.pageTitle,
      };
    default:
      return state;
  }
};
