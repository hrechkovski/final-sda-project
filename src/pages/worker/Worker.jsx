export const Worker = ({ worker }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Salary</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{worker.id}</td>
            <td>{worker.name}</td>
            <td>{worker.surname}</td>
            <td>{worker.salary}</td>
            <td>{worker.status}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
