import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderBar from "./shared/Header";
import HomeCitySections from "./pages/Home/HomePage";
import CityPage from "./pages/City/CityPage";
import NotFound from "./pages/NotFound";
import Favorites from "./pages/Favorites/Favorites";
import AuthModal from "./pages/auth/AuthModal";
function App() {
  return (
    <BrowserRouter>
      <HeaderBar />
      <AuthModal />
      <Routes>
        <Route path="/" element={<HomeCitySections />} />
        <Route path="/city/:cityId" element={<CityPage />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
