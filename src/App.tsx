import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";

import "./assets/styles/global.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
    </Routes>
  );
}

export default App;
