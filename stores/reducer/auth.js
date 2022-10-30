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
        isLoading: true,
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
    case "LOGOUT_PENDING": {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case "LOGOUT_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: {},
        msg: action.payload.data.msg,
      };
    }
    case "LOGOUT_REJECTED": {
      return {
        ...state,
        isError: true,
        isLoading: false,
        msg: action.payload.response.data.msg,
      };
    }
    case "FORGOT_PASSWORD_USER_PENDING": {
      return {
        ...state,
        data: {},
        isLoading: false,
        isError: false,
        message: "",
      };
    }
    case "FORGOT_PASSWORD_USER_FULFILLED": {
      return {
        ...state,
        data: action.payload.data.data,
        isLoading: false,
        isError: false,
        message: action.payload.data.msg,
      };
    }
    case "FORGOT_PASSWORD_USER_REJECTED": {
      return {
        ...state,
        data: {},
        isLoading: false,
        isError: true,
        message: action.payload.response.data.msg,
      };
    }
    case "RESET_PASSWORD_USER_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: false,
        message: "",
      };

    case "RESET_PASSWORD_USER_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        message: action.payload.data.msg,
      };

    case "RESET_PASSWORD_USER_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        message: action.payload.response.data.msg,
      };
    default: {
      return state;
    }
  }
};

export default auth;
