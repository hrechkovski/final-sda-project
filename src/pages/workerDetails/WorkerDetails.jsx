import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export const WorkerDetails = () => {
  const { id } = useParams();
  const [workerInfoDetails, setWorkerInfoDetails] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/workers/${id}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Oops! There is an error, sorry.");
        }
      })
      .then((data) => {
        setWorkerInfoDetails(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  if (workerInfoDetails === null) {
    return <article>Loading...</article>;
  }
  return (
    <div>
      <h1>
        Information about {workerInfoDetails.name} {workerInfoDetails.surname}
      </h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Salary</th>
            <th>Status</th>
            <th>Birth Date</th>
            <th>City</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{workerInfoDetails.id}</td>
            <td>{workerInfoDetails.name}</td>
            <td>{workerInfoDetails.surname}</td>
            <td>{workerInfoDetails.salary}</td>
            <td>{workerInfoDetails.status}</td>
            <td>{workerInfoDetails.birthDate}</td>
            <td>{workerInfoDetails.city}</td>
            <td>{workerInfoDetails.phoneNumber}</td>
          </tr>
        </tbody>
      </table>
      <div>
        <Link to="/" role="button">
          Go back
        </Link>
      </div>
    </div>
  );
};
