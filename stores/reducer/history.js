const initialState = {
  data: {},
  isLoading: false,
  isError: false,
  message: "",
};

const history = (state = initialState, action) => {
  switch (action.type) {
    case "SET_HISTORY_NOTIF_PENDING":
      return {
        ...state,
        data: {},
      };
    case "SET_HISTORY_NOTIF_FULLFILED":
      return {
        ...state,
        data: action.payload.data.data,
      };
    case "SET_HISTORY_NOTIF_REJECTED":
      return {
        ...state,
        data: {},
      };
    default: {
      return state;
    }
  }
};

export default history;
