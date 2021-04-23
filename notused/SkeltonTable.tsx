import Skeleton from "react-loading-skeleton";

type SkeletonTableProps = {
  TABLE_HEAD: string[];
};

export const SkeletonTable: React.FC<SkeletonTableProps> = (
  props: SkeletonTableProps
) => {
  const { TABLE_HEAD } = props;
  return (
    <div className="main">
      <table className="contact_table">
        <thead>
          <tr className="table_head">
            {TABLE_HEAD.map((index) => (
              <th key={index}>
                <Skeleton />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {TABLE_HEAD.map((index) => (
              <td key={index}>
                <Skeleton />
              </td>
            ))}
          </tr>
          <tr>
            {TABLE_HEAD.map((index) => (
              <td key={index}>
                <Skeleton />
              </td>
            ))}
          </tr>
          <tr>
            {TABLE_HEAD.map((index) => (
              <td key={index}>
                <Skeleton />
              </td>
            ))}
          </tr>
          <tr>
            {TABLE_HEAD.map((index) => (
              <td key={index}>
                <Skeleton />
              </td>
            ))}
          </tr>
          <tr>
            {TABLE_HEAD.map((index) => (
              <td key={index}>
                <Skeleton />
              </td>
            ))}
          </tr>
          <tr>
            {TABLE_HEAD.map((index) => (
              <td key={index}>
                <Skeleton />
              </td>
            ))}
          </tr>
          <tr>
            {TABLE_HEAD.map((index) => (
              <td key={index}>
                <Skeleton />
              </td>
            ))}
          </tr>
        </tbody>
      </table>
      <style jsx>{`
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
