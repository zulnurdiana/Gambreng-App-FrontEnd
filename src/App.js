import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landingpage from "./pages/Landingpage";
import Masuk from "./pages/Masuk";
import Daftar from "./pages/Daftar";
import Event from "./pages/Event";
import LupaPassword from "./pages/LupaPassword";
import Permainan from "./pages/Permainan";
import DetailEvent from "./pages/DetailEvent";
import RequireAuth from "./components/RequireAuth";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/signin" element={<Masuk />} />
          <Route path="/signup" element={<Daftar />} />
          <Route path="/forgot-password" element={<LupaPassword />} />
          <Route element={<RequireAuth/>}>
            <Route path="/event" element={<Event />} />
            <Route path="/permainan" element={<Permainan />} />
            <Route path="/detailevent" element={<DetailEvent />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
