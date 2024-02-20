import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { WorkerDetails } from "./pages/workerDetails/WorkerDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/workers/:id" element={<WorkerDetails />} />
    </Routes>
  );
}

export default App;
