import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landingpage from "./pages/Landingpage";
import Masuk from "./pages/Masuk";
import Daftar from "./pages/Daftar";
import Event from "./pages/Event";
import LupaPassword from "./pages/LupaPassword";
import Permainan from "./pages/Permainan";
import DetailSimulasi from "./pages/DetailSimulasi";
import DetailEvent from "./pages/DetailEvent";
import RequireAuth from "./components/RequireAuth";
import TambahAcara from "./pages/TambahAcara";
import TambahSimulasi from "./pages/TambahSimulasi";
import TambahForum from "./pages/TambahForum";
import UbahAcara from "./pages/UbahAcara";
import UbahSimulasi from "./pages/UbahSimulasi";
import UbahForum from "./pages/UbahForum";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/signin" element={<Masuk />} />
          <Route path="/signup" element={<Daftar />} />
          <Route path="/forgot-password" element={<LupaPassword />} />

          {/* EVENT */}
          <Route path="/event">
            <Route path="" element={<Event />} />
            <Route path=":id" element={<DetailEvent />} />
          </Route>

          <Route path="/tambah-acara" element={<TambahAcara />} />
          <Route path="/ubah-acara" element={<UbahAcara />} />

          {/* PERMAINAN */}
          <Route path="/permainan">
            <Route path=":id" element={<DetailSimulasi />}></Route>
            <Route path="" index element={<Permainan />} />
          </Route>
          <Route path="/tambah-simulasi" element={<TambahSimulasi />} />
          <Route path="/ubah-simulasi" element={<UbahSimulasi />} />

          {/* FORUM */}
          <Route path="/tambah-forum" element={<TambahForum />} />
          <Route path="/ubah-forum" element={<UbahForum />} />

          <Route element={<RequireAuth />}>
            <Route path="/event" element={<Event />} />
            <Route path="/permainan" element={<Permainan />} />
            <Route path="/detailevent" element={<DetailEvent />} />
            <Route path="/tambah-acara" element={<TambahAcara />} />
            <Route path="/tambah-simulasi" element={<TambahSimulasi />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
