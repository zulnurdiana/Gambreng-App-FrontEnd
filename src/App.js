import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landingpage from "./pages/Landingpage";
import Masuk from "./pages/Masuk";
import Daftar from "./pages/Daftar";
import Event from "./pages/Event";
import Permainan from "./pages/Permainan";
import Dakon from "./pages/Dakon";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/signin" element={<Masuk />} />
          <Route path="/signup" element={<Daftar />} />
          <Route path="/event" element={<Event />} />
          <Route path="/permainan" element={<Permainan />} />
          <Route path="/dakon" element={<Dakon />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
