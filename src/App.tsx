import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderBar from "./shared/Header";
import HomeCitySections from "./pages/Home/HomePage";
import CityPage from "./pages/City/CityPage";

function App() {
  return (
    <BrowserRouter>
      <HeaderBar />
      <Routes>
        <Route path="/" element={<HomeCitySections />} />
        <Route path="/city/:cityId" element={<CityPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
