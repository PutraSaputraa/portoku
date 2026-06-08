import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard, { ProjectDetail } from "./dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/project/:slug" element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
