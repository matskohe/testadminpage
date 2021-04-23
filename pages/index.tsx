import { GetServerSideProps } from "next";
import { prisma } from '../lib/db'
import { Table } from '../components/molecules/Table'

const PAGE_TITLE = "dashboard";
const TABLE_HEAD = ["id", "Name", "Email", "Content", "Datetime"];
const RENEW = "更新";

type Props = {
  contacts: [];
};

export const Home: React.FC<Props> = (props) => {
  const { contacts } = props;
  return (
    <div>
      <div className="container">
        <div className="wrapper">
          <div className="top">
            <h1>{PAGE_TITLE}</h1>
            <button className="button">{RENEW}</button>
          </div>
          <div className="main">
            <Table TABLE_HEAD={TABLE_HEAD} tds={contacts}/>
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
        .contact_table {
          table-layout: fixed;
          max-height: 48rem;
          margin: 5rem auto;
        }

        th,
        td {
          max-height: 6rem;
          padding: 2rem 3rem;
          border: 0.1rem solid rgba(69, 71, 81, 0.16);
        }
        th:first-of-type,
        td:first-of-type {
          border-left-width: 0;
        }
        th:last-of-type,
        td:last-of-type {
          border-right-width: 0;
        }
      `}</style>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const allUsers = await prisma.testuser.findMany();
  const contacts = JSON.parse(JSON.stringify(allUsers));
  return {
    props: { contacts },
  };
};

export default Home;
