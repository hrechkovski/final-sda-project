export const Worker = ({ worker }) => {
  return (
    <tbody>
      <tr>
        <td>{worker.id}</td>
        <td>{worker.name}</td>
        <td>{worker.surname}</td>
        <td>{worker.salary}</td>
        <td>{worker.status}</td>
      </tr>
    </tbody>
  );
};
