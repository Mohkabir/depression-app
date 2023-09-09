import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/sign-in";
import CreateAccount from "./pages/create-account";
import Home from "./pages/home";
import Questions from "./pages/questions";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="create-account" element={<CreateAccount />} />
          <Route path="home" element={<Home />} />
          <Route path="questions" element={<Questions />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
