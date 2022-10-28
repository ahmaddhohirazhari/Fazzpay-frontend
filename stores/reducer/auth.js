const initialState = {
  data: {},
  isLoading: false,
  isError: false,
  message: "",
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_PENDING": {
      return {
        ...state,
        data: {},
        isLoading: false,
        isError: false,
        message: "",
      };
    }
    case "LOGIN_FULFILLED": {
      return {
        ...state,
        data: action.payload.data.data,
        isLoading: false,
        isError: false,
        message: action.payload.data.msg,
      };
    }
    case "LOGIN_REJECTED": {
      return {
        ...state,
        data: {},
        isLoading: false,
        isError: true,
        message: action.payload.response.data.msg,
      };
    }
    default: {
      return state;
    }
  }
};

export default auth;
