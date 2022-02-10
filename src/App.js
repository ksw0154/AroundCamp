import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import KakaoAuth from "./components/Login/KakaoLogin/KakaoAuth";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/oauth/callback/kakao" element={<KakaoAuth />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
