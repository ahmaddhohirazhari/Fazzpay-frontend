import React from "react";
import axiosServer from "../../utils/axiosServer";
import Layout from "../../layout";
import cookies from "next-cookies";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";

export async function getServerSideProps(context) {
  try {
    const dataCookies = cookies(context);
    const params = context.query;
    const page = !params?.page ? 1 : params.page;
    const search = !params?.search ? "" : params.search;
    const sort = !params?.sort ? "firstName ASC" : params.sort;
    const result = await axiosServer.get(
      `user?page=${page}&limit=5&search=${search}&sort=${sort}`,
      {
        headers: {
          Authorization: `Bearer ${dataCookies.token}`,
        },
      }
    );
    return {
      props: {
        data: result.data.data,
        pagination: result.data.pagination,
        sort,
      },
    };
  } catch (error) {
    return {
      redirect: {
        destination:
          error.response?.status === 403
            ? "/auth/login"
            : `/error?msg=${error.response?.data.msg}`,
        permanent: false,
      },
    };
  }
}

export default function Transfer(props) {
  const router = useRouter();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.data);

  //SET DATA SELECT RECIVER
  const [selectedReceiver, setReceiver] = useState({});
  const [formTransfer, setFormTransfer] = useState({
    receiverId: "",
    amount: 0,
    notes: "",
  });
  const [transactionId, setTransactionId] = useState("");
  const [search, setSearch] = useState("");

  // CONDITION BUTTON BEFORE FILLED
  const [isFormFilled, setIsFormFilled] = useState(false);

  // BUTTON BEFORE CONFIRM
  const [isConfirmed, setIsConfirmed] = useState(false);

  //SET FORM PIN
  const [pin, setPin] = useState({
    pin1: "",
    pin2: "",
    pin3: "",
    pin4: "",
    pin5: "",
    pin6: "",
  });
  const isAllFormFilled = Object.keys(pin).every((el) => pin[el]);

  const users = props.data;
  const pagination = props.pagination;
  const sort = props.sort;

  return <Layout></Layout>;
}
