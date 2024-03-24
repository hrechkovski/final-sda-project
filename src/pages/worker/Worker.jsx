import { Link } from "react-router-dom";

export const Worker = (props) => {
  const { worker } = props;
  return (
    <tbody>
      <tr>
        <td>{worker.id}</td>
        <td>{worker.name}</td>
        <td>{worker.surname}</td>
        <td>{worker.salary}</td>
        <td>{worker.status}</td>
        <td>
          <Link to={`/workers/${worker.id}`}>Show details</Link>
        </td>
      </tr>
    </tbody>
  );
};
