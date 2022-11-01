import axios from "../../utils/axios";

export const History = () => {
  return {
    type: "SET_HISTORY_NOTIF",
    payload: axios.get(`/transaction/history?page=1&limit=5&filter=WEEK`),
  };
};
