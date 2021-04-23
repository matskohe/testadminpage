import useSWR from "swr";
import { Table } from "../components/molecules/Table";

const PAGE_TITLE = "dashboard";
const TABLE_HEAD = ["id", "Name", "Email", "Content", "Datetime"];
const RENEW = "更新";

export const Csr = () => {
  const { data, error } = useSWR("./api/contacts/getAllContacts");
  if (error) return <div>failed to load</div>;
  if (!data) return (
    <div>
      <div className="container">
        <div className="wrapper">
          <div className="top">
            <h1>{PAGE_TITLE}</h1>
            <button className="button">{RENEW}</button>
          </div>
          <div className="main">is loading...</div>
        </div>
      </div>
    </div>
  )
  return (
    <div>
      <div className="container">
        <div className="wrapper">
          <div className="top">
            <h1>{PAGE_TITLE}</h1>
            <button className="button">{RENEW}</button>
          </div>
          <div className="main">
            <Table TABLE_HEAD={TABLE_HEAD} tds={data} />
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          display: grid;
          justify-content: center;
        }
        .wrapper {
          max-width: 117rem;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
        }
        .top {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .button {
          height: 3rem;
          width: 10rem;
        }
      `}</style>
    </div>
  );
};

export default Csr;
