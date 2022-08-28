import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Sidebar from "./component/Sidebar/Sidebar";
import DocAppoint from "./pages/DocAppoint/DocAppoint";
import Login from "./pages/Login/Login";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="appointments" element={<DocAppoint />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
