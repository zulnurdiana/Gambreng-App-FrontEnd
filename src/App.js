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
import UbahForum from "./pages/UbahForum";
import VerificationPage from "./pages/verifikasi/VerificationPage";
import GantiPassword from "./pages/GantiPassword";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/signin" element={<Masuk />} />
          <Route path="/signup" element={<Daftar />} />
          <Route path="/password/verify/:token/:userId" element={<GantiPassword />} />
          <Route path="/account/verify/:token/:userId" element={<VerificationPage />} />
          <Route path="/forgot-password" element={<LupaPassword />} />

          {/* EVENT */}
          <Route path="/event">
            <Route path="" element={<Event />} />
            <Route path=":id" element={<DetailEvent />} />
            <Route element={<RequireAuth adminOnly />}>
              <Route path=":id/edit" element={<TambahAcara />} />
            </Route>
          </Route>
          <Route path="/tambah-acara" element={<TambahAcara />} />

          {/* PERMAINAN */}
          <Route path="/permainan">
            <Route path=":id" element={<DetailSimulasi />}></Route>
            <Route path="" index element={<Permainan />} />
            <Route element={<RequireAuth adminOnly />}>
              <Route path=":id/edit" element={<TambahSimulasi />} />
            </Route>
          </Route>
          <Route path="/tambah-simulasi" element={<TambahSimulasi />} />

          {/* FORUM */}

          <Route element={<RequireAuth adminOnly />}>
            <Route path="/tambah-forum" element={<TambahForum />} />
            <Route path="/ubah-forum" element={<UbahForum />} />
            <Route path="/tambah-acara" element={<TambahAcara />} />
            <Route path="/tambah-simulasi" element={<TambahSimulasi />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
