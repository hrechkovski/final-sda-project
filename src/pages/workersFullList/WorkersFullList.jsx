import { useEffect, useState, useContext } from "react";
import { Worker } from "../worker/Worker";
import { SearchWorkersContext } from "../context/SearchWorkersContext";

export const WorkersFullList = () => {
  const [workersData, setWorkersData] = useState([]);
  const { searchPhrase } = useContext(SearchWorkersContext);
  const workersToDisplay =
    searchPhrase.length === 0
      ? workersData
      : workersData.filter(
          (workerData) =>
            workerData.name
              .toLocaleLowerCase()
              .match(searchPhrase.toLocaleLowerCase()) ||
            workerData.surname
              .toLocaleLowerCase()
              .match(searchPhrase.toLocaleLowerCase()) ||
            workerData.status
              .toLocaleLowerCase()
              .match(searchPhrase.toLocaleLowerCase())
        );
  const workersElements = workersToDisplay.map((worker) => (
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
