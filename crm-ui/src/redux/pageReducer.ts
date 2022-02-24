const initialState = {
  title: "CRM",
  user: undefined,
};

export const pageReducer = (state: any = initialState, action?: any) => {
  switch (action.type) {
    case "CHANGE_TITLE":
      return {
        ...state,
        title: action.payload.title,
      };
    case "CHANGE_USER":
      return {
        ...state,
        user: action.payload.user,
      };
    default:
      return state;
  }
};
