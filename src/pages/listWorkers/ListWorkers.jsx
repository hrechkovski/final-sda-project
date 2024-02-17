import { useEffect, useState } from "react";
import { Worker } from "../worker/Worker";

export const ListWorkers = () => {
  const [workers, setWorkers] = useState([]);
  // const workers = [];
  // const setWorkers = () => {};
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
        setWorkers(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <article>
      {workers.map((worker) => (
        <Worker key={worker.id} worker={worker} />
      ))}
    </article>
  );
};
