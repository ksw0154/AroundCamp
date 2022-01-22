import "./App.css";
import Login from "./components/Login/Login";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import KakaoAuth from "./components/Login/KakaoLogin/KakaoAuth";
import KakaoMap from "./components/LandingPage/KakaoMap";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<KakaoMap />} />
        <Route path="/login" element={<Login />} />
        <Route path="/oauth/callback/kakao" element={<KakaoAuth />} />
      </Routes>
    </div>
  );
}

export default App;
