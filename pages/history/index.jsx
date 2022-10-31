import React from "react";
import Layout from "../../layout";
import Link from "next/link";
import HistoryCard from "components/historyCard";
import axiosServer from "../../utils/axiosServer";
import cookies from "next-cookies";
import ReactPaginate from "react-paginate";
import { useRouter } from "next/router";

export async function getServerSideProps(context) {
  try {
    const params = context.query;
    const page = !params?.page ? 1 : params.page;
    const dataCookies = cookies(context);
    const historyDashboard = await axiosServer.get(
      `/transaction/history?page=${page}&limit=5&filter=MONTH`,
      {
        headers: {
          Authorization: `Bearer ${dataCookies.token}`,
        },
      }
    );
    return {
      props: {
        historyDashboard: historyDashboard.data.data,
        pagination: historyDashboard.data.pagination,
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

export default function History(props) {
  const router = useRouter();
  const histories = props.historyDashboard;
  const pagination = props.pagination;
  const handlePagination = (e) => {
    router.push(`history/?page=${e.selected + 1}`);
  };
  return (
    <Layout title={"History"}>
      <div
        className="scrollable-wrapper p-1  top-0 bottom-0 start-0 end-0 "
        style={{ margin: "100px", width: "120%", marginLeft: "-100px" }}
      >
        <div className="bg-white rounded shadow px-4 pt-3 pb-1 h-100 overflow-hidden">
          <div className="mb-4 d-flex justify-content-between align-items-start">
            <h2 className="fs-5 fw-bold">Transaction History</h2>
            <Link href="/history">
              <a className="text-primary fw-semibold">See all</a>
            </Link>
          </div>
          {histories.map((history) => (
            <div key={history.id}>
              <HistoryCard data={history} />
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-center">
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            breakLabel={"..."}
            pageCount={pagination.totalPage}
            onPageChange={handlePagination}
            containerClassName={"pagination mb-0 mt-3"}
            pageClassName={"page-item px-1"}
            pageLinkClassName={"page-link rounded"}
            previousClassName={"page-item visually-hidden"}
            previousLinkClassName={"page-link"}
            nextClassName={"page-item visually-hidden"}
            nextLinkClassName={"page-link"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
            activeLinkClassName={"text-white shadow"}
          />
        </div>
      </div>
    </Layout>
  );
}
