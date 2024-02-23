import { Search } from "../search/Search";
import { WorkersFullList } from "../workersFullList/WorkersFullList";

export const Home = () => {
  return (
    <>
      <h1>List of current workers in Radpol</h1>
      <Search />
      <WorkersFullList />
    </>
  );
};
