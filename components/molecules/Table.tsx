import { format } from "date-fns";

type TableProps = {
  TABLE_HEAD: string[];
  tds: string[];
};

export const Table: React.FC<TableProps> = (props: TableProps) => {
  const { TABLE_HEAD, tds } = props;
  return (
    <div className="main">
      <table className="contact_table">
        <thead>
          <tr className="table_head">
            {TABLE_HEAD.map((thead) => (
              <th key={thead}>{thead}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tds.map((tableData) => (
            <tr key={tableData.id}>
              {Object.values(tableData).map((value, index) => (
                <td key={index}>
                  {/* datetimeの文字列(20XX-XX-XXTXX:XX:XX.XXXZ)なら変換 */}
                  {/20[0-9]{2}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}.[0-9]{3}Z/.test(
                    value
                  )
                    ? format(new Date(value), "yyyy-MM-dd kk:mm")
                    : value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <style jsx>{`
        .contact_table {
          table-layout: fixed;
          max-height: 48rem;
          margin: 5rem 10rem;
          max-width: 80rem;
          width: 80%;
        }

        th,
        td {
          padding: 1rem 3rem;
          max-height: 6rem;
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
        td {
          overflow: hidden;
          text-overflow: ellipsis;
        }
      `}</style>
    </div>
  );
};
