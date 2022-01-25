const initialState = {
  title: "CRM",
};

export const pageReducer = (state: any = initialState, action?: any) => {
  switch (action.type) {
    case "CHANGE_TITLE":
      return {
        ...state,
        title: action.payload.title,
      };
    default:
      return state;
  }
};
