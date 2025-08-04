import { Routes, Route } from "react-router-dom";
import DummyLogin from "./DummyLogin";
import DashboardPage from "./DashboardPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DummyLogin />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      {/* baki routes gulo */}
    </Routes>
  );
}

export default App;
