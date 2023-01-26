import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthContext from "./contexts/AuthContext";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import ConfirmationPage from "./pages/ConfirmationPage";

function App() {
  const [token, setToken] = useState("");

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/confirmation" element={<ConfirmationPage/>}/>
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
