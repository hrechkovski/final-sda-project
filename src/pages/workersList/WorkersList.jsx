import { useEffect, useState } from "react";
import { Worker } from "../worker/Worker";

export const WorkersList = () => {
  const [workersData, setWorkersData] = useState([]);
  const workersElements = workersData.map((worker) => (
    <Worker key={worker.id} worker={worker} />
  ));

  useEffect(() => {
    fetch("http://localhost:8000/workers")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong!");
        }
      })
      .then((data) => {
        setWorkersData(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Salary</th>
            <th>Status</th>
            <th>Details</th>
          </tr>
        </thead>
        {workersElements}
      </table>
    </>
  );
};
